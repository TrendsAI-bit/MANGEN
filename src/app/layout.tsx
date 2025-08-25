import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Manga Generations — Vintage Manga Layout",
  description: "Fuel the Manga Generation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="page">
          {/* Masthead with Logo */}
          <div className="masthead">
            <div className="logo-container">
              <Image 
                src="/mangenlogo.png" 
                alt="MANGEN Logo" 
                width={120} 
                height={90} 
                className="logo"
                priority
                unoptimized
              />
            </div>
            マンゲン
          </div>

          {/* Navigation Tabs */}
          <nav className="tabs">
            <Link href="/" className="tab">ABOUT</Link>
            <Link href="/create" className="tab">CREATE</Link>
            <Link href="/vote" className="tab">VOTE</Link>
            <Link href="/winners" className="tab">WINNERS</Link>
            <Link href="/profile" className="tab">PROFILE</Link>
          </nav>

          {children}

          {/* Footer */}
          <div className="footer">
            <span>© 2025 Manga Generations</span>
            <span>$MANGEN — Fuel the Manga Generation</span>
          </div>
        </main>
      </body>
    </html>
  );
}
