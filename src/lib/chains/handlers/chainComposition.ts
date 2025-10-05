import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { NextResponse } from "next/server";
import { ChainHandler } from "../types";

/**
 * 链组合 Handler
 * 支持多种组合链场景
 */
export const chainCompositionHandler: ChainHandler = {
  handle: async (input: string, model: ChatOpenAI, subType?: string) => {
    // 翻译 + 摘要
    if (subType === "translate-summarize") {
      return await handleTranslateSummarize(input, model);
    }

    // 改写 + 情感分析
    if (subType === "rewrite-sentiment") {
      return await handleRewriteSentiment(input, model);
    }

    return NextResponse.json({ error: "Invalid subType" }, { status: 400 });
  },
};

/**
 * 翻译 + 摘要组合链
 */
async function handleTranslateSummarize(
  input: string,
  model: ChatOpenAI
): Promise<NextResponse> {
  // Chain 1: 翻译（中文 → 英文）
  const translationPrompt = ChatPromptTemplate.fromMessages([
    ["system", "你是专业的翻译助手。请将以下中文翻译成英文，保持原意。"],
    ["human", "{text}"],
  ]);
  const translationChain = translationPrompt
    .pipe(model)
    .pipe(new StringOutputParser());

  // Chain 2: 摘要
  const summaryPrompt = ChatPromptTemplate.fromMessages([
    ["system", "请用一句话总结以下英文内容："],
    ["human", "{text}"],
  ]);
  const summaryChain = summaryPrompt
    .pipe(model)
    .pipe(new StringOutputParser());

  // 执行组合链
  const translatedText = await translationChain.invoke({ text: input });
  const summary = await summaryChain.invoke({ text: translatedText });

  return NextResponse.json({
    response: `【第一步：翻译结果】\n${translatedText}\n\n【第二步：摘要结果】\n${summary}`,
  });
}

/**
 * 改写 + 情感分析组合链
 */
async function handleRewriteSentiment(
  input: string,
  model: ChatOpenAI
): Promise<NextResponse> {
  // Chain 1: 改写为正式文体
  const rewritePrompt = ChatPromptTemplate.fromMessages([
    ["system", "请将以下文本改写为正式、专业的表达方式，保持原意。"],
    ["human", "{text}"],
  ]);
  const rewriteChain = rewritePrompt
    .pipe(model)
    .pipe(new StringOutputParser());

  // Chain 2: 情感分析
  const sentimentPrompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "分析以下文本的情感倾向，回答格式：情感：[积极/消极/中性]，原因：[简短说明]",
    ],
    ["human", "{text}"],
  ]);
  const sentimentChain = sentimentPrompt
    .pipe(model)
    .pipe(new StringOutputParser());

  // 执行组合链
  const rewrittenText = await rewriteChain.invoke({ text: input });
  const sentiment = await sentimentChain.invoke({ text: rewrittenText });

  return NextResponse.json({
    response: `【第一步：改写结果】\n${rewrittenText}\n\n【第二步：情感分析】\n${sentiment}`,
  });
}

