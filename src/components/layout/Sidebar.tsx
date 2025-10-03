'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MODULES } from '@/lib/constants';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r border-gray-200 h-screen overflow-y-auto sticky top-0">
      {/* Logo / 标题 */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/" className="block">
          <h1 className="text-2xl font-bold text-gray-800">LangChain 学习</h1>
          <p className="text-sm text-gray-500 mt-1">从基础到实战</p>
        </Link>
      </div>

      {/* 导航菜单 */}
      <nav className="p-4">
        {MODULES.map((category) => (
          <div key={category.category} className="mb-6">
            <div className="px-3 mb-2">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {category.category}
              </h2>
              <p className="text-xs text-gray-400 mt-1">{category.description}</p>
            </div>
            <ul className="space-y-1">
              {category.modules.map((module) => {
                const isActive = pathname === module.path;
                return (
                  <li key={module.id}>
                    <Link
                      href={module.path}
                      className={`
                        flex items-start px-3 py-2.5 rounded-lg transition-all
                        ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 shadow-sm'
                            : 'text-gray-700 hover:bg-gray-50'
                        }
                      `}
                    >
                      <span className="text-xl mr-3 flex-shrink-0">{module.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium text-sm ${isActive ? 'text-blue-700' : ''}`}>
                          {module.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                          {module.description}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* 底部信息 */}
      <div className="p-4 border-t border-gray-200 mt-auto">
        <div className="text-xs text-gray-500 text-center">
          <p>基于 Next.js + LangChain</p>
          <p className="mt-1">DeepSeek API</p>
        </div>
      </div>
    </aside>
  );
}

