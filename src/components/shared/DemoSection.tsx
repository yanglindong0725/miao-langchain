'use client';

import { useState, FormEvent, ReactNode } from 'react';

interface DemoSectionProps {
  title: string;
  apiEndpoint: string;
  placeholder?: string;
  buttonText?: string;
  inputRows?: number;
  requestTransform?: (input: string) => Record<string, any>;
  responseTransform?: (data: any) => string;
  extraContent?: ReactNode;
}

export default function DemoSection({
  title,
  apiEndpoint,
  placeholder = '请输入内容...',
  buttonText = '提交',
  inputRows = 4,
  requestTransform = (input) => ({ input }),
  responseTransform = (data) => data.response || JSON.stringify(data, null, 2),
  extraContent,
}: DemoSectionProps) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestTransform(input.trim())),
      });

      const data = await res.json();
      
      if (data.error) {
        setResponse(`错误: ${data.error}`);
      } else {
        setResponse(responseTransform(data));
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('发生错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      {extraContent && <div className="mb-4">{extraContent}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium text-gray-700">输入内容：</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder={placeholder}
            rows={inputRows}
          />
        </div>

        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? '处理中...' : buttonText}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
          <h3 className="font-bold mb-3 text-gray-800 flex items-center">
            <span className="mr-2">💡</span>
            结果：
          </h3>
          <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed font-sans">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
}

