# Daily Digest Workflow Documentation

This document describes the automated daily digest generation workflow and how to maintain it for future changes.

## Overview

The daily digest workflow runs every morning at **00:00 UTC (08:00 CST)** and can also be triggered manually via GitHub's "Workflow Dispatch" feature. It:

1. **Generates digests** — fetches GitHub data, web content, and trending information
2. **Creates reports** — uses Claude AI to summarize four report types
3. **Commits changes** — saves generated files and manifest to git
4. **Pushes to GitHub** — updates the remote repository, triggering GitHub Pages rebuild
5. **Publishes Issues** — creates GitHub Issues for new reports

## Workflow Structure

### File Location
- `.github/workflows/daily-digest.yml` — Main workflow definition

### Execution Timeline

| Step | Purpose | Env Vars | Duration |
|------|---------|----------|----------|
| Checkout | Clone repo at latest commit | - | ~1s |
| Setup & Install | Node 22, pnpm, dependencies | - | ~20-40s |
| Configure Git | Set bot credentials for commits | - | ~1s |
| Run daily digest | Execute `pnpm start` | GITHUB_TOKEN, ANTHROPIC_* | ~60-120s |
| Commit digests | Stage & push `digests/` folder | GITHUB_TOKEN | ~3-5s |
| Update manifest | Execute `pnpm manifest` | - | ~2-3s |
| Commit manifest | Stage & push `manifest.json` | GITHUB_TOKEN | ~3-5s |
| Verify deployment | Log status (informational) | - | ~1s |

**Total runtime:** ~90-180 seconds (1.5-3 minutes)

## Key Configuration

### Secrets Required (GitHub Settings → Secrets and variables → Actions)

| Secret | Purpose | Required |
|--------|---------|----------|
| `GITHUB_TOKEN` | Authenticate git pushes & GitHub API calls | ✓ Built-in |
| `ANTHROPIC_API_KEY` | Call Claude API for digest generation | ✓ Add manually |
| `ANTHROPIC_BASE_URL` | Optional: override Claude endpoint (default: api.anthropic.com) | ✗ |

**Setup instructions:**
1. Go to: Settings → Secrets and variables → Actions
2. For ANTHROPIC_API_KEY: Create new secret with your API key from https://console.anthropic.com
3. Optional: Add ANTHROPIC_BASE_URL if using a proxy or regional endpoint

### Environment Variables

The workflow passes these to the digest generation:

```bash
GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }}           # GitHub authentication
ANTHROPIC_BASE_URL=${{ secrets.ANTHROPIC_BASE_URL }}  # Optional: proxy URL
ANTHROPIC_API_KEY=${{ secrets.ANTHROPIC_API_KEY }}   # Anthropic authentication
DIGEST_REPO=${{ github.repository }}               # Target repo for issues (auto-populated)
```

## Understanding the Git Push Strategy

### Why `--atomic` Flag?

```bash
git push --atomic
```

The workflow uses `--atomic` for safety:
- **Atomicity:** All commits in the push succeed together, or the entire push fails
- **No partial updates:** GitHub Pages won't build from incomplete state
- **Better error detection:** Failures are reported clearly instead of silently failing some commits

### Separate Push Steps

Digests and manifest are pushed in **two separate steps** to allow partial success:

1. **Digest commit** — If digest generation has new data, commit and push
2. **Manifest commit** — If manifest changed, commit and push separately

This design prevents a digest commit from blocking manifest updates (rare but possible).

### Conditional Commits

Each step checks for changes before committing:

```bash
git add <files>
if git diff --cached --quiet; then
  echo "✓ No new files to commit"
else
  git commit -m "..."
  git push --atomic
fi
```

This prevents empty commits and keeps the git log clean.

## GitHub Pages Integration

After successful pushes, GitHub Pages automatically:

1. **Detects new commits** to the main branch
2. **Rebuilds the site** from current `index.html` and `manifest.json`
3. **Publishes updates** to the GitHub Pages URL (e.g., `https://duanyytop.github.io/agents-radar`)

The Pages configuration is in the repository settings (Settings → Pages → Deploy from branch `main`).

## Making Changes to the Workflow

### Adding a New Report Type

If you add a new report generation type:

1. **Update `src/index.ts`** to include the new report in `fetchAllData()`, `generateSummaries()`, and save functions
2. **Add commit step** in the workflow if new files are generated:
   ```yaml
   - name: Commit new reports
     run: |
       git add digests/
       if ! git diff --cached --quiet; then
         git commit -m "digest: add new report type"
         git push --atomic
       fi
   ```

### Changing the Schedule

Edit the cron expression in the workflow:

```yaml
on:
  schedule:
    - cron: "0 0 * * *"  # Current: 00:00 UTC daily
    # Examples:
    # - cron: "0 */6 * * *"  # Every 6 hours
    # - cron: "0 2 * * 1"    # Every Monday at 02:00 UTC
```

Reference: [Cron Syntax](https://crontab.guru)

### Increasing Timeout

If generation takes longer (e.g., more repos added):

```yaml
timeout-minutes: 25  # Current: 25 minutes
```

### Modifying Commit Messages

Edit the commit message templates:

```bash
git commit -m "digest: ${DATE} daily digest"  # Current pattern
```

### Adding Error Notifications

To send alerts on workflow failure, add a notification step:

```yaml
- name: Notify on failure
  if: failure()
  run: |
    echo "❌ Daily digest workflow failed"
    echo "Check: https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}"
```

## Troubleshooting

### Issue: Workflow runs but no push occurs

**Cause:** Usually `ANTHROPIC_API_KEY` is missing or invalid

**Solution:**
1. Check Settings → Secrets → ANTHROPIC_API_KEY exists
2. Verify API key is active at https://console.anthropic.com
3. Review job logs for auth errors

### Issue: Push fails silently

**Cause:** GITHUB_TOKEN may lack permissions or network issue

**Solution:**
1. Check repository permissions: Settings → Actions → Permissions
2. Verify `permissions.contents: write` is set (it is)
3. Check GitHub status page for outages
4. Review workflow logs for error details

### Issue: GitHub Pages not updating

**Cause:** Pages build may not be triggered or disabled

**Solution:**
1. Go to Settings → Pages
2. Verify "Source" is set to "Deploy from branch: main"
3. Check "Actions" tab for "pages build and deployment" job
4. Trigger a manual workflow dispatch to verify

### Issue: Duplicate commits on retry

**Cause:** Manual retry after successful push

**Solution:**
1. Check workflow completed successfully before manual retry
2. Use GitHub's "Re-run jobs" only for failed steps
3. For full regeneration, use "Re-run all jobs" which checks for changes first

## Local Development Workflow

To test digest generation locally before pushing:

```bash
# Install dependencies
pnpm install

# Configure environment
export GITHUB_TOKEN=ghp_xxxxx
export ANTHROPIC_API_KEY=sk-ant-xxxxx
export DIGEST_REPO=owner/repo  # optional

# Generate digests (no GitHub operations)
pnpm start

# Verify outputs
ls digests/$(date -u +%Y-%m-%d)/

# Update manifest
pnpm manifest

# Test git operations (optional)
git diff digests/
git diff manifest.json
```

## See Also

- **Generation logic:** `src/index.ts` — Orchestration and phase functions
- **Report types:** `src/prompts.ts` — LLM prompt builders
- **GitHub integration:** `src/github.ts` — Issue creation and API helpers
- **Package scripts:** `package.json` — All available commands
