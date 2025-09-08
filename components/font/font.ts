import { Kode_Mono, Poppins, Londrina_Sketch } from 'next/font/google';

export const kodeMono = Kode_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-second',
});

export const Londrina = Londrina_Sketch({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-third',
});
