import { JetBrains_Mono } from 'next/font/google';
import Sidebar from '../components/Sidebar';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
