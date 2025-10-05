# LangChain Handlers 架构说明

## 📁 目录结构

```
src/lib/chains/
├── types.ts                    # 类型定义
├── modelConfig.ts              # 模型配置
├── index.ts                    # 导出和注册中心
├── handlers/                   # 各种 Chain 处理器
│   ├── translation.ts          # 翻译
│   ├── summarize.ts            # 摘要
│   ├── fewshot.ts              # Few-shot 学习
│   └── chainComposition.ts     # 链组合
└── README.md                   # 本文档
```

## 🎯 设计原则

1. **单一职责**：每个 handler 只负责一种类型的 Chain 逻辑
2. **易于扩展**：添加新功能只需创建新的 handler 文件
3. **统一接口**：所有 handler 实现 `ChainHandler` 接口
4. **集中管理**：通过 `chainHandlers` 注册表统一管理

## ✨ 如何添加新的 Chain Handler

### 步骤 1：创建新的 handler 文件

在 `handlers/` 目录下创建新文件，例如 `myNewHandler.ts`：

```typescript
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { NextResponse } from "next/server";
import { ChainHandler } from "../types";

export const myNewHandler: ChainHandler = {
  handle: async (input: string, model: ChatOpenAI, subType?: string) => {
    // 1. 创建 Prompt
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", "你的系统提示词"],
      ["human", "{text}"],
    ]);

    // 2. 构建 Chain
    const chain = prompt.pipe(model);

    // 3. 执行
    const response = await chain.invoke({ text: input });

    // 4. 返回结果
    return NextResponse.json({
      response: response.content,
    });
  },
};
```

### 步骤 2：注册到 index.ts

在 `index.ts` 的 `chainHandlers` 中添加：

```typescript
export const chainHandlers: Record<string, ChainHandler> = {
  // ... 其他 handlers
  "my-new-type": myNewHandler,
};
```

### 步骤 3：使用

前端调用时传入对应的 type：

```typescript
const response = await fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    type: "my-new-type",
    input: "用户输入内容",
  }),
});
```

## 🔧 复杂场景：带子类型的 Handler

如果你的 handler 需要支持多种子类型（如 `chainComposition`），可以这样实现：

```typescript
export const myComplexHandler: ChainHandler = {
  handle: async (input: string, model: ChatOpenAI, subType?: string) => {
    switch (subType) {
      case "option1":
        return await handleOption1(input, model);
      case "option2":
        return await handleOption2(input, model);
      default:
        return NextResponse.json(
          { error: "Invalid subType" },
          { status: 400 }
        );
    }
  },
};

async function handleOption1(input: string, model: ChatOpenAI) {
  // 实现逻辑
}

async function handleOption2(input: string, model: ChatOpenAI) {
  // 实现逻辑
}
```

## 📊 优势对比

### 重构前
- ❌ 所有逻辑集中在一个巨大的 switch-case
- ❌ 代码难以维护和测试
- ❌ 添加新功能需要修改主文件

### 重构后
- ✅ 模块化，每个功能独立文件
- ✅ 易于测试和维护
- ✅ 添加新功能无需修改现有代码
- ✅ 清晰的职责分离

## 🚀 最佳实践

1. **保持 handler 简洁**：如果逻辑复杂，提取为单独的函数
2. **统一错误处理**：使用 NextResponse.json 返回标准格式
3. **添加注释**：说明 handler 的用途和参数
4. **类型安全**：充分利用 TypeScript 类型检查

