import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Antares Apps Manager',
  description: 'Antares Operations Team intraweb Apps Manager'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
