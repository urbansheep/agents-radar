/**
 * LLM prompt builders and item formatting.
 */

import type { RepoConfig, GitHubItem, GitHubRelease } from "./github.ts";
import type { WebFetchResult } from "./web.ts";
import type { TrendingData } from "./trending.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RepoDigest {
  config: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
  summary: string;
}

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

export function formatItem(item: GitHubItem): string {
  const labels = item.labels.map((l) => l.name).join(", ");
  const labelStr = labels ? ` [${labels}]` : "";
  const body = (item.body ?? "").replace(/\n/g, " ").trim().slice(0, 300);
  const ellipsis = (item.body ?? "").length > 300 ? "..." : "";
  return [
    `#${item.number} [${item.state.toUpperCase()}]${labelStr} ${item.title}`,
    `  Автор: @${item.user.login} | Создан: ${item.created_at.slice(0, 10)} | Обновлён: ${item.updated_at.slice(0, 10)} | Комм.: ${item.comments} | 👍: ${item.reactions?.["+1"] ?? 0}`,
    `  Ссылка: ${item.html_url}`,
    `  Описание: ${body}${ellipsis}`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Sampling helpers (shared)
// ---------------------------------------------------------------------------

const CLI_ISSUE_LIMIT = 30;
const CLI_PR_LIMIT = 20;

/** Sort by comment count desc, take top N. */
function topN(items: GitHubItem[], n: number): GitHubItem[] {
  return [...items].sort((a, b) => b.comments - a.comments).slice(0, n);
}

function sampleNote(total: number, sampled: number): string {
  return total > sampled ? `(всего ${total}, показаны топ-${sampled} по числу комментариев)` : `(всего ${total})`;
}

// ---------------------------------------------------------------------------
// Prompts
// ---------------------------------------------------------------------------

export function buildCliPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
): string {
  const sampledIssues = topN(issues, CLI_ISSUE_LIMIT);
  const sampledPrs = topN(prs, CLI_PR_LIMIT);

  const issuesText = sampledIssues.map(formatItem).join("\n") || "нет";
  const prsText = sampledPrs.map(formatItem).join("\n") || "нет";
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : "нет";

  const issueNote = sampleNote(issues.length, sampledIssues.length);
  const prNote = sampleNote(prs.length, sampledPrs.length);

  return `Ты — технический аналитик, специализирующийся на инструментах AI-разработки. На основе следующих данных GitHub сгенерируй дайджест активности сообщества ${cfg.name} за ${dateStr}.

# Источник данных: github.com/${cfg.repo}

## Последние релизы (за 24 часа)
${releasesText}

## Последние Issues (обновлены за 24 часа) ${issueNote}
${issuesText}

## Последние Pull Requests (обновлены за 24 часа) ${prNote}
${prsText}

---

Сгенерируй структурированный дайджест со следующими разделами:

1. **Обзор дня** — 2–3 предложения о наиболее важных событиях дня
2. **Релизы** — если были новые версии, кратко опиши изменения; если нет — пропусти раздел
3. **Горячие Issues** — 10 наиболее значимых Issues с пояснением, почему они важны и какова реакция сообщества
4. **Важные PR** — 10 ключевых PR с описанием функциональности или исправлений
5. **Тренды запросов** — выдели основные направления, которые волнуют сообщество (например, интеграция с IDE, производительность, поддержка новых моделей)
6. **Боли разработчиков** — суммируй частые жалобы и запросы из фидбека

Язык: русский, лаконичный и профессиональный стиль для технической аудитории. К каждому пункту прикладывай ссылку на GitHub.
`;
}

const PEER_ISSUE_LIMIT = 30;
const PEER_PR_LIMIT = 20;

export function buildPeerPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  issueLimit = PEER_ISSUE_LIMIT,
  prLimit = PEER_PR_LIMIT,
): string {
  const totalIssues = issues.length;
  const totalPrs = prs.length;

  const sampledIssues = topN(issues, issueLimit);
  const sampledPrs = topN(prs, prLimit);

  const issuesText = sampledIssues.map(formatItem).join("\n") || "нет";
  const prsText = sampledPrs.map(formatItem).join("\n") || "нет";
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : "нет";

  const openIssues = issues.filter((i) => i.state === "open").length;
  const closedIssues = issues.filter((i) => i.state === "closed").length;
  const openPrs = prs.filter((p) => p.state === "open").length;
  const mergedPrs = prs.filter((p) => p.state === "closed").length;

  const issueSampleNote = sampleNote(totalIssues, sampledIssues.length);
  const prSampleNote = sampleNote(totalPrs, sampledPrs.length);

  return `Ты — аналитик open-source проектов в области AI-агентов и персональных AI-ассистентов. На основе данных GitHub по проекту ${cfg.name} (github.com/${cfg.repo}) сгенерируй дайджест за ${dateStr}.

# Обзор данных
- Issues за 24 часа: ${totalIssues} (открыто/активно: ${openIssues}, закрыто: ${closedIssues})
- PR за 24 часа: ${totalPrs} (ожидают merge: ${openPrs}, смержено/закрыто: ${mergedPrs})
- Новых релизов: ${releases.length}

## Последние релизы
${releasesText}

## Последние Issues ${issueSampleNote}
${issuesText}

## Последние Pull Requests ${prSampleNote}
${prsText}

---

Сгенерируй структурированный дайджест проекта ${cfg.name} со следующими разделами:

1. **Обзор дня** — 3–5 предложений об общем состоянии проекта, оценка активности
2. **Релизы** — если были новые версии: подробности изменений, breaking changes, миграция; если нет — пропусти
3. **Прогресс проекта** — смерженные/закрытые PR, что продвинулось вперёд
4. **Горячие темы** — самые обсуждаемые Issues/PR (с реакцией сообщества), анализ запросов
5. **Баги и стабильность** — зафиксированные баги и сбои по степени критичности; есть ли PR с исправлениями
6. **Запросы на функции** — новые пожелания; какие из них могут войти в следующую версию
7. **Фидбек пользователей** — боли, сценарии использования, что нравится/не нравится
8. **Накопленный бэклог** — важные Issues/PR, долго остающиеся без ответа

Язык: русский, объективный и профессиональный стиль, с опорой на данные. К каждому пункту прикладывай ссылку на GitHub.
`;
}

