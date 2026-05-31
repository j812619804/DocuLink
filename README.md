🤖 DocuLink | 智能技术文档直译与排版工具

English | 中文

English Introduction

DocuLink is an intelligent technical documentation translator and formatter designed specifically for developers. Based on the concept of Markdown Abstract Syntax Trees (AST), it automatically locks special nodes such as code blocks, inline code, images, and links before calling a Large Language Model (LLM) for translation. This ensures 100% layout preservation while delivering high-quality, developer-friendly technical translations.

🌟 Key Features

🔒 Robust Structure Protection: Automatically locks multi-line code blocks (```js ... ```) and inline code (`code`) using high-precision regex and pre-processing, preventing LLMs from altering or translating code structures.

💡 Technical Semantic Optimization: Features a specialized system prompt that accurately handles technical terminology (e.g., High Availability -> 高可用, Concurrency -> 并发) to eliminate awkward, literal machine translations.

⚡ Simple CLI Interaction: Translate local Markdown files with a single, lightning-fast command. Supports custom output destinations.

🔌 Cross-Platform & Multi-Model Support: Built on the standard OpenAI SDK architecture, making it fully compatible with DeepSeek, Gemini, OpenAI, and other mainstream LLM APIs.

🛠️ How It Works (Pipeline)

To guarantee professional translation quality, DocuLink processes your documentation in 4 distinct phases:

[Original Markdown] 
       │
       ▼
 1. AST Parsing & Locking ─────> Extract code blocks/links, replace with unique placeholder tokens
       │
       ▼
 2. Context-Aware Translation ──> Inject standard developer glossary and prompts into LLM
       │
       ▼
 3. Token Restoration ─────────> Restore placeholder tokens back to original code blocks
       │
       ▼
[Perfect Chinese Markdown]


🚀 Quick Start

1. Clone & Install Dependencies

# Clone this repository
git clone https://github.com/j812619804/DocuLink.git
cd DocuLink

# Install dependencies
npm install


2. Configure Environment Variables

Create a .env file in the project root directory and add your LLM API credentials:

LLM_API_KEY=your_api_key_here
LLM_BASE_URL=https://api.deepseek.com/v1


3. Run Translation

Use our built-in runner to translate your Markdown files:

npx tsx src/index.ts <path-to-your-markdown-file>


By default, it will output a beautifully translated <filename>.zh.md in the same directory.

中文介绍

DocuLink 是一款专为开发者设计的智能技术文档直译与排版工具。它基于 Markdown 抽象语法树（AST）的思想，在调用大语言模型（LLM）进行翻译前，自动锁定文档中的代码块、行内代码、图片与链接等特殊节点。不仅能保证 100% 的排版不崩塌，更能输出符合中文开发者阅读习惯的高质量技术译文。

🌟 核心特性

🔒 结构强力保护：通过高精度正则与 AST 预处理，完美锁死 Markdown 中的多行代码块（```js ... ```）及行行内代码（`code`），防止大模型篡改或翻译。

💡 技术语义优化：内置高级 System Prompt，对计算机科学（CS）领域的专业术语（如 High Availability -> 高可用，Concurrency -> 并发）进行精准校对，告别粗糙机翻感。

⚡ 极简 CLI 交互：只需一行命令即可对本地 Markdown 文档进行秒级翻译，支持自定义输出路径。

🔌 多模型适配：使用标准 OpenAI SDK 架构，完美兼容 DeepSeek、Gemini、OpenAI 等主流大模型 API。

🛠️ 工作原理 (Pipeline)

[原始 Markdown] 
       │
       ▼
 1. 语法树解析 (MD AST) ───> 提取代码块、链接，用唯一 Token 占位锁死
       │
       ▼
 2. 文本增量注入 ─────────> 结合“技术术语标准”与 Prompt 发送给大模型
       │
       ▼
 3. 译文还原重组 ─────────> 将大模型返回的文本中的 Token 还原为原始代码块
       │
       ▼
[完美的中文 Markdown]


🚀 快速开始

1. 克隆并安装依赖

# 克隆本项目到本地
git clone https://github.com/j812619804/DocuLink.git
cd DocuLink

# 安装项目依赖
npm install


2. 配置环境变量

在项目根目录下创建一个 .env 文件，并填入你的大模型 API 密钥：

LLM_API_KEY=你的真实API密钥
LLM_BASE_URL=https://api.deepseek.com/v1


3. 一键翻译

使用项目内置的调试工具对 Markdown 文档进行直译：

npx tsx src/index.ts <你的 Markdown 文件路径>


默认会在原文件同级目录下生成一个 <文件名>.zh.md 的高质量翻译文档。

📅 Roadmap | 持续维护路线图

[x] v0.0.1 (MVP): Basic AST Markdown structure protection & LLM direct translation. / 跑通 Markdown 代码块、行内代码的锁定保护与 LLM 基本直译。

[ ] v0.1.0:

[ ] Support local custom dictionaries (glossary.json) for specific technical term mappings. / 引入本地术语字典 (Glossary)，支持用户在本地配置 glossary.json 进行个性化专有名词映射。

[ ] Optimize hyperlink and image tag protection logic. / 优化链接与图片标签的白名单锁定逻辑。

[ ] v0.2.0:

[ ] Implement text chunking algorithms for large documents to avoid token context limits. / 实现超大长文档切片算法，避免超出大模型单次上下文限制。

[ ] Support concurrent multi-threaded requests to speed up long document translations. / 支持并发多线程调用，大幅提升长文档的翻译速率。

[ ] v0.3.0:

[ ] Extend supported formats: Add smart comment extraction and translation for source files (e.g., .ts, .go, .py). / 扩展支持格式：新增对代码文件中注释行的智能提取与直译（保持代码本身不改变）。

[ ] v1.0.0:

[ ] Release a beautiful self-hosted Web UI. / 发布可视化 Web 交互面板。

[ ] Develop a Chrome Extension for quick, one-click right-click page translations. / 提供 Chrome 浏览器快捷右键网页翻译插件。

🤝 Contributing | 参与贡献

Contributions, issues, and feature requests are welcome! Feel free to: / 欢迎参与贡献！如果你在使用中发现了 Bug 或有更棒的想法：

Fork this project 🍴

Create your feature branch / 创建特性分支 (git checkout -b feature/AmazingFeature)

Commit your changes / 提交更改 (git commit -m 'Add some AmazingFeature')

Push to the branch / 推送到分支 (git push origin feature/AmazingFeature)

Open a Pull Request (PR) / 提交一个 PR 🚀

📄 License | 开源许可证

This project is licensed under the MIT License. / 本项目采用 MIT License 开源许可证。
