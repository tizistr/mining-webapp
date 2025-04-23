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
      <body className={`${jetBrainsMono.className} bg-[#FFFFF4] font-bold text-[#191970]`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <div className="bg-[#FFFFF4] p-4 sm:p-6 flex items-center justify-between">
              <h1 className="text-3xl sm:text-4xl lowercase">re-sort</h1>
              <input
                type="text"
                placeholder="Search..."
                className="p-2 sm:p-3 rounded-lg bg-[#FFFFF4] placeholder-[#191970]/50 focus:outline-none focus:ring-2 focus:ring-[#191970]/50 transition-all duration-200 w-1/3 sm:w-1/4"
              />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
