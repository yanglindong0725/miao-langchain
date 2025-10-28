'use client';

import ModuleContainer from '@/components/shared/ModuleContainer';

export default function RAGPage() {
  return (
    <ModuleContainer
      title="RAG (检索增强生成)"
      description="结合外部知识库和向量检索，让 AI 基于特定文档回答问题。"
      icon="📚"
    >
      <div className="space-y-8">
        {/* 理论说明 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📖 什么是 RAG？</h2>
          <div className="prose text-gray-700 space-y-3">
            <p>
              RAG (Retrieval-Augmented Generation，检索增强生成) 是一种将信息检索与生成式 AI 结合的技术：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>外部知识</strong>：接入私有文档、数据库等外部知识源</li>
              <li><strong>向量检索</strong>：使用语义搜索找到最相关的内容</li>
              <li><strong>上下文增强</strong>：将检索结果作为上下文传给 LLM</li>
              <li><strong>准确回答</strong>：基于实际文档生成答案，减少幻觉</li>
            </ul>
          </div>
        </section>

        {/* RAG 流程图 */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔄 RAG 工作流程</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <strong className="text-gray-800">文档加载与切分</strong>
              </div>
              <p className="text-sm text-gray-600 ml-11">将文档加载并切分成小块（Chunks）</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <strong className="text-gray-800">向量化与存储</strong>
              </div>
              <p className="text-sm text-gray-600 ml-11">将文本转换为向量（Embeddings）并存储到向量数据库</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <strong className="text-gray-800">用户提问</strong>
              </div>
              <p className="text-sm text-gray-600 ml-11">用户输入问题，将问题也转换为向量</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <strong className="text-gray-800">相似度检索</strong>
              </div>
              <p className="text-sm text-gray-600 ml-11">在向量数据库中找到最相关的文档片段</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                <strong className="text-gray-800">生成答案</strong>
              </div>
              <p className="text-sm text-gray-600 ml-11">将检索到的内容作为上下文，让 LLM 生成答案</p>
            </div>
          </div>
        </section>

        {/* 核心组件 */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🧩 RAG 核心组件</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <div className="font-semibold text-gray-800 mb-2">📄 Document Loaders</div>
              <p className="text-sm text-gray-600">加载各种格式的文档（PDF、Word、网页等）</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <div className="font-semibold text-gray-800 mb-2">✂️ Text Splitters</div>
              <p className="text-sm text-gray-600">将长文档切分成合适大小的片段</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <div className="font-semibold text-gray-800 mb-2">🔢 Embeddings</div>
              <p className="text-sm text-gray-600">将文本转换为向量表示</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <div className="font-semibold text-gray-800 mb-2">🗄️ Vector Stores</div>
              <p className="text-sm text-gray-600">存储和检索向量（Pinecone、Chroma、FAISS 等）</p>
            </div>
          </div>
        </section>

        {/* 代码示例 */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💻 代码示例（即将实现）</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";

// 1. 加载文档
const loader = new PDFLoader("company_handbook.pdf");
const docs = await loader.load();

// 2. 切分文档
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});
const splitDocs = await splitter.splitDocuments(docs);

// 3. 创建向量存储
const vectorStore = await MemoryVectorStore.fromDocuments(
  splitDocs,
  new OpenAIEmbeddings()
);

// 4. 创建 QA 链
const chain = RetrievalQAChain.fromLLM(
  new ChatOpenAI(),
  vectorStore.asRetriever()
);

// 5. 提问
const answer = await chain.call({
  query: "公司的请假政策是什么？"
});
// 输出: 基于文档内容的准确答案`}
          </pre>
        </section>

        {/* 即将推出 */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 border border-yellow-200 text-center">
          <div className="text-5xl mb-4">🚧</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">实践演示开发中...</h3>
          <p className="text-gray-600">
            RAG 功能需要向量数据库支持，演示即将上线！
          </p>
        </section>

        {/* 应用场景 */}
        <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">🎯 应用场景</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">📚 企业知识库问答</div>
              <p className="text-sm">基于公司文档回答员工问题</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">⚖️ 法律文档分析</div>
              <p className="text-sm">检索相关法条并给出解释</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">📄 文档摘要与搜索</div>
              <p className="text-sm">快速找到文档中的关键信息</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold mb-2">🎓 智能学习助手</div>
              <p className="text-sm">基于教材回答学生问题</p>
            </div>
          </div>
        </section>

        {/* 要点总结 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">✨ 关键要点</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1️⃣</span>
              <span>文档切分策略很重要，需要平衡上下文完整性和检索精度</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>选择合适的向量数据库，考虑性能和规模需求</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>可以添加元数据过滤，提高检索准确性</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>RAG 是构建企业级 AI 应用的核心技术</span>
            </li>
          </ul>
        </section>
      </div>
    </ModuleContainer>
  );
}

