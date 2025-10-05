import { ChainHandler } from "./types";
import { translationHandler } from "./handlers/translation";
import { summarizeHandler } from "./handlers/summarize";
import { fewshotHandler } from "./handlers/fewshot";
import { chainCompositionHandler } from "./handlers/chainComposition";

/**
 * Chain Handler 注册表
 * 使用映射模式管理所有 Chain 处理器
 */
export const chainHandlers: Record<string, ChainHandler> = {
  translation: translationHandler,
  summarize: summarizeHandler,
  fewshot: fewshotHandler,
  "chain-composition": chainCompositionHandler,
};

/**
 * 获取指定类型的 Chain Handler
 */
export function getChainHandler(type: string): ChainHandler | undefined {
  return chainHandlers[type];
}

// 导出类型和配置
export * from "./types";
export * from "./modelConfig";

