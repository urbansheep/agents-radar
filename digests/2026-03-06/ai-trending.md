# Дайджест трендов AI open-source 2026-03-06

> Источник: GitHub Trending + GitHub Search API | Сгенерировано: 2026-03-06 14:42 UTC

---

# AI Open-Source Тренды — 6 марта 2026

---

## 🔎 Шаг 1–2: Фильтрация и классификация

**Исключено из Trending как нерелевантное:**
- `microsoft/hve-core` — инженерные шаблоны/инструкции для Copilot (инфраструктура dev-процесса, не AI-проект как таковой)
- `aidenybai/react-grab` — инструмент для выбора контекста из UI (frontend-утилита)
- `lingfengQAQ/webnovel-writer` — узкоспециализированный китайский инструмент для написания веб-новелл
- `TheCraigHewitt/seomachine` — SEO-инструмент на базе Claude Code (маркетинговый, нишевый)

**Оставлены и классифицированы:** все остальные.

---

## 📋 Шаг 3: Дайджест

---

## 1. Обзор дня

Сегодняшний срез GitHub отражает несколько мощных волн одновременно. **Агентные фреймворки** остаются абсолютным лидером по взрывному росту — `msitarzewski/agency-agents` набирает почти 2900 звёзд за сутки, а `moeru-ai/airi` — более 2500, что сигнализирует о высоком интересе к специализированным и «персонифицированным» агентам. **Экосистема Claude Code** неожиданно оформляется в самостоятельное направление: сразу несколько проектов (`openai/skills`, `affaan-m/everything-claude-code`, `thedotmack/claude-mem`, `shareAI-lab/learn-claude-code`) формируют слой инструментов поверх агентных CLI. Параллельно идёт зрелость инфраструктурного слоя — `inclusionAI/AReaL` предлагает RL-обучение для reasoning-агентов, `QwenLM/Qwen-Agent` расширяет экосистему Qwen 3.0. Наконец, сегмент **AI-безопасности** впервые уверенно входит в топ трендов через `Ed1s0nZ/CyberStrikeAI`.

---

## 2. Горячие проекты по категориям

---

### 🔧 AI-инфраструктура

