'use client';

import ModuleContainer from '@/components/shared/ModuleContainer';

export default function AgentsPage() {
  return (
    <ModuleContainer
      title="Agents (智能代理)"
      description="让 AI 自主决策、规划步骤并调用工具，实现更复杂的任务自动化。"
      icon="🤖"
    >
      <div className="space-y-8">
        {/* 理论说明 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 什么是 Agent？</h2>
          <div className="prose text-gray-700 space-y-3">
            <p>
              Agent（智能代理）是 LangChain 中最强大的概念之一，它能够：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>自主决策</strong>：根据任务目标自行决定执行步骤</li>
              <li><strong>工具调用</strong>：可以使用搜索、计算器、API 等外部工具</li>
              <li><strong>迭代执行</strong>：根据中间结果调整下一步行动</li>
              <li><strong>推理过程</strong>：展示"思考 → 行动 → 观察"的循环</li>
            </ul>
          </div>
        </section>

        {/* Agent 执行流程 */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔄 Agent 执行流程（ReAct 模式）</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1 bg-white p-3 rounded-lg">
                <strong className="text-blue-600">Thought (思考):</strong> 分析问题，决定下一步做什么
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1 bg-white p-3 rounded-lg">
                <strong className="text-green-600">Action (行动):</strong> 选择并执行一个工具
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1 bg-white p-3 rounded-lg">
                <strong className="text-purple-600">Observation (观察):</strong> 获取工具执行结果
              </div>
            </div>
            <div className="text-center text-gray-500">
              ⬇️ 重复 1-3 直到找到答案 ⬇️
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1 bg-white p-3 rounded-lg">
                <strong className="text-orange-600">Final Answer (最终答案):</strong> 给出完整回答
              </div>
            </div>
          </div>
        </section>

        {/* Agent 类型 */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🎭 常见 Agent 类型</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <div className="font-semibold text-gray-800 mb-2">OpenAI Functions Agent</div>
              <p className="text-sm text-gray-600">使用 OpenAI 的 function calling 功能</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <div className="font-semibold text-gray-800 mb-2">ReAct Agent</div>
              <p className="text-sm text-gray-600">推理与行动交替进行</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <div className="font-semibold text-gray-800 mb-2">Zero-shot Agent</div>
              <p className="text-sm text-gray-600">无需示例，直接决策</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <div className="font-semibold text-gray-800 mb-2">Structured Chat Agent</div>
              <p className="text-sm text-gray-600">处理复杂的结构化输入</p>
            </div>
          </div>
        </section>

        {/* 代码示例 */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💻 代码示例（即将实现）</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "@langchain/openai";
import { Calculator } from "langchain/tools/calculator";
import { SerpAPI } from "langchain/tools";

// 定义工具
const tools = [
  new Calculator(), // 计算器
  new SerpAPI(),    // 搜索引擎
];

// 创建 Agent
const executor = await initializeAgentExecutorWithOptions(
  tools,
  new ChatOpenAI({ temperature: 0 }),
  { agentType: "zero-shot-react-description" }
);

// 执行复杂任务
const result = await executor.call({
  input: "2024年最新的 iPhone 价格是多少？如果买两台打8折需要多少钱？"
});

// Agent 会自动：
// 1. 使用搜索工具查找 iPhone 价格
// 2. 使用计算器计算折扣价
// 3. 返回最终答案`}
          </pre>
        </section>

        {/* 即将推出 */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 border border-yellow-200 text-center">
          <div className="text-5xl mb-4">🚧</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">实践演示开发中...</h3>
          <p className="text-gray-600">
            Agent 功能需要更多工具集成，演示即将上线！
          </p>
        </section>

        {/* 应用场景 */}
        <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">🎯 应用场景</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">🔍 信息检索与处理</div>
              <p className="text-sm">搜索信息并进行分析总结</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">🤖 自动化工作流</div>
              <p className="text-sm">自动执行多步骤任务</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">💼 企业助手</div>
              <p className="text-sm">集成内部工具的智能助手</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">📊 数据分析</div>
              <p className="text-sm">自动查询和分析数据</p>
            </div>
          </div>
        </section>

        {/* 要点总结 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✨ 关键要点</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1️⃣</span>
              <span>Agent 的能力取决于提供的工具质量和数量</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>需要设置最大迭代次数，防止无限循环</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>工具描述要清晰，帮助 Agent 正确选择工具</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>Agent 可能出错，需要添加错误处理和重试机制</span>
            </li>
          </ul>
        </section>
      </div>
    </ModuleContainer>
  );
}

