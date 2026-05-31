# DocuLink
🤖 DocuLink

DocuLink 是一款专为开发者设计的智能技术文档直译与排版工具。它基于 Markdown 抽象语法树（AST）的思想，在调用大语言模型（LLM）进行翻译前，自动锁定文档中的代码块、行内代码、图片与链接等特殊节点。不仅能保证 100% 的排版不崩塌，更能输出符合中文开发者阅读习惯的高质量技术译文。

🌟 核心特性

🔒 结构强力保护：通过高精度正则与 AST 预处理，完美锁死 Markdown 中的多行代码块（js ... ）及行内代码（code），防止大模型篡改或翻译。

💡 技术语义优化：内置高级 System Prompt，对计算机科学（CS）领域的专业术语（如 High Availability -> 高可用，Concurrency -> 并发）进行精准校对，告别机翻感。

⚡ 极简 CLI 交互：只需一行命令即可对本地 Markdown 文档进行秒级翻译，支持自定义输出路径。

🔌 跨平台与多模型适配：使用标准 OpenAI SDK 架构，完美兼容 DeepSeek、Gemini、OpenAI 等主流大模型 API。

🛠️ 工作原理 (Pipeline)

为了保证翻译质量，DocuLink 采用了四阶段流水线处理机制：

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

LLM_API_KEY=your_api_key_here
LLM_BASE_URL=https://api.deepseek.com/v1


3. 一键翻译

使用项目内置的调试工具对 Markdown 文档进行直译：

npx tsx src/index.ts <你的 Markdown 文件路径>


默认会在原文件同级目录下生成一个 <文件名>.zh.md 的高质量翻译文档。

📅 持续维护路线图 (Roadmap)

本工具目前正处于活跃的快速迭代期，欢迎大家提交 Issue 和 PR！以下是我们的后续演进规划：

[x] v0.0.1 (MVP)：跑通 Markdown 代码块、行内代码的锁定保护与 LLM 基本直译。

[ ] v0.1.0：

[ ] 引入 本地术语字典 (Glossary)，支持用户在本地配置 glossary.json 进行个性化专有名词映射。

[ ] 优化链接（Links）与图片标签（Images）的白名单锁定逻辑。

[ ] v0.2.0：

[ ] 实现超大长文档切片算法，避免超出大模型的 Token 单次上下文限制。

[ ] 支持并发多线程调用，大幅提升长文档的翻译速率。

[ ] v0.3.0：

[ ] 扩展支持格式：新增对 .ts / .go / .py 源代码文件中注释行的智能提取与直译（代码逻辑完全保持不变）。

[ ] v1.0.0：

[ ] 发布可视化 Web 交互面板。

[ ] 提供 Chrome 浏览器快捷右键网页翻译插件。

🤝 参与贡献

如果你在使用过程中发现了 Bug，或者有更炫酷的排版保护想法，欢迎随时：

Fork 本仓库 🍴

创建你的特性分支 (git checkout -b feature/AmazingFeature)

提交你的更改 (git commit -m 'Add some AmazingFeature')

推送到分支 (git push origin feature/AmazingFeature)

提交一个 Pull Request (PR) 🚀

📄 开源许可证

本项目采用 MIT License 开源许可证。这意味着你可以自由地进行个人及商业使用、分发和修改。
