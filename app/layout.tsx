import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "./components/Logo";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Хайде! — Learn Bulgarian",
  description: "Learn Bulgarian with flashcards, quizzes and grammar lessons. Хайде! Let's go!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${geist.className} min-h-screen`} style={{ background: "#FAFAF7" }}>
        {/* Top accent stripe — Bulgarian flag colours */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #ffffff 33%, #00966E 33%, #00966E 66%, #D62612 66%)" }} />

        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center gap-3 shadow-sm">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo size={36} />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tight" style={{ color: "#1A6B45" }}>Хайде!</span>
              <span className="text-xs text-gray-400 font-normal">Learn Bulgarian</span>
            </div>
          </Link>

          <nav className="ml-auto flex gap-1 text-sm font-medium">
            <Link href="/flashcards" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-800 transition-colors">Flashcards</Link>
            <Link href="/quiz" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-800 transition-colors">Quiz</Link>
            <Link href="/browse" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-800 transition-colors">Browse</Link>
            <Link href="/learn" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-800 transition-colors">Learn</Link>
          </nav>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
