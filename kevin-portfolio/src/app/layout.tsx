import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kevin Omondi Jr. – AI Developer',
  description: 'Self-taught AI developer from Kisumu, Kenya.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}