import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hop’n’Shop',
  description: 'Welcome to the Hop’n’Shop',
};
const dmSans = DM_Sans({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
