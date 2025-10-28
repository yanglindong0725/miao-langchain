import { ChatOpenAI } from "@langchain/openai";
import { NextResponse } from "next/server";

export interface ChainRequest {
  type: string;
  input: string;
  subType?: string;
}

export interface ChainHandler {
  handle: (
    input: string,
    model: ChatOpenAI,
    subType?: string
  ) => Promise<NextResponse>;
}

