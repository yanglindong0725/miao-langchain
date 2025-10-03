// 模块导航配置
export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export interface ModuleCategory {
  category: string;
  description: string;
  modules: ModuleItem[];
}

export const MODULES: ModuleCategory[] = [
  {
    category: '基础概念',
    description: 'LangChain 核心概念与基本用法',
    modules: [
      {
        id: 'prompt-templates',
        title: 'Prompt Templates',
        description: '学习如何创建和使用提示词模板',
        icon: '📝',
        path: '/modules/basic/prompt-templates',
      },
      {
        id: 'chains',
        title: 'Chains',
        description: '链式调用，将多个组件组合在一起',
        icon: '⛓️',
        path: '/modules/basic/chains',
      },
      {
        id: 'few-shot',
        title: 'Few-shot Learning',
        description: '通过少量示例教会模型完成任务',
        icon: '🎯',
        path: '/modules/basic/few-shot',
      },
    ],
  },
  {
    category: '进阶功能',
    description: '更复杂的 LangChain 应用场景',
    modules: [
      {
        id: 'memory',
        title: 'Memory',
        description: '为对话添加记忆能力',
        icon: '🧠',
        path: '/modules/advanced/memory',
      },
      {
        id: 'agents',
        title: 'Agents',
        description: '智能代理，让 AI 自主决策和调用工具',
        icon: '🤖',
        path: '/modules/advanced/agents',
      },
      {
        id: 'rag',
        title: 'RAG (检索增强生成)',
        description: '结合外部知识库的 AI 问答',
        icon: '📚',
        path: '/modules/advanced/rag',
      },
    ],
  },
  {
    category: '实战应用',
    description: '综合应用案例',
    modules: [
      {
        id: 'chatbot',
        title: '智能聊天机器人',
        description: '构建完整的对话系统',
        icon: '💬',
        path: '/modules/practical/chatbot',
      },
      {
        id: 'document-qa',
        title: '文档问答系统',
        description: '基于文档的智能问答',
        icon: '📄',
        path: '/modules/practical/document-qa',
      },
    ],
  },
];

// 获取所有模块的扁平列表
export const getAllModules = (): ModuleItem[] => {
  return MODULES.flatMap((category) => category.modules);
};

// 根据路径查找模块
export const findModuleByPath = (path: string): ModuleItem | undefined => {
  return getAllModules().find((module) => module.path === path);
};