export function buildPeersComparisonPrompt(
  openclawDigest: RepoDigest,
  peerDigests: RepoDigest[],
  dateStr: string,
): string {
  const openclawSection = `## OpenClaw (основная точка отсчёта, github.com/${openclawDigest.config.repo})\n${openclawDigest.summary}`;

  const peerSections = peerDigests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\nАктивности за 24 часа нет.`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  return `Ты — старший технический аналитик, специализирующийся на open-source экосистеме AI-агентов и персональных ассистентов. Ниже представлены дайджесты активности проектов за ${dateStr}.

${openclawSection}

---

${peerSections}

---

На основе этих данных сгенерируй сравнительный анализ со следующими разделами:

1. **Панорама экосистемы** — 3–5 предложений об общем состоянии open-source пространства AI-агентов и ассистентов
2. **Сравнение активности** — таблица с Issues, PR, релизами и оценкой здоровья каждого проекта
3. **Позиционирование OpenClaw** — преимущества, отличия технического подхода, сравнение масштаба сообщества
4. **Общие технические направления** — запросы, которые есть сразу в нескольких проектах (с указанием какие именно)
5. **Дифференциация** — ключевые различия в фокусе функций, целевой аудитории, архитектуре
6. **Зрелость и активность сообществ** — кто в стадии быстрой итерации, кто в стадии стабилизации
7. **Трендовые сигналы** — отраслевые тренды из фидбека, ценные для разработчиков AI-агентов

Язык: русский, лаконичный и профессиональный, опора на данные, для технических руководителей и разработчиков.
`;
}

export function buildSkillsPrompt(prs: GitHubItem[], issues: GitHubItem[], dateStr: string): string {
  const topPrs = topN(prs, 20);
  const topIssues = topN(issues, 15);

  const prsText = topPrs.map(formatItem).join("\n") || "нет";
  const issuesText = topIssues.map(formatItem).join("\n") || "нет";

  return `Ты — аналитик экосистемы Claude Code. Ниже данные из github.com/anthropics/skills (официальный репозиторий Claude Code Skills). Проанализируй активность сообщества по состоянию на ${dateStr}.

## О репозитории
anthropics/skills — официальная коллекция Claude Code Skills. Каждый PR обычно соответствует новому или улучшенному Skill. Через Issues сообщество предлагает идеи новых Skills или оставляет фидбек.

## Популярные Pull Requests (по числу комментариев, всего ${prs.length}, показаны первые ${topPrs.length})
${prsText}

## Issues сообщества (по числу комментариев, всего ${issues.length}, показаны первые ${topIssues.length})
${issuesText}

---

Сгенерируй отчёт о горячих темах Claude Code Skills со следующими разделами:

1. **Рейтинг популярных Skills** — 5–8 наиболее обсуждаемых Skills (PR) с описанием функции, основных обсуждений и текущего статуса (open/merged/draft)
2. **Тренды запросов сообщества** — какие новые Skills наиболее ожидаемы (по Issues): автоматизация workflow, code review, генерация тестов, документирование и т.д.
3. **Перспективные ожидающие Skills** — активно обсуждаемые PR без merge: кандидаты на ближайшее принятие
4. **Инсайт** — одно предложение: чего сообщество сейчас хочет от Skills больше всего

Язык: русский, профессиональный стиль. К каждому пункту прикладывай ссылку на GitHub.
`;
}

export function buildComparisonPrompt(digests: RepoDigest[], dateStr: string): string {
  const sections = digests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\nАктивности за 24 часа нет.`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  return `Ты — старший технический аналитик, специализирующийся на экосистеме AI CLI-инструментов. Ниже представлены дайджесты активности основных инструментов за ${dateStr}:

${sections}

---

На основе этих данных сгенерируй сравнительный анализ со следующими разделами:

1. **Панорама экосистемы** — 3–5 предложений об общем состоянии AI CLI-инструментов
2. **Сравнение активности** — таблица с Issues, PR и релизами по каждому инструменту
3. **Общие функциональные направления** — что запрашивают сразу в нескольких инструментах (с указанием каких именно)
4. **Дифференциация** — различия в фокусе, целевой аудитории, техническом подходе
5. **Зрелость и активность сообществ** — кто наиболее активен, кто в стадии быстрой итерации
6. **Трендовые сигналы** — отраслевые тренды из фидбека сообществ, ценные для разработчиков

Язык: русский, лаконичный и профессиональный, с опорой на данные, для технических руководителей и разработчиков.
`;
}

