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
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
