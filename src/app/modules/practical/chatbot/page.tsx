'use client';

import ModuleContainer from '@/components/shared/ModuleContainer';

export default function ChatbotPage() {
  return (
    <ModuleContainer
      title="智能聊天机器人"
      description="综合运用 Memory、Chains 等技术构建完整的对话系统。"
      icon="💬"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 项目概览</h2>
          <div className="prose text-gray-700 space-y-3">
            <p>
              这是一个综合实战项目，将整合之前学习的多个 LangChain 概念：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Memory</strong>：维持多轮对话上下文</li>
              <li><strong>Prompt Templates</strong>：定义 AI 角色和行为</li>
              <li><strong>Chains</strong>：组合多个处理步骤</li>
              <li><strong>流式输出</strong>：实时展示 AI 回复</li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 border border-yellow-200 text-center">
          <div className="text-5xl mb-4">🚧</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">开发中...</h3>
          <p className="text-gray-600">
            完整的聊天机器人实战项目即将上线！
          </p>
        </section>
      </div>
    </ModuleContainer>
  );
}

