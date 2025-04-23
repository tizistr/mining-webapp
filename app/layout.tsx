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
      <body className={`${jetBrainsMono.className} bg-[#FFFFF4] font-bold text-[#191970] cursor-[url("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path d=\"M5 5h8l3 12L28 5h-8l-3 12L5 5z\" fill=\"%23191970\"/><path d=\"M5 5l12 12L5 27h8l3-12L28 27h-8l-3-12L5 5z\" fill=\"none\" stroke=\"%23191970\" stroke-width=\"2\"/></svg>"),_auto]`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <div className="bg-[#FFFFF4] p-2 flex items-center justify-between">
              <h1 className="text-2xl lowercase transition-all duration-300 hover:text-shadow-[0_0_8px_rgba(25,25,112,0.8)]">re-sort</h1>
              <input
                type="text"
                placeholder="Search..."
                className="p-1 bg-[#FFFFF4] placeholder-[#191970]/50 focus:outline-none transition-all duration-200 w-1/4 border-none font-jetbrains font-bold"
              />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

