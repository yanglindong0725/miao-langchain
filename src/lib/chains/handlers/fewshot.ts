import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
  FewShotChatMessagePromptTemplate,
} from "@langchain/core/prompts";
import { NextResponse } from "next/server";
import { ChainHandler } from "../types";

/**
 * Few-shot Learning Handler
 * 通过少量示例教会模型完成任务
 */
export const fewshotHandler: ChainHandler = {
  handle: async (input: string, model: ChatOpenAI) => {
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

    const chain = finalPrompt.pipe(model);
    const response = await chain.invoke({ input });

    return NextResponse.json({
      response: response.content,
    });
  },
};

