import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
  FewShotChatMessagePromptTemplate,
} from "@langchain/core/prompts";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { type, input } = await req.json();
    const apiKey = process.env.DEEPSEEK_API_KEY;

    // 初始化模型
    const model = new ChatOpenAI({
      model: "deepseek-chat",
      temperature: 0.7,
      openAIApiKey: apiKey,
      configuration: {
        baseURL: "https://api.deepseek.com",
      },
      maxTokens: 4096,
    });

    let chain;

    switch (type) {
      case "translation":
        // 翻译提示模板
        const translationPrompt = ChatPromptTemplate.fromMessages([
          ["system", "你是一个专业的翻译助手，将中英文互译。"],
          ["human", "{text}"],
        ]);
        chain = translationPrompt.pipe(model);
        break;

      case "summarize":
        // 摘要提示模板
        const summarizePrompt = ChatPromptTemplate.fromMessages([
          ["system", "请用一句话总结以下内容："],
          ["human", "{text}"],
        ]);
        chain = summarizePrompt.pipe(model);
        break;

      case "fewshot":
        // Few-shot 学习示例
        const examples = [
          { input: "开心", output: "😊" },
          { input: "难过", output: "😢" },
        ];

        const examplePrompt = ChatPromptTemplate.fromMessages([
          ["human", "{input}"],
          ["ai", "{output}"],
        ]);

        const fewShotPrompt = new FewShotChatMessagePromptTemplate({
          examplePrompt,
          examples,
          inputVariables: ["input"],
        });

        const finalPrompt = ChatPromptTemplate.fromMessages([
          ["system", "将情绪词转换为对应的表情符号"],
          fewShotPrompt as any,
          ["human", "{input}"],
        ]);
        
        chain = finalPrompt.pipe(model);
        break;

      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    // 执行链
    const response = await chain.invoke({
      text: input,
      input,
    });

    return NextResponse.json({
      response: response.content,
    });
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
