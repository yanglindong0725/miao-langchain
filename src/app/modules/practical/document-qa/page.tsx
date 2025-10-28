'use client';

import ModuleContainer from '@/components/shared/ModuleContainer';

export default function DocumentQAPage() {
  return (
    <ModuleContainer
      title="文档问答系统"
      description="使用 RAG 技术构建基于文档的智能问答系统。"
      icon="📄"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 项目概览</h2>
          <div className="prose text-gray-700 space-y-3">
            <p>
              这个项目展示如何构建一个完整的文档问答系统：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>文档上传</strong>：支持 PDF、TXT 等多种格式</li>
              <li><strong>向量化存储</strong>：将文档转换为向量并存储</li>
              <li><strong>语义搜索</strong>：基于问题找到相关片段</li>
              <li><strong>答案生成</strong>：基于检索内容生成准确答案</li>
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 border border-yellow-200 text-center">
          <div className="text-5xl mb-4">🚧</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">开发中...</h3>
          <p className="text-gray-600">
            文档问答系统实战项目即将上线！
          </p>
        </section>
      </div>
    </ModuleContainer>
  );
}

