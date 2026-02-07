import NavBar from './NavBar';

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="p-5 bg-white dark:bg-gray-900 min-h-screen">{children}</div>
    </>
  );
}
