import { NextResponse } from "next/server";
import { createModel, getChainHandler, ChainRequest } from "@/lib/chains";

/**
 * Chat API 路由处理器
 * 统一处理各种 LangChain 请求
 */
export async function POST(req: Request) {
  try {
    const { type, input, subType }: ChainRequest = await req.json();

    // 验证输入
    if (!type || !input) {
      return NextResponse.json(
        { error: "Missing required fields: type and input" },
        { status: 400 }
      );
    }

    // 创建模型实例
    const model = createModel();

    // 获取对应的 Chain Handler
    const handler = getChainHandler(type);

    if (!handler) {
      return NextResponse.json(
        { error: `Invalid type: ${type}` },
        { status: 400 }
      );
    }

    // 执行处理
    return await handler.handle(input, model, subType);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
