import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manga Generations",
  description: "Create and vote on manga stories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <header className="bg-black text-white p-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center">マンガジェネレーション</h1>
            <nav className="mt-4 flex justify-center space-x-8">
              <Link href="/" className="hover:text-blue-400">HOME</Link>
              <Link href="/create" className="hover:text-blue-400">CREATE</Link>
              <Link href="/vote" className="hover:text-blue-400">VOTE</Link>
              <Link href="/winners" className="hover:text-blue-400">WINNERS</Link>
              <Link href="/profile" className="hover:text-blue-400">PROFILE</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-black text-white p-4 text-center">
          © 2024 Manga Generations
        </footer>
      </body>
    </html>
  );
}
