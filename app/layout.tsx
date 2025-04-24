import { JetBrains_Mono } from "next/font/google";
import Sidebar from "../components/Sidebar";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} bg-[#FFFFF4] font-bold text-[#191970] cursor-[url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path d=\"M12 4h8v4h-8zM12 8h12v4h-12zM12 12h16v4h-16zM8 4l8 12-8 12h8l4-8 4 8h8l-8-12 8-12h-8l-4 8-4-8z\" fill=\"%23191970\" stroke=\"%23191970\" stroke-width=\"1\"/></svg>"),_auto]`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <div className="bg-[#FFFFF4] p-2 flex items-center justify-between">
              <h1 className="text-2xl lowercase transition-all duration-300 hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)]">re-sort</h1>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`${jetBrainsMono.className} p-1 bg-[#FFFFF4] placeholder-[#191970] focus:outline-none transition-all duration-200 w-1/4 border-none font-bold text-lg hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)]`}
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

