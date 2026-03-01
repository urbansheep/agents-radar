/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   ANTHROPIC_API_KEY   - API key (Anthropic or Kimi Code)
 *   ANTHROPIC_BASE_URL  - Endpoint override (e.g. https://api.kimi.com/coding/)
 *   ANTHROPIC_MODEL     - Model name (default: claude-sonnet-4-6)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 */

import {
  type RepoConfig,
  type GitHubItem,
  type GitHubRelease,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
  buildWebReportPrompt,
  buildTrendingPrompt,
} from "./prompts.ts";
import { callLlm, saveFile, autoGenFooter } from "./report.ts";
import { loadWebState, saveWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";

// ---------------------------------------------------------------------------
// Repo config
// ---------------------------------------------------------------------------

/** AI CLI tools — included in per-tool digests and cross-tool comparison. */
const CLI_REPOS: RepoConfig[] = [
  { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" },
  { id: "codex", repo: "openai/codex", name: "OpenAI Codex" },
  { id: "gemini-cli", repo: "google-gemini/gemini-cli", name: "Gemini CLI" },
  { id: "kimi-cli", repo: "MoonshotAI/kimi-cli", name: "Kimi Code CLI" },
  { id: "opencode", repo: "anomalyco/opencode", name: "OpenCode" },
  { id: "qwen-code", repo: "QwenLM/qwen-code", name: "Qwen Code" },
];

/** OpenClaw — high-volume project tracked separately with its own prompt. */
const OPENCLAW: RepoConfig = {
  id: "openclaw",
  repo: "openclaw/openclaw",
  name: "OpenClaw",
  paginated: true,
};

/** Peer projects in the personal AI assistant / agent space — tracked for cross-ecosystem comparison. */
const OPENCLAW_PEERS: RepoConfig[] = [
  { id: "zeroclaw", repo: "zeroclaw-labs/zeroclaw", name: "Zeroclaw" },
  { id: "easyclaw", repo: "gaoyangz77/easyclaw", name: "EasyClaw" },
  { id: "lobsterai", repo: "netease-youdao/LobsterAI", name: "LobsterAI" },
  { id: "zeptoclaw", repo: "qhkm/zeptoclaw", name: "ZeptoClaw" },
  { id: "nanobot", repo: "HKUDS/nanobot", name: "NanoBot", paginated: true },
  { id: "picoclaw", repo: "sipeed/picoclaw", name: "PicoClaw", paginated: true },
  { id: "nanoclaw", repo: "qwibitai/nanoclaw", name: "NanoClaw" },
  { id: "ironclaw", repo: "nearai/ironclaw", name: "IronClaw" },
  { id: "tinyclaw", repo: "TinyAGI/tinyclaw", name: "TinyClaw" },
];

/** Claude Code Skills — trending skills tracked separately, no date filter. */
const CLAUDE_SKILLS_REPO = "anthropics/skills";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RepoFetch {
  cfg: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS];
  console.log(`  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web`);

  const [fetched, skillsData, webResults, trendingData] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        const [issuesRaw, prs, releases] = await Promise.all([
          fetchRecentItems(cfg, "issues", since),
          fetchRecentItems(cfg, "pulls", since),
          fetchRecentReleases(cfg.repo, since),
        ]);
        const issues = issuesRaw.filter((i) => !i.pull_request);
        console.log(
          `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
        );
        return { cfg, issues, prs, releases };
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO).then((d) => {
      console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
      return d;
    }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
  ]);

  return { fetched, skillsData, webResults, trendingData };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
): Promise<{
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  trendingSummary: string;
}> {
  const [cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary] = await Promise.all([
    Promise.all(
      fetchedCli.map(async ({ cfg, issues, prs, releases }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: "Активности за 24 часа нет." };
        }
        console.log(`  [${cfg.id}] Calling LLM for summary...`);
        try {
          const summary = await callLlm(buildCliPrompt(cfg, issues, prs, releases, dateStr));
          return { config: cfg, issues, prs, releases, summary };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: "⚠️ Ошибка генерации сводки." };
        }
      }),
    ),
    (async () => {
      const { cfg, issues, prs, releases } = fetchedOpenclaw;
      const hasData = issues.length || prs.length || releases.length;
      if (!hasData) {
        console.log(`  [openclaw] No activity, skipping LLM call`);
        return "Активности за 24 часа нет.";
      }
      console.log(`  [openclaw] Calling LLM for OpenClaw report...`);
      try {
        return await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr, 50, 30));
      } catch (err) {
        console.error(`  [openclaw] LLM call failed: ${err}`);
        return "⚠️ Ошибка генерации сводки.";
      }
    })(),
    (async () => {
      console.log("  [claude-code-skills] Calling LLM for skills report...");
      try {
        return await callLlm(buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr));
      } catch (err) {
        console.error(`  [claude-code-skills] LLM call failed: ${err}`);
        return "⚠️ Ошибка генерации сводки Skills.";
      }
    })(),
    Promise.all(
      fetchedPeers.map(async ({ cfg, issues, prs, releases }): Promise<RepoDigest> => {
        const hasData = issues.length || prs.length || releases.length;
        if (!hasData) {
          console.log(`  [${cfg.id}] No activity, skipping LLM call`);
          return { config: cfg, issues, prs, releases, summary: "Активности за 24 часа нет." };
        }
        console.log(`  [${cfg.id}] Calling LLM for peer summary...`);
        try {
          return {
            config: cfg,
            issues,
            prs,
            releases,
            summary: await callLlm(buildPeerPrompt(cfg, issues, prs, releases, dateStr)),
          };
        } catch (err) {
          console.error(`  [${cfg.id}] LLM call failed: ${err}`);
          return { config: cfg, issues, prs, releases, summary: "⚠️ Ошибка генерации сводки." };
        }
      }),
    ),
    (async () => {
      const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
      if (!hasData) return "⚠️ Данные трендов недоступны, отчёт не сгенерирован.";
      console.log("  [trending] Calling LLM for trending report...");
      try {
        return await callLlm(buildTrendingPrompt(trendingData, dateStr), 6144);
      } catch (err) {
        console.error(`  [trending] LLM call failed: ${err}`);
        return "⚠️ 趋势报告生成失败。";
      }
    })(),
  ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Report content builders
// ---------------------------------------------------------------------------

function buildCliReportContent(
  cliDigests: RepoDigest[],
  skillsSummary: string,
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
): string {
  const repoLinks =
    cliDigests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n") +
    `\n- [Claude Code Skills](https://github.com/${CLAUDE_SKILLS_REPO})`;

  const toolSections = cliDigests
    .map((d) => {
      const skillsSection =
        d.config.id === "claude-code"
          ? `## Горячие Skills Claude Code\n\n> Источник: [anthropics/skills](https://github.com/${CLAUDE_SKILLS_REPO})\n\n${skillsSummary}\n\n---\n\n`
          : "";
      return [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        skillsSection + d.summary,
        ``,
        `</details>`,
      ].join("\n");
    })
    .join("\n\n");

  return (
    `# Дайджест AI CLI-инструментов ${dateStr}\n\n` +
    `> Сгенерировано: ${utcStr} UTC | Инструментов: ${cliDigests.length}\n\n` +
    `${repoLinks}\n\n` +
    `---\n\n` +
    `## Сравнительный анализ\n\n` +
    comparison +
    `\n\n---\n\n` +
    `## Детальные отчёты по инструментам\n\n` +
    toolSections +
    footer
  );
}

function buildOpenclawReportContent(
  fetchedOpenclaw: RepoFetch,
  peerDigests: RepoDigest[],
  openclawSummary: string,
  peersComparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
): string {
  const { issues, prs } = fetchedOpenclaw;

  const peersRepoLinks =
    `- [OpenClaw](https://github.com/${OPENCLAW.repo})\n` +
    OPENCLAW_PEERS.map((p) => `- [${p.name}](https://github.com/${p.repo})`).join("\n");

  const peerDetailSections = peerDigests
    .map((d) =>
      [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n"),
    )
    .join("\n\n");

  return (
    `# Дайджест экосистемы OpenClaw ${dateStr}\n\n` +
    `> Issues: ${issues.length} | PRs: ${prs.length} | Проектов: ${1 + OPENCLAW_PEERS.length} | Сгенерировано: ${utcStr} UTC\n\n` +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    `## Детальный отчёт OpenClaw\n\n` +
    openclawSummary +
    `\n\n---\n\n` +
    `## Сравнение экосистемы\n\n` +
    peersComparison +
    `\n\n---\n\n` +
    `## Отчёты смежных проектов\n\n` +
    peerDetailSections +
    footer
  );
}

// ---------------------------------------------------------------------------
// Report savers (LLM call + file save + optional GitHub issue)
// ---------------------------------------------------------------------------

async function saveWebReport(
  webResults: WebFetchResult[],
  webState: WebState,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
): Promise<void> {
  const hasNewContent = webResults.some((r) => r.newItems.length > 0);

  if (hasNewContent) {
    console.log("  [web] Calling LLM for web content report...");
    try {
      const webSummary = await callLlm(buildWebReportPrompt(webResults, dateStr), 8192);
      const isFirstRun = webResults.some((r) => r.isFirstRun);
      const mode = isFirstRun ? "первичный полный сбор" : "обновление за сегодня";
      const totalNew = webResults.reduce((sum, r) => sum + r.newItems.length, 0);

      const webContent =
        `# Отчёт официального AI-контента ${dateStr}\n\n` +
        `> ${mode} | новых материалов: ${totalNew} | сгенерировано: ${utcStr} UTC\n\n` +
        `Источники данных:\n` +
        `- Anthropic: [anthropic.com](https://www.anthropic.com) — ` +
        `новых: ${webResults.find((r) => r.site === "anthropic")?.newItems.length ?? 0}` +
        ` (sitemap: ${webResults.find((r) => r.site === "anthropic")?.totalDiscovered ?? 0} URL)\n` +
        `- OpenAI: [openai.com](https://openai.com) — ` +
        `новых: ${webResults.find((r) => r.site === "openai")?.newItems.length ?? 0}` +
        ` (sitemap: ${webResults.find((r) => r.site === "openai")?.totalDiscovered ?? 0} URL)\n\n` +
        `---\n\n` +
        webSummary +
        footer;

      console.log(`  Saved ${saveFile(webContent, dateStr, "ai-web.md")}`);

      if (digestRepo) {
        const webUrl = await createGitHubIssue(
          `🌐 AI официальный контент ${dateStr}${isFirstRun ? " (первый запуск)" : ""}`,
          webContent,
          "web",
        );
        console.log(`  Created web issue: ${webUrl}`);
      }
    } catch (err) {
      console.error(`  [web] Report generation failed: ${err}`);
    }
  } else {
    console.log("  [web] No new content detected, skipping report.");
  }

  saveWebState(webState);
  console.log("  [web] State saved.");
}

async function saveTrendingReport(
  trendingData: TrendingData,
  trendingSummary: string,
  utcStr: string,
  dateStr: string,
  digestRepo: string,
  footer: string,
): Promise<void> {
  const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
  if (!hasData) {
    console.log("  [trending] No data available, skipping report.");
    return;
  }

  const trendingContent =
    `# Дайджест трендов AI open-source ${dateStr}\n\n` +
    `> Источник: GitHub Trending + GitHub Search API | Сгенерировано: ${utcStr} UTC\n\n` +
    `---\n\n` +
    trendingSummary +
    footer;

  console.log(`  Saved ${saveFile(trendingContent, dateStr, "ai-trending.md")}`);

  if (digestRepo) {
    const trendingUrl = await createGitHubIssue(`📈 AI тренды open-source ${dateStr}`, trendingContent, "trending");
    console.log(`  Created trending issue: ${trendingUrl}`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");
  requireEnv("ANTHROPIC_API_KEY");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = new Date(now.getTime() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const utcStr = now.toISOString().slice(0, 16).replace("T", " ");
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  console.log(
    `[${now.toISOString()}] Starting digest | endpoint: ${process.env["ANTHROPIC_BASE_URL"] ?? "api.anthropic.com"}`,
  );

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const { fetched, skillsData, webResults, trendingData } = await fetchAllData(since, webState);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const fetchedCli = fetched.filter((f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id));
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));

  // 2. Generate per-repo LLM summaries in parallel
  const { cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary } =
    await generateSummaries(fetchedCli, fetchedOpenclaw, skillsData, fetchedPeers, trendingData, dateStr);

  // 3. Generate cross-repo comparisons in parallel
  console.log("  Calling LLM for CLI comparative analysis + peers comparison...");
  const openclawDigest: RepoDigest = {
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: openclawSummary,
  };
  const [comparison, peersComparison] = await Promise.all([
    callLlm(buildComparisonPrompt(cliDigests, dateStr)),
    callLlm(buildPeersComparisonPrompt(openclawDigest, peerDigests, dateStr)),
  ]);

  const footer = autoGenFooter();

  // 4. Build + save all reports
  const digestContent = buildCliReportContent(cliDigests, skillsSummary, comparison, utcStr, dateStr, footer);
  const openclawContent = buildOpenclawReportContent(
    fetchedOpenclaw,
    peerDigests,
    openclawSummary,
    peersComparison,
    utcStr,
    dateStr,
    footer,
  );

  console.log(`  Saved ${saveFile(digestContent, dateStr, "ai-cli.md")}`);
  console.log(`  Saved ${saveFile(openclawContent, dateStr, "ai-agents.md")}`);

  await saveWebReport(webResults, webState, utcStr, dateStr, digestRepo, footer);
  await saveTrendingReport(trendingData, trendingSummary, utcStr, dateStr, digestRepo, footer);

  // 5. Create GitHub issues for CLI + OpenClaw
  if (digestRepo) {
    const cliUrl = await createGitHubIssue(`📊 AI CLI дайджест ${dateStr}`, digestContent, "digest");
    console.log(`  Created CLI issue: ${cliUrl}`);

    const openclawUrl = await createGitHubIssue(
      `🦞 OpenClaw дайджест ${dateStr}`,
      openclawContent,
      "openclaw",
    );
    console.log(`  Created OpenClaw issue: ${openclawUrl}`);
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
