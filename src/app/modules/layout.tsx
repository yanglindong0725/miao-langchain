import Sidebar from '@/components/layout/Sidebar';

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}

