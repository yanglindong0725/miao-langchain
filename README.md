# 🎓 Miao LangChain 学习平台

<div align="center">

**一个互动式的 LangChain 学习平台，通过实践掌握 AI 应用开发**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![LangChain](https://img.shields.io/badge/LangChain-0.3.35-green?style=flat-square)](https://www.langchain.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[在线演示](#) | [快速开始](#-快速开始) | [文档](./ARCHITECTURE.md) | [贡献指南](#-贡献)

</div>

---

## ✨ 项目简介

Miao LangChain 是一个渐进式的 LangChain 学习平台，旨在帮助开发者从零开始系统学习和实践 LangChain 框架。通过理论讲解、代码示例和交互式演示，让你快速掌握构建 AI 应用的核心技能。

### 🎯 为什么选择这个平台？

- **📚 系统化学习路径** - 从基础概念到实战应用，循序渐进
- **💡 交互式实践** - 每个模块都提供可实际运行的演示
- **🎨 现代化设计** - 优雅的 UI/UX，流畅的学习体验
- **🔄 即时反馈** - 实时查看代码运行结果，快速迭代
- **📖 完整文档** - 详细的架构说明和开发指南

---

## 🚀 功能特性

### 📖 基础概念模块
- **Prompt Templates（提示词模板）** - 学习如何设计和管理 AI 提示词
- **Chains（链式调用）** - 掌握复杂任务的链式处理流程
- **Few-shot Learning（少样本学习）** - 通过示例提升 AI 输出质量

### 🎓 进阶功能模块
- **Memory（记忆系统）** - 构建具有上下文记忆的对话系统
- **Agents（智能代理）** - 创建自主决策的智能 AI 代理
- **RAG（检索增强生成）** - 结合外部知识库提升回答准确性

### 💼 实战应用模块
- **智能聊天机器人** - 构建企业级对话助手
- **文档问答系统** - 基于文档的智能问答应用

---

## 🛠️ 技术栈

<table>
  <tr>
    <td align="center"><b>前端框架</b></td>
    <td>Next.js 15（App Router）+ React 19</td>
  </tr>
  <tr>
    <td align="center"><b>开发语言</b></td>
    <td>TypeScript 5</td>
  </tr>
  <tr>
    <td align="center"><b>样式方案</b></td>
    <td>Tailwind CSS 4</td>
  </tr>
  <tr>
    <td align="center"><b>AI 框架</b></td>
    <td>LangChain 0.3.35</td>
  </tr>
  <tr>
    <td align="center"><b>LLM 提供商</b></td>
    <td>OpenAI、DeepSeek（可配置）</td>
  </tr>
  <tr>
    <td align="center"><b>包管理器</b></td>
    <td>pnpm</td>
  </tr>
</table>

---

## 📦 快速开始

### 前置要求

- Node.js 18.0 或更高版本
- pnpm 8.0 或更高版本（推荐）
- OpenAI API Key 或 DeepSeek API Key

### 安装步骤

1. **克隆项目**

```bash
git clone https://github.com/yanglindong0725/miao-langchain.git
cd miao-langchain
```

2. **安装依赖**

```bash
pnpm install
```

3. **配置环境变量**

在项目根目录创建 `.env.local` 文件：

```env
# OpenAI 配置
OPENAI_API_KEY=your_openai_api_key_here

# 或者使用 DeepSeek
# OPENAI_API_KEY=your_deepseek_api_key_here
# OPENAI_BASE_URL=https://api.deepseek.com
```

4. **启动开发服务器**

```bash
pnpm dev
```

5. **访问应用**

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 其他命令

```bash
# 生产构建
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint
```

---

## 📁 项目结构

```
miao-langchain/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # 首页 - 模块导航
│   │   ├── layout.tsx               # 全局布局
│   │   ├── modules/                 # 学习模块
│   │   │   ├── layout.tsx          # 模块布局（含侧边栏）
│   │   │   ├── basic/              # 基础模块
│   │   │   ├── advanced/           # 进阶模块
│   │   │   └── practical/          # 实战模块
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts        # API 路由
│   ├── components/
│   │   ├── layout/
│   │   │   └── Sidebar.tsx        # 侧边栏导航
│   │   └── shared/
│   │       ├── ModuleContainer.tsx # 模块容器
│   │       └── DemoSection.tsx    # 演示组件
│   └── lib/
│       └── constants.ts           # 配置与常量
├── public/                        # 静态资源
├── ARCHITECTURE.md               # 架构文档
└── README.md                     # 本文件
```

详细的架构说明请查看 [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 📚 学习路径

### 第一阶段：基础入门（1-2 周）
1. 了解 LangChain 的核心概念
2. 学习 Prompt Templates 的设计原则
3. 掌握 Chains 的基本用法
4. 实践 Few-shot Learning 技巧

### 第二阶段：进阶提升（2-3 周）
1. 实现对话记忆管理
2. 构建智能 Agent 系统
3. 集成 RAG 检索增强生成

### 第三阶段：实战项目（3-4 周）
1. 开发完整的聊天机器人
2. 构建文档问答系统
3. 优化性能和用户体验

---

## 🔧 开发指南

### 添加新模块

1. 在 `src/lib/constants.ts` 中注册模块：

```typescript
{
  id: 'new-module',
  title: '新模块',
  description: '模块描述',
  icon: '🎨',
  path: '/modules/category/new-module',
}
```

2. 创建页面文件 `src/app/modules/[category]/[module]/page.tsx`

3. 使用共享组件快速构建页面：

```typescript
import ModuleContainer from '@/components/shared/ModuleContainer';
import DemoSection from '@/components/shared/DemoSection';

export default function NewModulePage() {
  return (
    <ModuleContainer title="新模块" description="描述" icon="🎨">
      {/* 你的内容 */}
    </ModuleContainer>
  );
}
```

详细指南请参考 [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议！

### 贡献流程

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 贡献准则

- 遵循现有的代码风格和架构
- 为新功能添加相应的文档
- 确保代码通过 ESLint 检查
- 提供清晰的提交信息

---

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---

## 🙏 致谢

- [LangChain](https://www.langchain.com/) - 强大的 LLM 应用开发框架
- [Next.js](https://nextjs.org/) - React 生产级框架
- [Vercel](https://vercel.com/) - 部署平台
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架

---

## 📞 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/miao-langchain/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/miao-langchain/discussions)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给个 Star！⭐**

Made with ❤️ by [Your Name]

</div>
