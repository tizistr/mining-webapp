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
          <div className="flex-1">
            <div className="bg-[#FDF5E6] p-4 sm:p-6 flex items-center justify-between">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1E90FF] lowercase">re-sort</h1>
              <input
                type="text"
                placeholder="Search..."
                className="p-2 sm:p-3 rounded-lg bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 shadow-sm w-1/3 sm:w-1/4"
              />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
