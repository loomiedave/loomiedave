'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      themes={['light', 'dark']}
      enableSystem={true}
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}
