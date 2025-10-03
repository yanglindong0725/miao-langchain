'use client';

import Link from 'next/link';
import { MODULES } from '@/lib/constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* 头部 */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            LangChain 学习之旅 🚀
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            从基础概念到实战应用，系统学习 LangChain 框架
          </p>
          <p className="text-gray-500 mt-2">基于 Next.js + DeepSeek API</p>
        </div>

        {/* 模块分类展示 */}
        {MODULES.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {category.category}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.modules.map((module) => (
                <Link
                  key={module.id}
                  href={module.path}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-400"
                >
                  <div className="flex items-start mb-4">
                    <span className="text-4xl mr-4">{module.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                    开始学习 →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* 底部提示 */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              💡 学习建议
            </h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>建议按照「基础概念 → 进阶功能 → 实战应用」的顺序学习</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>每个模块都包含理论说明和实际演示</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>可以通过侧边栏快速在不同模块间切换</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>建议动手实践，修改代码观察不同的效果</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
