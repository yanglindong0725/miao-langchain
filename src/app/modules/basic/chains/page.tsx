"use client";

import ModuleContainer from "@/components/shared/ModuleContainer";
import DemoSection from "@/components/shared/DemoSection";

export default function ChainsPage() {
  return (
    <ModuleContainer
      title="Chains (链)"
      description="学习如何使用 LangChain 的 Chains 将多个组件串联起来，构建复杂的 AI 工作流。"
      icon="⛓️"
    >
      <div className="space-y-8">
        {/* 理论说明 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📖 什么是 Chain？
          </h2>
          <div className="prose text-gray-700 space-y-3">
            <p>
              Chain（链）是 LangChain 的核心概念，它允许你将多个组件串联起来：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>组合多个步骤</strong>：Prompt → Model → 输出解析器
              </li>
              <li>
                <strong>管道式处理</strong>：使用 <code>pipe()</code> 或{" "}
                <code>|</code> 操作符连接
              </li>
              <li>
                <strong>数据流转</strong>：前一个组件的输出自动传递给下一个组件
              </li>
              <li>
                <strong>可复用工作流</strong>：封装复杂逻辑为可重用的 Chain
              </li>
            </ul>
          </div>
        </section>

        {/* 架构图示 */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            🔄 Chain 执行流程
          </h3>
          <div className="flex items-center justify-center space-x-4 text-gray-700">
            <div className="bg-white px-4 py-3 rounded-lg shadow">
              📝 Prompt Template
            </div>
            <span className="text-2xl">→</span>
            <div className="bg-white px-4 py-3 rounded-lg shadow">
              🤖 LLM Model
            </div>
            <span className="text-2xl">→</span>
            <div className="bg-white px-4 py-3 rounded-lg shadow">
              ✨ Output
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

// 1. 创建 Prompt Template
const prompt = ChatPromptTemplate.fromMessages([
  ["system", "请用一句话总结以下内容："],
  ["human", "{text}"]
]);

// 2. 创建 Model
const model = new ChatOpenAI({
  model: "deepseek-chat",
  temperature: 0.7
});

// 3. 使用 pipe 组合成 Chain
const chain = prompt.pipe(model);

// 4. 执行 Chain
const result = await chain.invoke({
  text: "你的长文本..."
});`}
          </pre>
        </section>

        {/* 实践演示 */}
        <section>
          <DemoSection
            title="📝 实践演示：文本摘要"
            apiEndpoint="/api/chat"
            placeholder="输入一段长文本，将会被总结为一句话..."
            buttonText="生成摘要"
            inputRows={6}
            requestTransform={(input) => ({ type: "summarize", input })}
            extraContent={
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Chain 结构：</strong>
                  <br />
                  ChatPromptTemplate（总结提示词） → ChatOpenAI（DeepSeek 模型）
                  → 输出结果
                </p>
              </div>
            }
          />
        </section>

        {/* 要点总结 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            ✨ 关键要点
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1️⃣</span>
              <span>
                使用 <code className="bg-white px-2 py-1 rounded">.pipe()</code>{" "}
                方法串联组件
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>Chain 自动处理数据在组件间的传递</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>可以添加输出解析器、重试逻辑等中间步骤</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>Chain 是可组合的，小 Chain 可以组成大 Chain</span>
            </li>
          </ul>
        </section>
      </div>
    </ModuleContainer>
  );
}
