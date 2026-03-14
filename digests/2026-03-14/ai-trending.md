# Дайджест трендов AI open-source 2026-03-14

> Источник: GitHub Trending + GitHub Search API | Сгенерировано: 2026-03-14 07:25 UTC

---

# 🧠 AI Open-Source Тренды — 14 марта 2026

---

## 1. Обзор дня

Сегодняшний срез GitHub демонстрирует сразу несколько мощных волн активности. **Агентные фреймворки** захватывают топ трендинга — от легковесных shell-based решений до полноценных платформ для мульти-агентных команд. Одновременно **инфраструктура для эффективного инференса** переживает новый виток интереса: BitNet от Microsoft (+2227 звёзд за сутки) сигнализирует о растущем запросе на 1-битные LLM в production-сценариях. Особо выделяется кластер проектов вокруг **памяти агентов и персистентного контекста** — сразу несколько репозиториев атакуют эту проблему с разных сторон. Наконец, ecosystem вокруг **Claude Code и аналогичных coding-агентов** превратился в самостоятельный жанр: только сегодня несколько проектов-обёрток и плагинов к нему набрали десятки тысяч звёзд совокупно.

---

## 2. Горячие проекты по категориям

### 🔧 AI-инфраструктура

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [microsoft/BitNet](https://github.com/microsoft/BitNet) | +2 227 сегодня | Официальный инференс-фреймворк для 1-битных LLM от Microsoft — взрывной интерес говорит о созревании рынка edge/efficient AI |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐73 038 | Высокопроизводительный движок инференса LLM; де-факто стандарт для self-hosted serving |
| [google-ai-edge/LiteRT](https://github.com/google-ai-edge/LiteRT) | +211 сегодня | Преемник TensorFlow Lite от Google для on-device ML и GenAI — переименование и расширение возможностей сигнализирует о стратегической ставке на edge |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐165 003 | Самый популярный способ запустить LLM локально; поддержка Kimi-K2.5, GLM-5 и других новых моделей |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐53 945 | Файн-тюнинг и RL для LLM в 2× быстрее с 70% меньшим VRAM; теперь поддерживает gpt-oss и DeepSeek |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐6 479 | Модульный фреймворк для LLM-приложений на Rust — редкий пример production-ready AI-инфраструктуры вне Python |
| [google-ai-edge/LiteRT](https://github.com/google-ai-edge/LiteRT) | ⭐+211 | C++-фреймворк Google для эффективного развёртывания ML-моделей на edge-устройствах |

---

### 🤖 AI-агенты / Workflow

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | +5 745 сегодня | Коллекция специализированных AI-агентов «под ключ» — рекордсмен дня по абсолютному приросту звёзд |
| [obra/superpowers](https://github.com/obra/superpowers) | +2 106 сегодня | Agenttic skills framework и методология разработки ПО на Shell — минималистичный подход набирает аудиторию |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | +1 468 сегодня | GUI-агент для управления веб-интерфейсами на естественном языке от Alibaba |
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | +1 668 сегодня | Тестирование промптов, агентов и RAG с red teaming и CI/CD интеграцией — безопасность AI-агентов выходит в мейнстрим |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐129 411 | Переименовавшийся в «agent engineering platform» — отражает сдвиг фокуса с цепочек на агентов |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐132 719 | Production-ready платформа для агентных workflow с визуальным редактором |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐69 089 | AI-driven разработка ПО — один из самых активных coding-агентов в open-source |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | ⭐21 204 | Автоматизация с поддержкой ~400 MCP-серверов; показательно, что MCP-интеграция стала главным УТП |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐29 354 | Frontend-стек для агентов с поддержкой AG-UI Protocol — мосты между агентами и UI |

---

### 📦 AI-приложения

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [langflow-ai/openrag](https://github.com/langflow-ai/openrag) | +905 сегодня | Комплексная RAG-платформа на Langflow + Docling + OpenSearch — попытка стандартизировать RAG-стек |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | +654 сегодня | Официальный каталог плагинов Claude Code от Anthropic — экосистема вокруг coding-агентов получает формальную инфраструктуру |
| [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) | +559 сегодня | SOTA open-source TTS-система — голосовые интерфейсы остаются горячей нишей |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | +1 128 сегодня | Агентная инфраструктура для IM-платформ с поддержкой множества LLM |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐41 454 | AI productivity studio с доступом к 300+ ассистентам и автономными агентами |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | ⭐42 196 | Суперассистент на базе LLM с активным планированием задач и доступом к ОС |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | ⭐45 396 | Low-code + AI платформа с MCP, знаниевыми базами и AI workflow для Enterprise |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | ⭐63 012 | Финансовая data-платформа с AI-агентами для аналитиков и квантов |

---

### 🧠 Большие модели / Обучение

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐157 785 | Центральный репозиторий определений моделей HuggingFace; позиционируется как «model-definition framework» |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐68 378 | Единый фреймворк для файн-тюнинга 100+ LLM и VLM; ACL 2024 paper |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐53 945 | RL + fine-tuning для LLM с радикальной оптимизацией памяти и скорости |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | ⭐10 200 | 100-строчный LLM-фреймворк с идеей «агенты строят агентов» — минимализм как философия |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐6 755 | Платформа оценки LLM на 100+ датасетах; актуальна в эпоху множества конкурирующих моделей |

---

### 🔍 RAG / Базы знаний

| Проект | Звёзды | Описание |
|--------|--------|----------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐74 965 | Ведущий open-source RAG-движок с интеграцией агентных возможностей |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐102 015 | Крупнейшая коллекция LLM-приложений с RAG и агентами — образовательный ресурс #1 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐49 743 | Универсальный memory layer для AI-агентов — один из самых быстрорастущих проектов в нише |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | +595 сегодня | Agent Memory That Learns — обучающаяся память агентов, новый подход к персистентности |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐43 282 | Производительная cloud-native векторная БД; стандарт для enterprise RAG |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | ⭐10 308 | MLsys 2026: RAG на персональных устройствах с экономией хранилища 97% — академический прорыв в production |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐34 713 | Плагин Claude Code для автоматического захвата и инъекции контекста между сессиями |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐13 427 | Memory layer для агентов на Rust — serverless, single-file замена сложных RAG-пайплайнов |

---

## 3. Анализ трендов

### Агентные фреймворки: взрыв специализации

Главный тренд дня — **фрагментация агентного пространства в сторону специализации**. Если год назад доминировали универсальные оркестраторы (LangChain, LlamaIndex), то сейчас топ заполняется узкоспециализированными решениями: GUI-агенты (page-agent), coding-агенты (OpenHands, shareAI-lab/learn-claude-code), IM-агенты (AstrBot), film-production агенты (saturndec/waoowaoo). Это признак зрелости рынка — пользователи перестают изобретать велосипед и требуют готовых вертикальных решений.

### MCP как новая инфраструктурная ставка

Сразу несколько крупных проектов — activepieces (~400 MCP-серверов), JeecgBoot, raw-labs/mxcp — выносят **поддержку Model Context Protocol** в заголовок своего позиционирования. MCP, очевидно, становится стандартом интеграции агентов с внешними инструментами, вытесняя кастомные tool-calling реализации.

### Память агентов — горячая ниша

Одновременное появление в трендах [hindsight](https://github.com/vectorize-io/hindsight), [memvid](https://github.com/memvid/memvid), [cognee](https://github.com/topoteretes/cognee) и высокие позиции [mem0](https://github.com/mem0ai/mem0) говорят о том, что **персистентная память агентов** превратилась в самостоятельное конкурентное направление. Рынок ищет решение, которое заменит неуклюжий RAG-over-conversation-history чем-то более интеллектуальным.

### Эффективный инференс возвращается

BitNet (+2227 за день) и LiteRT от Google сигнализируют о **новой волне интереса к efficient inference** — особенно в контексте edge-устройств и снижения стоимости инференса. Вероятно, это связано с выходом новых компактных моделей (Kimi-K2.5, GLM-5, обновлённый Qwen), которые реально запускаются на потребительском железе.

### Claude Code как платформа

Появление официального каталога плагинов Anthropic, нескольких сторонних plugin-проектов и memory-решений именно для Claude Code фиксирует важный сдвиг: **coding-агент превращается в платформу** с собственной экосистемой — так же, как когда-то VS Code.

---

## 4. На что обратить внимание

### 1. 🔥 [microsoft/BitNet](https://github.com/microsoft/BitNet)
**+2 227 звёзд за день** — лучший показатель среди инфраструктурных проектов. 1-битные LLM перестают быть академической экзотикой: официальный инференс-фреймворк от Microsoft означает production-ready путь к радикальному снижению аппаратных требований. Разработчикам, работающим с edge-деплойментом или стоимостью инференса, стоит изучить уже сейчас.

### 2. 🧠 [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) + [memvid/memvid](https://github.com/memvid/memvid)
Два разных подхода к одной проблеме — **обучающаяся долгосрочная память агентов**. Hindsight учится на истории взаимодействий, memvid предлагает serverless single-file архитектуру на Rust. Ниша формируется прямо сейчас, и первые решения, достигшие product-market fit, могут стать инфраструктурным стандартом следующего года.

### 3. 🌐 [alibaba/page-agent](https://github.com/alibaba/page-agent)
**GUI-агенты для браузера** — следующий фронтир после coding-агентов. page-agent от Alibaba (+1468 сегодня) позволяет управлять любым веб-интерфейсом на естественном языке через JavaScript in-page injection. Подход принципиально отличается от browser-use и открывает возможности там, где API не существует.

### 4. 🔐 [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)
**AI security и red teaming** — быстро становящаяся обязательной дисциплина для production AI-систем. +1668 звёзд за день при уже существенной базе говорит о том, что тема вышла за пределы security-сообщества. Разработчикам, выводящим агентов в production, этот инструмент должен быть в стандартном наборе CI/CD.

### 5. 📐 [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN)
Академическая работа MLsys 2026, обещающая **97% экономии хранилища для RAG на персональных устройствах** при сохранении точности. Если результаты подтвердятся в независимых тестах, это меняет экономику приватных RAG-систем кардинально — особенно в сочетании с BitNet-инференсом.

---

*Данные актуальны на 14.03.2026. Звёзды «за сегодня» — из GitHub Trending, суммарные звёзды — из GitHub Search API.*