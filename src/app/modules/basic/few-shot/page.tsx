'use client';

import ModuleContainer from '@/components/shared/ModuleContainer';
import DemoSection from '@/components/shared/DemoSection';

export default function FewShotPage() {
  return (
    <ModuleContainer
      title="Few-shot Learning"
      description="通过少量示例教会模型完成特定任务，无需大量训练数据。"
      icon="🎯"
    >
      <div className="space-y-8">
        {/* 理论说明 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 什么是 Few-shot Learning？</h2>
          <div className="prose text-gray-700 space-y-3">
            <p>
              Few-shot Learning（少样本学习）是一种通过提供少量示例来引导模型行为的技术：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>示例即规则</strong>：通过几个输入-输出示例定义任务模式</li>
              <li><strong>无需训练</strong>：不需要重新训练模型，即时生效</li>
              <li><strong>格式控制</strong>：确保输出符合特定格式</li>
              <li><strong>行为引导</strong>：通过示例展示期望的响应风格</li>
            </ul>
          </div>
        </section>

        {/* 示例展示 */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Few-shot 示例结构</h3>
          <div className="space-y-3 text-gray-700">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium text-blue-600">示例 1：</p>
              <p><strong>输入：</strong>开心</p>
              <p><strong>输出：</strong>😊</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium text-blue-600">示例 2：</p>
              <p><strong>输入：</strong>难过</p>
              <p><strong>输出：</strong>😢</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-green-400">
              <p className="font-medium text-green-600">新输入（由模型推理）：</p>
              <p><strong>输入：</strong>惊讶</p>
              <p><strong>输出：</strong>😲 （模型自动推断）</p>
            </div>
          </div>
        </section>

        {/* 代码示例 */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💻 代码示例</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { 
  ChatPromptTemplate,
  FewShotChatMessagePromptTemplate 
} from "@langchain/core/prompts";

// 定义示例
const examples = [
  { input: "开心", output: "😊" },
  { input: "难过", output: "😢" },
];

// 创建示例提示模板
const examplePrompt = ChatPromptTemplate.fromMessages([
  ["human", "{input}"],
  ["ai", "{output}"],
]);

// 创建 Few-shot 模板
const fewShotPrompt = new FewShotChatMessagePromptTemplate({
  examplePrompt,
  examples,
  inputVariables: ["input"],
});

// 组合最终提示
const finalPrompt = ChatPromptTemplate.fromMessages([
  ["system", "将情绪词转换为对应的表情符号"],
  fewShotPrompt,
  ["human", "{input}"],
]);

const chain = finalPrompt.pipe(model);`}
          </pre>
        </section>

        {/* 实践演示 */}
        <section>
          <DemoSection
            title="😊 实践演示：情绪转表情符号"
            apiEndpoint="/api/chat"
            placeholder="输入情绪词，例如：兴奋、愤怒、惊讶、害怕、爱心"
            buttonText="转换"
            inputRows={2}
            requestTransform={(input) => ({ type: 'fewshot', input })}
            extraContent={
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-sm text-purple-800 mb-2">
                  <strong>已学习的示例：</strong>
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white px-3 py-2 rounded">开心 → 😊</div>
                  <div className="bg-white px-3 py-2 rounded">难过 → 😢</div>
                </div>
                <p className="text-sm text-purple-700 mt-3">
                  模型会基于这两个示例，推理出其他情绪对应的表情！
                </p>
              </div>
            }
          />
        </section>

        {/* 应用场景 */}
        <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">🎯 应用场景</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">📝 格式转换</div>
              <p className="text-sm">将数据转换为特定格式（如 JSON、CSV）</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">🏷️ 分类任务</div>
              <p className="text-sm">文本分类、情感分析等</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">✍️ 风格模仿</div>
              <p className="text-sm">学习特定的写作或回复风格</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">🔄 数据提取</div>
              <p className="text-sm">从非结构化文本提取结构化信息</p>
            </div>
          </div>
        </section>

        {/* 要点总结 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✨ 关键要点</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1️⃣</span>
              <span>示例质量比数量更重要，选择有代表性的示例</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>示例应该清晰展示输入输出的映射关系</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>通常 2-5 个示例就能取得很好的效果</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>可以动态选择示例（基于输入的相似度）</span>
            </li>
          </ul>
        </section>
      </div>
    </ModuleContainer>
  );
}

