import NavBar from './NavBar';

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="p-5 bg-white dark:bg-gray-900 flex-1">{children}</div>
    </div>
  );
}
