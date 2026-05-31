import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";
import { DocuLinkTranslator } from "./translator";

const program = new Command();

program
    .name("doculink")
    .description("智能技术文档直译与排版工具")
    .version("0.0.1");

program
    .argument("<file>", "要翻译的 Markdown 文件路径")
    .option("-o, --output <output>", "指定输出文件路径")
    .action(async (file, options) => {
        const filePath = path.resolve(file);
        if (!fs.existsSync(filePath)) {
            console.error(`❌ 错误：找不到文件 ${file}`);
            process.exit(1);
        }

        console.log(`📖 正在读取文件：${file}...`);
        const content = fs.readFileSync(filePath, "utf-8");

        console.log("🤖 正在调用 AI 进行技术语义翻译（已自动锁定代码块）...");
        const translator = new DocuLinkTranslator();
        try {
            const result = await translator.translate(content);
            const outputPath = options.output || filePath.replace(".md", ".zh.md");
            fs.writeFileSync(outputPath, result, "utf-8");
            console.log(`✨ 翻译成功！保存至：${outputPath}`);
        } catch (error) {
            console.error("❌ 翻译过程中发生错误：", error);
        }
    });

program.parse();
