'use client';

import { ReactNode } from 'react';

interface ModuleContainerProps {
  title: string;
  description: string;
  icon?: string;
  children: ReactNode;
}

export default function ModuleContainer({
  title,
  description,
  icon,
  children,
}: ModuleContainerProps) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* 模块头部 */}
      <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
        <div className="flex items-start">
          {icon && <span className="text-5xl mr-4">{icon}</span>}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* 模块内容 */}
      <div className="bg-white rounded-xl shadow-sm p-8">{children}</div>
    </div>
  );
}

