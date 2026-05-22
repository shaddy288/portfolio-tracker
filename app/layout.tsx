import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AssetFlow - Portfolio Tracker",
  description:
    "Track your equities, digital assets, and physical reserves securely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 flex h-screen overflow-hidden`}
      >
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-gray-200 font-bold text-xl text-blue-600">
            AssetFlow
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <a
              href="#"
              className="block px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Equities
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Digital Assets
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Physical Assets
            </a>
          </nav>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* HEADER */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
            <h1 className="text-xl font-semibold">Overview</h1>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              S
            </div>
          </header>

          {/* PAGE CONTENT (This loads page.tsx) */}
          <div className="p-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
