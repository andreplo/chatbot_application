import ThemeToggle from './ThemeToggle';

export default function NavBar() {
  return (
    <header className="flex flex-row justify-between items-center w-full p-4 bg-blue-800 sticky top-0 z-50 shadow-md">
      {/* <header className="relative w-full h-32 after:block after:border-b-2 after:border-gray-900 dark:after:border-white after:w-[75%] after:mx-auto after:absolute after:bottom-0"> */}
      <h3 className="text-white">PloumpisChatbot</h3>
      <ThemeToggle />
    </header>
  );
}
