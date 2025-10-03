'use client';

import ModuleContainer from '@/components/shared/ModuleContainer';

export default function MemoryPage() {
  return (
    <ModuleContainer
      title="Memory (记忆)"
      description="为 AI 对话添加记忆能力，让 AI 能够记住上下文和历史对话。"
      icon="🧠"
    >
      <div className="space-y-8">
        {/* 理论说明 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 什么是 Memory？</h2>
          <div className="prose text-gray-700 space-y-3">
            <p>
              Memory（记忆）模块使 LangChain 应用能够维护对话上下文：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>上下文保持</strong>：记住之前的对话内容</li>
              <li><strong>多种存储方式</strong>：内存、数据库、向量存储等</li>
              <li><strong>灵活的检索策略</strong>：全部历史、滑动窗口、摘要等</li>
              <li><strong>个性化体验</strong>：基于历史交互提供更好的响应</li>
            </ul>
          </div>
        </section>

        {/* Memory 类型 */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🗂️ Memory 类型</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold text-purple-700 mb-2">ConversationBufferMemory</div>
              <p className="text-sm text-gray-600">保存完整的对话历史</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold text-purple-700 mb-2">ConversationBufferWindowMemory</div>
              <p className="text-sm text-gray-600">只保留最近 N 轮对话</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold text-purple-700 mb-2">ConversationSummaryMemory</div>
              <p className="text-sm text-gray-600">将历史对话总结后保存</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold text-purple-700 mb-2">VectorStoreMemory</div>
              <p className="text-sm text-gray-600">基于向量相似度检索相关记忆</p>
            </div>
          </div>
        </section>

        {/* 代码示例 */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💻 代码示例（即将实现）</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { ConversationChain } from "langchain/chains";
import { ChatOpenAI } from "@langchain/openai";
import { BufferMemory } from "langchain/memory";

// 创建记忆
const memory = new BufferMemory();

// 创建带记忆的对话链
const chain = new ConversationChain({
  llm: new ChatOpenAI(),
  memory: memory,
});

// 第一轮对话
await chain.call({ input: "我叫小明" });
// 输出: "你好小明！很高兴认识你。"

// 第二轮对话（AI 能记住你的名字）
await chain.call({ input: "你还记得我叫什么吗？" });
// 输出: "当然记得，你叫小明！"`}
          </pre>
        </section>

        {/* 即将推出 */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 border border-yellow-200 text-center">
          <div className="text-5xl mb-4">🚧</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">实践演示开发中...</h3>
          <p className="text-gray-600">
            这个模块的交互演示正在开发中，敬请期待！
          </p>
        </section>

        {/* 应用场景 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✨ 关键要点</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1️⃣</span>
              <span>根据应用场景选择合适的 Memory 类型</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>长期对话需要考虑 Token 限制和成本</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>可以结合数据库实现持久化存储</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>Memory 是构建聊天机器人的核心组件</span>
            </li>
          </ul>
        </section>
      </div>
    </ModuleContainer>
  );
}

