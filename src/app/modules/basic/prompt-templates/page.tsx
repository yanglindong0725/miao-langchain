'use client';

import ModuleContainer from '@/components/shared/ModuleContainer';
import DemoSection from '@/components/shared/DemoSection';

export default function PromptTemplatesPage() {
  return (
    <ModuleContainer
      title="Prompt Templates"
      description="学习如何使用 LangChain 的 Prompt Templates 创建结构化的提示词模板，实现更灵活和可复用的 AI 交互。"
      icon="📝"
    >
      <div className="space-y-8">
        {/* 理论说明 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 什么是 Prompt Template？</h2>
          <div className="prose text-gray-700 space-y-3">
            <p>
              Prompt Template 是 LangChain 中用于构造提示词的模板工具。它允许你：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>参数化输入</strong>：通过变量占位符动态填充内容</li>
              <li><strong>结构化消息</strong>：区分 system、human、ai 等不同角色的消息</li>
              <li><strong>提高复用性</strong>：一次定义，多次使用</li>
              <li><strong>易于维护</strong>：集中管理提示词逻辑</li>
            </ul>
          </div>
        </section>

        {/* 代码示例 */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💻 代码示例</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { ChatPromptTemplate } from "@langchain/core/prompts";

// 创建提示词模板
const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "你是一个专业的{role}"],
  ["human", "{input}"]
]);

// 使用模板
const formattedPrompt = await promptTemplate.invoke({
  role: "翻译助手",
  input: "Hello, world!"
});`}
          </pre>
        </section>

        {/* 实践演示 - 翻译 */}
        <section>
          <DemoSection
            title="🌐 实践演示：中英文翻译"
            apiEndpoint="/api/chat"
            placeholder="输入中文或英文，例如：Hello, how are you?"
            buttonText="翻译"
            requestTransform={(input) => ({ type: 'translation', input })}
            extraContent={
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>提示词结构：</strong>
                  <br />
                  • System: "你是一个专业的翻译助手，将中英文互译。"
                  <br />
                  • Human: "{'{text}'}"（你的输入）
                </p>
              </div>
            }
          />
        </section>

        {/* 要点总结 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✨ 关键要点</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1️⃣</span>
              <span><strong>fromMessages</strong> 方法可以创建多轮对话模板</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>使用 <code className="bg-white px-2 py-1 rounded">{'{变量名}'}</code> 作为占位符</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>通过 <strong>invoke()</strong> 方法填充变量并执行</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>System 消息定义 AI 角色，Human 消息是用户输入</span>
            </li>
          </ul>
        </section>
      </div>
    </ModuleContainer>
  );
}

