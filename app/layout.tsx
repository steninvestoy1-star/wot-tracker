import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WoT Tracker',
  description: 'World of Tanks statistika jälgija ja kaardisoovitused',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="et">
      <body>{children}</body>
    </html>
  );
}
