# Дайджест экосистемы OpenClaw 2026-03-11

> Issues: 127 | PRs: 500 | Проектов: 10 | Сгенерировано: 2026-03-11 08:36 UTC

[OpenClaw](https://github.com/openclaw/openclaw) · [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) · [EasyClaw](https://github.com/gaoyangz77/easyclaw) · [LobsterAI](https://github.com/netease-youdao/LobsterAI) · [ZeptoClaw](https://github.com/qhkm/zeptoclaw) · [NanoBot](https://github.com/HKUDS/nanobot) · [PicoClaw](https://github.com/sipeed/picoclaw) · [NanoClaw](https://github.com/qwibitai/nanoclaw) · [IronClaw](https://github.com/nearai/ironclaw) · [TinyClaw](https://github.com/TinyAGI/tinyclaw)

---

## Детальный отчёт OpenClaw

# 📋 Дайджест OpenClaw — 2026-03-11

---

## 1. Обзор дня

OpenClaw демонстрирует исключительно высокую активность: за 24 часа зафиксировано **127 issues** (109 открытых, 18 закрытых) и **500 pull requests** (265 ожидают merge, 235 смержено или закрыто). Подобный объём активности указывает на быстро растущую и зрелую экосистему с большой пользовательской базой. Доминирующая тема дня — **регрессии в версии 2026.3.8**: конфигурация провайдера `kimi-coding` оказалась сломана сразу в нескольких аспектах, что вызвало волну bug-репортов. Параллельно продолжается активная работа над улучшением стабильности агентской инфраструктуры: субагенты, cron-задачи, управление контекстом и безопасность. Новых релизов за сутки не было, однако объём PR говорит о подготовке к ближайшему выпуску.

---

## 2. Релизы

*Новых релизов за 2026-03-11 не было. Раздел пропущен.*

---

## 3. Прогресс проекта

За сутки смержено или закрыто **235 PR**. Среди заметных продвижений:

| PR | Что сделано |
|----|-------------|
| [#42212](https://github.com/openclaw/openclaw/pull/42212) | **fix(context-pruning):** исправлена критическая ошибка — инструментальные результаты с изображениями теперь обрезаются, а не пропускаются целиком; устранено переполнение контекста в сессиях с браузерной автоматизацией |
| [#42949](https://github.com/openclaw/openclaw/pull/42949) | **UI:** скрыт `spawn` субагента из справки командного меню чата — убрана вводящая в заблуждение опция для обычных пользователей Telegram/Discord |
| [#41967](https://github.com/openclaw/openclaw/pull/41967) | **Docs/Agents:** задокументированы границы pipeline failover и auth-profile для безопасного рефакторинга ядра агента |
| [#42979](https://github.com/openclaw/openclaw/pull/42979) | Добавлена поддержка модели M2.5 Mini Multimodal Max (Omni) |
| [#42298](https://github.com/openclaw/openclaw/issues/42298), [#42299](https://github.com/openclaw/openclaw/issues/42299), [#41690](https://github.com/openclaw/openclaw/issues/41690), [#40911](https://github.com/openclaw/openclaw/issues/40911) | Закрыты issues о невалидном поле `requiresOpenAiAnthropicToolPayload` в конфиге kimi-coding (исправление попало в codebase) |
| [#41475](https://github.com/openclaw/openclaw/issues/41475) | Закрыт issue о таймаутах kimi-coding в 2026.3.8 из-за нового wrapper'а совместимости инструментов |
| [#41852](https://github.com/openclaw/openclaw/issues/41852) | Закрыт: kimi-coding провайдер принудительно использовал формат OpenAI tools вместо Anthropic — исправлено |

Также закрыт ряд давних stale-issues по Telegram (дублирование сообщений [#23935](https://github.com/openclaw/openclaw/issues/23935)) и промежуточным сообщениям агента ([#13944](https://github.com/openclaw/openclaw/issues/13944)).

---

## 4. Горячие темы

### 🔥 Топ обсуждаемых Issues

**1. Ложное срабатывание «API rate limit reached» — [#32828](https://github.com/openclaw/openclaw/issues/32828)**
> 48 комментариев · 👍 7

Самый обсуждаемый issue за период. OpenClaw показывает предупреждение `⚠️ API rate limit reached` для **всех моделей**, хотя API работают корректно при прямом обращении. Пользователи подтвердили, что те же ключи функционируют с Claude Code и другими клиентами. Проблема существует с 2026-03-03 и остаётся открытой. Это классический случай неправильной интерпретации ошибки на стороне клиента — вероятно, HTTP-статус ответа маппируется некорректно.

**2. DingTalk как канал в мастере первоначальной настройки — [#26534](https://github.com/openclaw/openclaw/issues/26534)**
> 33 комментария · 👍 10

Наибольшее число лайков среди открытых issues. Поддержка DingTalk реализована (см. [#10347](https://github.com/openclaw/openclaw/issues/10347)), но канал не включён в onboarding-мастер. Пользователи вынуждены настраивать его вручную. Высокий спрос указывает на значительную пользовательскую базу в китайском корпоративном сегменте.

**3. Регрессия kimi-coding/k2p5: tool calls как plain text — [#39907](https://github.com/openclaw/openclaw/issues/39907)**
> 14 комментариев · 👍 5 · CLOSED

После обновления до 2026.3.7 модель `kimi-coding/k2p5` перестала генерировать структурированные вызовы инструментов, выдавая вместо них обычный текст. Проблема исправлена, issue закрыт, но породил цепочку связанных репортов (см. [#40157](https://github.com/openclaw/openclaw/issues/40157), [#41297](https://github.com/openclaw/openclaw/issues/41297)).

**4. Streaming server_error не триггерит fallback на другую модель — [#35220](https://github.com/openclaw/openclaw/issues/35220)**
> 14 комментариев

Вариант известного бага [#24378](https://github.com/openclaw/openclaw/issues/24378): при `server_error` внутри стриминга Codex Responses API сессия завершается с `stopReason: "error"`, но fallback-цепочка не активируется. Это архитектурный gap в обработке ошибок стриминга.

---

## 5. Баги и стабильность

### 🔴 Критические (активно влияют на пользователей)

| Issue | Описание | Статус |
|-------|----------|--------|
| [#42883](https://github.com/openclaw/openclaw/issues/42883) | **Cron-задачи полностью сломаны после обновления до 2026.3.8** на macOS — регрессия | 🔴 OPEN |
| [#42632](https://github.com/openclaw/openclaw/issues/42632) | **Cron `sessionTarget="isolated"` + `agentTurn` зависает по таймауту** даже на минимальном промпте в 2026.3.8 | 🔴 OPEN |
| [#42662](https://github.com/openclaw/openclaw/issues/42662) | **Gateway OOM crash loop**: heap растёт до ~3GB за 7 минут, бесконечно рестартует | 🔴 OPEN |
| [#41778](https://github.com/openclaw/openclaw/issues/41778) | **`openclaw-message` OOM на серверах с 4GB RAM** с v2026.3.7 — бинарник потребляет 500MB+ | 🔴 OPEN · 👍 2 |
| [#32828](https://github.com/openclaw/openclaw/issues/32828) | Ложная ошибка rate limit блокирует все модели | 🟠 OPEN |

**PR с исправлением cron:** [#42431](https://github.com/openclaw/openclaw/pull/42431) — `fix(cron): reserve job before enqueuing to fix TOCTOU race` — устраняет ситуацию, когда `cron run` возвращал `{ enqueued: true }`, но задача молча отбрасывалась.

### 🟠 Средней критичности

| Issue | Описание | Статус |
|-------|----------|--------|
| [#42942](https://github.com/openclaw/openclaw/issues/42942) | `openai-codex/gpt-5.4` таймаут в 2026.3.8, в 2026.3.7 работает | 🟠 OPEN |
| [#41652](https://github.com/openclaw/openclaw/issues/41652) | `device-id-mismatch` при WebSocket-подключении iOS-приложения на AliCloud | 🟠 OPEN |
| [#42870](https://github.com/openclaw/openclaw/issues/42870) | Cloudflare WAF 403 при наличии бэктиков в содержимом сообщений | 🟠 OPEN |
| [#33229](https://github.com/openclaw/openclaw/issues/33229) | `/session` команда сломана в Slack | 🟠 OPEN |
| [#41577](https://github.com/openclaw/openclaw/issues/41577) | Субагенты не получают browser/web_search инструменты вопреки конфигурации | 🟠 OPEN |
| [#42132](https://github.com/openclaw/openclaw/issues/42132) | Сырые JSON-ошибки Codex/OpenAI `server_error` отображаются напрямую пользователю в 2026.3.8 | 🟠 OPEN |

**Соответствующие PR:**
- [#42933](https://github.com/openclaw/openclaw/pull/42933) — `feat: session-level circuit breaker` — автоматическая пауза после N последовательных ошибок модели
- [#41903](https://github.com/openclaw/openclaw/pull/41903) — `fix(process): globalThis singleton for command-queue` — устраняет дублирование состояния при code-splitting
- [#42154](https://github.com/openclaw/openclaw/pull/42154) — `fix(agents): sandbox alsoAllow tool merging` — плагин-инструменты более не отбрасываются в sandbox-режиме

### 🟡 Низкая критичность

| Issue | Описание |
|-------|----------|
| [#42702](https://github.com/openclaw/openclaw/issues/42702) | Discord plugin: `fetch failed` при использовании proxy — настройка `channels.discord.proxy` не применяется к REST-вызовам |
| [#41950](https://github.com/openclaw/openclaw/issues/41950) | WhatsApp cron: `No active WhatsApp Web listener` при плановой отправке |
| [#34788](https://github.com/openclaw/openclaw/issues/34788) | Cloudflare AI Gateway аутентификация сломана — заголовок `cf-aig-authorization` игнорируется |
| [#41815](https://github.com/openclaw/openclaw/issues/41815) + [#41845](https://github.com/openclaw/openclaw/issues/41845) | macOS LaunchAgent: `gateway restart/start` нестабильно при вызове из managed process tree |

---

## 6. Запросы на функции

### 🌟 С наибольшим потенциалом войти в следующую версию

**1. DingTalk в onboarding-мастере — [#26534](https://github.com/openclaw/openclaw/issues/26534)**
👍 10 · 33 комментария
Наиболее поддержанный feature request. Реализация минимальна: канал уже существует, нужно лишь добавить его в wizard первичной настройки. Высокая вероятность быстрого включения.

**2. Prebuilt Android APK в GitHub Releases — [#9443](https://github.com/openclaw/openclaw/issues/9443)**
15 комментариев
Исходный код Android присутствует в `apps/android`, но собранных APK нет. Запрос актуален для пользователей без окружения разработки.

**3. `--header` флаг для `openclaw node run` (Cloudflare Zero Trust) — [#42792](https://github.com/openclaw/openclaw/issues/42792)**
Практический запрос для деплоев за reverse proxy с аутентификацией (Cloudflare ZT, аналоги). Небольшой объём реализации.

**4. Гейт одобрения исходящих сообщений — [#25145](https://github.com/openclaw/openclaw/issues/25145)**
👍 1 · 8 комментариев
Pre-send hook для email/SMS/Telegram инструментов — требует человеческого одобрения перед отправкой. Критически важно для production-агентов с доступом к коммуникационным каналам.

**5. Suggestions for Memory v2 — [#28930](https://github.com/openclaw/openclaw/issues/28930)**
Детальный proposal от AI-агента (sic!) с предложениями ассоциативного обхода памяти, взвешивания по значимости и забывания по принципу LRU. Концептуально интересно, реализация сложная.

### В активной разработке (открытые PR)

| PR | Функция |
|----|---------|
| [#42964](https://github.com/openclaw/openclaw/pull/42964) | `feat(web_search)`: провайдер MiniMax с OAuth fallback |
| [#42965](https://github.com/openclaw/openclaw/pull/42965) | `feat(usage)`: баланс Kilo в системе учёта использования |
| [#40372](https://github.com/openclaw/openclaw/pull/40372) | `feat(agents)`: режим `contextInjection` — пропуск workspace-файлов в последующих сообщениях (экономия токенов) |
| [#41274](https://github.com/openclaw/openclaw/pull/41274) | `Backup`: validated restore workflow с выбором версии и rollback |
| [#27443](https://github.com/openclaw/openclaw/pull/27443) | `gateway`: multi-user RBAC |
| [#26732](https://github.com/openclaw/openclaw/pull/26732) | `feat(channels)`: outbound rate limiting для Telegram, Discord, Slack

---

## Сравнение экосистемы

# Сравнительный анализ экосистемы AI-агентов — 2026-03-11

---

## 1. Панорама экосистемы

Экосистема open-source AI-агентов и персональных ассистентов демонстрирует зрелый рост: суммарно за сутки девять отслеживаемых проектов сгенерировали более 800 PR и issues. Рынок чётко сегментируется на крупные платформы с устоявшимся сообществом (OpenClaw, NanoBot, PicoClaw) и нишевые проекты, либо специализирующиеся на определённой аудитории (EasyClaw, LobsterAI, ZeptoClaw), либо находящиеся в архитектурной перестройке (TinyClaw, IronClaw). Доминирующие технические темы дня — стабильность agentrun-цикла, управление контекстом/памятью, расширение поддержки мессенджеров и рост корпоративного спроса (enterprise-каналы, RBAC, Azure, M365). Показательна конвергенция: практически все проекты параллельно решают одни и те же проблемы (Ollama, WhatsApp, субагенты, шифрование конфигурации), что свидетельствует о формировании стандартных пользовательских ожиданий к классу продуктов. Параллельно во всех дайджестах фигурирует один и тот же сторонний инструмент [ByeByeClaw](https://github.com/wanikua/byebyeclaw) — косвенный сигнал о том, что проблема «чистого удаления» является системной болью для всего семейства Claw-проектов.

---

## 2. Сравнение активности

| Проект | Issues / 24ч | PR / 24ч | PR смержено | Релизы | Критич. открытых багов | Оценка здоровья |
|---|---|---|---|---|---|---|
| **OpenClaw** | 127 (109 open) | 500 (235 merged) | 235 | 0 | 5 | 🟢 Зрелый, высокий трафик, активный фиксинг |
| **NanoBot** | 33 | 55 (19 merged) | 19 | 0 | 3 | 🟢 Быстрый рост, сильное сообщество |
| **PicoClaw** | 33 | 64 (15 merged) | 15 | 2 (nightly) | 4 | 🟡 Высокая активность, очередь ревью — узкое место |
| **IronClaw** | ~5 | 50 (8 merged) | 8 | 1 (v0.17.0) | 2 | 🟢 Зрелый CI/CD, стратегическая разработка |
| **Zeroclaw** | 13 (9 open) | 50 (26 merged) | 26 | 0 | 4 | 🟡 Активный рост, критичные баги без PR |
| **LobsterAI** | 10 | 13 (7 merged) | 7 | 0 | 3 | 🟡 Сфокусированный спринт, долг по ESLint |
| **NanoClaw** | 19 | 40 (17 merged) | 17 | 0 | 1 | 🟡 Архитектурная работа, race condition без фикса |
| **ZeptoClaw** | 8 (все закрыты) | 11 (6 merged) | 6 | 1 (v0.7.4) | 0 | 🟢 Компактный, высокое качество итерации |
| **TinyClaw** | 1 | 7 (7 merged) | 7 | 0 | 0 | 🟡 Архитектурная перестройка, минимальный трафик |
| **EasyClaw** | 2 | 1 | 0 | 2 (v1.6.4/5) | 1 | 🟡 Ранняя стадия, реактивный патчинг |

> **Методология оценки здоровья:** учитывались соотношение merged/open PR, наличие критических багов без PR-исправлений, регулярность релизов и активность сообщества.

---

## 3. Позиционирование OpenClaw

### Масштаб и зрелость
OpenClaw работает в принципиально иной лиге: 127 issues и 500 PR за сутки — это в 4–15 раз больше, чем у ближайших конкурентов (NanoBot: 33/55, PicoClaw: 33/64). Показатель merge-rate (235 из 500, ~47%) свидетельствует о зрелом процессе ревью — не просто «открытых дверях» для любого PR.

### Технические преимущества
- **Глубина агентной инфраструктуры.** OpenClaw уже решает задачи, до которых конкуренты только подбираются: RBAC ([#27443](https://github.com/openclaw/openclaw/pull/27443)), session-level circuit breaker ([#42933](https://github.com/openclaw/openclaw/pull/42933)), `contextInjection`-режим экономии токенов ([#40372](https://github.com/openclaw/openclaw/pull/40372)), validated restore workflow ([#41274](https://github.com/openclaw/openclaw/pull/41274)).
- **Провайдерное покрытие.** Поддержка kimi-coding, M2.5 Mini Multimodal Max, MiniMax с OAuth fallback — OpenClaw последовательно добавляет провайдеров быстрее конкурентов.
- **Богатство каналов.** DingTalk, Discord, Telegram, Slack, WhatsApp, WeChat — плюс исходящий rate limiting ([#26732](https://github.com/openclaw/openclaw/pull/26732)) и approval gate ([#25145](https://github.com/openclaw/openclaw/issues/25145)) в разработке.

### Ключевые отличия от конкурентов
- **Memory v2** ([#28930](https://github.com/openclaw/openclaw/issues/28930)) — концептуально наиболее продвинутое предложение по управлению памятью в экосистеме (ассоциативный обход, взвешивание, LRU-forgetting).
- **Гейт одобрения исходящих сообщений** ([#25145](https://github.com/openclaw/openclaw/issues/25145)) — уникальная функция для production-агентов с доступом к коммуникационным каналам; ни один из конкурентов не заявлял аналога.
- **Масштаб числовой базы.** Только количество PR за один день (~500) указывает на userbase, несопоставимо большую, чем у любого другого проекта в выборке.

### Уязвимости
- Регрессии в версии 2026.3.8 (cron, OOM, kimi-coding) снижают доверие к релизному процессу — это болезненная точка при масштабе сообщества.
- Ложная ошибка rate limit ([#32828](https://github.com/openclaw/openclaw/issues/32828), 48 комментариев) существует с 2026-03-03 без PR — при наличии альтернатив (Claude Code работает с теми же ключами) это прямой отток пользователей.

---

## 4. Общие технические направления

Ниже перечислены запросы и проблемы, независимо возникшие сразу в нескольких проектах — наиболее сильный сигнал о рыночных ожиданиях.

| Направление | Проекты | Статус |
|---|---|---|
| **Поддержка Ollama / локальных LLM** | NanoBot (#193+PR#1863), PicoClaw (#1161), NanoClaw, ZeptoClaw (#316), LobsterAI (#365, #360) | 🔴 Везде болевая точка; лишь у NanoBot есть готовый PR |
| **WhatsApp-канал** | OpenClaw (#41950), ZeptoClaw (v0.7.4 ✅), NanoClaw (#953 ✅), PicoClaw (косвенно) | 🟡 Решается по-разному; только ZeptoClaw выпустил релиз |
| **DingTalk / Feishu / WeChat** | OpenClaw (#26534, onboarding), NanoBot (#1769, #1864), LobsterAI (#378 ✅, #364 ✅), PicoClaw (#1307), NanoClaw | 🔴 Китайский корпоративный сегмент — универсальный приоритет |
| **Субагенты и делегирование инструментов** | OpenClaw (#41577), NanoClaw (серия @matt-carvalho), PicoClaw (#1278, #1322), Zeroclaw (#3069), NanoBot (#1865 ✅) | 🔴 Нерешённая архитектурная проблема у большинства |
| **OOM / утечки памяти** | OpenClaw (#42662, #41778), Zeroclaw (#3070 — бинарники), LobsterAI (#370 — token overflow) | 🟡 Разные причины, общий симптом |
| **Шифрование конфигурации / персистентность после рестарта** | Zeroclaw (#3175, #3173 — критично), NanoClaw (#825 — scheduler), IronClaw (#915 — async lock) | 🔴 Системный класс багов: молчащие ошибки после рестарта |
| **Microsoft/Azure enterprise-интеграции** | Zeroclaw (PR#3042 M365, PR#3007 Azure OpenAI), IronClaw (#927 onboarding), OpenClaw (RBAC PR#27443) | 🟡 Enterprise-спрос растёт; Zeroclaw опережает |
| **Деинсталляция / управление артефактами** | TinyClaw (#189), NanoClaw (#955), Zeroclaw, OpenClaw (косвенно) | 🟡 Один инструмент ByeByeClaw для всего семейства — показательно |
| **Streaming / отсутствие потоковой передачи токенов** | NanoBot (#1860), PicoClaw (косвенно), IronClaw (PR#625 PTC) | 🟡 Базовое ожидание UX, которое ещё не везде реализовано |
| **Context pruning / управление токенами** | OpenClaw (#42212 ✅, #40372 в работе), LobsterAI (#370), NanoBot (#1704 ✅) | 🟢 Активно решается; OpenClaw и NanoBot впереди |

---

## 5. Дифференциация

| Проект | Фокус / ниша | Целевая аудитория | Архитектурный стек | Отличительная черта |
|---|---|---|---|---|
| **OpenClaw** | Универсальная production-платформа | Enterprise, продвинутые пользователи, большие команды | Node.js/TS, монорепо, плагинная архитектура | Масштаб экосистемы; наибольшая глубина агентных примитивов (RBAC, circuit breaker, context injection) |
| **NanoBot** | Python-first агент с акцентом на LLM-экосистему | Data scientists, Python-разработчики | Python, LiteLLM, multi-channel | Широкий охват LLM через LiteLLM; сильная китайская аудитория |
| **PicoClaw** | Быстрая итерация, Go-архитектура | Разработчики, embedded/IoT | Go | Event-driven agent loop в разработке; nightly-релизы; SOUL.md/AGENT.md архитектурная концепция |
| **IronClaw** | Безопасность и производительность, WASM-инструменты | Enterprise/security-oriented | Rust, WASM tools, async | Per-provider parameter filtering; WASM-инструменты (уникально); наиболее зрелый CI/CD |
| **Zeroclaw** | Rust-performance, корпоративные интеграции | Корпоративный сегмент, DevOps | Rust | M365/Azure без новых зависимостей; WhatsApp via wa-rs нативно |
| **ZeptoClaw** | Минималистичный Rust-агент, quality-first | Разработчики, self-hosted | Rust, feature flags | Наилучшее соотношение скорости итерации к качеству; preflight config validation |
| **NanoClaw** | Автономное обучение агентов, skill self-creation | Исследователи, продвинутые пользователи | Node.js/TS, Docker/containers | Уникальная архитектура autonomous learning (USER.md/MEMORY.md + create_skill MCP) |
| **LobsterAI** | GUI-приложение с OpenClaw-бэкендом | Конечные пользователи, не-разработчики | Electron/Node.js, OpenClaw-интеграция | Desktop-ориентированный UX; тройная интеграция мессенджеров за один день |
| **TinyClaw** | Kanban-ориентированный мультиагентный workflow | Teams, проектные менеджеры | npm workspaces monorepo, SQLite, TS | Kanban → agent auto-trigger; Redis→SQLite миграция снижает барьер развёртывания |
| **EasyClaw** | Лёгкий desktop front-end для OpenAI | Конечные пользователи macOS/Windows | Electron (предположительно) | Самый низкий барьер входа; быстрый патч-цикл |

---

## 6. Зрелость и активность сообществ

### 🟢 Зрелые платформы (стабилизация + расширение)

**OpenClaw** — единственный проект в категории «зрелая экосистема». Индикаторы: 500 PR/сутки, сформированный процесс ревью, multi-user RBAC в разработке, документирование границ pipeline failover, закрытие stale-issues. Боль: регрессии в каждом minor-релизе указывают на недостаточное покрытие тестами при масштабе изменений.

**IronClaw** — зрелый процесс (chained CI promotions, deferred review resolution), но относительно небольшое сообщество. Сильная сторона — качество кода

---

## Отчёты смежных проектов

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Дайджест проекта Zeroclaw — 2026-03-11

---

## 1. Обзор дня

Проект демонстрирует высокую активность: за сутки зафиксировано 50 pull request'ов (24 ожидают merge, 26 смержено или закрыто) и 13 issues (9 открыто, 4 закрыто). Новых релизов нет — разработка ведётся в основной ветке без формальных публикаций версий. Заметна системная работа одного из контрибьюторов (@darrenzeng2025), который закрыл сразу несколько инфраструктурных и документационных PR. Параллельно всплыл кластер серьёзных багов, связанных с шифрованием конфигурации (`secrets.encrypt`), что требует оперативного внимания мейнтейнеров. В целом проект находится в фазе активного роста функциональности при ещё нестабилизированном ядре runtime.

---

## 2. Релизы

*Новых релизов за отчётный период не было. Раздел пропущен.*

---

## 3. Прогресс проекта

За сутки смержено и закрыто **26 PR**. Ключевые продвижения:

### 🔧 Инфраструктура и DevOps
- **[#3104](https://github.com/zeroclaw-labs/zeroclaw/pull/3104)** `fix(docker): add missing COPY data/` — исправлен Dockerfile, падавший после добавления semantic vectordb guard (фикс бага [#3063](https://github.com/zeroclaw-labs/zeroclaw/issues/3063))
- **[#3117](https://github.com/zeroclaw-labs/zeroclaw/pull/3117)** `fix(docker): enable BuildKit и замена heredoc на printf` — устранена ошибка парсинга config.toml в Docker
- **[#3091](https://github.com/zeroclaw-labs/zeroclaw/pull/3091)** Обновление Rust с `1.93-slim` до `1.94-slim` в Docker-образах (dependabot)
- **[#3092](https://github.com/zeroclaw-labs/zeroclaw/pull/3092)** Обновление 10 Rust-зависимостей: `tokio 1.49→1.50`, `toml 1.0.3→1.0.6` и др.
- **[#3118](https://github.com/zeroclaw-labs/zeroclaw/pull/3118)** Обновление `actions/download-artifact` с v4 до v8

### 🚀 Новая функциональность
- **[#3101](https://github.com/zeroclaw-labs/zeroclaw/pull/3101)** `feat(gateway): add restart and get-paircode subcommands` — добавлены подкоманды `zeroclaw gateway restart` и `zeroclaw gateway get-paircode`, закрывает feature request'ы [#3014](https://github.com/zeroclaw-labs/zeroclaw/issues/3014) и [#3015](https://github.com/zeroclaw-labs/zeroclaw/issues/3015)
- **[#3086](https://github.com/zeroclaw-labs/zeroclaw/pull/3086)** `feat(slack): add file handling and harden socket/media paths` — расширена поддержка Slack-канала

### 📝 Документация и housekeeping
- **[#3111](https://github.com/zeroclaw-labs/zeroclaw/pull/3111)** Добавлен CHANGELOG
- **[#3112](https://github.com/zeroclaw-labs/zeroclaw/pull/3112)** Добавлен `.editorconfig`
- **[#3110](https://github.com/zeroclaw-labs/zeroclaw/pull/3110)** Добавлен `.gitattributes`
- **[#3108](https://github.com/zeroclaw-labs/zeroclaw/pull/3108)** Добавлен пример конфигурационного файла

---

## 4. Горячие темы

### 🔥 Issue #3070 — GLIBC_2.39 not found
**[#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)** | 9 комментариев | S0 (data loss / security risk)

Наиболее обсуждаемый issue периода. Бинарные сборки требуют `GLIBC_2.39`, которой нет в ряде дистрибутивов Linux (Ubuntu 22.04, Debian 11 и старее). Пользователь @heartacker обозначил это как S0, хотя по сути это проблема совместимости платформы. Сообщество активно ищет workaround'ы (статическая линковка, musl-сборки). Ситуация указывает на отсутствие политики минимальной версии GLIBC в CI/CD.

### 🔥 Issue #2960 — Browser pairing persistence broken
**[#2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960)** | 👍 2 | S2 (degraded behavior)

Каждая новая браузерная сессия требует повторного ввода pairing code. Проблема затрагивает всех пользователей dashboard'а. Связана тематически с PR [#3101](https://github.com/zeroclaw-labs/zeroclaw/pull/3101) (gateway management), однако прямого исправления persistence пока нет.

### 🔥 PR #3042 — Microsoft 365 / Graph API integration
**[#3042](https://github.com/zeroclaw-labs/zeroclaw/pull/3042)** | В ожидании merge

Крупная фича: 10 операций через Microsoft Graph API (почта, Teams, Calendar, OneDrive, SharePoint). Реализована без новых crate-зависимостей через прямые HTTP-вызовы via `reqwest`. Потенциально высокий интерес корпоративных пользователей.

---

## 5. Баги и стабильность

### 🔴 Критические (S0–S1)

| Issue | Описание | Статус фикса |
|-------|----------|--------------|
| **[#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)** | GLIBC_2.39 not found — бинарники не запускаются на старых дистрибутивах | ❌ PR отсутствует |
| **[#2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930)** | `./bootstrap.sh --docker` падает с "Unbound variable" на macOS | ❌ PR отсутствует |
| **[#3175](https://github.com/zeroclaw-labs/zeroclaw/issues/3175)** | `bot_token` шифруется при `save()`, но не расшифровывается при `load()` — каналы (Slack, Discord, Telegram, Mattermost) молча падают после рестарта daemon'а | ❌ PR отсутствует |
| **[#3173](https://github.com/zeroclaw-labs/zeroclaw/issues/3173)** | `paired_tokens` не расшифровываются при загрузке конфига (`enc2:` prefix), что ломает WebSocket-аутентификацию после рестарта | ❌ PR отсутствует |

> ⚠️ **Обратите внимание:** issues [#3175](https://github.com/zeroclaw-labs/zeroclaw/issues/3175) и [#3173](https://github.com/zeroclaw-labs/zeroclaw/issues/3173) оба от @zhuantouer, опубликованы 11 марта. По всей видимости, это части одной системной проблемы: `secrets.encrypt = true` (дефолт) ломает персистентность конфигурации при рестарте. Требует срочного хотфикса.

### 🟡 Значимые (S2)

| Issue | Описание | Статус фикса |
|-------|----------|--------------|
| **[#2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960)** | Browser pairing не персистируется между сессиями | ❌ PR отсутствует |
| **[#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)** | Флаг `--channel-matrix` отсутствует в официальных сборках | ❌ PR отсутствует |

### 🟢 Незначительные (S3) — с активными фиксами

| Issue | Описание | PR с фиксом |
|-------|----------|-------------|
| **[#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033)** | `default_temperature` из конфига игнорируется при вызове `zeroclaw agent` | ✅ **[#3067](https://github.com/zeroclaw-labs/zeroclaw/pull/3067)** (open, ждёт review) |
| **[#3063](https://github.com/zeroclaw-labs/zeroclaw/issues/3063)** | Docker build падает — отсутствует `COPY data/` | ✅ **[#3104](https://github.com/zeroclaw-labs/zeroclaw/pull/3104)** (closed/merged) |

---

## 6. Запросы на функции

### Поданы и частично реализованы

- **`zeroclaw gateway get-paircode` / `restart`** ([#3015](https://github.com/zeroclaw-labs/zeroclaw/issues/3015), [#3014](https://github.com/zeroclaw-labs/zeroclaw/issues/3014)) — **закрыты** через PR [#3101](https://github.com/zeroclaw-labs/zeroclaw/pull/3101) ✅

### Активные запросы (в разработке, PR открыты)

- **Azure OpenAI provider** ([PR #3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007)) — поддержка Azure OpenAI с кастомными версиями API (напр. `2024-10-21`) и Managed Identity auth. Высокий приоритет для корпоративных пользователей.
- **Microsoft 365 / Graph API** ([PR #3042](https://github.com/zeroclaw-labs/zeroclaw/pull/3042)) — 10 операций: почта, Teams, Calendar, OneDrive, SharePoint.
- **Anthropic Vision** ([PR #3170](https://github.com/zeroclaw-labs/zeroclaw/pull/3170)) — добавление `Image` variant в `NativeContentOut` с поддержкой Anthropic API формата.
- **`channel-feishu` alias для `channel-lark`** ([PR #3105](https://github.com/zeroclaw-labs/zeroclaw/pull/3105)) — обнаруживаемость для китайских пользователей.
- **`--reinit` флаг для `onboard`** ([PR #3102](https://github.com/zeroclaw-labs/zeroclaw/pull/3102)) — защита от случайной перезаписи конфига с автобэкапом.

### Новые запросы (без PR)

- **Поддержка 32-битных систем** ([#3174](https://github.com/zeroclaw-labs/zeroclaw/issues/3174)) — запрос от @Null-Spectra для MIPS/IoT-устройств. Технически сложно из-за зависимостей ядра от 64-битных типов. Маловероятно для ближайшего релиза.
- **`--channel-matrix` в официальных сборках** ([#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)) — поддержка Matrix-протокола присутствует в коде, но не включена в feature flags сборок. Относительно низкая трудоёмкость фикса.

---

## 7. Фидбек пользователей

### 😤 Боли и проблемы

**Шифрование конфигурации ломает рестарт.** Сразу два issue от @zhuantouer ([#3175](https://github.com/zeroclaw-labs/zeroclaw/issues/3175), [#3173](https://github.com/zeroclaw-labs/zeroclaw/issues/3173)) вскрывают системную проблему: при дефолтных настройках (`secrets.encrypt = true`) daemon после рестарта теряет все каналы и WebSocket-соединения. Это молчащий баг — пользователи не получают явной ошибки, каналы просто перестают работать.

**Совместимость с Linux-дистрибутивами.** Пользователи на Ubuntu 22.04 и аналогичных системах не могут запустить бинарники без ручной установки GLIBC 2.39 ([#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)). Это барьер для новых пользователей.

**MCP-инструменты не проксируются в субагенты.** @danividalg ([#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069)) описывает продуманный сценарий: MCP-инструменты корректно появляются в системном промпте главного агента, но субагенты (delegates) получают их только как текстовые описания, а не как callable tools. Это ограничивает мощность мультиагентных сценариев.

**Непредсказуемость температуры моделей.** @kunalk16 ([#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033)) указывает, что `default_temperature` из конфига игнорируется — всегда используется 0.7. Особенно критично для моделей вроде GPT-5, чувствительных к параметрам семплирования.

### 💡 Позитивные сигналы

- Активное сообщество контрибьюторов: за сутки 50 PR от ~15+ уникальных авторов
- Появление экосистемных инструментов: @wanikua выпустил [ByeByeClaw](https://github.com/wanikua/byebyeclaw) — утилиту для чистого удаления ZeroClaw и Claw-family агентов ([#3169](https://github.com/zeroclaw-labs/zeroclaw/issues/3169))
- Запросы на корпоративную интеграцию (Azure, M365) свидетельствуют о росте enterprise-аудитории

---

## 8. Накопленный бэклог

Issues и PR, заслуживающие приоритетного внимания мейнтейнеров:

| # | Ссылка | Тема |

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# 📋 Дайджест EasyClaw — 2026-03-11

> **Источник:** github.com/gaoyangz77/easyclaw | **Период:** 24 часа

---

## 1. 🗓 Обзор дня

Проект EasyClaw демонстрирует умеренную активность: за последние 24 часа выпущено сразу **два релиза** (v1.6.4 и v1.6.5), что указывает на активную итеративную разработку с быстрым циклом патчей. Зафиксированы 2 issue (одна закрыта, одна остаётся открытой) и 1 PR в ожидании ревью. Оба открытых пользовательских обращения принадлежат одному автору (@westisc), что может говорить о системных проблемах с интеграцией конкретного стека. Общий темп разработки — активный, однако сигналы о стабильности OAuth-авторизации и иконок требуют внимания. PR от внешнего контрибьютора свидетельствует о начале формирования сообщества вокруг проекта.

---

## 2. 🚀 Релизы

### v1.6.5 и v1.6.4
> Оба релиза выпущены в течение одного дня, что характерно для быстрого исправления дефектов.

**Ключевая информация из описания релизов:**
- Обе версии содержат идентичную документацию по установке, охватывающую известную проблему macOS Gatekeeper — предупреждение **"'EasyClaw' is damaged and can't be opened"**
- Проблема не является реальным повреждением файла — macOS блокирует неподписанное приложение (unsigned app)

**Инструкция по обходу (macOS Gatekeeper):**
```
Открыть Terminal и выполнить команду xattr/spctl для снятия карантина
```
*(полная инструкция обрезана в данных, но доступна в описании релизов)*

**Статус подписи кода:** приложение по-прежнему **не подписано** (unsigned), что является потенциальным барьером для массового распространения на macOS.

**Breaking changes / Миграция:** данных о критических изменениях API или схемы конфигурации в доступных описаниях не обнаружено. Рекомендуется ознакомиться с полными changelog-ами:
- [v1.6.5](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.5)
- [v1.6.4](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.4)

> ⚠️ **Вывод:** выпуск двух версий за один день без явного changelog в данных — признак реактивного патчинга. Рекомендуется мейнтейнерам добавить детальные release notes для прозрачности.

---

## 3. ✅ Прогресс проекта

### Закрытые Issues

| # | Заголовок | Автор | Статус |
|---|-----------|-------|--------|
| [#13](https://github.com/gaoyangz77/easyclaw/issues/13) | Изображения не передаются в модель в чате | @westisc | ✅ Закрыт |

**Issue #13** — пользователь сообщал о том, что при добавлении изображения в chat-интерфейс модель не получала его содержимое, хотя в Codex то же изображение обрабатывалось корректно. Issue закрыт после 3 комментариев за ~24 часа — относительно быстрый отклик команды.

### Открытые PR

| # | Заголовок | Автор | Статус |
|---|-----------|-------|--------|
| [#15](https://github.com/gaoyangz77/easyclaw/pull/15) | fix: app icon in macOS dock and system tray | @mylinkedai | ⏳ Ожидает merge |

**PR #15** находится в ожидании ревью с 2026-03-10. Исправление касается корректного отображения иконки приложения в Dock и системном трее macOS — UX-дефект, затрагивающий всех macOS-пользователей.

---

## 4. 🔥 Горячие темы

### Issue #13 — Изображения не передаются в модель
🔗 [github.com/gaoyangz77/easyclaw/issues/13](https://github.com/gaoyangz77/easyclaw/issues/13)

- **3 комментария** — наибольшая дискуссионная активность среди всех обращений дня
- Пользователь предоставил скриншоты, наглядно демонстрирующие расхождение поведения между EasyClaw и Codex
- Быстрое закрытие может означать либо исправление в v1.6.5, либо предоставление workaround — **требует уточнения в release notes**

### PR #15 — Иконка приложения macOS
🔗 [github.com/gaoyangz77/easyclaw/pull/15](https://github.com/gaoyangz77/easyclaw/pull/15)

- Первый (или один из немногих) PR от внешнего контрибьютора (@mylinkedai) — положительный сигнал для экосистемы
- Косвенно связан с общей темой macOS-совместимости, которая прослеживается как в релизах, так и в issues

---

## 5. 🐛 Баги и стабильность

### Критичность: Высокая 🔴

**OpenAI OAuth — ошибка авторизации**
🔗 [Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16) | Автор: @westisc | Статус: OPEN

- Проблема воспроизводится **на обеих версиях** дистрибутива: portable и installer
- Затрагивает базовый flow аутентификации — без OAuth пользователь не может использовать OpenAI-интеграцию
- Комментариев нет, реакции нет — **ответа от команды не поступало**
- Приоритет: критический, т.к. блокирует ключевой сценарий использования

### Критичность: Средняя 🟡

**Изображения не передаются в модель при чате**
🔗 [Issue #13](https://github.com/gaoyangz77/easyclaw/issues/13) | Статус: CLOSED

- Закрыт, вероятно исправлен в v1.6.4 или v1.6.5
- Проблема мультимодального ввода — важна для пользователей, работающих с визуальными данными

**Иконка приложения macOS (Dock / System Tray)**
🔗 [PR #15](https://github.com/gaoyangz77/easyclaw/pull/15) | Статус: OPEN PR

- Некорректное отображение иконки — UX-дефект без функционального блокирования
- Есть готовый фикс, ожидающий merge

### Критичность: Низкая 🟢

**macOS Gatekeeper — unsigned app**
- Системное ограничение, не баг кода, но создаёт барьер для установки
- Задокументировано в каждом релизе — временное решение есть, постоянное (code signing) пока не реализовано

---

## 6. 💡 Запросы на функции

> За анализируемый период явных feature request issues не зафиксировано. Все открытые обращения носят характер bug report.

**Потенциальные запросы, косвенно следующие из активности:**

| Запрос | Источник | Вероятность включения |
|--------|----------|----------------------|
| Корректная передача изображений в multimodal-чат | Issue #13 (закрыт) | 🟢 Вероятно уже в v1.6.5 |
| Стабильный OAuth flow для OpenAI | Issue #16 | 🟡 В работе / следующий патч |
| Code signing для macOS | Документация релизов | 🔴 Требует инфраструктурных затрат |

---

## 7. 💬 Фидбек пользователей

### Паттерны боли

**@westisc** — единственный активный пользователь в обращениях дня, но поднимает системно важные темы:

1. **Мультимодальность работает непоследовательно** — изображения принимаются в Codex, но не в основном чат-интерфейсе EasyClaw. Это говорит о расхождении в реализации API-вызовов между модулями приложения.

2. **OAuth нестабилен на обеих версиях дистрибутива** — проблема не зависит от способа установки, что указывает на дефект в коде авторизации, а не в инсталляторе.

### Сценарии использования

- Пользователи используют EasyClaw как **альтернативный front-end для OpenAI** (включая Codex), ожидая feature parity между модулями
- Ожидается корректная работа **multimodal input** (текст + изображения) в едином интерфейсе
- Используются обе форм-факторы: **portable и installer** — оба должны иметь одинаковое поведение

### Что работает хорошо
- Быстрый цикл релизов (2 версии за день) — команда реагирует
- Issue #13 закрыт в течение ~24 часов после создания — хорошая отзывчивость

### Что вызывает недовольство
- Отсутствие code signing для macOS создаёт трение при первом запуске
- OAuth-проблема (Issue #16) пока без ответа команды

---

## 8. 📦 Накопленный бэклог

> На основе доступных данных за 24 часа:

| Issue/PR | Заголовок | Дней без ответа | Приоритет |
|----------|-----------|-----------------|-----------|
| [#16](https://github.com/gaoyangz77/easyclaw/issues/16) | OpenAI OAuth — ошибка авторизации | 0 (создан сегодня, 0 комментариев) | 🔴 Критический |
| [#15](https://github.com/gaoyangz77/easyclaw/pull/15) | fix: app icon macOS dock/tray | 1 день без merge | 🟡 Средний |

> ℹ️ **Примечание:** данные охватывают только 24-часовое окно. Для полноценного анализа бэклога рекомендуется расширить горизонт до 30 дней и включить все открытые issues/PR репозитория.

---

## 📊 Сводка дня

```
Активность:     ████████░░  Умеренная
Стабильность:   ██████░░░░  Требует внимания
Отзывчивость:   ████████░░  Хорошая (Issue #13 закрыт быстро)
Риски:          OAuth-блокер (#16) без ответа
```

| Метрика | Значение |
|---------|----------|
| Новых Issues | 2 (1 открыт, 1 закрыт) |
| Новых PR | 1 (ожидает merge) |
| Новых релизов | 2 (v1.6.4, v1.6.5) |
| Критических открытых багов | 1 (OAuth) |
| PR с фиксами без merge | 1 (иконка macOS) |

---

*Дайджест сгенерирован на основе публичных данных GitHub. Для получения полного контекста по изменениям в коде рекомендуется ознакомиться с diff релизов и полными треда issues напрямую.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI — Дайджест проекта за 2026-03-11

---

## 1. Обзор дня

Проект LobsterAI демонстрирует высокую активность сообщества: за последние 24 часа зафиксировано **10 открытых Issues** и **13 Pull Requests**, из которых 7 уже закрыты/смержены. Новых официальных релизов не выпускалось, однако разработка ведётся интенсивно — особенно в направлении интеграции с внешними мессенджерами (DingTalk, Feishu, Discord) и расширения возможностей планировщика задач. Характер обращений указывает на то, что проект активно привлекает новых пользователей, которые сталкиваются с типичными проблемами первичной настройки и совместимости с локальными моделями. Соотношение feature-запросов и багрепортов примерно равное, что свидетельствует о зрелости ядра продукта при активном расширении функциональности. Заметно участие нескольких постоянных контрибьюторов (@liugang519, @mutjan, @mjnhmd), что говорит о формировании устойчивого сообщества разработчиков.

---

## 2. Релизы

> Новых релизов за отчётный период не было. Раздел пропущен.

---

## 3. Прогресс проекта

За сутки закрыто/смержено **7 PR**, что является высоким показателем для одного дня:

| PR | Описание | Статус |
|----|----------|--------|
| [#378](https://github.com/netease-youdao/LobsterAI/pull/378) | `feat: 钉钉支持openclaw` — интеграция DingTalk с OpenClaw | ✅ Closed |
| [#375](https://github.com/netease-youdao/LobsterAI/pull/375) | `fix: 修复 mac 端 node 环境污染的问题` — исправление загрязнения Node-окружения на macOS | ✅ Closed |
| [#373](https://github.com/netease-youdao/LobsterAI/pull/373) | `fix: Add async message handler to prevent IM platform timeout` (дубль 1) | ✅ Closed |
| [#372](https://github.com/netease-youdao/LobsterAI/pull/372) | `fix: Add async message handler to prevent IM platform timeout` (дубль 2) | ✅ Closed |
| [#371](https://github.com/netease-youdao/LobsterAI/pull/371) | `feat: 主界面附件支持多文件选择` — поддержка множественного выбора файлов в главном интерфейсе | ✅ Closed |
| [#364](https://github.com/netease-youdao/LobsterAI/pull/364) | `feat: 飞书im支持openclaw` — интеграция Feishu/Lark с OpenClaw | ✅ Closed |
| [#363](https://github.com/netease-youdao/LobsterAI/pull/363) | `feat: discord使用openclaw实现` — реализация интеграции Discord через OpenClaw | ✅ Closed |

**Ключевые итоги дня:**
- Реализована тройная интеграция мессенджеров: **DingTalk, Feishu и Discord** через механизм OpenClaw — значительное расширение каналов взаимодействия с ассистентом.
- Исправлена критическая проблема **загрязнения Node.js-окружения на macOS** ([#375](https://github.com/netease-youdao/LobsterAI/pull/375)), влиявшая на стабильность запуска.
- Добавлена **поддержка множественного выбора файлов** в главном интерфейсе ([#371](https://github.com/netease-youdao/LobsterAI/pull/371)) — UX-улучшение, запрошенное сообществом.

**В очереди на merge (6 открытых PR):**
- [#380](https://github.com/netease-youdao/LobsterAI/pull/380) — поддержка кастомных URI-протоколов в markdown-ссылках
- [#376](https://github.com/netease-youdao/LobsterAI/pull/376) — почасовой режим планировщика задач
- [#374](https://github.com/netease-youdao/LobsterAI/pull/374) — асинхронный обработчик сообщений для IM-платформ
- [#367](https://github.com/netease-youdao/LobsterAI/pull/367) — импорт MCP JSON с поддержкой Streamable HTTP
- [#240](https://github.com/netease-youdao/LobsterAI/pull/240) — улучшения workflow с мульти-агентной системой
- [#5](https://github.com/netease-youdao/LobsterAI/pull/5) — конфигурация ESLint и устранение 269 проблем линтера

---

## 4. Горячие темы

### 🔥 Наиболее обсуждаемые Issues

**[#368](https://github.com/netease-youdao/LobsterAI/issues/368) — Пустой экран после установки .deb на Ubuntu 24.04.4 LTS (node24/npm11)**
*Автор: @loomz | 2 комментария*

Наиболее активный тред дня. Пользователь самостоятельно собирает `.deb`-пакет и получает полностью пустой интерфейс после установки. Проблема потенциально связана с несовместимостью Node.js 24 или npm 11 с текущей сборочной конфигурацией. Это типичная боль для Linux-пользователей, собирающих приложение вручную — документация по поддерживаемым окружениям, судя по всему, требует уточнения.

**[#370](https://github.com/netease-youdao/LobsterAI/issues/370) — Превышение лимита токенов при отправке простого «привет»**
*Автор: @jieguolove | 1 комментарий*

```
API Error: 400 — You passed 8961 input tokens and requested 32000 output tokens.
However, the model's context length is 32000.
```

Системный промпт или контекст агента «раздувает» запрос до ~9K токенов ещё до пользовательского ввода. Сигнализирует о возможной проблеме с управлением контекстом по умолчанию или с конфигурацией soul.md/инструкций агента.

**[#360](https://github.com/netease-youdao/LobsterAI/issues/360) — Сбой при вызове локально развёрнутой модели (Qwen3-235B)**
*Автор: @aibuyouyu | 1 комментарий*

```
API Error: 502 {"type":"error","error":{"type":"api_error","message":"net::ERR_EMPTY_RESPONSE"}}
```

Пользователь сообщает: Postman и тестовое подключение работают нормально, но через LobsterAI — 502. Указывает на специфику обработки OpenAI-совместимых эндпоинтов при локальных URL (127.0.0.x). Потенциально связано с тем же классом проблем, что и [#375](https://github.com/netease-youdao/LobsterAI/pull/375) (загрязнение Node-окружения на macOS).

---

## 5. Баги и стабильность

### 🔴 Критические / высокий приоритет

| Баг | Issue | Статус | Исправление |
|-----|-------|--------|-------------|
| Пустой интерфейс после установки `.deb` на Ubuntu 24.04 + Node 24 | [#368](https://github.com/netease-youdao/LobsterAI/issues/368) | 🔴 Открыт | Нет |
| Превышение контекста токенов при минимальном вводе | [#370](https://github.com/netease-youdao/LobsterAI/issues/370) | 🔴 Открыт | Нет |
| 502 ERR_EMPTY_RESPONSE при работе с локальными моделями | [#360](https://github.com/netease-youdao/LobsterAI/issues/360) | 🔴 Открыт | Частично: [#375](https://github.com/netease-youdao/LobsterAI/pull/375) |

### 🟡 Средний приоритет

| Баг | Issue | Статус | Исправление |
|-----|-------|--------|-------------|
| Таймаут IM-платформ при длительных задачах агента | Неявно из [#374](https://github.com/netease-youdao/LobsterAI/pull/374) | 🟡 PR открыт | [#374](https://github.com/netease-youdao/LobsterAI/pull/374) — ожидает merge |
| Изображения не отображаются в чат-интерфейсе | [#361](https://github.com/netease-youdao/LobsterAI/issues/361) | 🟡 Открыт | Нет |
| Gateway не загружается (LaunchAgent not loaded) | [#366](https://github.com/netease-youdao/LobsterAI/issues/366) | 🟡 Открыт | Нет |
| Уведомления DingTalk для scheduled tasks не работают | [#369](https://github.com/netease-youdao/LobsterAI/issues/369) | 🟡 Открыт | Частично: [#378](https://github.com/netease-youdao/LobsterAI/pull/378) |
| MCP: `streamable_http` конфигурации не импортируются | Неявно из [#367](https://github.com/netease-youdao/LobsterAI/pull/367) | 🟡 PR открыт | [#367](https://github.com/netease-youdao/LobsterAI/pull/367) — ожидает merge |

### ⚠️ Качество кода

- **269 проблем ESLint** (257 ошибок, 12 предупреждений) выявлено в [#5](https://github.com/netease-youdao/LobsterAI/pull/5) — PR висит с 19 февраля без merge, что создаёт технический долг.

---

## 6. Запросы на функции

### Новые Feature Requests за 24 часа

**[#379](https://github.com/netease-youdao/LobsterAI/issues/379) — Открытие папки с файлом из чата**
*Автор: @ningwhy*
> В диалоге при наличии файлов — добавить иконку для открытия папки (не самого файла). Логичное UX-улучшение, вписывается в концепцию файлового ассистента.
**Вероятность включения в следующую версию: высокая** — малый объём реализации, чёткий сценарий.

**[#377](https://github.com/netease-youdao/LobsterAI/issues/377) — Управление переменными окружения в приложении**
*Автор: @Dawnton*
> Скрипты Skills (например, `chart-visualization`) читают `process.env.SERVICE_ID`, но UI не предоставляет способа задать env-переменные. Предлагается добавить соответствующий раздел настроек.
**Вероятность включения: средняя** — архитектурно важная задача, требует проработки безопасности хранения секретов.

**[#365](https://github.com/netease-youdao/LobsterAI/issues/365) — Поддержка LM Studio**
*Автор: @AndersHsueh*
> Запрос на интеграцию с LM Studio как с локальным провайдером моделей.
**Вероятность включения: средняя** — тренд на локальные модели очевиден (см. также [#360](https://github.com/netease-youdao/LobsterAI/issues/360), [#362](https://github.com/netease-youdao/LobsterAI/issues/362)).

**[#362](https://github.com/netease-youdao/LobsterAI/issues/362) — Подключение к Tencent Cloud Code Plan API**
*Автор: @Hacyon*
> Интеграция с `https://api.lkeap.cloud.tencent.com/coding/v3`. Узкоспециализированный запрос для китайского корпоративного сегмента.
**Вероятность включения: низкая/средняя** — зависит от приоритетов команды по китайскому рынку.

### Запросы, находящиеся в разработке

| Функция | PR | Статус |
|---------|-----|--------|
| Почасовой планировщик задач | [#376](https://github.com/netease-youdao/LobsterAI/pull/376) | ⏳ Ожидает merge |
| Кастомные URI-протоколы в markdown | [#380](https://github.com/netease-youdao/LobsterAI/pull/380) | ⏳ Ожидает merge |
| Мульти-агентный workflow с ролями | [#240](https://github.com/netease-youdao/LobsterAI/pull/240) | ⏳ Ожидает merge (с 3 марта) |

---

## 7. Фидбек пользователей

### 🔧 Основные боли

1. **Проблемы с локальными моделями** — пользователи активно пытаются подключить собственные развёртывания (Qwen3-235B, LM Studio, Tencent API), но сталкиваются с ошибками 502 и неочевидной конфигурацией. Это говорит о том, что документация по локальным провайдерам недостаточно подробна.

2. **Linux/Ubuntu — сборка из исходников** — тема [#368](https://github.com/netease-youdao/LobsterAI/issues/368) показывает, что часть аудитории предпоч

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# Дайджест проекта ZeptoClaw — 2026-03-11

> **Источник данных:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | Период: 24 часа

---

## 1. Обзор дня

За отчётный период проект демонстрирует высокий темп разработки: 11 pull request'ов (6 закрыто/смержено, 5 ожидают ревью) и 8 закрытых issue — практически полный цикл от постановки задачи до реализации в течение одного дня. Основная активность сосредоточена вокруг одного контрибьютора — @qhkm, что указывает на проект с ограниченным числом активных мейнтейнеров, несмотря на наличие сторонних участников. Выпущен релиз v0.7.4 с ключевым изменением — нативной поддержкой WhatsApp Web. Паттерн работы характерен для одного-двух разработчиков в режиме интенсивного спринта: issue открываются и закрываются практически синхронно с соответствующими PR. Присутствие dependabot-обновлений сигнализирует об активно поддерживаемой зависимостной базе.

---

## 2. Релизы

### v0.7.4
**Дата выхода:** 2026-03-11
**Changelog:** [v0.7.3 → v0.7.4](https://github.com/qhkm/zeptoclaw/compare/v0.7.3...v0.7.4)

#### Ключевые изменения

| Тип | Описание | PR |
|-----|-----------|----|
| `feat` | Нативный канал WhatsApp Web через библиотеку `wa-rs` (замена заглушки `whatsmeow-bridge`) | [#294](https://github.com/qhkm/zeptoclaw/pull/294) |

#### Детали изменений (PR [#294](https://github.com/qhkm/zeptoclaw/pull/294))
- Модуль `whatsapp.rs` на базе мёртвого `whatsmeow-bridge` полностью **заменён** новым `whatsapp_web.rs` с нативной реализацией через `wa-rs`
- Полная имплементация трейта `Channel` с нормализацией номеров по стандарту E.164
- Рендеринг QR-кода для авторизации сессии
- **Feature flag:** функциональность доступна только при сборке с флагом `--features whatsapp-web`, что не затрагивает дефолтный бинарник

#### Breaking Changes
- Канал `whatsapp.rs` удалён — пользователи, у которых был настроен WhatsApp через `whatsmeow-bridge`, должны перейти на новый канал `whatsapp_web` с пересборкой под нужный feature flag
- Поскольку оригинальный `whatsmeow-bridge` фактически не работал (бинарник не существовал, загрузчик возвращал `"Binary download not yet implemented"`), для большинства пользователей это изменение не является деструктивным

#### Рекомендации по миграции
1. Пересобрать проект: `cargo build --features whatsapp-web`
2. Обновить конфигурационный файл, заменив тип канала с `whatsapp` на `whatsapp_web`
3. Пройти повторную авторизацию через QR-код

---

## 3. Прогресс проекта

За 24 часа смержены или закрыты следующие PR:

### ✅ Смерженные/закрытые PR

#### 🔌 Интеграции и каналы
- **[#294](https://github.com/qhkm/zeptoclaw/pull/294) `feat: native WhatsApp Web channel via wa-rs`** (@qhkm)
  Нативная реализация WhatsApp Web, вошедшая в релиз v0.7.4. Закрывает issue [#288](https://github.com/qhkm/zeptoclaw/issues/288).

#### ⚙️ Конфигурация
- **[#314](https://github.com/qhkm/zeptoclaw/pull/314) `fix(config): sync validator with runtime schema`** (@qhkm)
  Валидатор `config check` теперь корректно принимает поля `tunnel`, `agents.defaults.timezone` и `agents.defaults.tool_timeout_secs`. Добавлены регрессионные тесты. Закрывает [#310](https://github.com/qhkm/zeptoclaw/issues/310).

- **[#311](https://github.com/qhkm/zeptoclaw/pull/311) `feat: model-provider compatibility validation`** (@qhkm)
  Preflight-проверка совместимости модели и провайдера при старте gateway. Catches-at-startup сценарий «GPT-модель + Anthropic-ключ» вместо криптичной ошибки на первом сообщении. Закрывает [#309](https://github.com/qhkm/zeptoclaw/issues/309).

- **[#306](https://github.com/qhkm/zeptoclaw/pull/306) `feat(cli): add config reset command`** (@qhkm)
  Новая команда `zeptoclaw config reset` с созданием timestamped-бэкапа и флагом `--force`. Закрывает [#305](https://github.com/qhkm/zeptoclaw/issues/305).

#### 🖥️ CLI
- **[#313](https://github.com/qhkm/zeptoclaw/pull/313) `fix(cli): default agent mode to warn-level logging`** (@qhkm)
  Команды `agent` и `batch` теперь по умолчанию используют уровень `warn` вместо `info`. Gateway и другие долгоживущие режимы сохраняют `info`. Закрывает [#312](https://github.com/qhkm/zeptoclaw/issues/312).

- **[#315](https://github.com/qhkm/zeptoclaw/pull/315) `feat(cli): add zeptoclaw uninstall command`** (@qhkm)
  Новая команда `zeptoclaw uninstall` с флагами `--yes` и `--remove-binary`. Безопасное удаление `~/.zeptoclaw` с защитой бинарника в зависимости от способа установки. Закрывает [#307](https://github.com/qhkm/zeptoclaw/issues/307), [#308](https://github.com/qhkm/zeptoclaw/issues/308).

---

## 4. Горячие темы

### 🔥 Issue недели: WhatsApp Web без работающего бриджа

**Issue [#288](https://github.com/qhkm/zeptoclaw/issues/288)** — «Native WhatsApp Web support» (@deorozindo) стал катализатором релиза v0.7.4. Хотя формально у issue 0 реакций, именно он вскрыл системную проблему: объявленная функциональность WhatsApp не работала — `src/deps/fetcher.rs` возвращал `"Binary download not yet implemented"`, а зависимый репозиторий `qhkm/whatsmeow-rs` не имел ни одного GitHub Release. Проблема была решена в течение ~24 часов от публикации issue до релиза.

### 📊 Активность по типам задач

```
Интеграции/каналы : ██████████ 1 PR (смержен в релиз)
Конфигурация      : ████████████████████ 3 PR (смержено)
CLI               : ████████████████████ 2 PR (смержено)
Зависимости       : ██████████████ 3 PR (ожидают merge)
Dev tooling       : ████████ 1 PR (ожидает review)
```

**Наблюдение:** Оба issue о команде `uninstall` ([#307](https://github.com/qhkm/zeptoclaw/issues/307) и [#308](https://github.com/qhkm/zeptoclaw/issues/308)) — дубликаты от одного автора (@qhkm). Это типичный паттерн self-tracking: мейнтейнер использует GitHub Issues как личный таск-трекер.

---

## 5. Баги и стабильность

### 🔴 P1-Critical (исправлено)

| Issue | Описание | PR с исправлением | Статус |
|-------|----------|-------------------|--------|
| [#310](https://github.com/qhkm/zeptoclaw/issues/310) | `config check` отвергает валидные поля (`tunnel`, `agents.defaults.timezone`, `agents.defaults.tool_timeout_secs`), которые уже существуют в runtime-структурах `src/config/types.rs` | [#314](https://github.com/qhkm/zeptoclaw/pull/314) | ✅ Исправлено |

**Оценка:** Баг мог серьёзно дезориентировать пользователей — инструмент диагностики конфигурации сам выдавал ложноположительные ошибки, подрывая доверие к валидатору.

### 🟡 P2-High (исправлено)

| Issue | Описание | PR с исправлением | Статус |
|-------|----------|-------------------|--------|
| [#312](https://github.com/qhkm/zeptoclaw/issues/312) | `zeptoclaw agent -m "testing"` генерирует поток info-логов (provider chain, cron service, tool registration), создавая ощущение запуска gateway в CLI-режиме | [#313](https://github.com/qhkm/zeptoclaw/pull/313) | ✅ Исправлено |

**Оценка:** UX-баг, особенно болезненный для новых пользователей, которые воспринимают информационный шум как признак неправильной работы системы.

### 🟡 Системный риск: молчащие ошибки провайдера (исправлено)

Issue [#309](https://github.com/qhkm/zeptoclaw/issues/309) + PR [#311](https://github.com/qhkm/zeptoclaw/pull/311): конфигурация GPT-модели с Anthropic-ключом приводила к молчаливому провалу на первом сообщении с криптичной ошибкой API. Теперь несоответствие детектируется при `config check` и старте gateway.

---

## 6. Запросы на функции

### Реализованные за период

| Feature | Issue | PR | Вошло в релиз |
|---------|-------|----|---------------|
| Нативный WhatsApp Web | [#288](https://github.com/qhkm/zeptoclaw/issues/288) | [#294](https://github.com/qhkm/zeptoclaw/pull/294) | ✅ v0.7.4 |
| `zeptoclaw uninstall` | [#307](https://github.com/qhkm/zeptoclaw/issues/307), [#308](https://github.com/qhkm/zeptoclaw/issues/308) | [#315](https://github.com/qhkm/zeptoclaw/pull/315) | Ожидается в v0.7.5 |
| `zeptoclaw config reset` | [#305](https://github.com/qhkm/zeptoclaw/issues/305) | [#306](https://github.com/qhkm/zeptoclaw/pull/306) | Ожидается в v0.7.5 |
| Threads publishing skill | [#295](https://github.com/qhkm/zeptoclaw/issues/295) | — | В работе |

### Ожидающие реализации

#### 🟢 Ollama cloud support (PR [#316](https://github.com/qhkm/zeptoclaw/pull/316))
Поддержка Ollama/vLLM без обязательного API-ключа (для локальных инстансов) с опциональной авторизацией для облачных деплоев. PR открыт, ожидает ревью. Потенциально входит в **v0.7.5**.

**Что это даёт пользователям:** устраняет неудобство с `dummy_key`-заглушками для self-hosted конфигураций Ollama — распространённый pain point в комьюнити локальных AI.

#### 🔵 Dev tooling: единая среда для контрибьюторов (PR [#287](https://github.com/qhkm/zeptoclaw/pull/287))
PR от @taqtiqa-mark с инструментами для воспроизводимого dev/test окружения. Открыт с 2026-03-09, не смержен. Нацелен на снижение барьера входа для новых контрибьюторов.

---

## 7. Фидбек пользователей

### Болевые точки, выявленные за период

**1. Несоответствие заявленного и реального (issue [#288](https://github.com/qhkm/zeptoclaw/issues/288))**
> Пользователь @deorozindo обнаружил, что WhatsApp-интеграция, документированная как существующая, физически не функционировала — зависимость не имела бинарных релизов, а загрузчик возвращал заглушку.

*Сигнал:* Пользователи активно проверяют соответствие документации и кода. Расхождение между README/changelog и реальным состоянием кода — критический репутационный риск для ранних adopter'ов.

**2. Шумный CLI для простых задач (issue [#312](https://github.com/qhkm/zeptoclaw/issues/312))**
Запуск однострочного агентского запроса в CLI-режиме выдавал полный лог запуска gateway, что создавало когнитивную нагрузку и затрудняло отладку.

*Сигнал:* Пользователи используют CLI-режим для быстрых тестов и ожидают минималистичного вывода, аналогичного поведению `curl` или стандартных CLI-утилит.

**3. Молчащие ошибки конфигурации (issue [#309](https://github.com/qhkm/zeptoclaw/issues/309))**
Некорректная пара «модель + провайдер» приводила к падению только в момент первого реального запроса, а не на старте — типичный fail

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot — Дайджест проекта за 2026-03-11

---

## 1. Обзор дня

NanoBot демонстрирует исключительно высокую активность: за сутки зафиксировано **33 issues** и **55 pull requests**, что свидетельствует о быстро растущем сообществе и интенсивной разработке. Проект находится в фазе активного расширения экосистемы — основные векторы развития сосредоточены вокруг поддержки новых LLM-провайдеров, интеграции мессенджеров и повышения стабильности агентного цикла. Команда мейнтейнеров справляется с потоком PR: закрыто/смержено 19 из 55 поступивших за сутки. Новых релизов не было, однако интенсивный поток фиксов и фич-PR указывает на подготовку к ближайшему выпуску. Среди пользователей заметен значительный сегмент китайскоязычной аудитории, активно запрашивающей поддержку локальных экосистем (WeChat, DingTalk, Feishu).

---

## 2. Релизы

*Новых релизов за отчётный период не было. Раздел пропущен.*

---

## 3. Прогресс проекта

За сутки смержено/закрыто **19 PR** и **11 Issues**. Ключевые продвижения:

### ✅ Закрытые/смерженные PR

| PR | Описание | Автор |
|----|----------|-------|
| [#1865](https://github.com/HKUDS/nanobot/pull/1865) | **fix(subagent):** передача `reasoning_content` в сообщениях subagent — критический фикс для Deepseek Reasoner | @ethanclaw |
| [#1848](https://github.com/HKUDS/nanobot/pull/1848) | **fix(subagent):** сохранение `reasoning_content` и `thinking_blocks` в истории assistant messages | @lailoo |
| [#1769](https://github.com/HKUDS/nanobot/pull/1769) | **fix(dingtalk):** WebSocket watchdog для обнаружения зависших соединений | @asdf17128 |
| [#1856](https://github.com/HKUDS/nanobot/pull/1856) | **fix:** исключение скрытых файлов (`.`-prefixed) при синхронизации workspace-шаблонов | @yapex |
| [#1859](https://github.com/HKUDS/nanobot/pull/1859) | **feat(dingtalk):** поддержка текста распознавания голоса | @dingyanyi2019 |
| [#1855](https://github.com/HKUDS/nanobot/pull/1855) | **fix:** обновление litellm до 1.82.1 для поддержки провайдера Moonshot (Kimi K2.5) | @greyishsong |
| [#1870](https://github.com/HKUDS/nanobot/pull/1870) | **fix(gemini):** исправление thought_signature (предварительный вариант) | @WhalerO |
| [#1704](https://github.com/HKUDS/nanobot/pull/1704) | **refactor:** переход от message-count-based к token-budget-based сжатию контекста | @VITOHJL |
| [#1327](https://github.com/HKUDS/nanobot/pull/1327) | **feat:** поддержка WeChat Work (WeCom) канала | @chengyongru |

### ✅ Закрытые Issues

- [#2](https://github.com/HKUDS/nanobot/issues/2) — запрос на нативную поддержку Z.AI / GLM моделей (закрыт после 19 комментариев)
- [#25](https://github.com/HKUDS/nanobot/issues/25) — поддержка кастомных провайдеров (Groq)
- [#123](https://github.com/HKUDS/nanobot/issues/123) — запрос на Discord-канал
- [#36](https://github.com/HKUDS/nanobot/issues/36) — отсутствие `api_base` для OpenAI-провайдера
- [#91](https://github.com/HKUDS/nanobot/issues/91) — поддержка Feishu/Lark, QQ, DingTalk
- [#1834](https://github.com/HKUDS/nanobot/issues/1834) — баг с `reasoning_content` в Deepseek Reasoner

---

## 4. Горячие темы

### 🔥 Топ обсуждаемых Issues

**1. Поддержка Ollama API** — [#193](https://github.com/HKUDS/nanobot/issues/193) *(12 комментариев)*
Пользователи активно запрашивают нативную интеграцию с Ollama для локального запуска моделей. Примечательно, что уже открыт соответствующий PR [#1863](https://github.com/HKUDS/nanobot/pull/1863) от @letzdoo-js, добавляющий провайдер `ollama_chat` через LiteLLM-префикс. Запрос имеет высокий шанс войти в следующий релиз.

**2. Поддержка Z.AI / Zhipu GLM** — [#2](https://github.com/HKUDS/nanobot/issues/2) *(19 комментариев, 👍 6, CLOSED)*
Наиболее обсуждаемый issue за всю историю наблюдений. Закрыт 11 марта — по всей видимости, поддержка была реализована или признана избыточной через существующие механизмы.

**3. Отсутствие документации на китайском языке** — [#1617](https://github.com/HKUDS/nanobot/issues/1617) *(7 комментариев, 👍 1)*
Пользователь @suxmao выражает недовольство отсутствием китайского README. Учитывая долю китайскоязычной аудитории в issues (значительная часть тикетов открывается на китайском), запрос является обоснованным.

**4. Двойные ответы Telegram-бота** — [#1692](https://github.com/HKUDS/nanobot/issues/1692) *(4 комментария, 👍 3)*
Баг с дублированием ответов (один с Markdown, один без) набирает реакции. Системный сбой, влияющий на UX в одном из самых популярных каналов.

**5. Поддержка WeChat** — [#1819](https://github.com/HKUDS/nanobot/issues/1819) *(5 комментариев)*
Запрос на интеграцию с WeChat от пользователя, указывающего на критическую важность этого мессенджера для китайской аудитории. Косвенно закрыт через PR [#1327](https://github.com/HKUDS/nanobot/pull/1327) (WeCom/Enterprise WeChat), однако consumer WeChat по-прежнему не поддерживается.

---

## 5. Баги и стабильность

### 🔴 Критические

| Issue/PR | Описание | Статус |
|----------|----------|--------|
| [#1834](https://github.com/HKUDS/nanobot/issues/1834) / [#1865](https://github.com/HKUDS/nanobot/pull/1865) | **Subagent падает с Deepseek Reasoner**: отсутствие поля `reasoning_content` в assistant message полностью блокирует использование spawn-инструмента с reasoning-моделями | ✅ Закрыт, фикс смержен |
| [#1873](https://github.com/HKUDS/nanobot/issues/1873) | **Уязвимость безопасности**: агент имеет доступ к `config.yaml` через `exec()` и может утечь API-ключи. Автор предлагает запускать agent loop под отдельным пользователем | 🔴 Открыт, PR нет |

### 🟠 Высокая важность

| Issue/PR | Описание | Статус |
|----------|----------|--------|
| [#1876](https://github.com/HKUDS/nanobot/pull/1876) | **Бесконечные циклы агента** при обходе файлов: двойное усечение вывода инструментов (shell.py + agent loop) теряет метаданные о продолжении, агент зависает | 🟡 PR открыт, ожидает review |
| [#1692](https://github.com/HKUDS/nanobot/issues/1692) | **Двойные ответы Telegram**: бот отправляет два сообщения — с Markdown и без | 🔴 Открыт, PR нет |
| [#1833](https://github.com/HKUDS/nanobot/issues/1833) | **SIGTERM без объяснений**: процесс завершается дважды за 30 минут без диагностики | 🔴 Открыт, PR нет |

### 🟡 Средняя важность

| Issue/PR | Описание | Статус |
|----------|----------|--------|
| [#1874](https://github.com/HKUDS/nanobot/pull/1874) | **Gemini: потеря `thought_signature`** при replaying tool calls через LiteLLM | 🟡 PR открыт (переработка предыдущего #1870) |
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) | **Matrix-канал не запускается**: ошибка при инициализации | 🔴 Открыт, PR нет |
| [#640](https://github.com/HKUDS/nanobot/issues/640) | **Агент прерывает выполнение** без ответа пользователю ("I've completed processing but have no response to give") | 🔴 Открыт, PR нет |
| [#1856](https://github.com/HKUDS/nanobot/pull/1856) | **UnicodeDecodeError** при синхронизации шаблонов workspace из-за macOS-файлов `._AGENTS.md` | ✅ Фикс смержен |
| [#1864](https://github.com/HKUDS/nanobot/issues/1864) | **DingTalk не поддерживает загрузку файлов**: `"Received empty or unsupported message type: file"` | 🔴 Открыт |

### 🟢 Низкая важность

| Issue/PR | Описание | Статус |
|----------|----------|--------|
| [#1847](https://github.com/HKUDS/nanobot/pull/1847) / [#1868](https://github.com/HKUDS/nanobot/pull/1868) | **Memory consolidation** не наследует `temperature`, `max_tokens`, `reasoning_effort` из конфига агента | 🟡 Два конкурирующих PR ожидают merge |
| [#1869](https://github.com/HKUDS/nanobot/issues/1869) | **Неверный `apiBase`** для Aliyun Bailian в документации | 🔴 Открыт |

---

## 6. Запросы на функции

### 🚀 С высоким шансом войти в следующую версию

**1. Нативная поддержка Ollama** — [#193](https://github.com/HKUDS/nanobot/issues/193) + [PR #1863](https://github.com/HKUDS/nanobot/pull/1863)
Уже готов PR с реализацией. Добавляет `ollama_chat` LiteLLM-префикс, поле `ProvidersConfig` и отключает валидацию API-ключа для локальных провайдеров. Высокий спрос со стороны сообщества.

**2. Web Chat канал с SSE-стримингом** — [PR #1341](https://github.com/HKUDS/nanobot/pull/1341)
Полноценный браузерный чат-интерфейс (`WebChannel`) с SSE token streaming, поддержкой multi-session и инструментальными событиями. Хорошо проработанный PR, ждёт merge.

**3. Endpoint-канал OpenAI-совместимый** — [PR #1861](https://github.com/HKUDS/nanobot/pull/1861)
`EndpointChannel` с интерфейсом `/v1/responses` — позволяет подключать внешние приложения как channel-провайдеры. Открывает путь к интеграции с любыми OpenAI-совместимыми клиентами.

**4. Стриминг вывода модели** — [#1860](https://github.com/HKUDS/nanobot/issues/1860)
Пользователи жалуются на отсутствие потоковой передачи токенов. Отдельный PR #1341 частично решает проблему для Web-канала, но глобального решения нет.

### 📋 Среднесрочные запросы

- **Отключение MEMORY.md** — [#1831](https://github.com/HKUDS/nanobot/issues/1831): пользователи, использующие внешние MCP-хранилища памяти, не могут полностью отключить встроенный механизм.
- **Unified daemon gateway** — [#1461](https://github.com/HKUDS/nanobot/issues/1461): архитектурное предложение по созданию фонового демона с единым управлением restart/status/logs.
- **Поддержка reply_to_message в Telegram** — [#1875](https://github.com/HKUDS/nanobot/issues/1875): агент не видит содержимое цитируемого сообщения, что ограничивает контекстное понимание.
- **Управление конфигом exec() output** — [#1871](https://github.com/HKUDS/nanobot/issues/1871): запрос на ENV-переменную для управления усечением вывода команд (сейчас жёстко 10,000 символов с сохранением начала; пользователь считает, что конец вывода пол

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 🦐 PicoClaw — Дайджест за 11 марта 2026 года

---

## 1. Обзор дня

PicoClaw демонстрирует исключительно высокий уровень активности: за сутки зафиксировано **33 issues** и **64 pull request**а, что свидетельствует о быстро растущем сообществе и интенсивном темпе разработки. Проект находится в стадии активного формирования архитектуры — параллельно ведутся работы по рефакторингу агентского ядра, расширению поддержки каналов коммуникации и стабилизации провайдеров LLM. Выпущены два новых релиза (стабильный nightly и тег nightly-build), что подтверждает непрерывный цикл поставки. Вместе с тем значительная часть PR (49 из 64) ожидает merge, что указывает на узкое место в процессе ревью — типичную проблему для проектов с небольшой командой мейнтейнеров и широким кругом внешних контрибьюторов. Общее состояние проекта можно охарактеризовать как **«бурный рост с техническим долгом в очереди»**.

---

## 2. Релизы

### `v0.2.1-nightly.20260311.9cd2d218`
🔗 [GitHub Release](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)

**Ключевые изменения:**

| Коммит | Описание |
|--------|----------|
| `9cd2d21` | Merge PR [#1207](https://github.com/sipeed/picoclaw/pull/1207) — **режим отладки без усечения вывода** (`feat/debug-mode-no-truncate`) |
| `54f0680` | Merge PR [#1291](https://github.com/sipeed/picoclaw/pull/1291) — **поддержка Telegram Forum Topics** (`feat/telegram-forum-topics`) |
| `cc95562` | Обновление документации по отладке |

**Примечания:**
- Это **nightly-сборка** — может содержать нестабильный код, не рекомендуется для production.
- Breaking changes не анонсированы явно, однако добавление Telegram Forum Topics меняет логику маршрутизации контекста разговоров — пользователям с кастомными Telegram-конфигурациями следует проверить совместимость.
- Параллельно выпущен тег [`nightly`](https://github.com/sipeed/picoclaw/releases/tag/nightly) — автоматизированная пересборка того же коммита.

---

## 3. Прогресс проекта

За сутки **смержено и закрыто 15 PR**. Среди заметных завершённых работ:

### ✅ Смержено / закрыто

**PR #1291 — Telegram Forum Topics**
Поддержка тематических форум-топиков Telegram (тредов) для изоляции контекстов разговоров — одна из наиболее запрошенных функций недели. Смержено в nightly.

**PR #1207 — Debug mode без усечения**
Режим отладки теперь не обрезает длинный вывод, что критично для диагностики сложных агентских сценариев.

**PR #1343 — Исправление поля reasoning content**
🔗 [#1343](https://github.com/sipeed/picoclaw/pull/1343)
Закрыт быстро — исправлено неверное имя поля для reasoning-контента, выравнивание с остальным кодом репозитория.

**PR #1214 — Echo транскрипции голосовых сообщений**
🔗 [#1214](https://github.com/sipeed/picoclaw/pull/1214)
Перед обработкой агент теперь отображает результат транскрипции пользователю — заметное UX-улучшение для голосовых каналов.

**Issue #297 — Логотип Mantis Shrimp (закрыт)**
🔗 [#297](https://github.com/sipeed/picoclaw/issues/297)
Задача по созданию официального логотипа (мантис-креветка) закрыта после 9 комментариев — вероятно, дизайн утверждён.

**Issue #1290 — Конфигурация web backend gateway (закрыт)**
🔗 [#1290](https://github.com/sipeed/picoclaw/issues/1290)
Проблема с путями и автозапуском через launcher-панель — закрыта.

---

## 4. Горячие темы

### 🔥 Issue #1161 — Интеграция с локальным Ollama (14 комментариев)
🔗 [#1161](https://github.com/sipeed/picoclaw/issues/1161)
**Самый обсуждаемый тред недели.** Пользователь @lmdmendes сообщает: агент запускается, вызывает модель, но не возвращает финальный ответ. За 5 дней тред набрал 14 комментариев — явный сигнал, что поддержка локальных LLM (Ollama) является болевой точкой для значительной части аудитории. Связано с проблемой парсинга tool calls (#1287).

### 🔥 Issue #1218 — Рефакторинг концепции агента: SOUL.md и AGENT.md (12 комментариев)
🔗 [#1218](https://github.com/sipeed/picoclaw/issues/1218)
Архитектурная дискуссия от @alexhoshina о введении двух файлов конфигурации агента:
- **`SOUL.md`** — личность, ценности, характер агента (freeform markdown)
- **`AGENT.md`** — структурированная конфигурация поведения

Это концептуально важное предложение, которое может определить направление развития агентского ядра. 12 комментариев за 4 дня — высокая вовлечённость сообщества.

### 🔥 Issue #1270 — Telegram Forum Topics (7 комментариев, уже смержено!)
🔗 [#1270](https://github.com/sipeed/picoclaw/issues/1270)
Запрос на изоляцию контекстов по топикам форума — от создания issue до merge в nightly прошло ~2 дня. Демонстрирует скорость реакции команды на приоритетные запросы.

### 🔥 Issue #1316 — Event-driven агентный цикл с хуками и прерываниями (3 комментария, 1 👍)
🔗 [#1316](https://github.com/sipeed/picoclaw/issues/1316)
Архитектурное предложение от @alexhoshina: переработать `pkg/agent/loop.go` из «чёрного ящика» в событийно-управляемую систему с поддержкой хуков, прерываний и стриминга сообщений. Билингвальный тред (CN/EN). Получил 👍 от мейнтейнеров — высокая вероятность принятия.

### 📊 Issue #988 — Roadmap: март 2026, неделя 2 (2 комментария, 4 👍)
🔗 [#988](https://github.com/sipeed/picoclaw/issues/988)
Роадмап включает: WebUI-улучшения, интерфейс безопасности, фронтенд-оптимизацию. **4 👍** — наибольший показатель среди всех активных issues.

---

## 5. Баги и стабильность

### 🔴 Критические

**[BUG] Tool calling fails — парсинг JSON**
🔗 [#1287](https://github.com/sipeed/picoclaw/issues/1287)
Ошибка: `json: cannot unmarshal object into Go struct field .choices.message.tool_calls.function.arguments of type string`. Все вызовы инструментов падают. Затрагивает агентный режим в целом. Связан с #1161 (Ollama). **Исправляющий PR:** [#1341](https://github.com/sipeed/picoclaw/pull/1341) `[fix] Max tools` — ожидает merge.

**[BUG] MCP не работает в агентном режиме**
🔗 [#1299](https://github.com/sipeed/picoclaw/issues/1299)
`picoclaw agent` полностью игнорирует MCP-инструменты. Критично для пользователей, строящих пайплайны на MCP. PR с исправлением не обнаружен.

**[BUG] Launcher Docker image — отсутствует манифест**
🔗 [#1350](https://github.com/sipeed/picoclaw/issues/1350)
`docker compose --profile launcher up` завершается ошибкой `manifest not available`. Блокирует деплой через официальный docker-compose. Свежий issue (11 марта), PR не создан.

**[BUG] Windows — сборка из исходников падает**
🔗 [#1348](https://github.com/sipeed/picoclaw/issues/1348)
`go mod tidy` на Win10 завершается ошибками импорта. Блокирует использование на Windows. PR не создан.

### 🟠 Высокий приоритет

**[BUG] Feishu auth expired after 12h**
🔗 [#1307](https://github.com/sipeed/picoclaw/issues/1307)
Токен Feishu (Lark) истекает через 12 часов, и SDK не обновляет его автоматически — все API-вызовы начинают возвращать `99991663`. **Исправляющий PR:** [#1318](https://github.com/sipeed/picoclaw/pull/1318) — реализован кастомный `tokenCache` с инвалидацией при ошибке. Ожидает merge.

**[BUG] Spawn игнорирует модель целевого агента**
🔗 [#1322](https://github.com/sipeed/picoclaw/issues/1322)
При вызове `spawn` с `agent_id` субагент использует модель вызывающего агента вместо собственной. Ломает мультиагентные конфигурации.

**[BUG] Telegram slash-команды сломаны**
🔗 [#1298](https://github.com/sipeed/picoclaw/issues/1298)
`/help`, `/model` и другие slash-команды не работают в Telegram. Версия: v0.2.1-12-gb89f644.

**[BUG] Бесконечная отправка "typing" в Telegram**
🔗 [#1323](https://github.com/sipeed/picoclaw/issues/1323)
После начала разговора агент не перестаёт отправлять статус "печатает". Версия: v0.2.1 docker-compose.

**[BUG] MiniMax официальный endpoint не поддерживается**
🔗 [#1320](https://github.com/sipeed/picoclaw/issues/1320)
**Исправляющий PR:** [#1345](https://github.com/sipeed/picoclaw/pull/1345) — включение `reasoning_split` для MiniMax, чтобы CoT не попадал в поле `content`. Ожидает merge.

### 🟡 Средний приоритет

| Issue | Описание | PR с фиксом |
|-------|----------|-------------|
| [#1305](https://github.com/sipeed/picoclaw/issues/1305) | Новый баннер пишет в STDOUT, ломает `completion` shell | Нет |
| [#1310](https://github.com/sipeed/picoclaw/issues/1310) | Неверная обработка wide-символов в интерактивном режиме | Нет |
| [#1315](https://github.com/sipeed/picoclaw/issues/1315) | `TOOLS.md` в workspace не подключается | Нет |
| [#1280](https://github.com/sipeed/picoclaw/issues/1280) | IRC: китайские запятые в конфиге вместо английских | Нет |
| [#1281](https://github.com/sipeed/picoclaw/issues/1281) | Feishu: не отображается user_id отправителя и упомянутых | [#1344](https://github.com/sipeed/picoclaw/pull/1344) |
| [#1297](https://github.com/sipeed/picoclaw/issues/1297) | Баг маршрутизации light-модели | Нет |

**Дополнительные PR, улучшающие стабильность:**
- [#1346](https://github.com/sipeed/picoclaw/pull/1346) — унификация `EffectiveReasoning()` в `LLMResponse`
- [#1237](https://github.com/sipeed/picoclaw/pull/1237) — очистка `<think>...</think>` тегов, просачивающихся в контент
- [#1319](https://github.com/sipeed/picoclaw/pull/1319) — исправление логики пропуска финального ответа в message tool

---

## 6. Запросы на функции

### 🚀 С высокой вероятностью войдут в следующий релиз

**[Feature] Поддержка WeCom WebSocket (длинные соединения)**
🔗 Issues: [#1276](https://github.com/sipeed/picoclaw/issues/1276) | PR: [#1338](https://github.com/sipeed/picoclaw/pull/1338), [#1295](https://github.com/sipeed/picoclaw/pull/1295)
Два независимых PR реализуют поддержку нового WebSocket-режима Enterprise WeChat AI Bot. Дублирование усилий — требует консолидации, но высокий спрос ускорит принятие.

**[Feature] Поддержка субагентов с доступом к инструментам**
🔗 [#1278](https://github.com/sipeed/picoclaw/issues/1278)
Явный, конфигурируемый доступ субагентов к инструментам (`read_file`, `write_file`, `exec`, `web_search`). Критично для автономных рабочих процессов.

**[Feature] Event-driven агентный цикл**
🔗 [#1316](https

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 Дайджест проекта NanoClaw — 11 марта 2026

---

## 1. Обзор дня

Проект демонстрирует высокую активность: за последние 24 часа зафиксировано 19 issues и 40 pull requests. Команда сосредоточена на устранении системных проблем совместимости — в частности, с OpenRouter и нестандартными контейнерными средами. Параллельно активно продвигается архитектурная работа над автономным обучением агентов (structured memory, skill self-creation). Несмотря на отсутствие новых релизов, объём мержей и исправлений свидетельствует о подготовке к следующей версии. Сигнализирует о росте популярности проекта появление внешнего инструмента ByeByeClaw (#955) от стороннего участника — характерный признак формирования экосистемы.

---

## 2. Релизы

*Новых релизов за отчётный период не было. Раздел пропущен.*

---

## 3. Прогресс проекта

### Смерженные и закрытые PR (17 из 40):

**Ключевые закрытия:**

- **[#953](https://github.com/qwibitai/nanoclaw/pull/953)** — `feat: attachment forwarding, deploy button, restart fixes` (@davekim917) — крупная функциональность: пересылка изображений и документов во все 4 канала (Discord, Slack, Telegram, WhatsApp). Изображения ресайзятся для Claude Vision и передаются как base64, документы монтируются как read-only в `/workspace/attachments/`. Добавлена кнопка Deploy и исправления рестарта.

- **[#949](https://github.com/qwibitai/nanoclaw/pull/949)** — `feat: Betty initial setup — Telegram + VPS fixes` (@jojo-dan) — интеграция Telegram, исправления dangling symlink `lchownSync`, прав root→uid 1000, IPC-разрешений. E2E-тесты на Telethon: 2/2 PASS.

- **[#947](https://github.com/qwibitai/nanoclaw/pull/947)** — Added codex support (@vireal01) — закрыт (вероятно, не прошёл ревью в текущем виде).

- **[#951](https://github.com/qwibitai/nanoclaw/pull/951)** — Закрыт в пользу более чистого [#954](https://github.com/qwibitai/nanoclaw/pull/954) (fix OpenRouter non-Anthropic model routing).

- **[#861](https://github.com/qwibitai/nanoclaw/pull/861)** — `fix(skill): use-local-whisper` читает конфиг из .env через `readEnvFile` — закрыт со статусом Blocked (исправление в другом PR).

- **[#549](https://github.com/qwibitai/nanoclaw/pull/549)** — Skill `/use-avian` для Avian LLM provider — закрыт после длительного нахождения в очереди.

**Закрытые issues:**

- **[#898–#892](https://github.com/qwibitai/nanoclaw/issues/898)** — серия из 6 автоматических issues о merge-forward failures в ветках `skill/apple-container`, `skill/compact`, `skill/ollama-tool` — все закрыты, конфликты по-видимому разрешены.

- **[#955](https://github.com/qwibitai/nanoclaw/issues/955)** — Анонс внешнего инструмента ByeByeClaw закрыт как информационный.

- **[#933–#935](https://github.com/qwibitai/nanoclaw/issues/933)** — Три пустых issue (`.`) от @hhoikoo, закрыты.

---

## 4. Горячие темы

> *Примечание: по имеющимся данным у большинства PR/Issues 0 реакций — активность измеряется количеством связанных PR и смысловой перекрёстностью.*

### 🔥 OpenRouter совместимость — системная боль

Проблема маршрутизации не-Anthropic моделей через OpenRouter превратилась в цепочку PR:

- **[#925](https://github.com/qwibitai/nanoclaw/pull/925)** — fallback к assistant message text при пустом `result` поле (актуально для `minimax/minimax-m2.5`)
- **[#954](https://github.com/qwibitai/nanoclaw/pull/954)** — чистый фикс OpenRouter/Anthropic SDK routing, заменяет закрытый #951
- **[#956](https://github.com/qwibitai/nanoclaw/pull/956)** — ранняя валидация учётных данных LLM на этапе `/setup`

Все три PR взаимосвязаны и отражают запрос пользователей на использование бесплатных/альтернативных моделей (например, `arcee-ai/trinity-large-preview:free`).

### 🔥 Автономное обучение агентов — архитектурный прорыв

Серия из 4 issues от @matt-carvalho формирует единую фичу:

- **[#910](https://github.com/qwibitai/nanoclaw/issues/910)** — Structured memory: USER.md + MEMORY.md с лимитами символов
- **[#911](https://github.com/qwibitai/nanoclaw/issues/911)** — IPC handler для самостоятельного создания навыков с security scanning
- **[#912](https://github.com/qwibitai/nanoclaw/issues/912)** — MCP tool `create_skill` для контейнерных агентов
- **[#913](https://github.com/qwibitai/nanoclaw/issues/913)** — Дополнения к system prompt для обучающего поведения

Это, по всей видимости, спланированная архитектурная задача, которая будет вынесена в отдельные PR.

### 🔥 Admin mode — управляемость агентов

- **[#926](https://github.com/qwibitai/nanoclaw/issues/926)** (@akshan-main) — первый инкремент admin mode: перехват команд в main channel, команда `/capabilities` (read-only). Задача трекируется по дизайн-документу от Gavriel.

---

## 5. Баги и стабильность

### 🔴 Критический

| Issue | Описание | Статус |
|-------|----------|--------|
| **[#825](https://github.com/qwibitai/nanoclaw/issues/825)** | Race condition в scheduler: once-task помечается completed до выполнения fire handler. Был root cause инцидента «faking tool calls» 08.03.2026 | OPEN, PR не связан явно |

### 🟠 Высокая критичность

| Issue | Описание | PR-исправление |
|-------|----------|----------------|
| **[#958](https://github.com/qwibitai/nanoclaw/issues/958)** | Пользователь не получает ответов после `/setup` — полный отказ базового сценария | **[#954](https://github.com/qwibitai/nanoclaw/pull/954)**, **[#956](https://github.com/qwibitai/nanoclaw/pull/956)** (косвенно) |
| **[#941](https://github.com/qwibitai/nanoclaw/issues/941)** | Излишняя перекомпиляция TypeScript при каждом запуске контейнера → задержки 2–5 минут, особенно на Apple Containers | **[#959](https://github.com/qwibitai/nanoclaw/pull/959)** — прямое исправление |

### 🟡 Средняя критичность

| Issue | Описание | PR-исправление |
|-------|----------|----------------|
| **[#898–#892](https://github.com/qwibitai/nanoclaw/issues/898)** (серия) | Merge-forward failures для skill branches (`skill/apple-container`, `skill/compact`, `skill/ollama-tool`) | Закрыты, вероятно разрешены вручную |

### ✅ Исправлено (PR в очереди на мерж)

- **[#930](https://github.com/qwibitai/nanoclaw/pull/930)** — автообновление истёкших OAuth токенов Claude Code (решает утренние 401 ошибки)
- **[#940](https://github.com/qwibitai/nanoclaw/pull/940)** — PID lockfile для предотвращения множественных инстансов (дублирующиеся ответы)
- **[#942](https://github.com/qwibitai/nanoclaw/pull/942)** — EACCES/ENOENT при запуске под root на Linux (VPS, systemd)
- **[#928](https://github.com/qwibitai/nanoclaw/pull/928)** — ротация сессионных JSONL-файлов при превышении ~5 МБ (таймауты агентов)
- **[#871](https://github.com/qwibitai/nanoclaw/pull/871)** — hardening credential proxy: безусловная OAuth инъекция, streaming, per-request credentials (security fix)

---

## 6. Запросы на функции

### 📦 Новые предложения:

**[#957](https://github.com/qwibitai/nanoclaw/issues/957) — Поддержка Podman как альтернативы Docker** (@fuyb)
Аргументы: Desktop Docker требует платной лицензии для коммерческого использования, Podman работает без демона (daemonless), поддерживает rootless-режим. Запрос касается в первую очередь документации, не кода. *Шансы на включение: высокие* — минимальные изменения, широкая полезность.

**[#926](https://github.com/qwibitai/nanoclaw/issues/926) — Admin mode с `/capabilities`** (@akshan-main)
Первый инкремент системы администрирования. Судя по наличию дизайн-документа и High priority — *шансы на включение в следующую версию: высокие*.

### 📦 Продвигаемые фичи (серия @matt-carvalho):

| # | Фича | Приоритет |
|---|------|-----------|
| [#910](https://github.com/qwibitai/nanoclaw/issues/910) | Structured memory (USER.md/MEMORY.md) | Medium |
| [#911](https://github.com/qwibitai/nanoclaw/issues/911) | Skill self-creation IPC + security scanning | **High** |
| [#912](https://github.com/qwibitai/nanoclaw/issues/912) | `create_skill` MCP tool | Medium |
| [#913](https://github.com/qwibitai/nanoclaw/issues/913) | System prompt для learning behaviors | Medium |

Эта группа формирует *автономный цикл обучения агента* — стратегически важное направление для проекта.

### 📦 Готовые к ревью skills и интеграции:

- **[#795](https://github.com/qwibitai/nanoclaw/pull/795)** — `/setup-secrets` skill (sops+age шифрование .env)
- **[#597](https://github.com/qwibitai/nanoclaw/pull/597)** — Google Workspace MCP skill (12 сервисов Google)
- **[#921](https://github.com/qwibitai/nanoclaw/pull/921)** — Autonomous governance self-healing lanes (GitHub)

---

## 7. Фидбек пользователей

### 😤 Боли и проблемы:

**"Молчащий агент"** — наиболее болезненный сценарий:
> *«I run /setup and followed all steps. I send message, and never get reply»* — @FengqianLin, [#958](https://github.com/qwibitai/nanoclaw/issues/958)

Пользователь описывает замкнутый круг: Claude Code подтверждает что всё работает, но ответов нет. Это указывает на проблему с диагностикой — система не даёт понятных сигналов об ошибке конфигурации LLM-провайдера. PR [#956](https://github.com/qwibitai/nanoclaw/pull/956) (ранняя валидация credentials) напрямую адресует эту боль.

**Медлительность на Apple Containers:**
> *«наблюдаю, что ответы медленные»* — @vzaliva, [#941](https://github.com/qwibitai/nanoclaw/issues/941)

Анализ логов показал, что 2–5 минут тратится на перекомпиляцию TS при каждом старте контейнера. Реакция команды — PR [#959](https://github.com/qwibitai/nanoclaw/pull/959) создан в тот же день.

**OAuth token expiration:**
Молчащие 401-ошибки каждое утро — типичный сценарий для пользователей, использующих `CLAUDE_CODE_OAUTH_TOKEN`. Исправление [#930](https://github.com/qwibitai/nanoclaw/pull/930) давно ожидает мержа.

### 👍 Что нравится:

- Экосистема растёт: @wanikua создал независимый инструмент [ByeByeClaw](https://github.com/wanikua/byebyeclaw) для чистой деинсталляции всего Claw-семейства — косвенный индикатор востребованности проекта.
- Пользователи активно предлагают интеграции (Avian LLM, Podman, Google Workspace) — сообщество формирует рыночный запрос на экосистему провайдеров.

---

## 8. Накопленный бэклог

### ⚠️ Issues без PR-исправлений, долго открытые:

| Issue | Возраст | Проблема |
|-------|---------|----------|
| **[#825](https://github.com/qwibitai/nanoclaw/issues/825)** | 3 дня | Critical race condition в scheduler — был root cause реального инцидента, PR-исправление не прослеживается |

### ⏳ PR, долго ожидающие ревью:

| PR | Возраст | Описание |
|----|---------|----------|
| **[#597](https://github.com/qwibitai/nanoclaw/pull/597)** | 11 дней | Google Workspace MCP skill — большой охват (12 сервисов), нет движения |
|

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Дайджест проекта IronClaw — 2026-03-11

> **Источник:** [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | Период: 24 часа

---

## 1. Обзор дня

Проект демонстрирует исключительно высокий уровень активности: за сутки зафиксировано **50 pull request'ов**, из которых 42 ожидают merge, что свидетельствует о зрелой и насыщенной разработке. Только что состоялся релиз **v0.17.0** (10 марта), и в тот же день разработчики продолжают активно готовить следующую волну улучшений. Среди открытых PR прослеживается несколько стратегических направлений: рефакторинг onboarding-процесса, расширение экосистемы LLM-провайдеров, улучшение безопасности инструментов и производительности агентского цикла. Параллельно сохраняются два активных баг-репорта, затрагивающих системные компоненты (ngrok, WASM-инструменты), что требует оперативного внимания. CI-бот уже сформировал автоматический промоушен из staging, подтверждая высокую степень автоматизации процесса выпуска.

---

## 2. Релизы

### v0.17.0 — 2026-03-10
**Тег:** `v0.17.0` | [Страница релиза](https://github.com/nearai/ironclaw/releases/tag/v0.17.0)

#### Что добавлено

| # | Изменение | PR |
|---|-----------|-----|
| 1 | **Per-provider фильтрация неподдерживаемых параметров LLM** — каждый провайдер теперь получает только совместимые параметры запроса, что снижает ошибки при вызовах к разным бэкендам | [#809](https://github.com/nearai/ironclaw/pull/809), [#749](https://github.com/nearai/ironclaw/pull/749), [#728](https://github.com/nearai/ironclaw/pull/728) |
| 2 | **Persist `user_id` в `save_job` + экспозиция `job_id` в routine runs** — позволяет корректно атрибутировать задачи пользователям и отслеживать их в рамках плановых запусков | [#709](https://github.com/nearai/ironclaw/pull/709) |
| 3 | **Chained promotion PRs в CI** — автоматизация цепочки промоушенов staging → main для ускорения релизного цикла | — |

#### ⚠️ Потенциальные точки внимания
- Фильтрация параметров по провайдерам может **изменить поведение** существующих конфигураций, где нестандартные параметры передавались молча и игнорировались — теперь они явно отсекаются. Пользователям с кастомными провайдерами рекомендуется проверить совместимость.
- Изменение схемы `job_id` / `user_id` может потребовать **миграции существующих хранилищ задач**, если используется внешняя БД.

---

## 3. Прогресс проекта

За отчётный период смержено/закрыто **8 PR**. Ниже — значимые:

### ✅ Смержено / закрыто

**[#915](https://github.com/nearai/ironclaw/pull/915) — fix: resolve deferred review items from PRs #883, #848, #788** *(core, high risk)*
Критический патч, закрывающий три накопленных технических долга из ревью: исправлен удерживаемый через `.await` SIGHUP-лок (потенциальный дедлок в async-коде), а также два других отложенных элемента. Важное улучшение надёжности runtime.

**[#313](https://github.com/nearai/ironclaw/pull/313) — Fix bug with MCP auth** *(contributor: new)*
Исправлена ошибка, при которой аутентификация MCP всегда завершалась неудачей. Закрывает issue [#299](https://github.com/nearai/ironclaw/issues/299). Значимо для пользователей, интегрирующих MCP-совместимые инструменты.

**[#321](https://github.com/nearai/ironclaw/pull/321) — Port NPA psychographic profiling into IronClaw** *(closed, contributor: new)*
PR закрыт (не смержен). Попытка портировать 9-мерную психографическую систему профилирования пользователей. Закрытие без merge, вероятно, связано с концептуальными разногласиями или дублированием с PR [#927](https://github.com/nearai/ironclaw/pull/927).

**[#396](https://github.com/nearai/ironclaw/pull/396) — feat: add Avian as a named LLM provider** *(closed)*
Добавление провайдера [Avian](https://avian.io) (DeepSeek, Kimi, GLM, MiniMax) по аналогии с Tinfoil. Статус закрытия требует уточнения — возможно, включён в другой батч или отклонён.

**[#658](https://github.com/nearai/ironclaw/issues/658) — Discord WebSocket not using system proxy (wasm runtime)** *(закрыт без комментариев)*
Issue закрыт без публичного обсуждения — возможно, решение вошло в один из недавних релизов или проблема не воспроизведена.

---

## 4. Горячие темы

### 🔥 Наиболее обсуждаемые

**[#733](https://github.com/nearai/ironclaw/issues/733) — Bug: ngrok process becomes zombie after tunnel URL is obtained**
*(4 комментария, открыт 3 дня)*
Самый активно обсуждаемый issue на сегодня. Ngrok-процесс переходит в состояние `<defunct>` сразу после получения URL туннеля, что делает туннель недоступным (ERR_NGROK_3200). Задевает всех пользователей, использующих ngrok для внешнего доступа к агенту.

**[#840](https://github.com/nearai/ironclaw/issues/840) — onboard installs stale default WASM tool artifacts incompatible with host WIT 0.3.0**
*(3 комментария, открыт 1 день)*
Второй по обсуждаемости. Затрагивает onboarding-опыт новых пользователей: сразу после установки инструменты `github` и `web-search` отказывают из-за несовместимости WIT-версий (0.2.0 vs 0.3.0). Критично для первого впечатления от проекта.

### 📊 Тематические кластеры в PR

| Тема | Кол-во PR | Примеры |
|------|-----------|---------|
| Новые LLM-провайдеры | 2+ | [#921](https://github.com/nearai/ironclaw/pull/921) (Z.AI), [#693](https://github.com/nearai/ironclaw/pull/693) (Codex CLI OAuth) |
| Производительность агента | 2 | [#926](https://github.com/nearai/ironclaw/pull/926), [#924](https://github.com/nearai/ironclaw/pull/924) |
| Безопасность и блокировки | 2 | [#905](https://github.com/nearai/ironclaw/pull/905), [#915](https://github.com/nearai/ironclaw/pull/915) |
| Расширение инструментов | 2+ | [#920](https://github.com/nearai/ironclaw/pull/920) (Composio), [#911](https://github.com/nearai/ironclaw/pull/911) (HTTP) |
| Onboarding / UX | 1 | [#927](https://github.com/nearai/ironclaw/pull/927) |
| i18n | 1 | [#929](https://github.com/nearai/ironclaw/pull/929) |

---

## 5. Баги и стабильность

### 🔴 Критические

**[#869](https://github.com/nearai/ironclaw/issues/869) → [PR #905](https://github.com/nearai/ironclaw/pull/905) — Lock held across async I/O boundary blocks webhook processing**
*(исправление в ревью)*
`RwLock` read guard удерживался через `.send(msg).await` в **10 call sites** в 5 файлах каналов. При заполнении буфера mpsc-канала (ёмкость 256) это приводило к полной блокировке обработки вебхуков. PR [#905](https://github.com/nearai/ironclaw/pull/905) исправляет все 10 точек. Статус: **ожидает merge** — критично ускорить ревью.

### 🟠 Высокий приоритет

**[#733](https://github.com/nearai/ironclaw/issues/733) — Zombie ngrok процесс**
*(нет связанного PR)*
Процесс ngrok становится `<defunct>` после получения URL. Туннель падает с ERR_NGROK_3200. **Исправляющего PR пока нет** — требует внимания maintainer'ов.

**[#840](https://github.com/nearai/ironclaw/issues/840) — WIT-несовместимость WASM-инструментов при onboarding**
*(нет связанного PR)*
Свежая установка немедленно ломается из-за несоответствия версий WIT. Прямо связан с PR [#927](https://github.com/nearai/ironclaw/pull/927) (рефакторинг onboarding) — вероятно, будет решён в его рамках.

### 🟡 Средний приоритет

**[#893](https://github.com/nearai/ironclaw/issues/893) → [PR #926](https://github.com/nearai/ironclaw/pull/926) — Unconditional params clone в shared execution**
Каждый вызов инструмента выполнял глубокое клонирование JSON-параметров независимо от необходимости. Исправлено передачей ownership. Статус: **ожидает merge**.

**[#894](https://github.com/nearai/ironclaw/issues/894) → [PR #924](https://github.com/nearai/ironclaw/pull/924) — Unnecessary heap allocation в `truncate_for_preview`**
Аллокация строки происходила даже когда усечение не требовалось. Исправлено через `Cow<'_, str>`. Статус: **ожидает merge**.

### ✅ Закрытые баги

| PR/Issue | Описание |
|----------|----------|
| [#313](https://github.com/nearai/ironclaw/pull/313) | MCP auth всегда завершался ошибкой — исправлено |
| [#658](https://github.com/nearai/ironclaw/issues/658) | Discord WebSocket игнорировал системный прокси — закрыто |
| [#915](https://github.com/nearai/ironclaw/pull/915) | Три deferred review items (SIGHUP lock, async safety) — закрыто |

---

## 6. Запросы на функции

### 🆕 Новые предложения (сегодня)

**[PR #929](https://github.com/nearai/ironclaw/pull/929) — i18n: Chinese + English UI translations** *(contributor: new, size: XL)*
Полная интернационализация интерфейса с поддержкой zh-CN и en. Покрывает все UI-компоненты: auth, чат, память, задачи, расширения, логи. Для проекта с аудиторией в Азии — стратегически ценно. **Оценка включения в следующую версию: высокая** при условии одобрения архитектуры i18n.

**[PR #920](https://github.com/nearai/ironclaw/pull/920) — Native Composio tool integration** *(contributor: new, size: XL)*
Встроенная интеграция с Composio для подключения сторонних приложений через единый multiplexed-инструмент (4 действия: list, execute, connect, connected_accounts). Активируется через `COMPOSIO_API_KEY`. Расширяет экосистему без необходимости писать отдельные инструменты. **Оценка включения: средняя** — требует ревью по безопасности OAuth-flow.

**[PR #921](https://github.com/nearai/ironclaw/pull/921) — Z.AI Coding API provider** *(contributor: new, size: S)*
Минимальный PR добавления нового провайдера. По аналогии с предыдущими провайдерами — быстрый merge при соответствии стандарту. **Оценка включения: высокая**.

**[PR #693](https://github.com/nearai/ironclaw/pull/693) — Reuse Codex CLI OAuth tokens for ChatGPT** *(contributor: new, size: XL)*
Позволяет пользователям с подпиской OpenAI/ChatGPT использовать IronClaw без отдельного API-ключа, читая токены из `auth.json` Codex CLI. Снижает барьер входа. **Оценка включения: средняя** — сложность в стабильности стороннего формата auth.json.

**[PR #927](https://github.com/nearai/ironclaw/pull/927) — Chat onboarding & routine advisor** *(contributor: core, size: XL, risk: high)*
Замена 493-строчного `onboarding_chat.rs` на bootstrap-приветствие через LLM. Кардинальный пересмотр UX первого запуска. Одновременно решает issue [#840](https://github.com/nearai/ironclaw/issues/840). **Оценка включения: очень высокая** — инициатива core team.

### 📌 Более ранние предложения в работе

| PR | Описание | Статус |
|----|----------|--------|
| [#758](https://github.com/nearai/ironclaw/pull/758) | Миграция GitHub webhook нормализации в github-tool | В ревью, 2 дня |
| [#625](https://github.com/nearai/ironclaw/pull/625) | Programmatic Tool Calling (PTC) — ин

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# 📋 Дайджест TinyClaw — 2026-03-11

> **Проект:** [TinyClaw](https://github.com/TinyAGI/tinyclaw) | **Период:** 2026-03-11 (24 часа)

---

## 1. 🗓 Обзор дня

11 марта 2026 года стало одним из наиболее насыщенных технических дней для проекта TinyClaw: за сутки было закрыто **7 Pull Request-ов** и **1 Issue**, что свидетельствует об интенсивной работе команды по рефакторингу и стабилизации кодовой базы. Главным событием дня стало завершение масштабного перехода с монолитной архитектуры на **npm workspaces monorepo** — структурное изменение, которое затронуло практически все ключевые компоненты системы. Параллельно были устранены проблемы сборки в новой монорепо-среде и проведена миграция CLI с bash-скриптов на TypeScript. Активность сосредоточена преимущественно в аккаунте [@jlia0](https://github.com/jlia0), что указывает на работу небольшой ключевой команды. Новых релизов за отчётный период не было — команда, по всей видимости, готовит платформу к следующему стабильному выпуску.

---

## 2. 🚀 Релизы

*Новых релизов за 2026-03-11 не было. Раздел пропущен.*

---

## 3. ✅ Прогресс проекта

За отчётный период смержено/закрыто **7 PR**. Изменения сгруппированы по тематическим блокам:

### 🏗 Архитектурный рефакторинг (крупнейшее изменение дня)

**[#186](https://github.com/TinyAGI/tinyclaw/pull/186) — Переход на npm workspaces monorepo + SQLite-очередь**
*Автор: @jlia0 | Закрыт: 2026-03-11*

Наиболее значимый PR дня. Плоская структура `src/` разбита на **5 npm workspace-пакетов**:
- `@tinyclaw/core` — ядро системы
- `@tinyclaw/teams` — управление командами агентов
- `@tinyclaw/channels` — каналы взаимодействия
- `@tinyclaw/server` — серверная часть
- `@tinyclaw/visualizer` — визуализация

Критически важно: **BullMQ/Redis заменён на SQLite-очередь** на базе `better-sqlite3` с WAL-режимом. Монолитный `db.ts` (427 строк) сокращён до ~160-строчного `queues.ts`. Это снижает инфраструктурную зависимость (Redis больше не требуется) и упрощает деплой.

---

**[#187](https://github.com/TinyAGI/tinyclaw/pull/187) — Исправление сборки monorepo**
*Автор: @jlia0 | Закрыт: 2026-03-10*

Устранена гонка состояний при параллельной сборке workspace-пакетов: `npm run build --workspaces` заменён на `tsc --build` с поддержкой project references. Пакеты теперь собираются в правильном порядке зависимостей (сначала `@tinyclaw/core`, затем зависимые пакеты).

---

**[#188](https://github.com/TinyAGI/tinyclaw/pull/188) — Housekeeping: gitignore для tsbuildinfo**
*Автор: @jlia0 | Закрыт: 2026-03-10*

Технический chore-PR: файлы `*.tsbuildinfo` (кэш инкрементальной сборки TypeScript) добавлены в `.gitignore`. Логичное следствие перехода на `tsc --build`.

---

### 🖥 CLI и UX

**[#185](https://github.com/TinyAGI/tinyclaw/pull/185) — Миграция CLI на @clack/prompts**
*Автор: @jlia0 | Закрыт: 2026-03-11*

Более **1500 строк bash-скриптов** с `read`-промптами заменены на TypeScript-модули с использованием библиотеки `@clack/prompts`. Результат: улучшенная UX с цветным выводом, валидацией ввода и структурированными интерактивными сессиями. Изменение значительно повышает кросс-платформенность CLI.

---

### 🤖 Агентная логика и UI

**[#182](https://github.com/TinyAGI/tinyclaw/pull/182) — Автозапуск агента при переходе задачи в "In Progress"**
*Автор: @jlia0 | Закрыт: 2026-03-11*

Устранён лишний шаг в UX kanban-доски: теперь при перетаскивании задачи в колонку "In Progress" назначенный агент запускается автоматически. Ранее требовалось дополнительное нажатие кнопки "Send".

---

**[#183](https://github.com/TinyAGI/tinyclaw/pull/183) — Удаление события message_received и упрощение office UI**
*Автор: @jlia0 | Закрыт: 2026-03-11*

Удалено избыточное событие `message_received`, которое дублировало `agent_routed` без добавления новой информации. Office chat UI упрощён: activity bar заменён на чистый чат-интерфейс, отображающий только пользовательские запросы и ответы агентов.

---

### 🔌 Интеграции

**[#143](https://github.com/TinyAGI/tinyclaw/pull/143) — Новый AI-провайдер: Avian**
*Автор: @avianion | Закрыт: 2026-03-11*

Добавлена поддержка [Avian](https://avian.io) как нового AI-провайдера. Интеграция выполнена через нативный `fetch()` к OpenAI-совместимому API (`https://api.avian.io/v1/chat/completions`) с Bearer-аутентификацией через `AVIAN_API_KEY`. PR существовал с 2026-02-27 (12 дней до merge) — вероятно, ожидал завершения монорепо-рефакторинга.

---

## 4. 🔥 Горячие темы

Активность обсуждений в отчётный период была **минимальной**: большинство PR закрыты без зафиксированных комментариев, реакции (👍) отсутствуют у всех позиций.

Тем не менее выделяются два события с точки зрения внешнего интереса:

**[#189](https://github.com/TinyAGI/tinyclaw/issues/189) — ByeByeClaw: сторонний uninstall-инструмент**
*Автор: @wanikua | Закрыт в день создания*

Пользователь представил внешний open-source инструмент [ByeByeClaw](https://github.com/wanikua/byebyeclaw) — «чистый деинсталлятор» для TinyClaw и всего семейства Claw-агентов. Заявленные характеристики: 15 измерений сканирования, нулевые остатки после удаления, кросс-платформенность, двуязычный интерфейс. Issue был закрыт в тот же день — вероятно, как off-topic или самореклама, не требующая действий от основной команды. **Сам факт появления подобного инструмента косвенно свидетельствует о том, что у пользователей существуют затруднения с полным удалением TinyClaw**, что может указывать на проблемы с управлением конфигурацией и следами установки.

**[#172](https://github.com/TinyAGI/tinyclaw/pull/172) — Модуляризация каналов + TUI-канал**
*Автор: @dagelf | Статус: OPEN*

Единственный PR, ожидающий merge. Добавляет модульность в систему каналов и реализует TUI (Terminal User Interface) как пример. Подробная информация отсутствует в описании. Требует внимания со стороны мейнтейнеров.

---

## 5. 🐛 Баги и стабильность

### Критичность: Средняя (инфраструктурная)

**[#187](https://github.com/TinyAGI/tinyclaw/pull/187) — Гонка состояний при сборке monorepo** ✅ *Исправлен*
После рефакторинга #186 параллельная сборка workspace-пакетов приводила к сбоям: зависимые пакеты начинали компиляцию до завершения сборки `@tinyclaw/core`. Исправлено заменой `npm run build --workspaces` на `tsc --build`.

> ⚠️ **Примечание:** Переход с Redis/BullMQ на SQLite-очередь (PR #186) — потенциально высокорисковое изменение. SQLite в режиме WAL хорошо подходит для однопроцессных сценариев, но при росте нагрузки или multi-process деплое могут проявиться узкие места. На момент отчёта специфических баг-репортов по этой замене не зафиксировано.

---

## 6. 💡 Запросы на функции

За отчётный период явных Feature Request Issues не поступало. Однако из закрытых PR и активных Issues можно выделить направления, формирующие неявный бэклог запросов:

| Запрос | Источник | Вероятность включения |
|---|---|---|
| Модульная система каналов + TUI | [#172](https://github.com/TinyAGI/tinyclaw/pull/172) (OPEN) | Высокая — PR уже существует |
| Поддержка Avian AI | [#143](https://github.com/TinyAGI/tinyclaw/pull/143) | ✅ Включена |
| Чистый деинсталлятор (нативный) | [#189](https://github.com/TinyAGI/tinyclaw/issues/189) | Низкая — закрыто как внешний инструмент |
| Автоматизация kanban → агент | [#182](https://github.com/TinyAGI/tinyclaw/pull/182) | ✅ Включена |

**Вывод:** Наиболее релевантный запрос, ожидающий решения — PR [#172](https://github.com/TinyAGI/tinyclaw/pull/172) с модуляризацией каналов. TUI как канал взаимодействия расширяет сценарии использования TinyClaw в server-side и headless-средах.

---

## 7. 👥 Фидбек пользователей

Прямой пользовательский фидбек в отчётный период **крайне ограничен** (1 Issue с 1 комментарием, нулевые реакции на PR). Тем не менее, активность позволяет сделать ряд косвенных выводов:

### Что работает хорошо (по итогам PR):
- Команда оперативно реагирует на проблемы сборки (PR #186 → #187 → #188 за 2 дня)
- Упрощение UX (автозапуск агента в #182, чистый чат в #183) отражает реальные friction-точки пользователей
- Снижение инфраструктурных требований (Redis → SQLite) снижает барьер входа для self-hosted сценариев

### Потенциальные боли (косвенные сигналы):
- **Сложность удаления:** Появление [ByeByeClaw](https://github.com/wanikua/byebyeclaw) (#189) указывает на то, что пользователи испытывают трудности с полной деинсталляцией. Это классический сигнал о проблемах с управлением артефактами установки
- **Сложность CLI:** 1500+ строк bash-промптов до рефакторинга (#185) — явный технический долг, который мог создавать проблемы на Windows/нестандартных оболочках
- **Лишние шаги в UX:** Необходимость вручную нажимать "Send" после перемещения задачи (#182) — типичная боль, устранённая в этом цикле

---

## 8. 📦 Накопленный бэклог

### PR, требующие внимания:

**[#172](https://github.com/TinyAGI/tinyclaw/pull/172) — Модуляризация каналов + TUI** ⏳
*Автор: @dagelf | Открыт: 2026-03-09 | Ожидает: 2+ дня*
Единственный OPEN PR. Отсутствует описание, что затрудняет оценку готовности. Рекомендуется: запросить описание изменений у автора и провести code review в контексте нового монорепо-устройства (#186).

---

**[#143](https://github.com/TinyAGI/tinyclaw/pull/143) — Avian AI provider** ✅ *Закрыт, но с задержкой*
*Открыт: 2026-02-27 | Закрыт: 2026-03-11 | Время ожидания: 12 дней*
PR от внешнего контрибьютора (@avianion) пролежал 12 дней до merge. Для привлечения внешних контрибьюторов желательно сократить время review для сторонних интеграций.

---

### Issues без действий:

На момент отчёта **открытых Issues в бэклоге не выявлено** — единственный Issue (#189) закрыт в день создания. Это может означать как высокую скорость triaging, так и недостаточный приток пользовательских репортов.

---

## 📊 Сводная таблица активности

| Метрика | Значение |
|---|---|
| PR закрыто/смержено | 7 |
| PR ожидает

</details>