export function buildTrendingPrompt(data: TrendingData, dateStr: string): string {
  const trendingSection =
    data.trendingFetchSuccess && data.trendingRepos.length > 0
      ? data.trendingRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.totalStars.toLocaleString()}` +
              (r.todayStars > 0 ? ` (+${r.todayStars} today)` : "") +
              (r.forks > 0 ? ` 🍴${r.forks.toLocaleString()}` : "") +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : "(не удалось получить GitHub Trending за сегодня)";

  const searchSection =
    data.searchRepos.length > 0
      ? data.searchRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.stargazersCount.toLocaleString()}` +
              ` [topic:${r.searchQuery}]` +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : "(результатов нет)";

  return `Ты — аналитик open-source экосистемы в сфере AI. Ниже данные о популярных AI-репозиториях на GitHub за ${dateStr}. Отфильтруй нерелевантное, классифицируй и проанализируй тренды.

## О данных
- **Trending-список** (github.com/trending, наиболее достоверные данные о звёздах за день): актуальный рейтинг с новыми звёздами за сегодня
- **Тематический поиск** (GitHub Search API, topic-теги): активные AI-проекты за 7 дней, по темам

---

## GitHub Trending сегодня (${data.trendingRepos.length} репозиториев)
${trendingSection}

---

## Результаты тематического поиска (${data.searchRepos.length} репозиториев, дедуплицировано)
${searchSection}

---

Сгенерируй структурированный дайджест «AI Open-Source Тренды» со следующими требованиями:

**Шаг 1 (фильтрация)**: выбери только проекты, явно связанные с AI/ML. Исключи общие инструменты, frontend-фреймворки, игры и прочее нерелевантное из Trending.

**Шаг 2 (классификация)**: распредели отфильтрованные проекты по категориям (один проект может попасть в несколько, но укажи основную):
- 🔧 AI-инфраструктура (фреймворки, SDK, инференс-движки, CLI)
- 🤖 AI-агенты / workflow (агентные фреймворки, автоматизация, мульти-агентность)
- 📦 AI-приложения (вертикальные продукты, отраслевые решения)
- 🧠 Большие модели / обучение (веса моделей, обучение, файн-тюнинг)
- 🔍 RAG / базы знаний (векторные БД, retrieval-augmented generation)

**Шаг 3 (отчёт)** со следующими разделами:

1. **Обзор дня** — 3–5 предложений о наиболее заметных событиях в AI open-source

2. **Горячие проекты по категориям** — по 3–8 проектов в каждой категории, для каждого:
   - Название (со ссылкой)
   - Данные по звёздам (всего + за сегодня, если есть)
   - Одно предложение: что это и почему интересно сегодня

3. **Анализ трендов** — 200–300 слов:
   - Какие типы AI-инструментов взрывают сообщество?
   - Есть ли новые технологии или направления, впервые попавшие в топ?
   - Связь с недавними релизами моделей или отраслевыми событиями

4. **На что обратить внимание** — 3–5 конкретных проектов или направлений, достойных внимания разработчика, с кратким обоснованием

Язык: русский, профессиональный стиль. К каждому проекту обязательна ссылка на GitHub.
`;
}

