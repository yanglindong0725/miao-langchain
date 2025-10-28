import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { NextResponse } from "next/server";
import { ChainHandler } from "../types";

/**
 * 摘要 Chain Handler
 * 用于生成文本摘要
 */
export const summarizeHandler: ChainHandler = {
  handle: async (input: string, model: ChatOpenAI) => {
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", "请用一句话总结以下内容："],
      ["human", "{text}"],
    ]);

    const chain = prompt.pipe(model);
    const response = await chain.invoke({ text: input });

    return NextResponse.json({
      response: response.content,
    });
  },
};