| Проект | Звёзды | Описание |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐ 164 273 | Де-факто стандарт локального запуска LLM; в описании уже фигурируют Kimi-K2.5 и GLM-5 — быстрее всех подхватывает новые модели |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐ 72 230 | Высокопроизводительный inference-движок; эталон для production-деплоя LLM |
| [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL) | ⭐ 0 (+348 сегодня) | Быстрый фреймворк RL-обучения для reasoning-агентов — интересен как открытая альтернатива подходу GRPO/DeepSeek-R1 |
| [QwenLM/Qwen-Agent](https://github.com/QwenLM/Qwen-Agent) | ⭐ 0 (+684 сегодня) | Официальный агентный SDK от команды Qwen; поддержка MCP и Code Interpreter «из коробки» сразу после релиза Qwen 3.0 |
| [openai/skills](https://github.com/openai/skills) | ⭐ 0 (+582 сегодня) | Каталог навыков для Codex от OpenAI — формализует концепцию «skill-библиотеки» для кодирующих агентов |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐ 6 288 | Модульный фреймворк для LLM-приложений на Rust — редкая ставка на производительность и типобезопасность |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐ 3 900 | Обучающий курс по inference-движкам (mini-vLLM) на Apple Silicon — отличный онбординг для системных инженеров |

---

### 🤖 AI-агенты / Workflow

| Проект | Звёзды | Описание |
|---|---|---|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐ 0 (+2857 сегодня) | 🔥 Готовая «AI-агентура» со специализированными персонажами-агентами — взрывной рост говорит о высоком спросе на out-of-box агентные решения |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | ⭐ 0 (+2544 сегодня) | Self-hosted AI-компаньон с голосом, игровыми агентами (Minecraft/Factorio) и нейросетевой «душой» — новый класс персонифицированных агентов |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐ 131 455 | Production-ready платформа для агентных workflow; один из самых популярных инструментов для корпоративного развёртывания |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐ 128 456 | Переосмысляет себя как «agent engineering platform» — показательная эволюция из фреймворка в инженерную платформу |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐ 79 764 | Открывает браузер для агентов — один из самых быстрорастущих инструментов компьютерного управления |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | ⭐ 21 097 | ~400 MCP-серверов для агентной автоматизации — фактически становится «npm для AI-агентов» |
| [trycua/cua](https://github.com/trycua/cua) | ⭐ 12 888 | Open-source инфраструктура для Computer-Use агентов с поддержкой macOS/Linux/Windows в песочницах |
| [Ed1s0nZ/CyberStrikeAI](https://github.com/Ed1s0nZ/CyberStrikeAI) | ⭐ 0 (+138 сегодня) | AI-нативная платформа пентестинга на Go — первый заметный AI-агент для кибербезопасности в трендах |

---

### 📦 AI-приложения

| Проект | Звёзды | Описание |
|---|---|---|
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | ⭐ 0 (+82 сегодня) | Мульти-агентная команда для финансового анализа — наглядный пример вертикального AI-продукта |
| [waoowaooAI/waoowaoo](https://github.com/waoowaooAI/waoowaoo) | ⭐ 8 513 | Профессиональная AI-платформа для производства видео и фильмов с Hollywood-стандартами — новая ниша |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐ 40 883 | AI-productivity studio с доступом к 300+ ассистентам и всем frontier LLM — удобный десктоп-хаб |
| [presenton/presenton](https://github.com/presenton/presenton) | ⭐ 4 251 | Open-source альтернатива Gamma/Beautiful.AI для AI-генерации презентаций |
| [khoj-ai/khoj](https://github.com/khoj-ai/khoj) | ⭐ 33 190 | Self-hosted «второй мозг» — поиск по веб и личным документам, deep research, автоматизация |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐ 62 626 | Финансовая data-платформа для аналитиков и AI-агентов — уверенно занимает нишу fintech AI |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | ⭐ 41 942 | Супер-ассистент с активным планированием задач, долгосрочной памятью и интеграцией в WeChat/飞书 |

---

### 🧠 Большие модели / Обучение

| Проект | Звёзды | Описание |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐ 157 492 | Главный фреймворк для работы с моделями; переопределил себя как «model-definition framework» |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐ 67 977 | Unified fine-tuning для 100+ LLM и VLM — незаменим для команд, работающих с кастомными моделями |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐ 87 282 | Пошаговая реализация ChatGPT-подобного LLM на PyTorch — лучший образовательный ресурс по архитектурам |
| [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL) | ⭐ 0 (+348 сегодня) | RL-фреймворк для обучения reasoning-агентов — отражает тренд на post-training через reinforcement learning |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐ 6 723 | Платформа оценки LLM по 100+ датасетам — критически важна на фоне роста числа моделей |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | ⭐ 131 | Минималистичная библиотека для pre-training foundation-моделей — редкий open-source инструмент для pretraining |

---

### 🔍 RAG / Базы знаний

| Проект | Звёзды | Описание |
|---|---|---|
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐ 99 950 | Коллекция LLM-приложений с RAG и агентами — ближе всего к «100k» среди RAG-ресурсов |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐ 74 278 | Ведущий open-source RAG-движок с агентными возможностями — активно догоняет коммерческие решения |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐ 48 895 | Universal memory layer для агентов — решает одну из главных болей агентных систем |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐ 33 140 | Плагин памяти для Claude Code: автоматически сжимает сессии и инжектирует контекст — практичный инструмент |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | ⭐ 10 263 | RAG с экономией 97% хранилища для персональных устройств (MLsys 2026) — прорыв для edge-RAG |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐ 43 168 | Высокопроизводительная облачная векторная БД; стандарт для enterprise RAG |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐ 13 277 | Serverless single-file memory layer для агентов на Rust — радикально упрощает RAG-пайплайны |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐ 12 989 | Knowledge Engine для памяти агентов в 6 строках кода — максимально низкий порог входа |

---

## 3. Анализ трендов

### Агентификация как доминирующая парадигма

Наиболее очевидный тренд — **окончательная агентификация open-source экосистемы**. Если год назад «агент» был надстройкой над LLM-фреймворком, сегодня агентный слой стал основным продуктом. LangChain переименовал себя в «agent engineering platform», Dify позиционируется как «agentic workflow», а activepieces уже предлагает ~400 MCP-серверов. MCP (Model Context Protocol от Anthropic) очевидно становится новым стандартом межагентного взаимодействия — он упоминается в описаниях Qwen-Agent, activepieces, langchain4j и ряде других проектов.

### Взрыв «Claude Code экосистемы»

Совершенно новое явление — **формирование целого слоя инструментов вокруг Claude Code и подобных агентных CLI**. За один день в трендах оказались: `openai/skills` (каталог навыков для Codex), `affaan-m/everything-claude-code` (62k⭐ — система оптимизации агентов), `shareAI-lab/learn-claude-code` (22k⭐ — обучающая реализация), `thedotmack/claude-mem` (33k⭐ — память для сессий). Это сигнализирует о том, что разработчики активно «хакают» агентные CLI, строя поверх них собственную инфраструктуру.

### Персонифицированные агенты и «AI-компаньоны»

`moeru-ai/airi` (+2544) и `msitarzewski/agency-agents` (+2857) вместе демонстрируют спрос на агентов с **личностью и специализацией** — не просто инструменты, а «персонажи». Это продолжение тренда Neuro-sama/VTuber-AI, но теперь open-source и self-hosted.

### Post-training через RL

`inclusionAI/AReaL` — прямое следствие успеха DeepSeek-R1 и GRPO-подходов. Open-source RL-фреймворки для reasoning становятся новой категорией, ранее полностью закрытой.

### Rust как язык AI-инфраструктуры

Chroma, Qdrant, memvid, rig, meilisearch — **Rust уверенно занимает нишу высокопроизводительного слоя AI-инфраструктуры**, вытесняя C++ там, где важна безопасность памяти и скорость.

---

## 4. На что обратить внимание

### 1. 🔥 [activepieces/activepieces](https://github.com/activepieces/activepieces) — «npm для MCP-серверов»
**Почему:** ~400 MCP-серверов в одном месте — это фактически формирующийся маркетплейс инструментов для агентов. Кто первым создаст стандарт дистрибуции агентных навыков, тот займёт позицию npm/pip в этой экосистеме. Проект уже на 21k⭐ и активно растёт.

### 2. 🧠 [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL) — open-source RL для reasoning
**Почему:** Post-training через reinforcement learning — главное направление улучшения моделей после DeepSeek-R1. AReaL предлагает простой и гибкий фреймворк для этого. Для команд, занимающихся fine-tuning собственных моделей, это прямой путь к reasoning-способностям без закрытых рецептов.

### 3. 🔍 [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) — RAG с 97% экономией хранилища
**Почему:** Принятая на MLsys 2026 работа решает фундаментальную проблему масштабирования RAG на edge-устройствах. Если результаты воспроизводимы, это меняет архитектуру локальных RAG-приложений кардинально. Стоит проверить бенчмарки до широкого adoption.

### 4. 🤖 [trycua/cua](https://github.com/trycua/cua) — инфраструктура для Computer-Use агентов
**Почему:** Computer-Use — следующий фронтир после text-агентов. cua предоставляет open-source песочницы и SDK для агентов, управляющих полноценными десктопами. На фоне закрытых решений от Anthropic и OpenAI — стратегически важный open-source проект.

### 5. 🔧 [memvid/memvid](https://github.com/memvid/memvid) — serverless single-file память для агентов
**Почему:** Идея заменить сложный RAG-пайплайн одним файлом-памятью звучит как радикальное упрощение архитектуры. 13k⭐ за короткое время говорят о том, что разработчики устали от overengineering в RAG. Проект заслуживает технической проверки концепции.

---

*Дайджест сформирован на основе данных GitHub Trending и GitHub Search API по состоянию на 06.03.2026*