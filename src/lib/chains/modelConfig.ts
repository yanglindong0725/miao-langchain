import { ChatOpenAI } from "@langchain/openai";

/**
 * 创建配置好的 ChatOpenAI 模型实例
 */
export function createModel(): ChatOpenAI {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  return new ChatOpenAI({
    model: "deepseek-chat",
    temperature: 0.7,
    openAIApiKey: apiKey,
    configuration: {
      baseURL: "https://api.deepseek.com",
    },
    maxTokens: 4096,
  });
}

