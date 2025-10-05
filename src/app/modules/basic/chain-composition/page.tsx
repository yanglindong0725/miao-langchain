"use client";

import ModuleContainer from "@/components/shared/ModuleContainer";
import DemoSection from "@/components/shared/DemoSection";

export default function ChainCompositionPage() {
  return (
    <ModuleContainer
      title="Chain Composition (链的组合)"
      description="学习如何组合多个 Chain，构建复杂的多步骤 AI 工作流。"
      icon="🔗"
    >
      <div className="space-y-8">
        {/* 理论说明 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📖 什么是 Chain Composition？
          </h2>
          <div className="prose text-gray-700 space-y-3">
            <p>
              链的组合（Chain Composition）是将多个独立的 Chain 串联起来，前一个 Chain 的输出作为后一个 Chain 的输入，形成复杂的工作流：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>顺序执行</strong>：多个 Chain 按顺序依次执行
              </li>
              <li>
                <strong>数据传递</strong>：前一步的输出自动成为下一步的输入
              </li>
              <li>
                <strong>模块化设计</strong>：每个 Chain 负责单一任务，便于维护
              </li>
              <li>
                <strong>复杂工作流</strong>：可以构建翻译→摘要→情感分析等多步骤流程
              </li>
            </ul>
          </div>
        </section>

        {/* 架构图示 */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            🔄 Sequential Chain 执行流程
          </h3>
          <div className="space-y-4">
            {/* 第一个链 */}
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-2">Chain 1: 翻译</div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="bg-purple-100 px-3 py-2 rounded">
                  📝 中文输入
                </div>
                <span className="text-lg">→</span>
                <div className="bg-purple-200 px-3 py-2 rounded">
                  🤖 翻译模型
                </div>
                <span className="text-lg">→</span>
                <div className="bg-purple-300 px-3 py-2 rounded">
                  🌍 英文输出
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="text-3xl">⬇️</div>
            </div>

            {/* 第二个链 */}
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-sm text-gray-600 mb-2">Chain 2: 摘要</div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="bg-green-100 px-3 py-2 rounded">
                  🌍 英文输入
                </div>
                <span className="text-lg">→</span>
                <div className="bg-green-200 px-3 py-2 rounded">
                  🤖 摘要模型
                </div>
                <span className="text-lg">→</span>
                <div className="bg-green-300 px-3 py-2 rounded">
                  ✨ 简洁摘要
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 代码示例 */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            💻 代码示例
          </h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {`import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

// 1. 创建第一个 Chain：中文翻译成英文
const translationPrompt = ChatPromptTemplate.fromMessages([
  ["system", "将以下中文翻译成英文："],
  ["human", "{text}"]
]);
const translationChain = translationPrompt
  .pipe(model)
  .pipe(new StringOutputParser());

// 2. 创建第二个 Chain：对英文进行摘要
const summaryPrompt = ChatPromptTemplate.fromMessages([
  ["system", "请用一句话总结："],
  ["human", "{text}"]
]);
const summaryChain = summaryPrompt
  .pipe(model)
  .pipe(new StringOutputParser());

// 3. 组合两个 Chain
const composedChain = translationChain.pipe((text) => 
  summaryChain.invoke({ text })
);

// 4. 执行组合后的 Chain
const result = await composedChain.invoke({
  text: "你的中文长文本..."
});`}
          </pre>
        </section>

        {/* 实践演示 1：翻译 + 摘要 */}
        <section>
          <DemoSection
            title="📝 实践演示 1：翻译 + 摘要"
            apiEndpoint="/api/chat"
            placeholder="输入一段中文文本，将会先翻译成英文，再生成摘要..."
            buttonText="执行链组合"
            inputRows={6}
            requestTransform={(input) => ({ type: "chain-composition", subType: "translate-summarize", input })}
            extraContent={
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>组合链结构：</strong>
                  <br />
                  <span className="inline-block bg-white px-2 py-1 rounded mr-2 my-1">
                    Chain 1: 中文 → 英文
                  </span>
                  <span className="text-blue-600 mr-2">→</span>
                  <span className="inline-block bg-white px-2 py-1 rounded">
                    Chain 2: 英文 → 摘要
                  </span>
                </p>
              </div>
            }
          />
        </section>

        {/* 实践演示 2：改写 + 情感分析 */}
        <section>
          <DemoSection
            title="📝 实践演示 2：改写 + 情感分析"
            apiEndpoint="/api/chat"
            placeholder="输入一段文本，将会先改写为正式文体，再进行情感分析..."
            buttonText="执行链组合"
            inputRows={5}
            requestTransform={(input) => ({ type: "chain-composition", subType: "rewrite-sentiment", input })}
            extraContent={
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-sm text-purple-800">
                  <strong>组合链结构：</strong>
                  <br />
                  <span className="inline-block bg-white px-2 py-1 rounded mr-2 my-1">
                    Chain 1: 文本改写
                  </span>
                  <span className="text-purple-600 mr-2">→</span>
                  <span className="inline-block bg-white px-2 py-1 rounded">
                    Chain 2: 情感分析
                  </span>
                </p>
              </div>
            }
          />
        </section>

        {/* 要点总结 */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✨ 关键要点
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1️⃣</span>
              <span>
                使用 <code className="bg-white px-2 py-1 rounded">.pipe()</code>{" "}
                可以串联多个 Chain
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>每个 Chain 专注于单一任务，便于测试和维护</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>使用 StringOutputParser 可以将输出转换为字符串</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>组合链可以包含任意数量的步骤</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">5️⃣</span>
              <span>可以在链之间添加自定义的数据转换逻辑</span>
            </li>
          </ul>
        </section>

        {/* 应用场景 */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            🎯 常见应用场景
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-lg mb-2">📰 内容处理流水线</div>
              <p className="text-sm text-gray-600">
                抓取 → 清洗 → 摘要 → 分类 → 存储
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-lg mb-2">🌐 多语言处理</div>
              <p className="text-sm text-gray-600">
                识别语言 → 翻译 → 校对 → 格式化
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-lg mb-2">📊 数据分析</div>
              <p className="text-sm text-gray-600">
                提取信息 → 结构化 → 分析 → 生成报告
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-lg mb-2">✍️ 内容创作</div>
              <p className="text-sm text-gray-600">
                生成大纲 → 扩写内容 → 润色 → 质量检查
              </p>
            </div>
          </div>
        </section>
      </div>
    </ModuleContainer>
  );
}