export function buildWebReportPrompt(results: WebFetchResult[], dateStr: string): string {
  const isAnyFirstRun = results.some((r) => r.isFirstRun);

  const siteSections = results
    .map(({ siteName, isFirstRun, newItems, totalDiscovered }) => {
      const mode = isFirstRun
        ? `первичный полный сбор (sitemap: ${totalDiscovered} URL, ниже ${newItems.length} свежих материалов)`
        : `обновление за сегодня, ${newItems.length} новых материалов`;

      if (newItems.length === 0) return `## ${siteName}\n\n(${mode} — нет контента для анализа.)`;

      const itemsText = newItems
        .map((item) =>
          [
            `### [${item.title || item.url}](${item.url})`,
            `- Категория: ${item.category} | Опубликовано/обновлено: ${item.lastmod.slice(0, 10) || "неизвестно"}`,
            `- Фрагмент: ${item.content || "(текст недоступен)"}`,
          ].join("\n"),
        )
        .join("\n\n");

      return `## ${siteName} (${mode})\n\n${itemsText}`;
    })
    .join("\n\n---\n\n");

  const firstRunNote = isAnyFirstRun
    ? "Это первичный полный сбор — сфокусируйся на общей картине контента каждого сайта, исторической логике и ключевых темах, а не только на отдельных статьях."
    : "Это инкрементальное обновление — сфокусируйся на новом контенте и его стратегическом значении в контексте.";

  return `Ты — аналитик AI-индустрии, специализирующийся на извлечении стратегических сигналов из официальных анонсов, технических блогов, научных статей и продуктовой документации.

Ниже материалы от Anthropic (claude.com / anthropic.com) и OpenAI (openai.com) за ${dateStr}. ${firstRunNote}

${siteSections}

---

Сгенерируй детальный «Отчёт об официальном AI-контенте» со следующими разделами:

1. **Обзор дня** — 3–5 предложений о наиболее важных публикациях и событиях, ключевые инсайты

2. **Контент Anthropic / Claude** — по категориям (news / research / engineering / learn и т.д.) с разбором каждого материала:
   - 2–4 предложения с ключевыми тезисами, техническими деталями или бизнес-смыслом
   - Дата публикации и ссылка на источник
   - При первом запуске — хронология ключевых вех

3. **Контент OpenAI** — то же самое по категориям (research / release / company / safety и т.д.)

4. **Стратегические сигналы** — анализ на основе публикаций обеих компаний:
   - Текущие технические приоритеты (возможности моделей / безопасность / продуктизация / экосистема)
   - Конкурентная динамика: кто задаёт повестку, кто следует
   - Потенциальные последствия для разработчиков и корпоративных пользователей

5. **Детали и нюансы** — скрытые сигналы в заголовках, формулировках, тайминге публикаций:
   - Новые термины или темы, появившиеся впервые
   - Плотные серии публикаций (возможно, сигнализируют о продуктовом событии)
   - Движения в сторону политики, регуляторики или безопасности

${isAnyFirstRun ? "6. **Обзор контентного ландшафта** — только при первом запуске: распределение материалов по категориям, стиль контент-стратегии каждой компании (академический / продуктовый / user stories и т.д.)\n\n" : ""}Язык: русский, профессиональный и детальный стиль для исследователей, продакт-менеджеров и технических руководителей в AI. К каждому материалу обязательна ссылка.
`;
}
