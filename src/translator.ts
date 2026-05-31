import { OpenAI } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.LLM_API_KEY || "",
    baseURL: process.env.LLM_BASE_URL || "[https://api.deepseek.com/v1](https://api.deepseek.com/v1)",
});

export class DocuLinkTranslator {
    private codeVault: Map<string, string> = new Map();
    private placeholderIndex = 0;

    private preprocess(markdown: string): string {
        let processed = markdown;
        const codeBlockRegex = /```[\s\S]*?```/g;
        processed = processed.replace(codeBlockRegex, (match) => {
            const id = `__DOCULINK_CODE_BLOCK_${this.placeholderIndex++}__`;
            this.codeVault.set(id, match);
            return `\n${id}\n`;
        });

        const inlineCodeRegex = /`[^`\n]+`/g;
        processed = processed.replace(inlineCodeRegex, (match) => {
            const id = `__DOCULINK_INLINE_${this.placeholderIndex++}__`;
            this.codeVault.set(id, match);
            return id;
        });

        return processed;
    }

    private postprocess(translatedText: string): string {
        let restored = translatedText;
        for (const [id, originalCode] of this.codeVault.entries()) {
            restored = restored.replace(id, originalCode);
        }
        return restored;
    }

    public async translate(markdownContent: string): Promise<string> {
        const protectedText = this.preprocess(markdownContent);
        const systemPrompt = "You are a professional software engineer and expert technical translator. Translate technical documentation into Clear, Fluent, and Professional Chinese.\n\nCRITICAL RULES:\n1. DO NOT translate placeholders like '__DOCULINK_CODE_BLOCK_X__'.\n2. Translate standard CS terms accurately (e.g., 'High Availability' -> '高可用').";
        
        const response = await openai.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: protectedText }
            ],
            temperature: 0.2
        });

        return this.postprocess(response.choices[0].message.content || "");
    }
}
