# Дайджест трендов AI open-source 2026-03-11

> Источник: GitHub Trending + GitHub Search API | Сгенерировано: 2026-03-11 08:36 UTC

---

# AI Open-Source Тренды — 11 марта 2026

---

## Шаг 1–2: Фильтрация и классификация

**Исключено из Trending как нерелевантное:**
- `sepinf-inc/IPED` — цифровая криминалистика, не AI

**Все остальные проекты из Trending и тематического поиска** распределены по категориям ниже.

---

## 📋 Обзор дня

Сегодня в AI open-source доминирует одна мега-тема: **агентные системы**. Сразу несколько репозиториев из trending-листа бьют рекорды по суточному приросту звёзд — `openclaw/openclaw` набрал **+9 080** звёзд за день, `msitarzewski/agency-agents` — **+6 223**, `666ghj/MiroFish` — **+4 504**. Это не случайность: рынок явно движется от «просто LLM» к **оркестрации агентов и их специализации**. Второй заметный акцент — персональные AI-ассистенты с локальным запуском и приватностью: пользователи устали от облачных зависимостей. Наконец, активно зреет ниша **sandbox-инфраструктуры** для агентов — изолированных сред исполнения кода, без которых production-grade агенты невозможны.

---

## 🔥 Горячие проекты по категориям

### 🔧 AI-инфраструктура
*(фреймворки, SDK, инференс-движки, CLI)*

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 164 826 | Де-факто стандарт локального запуска LLM (Kimi-K2.5, DeepSeek, Qwen и др.); описание обновлено под актуальные модели 2026 г. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐ 157 731 | Центральный фреймворк определения моделей — text, vision, audio, multimodal; основа большинства open-source экспериментов |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐ 72 811 | Высокопроизводительный движок инференса LLM с оптимизацией памяти; критичен для production-деплоя |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) | ⭐ 0 (+705 сегодня) | Минималистичный ChatGPT за $100 от Андрея Карпати — мгновенный хайп благодаря имени автора и философии «меньше = лучше» |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐ 6 428 | Модульный фреймворк для LLM-приложений на **Rust** — редкое сочетание производительности и типобезопасности в AI-стеке |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐ 3 923 | Курс по реализации LLM-инференса на Apple Silicon (как «маленький vLLM»); актуален для разработчиков на M-чипах |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | ⭐ 18 551 | CLI для всей экосистемы Google Workspace со встроенными AI-навыками; написан на Rust, MCP-совместим |

---

