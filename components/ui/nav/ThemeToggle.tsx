'use client';

import { MonitorIcon, MoonStarIcon, SunIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from 'next-themes';
import type { JSX } from 'react';
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const THEME_CYCLE = ['light', 'dark' /*'system'*/] as const;

const THEME_ICONS: Record<string, JSX.Element> = {
  light: <SunIcon />,
  dark: <MoonStarIcon />,
  system: <MonitorIcon />,
};

const THEME_LABELS: Record<string, string> = {
  light: 'Light theme',
  dark: 'Dark theme',
  // system: 'System theme',
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getNextTheme = (currentTheme: string): string => {
    const currentIndex = THEME_CYCLE.indexOf(currentTheme as any);
    if (currentIndex === -1) return THEME_CYCLE[0];
    return THEME_CYCLE[(currentIndex + 1) % THEME_CYCLE.length];
  };

  const handleToggle = () => {
    const nextTheme = getNextTheme(theme || 'system');
    setTheme(nextTheme);
  };

  if (!isMounted) {
    return <div className="flex h-10 w-10" />;
  }

  const currentIcon = THEME_ICONS[theme || 'system'];
  const currentLabel = THEME_LABELS[theme || 'system'];
  const nextTheme = getNextTheme(theme || 'system');
  const nextLabel = THEME_LABELS[nextTheme];

  return (
    <motion.button
      key={String(isMounted)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative flex size-8 items-center justify-center rounded-full transition-all',
        'bg-white ring-1 ring-zinc-200 ring-inset dark:bg-zinc-950 dark:ring-zinc-700',
        'text-zinc-950 dark:text-zinc-50',
        'hover:ring-zinc-300 dark:hover:ring-zinc-600',
        'focus:outline-none',
        '[&_svg]:size-5'
      )}
      onClick={handleToggle}
      aria-label={`Currently ${currentLabel}. Click to switch to ${nextLabel}`}
      title={`Switch to ${nextLabel}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
        >
          {currentIcon}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}

export { ThemeToggle };
