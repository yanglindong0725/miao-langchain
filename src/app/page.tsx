'use client';

import { useState } from 'react';

type FunctionType = 'translation' | 'summarize' | 'fewshot';

interface FunctionConfig {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
}

const functionConfigs: Record<FunctionType, FunctionConfig> = {
  translation: {
    title: '🌐 中英文互译',
    description: '输入中文或英文，自动翻译为另一种语言',
    placeholder: '例如：Hello, how are you? 或 你好，最近怎么样？',
    buttonText: '翻译',
  },
  summarize: {
    title: '📝 文本摘要',
    description: '将长文本总结为一句话',
    placeholder: '例如：输入一段长文本...',
    buttonText: '生成摘要',
  },
  fewshot: {
    title: '😊 情绪转表情',
    description: '将情绪词转换为对应的表情符号（Few-shot 学习示例）',
    placeholder: '例如：兴奋、愤怒、惊讶',
    buttonText: '转换',
  },
};

export default function Home() {
  const [selectedType, setSelectedType] = useState<FunctionType>('translation');
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          type: selectedType, 
          input: input.trim() 
        }),
      });

      const data = await res.json();
      if (data.error) {
        setResponse(`错误: ${data.error}`);
      } else {
        setResponse(data.response);
      }
    } catch (error) {
      console.error('Error', error);
      setResponse('发生错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  const currentConfig = functionConfigs[selectedType];

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">LangChain 学习示例</h1>
        <p className="text-gray-600 mb-8">基于 DeepSeek 的 Prompt Template 和 Chain 演示</p>

        {/* 功能选择 */}
        <div className="mb-8">
          <label className="block mb-3 font-semibold text-gray-700">
            选择功能：
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(Object.keys(functionConfigs) as FunctionType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setSelectedType(type);
                  setInput('');
                  setResponse('');
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedType === type
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-2xl mb-2">{functionConfigs[type].title.split(' ')[0]}</div>
                <div className="font-medium text-sm">
                  {functionConfigs[type].title.split(' ').slice(1).join(' ')}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 当前功能说明 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-1">{currentConfig.title}</h3>
          <p className="text-blue-700 text-sm">{currentConfig.description}</p>
        </div>

        {/* 输入表单 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              输入内容：
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder={currentConfig.placeholder}
              rows={4}
            />
          </div>

          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? '处理中...' : currentConfig.buttonText}
          </button>
        </form>

        {/* 响应结果 */}
        {response && (
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
            <h2 className="font-bold mb-3 text-gray-800 flex items-center">
              <span className="mr-2">💡</span>
              结果：
            </h2>
            <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {response}
            </p>
          </div>
        )}

        {/* 使用提示 */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-3">💡 使用提示：</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><strong>翻译：</strong>支持中英文互译，自动识别输入语言</li>
            <li><strong>摘要：</strong>将长文本浓缩为一句话精华</li>
            <li><strong>情绪转表情：</strong>演示 Few-shot Learning，已学习「开心 → 😊」和「难过 → 😢」</li>
          </ul>
        </div>
      </div>
    </div>
  );
}