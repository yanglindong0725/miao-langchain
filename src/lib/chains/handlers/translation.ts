import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { NextResponse } from "next/server";
import { ChainHandler } from "../types";

/**
 * 翻译 Chain Handler
 * 用于中英文互译
 */
export const translationHandler: ChainHandler = {
  handle: async (input: string, model: ChatOpenAI) => {
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", "你是一个专业的翻译助手，将中英文互译。"],
      ["human", "{text}"],
    ]);

    const chain = prompt.pipe(model);
    const response = await chain.invoke({ text: input });

    return NextResponse.json({
      response: response.content,
    });
  },
};