### 🤖 AI-агенты / Workflow
*(агентные фреймворки, автоматизация, мульти-агентность)*

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | ⭐ 0 (+9 080 сегодня) 🔥 | Персональный AI-ассистент «lobster way» — кроссплатформенный, любая OS; абсолютный лидер дня по приросту |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐ 0 (+6 223 сегодня) 🔥 | Полноценное AI-агентство из специализированных агентов с личностями и процессами — от frontend до SMM |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐ 0 (+1 387 сегодня) | Фреймворк агентных навыков для разработки ПО; методология, а не просто инструмент |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ⭐ 0 (+1 413 сегодня) | Open-source SuperAgent от ByteDance: исследования, кодинг, создание контента — с песочницами и памятью |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | ⭐ 0 (+891 сегодня) | In-page GUI-агент от Alibaba: управление веб-интерфейсами через естественный язык прямо в браузере |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐ 132 259 | Production-ready платформа для agentic workflow; один из самых звёздных проектов в категории |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐ 129 099 | Переосмыслил себя как «agent engineering platform»; по-прежнему массовый стандарт |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | ⭐ 21 164 | AI Workflow + ~400 MCP-серверов для агентов; самый богатый по числу интеграций no-code агент |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐ 0 (+781 сегодня) | Агент от NousResearch, «растущий вместе с пользователем» — адаптивная агентная система от известной open-source лаборатории |
| [trycua/cua](https://github.com/trycua/cua) | ⭐ 12 985 | Инфраструктура для Computer-Use агентов: песочницы, SDK, бенчмарки для управления полноценными десктопами |

---

### 📦 AI-приложения
*(вертикальные продукты, отраслевые решения)*

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | ⭐ 0 (+4 504 сегодня) 🔥 | Универсальный движок роевого интеллекта для предсказаний «чего угодно» — неожиданный хайп дня |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | ⭐ 0 (+300 сегодня) | AI-команда хедж-фонда: мульти-агентная система для финансового анализа и торговли |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐ 41 240 | AI-студия с 300+ ассистентами и доступом к frontier LLM; ориентирована на продуктивность |
| [presenton/presenton](https://github.com/presenton/presenton) | ⭐ 4 297 | Open-source AI-генератор презентаций и API (альтернатива Gamma/Beautiful AI) |
| [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) | ⭐ 9 121 | Первая профессиональная AI-платформа для производства фильмов и видео с Hollywood-стандартами |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐ 62 808 | Финансовая data-платформа для аналитиков, квантов и AI-агентов; зрелый продукт с сильной базой |
| [khoj-ai/khoj](https://github.com/khoj-ai/khoj) | ⭐ 33 343 | Self-hosted «второй мозг» с deep research, агентами и поддержкой всех топовых LLM |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | ⭐ 42 123 | CowAgent — супер-ассистент с долгосрочной памятью, интегрируемый в WeChat/飞书/钉钉 |

---

### 🧠 Большие модели / Обучение
*(веса, обучение, файн-тюнинг, оценка)*

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐ 68 194 | Unified fine-tuning 100+ LLM и VLM; лидер в категории файн-тюнинга по звёздам |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐ 87 674 | Пошаговая реализация ChatGPT-подобного LLM на PyTorch; образовательный эталон |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐ 98 200 | Базовый фреймворк для нейросетей; сильная GPU-акселерация, основа большинства AI-исследований |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐ 6 744 | Платформа оценки LLM: 100+ датасетов, все топовые модели — важна для объективного benchmarking |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐ 133 | Минималистичная библиотека для предобучения foundation и world models — новичок, заслуживающий внимания |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | ⭐ 10 172 | 100-строчный LLM-фреймворк, где агенты строят агентов — философски значимый минималистичный подход |

---

### 🔍 RAG / Базы знаний
*(векторные БД, retrieval-augmented generation)*

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐ 101 527 | Коллекция LLM-приложений с RAG и агентами; самый звёздный RAG-репозиторий в списке |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 74 740 | Ведущий open-source RAG-движок с агентными возможностями; объединяет RAG + Agent в одном слое |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐ 56 295 | Lightning-fast поисковый API с AI-гибридным поиском; написан на Rust |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 49 380 | Универсальный слой памяти для AI-агентов; ключевой компонент долгосрочной памяти |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | ⭐ 10 290 | RAG с экономией 97% хранилища на персональных устройствах (MLSys 2026); революционный подход к приватному RAG |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐ 34 052 | Claude Code плагин: автоматически запоминает всё из сессий и инжектирует контекст в следующие — RAG для IDE |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐ 29 491 | Высокопроизводительная векторная БД на Rust; один из лидеров экосистемы vector-search |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐ 13 126 | Knowledge Engine для памяти AI-агентов в 6 строках кода; лаконичный интерфейс над графом знаний |

---

## 📊 Анализ трендов

### Агентная революция переходит в фазу специализации

Если 2024–2025 годы были временем «любой LLM как агент», то начало 2026-го демонстрирует следующий эволюционный шаг: **специализированные, оркестрируемые мульти-агентные системы**. `agency-agents` предлагает готовое «агентное агентство» с характерами и процессами, `deer-flow` от ByteDance — полноценный SuperAgent-харнесс с субагентами и памятью, `hermes-agent` от NousResearch позиционируется как адаптивная система. Это не просто инструменты — это **продуктовые архитектуры агентов**.

### Sandbox-инфраструктура выходит на первый план

Параллельный тренд — **изоляция исполнения**: `alibaba/OpenSandbox`, `trycua/cua`, `e2b-dev/E2B`. Сообщество осознало, что агент без песочницы в production — угроза безопасности. Это созвучно корпоративным требованиям и, по всей видимости, связано с участившимися инцидентами неконтролируемого выполнения агентного кода.

### Rust захватывает AI-инфраструктуру

Заметен рост числа Rust-проектов в AI-стеке: `rig`, `meilisearch`, `qdrant`, `chroma` (переехал на Rust), `googleworkspace/cli`. Экосистема ищет альтернативу Python в области производительности и надёжности для компонентов нижнего уровня.

### MCP как новый стандарт интеграции

`activepieces` с 400 MCP-серверами, `langchain4j` с поддержкой MCP, `googleworkspace/cli` — **Model Context Protocol** де-факто становится стандартом межагентной коммуникации. Репозитории, в описании которых упоминается MCP, получают значительный буст в видимости.

### Приватность и локальный запуск

`openclaw` (+9080 за день!), `karpathy/nanochat`, `ollama` — пользователи голосуют звёздами за **локальные, приватные, self-hosted** решения. Это реакция как на стоимость облачных API, так и на опасения по поводу конфиденциальности данных.

---

## 👀 На что обратить внимание

### 1. 🦞 [openclaw/openclaw](https://github.com/openclaw/openclaw) — +9 080 звёзд за день
**Почему важно:** Абсолютный рекордсмен дня. Кроссплатформенный персональный AI-ассистент с акцентом на приватность. Такой взрывной рост обычно сигнализирует либо о вирусном маркетинге, либо о попадании в реальную незакрытую потребность. Стоит изучить архитектуру и подход до того, как проект перерастёт в стандарт.

### 2. 📐 [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) — MLSys 2026, 97% экономии хранилища
**Почему важно:** Академическая работа с практической имплементацией. Если заявленные 97% экономии хранилища при сохранении качества RAG подтвердятся в продакшне, это **изменит экономику edge-деплоя** RAG-систем. Особенно актуально для on-device AI.

### 3. 🏗️ [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) + [trycua/cua](https://github.com/trycua/cua) — Sandbox-инфраструктура
**Почему важно:** Два сильных конкурирующих проекта в нише изолированного исполнения агентов. Тот, кто первым сформирует стандарт API и экосистему, займёт позицию «Docker для AI-агентов». Сейчас самый удобный момент для изучения и ранней интеграции.

### 4. 🦀 [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — LLM-фреймворк на Rust
**Почему важно:** На фоне тренда на Rust в AI-инфраструктуре это единственный полноценный агентный фреймворк в этой экосистеме. Для команд, строящих высоконагруженные агентные сервисы, альтернатива Python-стеку с предсказуемой производительностью и отсутствием GIL.

### 5. 🧠 [bytedance/deer-flow](https://github.com/bytedance/deer-flow) — SuperAgent от ByteDance (+1 413 сегодня)
**Почему важно:** Крупный технологический игрок с ресурсами ByteDance входит в сегмент open-source SuperAgent. Архитектура с субагентами, памятью и sandbox-интеграцией pretends to be production-ready с первого дня. Стоит следить: корпоративная поддержка может быстро сделать этот проект стандартом в enterprise-сегменте.

---

*Дайджест составлен по данным GitHub Trending и GitHub Search API на 11.03.2026*