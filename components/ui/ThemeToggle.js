"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[104px] h-[36px] opacity-0" />; // prevent hydration mismatch
  }

  return (
    <div className="relative flex items-center p-1 gap-1 bg-zinc-200/50 dark:bg-zinc-900/80 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-inner backdrop-blur-md">
      {/* Sliding Active Pill Background */}
      <div
        className="absolute inset-y-1 left-1 w-7 bg-white dark:bg-zinc-700 rounded-full shadow-sm transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(${theme === 'system' ? '32px' : theme === 'dark' ? '64px' : '0px'})`
        }}
      />

      <button
        onClick={() => setTheme('light')}
        className={`relative z-10 p-1.5 rounded-full transition-all duration-300 ${theme === 'light' ? 'text-amber-500 scale-110' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 scale-100 hover:scale-105'}`}
        aria-label="Light mode"
        title="Light theme"
      >
        <Sun size={16} strokeWidth={2.5} />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`relative z-10 p-1.5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'text-indigo-500 dark:text-indigo-400 scale-110' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 scale-100 hover:scale-105'}`}
        aria-label="Dark mode"
        title="Dark theme"
      >
        <Moon size={16} strokeWidth={2.5} />
      </button>
    </div>
  );
}
