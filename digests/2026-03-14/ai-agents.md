# Дайджест экосистемы OpenClaw 2026-03-14

> Issues: 240 | PRs: 500 | Проектов: 10 | Сгенерировано: 2026-03-14 07:25 UTC

[OpenClaw](https://github.com/openclaw/openclaw) · [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) · [EasyClaw](https://github.com/gaoyangz77/easyclaw) · [LobsterAI](https://github.com/netease-youdao/LobsterAI) · [ZeptoClaw](https://github.com/qhkm/zeptoclaw) · [NanoBot](https://github.com/HKUDS/nanobot) · [PicoClaw](https://github.com/sipeed/picoclaw) · [NanoClaw](https://github.com/qwibitai/nanoclaw) · [IronClaw](https://github.com/nearai/ironclaw) · [TinyClaw](https://github.com/TinyAGI/tinyclaw)

---

## Детальный отчёт OpenClaw

# Дайджест OpenClaw — 14 марта 2026 года

---

## 1. Обзор дня

14 марта 2026 года OpenClaw демонстрирует исключительно высокий уровень активности: за 24 часа зафиксировано **240 issues** (145 открытых, 95 закрытых) и **500 pull requests** (318 ожидают merge, 182 смержено или закрыто). Вышли два релиза — стабильный `v2026.3.13` и пре-релиз `v2026.3.13-beta.1`, оба сфокусированы на мобильных платформах (Android/iOS). Вместе с тем проект переживает выраженный **post-release stress**: обновление до `2026.3.12`, выпущенное накануне, породило волну регрессий, затрагивающих UI, WhatsApp, Mistral, аутентификацию Control UI и ряд других компонентов. Команда реагирует оперативно — большинство критичных багов уже имеют открытые PR с исправлениями, однако часть ключевых регрессий ещё не закрыта. Общая картина: проект растёт быстро, активность сообщества высока, но качество тестирования перед мажорными релизами требует усиления.

---

## 2. Релизы

### v2026.3.13 (стабильный)
**Дата:** 2026-03-13
**Основные изменения:**

- **Android / Chat Settings** ([#44894](https://github.com/openclaw/openclaw/issues/44894)): Полный редизайн листа настроек чата — секции устройств и медиа сгруппированы, обновлены вкладки Connect и Voice, уплотнена компоновка composer/session header для мобильного интерфейса. Авторство: @obviyus.
- **iOS / Onboarding**: Добавлен экран приветствия (welcome pager) при первом запуске приложения — детали в changelog обрезаны, полный список изменений доступен в теле релиза.

**Breaking changes:** Официально не заявлены. Однако, судя по потоку issues, обновление `2026.3.12` (база для `2026.3.13`) внесло ряд скрытых регрессий (см. раздел «Баги и стабильность»).

**Миграция:** Пользователям, обновившимся с версий до `2026.3.12`, следует проверить работу:
- Web UI (компоновка `/compact`)
- WhatsApp outbound send
- Аутентификации Control UI по LAN
- CLI-команд (потенциальный `ReferenceError: ANTHROPIC_MODEL_ALIASES`)

---

### v2026.3.13-beta.1 (пре-релиз)
**Тег:** `v2026.3.13-beta.1` (npm beta)
**Особенности:** macOS-ассеты собраны с версией приложения `2026.3.13` и будут повторно использованы для финального релиза. Файл `appcast.xml` намеренно не изменён. Набор изменений совпадает с `v2026.3.13`.

---

## 3. Прогресс проекта

За 24 часа смержено или закрыто **182 PR**. Среди значимых закрытых:

| PR | Описание | Статус |
|----|----------|--------|
| [#45821](https://github.com/openclaw/openclaw/pull/45821) | Android: race condition при отмене geolocation callback (`LocationCaptureManager`) | Закрыт (r: too-many-prs) |
| [#45787](https://github.com/openclaw/openclaw/pull/45787) | fix: сохранение пользовательских заголовков сессий при heartbeat-опросах | Смержен |
| [#45266](https://github.com/openclaw/openclaw/pull/45266) | fix(gateway): чтение плагинного реестра per-request вместо снапшота при старте | Закрыт |
| [#45367](https://github.com/openclaw/openclaw/pull/45367) | fix(telegram): fallback на текст при сбоях sendVoice | Закрыт |
| [#29897](https://github.com/openclaw/openclaw/pull/29897) | fix: расширение резолюции replyToId на все типы каналов | Закрыт (stale) |
| [#17093](https://github.com/openclaw/openclaw/issues/17093) | Закрыт issue: принудительное применение правил агента на системном уровне | Закрыт |

**Примечательно:** PR [#45821](https://github.com/openclaw/openclaw/pull/45821) закрыт с меткой `r: too-many-prs` — свидетельство политики управления очередью merge при высоком потоке контрибуций.

---

## 4. Горячие темы

### 🔥 Топ обсуждаемых Issues

**[#45471](https://github.com/openclaw/openclaw/issues/45471) — UI чат не открывается после обновления (35 комментариев)**
Самый активный тред дня. Пользователь @DragonBtc93 (Pop!_OS) сообщает: после обновления вместо чата отображается только логотип OpenClaw. Высокая вовлечённость сообщества указывает на широкое распространение проблемы. Прямого PR-фикса в данных не обнаружено — критично.

**[#45171](https://github.com/openclaw/openclaw/issues/45171) — WhatsApp outbound broken: авто-ответы работают, CLI/tool send — нет (14 комментариев)**
Автор: @elenasteinvorth. Регрессия в `2026.3.12`: все исходящие пути, кроме ответов в том же чате, падают с `"No active WhatsApp Web listener"`. Затрагивает CLI и агентский message tool.

**[#41778](https://github.com/openclaw/openclaw/issues/41778) — OOM в openclaw-message на серверах 4 ГБ, начиная с v2026.3.7 (12 комментариев, 3 👍)**
Автор: @huaguihai. `openclaw message send` падает с `JavaScript heap out of memory` при потреблении 500 МБ+, даже при явном ограничении `NODE_OPTIONS`. Версия `v2026.3.2` работает корректно на том же железе. Регрессия существует уже несколько недель без фикса.

**[#44718](https://github.com/openclaw/openclaw/issues/44718) — ReferenceError: Cannot access 'ANTHROPIC_MODEL_ALIASES' before initialization (6 комментариев, 3 👍)**
Автор: @bubucilo. После обновления `2026.3.8 → 2026.3.12` все CLI-команды падают с ReferenceError при загрузке конфига. Демон gateway стартует, но любое взаимодействие с конфигом ломается.

**[#23452](https://github.com/openclaw/openclaw/issues/23452) — Vision/Image Recognition сломан во всех каналах (4 комментария, 7 👍)**
Накопленная проблема (@zlxdengtianhei): изображения из Discord, Telegram и OpenWebUI не передаются vision-моделям. Самый высокий рейтинг 👍 среди открытых issue. Требует системного решения.

---

## 5. Баги и стабильность

### 🔴 Критические (блокирующие работу)

| Issue | Описание | Наличие фикса |
|-------|----------|---------------|
| [#45471](https://github.com/openclaw/openclaw/issues/45471) | UI чат не открывается после обновления (Linux) | ❌ Нет PR |
| [#44718](https://github.com/openclaw/openclaw/issues/44718) | ReferenceError при загрузке конфига — все CLI сломаны | ❌ Нет PR |
| [#45171](https://github.com/openclaw/openclaw/issues/45171) | WhatsApp outbound полностью не работает | ❌ Нет PR |
| [#41778](https://github.com/openclaw/openclaw/issues/41778) | OOM на серверах 4 ГБ (регрессия с v2026.3.7) | ❌ Нет PR |

### 🟠 Высокая степень серьёзности

| Issue | Описание | Наличие фикса |
|-------|----------|---------------|
| [#44755](https://github.com/openclaw/openclaw/issues/44755) | `/compact` ломает web-чат — белый экран | ❌ Нет PR |
| [#45753](https://github.com/openclaw/openclaw/issues/45753) | Control UI pairing fails: Gateway Timeout | ✅ [#43478](https://github.com/openclaw/openclaw/pull/43478) (skip pairing при auth.mode=none) |
| [#45481](https://github.com/openclaw/openclaw/issues/45481) | Control UI по LAN требует device identity при отключённой авторизации | ✅ [#43478](https://github.com/openclaw/openclaw/pull/43478) |
| [#45681](https://github.com/openclaw/openclaw/issues/45681) | Thinking-модели (reasoning: true) систематически таймаутятся | ❌ Нет PR |
| [#45227](https://github.com/openclaw/openclaw/issues/45227) | Статус 422 с Mistral в 2026.3.12 | ❌ Нет PR |
| [#45726](https://github.com/openclaw/openclaw/issues/45726) | Feishu: таймаут из-за залипшего lock-файла сессии | ❌ Нет PR |

### 🟡 Средняя серьёзность

| Issue | Описание | Наличие фикса |
|-------|----------|---------------|
| [#45722](https://github.com/openclaw/openclaw/issues/45722) | Предупреждение о контексте занимает весь экран | ❌ Нет PR |
| [#45794](https://github.com/openclaw/openclaw/issues/45794) | Чат-панель ломается при 100% использования контекста | ❌ Нет PR |
| [#45707](https://github.com/openclaw/openclaw/issues/45707) | WebChat пустой placeholder перекрывает input box | ✅ [#45813](https://github.com/openclaw/openclaw/pull/45813) |
| [#44993](https://github.com/openclaw/openclaw/issues/44993) | Heartbeat/Cron инжектирует устаревший timestamp | ❌ Нет PR |
| [#45772](https://github.com/openclaw/openclaw/issues/45772) | Gateway heartbeat останавливается после 1–2 срабатываний | ✅ [#45836](https://github.com/openclaw/openclaw/pull/45836) (circuit breaker) |
| [#45759](https://github.com/openclaw/openclaw/issues/45759) | Telegram typing keepalive не имеет circuit breaker → краш шлюза | ✅ [#45836](https://github.com/openclaw/openclaw/pull/45836) |
| [#45774](https://github.com/openclaw/openclaw/issues/45774) | 402 от сторонних прокси не распознаётся как billing error | ✅ [#45827](https://github.com/openclaw/openclaw/pull/45827) |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | OPENCLAW_HOME=~/.openclaw создаёт вложенный каталог | ❌ Нет PR |
| [#45806](https://github.com/openclaw/openclaw/issues/45806) | Cron job с `delivery.channel: "last"` резолвится в @heartbeat | ✅ [#45830](https://github.com/openclaw/openclaw/pull/45830) |
| [#45721](https://github.com/openclaw/openclaw/issues/45721) | Discord REST API не использует proxy при настроенном `channels.discord.proxy` | ❌ Нет PR |
| [#45814](https://github.com/openclaw/openclaw/issues/45814) | Telegram: SSRF guard перекрывает proxy при скачивании медиа | ❌ Нет PR |

---

## 6. Запросы на функции

### Новые за 24 часа

**[#45608](https://github.com/openclaw/openclaw/issues/45608) — Pre-reset memory flush перед `/new`, `/reset` и ежедневным сбросом**
Автор: @kamikariat. Предлагается запускать silent agentic memory flush перед уничтожением сессии — аналогично тому, что уже происходит перед компакцией. Логичное расширение существующей механики; вероятность включения в ближайший релиз — **высокая**.

**[#45132](https://github.com/openclaw/openclaw/pull/45132) — Slack Mux: multi-gateway deployments**
Автор: @markshields-tl. Новый режим подключения Slack (`mux`) через внешний WebSocket-сервис `openclaw-mux`, позволяющий маршрутизировать Slack Events API на несколько шлюзов. XL-PR, ждёт merge. Стратегически важная фича для enterprise-сценариев.

**[#42133](https://github.com/openclaw/openclaw/pull/42133) — MQTT ingress extension для IoT и автоматизации**
Автор: @visoar. Добавляет MQTT как входящий транспорт, унифицируя логику dispatch/session policy. XL-PR, открыт с 2026-03-10. Перспективна для home automation и промышленных интеграций.

**[#45826](https://github.com/openclaw/openclaw/pull/45826) — LINE channel: поддержка исходящих медиа (image, video, audio)**
Автор: @masatohoshino. M-PR, открыт 14 марта. Устраняет существенный пробел — на текущий момент LINE умеет слать только изображения. Вероятность включения в следующий релиз — **средняя**.

**[#45808](https://github.com/openclaw/openclaw/pull/45808) — Discord: явная привязка agentId к аккаунту**
Автор: @

---

## Сравнение экосистемы

# Сравнительный анализ экосистемы AI-агентов — 14 марта 2026

---

## 1. Панорама экосистемы

Пространство open-source AI-агентов переживает фазу интенсивного горизонтального роста: сразу несколько проектов одновременно расширяют число поддерживаемых каналов, внедряют стандарт MCP и укрепляют модели безопасности. Доминирующей точкой отсчёта остаётся OpenClaw — его архитектурные решения прямо воспроизводятся в форках и производных проектах (LobsterAI, PicoClaw, NanoClaw), а его регрессии рябью расходятся по всей экосистеме. Конкурирующие реализации (Zeroclaw, IronClaw, ZeptoClaw, NanoBot) формируют собственные ниши — через поддержку специфических платформ, нативные языки реализации или архитектурные отличия, — однако пока не достигают сопоставимого масштаба сообщества. Качество тестирования и зрелость процессов выпуска остаются слабым местом экосистемы в целом: post-release регрессии, небезопасные дефолты и незакрытые критические баги присутствуют практически во всех проектах. Параллельно нарастает запрос на стандартизацию межагентного взаимодействия — активность вокруг MCP и ACP сигнализирует о движении в сторону унификации протоколов.

---

## 2. Сравнение активности

| Проект | Issues (24 ч) | PR (24 ч) | Релизы | Критич. баги без фикса | Оценка здоровья |
|---|---|---|---|---|---|
| **OpenClaw** | 240 (145 open / 95 closed) | 500 (318 open / 182 closed) | 2 (stable + beta) | 4 🔴 | 🟡 Рост с техдолгом |
| **Zeroclaw** | 12 (4 open / 8 closed) | 50 (14 open / 36 closed) | 5 (beta) | 3 🔴 | 🟢 Активная beta-итерация |
| **NanoBot** | 19 | 99 (62 closed) | 0 | 2 🔴 | 🟡 Высокая активность, долг копится |
| **PicoClaw** | 24 | 71 (30 closed) | 1 (nightly) | 5+ 🔴🟠 | 🟠 Рост + security-долг |
| **IronClaw** | ~5 | 50 (8 closed / 42 open) | 0 | 2 🔴 | 🟡 Pre-release стабилизация |
| **LobsterAI** | 7 | 5 (все merged) | 0 | 2 🔴 | 🟡 Фокус на интеграции, слабая поддержка |
| **ZeptoClaw** | 6 (все closed) | 6 (3 merged) | 0 | 0 ✅ | 🟢 Компактная, быстрая итерация |
| **NanoClaw** | 14 | 40 (~20 closed) | 0 | 2 🔴 | 🟡 Расширение каналов, баги в очереди |
| **TinyClaw** | 2 | 6 (4 merged) | 1 (v0.0.13) | 0 ✅ | 🟢 Ранняя фаза, чистый трекер |
| **EasyClaw** | 0 | 0 | 0 | — | ⚫ Нет активности |

> **Методология оценки здоровья:** учитываются соотношение open/closed PR, наличие критических багов без PR-фикса, скорость реакции команды и качество релизного процесса.

---

## 3. Позиционирование OpenClaw

### Масштаб и скорость
OpenClaw оперирует на другом порядке величин: 240 issues и 500 PR за сутки против 5–99 у ближайших конкурентов. Это не просто численное превосходство — это индикатор зрелости экосистемы: вокруг проекта сформировалась независимая база контрибьюторов и обширная сеть форков, активно потребляющих upstream-изменения. Два одновременных релиза (stable + beta) с фокусом на мобильных платформах свидетельствуют о работе по нескольким релизным трекам параллельно.

### Технические преимущества
- **Экосистемная платформа.** OpenClaw де-факто является базовой архитектурой для LobsterAI, PicoClaw, NanoClaw и, вероятно, ряда других производных — его API, механизм сессий и Memory/AGENT-модель воспроизводятся в форках.
- **Широта каналов.** Наиболее полное покрытие: WhatsApp, Telegram, Discord, Slack Mux, LINE, Feishu, MQTT (в разработке), LINE media — диапазон шире, чем у любого конкурента.
- **Мобильные нативные клиенты.** Android и iOS — уникальное преимущество: ни один конкурент в выборке не имеет собственных мобильных приложений.
- **Зрелость конфигурации и расширяемость.** Plaginовый реестр, поддержка per-request конфигурации, Control UI с LAN-аутентификацией — функциональность корпоративного уровня.

### Ключевой риск
Post-release регрессии системного характера (4 критических бага без PR-фикса после выхода `v2026.3.12`) на фоне высокого потока изменений указывают на недостаточное интеграционное тестирование перед мажорными релизами. При масштабе сообщества это создаёт непропорциональный волновой эффект на все зависимые проекты.

---

## 4. Общие технические направления

Следующие темы одновременно присутствуют в нескольких проектах, что указывает на общеэкосистемные потребности, а не локальные запросы.

### MCP (Model Context Protocol)
**Присутствует в:** Zeroclaw (#3394, #3395), LobsterAI (#408), IronClaw (#1144), NanoClaw (#960)

Стандарт MCP стал де-факто механизмом расширяемости инструментов. Zeroclaw реализовал multi-transport MCP-клиент с per-turn фильтрацией; LobsterAI — MCP Bridge с hot-reload; IronClaw переходит на data-driven JSON-манифесты для реестра MCP-серверов. Конвергенция выраженная.

### Feishu / Lark как проблемная зона
**Присутствует в:** OpenClaw (#45726), Zeroclaw (#3460), LobsterAI (планировщик), NanoBot (#1990), PicoClaw (#1506, #1534, #1537)

Feishu-интеграция воспроизводит одни и те же классы ошибок во всех проектах: lock-файлы сессий, переполнение контекста, некорректная обработка медиа, WebSocket-нестабильность. Проблема имеет системный характер и связана, по всей видимости, с особенностями Feishu API.

### Небезопасные дефолты агентного режима
**Присутствует в:** ZeptoClaw (#348, #352), PicoClaw (#1525, #1529, #1530), NanoClaw (#829)

Сразу три проекта в один день фиксируют: дефолтная конфигурация (`autonomous` + `AlwaysAllow`, `allow_remote=true`, `allow_origins=["*"]`) небезопасна для production. Это экосистемный сигнал: при быстром росте функциональности security-by-default остаётся в техдолге.

### Cron / планировщик задач
**Присутствует в:** OpenClaw (#44993, #45806), Zeroclaw (#3300), LobsterAI (#407, #285), PicoClaw (#528, #1532, #1501), NanoClaw (#1046)

Планировщик — системно ненадёжная подсистема во всей экосистемой. Типичные проблемы: некорректная резолюция канала доставки, нестабильность cron-выражений, потеря MCP credential mounts в scheduled-контексте, отсутствие истории запусков.

### Поддержка Windows
**Присутствует в:** Zeroclaw (#3353, #3449, #3451), PicoClaw (nightly build), TinyClaw (ESM-конфликты на Node.js)

Windows-совместимость превращается из нишевой задачи в системное требование. Zeroclaw ведёт наиболее последовательную работу: CI-матрица MSVC, fix двойного клика, устранение deadlock в тестах.

### Streaming по умолчанию + observability
**Присутствует в:** ZeptoClaw (#342, #349, #351), NanoBot (#1955), IronClaw (#1156)

Запрос на включение стриминга по умолчанию и metadata footer с метриками (токены, wall-time, вызовы инструментов) воспроизводится независимо. Параллельно — запрос на видимость выполнения sub-agent и хуки в agent loop.

### ACP (Agent Client Protocol)
**Присутствует в:** ZeptoClaw (#356), IronClaw (имплицитно через webhook-стандартизацию)

Ранний, но отчётливый сигнал движения к стандартизации межагентного взаимодействия.

---

## 5. Дифференциация

| Проект | Язык реализации | Целевая аудитория | Архитектурный фокус | Уникальная ниша |
|---|---|---|---|---|
| **OpenClaw** | TypeScript/Node.js | Широкая: dev + power user + enterprise | Мультиканальная платформа, мобильные клиенты | Экосистемная платформа, base для форков |
| **Zeroclaw** | Rust | Dev + self-hosted | Высокая производительность, нативная сборка | Rust-native, Windows-first в экосистеме |
| **NanoBot** | Python | Dev + APAC-рынок | Pluggable каналы, multi-LLM | Python-ecosystem, сильное APAC-сообщество |
| **PicoClaw** | Go | Enterprise / embedded | Безопасность, credential store, agent refactor | Go-нативность, AES-GCM credential encryption |
| **IronClaw** | Rust | Enterprise | Owner scope, транзакционность данных | NEAR AI, WASM-канал, Codex OAuth |
| **LobsterAI** | TypeScript (обёртка над OpenClaw) | Китайский рынок | OpenClaw-интеграция, локальные модели | Нативная поддержка Baidu/ZhipuAI экосистемы |
| **ZeptoClaw** | Rust | Dev / security-conscious | Safety-first агентный режим | Минимальный footprint, ACP-протокол |
| **NanoClaw** | TypeScript | Decentralized/privacy-oriented | Nostr/Lightning экосистема | E2EE-каналы, LanceDB memory |
| **TinyClaw** | TypeScript | Dev teams | Агентная архитектура, иерархическая память | Team agent pairing, ребрендинг в AGI-платформу |
| **EasyClaw** | — | — | — | Нет активности |

**Ключевые разломы дифференциации:**
1. **JavaScript/TypeScript vs. Rust/Go** — производительность и нативная бинарная дистрибуция против богатой npm-экосистемы
2. **Платформа vs. инструмент** — OpenClaw/NanoBot строят широкую платформу; ZeptoClaw/TinyClaw оптимизируют конкретные сценарии
3. **Облако vs. локальные модели** — LobsterAI, NanoClaw, NanoBot активно работают с Ollama/локальными моделями; OpenClaw исторически cloud-first
4. **Централизованные vs. децентрализованные каналы** — NanoClaw уникален ставкой на Nostr/Signal/Lightning

---

## 6. Зрелость и активность сообществ

### 🚀 Быстрая итерация (feature velocity > stability)
**OpenClaw, NanoBot, PicoClaw**

Характеристики: высокий поток PR и issues, множество открытых критических багов без фиксов, релизы выходят на фоне незакрытых регрессий. OpenClaw выпустил стабильный релиз с 4 критическими багами без PR-фикса. NanoBot закрывает 62 PR за сутки, но накапливает долг по стабильности. PicoClaw несёт кластер из 5 security-issues без фиксов. Сообщества крупные и активные, но процессы QA отстают от темпа разработки.

### ⚖️ Балансированная итерация (feature + stability)
**Zeroclaw, IronClaw, NanoClaw**

Zeroclaw выпускает 5 бета-версий за день с реальными фиксами, одновременно закрывая долг и добавляя MCP. IronClaw работает в режиме pre-release стабилизации: крупный архитектурный PR (owner scope) плюс CI-бот для раннего обнаружения регрессий — признак зрелого процесса. NanoClaw активно расширяет каналы, но критические баги получают PR-фикс в день открытия.

### 🔧 Целевая стабилизация (stability > features)
**ZeptoClaw, TinyClaw**

ZeptoClaw закрыл все 6 issues за день, смержил 3 критических PR по безопасности, трекер чист. TinyClaw выпустил релиз v0.0.13, закрыл единственный критический баг в день открытия. Оба проекта управляются преимущественно одним активным контрибьютором — быстрое принят

---

## Отчёты смежных проектов

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# 🦾 Zeroclaw — Дайджест проекта за 2026-03-14

---

## 1. Обзор дня

Проект демонстрирует высокую активность разработки: за последние 24 часа зафиксировано **50 pull request'ов** (36 смержено/закрыто, 14 ожидают merge) и **12 issues** (8 закрыто, 4 остаются открытыми). Выпущено **5 новых бета-релизов** — от v0.1.9-beta.136 до v0.1.9-beta.150, что свидетельствует об интенсивном итерационном цикле выпуска. Команда активно закрывает накопленный долг по стабильности: большинство закрытых issues связаны с критическими сбоями в daemon-runtime и интеграции каналов. Параллельно ведётся крупная работа по расширению возможностей — добавляется поддержка MCP (Model Context Protocol), фильтрация инструментов, история выполнения cron-задач. В целом проект находится в стадии активного beta-полирования перед предполагаемым стабильным релизом v0.1.9.

---

## 2. Релизы

За день вышло пять последовательных бета-версий. Ни один из релизов не содержит заявленных breaking changes, однако ряд изменений требует внимания при обновлении.

### v0.1.9-beta.150
📎 [PR #3455](https://github.com/zeroclaw-labs/zeroclaw/pull/3455)
- Обновлены release notes до v0.1.9b (chore-only).

### v0.1.9-beta.148
📎 [PR #3453](https://github.com/zeroclaw-labs/zeroclaw/pull/3453)
- Документация: добавлены хайлайты релиза v0.1.9a и кредиты 12 контрибьюторов в README.

### v0.1.9-beta.141
📎 [PR #3449](https://github.com/zeroclaw-labs/zeroclaw/pull/3449), [PR #3349](https://github.com/zeroclaw-labs/zeroclaw/pull/3349)
- **CI**: добавлена сборка под `x86_64-pc-windows-msvc` в PR и CI build matrix — первый шаг к официальной поддержке Windows.
- **Fix**: восстановлен legacy install script URL (исправлен битый URL для установки).
- ⚠️ *Миграция*: пользователи, использующие нестандартные CI-скрипты со сборкой под Windows, должны проверить совместимость с отключённым `rust-cache` на Windows-раннерах.

### v0.1.9-beta.140
📎 [PR #3450](https://github.com/zeroclaw-labs/zeroclaw/pull/3450), [PR #3429](https://github.com/zeroclaw-labs/zeroclaw/pull/3429)
- **i18n**: добавлены переводы документации на **30 языков**, включая полный перевод на китайский (zh-CN).

### v0.1.9-beta.136
📎 [PR #3407](https://github.com/zeroclaw-labs/zeroclaw/pull/3407), [PR #3411](https://github.com/zeroclaw-labs/zeroclaw/pull/3411)
- **Fix**: добавлен fallback для `crypto.randomUUID` в браузерах без нативной поддержки.
- **Fix**: корректная обработка `reasoning_enabled` для моделей Ollama, которые не поддерживают этот параметр.

---

## 3. Прогресс проекта

### Ключевые смерженные/закрытые PR за день

| Область | PR | Описание |
|---|---|---|
| **MCP** | [#3394](https://github.com/zeroclaw-labs/zeroclaw/pull/3394) | Добавлен MCP-слой с multi-transport клиентом — крупное расширение экосистемы инструментов |
| **MCP/Agent** | [#3395](https://github.com/zeroclaw-labs/zeroclaw/pull/3395) | Per-turn фильтрация схем MCP-инструментов (`tool_filter_groups`) — экономия токенов |
| **Feishu** | [#3355](https://github.com/zeroclaw-labs/zeroclaw/pull/3355) | Исправлено: расшифровка секретов Feishu-канала при загрузке конфига |
| **Docker** | [#3354](https://github.com/zeroclaw-labs/zeroclaw/pull/3354) | Исправлено: восстановление пути конфига в Docker runtime при сохранении |
| **CLI/Windows** | [#3353](https://github.com/zeroclaw-labs/zeroclaw/pull/3353) | Исправлено: пустой вызов `zeroclaw` без аргументов не приводит к мгновенному закрытию окна на Windows (fixes [#2499](https://github.com/zeroclaw-labs/zeroclaw/issues/2499)) |
| **Llama.cpp** | [#3391](https://github.com/zeroclaw-labs/zeroclaw/pull/3391) | Исправлена передача истории в fallback-режиме для llama.cpp `/v1/responses` |
| **Linq** | [#3351](https://github.com/zeroclaw-labs/zeroclaw/pull/3351) | Поддержка актуального формата webhook-payload Linq (2026-02-03) |
| **Windows/Tests** | [#3451](https://github.com/zeroclaw-labs/zeroclaw/pull/3451) | Устранён deadlock onboard-визарда в тестовой среде без терминала |
| **CI** | [#3449](https://github.com/zeroclaw-labs/zeroclaw/pull/3449) | Windows MSVC добавлен в build matrix |

### В очереди на merge (открытые PR)

- [#3300](https://github.com/zeroclaw-labs/zeroclaw/pull/3300) — История запусков cron-задач + API endpoint
- [#3127](https://github.com/zeroclaw-labs/zeroclaw/pull/3127) — Восстановление cost tracking каналов + Telegram voice replies
- [#3065](https://github.com/zeroclaw-labs/zeroclaw/pull/3065) — Интерактивный TTY-инструмент для агента
- [#3051](https://github.com/zeroclaw-labs/zeroclaw/pull/3051) — Исправление чёрного экрана на странице `/memory`
- [#3001](https://github.com/zeroclaw-labs/zeroclaw/pull/3001) — Поддержка `socks://` прокси (Clash Verge)
- [#3459](https://github.com/zeroclaw-labs/zeroclaw/pull/3459), [#3458](https://github.com/zeroclaw-labs/zeroclaw/pull/3458), [#3457](https://github.com/zeroclaw-labs/zeroclaw/pull/3457) — Три Telegram/channel фикса от @guitaripod

---

## 4. Горячие темы

### 🔥 Feishu-интеграция под давлением
Две отдельные проблемы с Feishu закрыты в один день:
- [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) (5 комментариев) — ошибка WebSocket соединения из-за неверного конфига; решено через [#3355](https://github.com/zeroclaw-labs/zeroclaw/pull/3355).
- [#3460](https://github.com/zeroclaw-labs/zeroclaw/issues/3460) — переполнение контекстного окна при использовании Feishu + GLM-4.5-air (ZhipuAI). Issue открыто сегодня, пока без ответа.

**Вывод**: Feishu-канал остаётся стабильно проблемной зоной — конфигурация секретов, лимиты контекста, WebSocket. Требует отдельного внимания команды.

### 🔥 MCP-интеграция — крупная ставка
Три связанных PR от @vernonstinebaker в течение одного дня:
- [#3394](https://github.com/zeroclaw-labs/zeroclaw/pull/3394) — базовый MCP-клиент
- [#3395](https://github.com/zeroclaw-labs/zeroclaw/pull/3395) — per-turn фильтрация инструментов
- [#3323](https://github.com/zeroclaw-labs/zeroclaw/pull/3323) — ещё один вариант той же фичи (дубль, закрыт)

Это свидетельствует о серьёзном запросе сообщества на расширяемость через стандарт MCP.

### 🔥 Windows-поддержка
Сразу несколько активностей вокруг Windows за один день: CI-матрица ([#3449](https://github.com/zeroclaw-labs/zeroclaw/pull/3449)), fix для double-click запуска ([#3353](https://github.com/zeroclaw-labs/zeroclaw/pull/3353)), устранение deadlock ([#3451](https://github.com/zeroclaw-labs/zeroclaw/pull/3451)). Видна системная работа по улучшению Windows-совместимости.

---

## 5. Баги и стабильность

### 🔴 Критические (S0–S1)

| Issue | Severity | Статус | PR-фикс |
|---|---|---|---|
| [#1984](https://github.com/zeroclaw-labs/zeroclaw/issues/1984) `compact_context=false` — неотвратимый overflow в daemon | **S1** | Закрыт | — |
| [#2060](https://github.com/zeroclaw-labs/zeroclaw/issues/2060) Panic: byte boundary при UTF-8 в channels/traits.rs:139 | **S1** | Закрыт | — |
| [#2499](https://github.com/zeroclaw-labs/zeroclaw/issues/2499) Win11: zeroclaw.exe мгновенно закрывается | **S0** (пользователь) | Закрыт | [#3353](https://github.com/zeroclaw-labs/zeroclaw/pull/3353) ✅ |
| [#2947](https://github.com/zeroclaw-labs/zeroclaw/issues/2947) Docker: HTTP 500 при сохранении config.toml | **S1** | Закрыт | [#3354](https://github.com/zeroclaw-labs/zeroclaw/pull/3354) ✅ |
| [#3456](https://github.com/zeroclaw-labs/zeroclaw/issues/3456) Ошибка permissions при запуске WhatsApp канала на macOS | **S1** | 🔴 Открыт | Нет |
| [#3452](https://github.com/zeroclaw-labs/zeroclaw/issues/3452) Compilation fails на 32-bit targets после PR #3432 (`AtomicU32`) | **S1** | 🔴 Открыт | Нет |
| [#3460](https://github.com/zeroclaw-labs/zeroclaw/issues/3460) Context window exceeded в Feishu + GLM-4.5-air | **S0** (пользователь) | 🔴 Открыт | Нет |

### 🟡 Умеренные (S2–S3)

| Issue | Severity | Статус |
|---|---|---|
| [#3454](https://github.com/zeroclaw-labs/zeroclaw/issues/3454) Web Dashboard 404 после свежей установки | **S2** | 🟡 Открыт |
| [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494) Feishu WebSocket connection error | **S2** | Закрыт ✅ |
| [#3417](https://github.com/zeroclaw-labs/zeroclaw/issues/3417) Создаётся папка `~` в рабочей директории | **S3** | Закрыт |
| [#2914](https://github.com/zeroclaw-labs/zeroclaw/issues/2914) 404 при установке на Debian 12 | **S3** | Закрыт ✅ |

### ⚠️ Особое внимание

**[#3452](https://github.com/zeroclaw-labs/zeroclaw/issues/3452)** — регрессия компиляции на 32-bit targets, введённая PR #3432 (`AtomicU32` недоступен на 32-bit без явного импорта). Это блокирует сборку из исходников на соответствующих платформах и требует срочного хотфикса.

---

## 6. Запросы на функции

### Новые и активные фичи

**MCP (Model Context Protocol) — [#3394](https://github.com/zeroclaw-labs/zeroclaw/pull/3394)**
Наиболее масштабный feature-запрос дня. Пользователи хотят подключать внешние MCP-серверы (filesystem, browser, git) вместо ограниченного набора встроенных инструментов. Уже смержен — войдёт в ближайший релиз.

**Per-turn фильтрация MCP-инструментов — [#3395](https://github.com/zeroclaw-labs/zeroclaw/pull/3395)**
Оптимизация расхода токенов: при большом числе зарегистрированных инструментов их схемы отправляются на каждом туре. `tool_filter_groups` позволяет фильтровать по ключевым словам. Смержен.

**История выполнения cron-задач — [#3300](https://github.com/zeroclaw-labs/zeroclaw/pull/3300)**
Добавляет `/api/cron/{id}/runs` и панель истории в дашборде. Ожидает merge — высокая практическая ценность для операторов.

**Интерактивный TTY-инструмент — [#3065](https://github.com/zeroclaw-labs/zeroclaw/pull/3065)**
Возможность запускать интерактивные команды из агента. Нишевый, но интересный запрос для сложных automation-сценариев. Ожидает merge.

**Поддержка local CA certificates — [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458)**
Возможность указывать доверенный корневой CA для кастомных inference endpoints. Закрыт

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

Активности за 24 часа нет.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# Дайджест проекта LobsterAI — 14 марта 2026

> **Источник:** github.com/netease-youdao/LobsterAI | **Период:** 2026-03-13 — 2026-03-14

---

## 1. Обзор дня

За отчётный период проект демонстрирует умеренно высокую активность: 5 PR были смержены за один день, что свидетельствует об интенсивной работе команды над интеграцией подсистемы OpenClaw. Основной вектор разработки сместился в сторону встроенного агентного режима (embedded agent) и улучшения работы с памятью (MEMORY.md). Параллельно накапливается пользовательская тревога вокруг нестабильности локальных моделей (Ollama) и планировщика задач — оба направления остаются без официального ответа. Новых релизов за период не было, актуальная версия — **0.2.4**. Общий фон активности: команда сфокусирована на инфраструктурных улучшениях, тогда как поддержка пользователей по-прежнему остаётся слабым местом.

---

## 2. Релизы

*Новых релизов за отчётный период не было. Раздел пропущен.*

---

## 3. Прогресс проекта

Все 5 PR за период были закрыты (смержены), что указывает на продуктивный день команды. Ключевые продвижения:

### 🔌 MCP Bridge для OpenClaw
**[PR #408](https://github.com/netease-youdao/LobsterAI/pull/408)** — `feat: MCP Bridge for OpenClaw embedded agent`
Автор: @btc69m979y-dotcom

Наиболее значимое изменение дня. Реализован MCP Bridge, который экспортирует MCP-серверы LobsterAI (Tavily, Context7, GitHub и др.) как инструменты, доступные встроенному агенту OpenClaw через HTTP callback proxy. Дополнительно реализована функция **hot-reload**: установка, включение, отключение и удаление MCP-серверов теперь применяются мгновенно без перезапуска приложения, с индикатором синхронизации. Это существенно улучшает developer experience при работе с агентным режимом.

### 📅 Поддержка OpenClaw в планировщике задач
**[PR #409](https://github.com/netease-youdao/LobsterAI/pull/409)** — `feat: 定时任务支持openclaw`
Автор: @liugang519

Планировщик задач (scheduled tasks) теперь поддерживает выполнение через OpenClaw. Это закрывает функциональный разрыв между облачным и локальным режимами выполнения.

### 🐛 Исправление ошибки удаления задач
**[PR #410](https://github.com/netease-youdao/LobsterAI/pull/410)** — `fix: 删除定时任务错误引用`
Автор: @liugang519

Исправлена ошибочная ссылка при удалении запланированных задач. Небольшой, но важный баг-фикс, напрямую связанный с жалобами пользователей на нестабильность планировщика.

### 💾 Миграция хранилища памяти
**[PR #411](https://github.com/netease-youdao/LobsterAI/pull/411)** — `Liuzhq/openclaw memory`
Автор: @liuzhq1986

Вкладка «Память» в настройках переведена на хранилище через файл `MEMORY.md` OpenClaw. Это унифицирует механизм персистентной памяти агента.

### 🔧 Исправление режима выполнения для существующих пользователей
**[PR #412](https://github.com/netease-youdao/LobsterAI/pull/412)** — `Liuzhq/openclaw memory`
Автор: @liuzhq1986

Принудительно выставляется `executionMode: local`, что устраняет проблему для **старых пользователей**, у которых после обновления поверх существующей установки OpenClaw выдавал ошибку об отсутствии Docker. Также удалён тег режима выполнения из заголовка диалога — упрощение UI.

---

## 4. Горячие темы

### 🔥 Локальные модели не выполняют команды (Ollama)
Наиболее горячая тема периода — **две параллельных жалобы** на неработоспособность инструментов при использовании локальных моделей через Ollama:

- **[Issue #405](https://github.com/netease-youdao/LobsterAI/issues/405)** (2 комментария) — пользователь @chehxing тестировал `qwen2.5-coder:7b`, `qwen3:8b`, `deepseek-r1:8b`: при запросе «вывести список файлов в текущей директории» модели не выполняют команду. Настройка `tools.profile: full` в конфиге не помогает. С облачными моделями — работает.
- **[Issue #112](https://github.com/netease-youdao/LobsterAI/issues/112)** (2 комментария, создан ещё 26 февраля) — пользователь @wxpop фиксирует системную проблему: при использовании `ollama + Qwen3:14b` невозможно вызвать навыки через естественный язык, тогда как с API-моделями всё работает. Автор прямо указывает на баг в самом LobsterAI.

**Итого:** 4 комментария, оба issue открыты. Это потенциально **критичная проблема совместимости** с локальными моделями, которая бьёт по ключевой аудитории — пользователям без облачных подписок.

---

## 5. Баги и стабильность

| Приоритет | Issue | Описание | Статус | PR-исправление |
|-----------|-------|----------|--------|----------------|
| 🔴 Высокий | [#405](https://github.com/netease-youdao/LobsterAI/issues/405) + [#112](https://github.com/netease-youdao/LobsterAI/issues/112) | Локальные Ollama-модели не вызывают инструменты/навыки | OPEN | Нет |
| 🟠 Средний | [#407](https://github.com/netease-youdao/LobsterAI/issues/407) | Cron-выражение генерируется некорректно (v0.2.4, Mac mini M4) | OPEN | Частично — [PR #410](https://github.com/netease-youdao/LobsterAI/pull/410) |
| 🟠 Средний | [#285](https://github.com/netease-youdao/LobsterAI/issues/285) | Уведомления в DingTalk от планировщика самопроизвольно перестают работать | OPEN | [PR #409](https://github.com/netease-youdao/LobsterAI/pull/409) (косвенно) |
| 🟡 Низкий | [#413](https://github.com/netease-youdao/LobsterAI/issues/413) | QQ Bot периодически отваливается без видимых причин | OPEN | Нет |
| 🟡 Низкий | [#406](https://github.com/netease-youdao/LobsterAI/issues/406) | API Baidu Qianfan CodingPlan недоступен | OPEN | Нет |
| ✅ Закрыт | — | Ошибка при удалении запланированных задач | FIXED | [PR #410](https://github.com/netease-youdao/LobsterAI/pull/410) |
| ✅ Закрыт | — | Ошибка «Docker не найден» при обновлении поверх существующей установки | FIXED | [PR #412](https://github.com/netease-youdao/LobsterAI/pull/412) |

**Вывод по стабильности:** Планировщик задач — наиболее проблемная подсистема на сегодняшний день (3 связанных issue). Интеграция с локальными моделями — второй критичный болевой участок, требующий системного решения.

---

## 6. Запросы на функции

### 📌 Скорость и архитектура: призыв к переосмыслению
**[Issue #353](https://github.com/netease-youdao/LobsterAI/issues/353)** (CLOSED, 👍 1)
Автор: @fsinbad

Несмотря на закрытие, этот issue содержит стратегически важный фидбек:
- Предлагается ориентироваться на скорость выполнения как ключевой UX-параметр
- Сравнение не в пользу LobsterAI: «wrapped OpenClaw executes much faster»
- Предлагается постоянно работающая среда выполнения (persistent runtime) вместо разнородных клиентских окружений
- Указывается, что современные облачные модели уже имеют встроенные web/image capabilities, снижая ценность агентного слоя

**Статус:** Закрыт без развёрнутого ответа от команды. Учитывая 👍, тема имеет поддержку в сообществе. Вероятность попадания в roadmap: средняя — команда движется именно в сторону OpenClaw-архитектуры (см. PR #408–412).

---

## 7. Фидбек пользователей

### Что не работает / раздражает:

**1. Двухклассовая система: облако vs. локальные модели**
Самая болезненная тема. Пользователи, работающие с Ollama (qwen3, deepseek-r1, qwen2.5-coder), фактически получают урезанный продукт — без выполнения команд и вызова навыков. Это создаёт ощущение «сломанного» инструмента для значительной части аудитории.
> *«Это сильно влияет [на опыт], особенно для пользователей локальных моделей»* — @wxpop, [#112](https://github.com/netease-youdao/LobsterAI/issues/112)

**2. Ненадёжность планировщика задач**
Три независимых пользователя фиксируют проблемы: неверные Cron-выражения ([#407](https://github.com/netease-youdao/LobsterAI/issues/407)), самопроизвольное отключение уведомлений в DingTalk ([#285](https://github.com/netease-youdao/LobsterAI/issues/285)). Функция воспринимается как ненадёжная.

**3. Нестабильность QQ Bot**
Пользователь @lyzauo ([#413](https://github.com/netease-youdao/LobsterAI/issues/413)) жалуется на частые отключения без объяснимой причины и без ответа от команды.

**4. Недоступность внешних API**
[Issue #406](https://github.com/netease-youdao/LobsterAI/issues/406) указывает на проблему подключения к Baidu Qianfan CodingPlan API — возможно, проблема на стороне провайдера, но отсутствие диагностики в приложении раздражает.

### Что работает:
Неявно следует из жалоб — **облачные API-модели** работают стабильно и полнофункционально. Команда активно развивает архитектуру OpenClaw (5 мержей за день), что пользователи видят.

---

## 8. Накопленный бэклог

Следующие issues существенно устарели и остаются без официальной реакции:

| Issue | Дата создания | Дней без ответа | Проблема | Ссылка |
|-------|---------------|-----------------|----------|--------|
| **#112** | 2026-02-26 | **16 дней** | Локальные модели не вызывают навыки через естественный язык | [ссылка](https://github.com/netease-youdao/LobsterAI/issues/112) |
| **#285** | 2026-03-05 | **9 дней** | DingTalk-уведомления от планировщика самопроизвольно отключаются | [ссылка](https://github.com/netease-youdao/LobsterAI/issues/285) |
| **#353** | 2026-03-09 | закрыт без ответа | Стратегический фидбек по скорости и архитектуре | [ссылка](https://github.com/netease-youdao/LobsterAI/issues/353) |

**Особое внимание:** Issue [#112](https://github.com/netease-youdao/LobsterAI/issues/112) — 16 дней без ответа команды при том, что это **системная проблема**, затрагивающая всех пользователей локальных моделей. Отсутствие хотя бы acknowledgement со стороны мейнтейнеров создаёт негативное впечатление об уровне поддержки open-source сообщества.

---

## Итоговая оценка дня

| Метрика | Значение |
|---------|---------|
| Активность команды (PR) | 🟢 Высокая — 5 мержей |
| Активность сообщества (Issues) | 🟡 Умеренная — 7 issues |
| Поддержка пользователей | 🔴 Слабая — большинство issues без ответа |
| Качество релизов | ⚪ N/A — релизов нет |
| Технический прогресс | 🟢 Уверенный — OpenClaw-интеграция развивается |

> **Ключевой риск:** Разрыв между скоростью развития инфраструктуры (OpenClaw) и качеством поддержки базовых сценариев (локальные модели, планировщик) может привести к оттоку пользователей, не использующих облачные API.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# Дайджест проекта ZeptoClaw — 2026-03-14

> **Источник:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | Период: 2026-03-13–14

---

## 1. Обзор дня

За прошедшие 24 часа проект ZeptoClaw продемонстрировал высокую концентрированную активность в области безопасности и UX агентного цикла. Все 6 issues были закрыты в течение одного дня, что свидетельствует об оперативной работе основного контрибьютора (@qhkm) в режиме плотного итерирования. Из 6 PR три уже смержены, три остаются открытыми и ожидают ревью — в том числе потенциально крупный PR по реализации протокола ACP. Тематика дня чётко выражена: **ужесточение политик безопасности агента**, **исправление расхождений между streaming и non-streaming путями**, а также **улучшение интерактивности CLI**. Новых релизов не было, однако объём изменений достаточен для патч- или минорной версии в ближайшее время.

---

## 2. Релизы

*Новых релизов за отчётный период не зафиксировано. Раздел пропущен.*

---

## 3. Прогресс проекта

### Смерженные PR

#### 🟢 [PR #342](https://github.com/qhkm/zeptoclaw/pull/342) — `feat: stream by default + response metadata footer`
**Автор:** @qhkm | **Статус:** CLOSED (merged)

Ключевые изменения:
- Стриминг ответов включён **по умолчанию** (`agents.defaults.streaming: true`); для отката добавлен флаг `--no-stream`
- После каждого ответа выводится компактный футер с количеством токенов, вызовами инструментов и wall-time
- Связан с Issue [#341](https://github.com/qhkm/zeptoclaw/issues/341)

> ⚠️ **Потенциальный breaking change для конфигураций:** если значение `agents.defaults.streaming` было явно задано как `false`, поведение не изменится, но дефолт инвертирован — необходимо проверить окружения с автоматизированными запусками.

---

#### 🟢 [PR #349](https://github.com/qhkm/zeptoclaw/pull/349) — `fix: AgentLoop constructors respect config streaming default`
**Автор:** @qhkm | **Статус:** CLOSED (merged)

- Исправлено жёстко закодированное `AtomicBool::new(false)` в обоих конструкторах `AgentLoop`
- Добавлен тест `test_agent_loop_streaming_respects_config`
- Устранял регрессию, привнесённую или обнажённую PR #342

---

#### 🟢 [PR #353](https://github.com/qhkm/zeptoclaw/pull/353) — `feat: interactive approval prompts, streaming parity, safer defaults`
**Автор:** @qhkm | **Статус:** CLOSED (merged)

Наиболее объёмный из смерженных PR дня. Охватывает сразу несколько issues:
- **Интерактивные approval-промпты**: TTY-гейтированные инлайн-запросы `[y/N]` для опасных инструментов через новый колбэк `ApprovalHandler` на `AgentLoop`
- **Trusted local session**: slash-команда `/trust on|off` для временного обхода approval-промптов в интерактивном CLI-сеансе; активация из non-TTY-окружений заблокирована
- **Parity streaming/non-streaming**: хуки `before_tool` / `after_tool` / `on_error` теперь выполняются и в streaming-пути; метрики использования (`usage_metrics`) корректно фиксируют ошибки и токены
- **Safer defaults**: `agent_mode` по умолчанию переключён с `autonomous` на более безопасный режим; политика approval изменена с `AlwaysAllow`

Закрывает issues: [#348](https://github.com/qhkm/zeptoclaw/issues/348), [#350](https://github.com/qhkm/zeptoclaw/issues/350), [#351](https://github.com/qhkm/zeptoclaw/issues/351), [#352](https://github.com/qhkm/zeptoclaw/issues/352)

---

### Открытые PR, ожидающие merge

| PR | Название | Автор | Приоритет |
|----|----------|-------|-----------|
| [#356](https://github.com/qhkm/zeptoclaw/pull/356) | ACP stdio + HTTP implementation | @starsy | 🔴 Высокий |
| [#355](https://github.com/qhkm/zeptoclaw/pull/355) | fix: image content handling in loop | @rafaellin | 🟡 Средний |
| [#346](https://github.com/qhkm/zeptoclaw/pull/346) | fix: discord channel ignores image-only messages | @rafaellin | 🟡 Средний |

---

## 4. Горячие темы

### 🔥 Issue [#354](https://github.com/qhkm/zeptoclaw/issues/354) — `bug: narrow filesystem safety carve-out`
**Теги:** `bug`, `area:safety`, `P1-critical` | **Автор:** @qhkm

Наиболее критичная тема дня. Issue фиксирует, что PR #342 внёс safety-gate с избыточно широким охватом:
- `write_file` сканирует только `path`, но не содержимое
- `edit_file` в diff-режиме **не сканирует новое тело** изменений
- Taint-трекинг не рассматривает промежуточные write-операции как источники

Несмотря на быстрое закрытие, проблема указывает на системный gap в модели taint-трекинга файловой системы. Сообщество пока не отреагировало (0 👍, 1 комментарий), однако приоритет P1-critical говорит о том, что фикс был встроен в тот же день через PR #353 или запланирован отдельно.

---

### 🔥 Issue [#348](https://github.com/qhkm/zeptoclaw/issues/348) — `bug: harden default agent mode and approval policy`
**Автор:** @qhkm

Прямой сигнал об опасном состоянии дефолтов: автономный режим + `AlwaysAllow` без approval — это конфигурация, неприемлемая для любого production-развёртывания. Закрыта через PR #353.

---

### 🟡 PR [#356](https://github.com/qhkm/zeptoclaw/pull/356) — `feat(channels): ACP stdio + HTTP`
**Автор:** @starsy

Потенциально стратегически важный PR: реализация протокола **Agent Client Protocol (ACP)** открывает ZeptoClaw для экосистемы внешних ACP-совместимых клиентов (например, `acpx`). Включает:
- Субкоманду `zeptoclaw acp` для запуска в качестве subprocess
- HTTP-канал со streamable-транспортом (`channels.acp.http.enabled`)

PR от внешнего контрибьютора (@starsy), ещё не прокомментирован — интересно наблюдать за ревью от @qhkm.

---

## 5. Баги и стабильность

### 🔴 Критические (P1)

| Issue | Описание | Статус | PR-фикс |
|-------|----------|--------|---------|
| [#354](https://github.com/qhkm/zeptoclaw/issues/354) | Неполное сканирование содержимого файлов в safety-gate | CLOSED | Частично [#353](https://github.com/qhkm/zeptoclaw/pull/353) |
| [#348](https://github.com/qhkm/zeptoclaw/issues/348) | Небезопасные дефолты агентного режима | CLOSED | [#353](https://github.com/qhkm/zeptoclaw/pull/353) |

### 🟠 Высокие (P2)

| Issue | Описание | Статус | PR-фикс |
|-------|----------|--------|---------|
| [#351](https://github.com/qhkm/zeptoclaw/issues/351) | Streaming loop: отсутствие хуков и метрик | CLOSED | [#353](https://github.com/qhkm/zeptoclaw/pull/353) |
| [#352](https://github.com/qhkm/zeptoclaw/issues/352) | `/trust` применим к non-TTY/piped-запускам | CLOSED | [#353](https://github.com/qhkm/zeptoclaw/pull/353) |

### 🟡 Открытые баги (ожидают merge)

| PR | Описание | Автор |
|----|----------|-------|
| [#355](https://github.com/qhkm/zeptoclaw/pull/355) | Некорректная обработка image-контента в loop | @rafaellin |
| [#346](https://github.com/qhkm/zeptoclaw/pull/346) | Discord-канал игнорирует image-only сообщения | @rafaellin |

**Вывод по стабильности:** День прошёл под знаком устранения критических уязвимостей в модели безопасности агента. Оба P1-бага закрыты. Остаются незакрытыми два бага средней критичности, связанные с обработкой изображений в разных каналах — они от одного автора и, вероятно, имеют общий корень.

---

## 6. Запросы на функции

### ✅ Реализованные сегодня

| Issue | Функциональность | PR |
|-------|------------------|----|
| [#341](https://github.com/qhkm/zeptoclaw/issues/341) | Стриминг по умолчанию + metadata footer | [#342](https://github.com/qhkm/zeptoclaw/pull/342) |
| [#350](https://github.com/qhkm/zeptoclaw/issues/350) | Интерактивный approval flow + trusted session | [#353](https://github.com/qhkm/zeptoclaw/pull/353) |

### 🔄 В процессе (открытые PR)

**[PR #356](https://github.com/qhkm/zeptoclaw/pull/356) — ACP Protocol** (@starsy)
Наиболее амбициозный feature-запрос дня. Реализация ACP позволит:
- Интегрировать ZeptoClaw как subprocess-агент в мульти-агентные оркестраторы
- Использовать HTTP-канал для удалённых ACP-клиентов
- Повысить совместимость с экосистемой стандартизированных agent-протоколов

**Оценка вероятности вхождения в следующую версию:** Высокая — PR уже открыт и реализован, вопрос только в качестве кода и ревью.

---

## 7. Фидбек пользователей

> *Примечание: активность комментариев за период низкая (большинство issues закрыты с 1 комментарием или без), поэтому анализ базируется на формулировках issues и структуре PR.*

### 😤 Боли и проблемы

**1. Небезопасные дефолты — системная проблема**
[Issue #348](https://github.com/qhkm/zeptoclaw/issues/348) прямо указывает: дефолтная конфигурация `autonomous` + `AlwaysAllow` неприемлема. Это говорит о том, что проект рос быстро, и вопрос "security by default" не был приоритетом на ранних этапах. Пользователи, разворачивающие ZeptoClaw в production, рискуют получить агента без каких-либо approval-барьеров.

**2. `/trust` без TTY-ограничения — вектор атаки**
[Issue #352](https://github.com/qhkm/zeptoclaw/issues/352) — это не просто баг, это потенциальная уязвимость: если trusted-режим можно активировать из скрипта или CI-пайплайна, protection model разрушается полностью.

**3. Расхождение streaming/non-streaming путей**
[Issue #351](https://github.com/qhkm/zeptoclaw/issues/351) свидетельствует о том, что streaming добавлялся как "надстройка" без сохранения паритета с базовым путём. Отсутствие хуков и метрик в streaming-режиме — серьёзная проблема для любого пользователя, строящего observability поверх ZeptoClaw.

### 👍 Что работает хорошо

- **Быстрая реакция на критические issues**: все P1/P2 закрыты в течение одного дня
- **Streaming по умолчанию** ([#341](https://github.com/qhkm/zeptoclaw/issues/341)) — правильное решение с точки зрения perceived performance; пользователи давно ждали этого изменения
- **Metadata footer** — небольшое, но ценное UX-улучшение для разработчиков, следящих за потреблением токенов

### 💡 Сценарии использования, проявляющиеся через issues

- **Локальная разработка с CLI**: интерактивные approval, `/trust`-режим, TTY-чеки → проект активно используется как CLI-инструмент разработчиком
- **Мульти-агентная оркестрация**: PR #356 (ACP) → есть запрос на интеграцию ZeptoClaw в более широкие agent-пайплайны
- **Discord-бот и медиа-контент**: PR #346, #355 → проект используется в Discord-каналах с передачей изображений

---

## 8. Накопленный бэклог

### PR без ревью (ожидают merge)

| PR | Время ожидания | Описание | Приоритет |
|----|----------------|----------|-----------|
| [#346](https://github.com/qhkm/zeptoclaw/pull/346) | ~1 

</details>

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Дайджест NanoBot — 14 марта 2026

---

## 1. Обзор дня

NanoBot демонстрирует исключительно высокий уровень активности: за последние 24 часа зафиксировано **19 Issues** и **99 Pull Requests**, из которых 62 уже смержены или закрыты. Это свидетельствует о зрелом и разрастающемся сообществе вокруг проекта, активно участвующем как в разработке новых функций, так и в выявлении проблем. Новых релизов не выходило, однако поток PR охватывает широкий спектр направлений: новые каналы интеграции (XMPP, Zalo, DingTalk), улучшения архитектуры провайдеров, sandboxing и безопасность. Особую активность проявляют пользователи китайскоязычного сегмента — значительная часть Issues и PR поступает от них, что указывает на растущее adoption в Азиатско-Тихоокеанском регионе. Вместе с тем накапливается ряд нерешённых проблем стабильности, требующих внимания мейнтейнеров.

---

## 2. Релизы

*Новых релизов за отчётный период не было. Раздел пропускается.*

---

## 3. Прогресс проекта

За сутки смержено/закрыто **62 PR**, среди наиболее значимых:

### ✅ Закрытые/смерженные PR

**[#1941](https://github.com/HKUDS/nanobot/pull/1941) — fix(qq): restore plain text replies for legacy clients**
`@tsubasakong` | CLOSED (смержен)
Восстановлены plain-text ответы для QQ-клиентов, сломанных после недавнего перехода на markdown-пейлоады (`msg_type=0` + `content`). Добавлено регрессионное покрытие для группового и C2C-режимов. Исправляет баг [#1936](https://github.com/HKUDS/nanobot/issues/1936).

**[#605](https://github.com/HKUDS/nanobot/pull/605) — feat(bridge): harden WhatsApp bridge security with mandatory auth**
`@dimitree2k` | CLOSED
Усиление безопасности WhatsApp-моста: аутентификация стала обязательной (breaking change — требуется `BRIDGE_TOKEN`), добавлено несколько уровней защиты.

**[#1984](https://github.com/HKUDS/nanobot/pull/1984) — feat: channel plugin architecture with decoupled configs**
`@chengyongru` | CLOSED
Закрыт в пользу более полной версии [#1982](https://github.com/HKUDS/nanobot/pull/1982) от `@Re-bin`.

### 🔄 PR, продвинувшиеся к мержу (статус OPEN, высокая активность)

**[#1982](https://github.com/HKUDS/nanobot/pull/1982) — feat: channel plugin architecture with decoupled configs**
`@Re-bin`
Крупная архитектурная инициатива: вынос конфигов всех 11 встроенных каналов из `schema.py` в их собственные модули, поддержка внешних плагинов каналов через `pip install` + Python entry_points. Это фундаментальный шаг к расширяемости.

**[#1940](https://github.com/HKUDS/nanobot/pull/1940) — feat: sandbox exec calls with bwrap**
`@kinchahoy`
Изоляция exec-вызовов через [bubblewrap](https://github.com/containers/bubblewrap) (~50 строк кода), закрывает реальную уязвимость выхода за пределы workspace. Решает [#1873](https://github.com/HKUDS/nanobot/issues/1873).

---

## 4. Горячие темы

### 🔥 Issue #1692 — Telegram bot отвечает дважды
**[ссылка](https://github.com/HKUDS/nanobot/issues/1692)** | `@aiko929` | 6 комментариев | 👍 4

Наиболее популярный Issue по реакциям сообщества. Пользователи получают два ответа: один с отрендеренным Markdown, другой — без форматирования. Проблема воспроизводится стабильно, обсуждается несколько недель. **Ни патча, ни официального ответа мейнтейнеров пока не видно** — это вызывает раздражение у пользователей Telegram-канала.

### 🔥 Issue #1955 — Прозрачность выполнения sub-agent
**[ссылка](https://github.com/HKUDS/nanobot/issues/1955)** | `@dweigit` | 10 комментариев

Самый обсуждаемый Issue дня. Основной агент предоставляет видимый цикл выполнения (вызовы инструментов, размышления), тогда как sub-agent работает как «чёрный ящик». Сообщество активно обсуждает, как это исправить: предложения варьируются от стриминга событий до dedicated UI-панели. Это концептуальная проблема дизайна, а не простой баг.

### 🔥 PR #1925 — Поддержка файлов/изображений в DingTalk
**[ссылка](https://github.com/HKUDS/nanobot/pull/1925)** | `@mengyhang`
Добавлена обработка типов сообщений `file`, `picture` и `richText` в DingTalk-канале. Ранее такие сообщения молча игнорировались. Закрывает [#1864](https://github.com/HKUDS/nanobot/issues/1864).

### 🔥 PR #1990 — Multi-bot осведомлённость в Feishu
**[ссылка](https://github.com/HKUDS/nanobot/pull/1990)** | `@shenchengtsi`
Нестандартная функциональность: несколько ботов в одной Feishu-группе могут «осознавать» присутствие друг друга, молча записывать чужие ответы и синхронизировать историю. Актуально для командных сценариев использования.

---

## 5. Баги и стабильность

### 🔴 Критические

**[#1979](https://github.com/HKUDS/nanobot/issues/1979) — Context Window Overflow при длинных сессиях**
`@V-YOP` | [ссылка](https://github.com/HKUDS/nanobot/issues/1979)
Накопление истории диалога приводит к `ContextWindowExceededError` и полному отказу LLM API. Механизм усечения контекста либо отсутствует, либо не работает должным образом. **Высокий приоритет** — затрагивает все модели при продолжительных сессиях. PR с фиксом не обнаружен.

**[#1948](https://github.com/HKUDS/nanobot/issues/1948) — exec tool не может писать в /tmp**
`@cup-of-latte` | [ссылка](https://github.com/HKUDS/nanobot/issues/1948)
При выполнении `npx`/`npm` через exec-инструмент файловая система `/tmp` оказывается read-only, хотя вручную из терминала запись работает. Связано с изоляцией sandbox. Частично перекликается с [#1940](https://github.com/HKUDS/nanobot/pull/1940).

### 🟡 Средней критичности

**[#1692](https://github.com/HKUDS/nanobot/issues/1692) — Telegram: двойные ответы**
`@aiko929` | [ссылка](https://github.com/HKUDS/nanobot/issues/1692)
Проблема раздражает пользователей (👍 4), существует с версии 0.1.x. Исправляющего PR не найдено.

**[#1829](https://github.com/HKUDS/nanobot/issues/1829) — Команды не работают после добавления (Docker)**
`@urtaevS` | [ссылка](https://github.com/HKUDS/nanobot/issues/1829)
В Docker-окружении новые команды не активируются после перезапуска контейнера, несмотря на то что `MEMORY.md` обновляется. Баг специфичен для Docker-деплоя v0.1.4.

**[#1765](https://github.com/HKUDS/nanobot/issues/1765) — Невозможность апгрейда с v0.1.4.post3 до post4 через исходники**
`@bigsinger` | [ссылка](https://github.com/HKUDS/nanobot/issues/1765)
`pip install -e .` не обновляет версию — после рестарта система сообщает о старой версии. Блокирует пользователей, предпочитающих установку из исходников.

**[#1956](https://github.com/HKUDS/nanobot/issues/1956) — Артефакт "nanobot is thinking..." в CLI-выводе**
`@dweigit` | [ссылка](https://github.com/HKUDS/nanobot/issues/1956) | помечен `[good first issue]`
Строка прогресса не очищается при выводе результата инструмента. Косметическая проблема, но портит UX командной строки. Хорошая точка входа для новых контрибьюторов.

### 🟠 LLM-специфичные ошибки

**[#1139](https://github.com/HKUDS/nanobot/issues/1139)** [CLOSED] — `litellm.BadRequestError` для Moonshot AI Kimi K2.5: `reasoning_content` отсутствует в tool call. Закрыт — вероятно, исправлен в одном из post-релизов.

**[#1487](https://github.com/HKUDS/nanobot/issues/1487)** — Qwen3.5 Plus: `function.arguments` должен быть в JSON-формате при использовании PDF-навыка. Связан с форматированием аргументов инструментов для code-моделей DashScope.

**[#1969](https://github.com/HKUDS/nanobot/issues/1969)** — Rate limit от провайдера Zai постоянно выдаёт ошибки — частная проблема конфигурации, но симптоматична для отсутствия built-in retry/backoff логики.

**Патч от сообщества:** [#1989](https://github.com/HKUDS/nanobot/pull/1989) (`@bobostudio`) добавляет fallback-парсер XML для LLM-моделей, не использующих structured function-calling API — напрямую закрывает проблемы с open-source и китайскими моделями.

---

## 6. Запросы на функции

### 🆕 Новые запросы дня

**[#1955](https://github.com/HKUDS/nanobot/issues/1955) — Видимость выполнения sub-agent** ⭐
`@dweigit` | [ссылка](https://github.com/HKUDS/nanobot/issues/1955) | 10 комм.
Наиболее обсуждаемый enhancement-запрос. Требует либо event streaming из sub-agent, либо dedicated интерфейса мониторинга. Высокий потенциал для включения в следующую версию — затрагивает ключевую UX-проблему multi-agent систем.

**[#1991](https://github.com/HKUDS/nanobot/issues/1991) — Поддержка нескольких custom-провайдеров**
`@Wcowin` | [ссылка](https://github.com/HKUDS/nanobot/issues/1991)
Возможность настроить `custom2`, `custom3` и динамически переключаться между ними. Частично решается PR [#1967](https://github.com/HKUDS/nanobot/pull/1967) с pluggable-провайдерами.

**[#1954](https://github.com/HKUDS/nanobot/issues/1954) — Динамическое переключение провайдера в диалоге**
`@runbrick` | [ссылка](https://github.com/HKUDS/nanobot/issues/1954) | 3 комм.
Пользователи хотят менять модель/провайдера прямо в чате (например, через Feishu) без изменения системной конфигурации. Связан с [#1991](https://github.com/HKUDS/nanobot/issues/1991).

**[#1976](https://github.com/HKUDS/nanobot/issues/1976) — Снятие глобального lock на обработку сообщений**
`@yaowei520` | [ссылка](https://github.com/HKUDS/nanobot/issues/1976)
Архитектурная проблема: `_processing_lock` блокирует обработку всех клиентов пока один клиент обрабатывается. Автор предлагает перейти к per-client-изоляции. **Критично для многопользовательских сценариев.** Кандидат в следующую версию.

**[#1862](https://github.com/HKUDS/nanobot/issues/1862) — Поддержка доступа к media-путям при включённом restrictToWorkspace**
`@WUXM5` | [ссылка](https://github.com/HKUDS/nanobot/issues/1862) | 👍 2
При загрузке файлов через Feishu директория `/media` создаётся за пределами `workspace`, что ломает работу при `restrictToWorkspace=true`. Логичный и легко воспроизводимый баг-запрос.

### 🔧 PR с новыми функциями в очереди

| PR | Функция | Вероятность мержа |
|----|---------|-------------------|
| [#1945](https://github.com

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw — Дайджест за 2026-03-14

---

## 1. Обзор дня

Проект демонстрирует очень высокий уровень активности: за 24 часа зафиксировано **24 issue** и **71 pull request**, из которых 41 PR ожидает merge. Параллельно ведётся масштабный рефакторинг агентной подсистемы ([Meta: Agent refactor #1216](https://github.com/sipeed/picoclaw/issues/1216)), который затрагивает фундаментальные аспекты архитектуры — от определения понятия «агент» до модели выполнения loop. Сообщество активно вносит вклад по нескольким направлениям одновременно: безопасность, новые провайдеры, каналы (Feishu, Telegram), инфраструктура учётных данных. Заметна также систематическая работа по аудиту безопасности — один участник (@SebastianBoehler) открыл серию issue с конкретными уязвимостями. Общее состояние проекта оценивается как **активная фаза роста** с умеренным техническим долгом.

---

## 2. Релизы

### `v0.2.3-nightly.20260314.c68b4f39` — Nightly Build

> 🔗 [Сравнение с v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

- **Тип:** автоматическая ночная сборка, нестабильная
- **Статус:** предназначена для тестирования, **не рекомендуется для production**
- **Breaking changes:** не задокументированы в данной сборке; изменения относительно `v0.2.3` отражены в диффе main-ветки
- **Миграция:** специальных инструкций не требуется, но учитывая активный agent refactor, конфигурационные структуры могут измениться до стабильного релиза

---

## 3. Прогресс проекта

За сутки **смержено/закрыто 30 PR**. Среди значимых продвижений:

| PR | Описание | Статус |
|----|----------|--------|
| [#1516](https://github.com/sipeed/picoclaw/pull/1516) | Expose local file paths для non-image медиа в агентных инструментах | ✅ CLOSED (заменён более комплексным фиксом) |
| [#1511](https://github.com/sipeed/picoclaw/pull/1511) | Документация по конфигурации Volcengine Coding Plain | ✅ MERGED |
| [#1187](https://github.com/sipeed/picoclaw/pull/1187) | Gateway hot-reload конфига при изменении config.json | ✅ CLOSED |
| [#90](https://github.com/sipeed/picoclaw/pull/90) | Vector search для памяти и lifecycle hooks | ✅ CLOSED |
| [#1242](https://github.com/sipeed/picoclaw/issues/1242) | Исправление разбивки агентов по bindings в QQ-канале | ✅ CLOSED |
| [#1203](https://github.com/sipeed/picoclaw/issues/1203) | Safety guard некорректно блокировал команды с URL | ✅ CLOSED |
| [#1506](https://github.com/sipeed/picoclaw/issues/1506) | Expose local file path в Feishu для агентных инструментов | ✅ CLOSED |

Важно отметить: PR [#1536](https://github.com/sipeed/picoclaw/pull/1536) от @alexhoshina (`Fix: allow picoclaw media tempdir`) вышел как прямое следствие закрытия issue [#1506](https://github.com/sipeed/picoclaw/issues/1506) — цикл issue→PR работает эффективно.

---

## 4. Горячие темы

### 🔥 Топ обсуждений

**[#1218](https://github.com/sipeed/picoclaw/issues/1218) — «What an Agent is»: определение через `SOUL.md` и `AGENT.md`**
- 24 комментария, открыт с 2026-03-07
- Предложение ввести два файла для описания агента: `SOUL.md` (личность, ценности, характер в свободной форме) и `AGENT.md` (структурированная конфигурация поведения)
- Это концептуальная основа всего agent refactor — дискуссия влияет на архитектурные решения

**[#1316](https://github.com/sipeed/picoclaw/issues/1316) — Event-driven agent loop с hooks, interrupts и steering**
- 10 комментариев, 👍 1
- Критика текущего `runAgentLoop` как «чёрного ящика»: нет observability, нет возможности hook/interrupt/append
- Предложена полная переработка на событийную модель
- Прямо связан с PR [#1490](https://github.com/sipeed/picoclaw/pull/1490), который уже в review

**[#1424](https://github.com/sipeed/picoclaw/issues/1424) — Azure OpenAI provider**
- PR [#1422](https://github.com/sipeed/picoclaw/pull/1422) готов, E2E-тестирование завершено
- Высокий практический запрос от enterprise-пользователей

**[#1506](https://github.com/sipeed/picoclaw/issues/1506) — Feishu: expose local file path**
- 👍 1, 9 комментариев, уже закрыт и реализован через PR #1536 и #1534
- Показывает быструю реакцию мейнтейнеров на конкретные feature request

---

## 5. Баги и стабильность

### 🔴 Критические

| Issue | Описание | PR-фикс |
|-------|----------|---------|
| [#1150](https://github.com/sipeed/picoclaw/issues/1150) `priority: high` | `pool: factory panic` оставляет inflight-запись в `p.creating`, вызывая **перманентный дедлок** для данного target в `pkg/routing/pool.go` | Нет активного PR |
| [#1532](https://github.com/sipeed/picoclaw/issues/1532) `priority: high` | **Серьёзный баг в `picoclaw cron add`**: команда не выполняется корректно | Нет PR |

### 🟠 Высокие

| Issue | Описание | PR-фикс |
|-------|----------|---------|
| [#1525](https://github.com/sipeed/picoclaw/issues/1525) | `exec.allow_remote=true` по умолчанию — shell-выполнение доступно из remote-контекста «из коробки» | Нет PR |
| [#1526](https://github.com/sipeed/picoclaw/issues/1526) | `restrict_to_workspace=true` не защищает от symlink traversal | Нет PR |
| [#1530](https://github.com/sipeed/picoclaw/issues/1530) | `pico setup` включает `allow_token_query=true` и `allow_origins=["*"]` по умолчанию | Нет PR |
| [#1529](https://github.com/sipeed/picoclaw/issues/1529) | `picoclaw-web -public` слушает `0.0.0.0` при пустом `allowed_cidrs` | Нет PR |

### 🟡 Средние

| Issue | Описание | PR-фикс |
|-------|----------|---------|
| [#1493](https://github.com/sipeed/picoclaw/issues/1493) | Новая модель не подхватывается без перезапуска gateway | [#1187](https://github.com/sipeed/picoclaw/pull/1187) закрыт — статус неясен |
| [#1533](https://github.com/sipeed/picoclaw/issues/1533) | `skill-vetter` не найден: `skill-vetter` → `skill_vetter` (конвертация `-` в `_`) | Нет PR |
| [#1502](https://github.com/sipeed/picoclaw/issues/1502) | Mistral integration: «Extra inputs» при обращении к `mistral-small` | Частично: [#1509](https://github.com/sipeed/picoclaw/pull/1509) |
| [#1527](https://github.com/sipeed/picoclaw/issues/1527) | JSONL session store создаёт файлы с правами `0644`/`0755` вместо `0600`/`0700` | Нет PR |
| [#528](https://github.com/sipeed/picoclaw/issues/528) | Cron-планировщик через chat не работает корректно (Telegram + Gemini) | Нет PR |

### ✅ Исправлено сегодня

- [#1536](https://github.com/sipeed/picoclaw/pull/1536) — media tempdir (`/tmp/picoclaw_media/`) теперь добавляется в whitelist workspace sandbox
- [#1535](https://github.com/sipeed/picoclaw/pull/1535) — систематическое ограничение unbounded `io.ReadAll`/`io.Copy` в 7 файлах channel-слоя (DoS-уязвимость)
- [#1509](https://github.com/sipeed/picoclaw/pull/1509) — strip `extra_content` из tool calls для non-Google провайдеров

> ⚠️ **Обращает внимание** кластер из 5 security-issue от @SebastianBoehler, открытых 2026-03-13 — все без PR-фиксов. Рекомендуется приоритизировать до следующего стабильного релиза.

---

## 6. Запросы на функции

### Поступившие сегодня / в активной разработке

| Issue/PR | Функция | Приоритет | Статус |
|----------|---------|-----------|--------|
| [#1422](https://github.com/sipeed/picoclaw/pull/1422) | **Azure OpenAI provider** — first-class поддержка | 🔴 Высокий | PR в review, E2E пройден |
| [#1514](https://github.com/sipeed/picoclaw/pull/1514) | **Kimi For Coding** модель (Moonshot AI) | 🟠 Средний | PR открыт |
| [#1503](https://github.com/sipeed/picoclaw/issues/1503) | **Pluggable speech I/O**: OpenAI/local/HuggingFace STT + TTS для Telegram | 🟠 Средний | Только issue |
| [#1474](https://github.com/sipeed/picoclaw/issues/1474) | **Capability discovery endpoint** для оркестрационных слоёв | 🟡 Средний | Только issue |
| [#1528](https://github.com/sipeed/picoclaw/issues/1528) | Config-флаг для **отключения персистентности транскриптов** | 🟡 Средний | Только issue |
| [#1372](https://github.com/sipeed/picoclaw/issues/1372) | **OpenIM channel** plugin | 🟡 Средний | Только issue |
| [#1498](https://github.com/sipeed/picoclaw/issues/1498) | **Model-side search + fastembed** | 🟡 Средний | Только issue |
| [#1521](https://github.com/sipeed/picoclaw/pull/1521) / [#1522](https://github.com/sipeed/picoclaw/pull/1522) | **AES-GCM credential encryption** (SecureStore, HKDF-SHA256) | 🔴 Высокий | PR открыт, part1+part2 |

### Что наиболее реалистично войдёт в v0.2.3:
1. **Azure OpenAI** (#1422) — PR готов, просит только review
2. **Kimi For Coding** (#1514) — минимальные изменения
3. **AES-GCM credential store** (#1521/#1522) — активная разработка
4. **Feishu thread reply fix** (#1537) — bugfix, минимальный риск
5. **Telegram reconnect** (#1455) — давно назревшее исправление

---

## 7. Фидбек пользователей

### Боли и проблемы

**Конфигурация и hot-reload:**
Пользователь @HuangDayu ([#1493](https://github.com/sipeed/picoclaw/issues/1493)) указывает на то, что добавление новой модели требует **полного перезапуска gateway** — это серьёзное неудобство для production-окружений. Запрос на hot-reload конфига повторяется в проекте неоднократно (см. также PR #1187).

**Cron и планировщик:**
Два независимых пользователя (@Giordano10 [#528](https://github.com/sipeed/picoclaw/issues/528), @jevian-ma [#1532](https://github.com/sipeed/picoclaw/issues/1532)) сообщают о проблемах с cron — один не может создать задачу через chat, другой описывает «серьёзный баг» в CLI-команде `cron add`. Документация по просмотру задач также отсутствует ([#1501](https://github.com/sipeed/picoclaw/issues/1501)).

**Skill discovery:**
@coolbiubiu ([#1533](https://github.com/sipeed/picoclaw/issues/1533)) столкнулся с неинтуитивным поведением: установленный skill `skill-vetter` не найден системой из-за конвертации дефиса в подчёркивание. PR [#1524](https://github.com/sipeed/picoclaw/pull/1524) частично решает проблему диагностики.

**Безопасность и defaults:**
@SebastianBoehler систематически указывает на **небезопасные настройки по умолчанию** — это сигнал от опытного пользователя/контрибьютора, что проект накопил security-долг в baseline-конфигурации.

**Feishu-интеграция:**
Активная работа по Feishu (PR #1534, #1537) говорит о реальных production-пользователях на этом канале, которые сталкиваются с ограничениями.

### Что нравится
- Быстрая реакция мейнтейнеров: issue #1506 → PR #1536 за ~1 день
- Широкая экосистема

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 🤖 NanoClaw — Дайджест проекта за 2026-03-14

---

## 1. Обзор дня

Проект NanoClaw демонстрирует высокий уровень активности: за последние 24 часа зафиксировано **14 issues** и **40 pull requests**, из которых половина уже закрыта или смержена. Основная часть активности сосредоточена вокруг двух векторов: **расширения каналов связи** (WhatsApp, Signal, Nostr, White Noise) и **устранения критических багов** в существующей инфраструктуре. Примечателен крупный блок PR от одного контрибьютора (@jorgenclaw), формирующего целую экосистему децентрализованных каналов на базе Nostr/Lightning. Параллельно несколько независимых разработчиков закрывают баги в WhatsApp-интеграции и планировщике задач. Проект развивается органически, без централизованного релиза, что типично для фазы активного роста фичей.

---

## 2. Релизы

> Новых релизов за отчётный период нет. Раздел пропущен.

---

## 3. Прогресс проекта

### ✅ Закрытые Issues

| # | Тема | Итог |
|---|------|------|
| [#1033](https://github.com/qwibitai/nanoclaw/issues/1033) | Запрос на prompt caching (Anthropic) | Закрыт без реализации — вероятно, признан нецелесообразным или вне скоупа |
| [#1029](https://github.com/qwibitai/nanoclaw/issues/1029) | Использование Claude по подписке (OAuth-токен) | Закрыт; скорее всего, решён в рамках ответа на вопрос или дубль |
| [#520](https://github.com/qwibitai/nanoclaw/issues/520) | Предложение BoxLite как sandbox-бэкенда | Закрыт без реализации; возможно, отложен |
| [#960](https://github.com/qwibitai/nanoclaw/issues/960) | MCP env-переменные не передаются в контейнеры после миграции credential proxy | Закрыт — проблема идентифицирована и вероятно решена |

### ✅ Смерженные / закрытые PR (ключевые)

| # | Тема |
|---|------|
| [#858](https://github.com/qwibitai/nanoclaw/pull/858) | Канал Marmot/White Noise (MLS + Nostr E2EE) — вытеснен PR #1021 |
| [#1021](https://github.com/qwibitai/nanoclaw/pull/1021) | Обновлённая версия Marmot/White Noise — задублирована в PR #1059 |
| [#1023](https://github.com/qwibitai/nanoclaw/pull/1023) | Signal-канал через signal-cli JSON-RPC — заблокирован, закрыт |
| [#1041](https://github.com/qwibitai/nanoclaw/pull/1041) | Nostr DM (NIP-17) — заблокирован, закрыт; рефакторинг в PR #1058 |
| [#1042](https://github.com/qwibitai/nanoclaw/pull/1042) | NWC Lightning wallet — заблокирован, закрыт; рефакторинг в PR #1060 |
| [#979](https://github.com/qwibitai/nanoclaw/pull/979) | LanceDB memory skill — закрыт; вытеснен обновлённым PR #1043 |

**Ключевое наблюдение:** большинство закрытых PR — это не слияния, а **итерации**: автор (@jorgenclaw) последовательно закрывает черновые версии и открывает рефакторированные. Это говорит об активной разработке, но затрудняет отслеживание прогресса.

---

## 4. Горячие темы

### 🔥 WhatsApp: падение сервиса при переподключении
**Issues** [#1047](https://github.com/qwibitai/nanoclaw/issues/1047) → **PR** [#1050](https://github.com/qwibitai/nanoclaw/pull/1050) + [#1051](https://github.com/qwibitai/nanoclaw/pull/1051)

Баг с `process.exit()` в WhatsApp-обработчике вызвал наибольший резонанс (1 комментарий за первые часы, высокий приоритет). Критично то, что проблема влияет на **headless/Linux-развёртывания** — основную целевую платформу проекта. PR #1050 уже содержит исправление.

### 🔥 Экосистема Nostr/Lightning от @jorgenclaw
PR [#1056](https://github.com/qwibitai/nanoclaw/pull/1056) / [#1057](https://github.com/qwibitai/nanoclaw/pull/1057) / [#1058](https://github.com/qwibitai/nanoclaw/pull/1058) / [#1059](https://github.com/qwibitai/nanoclaw/pull/1059) / [#1060](https://github.com/qwibitai/nanoclaw/pull/1060)

За один день открыто **5 взаимосвязанных PR**, формирующих стек децентрализованной коммуникации: Nostr Signing Daemon → Nostr DM → White Noise → Signal → NWC Lightning Wallet. Это самый масштабный единовременный вклад в историю за данный период. Судьба блока зависит от принятия ключевого PR #1056 (signer daemon).

### 🔥 Улучшение памяти агентов: LanceDB Pro
PR [#1043](https://github.com/qwibitai/nanoclaw/pull/1043) (обновление базового PR [#979](https://github.com/qwibitai/nanoclaw/pull/979))

Переход от чистого векторного поиска к гибридной схеме BM25 + vector retrieval с реранкингом. Прямо затрагивает качество работы агента в долгосрочных сессиях.

---

## 5. Баги и стабильность

### 🔴 Критические (High Priority)

| Issue | Описание | PR с фиксом |
|-------|----------|-------------|
| [#1047](https://github.com/qwibitai/nanoclaw/issues/1047) | WhatsApp: `process.exit()` убивает сервис при logout/переподключении на non-macOS | [#1050](https://github.com/qwibitai/nanoclaw/pull/1050) ✅ |
| [#1046](https://github.com/qwibitai/nanoclaw/issues/1046) | Scheduled tasks не получают MCP credential mounts (Gmail, Calendar, Todoist) | [#1049](https://github.com/qwibitai/nanoclaw/pull/1049) ✅ |

**Комментарий:** оба критических бага имеют готовые PR с исправлениями, открытые тем же автором (@iabheejit) в течение того же дня. Блокер — ревью мейнтейнеров.

### 🟡 Средние (Medium Priority)

| Issue | Описание | PR с фиксом |
|-------|----------|-------------|
| [#1045](https://github.com/qwibitai/nanoclaw/issues/1045) | Нет валидации токена Claude при setup — ошибка обнаруживается только при первом сообщении | [#1044](https://github.com/qwibitai/nanoclaw/pull/1044) ✅, [#1048](https://github.com/qwibitai/nanoclaw/pull/1048) ✅ |
| [#829](https://github.com/qwibitai/nanoclaw/issues/829) | SOUL.md не запрещает агенту фабриковать результаты вызова инструментов | Нет |
| [#753](https://github.com/qwibitai/nanoclaw/issues/753) | `--assistant-name` не обновляет `groups/main/CLAUDE.md` | Нет |
| [#698](https://github.com/qwibitai/nanoclaw/issues/698) | Агент не может определить день недели из ISO-timestamps | Нет |

> ⚠️ **Примечание:** Issue #1045 закрыт сразу двумя конкурирующими PR (#1044 и #1048) от разных авторов. Мейнтейнерам предстоит выбрать один — либо координировать слияние.

### 🟢 Низкий приоритет

| Issue | Описание |
|-------|----------|
| [#447](https://github.com/qwibitai/nanoclaw/issues/447) | WhatsApp: вводящий в заблуждение пример номера телефона (с ведущим `+`) |
| [#527](https://github.com/qwibitai/nanoclaw/issues/527) | `groups/main/CLAUDE.md` документирует запись в read-only пути |

---

## 6. Запросы на функции

### 📬 Новые предложения (последние 24 часа)

| # | Запрос | Оценка перспектив |
|---|--------|-------------------|
| [#1052](https://github.com/qwibitai/nanoclaw/issues/1052) | Загружать `groups/global/CLAUDE.md` и для main-группы (сейчас пропускается) | **Высокая** — однострочный фикс в `index.ts`, логически обоснован |
| [PR #1054](https://github.com/qwibitai/nanoclaw/pull/1054) | Discord threads skill (управление тредами через MCP) | **Средняя** — расширяет Discord-интеграцию, но требует ревью архитектуры |
| [PR #1055](https://github.com/qwibitai/nanoclaw/pull/1055) | Обработка PDF-вложений в WhatsApp | **Высокая** — закрывает молчаливо дропаемые сообщения, минимальный риск |

### 📋 Ранее открытые, без реализации

| # | Запрос | Ожидание |
|---|--------|----------|
| [#520](https://github.com/qwibitai/nanoclaw/issues/520) | BoxLite sandbox-бэкенд | 16+ дней, закрыт без реализации |
| [#411](https://github.com/qwibitai/nanoclaw/issues/411) | Документация по рискам indirect prompt injection | 19+ дней, нет активности |

### 🔋 Кандидаты в следующую версию

На основе готовности PR и критичности:
1. **Fix WhatsApp process.exit()** — [#1050](https://github.com/qwibitai/nanoclaw/pull/1050) готов, критично для Linux
2. **Fix scheduled tasks MCP mounts** — [#1049](https://github.com/qwibitai/nanoclaw/pull/1049) готов, нарушает базовую функциональность
3. **Claude token validation at setup** — [#1044](https://github.com/qwibitai/nanoclaw/pull/1044) или [#1048](https://github.com/qwibitai/nanoclaw/pull/1048) — UX-критично
4. **PDF attachments in WhatsApp** — [#1055](https://github.com/qwibitai/nanoclaw/pull/1055) — низкий риск, высокая ценность

---

## 7. Фидбек пользователей

### 😤 Боли и проблемы

- **Нестабильность WhatsApp-канала на Linux/headless:** [@iabheejit](https://github.com/qwibitai/nanoclaw/issues/1047) подробно описывает сценарий, в котором любой logout или первый QR на non-macOS делает сервис неработоспособным до ручного перезапуска по SSH. Это блокирует production-развёртывания.

- **Запутанный онбординг с токенами Claude:** [@utksaxena](https://github.com/qwibitai/nanoclaw/issues/1029) столкнулся с истечением OAuth-токена каждые несколько часов при использовании подписки Claude вместо API-ключа. [@mikegcoleman](https://github.com/qwibitai/nanoclaw/issues/1045) зафиксировал, что ошибка конфигурации обнаруживается только при первом реальном сообщении — крайне плохой UX.

- **Агент представляется старым именем:** [@glifocat](https://github.com/qwibitai/nanoclaw/issues/753) обнаружил, что `--assistant-name` не обновляет main-группу. Бот называет себя именем по умолчанию, несмотря на регистрацию нового имени.

- **Некорректные ответы на вопросы о времени:** [@glifocat](https://github.com/qwibitai/nanoclaw/issues/698) фиксирует системную проблему: агент не знает текущий день недели, что делает тайм-зависимые задачи (планирование, расписание) ненадёжными.

### ✅ Что работает / вызывает интерес

- Интеграция с Claude API в целом функционирует (подтверждено закрытием #1029).
- Сообщество активно вносит вклад в расширение каналов — несколько независимых разработчиков параллельно добавляют Signal, Nostr, Discord.
- Предложение по prompt caching ([#1033](https://github.com/qwibitai/nanoclaw/issues/1033)) показывает, что пользователи думают об оптимизации расходов на API.

### ⚠️ Системная обеспокоенность

[@wunderwuzzi23](https://github.com/qwibitai/nanoclaw/issues/411) поднимает тему **indirect prompt injection** — уязвимости, при которой вредоносные данные из внешних источников (письма, документы, веб-страницы) могут перехватить управление агентом. Проблема актуальна для любого AI-агента с доступом к внешним данным и требует документирования на уровне security policy.

---

## 8. Накопленный бэклог

Ряд issues остаётся без реакции мейнтейнеров на

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Дайджест IronClaw — 14 марта 2026

> Источник данных: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | Период: 2026-03-14

---

## 1. Обзор дня

Проект демонстрирует **высокую интенсивность разработки**: за последние 24 часа зафиксировано 50 Pull Request'ов, из которых 42 ожидают ревью и слияния — это указывает на значительное давление на процесс код-ревью. Новых релизов не было, команда сосредоточена на накопленных изменениях в ветке `staging`. Активность сосредоточена вокруг нескольких ключевых направлений: рефакторинг архитектуры владения данными (`owner scope`), безопасность webhook'ов, расширение поддержки каналов и инструментов. Среди открытых Issues присутствуют два критических инфраструктурных бага, поднятых автоматизированным CI-ботом (`@ironclaw-ci[bot]`), что говорит о наличии зрелого процесса статического анализа в staging-окружении. В целом проект находится в **активной фазе pre-release стабилизации** перед очередной версией.

---

## 2. Релизы

*Новых релизов за отчётный период не было. Раздел пропущен.*

---

## 3. Прогресс проекта

За последние 24 часа **смержено/закрыто 8 PR**. Из явно идентифицированных:

| PR | Описание | Статус |
|----|----------|--------|
| [#1146](https://github.com/nearai/ironclaw/pull/1146) | `fix(ci)`: исключение `ironclaw_safety` из release automation; добавлены метаданные в `Cargo.toml`, выставлены флаги `publish = false` и `dist = false` | 🔴 CLOSED |

**Примечание:** Данные по остальным 7 закрытым PR не раскрыты в текущей выборке (показаны топ-20 по комментариям). По характеру активного PR-потока можно судить, что закрытые PR относились к мелким инфраструктурным и CI-фиксам.

### Ключевые PR, продвигающиеся к слиянию:

- **[#1151](https://github.com/nearai/ironclaw/pull/1151)** — Масштабный рефакторинг `owner scope` (`risk: high`, `XL`): IronClaw переходит к явной модели владения состоянием на уровне инстанса, устраняя проблему кросс-канальной инконсистентности ([#994](https://github.com/nearai/ironclaw/issues/994)). Затрагивает агент, все типы каналов, обе БД (Postgres/LibSQL), конфиг, setup и документацию.

- **[#1144](https://github.com/nearai/ironclaw/pull/1144)** — Рефакторинг реестра MCP-серверов: перенос хардкодированных структур `RegistryEntry` из кода в data-driven JSON-манифесты под `registry/mcp-servers/`. Снижает технический долг и упрощает расширение.

- **[#1143](https://github.com/nearai/ironclaw/pull/1143)** — Унификация schema-guided coercion параметров инструментов: добавлен общий слой нормализации перед approval/execution, удалён старый WASM-only путь.

- **[#1147](https://github.com/nearai/ironclaw/pull/1147)** — Редизайн `routine_create` вокруг canonical schema `request.kind` для LLM — улучшает качество взаимодействия с языковыми моделями при создании расписаний.

---

## 4. Горячие темы

Учитывая, что данные по числу комментариев для PR не переданы (`undefined`), анализ строится на контексте и перекрёстных связях Issues/PR.

### 🔥 Рефакторинг Owner Scope
**[#1151](https://github.com/nearai/ironclaw/pull/1151)** (автор `@henrypark133`) — наиболее архитектурно значимый PR недели. Затрагивает весь стек: агент, каналы CLI/Web/WASM, инструменты, обе БД. Исправляет застарелую проблему [#994](https://github.com/nearai/ironclaw/issues/994), при которой данные из разных каналов могли перекрёстно загрязнять состояние агента. Высокий `risk: high` означает, что PR требует тщательного ревью перед слиянием.

### 🔥 OpenAI Codex как LLM-провайдер
**[#744](https://github.com/nearai/ironclaw/pull/744)** (автор `@Sanjeev-S`) — самый долгоживущий крупный PR (создан 2026-03-08, активен по 2026-03-14). Добавляет поддержку ChatGPT Pro/Plus через OAuth device code flow без необходимости отдельного API-ключа. Охватывает весь стек (`risk: high`, `XL`). Длительное время в ревью может указывать на сложности с интеграцией или запросы изменений.

### 🔥 Безопасность Webhook
**[#1162](https://github.com/nearai/ironclaw/pull/1162)** — переход с нестандартного `X-IronClaw-Signature` на `X-Hub-Signature-256` (HMAC-SHA256) по модели GitHub webhooks. Закрывает issue [#722](https://github.com/nearai/ironclaw/issues/722). Касается всех пользователей с интеграциями через HTTP-вебхуки.

### 🔥 Suggestion Chips в Web UI
**[#1156](https://github.com/nearai/ironclaw/pull/1156)** (автор `@ilblackdragon`) — новая UX-функция: LLM теперь генерирует 1–3 follow-up подсказки в каждом ответе (`<suggestions>`-теги), которые отображаются как кликабельные чипы над полем ввода. Потенциально высокое влияние на user experience.

---

## 5. Баги и стабильность

### 🔴 КРИТИЧЕСКИЕ

**[#813](https://github.com/nearai/ironclaw/issues/813)** — `[CRITICAL]` Нетранзакционные многошаговые обновления контекста между setup метаданных/токена и персистированием в БД.
- Обнаружен: `@ironclaw-ci[bot]`, staging CI review
- Confidence: 50/100 (автоматический анализ, требует верификации)
- **Исправление**: PR [#1161](https://github.com/nearai/ironclaw/pull/1161) (`@nickpismenkov`, `risk: medium`, `size: M`) — в ревью
- Риск: гонка состояний при конкурентных запросах может приводить к частичному или несогласованному обновлению контекста агента.

---

### 🟠 ВЫСОКИЕ

**[#1150](https://github.com/nearai/ironclaw/issues/1150)** — `[HIGH]` Несоответствие версий в registry-манифестах: манифесты обновлены до `0.2.1`, но artifact URL'ы всё ещё указывают на `0.2.0`.
- Обнаружен: `@ironclaw-ci[bot]`, confidence: **85/100** (высокая достоверность)
- Связан с PR [#1149](https://github.com/nearai/ironclaw/pull/1149) (упомянут в комментарии CI)
- Исправление не представлено отдельным PR в текущей выборке
- Риск: сломанные ссылки на артефакты в реестре при установке/обновлении компонентов.

**[#846](https://github.com/nearai/ironclaw/issues/846)** — `ironclaw onboard` завершается ошибкой `"Failed to save settings to database"` при финальном шаге, хотя последующий запуск `ironclaw` работает корректно.
- Автор: `@sonic2825`, создан 2026-03-10
- Поведение: миграции применяются успешно, но onboarding не фиксирует настройки — вероятно, проблема с транзакционностью или порядком инициализации.
- **Прямого исправляющего PR не обнаружено** (возможно, покрывается #1161 косвенно).

---

### 🟡 СРЕДНИЕ

**[#1139](https://github.com/nearai/ironclaw/issues/1139)** — Safari IME: нажатие Enter для подтверждения CJK-ввода (пиньинь и др.) отправляет сообщение вместо завершения композиции.
- Автор: `@micsama`
- Причина: Safari вызывает `compositionend` *до* `keydown` — обратный порядок по сравнению с Chrome/Firefox.
- **Исправление**: PR [#1140](https://github.com/nearai/ironclaw/pull/1140) (`@micsama`, `risk: medium`, `size: XS`) — уже в ревью. Быстрый фикс, высокая вероятность слияния.

**[#1163](https://github.com/nearai/ironclaw/pull/1163)** — N+1 query pattern в event trigger loop (`routine_engine`).
- Автор: `@nickpismenkov`
- PR присутствует, исправляет паттерн множественных запросов к БД в цикле обработки событий. Прямого Issue не указано в данных, но проблема носит характер производительности/стабильности под нагрузкой.

**[#1164](https://github.com/nearai/ironclaw/pull/1164)** — Google Sheets возвращает `403 PERMISSION_DENIED` после завершения OAuth.
- Автор: `@nickpismenkov`, `size: XL`
- Детали Summary не заполнены, PR в процессе подготовки.

---

### 🔵 ИНФРАСТРУКТУРА/CI

**[#1160](https://github.com/nearai/ironclaw/pull/1160)** — Улучшение CI-проверки "no panics": замена grep-based подхода на Python-скрипт с пониманием Rust-синтаксиса. Устраняет ложные срабатывания на `assert!`/`expect()` внутри `#[cfg(test)]` модулей.

---

## 6. Запросы на функции

### 📋 Новые и активные

**[#1155](https://github.com/nearai/ironclaw/issues/1155)** — **Socket Mode для Slack-канала**
- Автор: `@justinfiore`, 2026-03-13
- Запрос: поддержка Slack Socket Mode (outbound-only соединение) как альтернативы входящим вебхукам. Пользователь мигрирует с OpenClaw, где эта возможность была доступна.
- **Обоснование**: позволяет использовать IronClaw без открытия входящих портов — критично для self-hosted инсталляций за NAT/firewall.
- Шанс на включение в следующую версию: **средний** — функция хорошо специфицирована, документация Slack доступна, но требует отдельного transport-слоя.

**[#744](https://github.com/nearai/ironclaw/pull/744)** — **OpenAI Codex (ChatGPT subscription) как LLM-провайдер**
- Автор: `@Sanjeev-S`
- Крупная функция, находится в ревью с 2026-03-08. Включает OAuth device code flow, SSE-парсинг Responses API, token-rate heuristics.
- Шанс на включение: **высокий** при условии успешного ревью — функция полностью реализована.

**[#1156](https://github.com/nearai/ironclaw/pull/1156)** — **Follow-up suggestion chips и ghost text в Web UI**
- Автор: `@ilblackdragon`
- UX-улучшение: автоматические подсказки от LLM после каждого ответа. Реализация через SSE-события и frontend-компоненты.
- Шанс на включение: **высокий** — core contributor, функция компактна по риску.

**[#1112](https://github.com/nearai/ironclaw/pull/1112)** — **Layered memory с privacy redirect на основе sensitivity**
- Автор: `@standardtoaster` (ребейз PR [#348](https://github.com/nearai/ironclaw/pull/348))
- Многоуровневая память с перенаправлением чувствительных данных в приватное хранилище.
- Шанс на включение: **неопределённый** — функция прошла предыдущее ревью, но требует демонстрации через trajectory system (по требованию `@zmanian`).

**[#1120](https://github.com/nearai/ironclaw/pull/1120)** — **Prismer Cloud IM как WASM-канал**
- Автор: `@willamhou` (новый contributor)
- Добавляет поддержку Prismer Cloud IM: webhook + polling (30s fallback), двухэтапная auth (API key → JWT).
- Шанс на включение: **средний** — новый contributor, потребует внимательного ревью.

---

## 7. Фидбек пользователей

### 😤 Болевые точки

1. **Сложность первоначальной настройки** ([#846](https://github.com/nearai/ironclaw/issues/846)): пользователь `@sonic2825` сообщает о вводящем в заблуждение поведении `ironclaw onboard` — команда завершается с ошибкой, но система фактически работает. Это создаёт путаницу при первом запуске и может отпугивать новых пользователей.

2. **Несовместимость с Safari для CJK-пользователей** ([#1139](https://github.com/nearai/ironclaw/issues/1139)): пользователь `@micsama` фиксирует UX-проблему, специфичную для Safari и восточноаз

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# 📋 Дайджест проекта TinyClaw — 2026-03-14

> **Источник:** github.com/TinyAGI/tinyclaw | **Период:** 24 часа до 2026-03-14

---

## 1. Обзор дня

Проект демонстрирует высокую активность разработки: за сутки закрыты 4 PR и выпущен релиз v0.0.13, что свидетельствует об интенсивном темпе итераций. Основной вектор разработки сосредоточен вокруг улучшения архитектуры агентов — появился UI конфигурации, иерархическая память и рефакторинг инициализации рабочего окружения. Параллельно продолжается стратегически значимый процесс **ребрендинга** проекта с TinyClaw на TinyAGI (PR #191), что указывает на переосмысление позиционирования продукта. Уровень активности оценивается как **высокий**: 6 PR за сутки при 1 баге и 1 фиче-реквесте в трекере. В целом проект находится в фазе активного формирования ядра функциональности.

---

## 2. Релизы

### 🚀 v0.0.13 — выпущен 2026-03-13/14

Релиз консолидирует сразу несколько крупных изменений, влияющих на архитектуру агентов.

#### Ключевые изменения

| Компонент | Описание | Коммит |
|---|---|---|
| Agent Configuration UI | Новый интерфейс управления агентом с вкладками: Skills, System Prompt, Memory, Heartbeat | `74c3e91` |
| Agent Provisioning Refactor | Консолидация логики создания рабочего окружения; симлинки вместо копирования файлов навыков | `44ad272` |
| Hierarchical Memory System | Персистентная иерархическая память агентов с хранением в Markdown + YAML frontmatter | `aaca334` |
| AGENTS.md In-Memory | Системный промпт теперь формируется в памяти при запуске, а не записывается на диск | _(PR #208)_ |

#### ⚠️ Возможные breaking changes и нюансы миграции

- **Симлинки для Skills** (PR #211): логика провизионинга директорий агентов вынесена в единый `core/agent.ts`. Если вы расширяли или патчили провизионинг самостоятельно, потребуется ревизия кастомных решений. Файловая структура `.claude/skills` теперь использует симлинки — убедитесь, что ваша ОС/окружение их поддерживает.
- **Системный промпт** (PR #208): `AGENTS.md` больше не копируется на диск при каждом запуске. Если у вас были скрипты, читающие этот файл как артефакт выполнения — поведение изменилось.
- **Структура памяти** (PR #209): новая директория `memory/` в рабочем пространстве агента. При обновлении существующих инсталляций директория будет создана автоматически, но исторические данные не мигрируют.

---

## 3. Прогресс проекта

Четыре PR успешно смержены, формируя архитектурную основу релиза v0.0.13:

### ✅ Смержено/закрыто за 24 часа

**[PR #207](https://github.com/TinyAGI/tinyclaw/pull/207) — `feat(agents)`: Agent Configuration Page**
Автор: @jlia0 | Смержен: 2026-03-13

Добавлена полноценная страница конфигурации агента с динамической маршрутизацией и табовым интерфейсом. Пользователи теперь могут управлять навыками, системными промптами, памятью и мониторингом heartbeat через GUI, а не только через CLI. Существенное улучшение developer/user experience.

---

**[PR #211](https://github.com/TinyAGI/tinyclaw/pull/211) — `refactor`: Consolidate Agent Directory Provisioning**
Автор: @jlia0 | Смержен: 2026-03-13

Устранено дублирование логики провизионинга, которая ранее существовала в трёх независимых реализациях. Единый канонический источник в `core/agent.ts` снижает риск расхождения поведения. Переход на симлинки для `.claude/skills` уменьшает потребление дискового пространства.

---

**[PR #209](https://github.com/TinyAGI/tinyclaw/pull/209) — `feat(core)`: Hierarchical Memory System**
Автор: @jlia0 | Смержен: 2026-03-13

Персистентная память агентов: воспоминания сохраняются как Markdown-файлы с YAML frontmatter (поля `name` и `summary`) в директории `memory/`. Иерархическая организация позволяет агентам накапливать знания между сессиями — значимый шаг к автономности.

---

**[PR #208](https://github.com/TinyAGI/tinyclaw/pull/208) — `feat(core)`: AGENTS.md as In-Memory System Prompt**
Автор: @jlia0 | Смержен: 2026-03-13

Рефакторинг обработки системного промпта: шаблон `AGENTS.md` читается один раз при старте, данные о тиммейтах инжектируются динамически в памяти. Исключены дисковый I/O и проблемы с устаревшими данными. Улучшает производительность и предсказуемость поведения агентов.

---

## 4. Горячие темы

### 🔥 PR #191 — Ребрендинг TinyClaw → TinyAGI
[https://github.com/TinyAGI/tinyclaw/pull/191](https://github.com/TinyAGI/tinyclaw/pull/191)
Автор: @jlia0 | Открыт: 2026-03-11 | Статус: **ожидает merge**

Наиболее стратегически значимое изменение в трекере. PR предполагает тотальный ребрендинг: пакеты `@tinyclaw/*` → `@tinyagi/*`, переименование переменных окружения, CLI-команд, конфигурационных директорий и документации. PR открыт уже 3 дня и пока не смержен — вероятно, требует дополнительного ревью ввиду масштаба изменений.

**Анализ:** Ребрендинг — сигнал о позиционном сдвиге: проект перестаёт быть узкоспециализированным инструментом и претендует на идентичность полноценной AGI-платформы. Для пользователей это означает **обязательную миграцию** зависимостей и конфигураций после мержа.

---

### 🔥 Issue #57 — Интеграция Google Chat, Slack, Teams
[https://github.com/TinyAGI/tinyclaw/issues/57](https://github.com/TinyAGI/tinyclaw/issues/57)
Автор: @michaelerobertsjr | Открыт: 2026-02-14 | Статус: **открыт 28 дней**

Запрос на добавление корпоративных мессенджеров остаётся открытым почти месяц без продвижения. Судя по отсутствию реакций (0 лайков) и всего 1 комментарию, тема пока не получила широкой поддержки сообщества, однако актуальность для enterprise-сценариев очевидна.

---

## 5. Баги и стабильность

### 🔴 Критический (High) — ЗАКРЫТ

**[Issue #210](https://github.com/TinyAGI/tinyclaw/issues/210) — `ReferenceError: exports is not defined in ES module scope`**
Автор: @debamitro | Создан/Закрыт: 2026-03-13 | Компонент: Agent execution

**Описание:** После исправлений из PR #205 при выполнении команды `tinyclaw pairing approve <id>` возникала ошибка `ReferenceError: exports is not defined` — классический симптом конфликта CommonJS/ESM модульных систем. Баг воспроизводился на Node.js 20.18.2 и 24.1.0.

**Статус:** ✅ Закрыт за сутки. Быстрое реагирование команды на критическую ошибку выполнения — позитивный сигнал.

**Контекст:** Это второй баг в цепочке (после #205), связанной с переходом на ES-модули. Стоит мониторить появление аналогичных регрессий после ребрендинга (PR #191), который затрагивает все пакетные конфигурации.

---

### ⚪ Открытых критических багов: 0

На момент составления дайджеста критических открытых багов не зафиксировано.

---

## 6. Запросы на функции

### 📬 [Issue #57](https://github.com/TinyAGI/tinyclaw/issues/57) — Интеграция корпоративных мессенджеров
Автор: @michaelerobertsjr | Открыт: 2026-02-14

**Запрос:** Поддержка Google Chat, Slack и Microsoft Teams как каналов коммуникации агентов.

**Оценка приоритетности:**
- Технически реализуемо через унифицированный слой адаптеров
- Высокая ценность для корпоративных пользователей
- Slack-интеграция наиболее востребована в экосистеме AI-агентов
- Вероятность попадания в ближайшие версии: **средняя** — команда сфокусирована на архитектурных задачах (память, провизионинг, ребрендинг), интеграции мессенджеров могут быть отложены до стабилизации ядра

---

### 📬 [PR #212](https://github.com/TinyAGI/tinyclaw/pull/212) — Редизайн Live Office Workspace
Автор: @mczabca-boop | Открыт: 2026-03-13 | Статус: **ожидает merge**

**Суть:** Переработка интерфейса `/office` — "живого рабочего пространства" агентов. PR открыт от внешнего контрибьютора, что свидетельствует о росте вовлечённости сообщества в UI-часть проекта.

**Оценка:** Логично сочетается с PR #207 (Agent Configuration UI), формируя единый фронтенд для управления агентами. Хороший кандидат для v0.0.14.

---

## 7. Фидбек пользователей

### 😤 Боли

**ESM/CJS конфликты** — Issue #210 и упомянутый #205 указывают на системную проблему с модульной системой. Пользователи (@debamitro) вынуждены самостоятельно отлаживать runtime-ошибки после обновлений. Это создаёт трение при onboarding'е новых участников.

**Нехватка интеграций с мессенджерами** — Issue #57 существует почти месяц, что говорит о реальной потребности, не покрытой текущей функциональностью. Пользователи хотят встраивать агентов в привычные рабочие процессы.

### 👍 Что работает

- Быстрое закрытие критических багов (Issue #210 закрыт в день открытия)
- Активная разработка UI — появление Agent Configuration Page снижает барьер входа
- Переход к in-memory системным промптам решает реальную проблему с устаревшими данными

### 🔍 Сценарии использования

Судя по активности PR и Issues, основной сценарий — **команды разработчиков, использующие агентов для автоматизации парной работы** (`tinyclaw pairing approve`). Запрос на мессенджеры указывает на интерес к сценариям **корпоративной автоматизации**.

---

## 8. Накопленный бэклог

### 📌 Issue #57 — feat: Add Google Chat, Slack, Teams
[https://github.com/TinyAGI/tinyclaw/issues/57](https://github.com/TinyAGI/tinyclaw/issues/57)
**Открыт: 28 дней назад** | Активность: низкая (1 комментарий, 0 реакций)

Наиболее "залежавшийся" элемент в трекере. Отсутствие реакции команды может означать как депрайоритизацию, так и ожидание архитектурной стабилизации перед добавлением новых интеграций. Рекомендуется явно обозначить статус в комментарии к Issue.

---

### 📌 PR #191 — feat: rebrand tinyclaw to tinyagi
[https://github.com/TinyAGI/tinyclaw/pull/191](https://github.com/TinyAGI/tinyclaw/pull/191)
**Открыт: 3 дня назад** | Затрагивает: весь кодовый базис

Несмотря на небольшой возраст, этот PR блокирует согласованность экосистемы: пока он не смержен, сосуществуют два имени проекта. Чем дольше откладывается мерж, тем больше новых коммитов потребуют ручного разрешения конфликтов. Высокий приоритет для ревью.

---

*Дайджест сформирован автоматически на основе публичных данных GitHub. Все ссылки ведут на оригинальные Issues и PR проекта.*

</details>