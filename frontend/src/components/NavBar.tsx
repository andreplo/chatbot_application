import ThemeToggle from './ThemeToggle';

export default function NavBar() {
  return (
    <header className="flex flex-row justify-between items-center w-full p-4 bg-blue-800 sticky top-0 z-50 shadow-md">
      <h3 className="text-white">MilAI</h3>
      <ThemeToggle />
    </header>
  );
}
