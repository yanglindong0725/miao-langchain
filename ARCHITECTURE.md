# LangChain 学习平台 - 架构说明

## 📁 项目结构

```
src/
├── app/
│   ├── page.tsx                    # 首页 - 模块导航页面
│   ├── layout.tsx                  # 全局布局
│   ├── modules/                    # 学习模块区域
│   │   ├── layout.tsx             # 模块统一布局（含侧边栏）
│   │   ├── basic/                 # 基础概念模块
│   │   │   ├── prompt-templates/
│   │   │   │   └── page.tsx
│   │   │   ├── chains/
│   │   │   │   └── page.tsx
│   │   │   └── few-shot/
│   │   │       └── page.tsx
│   │   ├── advanced/              # 进阶功能模块
│   │   │   ├── memory/
│   │   │   │   └── page.tsx
│   │   │   ├── agents/
│   │   │   │   └── page.tsx
│   │   │   └── rag/
│   │   │       └── page.tsx
│   │   └── practical/             # 实战应用模块
│   │       ├── chatbot/
│   │       │   └── page.tsx
│   │       └── document-qa/
│   │           └── page.tsx
│   └── api/
│       └── chat/
│           └── route.ts           # API 路由（现有）
├── components/
│   ├── layout/
│   │   └── Sidebar.tsx           # 侧边栏导航组件
│   └── shared/
│       ├── ModuleContainer.tsx   # 模块页面容器组件
│       └── DemoSection.tsx       # 交互演示区组件
└── lib/
    └── constants.ts              # 模块配置与常量
```

## 🎯 核心设计理念

### 1. **模块化架构**
- 每个 LangChain 主题作为独立模块
- 按难度分类：基础 → 进阶 → 实战
- 易于扩展新模块

### 2. **统一的用户体验**
- 所有模块页面使用统一的布局和组件
- 侧边栏导航提供清晰的学习路径
- 响应式设计，适配各种设备

### 3. **理论与实践结合**
- 每个模块包含理论说明
- 提供代码示例
- 可交互的实践演示
- 要点总结

## 📦 关键组件说明

### `Sidebar.tsx` - 侧边栏导航
- 展示所有学习模块
- 按分类组织（基础、进阶、实战）
- 高亮当前活跃模块
- 响应式折叠（可扩展）

### `ModuleContainer.tsx` - 模块容器
- 统一的模块页面头部
- 包含标题、描述、图标
- 提供一致的内容区样式

### `DemoSection.tsx` - 交互演示组件
- 可复用的演示区组件
- 处理用户输入和 API 调用
- 显示加载状态和结果
- 可自定义请求/响应转换

### `constants.ts` - 配置中心
- 所有模块的元数据配置
- 路由路径定义
- 便于统一管理和修改

## 🚀 如何添加新模块

### 步骤 1：在 `constants.ts` 中注册模块

```typescript
{
  id: 'new-module',
  title: '新模块名称',
  description: '模块描述',
  icon: '🎨',
  path: '/modules/category/new-module',
}
```

### 步骤 2：创建页面文件

在 `src/app/modules/[分类]/[模块名]/page.tsx` 创建新页面：

```typescript
'use client';

import ModuleContainer from '@/components/shared/ModuleContainer';
import DemoSection from '@/components/shared/DemoSection';

export default function NewModulePage() {
  return (
    <ModuleContainer
      title="新模块名称"
      description="模块描述"
      icon="🎨"
    >
      {/* 模块内容 */}
    </ModuleContainer>
  );
}
```

### 步骤 3：（可选）创建 API 路由

如果需要后端交互，在 `src/app/api/` 下创建相应的路由文件。

## 🎨 设计规范

### 颜色方案
- 主色调：蓝色系（品牌色）
- 背景：渐变色（blue-50 to indigo-50）
- 强调色：根据不同模块使用不同颜色
  - 基础：蓝色/绿色
  - 进阶：紫色/粉色
  - 实战：橙色/红色

### 组件风格
- 圆角：`rounded-lg` 或 `rounded-xl`
- 阴影：`shadow-md` 或 `shadow-xl`
- 间距：使用 Tailwind 的标准间距系统
- 字体：默认系统字体栈

## 🔄 导航流程

1. **首页** (`/`)
   - 展示所有模块的卡片网格
   - 按分类组织
   - 点击卡片进入对应模块

2. **模块页面** (`/modules/[category]/[module]`)
   - 左侧：固定侧边栏导航
   - 右侧：模块内容区
   - 可以通过侧边栏快速切换模块

## 📈 扩展建议

### 短期扩展
1. 完善进阶模块的实践演示（Memory、Agents、RAG）
2. 添加代码高亮和可复制功能
3. 增加"试一试"按钮，预填充示例输入

### 中期扩展
1. 添加用户学习进度跟踪
2. 增加模块间的依赖关系提示
3. 提供可下载的代码示例
4. 添加模块内部的子章节导航

### 长期扩展
1. 用户评论和反馈系统
2. 交互式代码编辑器（在线运行）
3. 视频教程集成
4. 社区分享的示例库
5. 多语言支持

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **AI**: LangChain + DeepSeek API
- **状态管理**: React Hooks
- **路由**: Next.js 文件系统路由

## 📚 现有模块概览

### 基础概念
- ✅ Prompt Templates - 提示词模板
- ✅ Chains - 链式调用
- ✅ Few-shot Learning - 少样本学习

### 进阶功能
- 🚧 Memory - 记忆系统
- 🚧 Agents - 智能代理
- 🚧 RAG - 检索增强生成

### 实战应用
- 🚧 智能聊天机器人
- 🚧 文档问答系统

图例：✅ 已完成 | 🚧 开发中

## 🤝 贡献指南

添加新模块时，请确保：
1. 遵循现有的组件和样式规范
2. 提供清晰的理论说明
3. 包含实际的代码示例
4. 如有可能，提供交互式演示
5. 总结关键要点

---

**Happy Learning! 🚀**

