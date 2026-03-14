# Дайджест экосистемы OpenClaw 2026-03-01

> Issues: 101 | PRs: 500 | Проектов: 10 | Сгенерировано: 2026-03-01 11:42 UTC

[OpenClaw](https://github.com/openclaw/openclaw) · [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) · [EasyClaw](https://github.com/gaoyangz77/easyclaw) · [LobsterAI](https://github.com/netease-youdao/LobsterAI) · [ZeptoClaw](https://github.com/qhkm/zeptoclaw) · [NanoBot](https://github.com/HKUDS/nanobot) · [PicoClaw](https://github.com/sipeed/picoclaw) · [NanoClaw](https://github.com/qwibitai/nanoclaw) · [IronClaw](https://github.com/nearai/ironclaw) · [TinyClaw](https://github.com/TinyAGI/tinyclaw)

---

## Детальный отчёт OpenClaw

# OpenClaw — Дайджест проекта за 2026-03-01

---

## 1. Обзор дня

Проект OpenClaw демонстрирует исключительно высокую активность: за 24 часа зафиксировано **101 issue** (87 открытых/активных, 14 закрытых) и **500 pull request** (463 ожидают merge, 37 смержено или закрыто). Подобный объём активности — признак быстро растущей экосистемы с широкой базой контрибьюторов, однако соотношение открытых к закрытым PR (≈12:1) свидетельствует о перегруженности ревью-процесса. Новых релизов за сутки не было, что создаёт определённое давление: пользователи сообщают о накопившихся багах, не попавших ещё ни в один стабильный тег. Среди ключевых тем дня — критические регрессии в sandbox-инструментах (write/read), проблемы со стабильностью macOS-приложения, а также широкий спектр фиксов для каналов (Telegram, Slack, LINE, Discord). Проект явно находится в фазе активного масштабирования: число интеграций, платформ и участников растёт быстрее, чем успевает формализоваться процесс стабилизации.

---

## 2. Релизы

*Новых релизов за 2026-03-01 не было. Раздел пропущен.*

---

## 3. Прогресс проекта

За сутки смержено и закрыто **37 PR**. Среди заметных закрытых issues и PR:

| # | Что закрыто | Суть |
|---|---|---|
| [#16862](https://github.com/openclaw/openclaw/issues/16862) | **[CLOSED]** Web UI Error: missing scope: operator.read | Критический баг после апгрейда до 2026.2.14 — устранён |
| [#9491](https://github.com/openclaw/openclaw/issues/9491) | **[CLOSED]** Feature: Configurable Bootstrap Files | Запрос на конфигурируемые bootstrap-файлы — закрыт (реализован или отклонён) |
| [#3765](https://github.com/openclaw/openclaw/issues/3765) | **[CLOSED]** Exec tool errors forwarded to Telegram user | Утечка внутренних ошибок в Telegram-чат — исправлено |
| [#20484](https://github.com/openclaw/openclaw/issues/20484) | **[CLOSED]** Post-compaction audit warning triggers prompt injection detection | False-positive срабатывание защиты от prompt injection — закрыто |
| [#27862](https://github.com/openclaw/openclaw/issues/27862) | **[CLOSED]** CLI permanently stuck in "Message ordering conflict" | Неисправимый конфликт порядка сообщений — закрыт |
| [#27452](https://github.com/openclaw/openclaw/issues/27452) | **[CLOSED]** Feishu OpenAPI event push timeouts | Таймауты в Feishu-интеграции — закрыт |
| [#30534](https://github.com/openclaw/openclaw/issues/30534) | **[CLOSED]** Sandbox write/read tools fail: invalid shell syntax (do;) | Синтаксическая ошибка в sandbox-инструментах — закрыт |
| [#30572](https://github.com/openclaw/openclaw/pull/30572) | **[CLOSED PR]** Add Azure AI Foundry support | Поддержка Azure AI Foundry — закрыт (не смержен) |

Из заметных **активных PR**, продвигающих проект вперёд:

- **[#30594](https://github.com/openclaw/openclaw/pull/30594)** `fix(sandbox): allow mkdirp on existing workspace dirs` — напрямую закрывает критическую регрессию sandbox write (issues [#28734](https://github.com/openclaw/openclaw/issues/28734), [#30582](https://github.com/openclaw/openclaw/issues/30582)).
- **[#30584](https://github.com/openclaw/openclaw/pull/30584)** `fix(line): dedupe webhook message replays` — устраняет дублирование входящих сообщений LINE ([#30574](https://github.com/openclaw/openclaw/issues/30574)).
- **[#30583](https://github.com/openclaw/openclaw/pull/30583)** `fix: exit 0 when gateway is already running` — идемпотентный старт gateway ([#30532](https://github.com/openclaw/openclaw/issues/30532)).
- **[#30593](https://github.com/openclaw/openclaw/pull/30593)** `fix(agents): avoid duplicate user turns on retry` — предотвращает дублирование user-сообщений при retry.
- **[#29008](https://github.com/openclaw/openclaw/pull/29008)** `feat: add PostgreSQL as alternative datastore backend` — крупное архитектурное дополнение (L-размер), добавляет абстракцию хранилища данных.
- **[#27488](https://github.com/openclaw/openclaw/pull/27488)** `feat(ios): add Live Activity + Dynamic Island support` — поддержка Live Activity и Dynamic Island в iOS-приложении.

---

## 4. Горячие темы

### 🔥 Топ по вовлечённости сообщества

**[#16862](https://github.com/openclaw/openclaw/issues/16862) — Web UI Error: missing scope: operator.read**
*29 комментариев, 11 👍 — самый обсуждаемый issue за период*
Критический баг, возникший после апгрейда до 2026.2.14: при привязке Gateway к LAN WebUI отдаёт ошибку `missing scope: operator.read` на всех вкладках кроме Overview. Большое число реакций указывает на массовую воспроизводимость. Issue закрыт, что свидетельствует о наличии исправления.

**[#14215](https://github.com/openclaw/openclaw/issues/14215) — Browser Control Broken**
*15 комментариев, 2 👍*
Автоматизация браузера нестабильна начиная с версии 2026.2.9 — Chrome extension relay и управляемые профили теряют соединение. Issue остаётся открытым уже с 11 февраля. Частично затрагивается в PR [#30575](https://github.com/openclaw/openclaw/pull/30575) (расширение таймаута старта браузера) и PR [#30580](https://github.com/openclaw/openclaw/pull/30580) (документация по надёжной автоматизации).

**[#29420](https://github.com/openclaw/openclaw/issues/29420) — Discord WebSocket reconnect drops events (seq gap), mentions lost**
*11 комментариев*
После обрыва Discord WebSocket (коды 1006/1005) gateway переподключается, но теряет события в промежутке — пропадают @mentions. Параллельно существует issue [#30514](https://github.com/openclaw/openclaw/issues/30514) об отсутствии авто-переподключения вовсе, и запрос [#30531](https://github.com/openclaw/openclaw/issues/30531) на proxy auto-failover от пользователей из Китая.

**[#18874](https://github.com/openclaw/openclaw/issues/18874) — Ollama local model never responds (CPU-only, no GPU)**
*5 комментариев, 1 👍*
Агент зависает в состоянии "thinking" без ошибки при работе с локальным Ollama на CPU. Смежная проблема с subagent-spawning для Ollama зафиксирована в [#24654](https://github.com/openclaw/openclaw/issues/24654).

**[#20711](https://github.com/openclaw/openclaw/issues/20711) — macOS app floods gateway with unauthorized role: node health requests**
*4 комментария, 2 👍 — помечен как stale*
macOS-приложение при запуске вызывает DoS собственного gateway: отправляет health-запросы в tight loop без backoff после получения `unauthorized`.

---

## 5. Баги и стабильность

### 🔴 Критические (блокируют работу)

| Issue | Описание | Статус | Фикс |
|---|---|---|---|
| [#28734](https://github.com/openclaw/openclaw/issues/28734) + [#30582](https://github.com/openclaw/openclaw/issues/30582) | **Sandbox write tool регрессия 2026.2.26**: невозможно создавать файлы в `/workspace/memory` при `workspaceAccess: rw` | 🔴 Открыт | PR [#30594](https://github.com/openclaw/openclaw/pull/30594) в ревью |
| [#30536](https://github.com/openclaw/openclaw/issues/30536) | **`thinking: high` блокирует event loop**: входящие сообщения теряются или задерживаются на 2–3 минуты при активном subagent | 🔴 Открыт | Нет PR |
| [#21009](https://github.com/openclaw/openclaw/issues/21009) | **Mac App перезаписывает openclaw.json**, удаляет `gateway.auth` → crash loop при `bind=lan` | 🔴 Открыт | Нет PR |
| [#20711](https://github.com/openclaw/openclaw/issues/20711) + [#21137](https://github.com/openclaw/openclaw/issues/21137) | **macOS app DoS gateway**: бесконечный retry без backoff при `unauthorized`, CPU 100% | 🔴 Открыт (stale) | Нет PR |
| [#30487](https://github.com/openclaw/openclaw/issues/30487) | **Embedded agent runs terminated mid-stream** на длинных ответах; follow-up сообщения молча дропаются | 🔴 Открыт | Нет PR |

### 🟠 Высокая важность

| Issue | Описание | Статус | Фикс |
|---|---|---|---|
| [#29420](https://github.com/openclaw/openclaw/issues/29420) | Discord WebSocket: потеря событий после reconnect, пропажа @mentions | 🟠 Открыт | Нет PR |
| [#30514](https://github.com/openclaw/openclaw/issues/30514) | Discord plugin не авто-переподключается после обрыва WebSocket | 🟠 Открыт | Нет PR |
| [#30197](https://github.com/openclaw/openclaw/issues/30197) | **Steer mode**: user message, пришедший во время heartbeat run, проглатывается | 🟠 Открыт | Нет PR |
| [#24800](https://github.com/openclaw/openclaw/issues/24800) | **Auto-compaction не срабатывает** в tool-use loops → unrecoverable context overflow | 🟠 Открыт | Нет PR |
| [#30574](https://github.com/openclaw/openclaw/issues/30574) | LINE: replay одного входящего сообщения как нескольких `user`-turns при ошибках провайдера | 🟠 Открыт | PR [#30584](https://github.com/openclaw/openclaw/pull/30584) |
| [#20963](https://github.com/openclaw/openclaw/issues/20963) | `openclaw update` не обновляет Gateway — silent version skew | 🟠 Открыт | Нет PR |
| [#21703](https://github.com/openclaw/openclaw/issues/21703) | CLI использует `ws://` вместо `wss://` при включённом TLS | 🟠 Открыт (stale) | Нет PR |
| [#30441](https://github.com/openclaw/openclaw/issues/30441) | Codex subagent эмитирует raw function-call синтаксис и галлюцинированные токены в Discord | 🟠 Открыт | Нет PR |

### 🟡 Средняя важность

| Issue | Описание | Статус | Фикс |
|---|---|---|---|
| [#29525](https://github.com/openclaw/openclaw/issues/29525) | Dashboard UI 404 в версии 2026.2.26 | 🟡 Открыт | Нет PR |
| [#30305](https://github.com/openclaw/openclaw/issues/30305) | LLM timeout при работе с remote Ollama (qwen3:30b) | 🟡 Открыт | Нет PR |
| [#30421](https://github.com/openclaw/openclaw/issues/30421) | TUI: команда `/compact` крашит терминальную сессию | 🟡 Открыт | Нет PR |
| [#29462](https://github.com/openclaw/openclaw/issues/29462) | Cron job: write tool возвращает error, хотя файл записан успешно | 🟡 Открыт | Нет PR |
| [#30311](https://github.com/openclaw/openclaw/issues/30311) | `models status --probe` ошибочно сообщает о "missing or expired" для exec-based SecretRef | 🟡 Открыт | Нет PR |
| [#30501](https://github.com/openclaw/openclaw/issues/30501) | Telegram Topics: `maxConcurrent` игнорируется, запросы выполняются последовательно | 🟡 Открыт | Нет PR |
| [#20549](https://github.com/openclaw/openclaw/issues/20549) | HTTP_PROXY/HTTPS_PROXY не соблюдаются undici fetch | 🟡 Открыт (stale) | Нет PR |
| [#29254](https://github.com/openclaw/openclaw/issues/29254) | Skill eligibility checks (`requires.bins`) выполняются на gateway host, а не в sandbox | 🟡 Открыт | Нет PR |

### Исправления, уже имеющие PR на ревью

- **Sandbox mkdirp регрессия** → [PR #30594](https://github.com/openclaw/openclaw/pull/30594)
- **LINE webhook replay dedupe** → [PR #30584](https://github.com/openclaw/openclaw/pull/30584)
- **Gateway idempotent start** → [PR #30583](https://github.com/openclaw/openclaw/pull/30583)
- **Slack HTTP mode без appToken** → [PR #30596](https://github.com/openclaw/openclaw/pull/30596) + [PR #30571](https://github

---

## Сравнение экосистемы

# Сравнительный анализ экосистемы AI-агентов — 2026-03-01

---

## 1. Панорама экосистемы

Open-source пространство AI-агентов и персональных ассистентов находится в фазе интенсивного горизонтального роста: проекты одновременно расширяют число поддерживаемых каналов коммуникации (Telegram, Discord, Feishu, WhatsApp, LINE), интегрируют новые LLM-провайдеры и экспериментируют с архитектурными примитивами — плагинными системами, мультимодальностью и многоуровневой памятью. Общая болевая точка экосистемы — разрыв между скоростью добавления функций и пропускной способностью code review: у большинства проектов соотношение открытых к закрытым PR превышает 5:1, что сигнализирует о системном дефиците мейнтейнеров. Проблемы стабильности при масштабировании (утечки памяти, OOM, потеря событий при реконнекте WebSocket) воспроизводятся независимо в каждом проекте, что указывает на структурные, а не случайные причины. Запрос на поддержку множества LLM-провайдеров и снижение зависимости от единственного вендора становится стратегическим дифференциатором: проекты с жёсткой привязкой к одному API (NanoClaw → Anthropic) испытывают явное давление сообщества. WASM-плагины, PostgreSQL как альтернативный бэкенд хранилища и нативная мультимодальность переходят из категории «продвинутые фичи» в категорию «таблица ставок».

---

## 2. Сравнение активности

| Проект | Issues (открыт/закрыт) | PR (открыт/закрыт) | Релизы | Соотн. откр./закр. PR | Оценка здоровья |
|---|---|---|---|---|---|
| **OpenClaw** | 87 / 14 | 463 / 37 | — | ≈12:1 | 🟡 Высокая активность, перегруженный review-процесс |
| **NanoBot** | 20 / 2 | 54 / 15 | v0.1.4.post3 | ≈3.6:1 | 🟢 Лучший баланс, активные релизы |
| **Zeroclaw** | 11 / 0 | 45 / 5 | — | 9:1 | 🟡 Целенаправленный спринт, накапливается очередь |
| **IronClaw** | 17 / 17 | 14 / 20 | — (v0.13.0 в PR) | 0.7:1 | 🟢 Лучшая утилизация review, фокус на стабилизации |
| **NanoClaw** | 6 / 0 | 24 / 8 | — | 3:1 | 🟡 Критические баги без merge, риск production |
| **ZeptoClaw** | 10 / 3 | 5 / 4 | — | 1.25:1 | 🟢 Высокая эффективность, малый масштаб |
| **LobsterAI** | 7 / 1 | 0 / 2 | — | н/д | 🟡 Умеренно, регрессии после 0.1.22 |
| **TinyClaw** | 2 / 1 | 2 / 0 | — | — | 🟡 Низкая активность, вопросы к документации |
| **EasyClaw** | 1 / 0 | 0 / 0 | — | — | 🔴 Минимальная активность, нет реакции команды |
| **PicoClaw** | н/д | н/д | — | н/д | ⚫ Нет данных |

> **Методология оценки здоровья:** учитываются скорость закрытия issues, соотношение открытых/закрытых PR, наличие релизов, реакция мейнтейнеров на критические баги.

---

## 3. Позиционирование OpenClaw

### Масштаб и экосистема

OpenClaw — **безусловный лидер по абсолютным объёмам активности**: 500 PR и 101 issue за 24 часа несопоставимы ни с одним другим проектом в выборке. Это отражает зрелую, широкую базу контрибьюторов и реальный production-спрос — количество номеров issues (#30534, #27862) указывает на десятки тысяч зафиксированных событий за историю проекта.

### Технические преимущества

| Измерение | OpenClaw | Конкуренты |
|---|---|---|
| **Ширина интеграций** | Telegram, Slack, LINE, Discord, Feishu, macOS-app, iOS Live Activity | Подмножества у каждого; ZeptoClaw — наиболее близко |
| **Зрелость архитектуры** | PostgreSQL backend (PR #29008), абстракция хранилища | LobsterAI и NanoBot — SQLite/нет абстракции |
| **iOS-нативность** | Dynamic Island, Live Activity (PR #27488) | Отсутствует у всех |
| **Sandbox-инфраструктура** | Выделенная sandbox с `workspaceAccess` | Только ZeptoClaw и NanoClaw имеют контейнерную изоляцию |
| **Безопасность** | Prompt injection detection, operator scope | IronClaw — сопоставимо; остальные — базовый уровень |

### Слабые стороны относительно конкурентов

- **Соотношение PR 12:1** (открытых к закрытым) — худший показатель review-эффективности в выборке. IronClaw при сопоставимой глубине изменений закрывает PR быстрее.
- **Накопленные критические баги без PR**: `thinking: high` блокирует event loop (#30536), macOS DoS (#20711) помечен как stale — IronClaw и ZeptoClaw демонстрируют более короткий цикл от issue до fix.
- **Отсутствие релизов** при накопленных исправлениях создаёт давление пользователей; NanoBot с релизом v0.1.4.post3 выглядит предпочтительнее для end-users.

---

## 4. Общие технические направления

Следующие темы независимо возникают в трёх и более проектах, что свидетельствует об отраслевых, а не проектных потребностях.

### 4.1 Мультипровайдерность и снижение vendor lock-in
**Проекты:** OpenClaw, NanoClaw (#80, 33 👍), LobsterAI (#185, #187), ZeptoClaw (#193, #207), NanoBot (#140), Zeroclaw (#2376)

Давление на поддержку альтернативных LLM-провайдеров нарастает по всей экосистеме. У NanoClaw это экзистенциальный риск (блокировки Anthropic-аккаунтов). LobsterAI столкнулся с переходом OpenAI на Responses API. ZeptoClaw запрашивает DeepSeek и Kimi. **Вывод:** поддержка нескольких провайдеров с горячим переключением — обязательная функция для production-grade агентов 2026 года.

### 4.2 Управление памятью и контекстом при длинных сессиях
**Проекты:** OpenClaw (#24800 — auto-compaction не срабатывает), Zeroclaw (#2381, #2386, #2378 — time-decay scoring, pre-compaction flush), NanoBot (#1363 — история subagents теряется), LobsterAI (#191 — API error после tool-вызовов), NanoClaw (OOM после 40 ч)

Все проекты независимо обнаруживают одну проблему: контекст деградирует при длинных сессиях — либо переполняется, либо некорректно обрезается, либо теряет важные факты. Zeroclaw предлагает наиболее системный ответ (многоуровневое ранжирование с decay), остальные решают симптомы.

### 4.3 Стабильность WebSocket и реконнект мессенджеров
**Проекты:** OpenClaw (#29420, #30514 — Discord seq gap), NanoBot (#215 — Feishu long-polling), LobsterAI (#187 — сторонние провайдеры), IronClaw (#392 — Telegram деактивируется после рестарта)

Потеря событий при реконнекте, отсутствие автоматического переподключения и сброс состояния после рестарта — системная проблема всех проектов с WebSocket-каналами. Ни один проект не реализовал полноценный sequence-gap detection с replay.

### 4.4 Мультимодальность (изображения, аудио)
**Проекты:** ZeptoClaw (#197 → PR #202, закрыто), Zeroclaw (#2376 — Gemini images, #2385 — BlueBubbles audio), NanoBot (PR #1341 Web Chat с медиа), LobsterAI (PR #83 — thinking filter для IM)

Переход к мультимодальным входам происходит одновременно во всей экосистеме. ZeptoClaw закрыл задачу быстрее всех (24 часа от issue до PR).

### 4.5 Изоляция сессий и multi-tenancy
**Проекты:** TinyClaw (#144 — per-thread isolation), NanoBot (#1302 — изоляция рабочих директорий), IronClaw (#348/#349 — layered memory multi-tenancy), Zeroclaw (#2369 — безопасность non-CLI каналов)

Все проекты, достигшие production-usage, обнаруживают, что разделяемое состояние между сессиями неприемлемо для реальных сценариев.

### 4.6 Windows-совместимость
**Проекты:** TinyClaw (#151 — ложная поддержка Windows), LobsterAI (#188 — зависимость от cygpath, PR #192), NanoBot (#1265 — NanoBot превосходит OpenClaw на Windows)

Windows остаётся недооценённой платформой. Проекты, инвестирующие в неё (LobsterAI с bundled Python runtime, NanoBot с нативным Windows-installer), получают конкурентное преимущество.

---

## 5. Дифференциация

| Измерение | OpenClaw | NanoBot | Zeroclaw | IronClaw | ZeptoClaw | NanoClaw | LobsterAI |
|---|---|---|---|---|---|---|---|
| **Язык реализации** | TypeScript/Node | Python | Rust | Rust | Rust | TypeScript | Python |
| **Первичная платформа** | Multi-channel gateway | Multi-channel (Python) | Multi-channel (Rust) | Multi-channel (Rust) | Telegram-first | WhatsApp-first | IM-боты (Feishu/Discord) |
| **Целевая аудитория** | Power users, devs, enterprise | Self-hosters, китайский рынок | Devs (library API) | Enterprise, security-focused | IoT + мессенджеры | Разработчики-hobbyists | Корпоративный Китай |
| **Отличительная архитектура** | Sandbox + iOS native | ClawHub skills marketplace | WASM plugins + Rust library API | Multi-tenancy + PostgreSQL TLS | Per-provider quota + MQTT | Контейнерная изоляция агентов | Bundled Python runtime |
| **Модели памяти** | Auto-compaction (баговая) | История сессий (с регрессиями) | Time-decay scoring (в разработке) | Layered sensitivity memory (в разработке) | Не задокументировано | Без LTM | SQLite-сессии |
| **Security posture** | Prompt injection detection | Базовый | Process exclusion по умолчанию | Secret scanning, TLS PG | Git blocklist | Command injection (активный баг!) | Базовый |

### Ключевые выводы по дифференциации

**Rust-проекты (Zeroclaw, IronClaw, ZeptoClaw)** демонстрируют принципиально иной подход: меньше issues, выше эффективность review, фокус на корректности и безопасности. Zeroclaw позиционируется как **library-first** (issue #2384 — public API для downstream), что открывает нишу для GUI-разработчиков поверх агентного ядра.

**NanoBot** — единственный проект с активным skills marketplace (ClawHub) и самой высокой частотой релизов, что делает его наиболее привлекательным для end-users, не готовых собирать из исходников.

**IronClaw** — аутлайер с точки зрения дисциплины: закрыто 17 из 19 issues за день, соотношение PR 0.7:1. Очевидный кандидат для enterprise-adoption, где стабильность важнее скорости.

---

## 6. Зрелость и активность сообществ

### Быстрая итерация (feature velocity > stability)

**OpenClaw** — максимальная скорость добавления функций, но критические баги (macOS DoS, sandbox regression) живут неделями. Сообщество огромное, но review-процесс не масштабируется.

**NanoBot** — высокий темп с попытками контроля через релизы. Характерный паттерн: merge → немедленный revert (#1371/#1372) указывает на недостаточное тестирование. 16 новых контрибьюторов за один релиз — взрывной рост с рисками качества.

**Zeroclaw** — целенаправленные спринты (3 взаимосвязанных PR от одного автора), но 45 ожидающих PR — нарастающий bottleneck.

### Стабилизация и качество

**IronClaw** — наиболее зрелый процесс: массовое закрытие issues через серию связанных PR, breaking changes вынесены в отдельный pre-release PR (#385), clippy lints для качества кода. **Рекомендуется как эталон process maturity для технических руководителей.**

**ZeptoClaw** — эффективность

---

## Отчёты смежных проектов

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Дайджест проекта Zeroclaw — 2026-03-01

---

## 1. Обзор дня

1 марта 2026 года проект Zeroclaw демонстрирует высокий уровень активности сообщества: за 24 часа открыто 11 новых issues и зафиксировано 50 pull request-ов, из которых 45 ожидают merge. Особенно заметен кластер предложений вокруг подсистемы памяти агента — за один день появились три взаимосвязанных issue и соответствующие PR от одного контрибьютора (@reidliu41), что свидетельствует о целенаправленной работе над улучшением долгосрочного контекста. Параллельно продвигается масштабная инфраструктурная работа: WASM-плагины (RMN-270/271), мультимодальные входы для Gemini и BlueBubbles, а также улучшения UX для Discord и UI конфигуратора. Релизов за отчётный период не было, проект находится в активной фазе разработки без формального выпуска версий. Общий темп — выше среднего для OSS-проекта такого масштаба: соотношение открытых/закрытых PR (45/5) указывает на накопление review-очереди.

---

## 2. Релизы

*Новых релизов за 2026-03-01 не было. Раздел пропущен.*

---

## 3. Прогресс проекта

За отчётные 24 часа смержено/закрыто **5 PR**. Среди них наиболее значимым является:

- **[#1363](https://github.com/zeroclaw-labs/zeroclaw/pull/1363) [CLOSED]** — `feat(plugins): add wasm plugin foundation and hook scaffolding (part 1/2)` (@gh-xj). Это фундаментальный PR, заложивший контракты плагинов, реестр и hook-скаффолдинг для WASM-runtime. Его закрытие разблокирует часть 2 ([#1365](https://github.com/zeroclaw-labs/zeroclaw/pull/1365)), которая добавляет полноценный WASM execution bridge с лимитами и документацией.

Таким образом, магистральный прогресс дня — **завершение первой фазы WASM-плагинной архитектуры**, что является стратегически важным шагом для расширяемости платформы.

---

## 4. Горячие темы

### Подсистема памяти агента — комплексный рефакторинг

Наиболее концентрированная активность дня — серия из трёх взаимосвязанных issues и PR от @reidliu41, формирующих единую архитектурную инициативу:

| Issue | PR | Тема |
|---|---|---|
| [#2386](https://github.com/zeroclaw-labs/zeroclaw/issues/2386) | [#2387](https://github.com/zeroclaw-labs/zeroclaw/pull/2387) | Time-decay scoring с evergreen-освобождением для Core-категории |
| [#2381](https://github.com/zeroclaw-labs/zeroclaw/issues/2381) | [#2382](https://github.com/zeroclaw-labs/zeroclaw/pull/2382) | Pre-compaction flush для сохранения фактов перед авто-компакцией |
| [#2378](https://github.com/zeroclaw-labs/zeroclaw/issues/2378) | [#2379](https://github.com/zeroclaw-labs/zeroclaw/pull/2379) | Score-буст для Core-категории при контекстном поиске |

**Анализ:** Все три issue получили по одному комментарию — реакция мейнтейнеров оперативная. Инициатива системная: текущий retrieval на BM25 + vector similarity без учёта времени и весовых категорий приводит к тому, что устаревшие записи конкурируют с актуальными на равных. Предлагаемое решение — многоуровневое ранжирование с экспоненциальным decay, буст для Core-фактов и защита долгосрочного контекста от потери при компакции. Вероятность включения в ближайший релиз — высокая, учитывая наличие готовых PR.

### WASM Plugin System (RMN-270/271)

- [#1363](https://github.com/zeroclaw-labs/zeroclaw/pull/1363) (закрыт) + [#1365](https://github.com/zeroclaw-labs/zeroclaw/pull/1365) (ожидает merge) — двухфазная реализация WASM plugin runtime от @gh-xj. Размер XL, риск: high. Включает execution bridge, resource limits, CI-интеграцию и документацию. Стратегически важно для позиционирования Zeroclaw как расширяемой платформы.

### Мультимодальность

- [#2376](https://github.com/zeroclaw-labs/zeroclaw/issues/2376) — отсутствие поддержки изображений в Gemini-провайдере при наличии такой поддержки у Anthropic/OpenAI. 
- [#1826](https://github.com/zeroclaw-labs/zeroclaw/pull/1826) — emit IMAGE-маркеров для Discord (паттерн уже реализован в qq.rs и linq.rs).
- [#2385](https://github.com/zeroclaw-labs/zeroclaw/pull/2385) — BlueBubbles: аудио через REST API + транскрипция через Whisper/Groq.

---

## 5. Баги и стабильность

### 🔴 S2 — Деградация поведения

**[#2367](https://github.com/zeroclaw-labs/zeroclaw/issues/2367) — `System prompt 'Current Date & Time' is stale across turns`**
(@liaowang11)
- **Компонент:** `runtime/daemon`
- **Суть:** Системный промпт фиксирует время при старте процесса и не обновляет его в ходе сессии. Повторный вопрос «который час?» возвращает устаревшее значение.
- **Серьёзность:** S2 (деградация поведения). Для ассистента, претендующего на контекстуальную осведомлённость, это значимый UX-баг.
- **Статус:** Открыт, 1 комментарий, PR не привязан.

### 🟡 Medium — Ошибки времени выполнения

**[#2061](https://github.com/zeroclaw-labs/zeroclaw/pull/2061) — UTF-8 panic в approval prompt**
(@stakeswky)
- **Суть:** Усечение preview аргументов по байтовому индексу 220 вызывает panic при многобайтовых символах (китайский текст и аналоги).
- **Фикс:** `str::floor_char_boundary(220)` — аккуратное, минималистичное решение.
- **Статус:** PR открыт, размер XS, риск medium — готов к merge.

**[#2174](https://github.com/zeroclaw-labs/zeroclaw/pull/2174) — Shadowed variable в provider routing**
(@Alyxs-Treehouse)
- **Суть:** Переменная `routes` перекрывается в scope, что нарушает инициализацию кастомных провайдеров и блокирует interactive prompts в integration tests.
- **Статус:** PR открыт, размер XS, риск medium.

**[#2177](https://github.com/zeroclaw-labs/zeroclaw/pull/2177) — Compilation errors**
(@killf)
- **Суть:** Три ошибки компиляции (отсутствующий `docx_read` модуль и др.) + предупреждения.
- **Статус:** PR открыт, размер XS, риск low — блокирует сборку для части разработчиков.

### Оценка стабильности

> Наличие незакрытых compilation errors и UTF-8 panic в production-path (`approval prompt`) при накопившейся очереди из 45 PR — умеренный риск. Рекомендуется приоритизировать [#2177](https://github.com/zeroclaw-labs/zeroclaw/pull/2177) и [#2061](https://github.com/zeroclaw-labs/zeroclaw/pull/2061) для merge.

---

## 6. Запросы на функции

### Приоритет: высокий (наличие готового PR)

| Issue | PR | Описание | Оценка |
|---|---|---|---|
| [#2386](https://github.com/zeroclaw-labs/zeroclaw/issues/2386) | [#2387](https://github.com/zeroclaw-labs/zeroclaw/pull/2387) | Time-decay scoring для памяти | Готов к ревью |
| [#2381](https://github.com/zeroclaw-labs/zeroclaw/issues/2381) | [#2382](https://github.com/zeroclaw-labs/zeroclaw/pull/2382) | Pre-compaction memory flush | Готов к ревью |
| [#2378](https://github.com/zeroclaw-labs/zeroclaw/issues/2378) | [#2379](https://github.com/zeroclaw-labs/zeroclaw/pull/2379) | Core-category score boost | Готов к ревью |
| [#2347](https://github.com/zeroclaw-labs/zeroclaw/issues/2347) | [#2354](https://github.com/zeroclaw-labs/zeroclaw/pull/2354) | Git commit hash в `--version` | Размер XS, риск high |

### Приоритет: средний (issue без PR)

**[#2365](https://github.com/zeroclaw-labs/zeroclaw/issues/2365) — Discord native approval buttons**
(@reidliu41) — замена текстовых slash-команд на Discord Components API (кнопки Approve/Deny). Значительно улучшает UX для Discord-канала. 1 комментарий, PR в работе.

**[#2376](https://github.com/zeroclaw-labs/zeroclaw/issues/2376) — Gemini multimodal input**
(@rajnaveen344) — структура `Part` у Gemini-провайдера поддерживает только текст, тогда как API поддерживает `inlineData`. Паритет с Anthropic/OpenAI критичен для мультимодальных сценариев.

**[#2384](https://github.com/zeroclaw-labs/zeroclaw/issues/2384) — Public API для library consumers**
(@zibo-chen) — `tool_specs()` accessor и `pub run_tool_call_loop` для downstream-разработчиков, строящих GUI поверх Zeroclaw без форка.

**[#2369](https://github.com/zeroclaw-labs/zeroclaw/issues/2369) — Исключение `process` из non-CLI каналов по умолчанию**
(@Lemonawa) — security posture improvement. `process` способен порождать долгоживущие shell-команды; в Discord/Telegram/Telegram-каналах это расширяет blast radius при compromised persistent approval.

### Приоритет: низкий / UX

- **[#2371](https://github.com/zeroclaw-labs/zeroclaw/issues/2371)** — Line numbers + syntax highlighting для config.toml в UI (@pgilad)
- **[#2377](https://github.com/zeroclaw-labs/zeroclaw/issues/2377)** — Auto-restart или debounce при изменении non-hot-reloadable конфига (@pgilad)

---

## 7. Фидбек пользователей

### Боли

**1. Потеря контекста в длинных сессиях**
Issues [#2381](https://github.com/zeroclaw-labs/zeroclaw/issues/2381), [#2386](https://github.com/zeroclaw-labs/zeroclaw/issues/2386), [#2378](https://github.com/zeroclaw-labs/zeroclaw/issues/2378) описывают единую боль: агент «забывает» предпочтения пользователя и принятые решения после авто-компакции истории. Особенно актуально для долгоживущих каналов (Telegram, Discord, CLI).

**2. Конфигурация требует ручного рестарта**
[#2377](https://github.com/zeroclaw-labs/zeroclaw/issues/2377) — пользователи (@pgilad) сталкиваются с тем, что изменение конфига через UI не применяется немедленно, а UI не сигнализирует о необходимости рестарта.

**3. Примитивный UX конфигуратора**
[#2371](https://github.com/zeroclaw-labs/zeroclaw/issues/2371) — конфиг.toml редактируется как plain text без подсветки синтаксиса и нумерации строк. При объёмных файлах навигация затруднена.

**4. Непоследовательная безопасность каналов**
[#2369](https://github.com/zeroclaw-labs/zeroclaw/issues/2369) — пользователи ожидают, что non-CLI каналы будут иметь более строгие дефолты по инструментам, аналогично тому, как `shell` уже исключён по умолчанию.

**5. Сложность отладки без commit hash**
[#2347](https://github.com/zeroclaw-labs/zeroclaw/issues/2347) — при репорте баги пользователи не могут точно идентифицировать сборку. `zeroclaw --version` показывает только semver.

### Сценарии использования, которые нравятся

- Использование Zeroclaw как **library dependency** в desktop GUI (issue [#2384](https://github.com/zeroclaw-labs/zeroclaw/issues/2384)) — свидетельство того, что проект востребован за пределами CLI-сценариев.
- **BlueBubbles + Whisper/Groq** ([#2385](https://github.com/zeroclaw-labs/zeroclaw/pull/2385)) — активная работа над нишевыми, но реальными use case (macOS iMessage через REST без Full Disk Access).
- **Discord как approval-канал** — сообщество активно использует Discord-интеграцию, что подтверждает запрос на нативные кнопки ([#2365](https://github.com/zeroclaw-labs/zeroclaw/issues/2365)).

---

## 8. Накопленный бэклог

### Долгоживущие PR (созданы до 2026-03-01, 

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# 📋 Дайджест проекта EasyClaw — 2026-03-01

> **Источник данных:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)
> **Период:** 2026-03-01 (24 часа)

---

## 1. 🗓 Обзор дня

Активность проекта EasyClaw за отчётный период остаётся минимальной: зафиксирован один новый Issue, Pull Request'ов и релизов не поступало. Это характерно для раннестадийного или нишевого проекта, находящегося в фазе первоначального пользовательского тестирования. Сообщество пока немногочисленно — обратная связь единична, но даже в малом объёме она указывает на конкретные функциональные ограничения продукта. Отсутствие ответов мейнтейнеров на открытые Issues вызывает вопросы к скорости реакции команды. Общая оценка активности: **низкая**.

---

## 2. 🚀 Релизы

*Новых релизов за отчётный период не выходило. Раздел пропущен.*

---

## 3. 🔀 Прогресс проекта

*Pull Request'ов за отчётный период не поступало — ни открытых, ни смерженных, ни закрытых.*

Движения в кодовой базе через механизм PR не зафиксировано. Нельзя исключать прямые коммиты в основную ветку в обход PR-процесса, однако по доступным данным подтвердить это невозможно. Прогресс за день: **отсутствует**.

---

## 4. 🔥 Горячие темы

### [Issue #3](https://github.com/gaoyangz77/easyclaw/issues/3) — Невозможность смены модели и отсутствие параллельных диалогов

| Параметр | Значение |
|---|---|
| Автор | @gxlqssjf |
| Статус | 🟡 OPEN |
| Реакции (👍) | 0 |
| Комментарии | 0 |
| Дата | 2026-03-01 |

Единственный активный тред за период. Несмотря на отсутствие реакций и комментариев — что объясняется свежестью публикации, — поднятые проблемы касаются базовой функциональности AI-чата и потенциально важны для широкого круга пользователей. Обсуждение пока не началось.

---

## 5. 🐛 Баги и стабильность

### Критичность: 🟠 Средняя / 🔴 Высокая (потенциально)

**[Issue #3](https://github.com/gaoyangz77/easyclaw/issues/3)** содержит описание как минимум трёх отдельных проблем:

1. **Невозможность переключения модели в рамках диалога** — пользователь не может сменить LLM-бэкенд (например, перейти с одной модели на другую) без перезапуска сессии. Для продукта, позиционирующего поддержку нескольких моделей, это функциональный регресс.

2. **Отсутствие поддержки параллельных диалогов** — невозможность вести несколько независимых диалоговых веток одновременно. Это серьёзное ограничение UX для пользователей, работающих в многозадачном режиме.

3. **Структурированный вывод вместо прямого текста** — ответы модели возвращаются с нежелательной структурой/разметкой вместо «чистого» контента. Вероятно, проблема на уровне парсинга или форматирования ответа API.

**PR с исправлениями:** отсутствуют.

---

## 6. ✨ Запросы на функции

На основе [Issue #3](https://github.com/gaoyangz77/easyclaw/issues/3) можно выделить следующие пожелания к функциональности:

| # | Функция | Приоритет (оценочно) | Сложность реализации |
|---|---|---|---|
| 1 | Динамическое переключение модели внутри активного диалога | 🔴 Высокий | Средняя |
| 2 | Поддержка множественных параллельных сессий / вкладок диалога | 🔴 Высокий | Высокая |
| 3 | Фильтрация/нормализация структурированного вывода (стриппинг разметки) | 🟠 Средний | Низкая |

**Вероятность включения в следующую версию:** функция #3 (нормализация вывода) наиболее вероятна как быстрый патч — реализуема без архитектурных изменений. Функции #1 и #2 требуют проработки state management и могут войти в более крупный релиз.

---

## 7. 💬 Фидбек пользователей

**Автор:** [@gxlqssjf](https://github.com/gxlqssjf)
**Источник:** [Issue #3](https://github.com/gaoyangz77/easyclaw/issues/3)

### Боли пользователя:
- 😤 **Жёсткая привязка к модели** на старте диалога без возможности смены — вынуждает пересоздавать сессию при необходимости смены LLM.
- 😤 **Монопольный режим диалога** — только один активный чат, что ограничивает продуктивность при работе с несколькими задачами одновременно.
- 😤 **«Грязный» вывод** — наличие структурных артефактов в ответах снижает читаемость и воспринимается как баг, а не фича.

### Сценарий использования (реконструкция):
Пользователь, по всей видимости, использует EasyClaw как персональный AI-ассистент для работы с несколькими LLM-провайдерами и нуждается в гибком переключении между ними в рамках единого рабочего пространства.

### Что нравится:
*Данных недостаточно для оценки — позитивный фидбек в открытых источниках за период отсутствует.*

---

## 8. 📦 Накопленный бэклог

По состоянию на 2026-03-01 отслеживается следующая картина бэклога:

| Issue | Статус | Возраст | Комментарии | Ответ команды |
|---|---|---|---|---|
| [#3](https://github.com/gaoyangz77/easyclaw/issues/3) | 🟡 OPEN | < 1 дня | 0 | ❌ Нет |

> ⚠️ **Наблюдение:** Отсутствие данных по Issues #1 и #2 не позволяет оценить общий накопленный бэклог и историческую скорость реакции мейнтейнеров. Если предыдущие Issues также остаются без ответа, это сигнализирует о системной проблеме с поддержкой проекта.

---

## 📊 Итоговая сводка дня

| Метрика | Значение |
|---|---|
| Новые Issues | 1 |
| Закрытые Issues | 0 |
| Новые PR | 0 |
| Смерженные PR | 0 |
| Новые релизы | 0 |
| Активность команды | 🔴 Низкая |
| Общее здоровье проекта | 🟡 Требует внимания |

---

*Следующий дайджест: 2026-03-02. Данные получены из публичного API GitHub.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📊 Дайджест проекта LobsterAI — 2026-03-01

> **Проект:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
> **Период:** 24 часа до 2026-03-01
> **Аналитик:** AI-обзор активности репозитория

---

## 1. 🗓️ Обзор дня

За последние 24 часа проект демонстрирует умеренную, но устойчивую активность: зафиксировано **8 issues** (7 открытых, 1 закрытый) и **2 PR** (оба успешно смержены/закрыты). Новых релизов не выходило, однако судя по тематике issues, последнее обновление до версии **0.1.22** спровоцировало ряд регрессий и вопросов от пользователей, в том числе потерю истории сессий. Большинство активных обсуждений сосредоточено вокруг проблем совместимости с моделями сторонних провайдеров и стабильности долгих диалогов. Команда поддерживает темп разработки: два значимых PR были закрыты, один из которых решает застарелую проблему с отображением «мыслей» модели в IM-клиентах.

---

## 2. 🚀 Релизы

> **Новых релизов за период не было.** Раздел пропущен.

---

## 3. ✅ Прогресс проекта

За отчётный период закрыты два pull request, продвинувшие проект вперёд:

### PR #192 — Встроенная поддержка Python-рантайма для Windows
🔗 [feature: add bundled Windows Python runtime support](https://github.com/netease-youdao/LobsterAI/pull/192)
**Автор:** @fisherdaddy | **Статус:** CLOSED (смержен)

**Что сделано:**
- В Windows-пакет встроен портативный интерпретатор Python — пользователям больше не нужно устанавливать Python вручную
- Рантайм синхронизируется в `userData` при запуске и автоматически добавляется в `PATH` для cowork-сессий, skills и skill services
- Добавлена проверка «health check» перед выполнением Python/pip-команд

**Значимость:** Высокая. Это устраняет серьёзный барьер для Windows-пользователей (см. [Issue #188](https://github.com/netease-youdao/LobsterAI/issues/188)), которые сталкивались с зависимостью от `cygpath` и необходимостью устанавливать Cygwin.

---

### PR #83 — Фикс отображения «мыслей» в Feishu и фильтрация thinking-контента в IM
🔗 [fix：飞书renderMode默认为card，支持markdown；IM返回过滤思考内容](https://github.com/netease-youdao/LobsterAI/pull/83)
**Автор:** @liugang519 | **Статус:** CLOSED (смержен)

**Что сделано:**
- Для Feishu (飞书) установлен `renderMode = card` по умолчанию, добавлена поддержка Markdown
- Реализована **фильтрация thinking-контента** при возврате ответов через IM-интеграции

**Значимость:** Высокая. Закрывает [Issue #28](https://github.com/netease-youdao/LobsterAI/issues/28) — давнюю жалобу на смешение «потока мыслей» модели с финальным ответом в Discord/IM-клиентах.

---

## 4. 🔥 Горячие темы

### 🗣️ Issue #187 — Не работают модели сторонних провайдеров
🔗 [非阿里模型好像都不能用](https://github.com/netease-youdao/LobsterAI/issues/187)
**Автор:** @JoJocoder | **Активность:** 2 комментария

Пользователь сообщает, что **модели не от Alibaba/Aliyun недоступны** — судя по скриншоту, это системная проблема, а не единичный случай. Тема потенциально затрагивает широкую аудиторию, использующую кастомные провайдеры. Требует приоритетного внимания команды.

---

### 🗣️ Issue #185 — Запрос поддержки нового API-формата OpenAI (Responses API)
🔗 [建议custom供应商支持 openai 的新格式](https://github.com/netease-youdao/LobsterAI/issues/185)
**Автор:** @lifang336 | **Активность:** 2 комментария

Пользователь указывает, что **модели OpenAI нового поколения** (в частности, gpt-5.3-codex) не работают через кастомный провайдер, поскольку OpenAI мигрировал с Chat Completions на [Responses API](https://developers.openai.com/api/reference/resources/responses). Если LobsterAI не адаптируется — совместимость с флагманскими моделями OpenAI будет деградировать со временем.

---

### 🗣️ Issue #28 — Thinking-контент в Discord (закрыт через PR #83)
🔗 [可以增加设置连接IM BOT后思考过程不显示给通讯软件吗？](https://github.com/netease-youdao/LobsterAI/issues/28)
**Автор:** @hagrid-105 | **Активность:** 3 комментария | **Статус:** CLOSED ✅

Проблема **смешения «потока мыслей»** с финальным ответом при использовании IM-интеграций (Discord, Feishu). Решена через PR #83 — факт быстрого реагирования команды заслуживает положительной оценки.

---

## 5. 🐛 Баги и стабильность

### 🔴 Критический: Потеря истории сессий после обновления до 0.1.22
🔗 [Issue #190 — LobsterAI可以支持的最大对话数是多少，如何恢复历史会话](https://github.com/netease-youdao/LobsterAI/issues/190)
**Автор:** @jojogh | **Ответов:** 0

После обновления до версии **0.1.22 вся история диалогов оказалась недоступна**. Регрессия данных — критический баг с точки зрения пользовательского опыта. PR с исправлением на момент дайджеста отсутствует.

---

### 🔴 Критический: API Error 400 при длинных сессиях
🔗 [Issue #191 — 单个session多次对话后容易出现API Error](https://github.com/netease-youdao/LobsterAI/issues/191)
**Автор:** @dolag233 | **Ответов:** 0

После нескольких раундов диалога в одной сессии система падает с ошибкой:
```
API Error: 400 — Invalid request: an assistant message with 'tool_calls'
must be followed by tool messages responding to each 'tool_call_id'
```
Судя по описанию, проблема в **некорректном управлении историей tool-вызовов**: при обрезке контекста теряются ответы на `tool_call_id`, что делает дальнейший диалог невозможным. Исправляющего PR нет.

---

### 🟠 Высокий: Claude Code зависает после конфигурации IMAP
🔗 [Issue #139 — error: Claude Code process exited with code 1](https://github.com/netease-youdao/LobsterAI/issues/139)
**Автор:** @openclaw-ai-assistant | **Ответов:** 1

После того как ассистент **самостоятельно настраивал email IMAP**, процесс Claude Code падал с кодом 1 и не восстанавливался. Проблема указывает на отсутствие механизма graceful recovery после сбоя дочернего процесса. Активность низкая — 1 комментарий за 3 дня.

---

### 🟠 Высокий: Skills не работают из-за зависимости от cygpath (Windows)
🔗 [Issue #188 — skill默认是全开的，但是啥都调用不了](https://github.com/netease-youdao/LobsterAI/issues/188)
**Автор:** @jeff-wangzhen | **Ответов:** 1

На Windows skills/инструменты не функционируют, так как система **неявно зависит от `cygpath`** (утилита Cygwin), что не задокументировано. Частично решается через **PR #192** (встроенный Python-рантайм), однако проблема с `cygpath` может сохраняться отдельно.

---

### 🟡 Средний: Модели сторонних провайдеров не работают
🔗 [Issue #187](https://github.com/netease-youdao/LobsterAI/issues/187) — см. раздел «Горячие темы»

---

## 6. 💡 Запросы на функции

### Поддержка нового OpenAI Responses API
🔗 [Issue #185](https://github.com/netease-youdao/LobsterAI/issues/185)
**Приоритет:** Высокий
OpenAI активно мигрирует на Responses API. Без адаптации LobsterAI потеряет поддержку новых моделей OpenAI. **Вероятность включения в следующую версию: высокая** — это необходимость, а не опция.

---

### Поддержка OAuth для OpenAI
🔗 [Issue #189 — 请问支持openai的OAuth 吗？](https://github.com/netease-youdao/LobsterAI/issues/189)
**Автор:** @yangwang2 | **Ответов:** 0
Запрос на поддержку OAuth-авторизации для OpenAI-провайдера. Актуально для корпоративных сценариев. **Вероятность включения в следующую версию: низкая** — требует архитектурных изменений в слое аутентификации.

---

### Фильтрация thinking-контента для IM-интеграций
🔗 [Issue #28](https://github.com/netease-youdao/LobsterAI/issues/28) → **✅ Реализовано в PR #83**
Функция уже включена в кодовую базу.

---

## 7. 💬 Фидбек пользователей

### Боли и проблемы

| Категория | Суть | Частота упоминаний |
|---|---|---|
| **Совместимость моделей** | Модели не-Alibaba провайдеров недоступны | 🔴 Высокая |
| **Потеря данных** | История сессий исчезла после обновления | 🔴 Высокая |
| **Стабильность длинных диалогов** | API error при многоходовых сессиях | 🟠 Средняя |
| **Windows-специфика** | Скрытые зависимости (cygpath), сложность настройки | 🟠 Средняя |
| **IM-интеграции** | Thinking-контент «течёт» в мессенджеры | 🟡 Решено в PR #83 |
| **Документация** | Зависимости не задокументированы | 🟡 Средняя |

### Позитивные сигналы
- Пользователи **активно экспериментируют** с различными LLM-провайдерами (Minimax M2.5, Claude, GPT-5.3-codex) — свидетельство широкого интереса к продукту
- Запрос на OAuth указывает на интерес к **корпоративному использованию**
- PR #83 от участника сообщества @liugang519 демонстрирует, что **внешние контрибьюторы** активно участвуют в развитии проекта

### Сценарии использования
На основе issues видно, что пользователи применяют LobsterAI для:
- 🤖 **IM-ботов** (Discord, Feishu) с reasoning-моделями
- 📧 **Email-автоматизации** (настройка IMAP через агента)
- 💻 **Coding-ассистента** (через Claude Code интеграцию)
- 🔌 **Мультипровайдерного окружения** (кастомные OpenAI-совместимые endpoints)

---

## 8. 📚 Накопленный бэклог

### Issue #139 — Claude Code process exited with code 1 (5 дней без решения)
🔗 [https://github.com/netease-youdao/LobsterAI/issues/139](https://github.com/netease-youdao/LobsterAI/issues/139)
Открыт **2026-02-26**, всего 1 комментарий. Баг делает систему **нерабочей после сбоя** — отсутствие механизма восстановления критично для production-сценариев. Требует эскалации.

---

### Issue #28 — Thinking в IM (решён с задержкой ~7 дней)
🔗 [https://github.com/netease-youdao/LobsterAI/issues/28](https://github.com/netease-youdao/LobsterAI/issues/28)
Открыт **2026-02-21**, закрыт **2026-02-28** через PR #83. Задержка в 7 дней при наличии внешнего контрибьютора, готового сделать PR — говорит о потенциальных узких местах в процессе code review.

---

### Новые issues без единого ответа (риск выгорания пользователей)

| Issue | Дней без ответа | Критичность |
|---|---|---|
| [#191 — API Error в длинных сессиях](https://github.com/netease-youdao/LobsterAI/issues/191) | <1 дня | 🔴 |
| [#190 — Потеря истории после 0.1.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# Дайджест проекта ZeptoClaw — 2026-03-01

> **Источник:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | Период: 24 часа до 2026-03-01

---

## 1. Обзор дня

За отчётный период проект демонстрирует высокую активность со стороны основного мейнтейнера (@qhkm): закрыты 4 PR и 3 Issue, что свидетельствует о системной работе по реализации ранее запланированных функций. Суммарно зафиксировано 10 Issues и 5 PR за 24 часа — для проекта подобного масштаба это сильный показатель. Большая часть закрытых PR представляет собой реализацию конкретных feature-задач (мультимодальность, инструменты, авторизация), что говорит о целенаправленном спринте разработки. Сообщество пока относительно пассивно — реакции (👍) на Issues отсутствуют, а внешние контрибьюторы представлены лишь единицами. Открытым остаётся потенциально критичный PR по безопасности (#195), требующий приоритетного рассмотрения.

---

## 2. Релизы

*Новых релизов за отчётный период не было. Раздел пропущен.*

---

## 3. Прогресс проекта

За сутки смержены/закрыты 4 PR, что составляет основной объём продвижения:

### ✅ Смержённые Pull Requests

| PR | Описание | Закрывает Issue |
|----|----------|-----------------|
| [#206](https://github.com/qhkm/zeptoclaw/pull/206) | **feat(tools): DOCX text extraction** — инструмент `docx_read` для извлечения текста из DOCX-файлов на базе уже имеющихся зависимостей `zip` + `quick-xml`. Дополняет существующий `pdf_read`. | [#201](https://github.com/qhkm/zeptoclaw/issues/201) |
| [#205](https://github.com/qhkm/zeptoclaw/pull/205) | **feat(auth): OpenAI OAuth / Codex CLI auth** — импорт токенов из `~/.codex/auth.json` или macOS Keychain, браузерный OAuth-флоу через `auth.openai.com` как fallback. Новый модуль `src/auth/codex_import.rs`. | [#203](https://github.com/qhkm/zeptoclaw/issues/203) |
| [#202](https://github.com/qhkm/zeptoclaw/pull/202) | **feat: multimodal vision/image input** — нативный enum `ContentPart` с вариантами `Text`/`Image`, поддержка нескольких вложений (`Vec<MediaAttachment>`), интеграция со всеми каналами (Telegram, Discord, WhatsApp, Slack, Lark, email). | [#197](https://github.com/qhkm/zeptoclaw/issues/197) |
| [#204](https://github.com/qhkm/zeptoclaw/pull/204) | **docs: дисклеймер об отсутствии токена/крипто/блокчейна** — превентивная мера для защиты репутации проекта от возможных мисинтерпретаций. | — |

### 📌 Ожидает merge

- [#195](https://github.com/qhkm/zeptoclaw/pull/195) — **fix(safety): блокировка деструктивных git-операций** (открыт с 2026-02-28, подробнее — в разделе «Баги и стабильность»).

---

## 4. Горячие темы

Несмотря на относительно низкий уровень публичного engagement (отсутствие 👍-реакций), тематически наиболее значимыми являются:

### 🔥 LLM endpoint switching on the fly — [#193](https://github.com/qhkm/zeptoclaw/issues/193)
- **Автор:** @superhero75 | 3 комментария — **самый обсуждаемый Issue за период**
- **Суть:** Предложение добавить команды `/models` и `/model` в Telegram-интерфейс для динамической смены LLM-эндпоинта без перезапуска агента. Мотивация — rate limits провайдеров.
- **Анализ:** Запрос технически реализуем и высоко востребован в multi-provider средах. Отсылка к «openclaw feature» может указывать на аналогичную реализацию в форке или смежном проекте, что стоит изучить для ускорения реализации.

### 🔥 Мультимодальность — [#197](https://github.com/qhkm/zeptoclaw/issues/197) → [#202](https://github.com/qhkm/zeptoclaw/pull/202)
- **Статус: реализовано.** Сам мейнтейнер сформулировал задачу как «table stakes для мессенджер-платформы в 2026 году» — это корректная оценка рынка. Закрытие в течение ~24 часов после открытия Issue говорит о заранее подготовленной реализации.

### 🔥 Support DeepSeek и Kimi — [#207](https://github.com/qhkm/zeptoclaw/issues/207)
- **Автор:** @jxnding | только открыт, без комментариев
- **Анализ:** DeepSeek и Kimi — активно растущие провайдеры с открытыми API. Запрос закономерен на фоне уже существующей поддержки OpenRouter, Ollama и NVIDIA NIM. Потенциально реализуется через механизм preset'ов (аналогично [#198](https://github.com/qhkm/zeptoclaw/issues/198)).

---

## 5. Баги и стабильность

### 🔴 Высокая критичность

**[#194](https://github.com/qhkm/zeptoclaw/issues/194) / [PR #195](https://github.com/qhkm/zeptoclaw/pull/195) — Обход shell-блокировки деструктивными git-командами**

- **Проблема:** Субагенты, делегированные через `DelegateTool`, получают доступ к инструменту `shell` по умолчанию. Инструмент `git` (`src/tools/git.rs`) блокирует `push --force`, однако субагент может обойти эту защиту напрямую через shell, выполнив `git push --force`, `git reset --hard`, `git rebase` на shared-ветках.
- **Уязвимые компоненты:** `src/security/` — shell blocklist.
- **Исправление:** PR [#195](https://github.com/qhkm/zeptoclaw/pull/195) добавляет 6 regex-паттернов, блокирующих: `push --force/-f`, `reset --hard`, `clean -f`, `checkout -- .`, `branch -D`.
- **Статус:** ⚠️ **PR открыт с 2026-02-28, ещё не смержен** — при том что Issue #194 была открыта тем же днём. Это самый критичный нерешённый элемент на сегодня: уязвимость в модели безопасности при наличии готового патча недопустимо долго остаётся открытой.

> **Рекомендация:** Приоритетный merge PR #195 до следующего релиза.

---

## 6. Запросы на функции

Всего зафиксировано **7 feature-запросов** за период (включая только что открытые):

| Issue | Функция | Автор | Оценка приоритета |
|-------|---------|-------|-------------------|
| [#207](https://github.com/qhkm/zeptoclaw/issues/207) | Поддержка DeepSeek и Kimi | @jxnding | 🟡 Средний — популярные провайдеры, реализуется через presets |
| [#200](https://github.com/qhkm/zeptoclaw/issues/200) | Per-provider quota management | @qhkm | 🔴 Высокий — критично для production/multi-user деплоев |
| [#199](https://github.com/qhkm/zeptoclaw/issues/199) | MQTT-канал для IoT | @qhkm | 🟡 Средний — нишевая, но стратегически важная для IoT-позиционирования |
| [#198](https://github.com/qhkm/zeptoclaw/issues/198) | Azure OpenAI + Amazon Bedrock presets | @qhkm | 🔴 Высокий — enterprise adoption |
| [#196](https://github.com/qhkm/zeptoclaw/issues/196) | Web search через SearXNG | @superhero75 | 🟡 Средний — self-hosted альтернатива, малая область изменений |
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) | LLM endpoint switching в Telegram | @superhero75 | 🔴 Высокий — UX/операционная необходимость при rate limits |

### Что может войти в следующую версию:

**Наиболее вероятные кандидаты** (исходя из активности мейнтейнера и готовности архитектуры):
1. **Per-provider quota management** [#200](https://github.com/qhkm/zeptoclaw/issues/200) — инфраструктура (`TokenBudget`, `utils/cost.rs`) уже существует, задача сформулирована самим мейнтейнером.
2. **Azure OpenAI + Bedrock presets** [#198](https://github.com/qhkm/zeptoclaw/issues/198) — механизм preset'ов уже есть (OpenRouter), добавление новых конфигураций минимально инвазивно.
3. **LLM switching on the fly** [#193](https://github.com/qhkm/zeptoclaw/issues/193) — единственный Issue с живым обсуждением, явный community pull.

---

## 7. Фидбек пользователей

> *Активность внешнего сообщества за период невысокая: 2 внешних автора (@superhero75, @jxnding), реакции (👍) отсутствуют. Анализ основан на содержании Issues.*

### 😣 Боли и неудобства

- **Rate limits и отсутствие переключения моделей на лету** — @superhero75 ([#193](https://github.com/qhkm/zeptoclaw/issues/193)) описывает реальный операционный сценарий: при работе через Telegram нет возможности быстро сменить модель/эндпоинт при исчерпании лимита, не перезапуская агента.
- **Отсутствие поддержки DOCX** — фиксировалось в [#201](https://github.com/qhkm/zeptoclaw/issues/201) как разрыв между форматами: PDF читается, DOCX — нет, хотя это основной бизнес-формат в мессенджерах. *Закрыто.*
- **Отсутствие поддержки изображений** — [#197](https://github.com/qhkm/zeptoclaw/issues/197) отражает ожидание пользователей от современного бота. *Закрыто.*

### 🔍 Сценарии использования, которые просматриваются

- **Self-hosted AI-шлюз для мессенджеров** с поддержкой нескольких провайдеров и контролем стоимости — наиболее распространённый паттерн использования.
- **IoT-интеграция** ([#199](https://github.com/qhkm/zeptoclaw/issues/199)) — менее массовый, но специфический сценарий: ESP32/RPi → MQTT → ZeptoClaw → LLM.
- **Enterprise-деплой** ([#198](https://github.com/qhkm/zeptoclaw/issues/198), [#200](https://github.com/qhkm/zeptoclaw/issues/200)) — корпоративные пользователи нуждаются в Azure/Bedrock и контроле бюджетов.

### ✅ Что воспринимается позитивно

- Скорость реакции мейнтейнера: Issues [#201](https://github.com/qhkm/zeptoclaw/issues/201), [#197](https://github.com/qhkm/zeptoclaw/issues/197), [#203](https://github.com/qhkm/zeptoclaw/issues/203) закрыты в день открытия или на следующий день.
- Проактивное добавление дисклеймера ([#204](https://github.com/qhkm/zeptoclaw/pull/204)) — признак зрелого управления репутацией проекта.

---

## 8. Накопленный бэклог

### ⚠️ Критично — требует немедленного внимания

| PR/Issue | Висит с | Проблема |
|----------|---------|----------|
| [PR #195](https://github.com/qhkm/zeptoclaw/pull/195) | 2026-02-28 | Готовый security-патч не смержен 2+ дня. Уязвимость shell bypass деструктивными git-командами остаётся открытой. |

### 🟡 Требует ответа в ближайшее время

| Issue | Висит с | Статус |
|-------|---------|--------|
| [#193](https://github.com/qhkm/zeptoclaw/issues/193) | 2026-02-27 | Открыт 3 дня, 3 комментария — самый «живой» Issue. Нет реакции мейнтейнера. |
| [#196](https://github.com/qhkm/zeptoclaw/issues/196) | 2026-02-28 | SearXNG web search — 0 комментариев, оценка scope «Small». Быстрая победа. |
| [#207](https://github.com/qhkm/zeptoclaw/issues/207) | 2026-03-01 | DeepSeek/Kimi — шаблонное описание без деталей. Нужна конкретизация от автора или от мейнтейнера. |

### 🔵 Стратегический

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 NanoBot — Дайджест проекта за 2026-03-01

---

## 1. Обзор дня

Проект NanoBot демонстрирует исключительно высокую активность: за последние 24 часа зафиксировано **69 Pull Request** (54 ожидают merge, 15 закрыто) и **22 Issue** (20 активных, 2 закрыто). Только что выпущен релиз **v0.1.4.post3**, объединивший 33 PR и привлёкший 16 новых контрибьюторов — сигнал устойчивого роста community. Основное направление разработки в этот день — расширение каналов коммуникации (Telegram, Feishu, Web), улучшение надёжности исторических данных сессий и устранение регрессий, внесённых предыдущими патчами. Параллельно сообщество активно формулирует архитектурные запросы: параллельное выполнение инструментов, изоляция рабочих директорий, интеграция альтернативных провайдеров. Объём и качество вкладов позволяют охарактеризовать состояние проекта как **стремительный рост с накапливающимся техническим долгом**.

---

## 2. Релизы

### 🆕 v0.1.4.post3

**Центральная тема релиза:** «меньше шума на входе → меньше галлюцинаций на выходе».

**Ключевые изменения:**
- **33 PR смержено** в рамках одного релиза — рекордный показатель для проекта
- **16 новых контрибьюторов** присоединились к кодовой базе
- Улучшена **очистка контекста**: удалены посторонние сообщения, снижающие качество ответов LLM
- Укреплена **работа с историей сессий**: устранены «призрачные сообщения» (ghost messages), нарушавшие целостность диалога
- Снижен общий **уровень шума в передаваемом контексте**

**Breaking changes:** В описании релиза явных breaking changes не упоминается. Тем не менее пользователи уже сообщают о регрессии в Telegram (`groupPolicy: "mention"` перестал работать — см. #1380), что косвенно указывает на возможные нежелательные побочные эффекты изменений в агентном цикле.

**Миграция:** Специальных инструкций по миграции не предусмотрено. Рекомендуется проверить настройки `groupPolicy` в конфигурации Telegram-канала после обновления.

---

## 3. Прогресс проекта

### ✅ Смерженные/закрытые PR за день

| PR | Описание | Автор |
|---|---|---|
| [#1361](https://github.com/HKUDS/nanobot/pull/1361) | fix(feishu): корректный парсинг post-обёрток для rich-text сообщений | @cyzlmh |
| [#1371](https://github.com/HKUDS/nanobot/pull/1371) | fix(cron): авто-перезагрузка jobs.json при внешних изменениях | @Re-bin |
| [#1372](https://github.com/HKUDS/nanobot/pull/1372) | Revert: откат fix(cron) из-за проблем с реализацией | @ZhangXt1 |
| [#1379](https://github.com/HKUDS/nanobot/pull/1379) | Nanobotwx (закрыт без merge) | @Smalllight01 |
| [#1349](https://github.com/HKUDS/nanobot/pull/1349) | Оптимизация proxy-конфигурации Telegram | @fengweiyuan |
| [#1339](https://github.com/HKUDS/nanobot/pull/1339) | style: унификация форматирования кода и порядка импортов | @JackLuguibin |
| [#1233](https://github.com/HKUDS/nanobot/pull/1233) | feat: async event injection для прерывания пользователем | @chengyongru |

**Примечательно:** Откат #1372 сразу после merge #1371 указывает на недостаточное тестирование фичи авто-перезагрузки cron-файла перед включением в основную ветку. Это типичный паттерн высокой скорости разработки без достаточного CI-покрытия.

### 🔄 Ключевые PR в очереди на merge (топ по значимости)

- **[#1341](https://github.com/HKUDS/nanobot/pull/1341)** — Web Chat Channel с SSE-стримингом (@dmagyar) — крупная новая фича
- **[#1377](https://github.com/HKUDS/nanobot/pull/1377)** — интеграция deepagents/LangGraph как бэкенда (@gthieleb)
- **[#1366](https://github.com/HKUDS/nanobot/pull/1366)** — retry-политики и fallback-модель для LLM (@cyzlmh)
- **[#1038](https://github.com/HKUDS/nanobot/pull/1038)** — когерентное усечение истории tool-вызовов (@cyzlmh)

---

## 4. Горячие темы

### 🔥 Самые обсуждаемые Issue

**[#215](https://github.com/HKUDS/nanobot/issues/215) — Feishu: невозможно установить длинное соединение (21 комментарий)**
Самый активно обсуждаемый Issue за период. Пользователь @Owen1998 сообщает, что Feishu-канал не может установить long-polling соединение даже при корректно заполненных `app_id` и `app_secret`. За почти месяц (открыт 06.02) проблема не закрыта. Судя по числу обсуждений, с ней сталкиваются многие — Feishu является приоритетным каналом для китайскоязычной аудитории.

**[#623](https://github.com/HKUDS/nanobot/issues/623) — Persistent "Tool Not Found" при кастомных Skills (5 комм., 👍 1)**
Пользователь @wyliletv описывает систематические ошибки при подключении custom-скиллов (google_calendar, ha-voice). Issue открыт 14.02, по-прежнему активен. Отражает типичную точку боли новых пользователей.

**[#1265](https://github.com/HKUDS/nanobot/issues/1265) — Сравнение NanoBot и OpenClaw на Windows (5 комм.)**
Пользователь @bigsinger публикует практическое сравнение двух конкурирующих решений. Вывод: NanoBot превосходит OpenClaw на Windows по скорости, удобству установки и стабильности. Содержит стратегическую рекомендацию — активнее позиционировать проект как Windows-first альтернативу.

**[#140](https://github.com/HKUDS/nanobot/issues/140) — Поддержка GitHub Copilot как провайдера (5 комм., 👍 4)**
Запрос с наибольшим числом лайков в выборке. Открыт ещё 05.02, без закрытия — запрос востребован, но требует нетривиальной интеграции с OAuth-токенами Copilot.

---

## 5. Баги и стабильность

### 🔴 Критические

**[#1343](https://github.com/HKUDS/nanobot/issues/1343) [CLOSED] — Read-only filesystem при запуске через systemd**
QQ-канал падал с `[Errno 30] Read-only file system: '/botpy.log'` при запуске через systemd с `ProtectSystem=strict`. Закрыт — предположительно решён путём изменения пути логирования или systemd-конфига.

**[#1344](https://github.com/HKUDS/nanobot/issues/1344) — Неверный тип контента в messages[0] при обращении к Dashscope/QQ**
Ошибка `litellm.BadRequestError`: Dashscope ожидает string или array в `messages[0].content`, но получает object. Возникла внезапно после нормальной работы — возможна регрессия в обработке истории сообщений. PR с исправлением не найден. **Требует приоритетного внимания.**

**[#1365](https://github.com/HKUDS/nanobot/issues/1365) — Процесс nanobot завершается (`Terminated`) при сложных задачах на Linux**
Процесс гибнет без traceback и error-логов при умеренно сложных задачах (например, настройка DingTalk-бота). Простые команды работают. Предположительно — OOM killer или непойманное исключение в async-цикле. **Высокий приоритет, активных PR нет.**

### 🟠 Высокий приоритет

**[#1380](https://github.com/HKUDS/nanobot/issues/1380) — Регрессия: `groupPolicy: "mention"` игнорируется в v0.1.4.post3**
После обновления бот отвечает на все сообщения в группе, игнорируя фильтрацию по упоминанию. Возникло именно в новом релизе — вероятно, побочный эффект изменений в агентном цикле. PR с исправлением не создан.

**[#1350](https://github.com/HKUDS/nanobot/issues/1350) — `send_progress` и `send_tool_hints` не работают в gateway-режиме**
Настройки игнорируются: `_bus_progress()` публикует события безусловно, не проверяя конфиг. Есть PR с исправлением: **[#1376](https://github.com/HKUDS/nanobot/pull/1376)** (@sxu75374) — ожидает merge.

**[#1318](https://github.com/HKUDS/nanobot/issues/1318) — Повторяющиеся ответы бота после установки скиллов**
Дублирование ответов после установки skill. Может быть связано с некорректной инициализацией обработчиков событий.

### 🟡 Средний приоритет

**[#1353](https://github.com/HKUDS/nanobot/issues/1353) — Rate limit при установке скиллов через ClawHub**
Nanobot упирается в rate limit ClawHub при попытке установить новый скилл. Вероятна проблема на стороне сервиса или отсутствие backoff-логики.

**[#1332](https://github.com/HKUDS/nanobot/issues/1332) — Избыточное потребление токенов (5000+ на "hello", 30000+ на вопрос об установке)**
Системный промпт и список инструментов занимают слишком много токенов. Прямо адресуется новым PR **[#1366](https://github.com/HKUDS/nanobot/pull/1366)** (retry + fallback) и смысловой идеей v0.1.4.post3, но конкретного фикса для baseline-потребления нет.

**[#1363](https://github.com/HKUDS/nanobot/issues/1363) — История диалога суб-агентов (SpawnTool) полностью теряется**
Диалог дочернего агента хранится в локальной переменной и уничтожается по завершении задачи. Нет возможности отладки, мониторинга или ретроспективы. Приложен подробный root-cause анализ с указанием файла (`nanobot/agent/subagent.py`).

---

## 6. Запросы на функции

### 🚀 Поступившие сегодня

**[#1378](https://github.com/HKUDS/nanobot/issues/1378) — Universal Tool Orchestrator: параллельное выполнение и dependency injection**
Автор @kelvinzer0 предлагает и уже реализовал локально оркестратор инструментов с параллельным выполнением независимых tool-вызовов и цепочками зависимостей. Потенциально высокое влияние на производительность. PR не создан.

**[#1334](https://github.com/HKUDS/nanobot/issues/1334) — Поддержка реакций Telegram**
Бот не получает реакции (👍, ❤️ и пр.) от пользователей. Уже есть PR: **[#1369](https://github.com/HKUDS/nanobot/pull/1369)** (@fengxiaohu) — ожидает review.

**[#1302](https://github.com/HKUDS/nanobot/issues/1302) — Изоляция рабочих директорий по сессиям**
Все сессии разделяют одну рабочую директорию, что создаёт конфликты при параллельной работе. Запрос архитектурно нетривиален, но критичен для многопользовательских сценариев.

### 🔧 PR с новым функционалом в очереди

| PR | Фича | Вероятность включения |
|---|---|---|
| [#1341](https://github.com/HKUDS/nanobot/pull/1341) | Web Chat (SSE-стриминг, мульти-сессии) | Высокая |
| [#1369](https://github.com/HKUDS/nanobot/pull/1369) | Telegram реакции | Высокая |
| [#1366](https://github.com/HKUDS/nanobot/pull/1366) | LLM retry policy + fallback модель | Высокая |
| [#1367](https://github.com/HKUDS/nanobot/pull/1367) | Поддержка Kimi Coding моделей | Средняя |
| [#1377](https://github.com/HKUDS/nanobot/pull/1377) | Интеграция deepagents/LangGraph | Низкая (архитектурно р

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Ошибка генерации сводки.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# Дайджест проекта NanoClaw — 2026-03-01

> **Источник:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | Период: последние 24 часа

---

## 1. Обзор дня

NanoClaw демонстрирует высокую активность сообщества: за сутки зафиксировано 32 pull request'а и 6 новых issues. Проект находится в фазе интенсивного роста — 24 PR ожидают merge, что указывает на накапливающийся код-ревью бэклог и возможную нехватку мейнтейнеров для обработки входящего потока контрибьюций. Характер активности разнородный: одновременно ведётся работа над критическими багами (OOM, инъекция команд), архитектурными рефакторингами и экзотическими фичами уровня «Шаббат-режим». Ни одного релиза за период выпущено не было, последняя стабильная версия — **1.1.3**. Общее состояние проекта можно охарактеризовать как «здоровый хаос» — высокая вовлечённость при недостаточной пропускной способности ревью.

---

## 2. Релизы

*Новых релизов за отчётный период не было. Актуальная версия: **1.1.3**.*

---

## 3. Прогресс проекта

За 24 часа смержено/закрыто **8 PR**. Из примечательных:

| PR | Статус | Описание |
|----|--------|----------|
| [#598](https://github.com/qwibitai/nanoclaw/pull/598) | 🔴 CLOSED | Локальные кастомизации (Gmail + Slack каналы) — закрыт, вероятно как личный форк |
| [#600](https://github.com/qwibitai/nanoclaw/pull/600) | 🔴 CLOSED | Персонализация под job hunting + AI-Slop Reviewer — закрыт как слишком специфичный |
| [#594](https://github.com/qwibitai/nanoclaw/pull/594) | 🔴 CLOSED | Live trade tracking и run-based filtering для Kalshi — закрыт как доменно-специфичный |

**Вывод:** Все три закрытых содержательных PR представляют собой персональные кастомизации, не подходящие для включения в core. Это косвенно свидетельствует о том, что проект привлекает пользователей, которые используют его как базу для собственных продуктов, но не всегда понимают границы upstream-вклада. Реальный forward progress по core-функциональности через merge за день — минимальный.

---

## 4. Горячие темы

### 🔥 Issue #80 — Поддержка альтернативных AI-рантаймов
**[#80](https://github.com/qwibitai/nanoclaw/issues/80)** | 👍 33 реакции | 💬 15 комментариев | Открыт: 2026-02-04

Самая обсуждаемая тема в проекте. Автор @jchadwick указывает на реальный операционный риск: Anthropic блокирует аккаунты пользователей, использующих NanoClaw через Claude API, что делает жёсткую привязку к одному провайдеру стратегически опасной. В качестве альтернатив называются **opencode**, **Codex** и **Gemini**.

Этот запрос напрямую коррелирует с активными PR:
- [#327](https://github.com/qwibitai/nanoclaw/pull/327) `feat: support third-party API endpoints` (@worldofgeese) — технический ответ на проблему через `ANTHROPIC_BASE_URL` и `ANTHROPIC_AUTH_TOKEN`
- [#500](https://github.com/qwibitai/nanoclaw/pull/500) `refactor: pluggable multi-channel architecture` (@gabi-simons) — более радикальный архитектурный ответ

**Оценка:** Запрос с наибольшим community signal в проекте. Отсутствие реакции мейнтейнеров на протяжении почти месяца — тревожный сигнал для пользователей, зависящих от стабильности доступа к модели.

---

### 🔥 PR #500 — Pluggable Multi-Channel Architecture
**[#500](https://github.com/qwibitai/nanoclaw/pull/500)** | Открыт: 2026-02-25

Масштабный архитектурный рефакторинг от @gabi-simons, трансформирующий NanoClaw из монолитного WhatsApp-бота в платформу с подключаемыми каналами. Существенный PR, способный изменить облик проекта — при этом ожидает ревью 4+ дня.

---

## 5. Баги и стабильность

### 🔴 Критические

**OOM-краш после ~40 часов работы**
- **Issue:** [#595](https://github.com/qwibitai/nanoclaw/issues/595) | Автор: @scruffalo
- **Симптом:** JavaScript heap out of memory (до 4 ГБ) через ~40 ч непрерывной работы. `launchd` перезапускает процесс автоматически, что маскирует проблему.
- **Причина:** В `connectInternal()` WhatsApp-канала при каждом реконнекте создаётся новый Baileys-сокет без уничтожения предыдущего → утечка памяти.
- **PR с фиксом:** [#596](https://github.com/qwibitai/nanoclaw/pull/596) (@scruffalo) — уничтожение старого сокета перед созданием нового; [#605](https://github.com/qwibitai/nanoclaw/pull/605) (@MunemHashmi) — комплексный фикс, включающий также инъекцию команд.
- **Статус фикса:** ⏳ Ожидает merge

---

### 🔴 Критические (безопасность)

**Command injection в `stopContainer()`**
- **PR:** [#605](https://github.com/qwibitai/nanoclaw/pull/605) | Автор: @MunemHashmi
- **Симптом:** `stopContainer()` использовал шаблонные строки с `exec()`, что открывало вектор инъекции команд через имя контейнера.
- **Фикс:** Замена на `execFileSync()` с обходом шелла.
- **Статус:** ⏳ Ожидает merge — **требует приоритетного ревью**

---

### 🟠 Высокий приоритет

**Env-переменная модели игнорируется**
- **Issue:** [#613](https://github.com/qwibitai/nanoclaw/issues/613) | Автор: @vmhq
- **Симптом:** `ANTHROPIC_MODEL=claude-sonnet-4-6` игнорируется, агент всегда использует `claude-sonnet-4-20250514`.
- **PR с фиксом:** [#606](https://github.com/qwibitai/nanoclaw/pull/606) (@MunemHashmi) — три root cause: переменная не в allowlist `readSecrets()`, hardcode в маппинге моделей, отсутствие передачи в контейнер.
- **Статус:** ⏳ Ожидает merge

**Agent-runner source не обновляется после первичного создания**
- **Issue:** [#611](https://github.com/qwibitai/nanoclaw/issues/611) | Автор: @Jehu
- **Симптом:** Обновления MCP-инструментов не попадают в существующие группы — `container-runner.ts` копирует source только один раз при первом запуске.
- **PR с фиксом:** [#612](https://github.com/qwibitai/nanoclaw/pull/612) (@Jehu) — синхронизация при каждом спауне контейнера.
- **Статус:** ⏳ Ожидает merge

**Дублирующееся выполнение scheduled tasks**
- Дублирующийся запрос: два независимых PR решают одну проблему:
  - [#607](https://github.com/qwibitai/nanoclaw/pull/607) (@neocode24)
  - [#601](https://github.com/qwibitai/nanoclaw/pull/601) (@taslim)
- **Причина:** `next_run` обновляется после завершения задачи, а не в момент старта → при poll interval < времени выполнения задача запускается повторно.
- **Статус:** ⏳ Оба ожидают merge — необходимо выбрать один

---

### 🟡 Средний приоритет

| Issue/PR | Описание | Статус |
|----------|----------|--------|
| [#609](https://github.com/qwibitai/nanoclaw/pull/609) | CJK-шрифты отсутствуют в Dockerfile — «тофу» вместо иероглифов в скриншотах | ⏳ PR готов |
| [#603](https://github.com/qwibitai/nanoclaw/issues/603) | Сломана мобильная вёрстка сайта | Нет PR |

---

## 6. Запросы на функции

### Поддержка альтернативных AI-провайдеров
**[#80](https://github.com/qwibitai/nanoclaw/issues/80)** | 👍 33 | Приоритет: **высокий**

Наиболее востребованная фича. Реализация уже прощупывается через PR [#327](https://github.com/qwibitai/nanoclaw/pull/327) (third-party endpoints) и [#500](https://github.com/qwibitai/nanoclaw/pull/500) (pluggable architecture). Вероятность попадания в следующую версию — **средняя**, зависит от позиции мейнтейнеров по стратегической привязке к Anthropic.

### Google Workspace MCP интеграция
**[#597](https://github.com/qwibitai/nanoclaw/pull/597)** | Автор: @taslim

Skill-файл для интеграции с 12 Google-сервисами (Gmail, Calendar, Drive, Docs, Sheets и др.) через [google_workspace_mcp](https://github.com/taylorwilsdon/google_workspace_mcp). Низкий риск — instruction-only skill без изменений core. **Высокая вероятность merge.**

### IPC-команда `update_project` для самообновления
**[#575](https://github.com/qwibitai/nanoclaw/pull/575)** | Автор: @neocode24

Контейнерные агенты смогут запрашивать обновление host-приложения через IPC: fetch → merge → install → restart с rollback при конфликтах. Интересная DevOps-фича, но требует тщательного ревью по безопасности.

### Shabbat Mode 🕯️
**[#547](https://github.com/qwibitai/nanoclaw/pull/547)** | Автор: @jonazri

Режим полного отключения агента на время Шаббата и еврейских праздников (пятница закат — суббота исход). Нишевая, но законченная фича. Вероятность merge — **низкая**, если только мейнтейнеры не расценят её как прецедент для general scheduling/blackout windows.

### Логирование вызовов инструментов агента
**[#608](https://github.com/qwibitai/nanoclaw/pull/608)** | Автор: @neocode24

Логирование `tool_use` вызовов с усечением input до 200 символов. Полезно для отладки, минимальный риск. **Высокая вероятность merge.**

---

## 7. Фидбек пользователей

### Боли

**Риск блокировки аккаунта Anthropic** — наиболее болезненная точка ([#80](https://github.com/qwibitai/nanoclaw/issues/80)). Пользователи сообщают о реальных случаях блокировок за использование NanoClaw с Claude API. Это создаёт экзистенциальный риск для всего проекта в его нынешнем виде.

**Непредсказуемость модели** — пользователи устанавливают env-переменные (`ANTHROPIC_MODEL`, `CLAUDE_MODEL`) и ожидают, что они работают, но система их молча игнорирует ([#613](https://github.com/qwibitai/nanoclaw/issues/613)). Классическая проблема «silent misconfiguration».

**Нестабильность при длительной работе** — OOM после 40 часов ([#595](https://github.com/qwibitai/nanoclaw/issues/595)) делает проект непригодным для production-использования без внешнего мониторинга. Тот факт, что `launchd` маскирует краши автоматическим рестартом, особенно коварен.

**Сложность онбординга на WSL** — PR [#407](https://github.com/qwibitai/nanoclaw/pull/407) фиксирует три отдельных баги только при первом запуске на WSL, что говорит о недостаточном тестировании Windows-окружений.

### Сценарии использования

Судя по закрытым PR, пользователи активно адаптируют NanoClaw под:
- **Job hunting** — генерация резюме и сопроводительных писем ([#600](https://github.com/qwibitai/nanoclaw/pull/600))
- **Трейдинг** — интеграция с Kalshi, live trade tracking ([#594](https://github.com/qwibitai/nanoclaw/pull/594), [#599](https://github.com/qwibitai/nanoclaw/pull/599))
- **Продуктивность** — Google Workspace интеграция ([#597](https://github.com/qwibitai/nanoclaw/pull/597))

### Что нравится

Архитектура на основе навыков (skills) явно резонирует с сообществом — большинство контрибьюций приходит именно в виде новых skills или MCP-интеграций. Пользователи ценят расширяемость без необходимости глубоко вникать в core.

---

## 8. Накопленный бэклог

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Дайджест проекта IronClaw — 2026-03-01

> **Источник:** [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | Период: 24 часа до 2026-03-01

---

## 1. Обзор дня

Проект демонстрирует высокую операционную активность: за сутки обработано **19 issues** (17 закрыто) и **34 PR** (20 смержено/закрыто, 14 ожидают ревью). Команда провела масштабную сессию исправления накопившихся дефектов — основной вектор усилий сместился в сторону стабилизации кодовой базы перед выходом релиза **v0.13.0**, черновик которого уже оформлен в виде PR [#385](https://github.com/nearai/ironclaw/pull/385). Параллельно продвигается несколько крупных feature-веток: многоуровневая память (multi-tenancy), интеграция с Atlas и расширение тестового покрытия. Новых официальных релизов за отчётный период не было. Общий тон активности — реактивный, с заметным вкладом опытного контрибьютора **@zmanian**, закрывшего за одну сессию более десяти issues через серию целевых PR.

---

## 2. Релизы

*За отчётный период новых релизов не выходило. Раздел пропущен.*

> ⚠️ **Примечание:** PR [#385](https://github.com/nearai/ironclaw/pull/385) (`chore: release v0.13.0`) создан автоматикой и ожидает merge. Он содержит **breaking changes** в публичном API (`constructible_struct_adds_field` — добавлено новое поле в pub-структуру, что ломает существующие struct literal-инициализации). Пользователям, зависящим от стабильного API, следует отслеживать этот PR.

---

## 3. Прогресс проекта

За сутки смержено/закрыто **20 PR**. Ниже — ключевые продвижения по направлениям:

### 🔒 Безопасность и секреты
- **[#431](https://github.com/nearai/ironclaw/pull/431)** — Нормализация имён секретов к нижнему регистру при создании и поиске. Устраняет класс ошибок, когда credential-матчинг падал из-за несоответствия регистра (`SLACK_BOT_TOKEN` vs `slack_bot_token`).
- **[#433](https://github.com/nearai/ironclaw/pull/433)** — Добавлено сканирование *входящих* сообщений на утечку секретов через `scan_inbound_for_secrets()` в `SafetyLayer`. Предотвращает error-loops, когда LLM эхировал API-ключ обратно пользователю.

### 🗄️ База данных и инфраструктура
- **[#427](https://github.com/nearai/ironclaw/pull/427)** — Добавлена поддержка TLS для PostgreSQL-соединений (ранее все 4 точки подключения использовали `NoTls`). Теперь поддерживаются AWS RDS, Neon, Supabase, Aiven и другие managed-провайдеры.
- **[#423](https://github.com/nearai/ironclaw/pull/423)** — Setup wizard теперь проверяет версию PostgreSQL (требуется ≥ 15) и наличие расширения pgvector перед запуском миграций.

### 📡 Каналы и интеграции
- **[#432](https://github.com/nearai/ironclaw/pull/432)** — Состояние активации каналов теперь персистируется между перезапусками (исправляет необходимость вручную активировать Telegram после каждого рестарта).
- **[#429](https://github.com/nearai/ironclaw/pull/429)** — Добавлены недостающие `build.sh` для каналов Discord и WhatsApp, WASM-бинари теперь компилируются и каналы появляются в setup wizard.
- **[#430](https://github.com/nearai/ironclaw/pull/430)** — Исправлен Tailscale tunnel: команда заменена на `tailscale funnel --bg <port>` вместо зависающего варианта без флага `--bg`.

### 🛠️ Качество и DevEx
- **[#428](https://github.com/nearai/ironclaw/pull/428)** — Батч из 6 исправлений: Docker auto-start guidance для macOS, добавлен `clippy.toml` с порогами сложности, структурированный `FallbackFailed`, очистка credential mappings при удалении расширения, детектирование конфликтов cloudflared, поддержка ollama embeddings.
- **[#422](https://github.com/nearai/ironclaw/pull/422)** — Исправлена zsh-completion: `compdef` обёрнут в guard `(( $+functions[compdef] ))`.
- **[#424](https://github.com/nearai/ironclaw/pull/424)** — Setup wizard Cloudflare tunnel теперь проверяет наличие бинаря `cloudflared` на PATH и валидирует формат токена.
- **[#426](https://github.com/nearai/ironclaw/pull/426)** — Model name (`selected_model`) теперь сохраняется в `.env`, что предотвращает усечение имён вида `llama3.2 → llama3` после рестарта.
- **[#401](https://github.com/nearai/ironclaw/pull/401)** — WASM runtime инициализируется eager-образом независимо от существования директории инструментов.

---

## 4. Горячие темы

Единственный issue с реакцией сообщества (👍: 1) за период:

| Issue/PR | Тема | Реакции |
|---|---|---|
| [#338](https://github.com/nearai/ironclaw/issues/338) | Добавление clippy complexity lints для улучшения качества AI-генерируемого кода | 👍 1 |

**Анализ:** Issue [#338](https://github.com/nearai/ironclaw/issues/338) затронул актуальную для всего AI-dev сообщества проблему: AI-агенты (Claude Code, Cursor, Copilot) генерируют код последовательно, без холистического понимания контекста проекта, что приводит к накоплению сложности. Предложение добавить `clippy.toml` с порогами `cognitive-complexity=15` и `too-many-lines=100` уже реализовано в [#428](https://github.com/nearai/ironclaw/pull/428) — оперативная реакция команды сигнализирует о том, что качество AI-assisted разработки входит в число приоритетов.

PR [#385](https://github.com/nearai/ironclaw/pull/385) (release v0.13.0) косвенно является «горячим» — он аккумулирует все исправления дня и несёт breaking changes, что потребует внимания от downstream-пользователей.

---

## 5. Баги и стабильность

### 🔴 Критические (исправлены)

| Issue | Описание | PR с фиксом |
|---|---|---|
| [#363](https://github.com/nearai/ironclaw/issues/363) | PostgreSQL: все соединения используют `NoTls`, managed-провайдеры недоступны | [#427](https://github.com/nearai/ironclaw/pull/427) ✅ |
| [#413](https://github.com/nearai/ironclaw/issues/413) | Slack channel: `not_authed` из-за case-sensitive credential lookup | [#431](https://github.com/nearai/ironclaw/pull/431) ✅ |
| [#393](https://github.com/nearai/ironclaw/issues/393) | Telegram: вставка API-ключа вызывала бесконечный error-loop | [#433](https://github.com/nearai/ironclaw/pull/433) ✅ |

### 🟡 Значимые (исправлены)

| Issue | Описание | PR с фиксом |
|---|---|---|
| [#392](https://github.com/nearai/ironclaw/issues/392) | Telegram канал деактивируется после каждого рестарта | [#432](https://github.com/nearai/ironclaw/pull/432) ✅ |
| [#400](https://github.com/nearai/ironclaw/issues/400) | `openai_compatible` backend: имена моделей с точкой усекались (`llama3.2 → llama3`) | [#426](https://github.com/nearai/ironclaw/pull/426) ✅ |
| [#394](https://github.com/nearai/ironclaw/issues/394) | Tailscale funnel зависал, туннель не устанавливался | [#430](https://github.com/nearai/ironclaw/pull/430) ✅ |
| [#406](https://github.com/nearai/ironclaw/issues/406) | Discord и WhatsApp каналы не появлялись в setup wizard | [#429](https://github.com/nearai/ironclaw/pull/429) ✅ |

### 🔴 Открытые (без исправления на момент дайджеста)

| Issue | Описание | Критичность |
|---|---|---|
| [#439](https://github.com/nearai/ironclaw/issues/439) | Registry update workflow падает из-за branch protection rules — WASM-расширения не устанавливаются | **Высокая** |
| [#443](https://github.com/nearai/ironclaw/issues/443) | Telegram бот отвечает всем пользователям в группе, когда `owner_id = null` | **Высокая (security)** |

> ⚠️ **Issue [#443](https://github.com/nearai/ironclaw/issues/443)** заслуживает особого внимания: отсутствие owner-проверки при `null` значении означает, что любой участник группового чата может взаимодействовать с агентом. Это потенциальный вектор несанкционированного доступа.

---

## 6. Запросы на функции

### Активные feature PR (ожидают merge)

**[#441](https://github.com/nearai/ironclaw/pull/441) — Atlas Integration** (`Feature/atlas integration`)
- Автор: @matthewbegg (новый контрибьютор)
- Размер: XL, риск: medium
- Описание в PR минимальное, требует ревью. Судя по тегам scope (`channel/cli`, `tool`, `sandbox`, `dependencies`), интеграция затрагивает несколько слоёв системы.

**[#348](https://github.com/nearai/ironclaw/pull/348) + [#349](https://github.com/nearai/ironclaw/pull/349) — Multi-tenancy (Issue #59)**
- Авторы: @standardtoaster
- Part 1 of 3: Layered memory с sensitivity-based privacy redirect (именованные слои памяти с уровнями чувствительности)
- Part 2 of 3: Multi-scope workspace reads
- Размер: XL, риск: medium. Это крупнейшая feature-работа в активном бэклоге — реализует полноценную многопользовательскую архитектуру.

**[#294](https://github.com/nearai/ironclaw/pull/294) — Comprehensive Documentation Suite**
- Автор: @mudrii (новый контрибьютор)
- Добавляет полный пакет документации для линейки v0.12.0: `INSTALLATION.md`, `ARCHITECTURE.md`, `DEVELOPER-REFERENCE.md` и другие.

**[#440](https://github.com/nearai/ironclaw/pull/440) — CLI Commands Logs**
- Добавляет логирование CLI-команд с инжектируемым путём к лог-файлу для тестируемости.

### Оценка вероятности включения в v0.13.0

| PR | Вероятность | Обоснование |
|---|---|---|
| [#411](https://github.com/nearai/ironclaw/pull/411) fix: RwLock panic | **Высокая** | Критический баг, S-размер, на него зависит [#442](https://github.com/nearai/ironclaw/pull/442) |
| [#440](https://github.com/nearai/ironclaw/pull/440) CLI logs | **Средняя** | Low-risk, готов к финальному ревью |
| [#441](https://github.com/nearai/ironclaw/pull/441) Atlas | **Низкая** | XL, новый контрибьютор, нет описания |
| [#348](https://github.com/nearai/ironclaw/pull/348)/[#349](https://github.com/nearai/ironclaw/pull/349) multi-tenancy | **Низкая** | XL + XL, 3-частная серия, ещё не завершена |

---

## 7. Фидбек пользователей

### Основные боли

**1. Хрупкость при рестарте**
Пользователь @tbaumann ([#392](https://github.com/nearai/ironclaw/issues/392)) описывает типичный сценарий: после каждого перезапуска IronClaw Telegram-канал становится неактивным и требует ручной активации через дашборд. Это свидетельствует о более широкой проблеме — отсутствии персистентности для операционного состояния. Исправлено в [#432](https://github.com/nearai/ironclaw/pull/432).

**2. Ошибки настройки без диагностики**
Пользователь @zmanian через серию issues ([#415](https://github.com/nearai/ironclaw/issues/415), [#416](https://github.com/nearai/ironclaw/issues/416), [#418](https://github.com/nearai/ironclaw/issues/418), [#419](https://github.com/nearai/ironclaw/issues/419)) зафиксировал паттерн: setup wizard принимает конфигурацию, не выполняя предварительных проверок, что приводит к непонятным ошибкам на этапе работы. Это friction point при onboarding'е новых пользователей.

**3. Неожиданное поведение секрет-сканера**
@tbaumann ([#393](https://github.com/nearai

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# 📋 Дайджест проекта TinyClaw — 2026-03-01

> **Проект:** [TinyClaw](https://github.com/TinyAGI/tinyclaw) · **Период:** 2026-03-01 (24 часа)

---

## 1. Обзор дня

Активность проекта за сутки остаётся умеренной: зафиксированы 2 issue и 2 pull request, новых релизов нет. Оба PR находятся в статусе ожидания merge, ни один не был закрыт или смержен за отчётный период. Наиболее значимым событием стало появление PR [#152](https://github.com/TinyAGI/tinyclaw/pull/152), напрямую отвечающего на открытый feature request [#144](https://github.com/TinyAGI/tinyclaw/issues/144) — это свидетельствует о том, что команда или контрибьюторы оперативно реагируют на запросы сообщества. Одновременно закрытый issue [#151](https://github.com/TinyAGI/tinyclaw/issues/151) поднял серьёзный вопрос о заявленной поддержке Windows, который остаётся болевой точкой для части аудитории. В целом проект демонстрирует живую, но не интенсивную разработку с фокусом на архитектурные улучшения.

---

## 2. Релизы

> ℹ️ **Новых релизов за отчётный период не было.** Раздел пропущен.

---

## 3. Прогресс проекта

### Закрытые Issues
| # | Заголовок | Итог |
|---|-----------|------|
| [#151](https://github.com/TinyAGI/tinyclaw/issues/151) | `this shit aint for Windows quit lying` | Закрыт (предположительно — как known issue или с комментарием от мейнтейнера) |

Issue [#151](https://github.com/TinyAGI/tinyclaw/issues/151) был открыт 2026-02-28 и закрыт уже 2026-03-01 — скорость реакции составила менее 24 часов. Однако отсутствие лайков и минимальное число комментариев (2) не позволяют однозначно судить о том, была ли проблема **решена** или лишь **закрыта** без фактического исправления. Это требует отдельного внимания.

### Смерженные PR
> За отчётный период смерженных PR **не зафиксировано**. Оба активных PR ([#152](https://github.com/TinyAGI/tinyclaw/pull/152) и [#150](https://github.com/TinyAGI/tinyclaw/pull/150)) ожидают ревью.

---

## 4. Горячие темы

### 🔥 Issue [#151](https://github.com/TinyAGI/tinyclaw/issues/151) — Поддержка Windows
**Автор:** @SiN-Kiliko

Несмотря на формальное закрытие, этот issue поднимает критически важный вопрос о **достоверности документации**. Пользователь прошёл через цепочку ручных обходных путей (установка `jq`, правка `settings.json`, принудительный запуск Linux-скрипта через PowerShell), чтобы на выходе получить требование Linux window manager — компонента, отсутствующего в Windows по определению. Ключевые проблемы, озвученные в issue:

- Документация позиционирует поддержку Windows, которой фактически нет;
- Скрипты написаны под Linux-окружение без адаптации под Windows;
- UX установки на Windows крайне деструктивен.

> ⚠️ **Риск:** Закрытие issue без явного исправления или честного обновления документации грозит повторными жалобами и репутационными потерями.

---

### 💡 Issue [#144](https://github.com/TinyAGI/tinyclaw/issues/144) — Изоляция сессий по тредам
**Автор:** @bchoor | Открыт: 2026-02-27

Feature request на изоляцию контекста между тредами/каналами разных платформ (Telegram, Discord). Проблема: все сообщения из всех источников попадают в единую сессию Claude через флаг `-c` (continue last), что приводит к **«утечке контекста»** между независимыми разговорами. Это архитектурно значимый запрос — особенно для multi-tenant или многоканальных сценариев использования.

> ✅ Хорошая новость: PR [#152](https://github.com/TinyAGI/tinyclaw/pull/152) уже предлагает реализацию этой функции, что говорит о высоком приоритете задачи.

---

## 5. Баги и стабильность

### 🔴 Критический (потенциально) — Ложная поддержка Windows
| Параметр | Значение |
|----------|----------|
| Issue | [#151](https://github.com/TinyAGI/tinyclaw/issues/151) |
| Статус | Закрыт (причина неизвестна) |
| PR с исправлением | Не обнаружен |
| Критичность | **Высокая** — затрагивает onboarding новых пользователей на Windows |

Суть бага: инсталляционный скрипт выполняет вызов Linux window manager (вероятно, `wmctrl` или аналог) в среде, где он заведомо отсутствует. При этом скрипт **перед падением** выводит сообщение об успешном завершении предыдущего шага (`✓ ...`), что вводит пользователя в заблуждение. Исправляющего PR в открытых не обнаружено.

> 🔍 **Рекомендация:** Проверить, содержит ли закрытие issue [#151](https://github.com/TinyAGI/tinyclaw/issues/151) коммит с исправлением или правкой документации. Если нет — баг остаётся нерешённым.

---

### 🟡 Архитектурный — Shared session context
| Параметр | Значение |
|----------|----------|
| Issue | [#144](https://github.com/TinyAGI/tinyclaw/issues/144) |
| PR с исправлением | [#152](https://github.com/TinyAGI/tinyclaw/pull/152) |
| Критичность | **Средняя** — влияет на корректность работы в multi-channel сценариях |

---

## 6. Запросы на функции

### ✨ Per-thread session isolation — [Issue #144](https://github.com/TinyAGI/tinyclaw/issues/144) / [PR #152](https://github.com/TinyAGI/tinyclaw/pull/152)

**Запрос:** Изоляция сессий агента по комбинации `(agent_id, thread_id)` для предотвращения смешивания контекста между Telegram-топиками, Discord-тредами и другими источниками.

**Предложенная реализация в PR [#152](https://github.com/TinyAGI/tinyclaw/pull/152):**
- Новая таблица `thread_sessions` с маппингом `(agent_id, thread_id) → session_id`
- **Claude:** замена флага `-c` (continue last) на `--session-id <uuid>` для новых сессий и `-r <uuid>` для возобновления
- **Codex:** аналогичный механизм через `codex`-флаги (детали в PR)

**Оценка вероятности включения в следующую версию:** 🟢 **Высокая** — PR уже существует, задача чётко описана, реализация охватывает оба поддерживаемых агента (Claude и Codex).

---

### 🔧 OpenViking continuation stack — [PR #150](https://github.com/TinyAGI/tinyclaw/pull/150)

**Автор:** @mczabca-boop | Follow-up к [#149](https://github.com/TinyAGI/tinyclaw/pulls)

PR описывается как продолжение стека OpenViking, перебазированное на `TinyAGI/main` без commit'а хардening'а из PR #149. Детали функциональности из описания неочевидны — PR требует более подробного changelog'а для оценки. 

**Оценка вероятности включения:** 🟡 **Средняя** — зависит от статуса родительского PR #149 и результатов ревью.

---

## 7. Фидбек пользователей

### 😤 Боли и негатив

**Windows-пользователи — onboarding friction**
Issue [#151](https://github.com/TinyAGI/tinyclaw/issues/151) от @SiN-Kiliko — показательный пример деструктивного пользовательского опыта при установке. Тон issue (эмоциональный, с ненормативной лексикой) сигнализирует о глубоком разочаровании. Пользователь потратил значительное время на ручные обходные пути, следуя документации, и получил непреодолимую ошибку. Это классический сценарий **«broken promise»**: реклама поддержки платформы без реальной её реализации.

**Что именно не понравилось:**
- Несоответствие документации реальности
- Отсутствие явного предупреждения о Linux-only зависимостях
- Ложноположительные сообщения об успехе в процессе установки

---

### 💡 Потребности и сценарии использования

**Multi-channel AI-агенты** — Issue [#144](https://github.com/TinyAGI/tinyclaw/issues/144) от @bchoor демонстрирует реальный сценарий: пользователь запускает единого агента TinyClaw, подключённого одновременно к Telegram и Discord. При текущей архитектуре контексты из разных платформ смешиваются, что неприемлемо для продуктивного использования. Это говорит о том, что **TinyClaw активно используется в production-like сценариях**, а не только для экспериментов.

---

## 8. Накопленный бэклог

| # | Заголовок | Автор | Открыт | Комм. | Статус | Приоритет |
|---|-----------|-------|--------|-------|--------|-----------|
| [#144](https://github.com/TinyAGI/tinyclaw/issues/144) | `feat: per-thread session isolation via --session-id / --resume` | @bchoor | 2026-02-27 | 0 | 🟡 Open | 🔴 Высокий (есть PR) |
| [#150](https://github.com/TinyAGI/tinyclaw/pull/150) | `feat(openviking): continuation after plugin hardening` | @mczabca-boop | 2026-02-27 | — | 🟡 Open | 🟡 Средний |

### Наблюдения по бэклогу:

- **Issue [#144](https://github.com/TinyAGI/tinyclaw/issues/144)** открыт 2 дня назад, не имеет ни одного комментария от мейнтейнеров, хотя PR [#152](https://github.com/TinyAGI/tinyclaw/pull/152) уже предлагает реализацию. Отсутствие официального acknowledgment от команды — потенциальный сигнал о нехватке пропускной способности ревью.

- **PR [#150](https://github.com/TinyAGI/tinyclaw/pull/150)** открыт 2 дня назад, последнее обновление — 2026-02-28, комментариев нет. Follow-up PR без активности на родительском PR #149 создаёт риск конфликтов при merge и устаревания ветки.

- Оба ожидающих PR не имеют назначенных ревьюеров (по доступным данным), что замедляет их продвижение.

---

*📌 Дайджест сформирован на основе публичных данных GitHub. Все ссылки ведут на оригинальные issue/PR. Следующий дайджест — 2026-03-02.*

</details>