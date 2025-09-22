import type { Metadata } from 'next';

import './globals.css';
import { kodeMono, poppins } from '@/components/font/font';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Benjamin David',
  description: 'Full-Stack Developer',
  icons: '/spiderman.jpg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${kodeMono.variable} ${poppins.variable} ${kodeMono.className} antialiased bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
