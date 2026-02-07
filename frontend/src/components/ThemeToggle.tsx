import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-4 py-2 rounded-lg bg-zinc-200 text-zinc-900 hover:cursor-pointer"
    >
      {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
    </button>
  );
}
