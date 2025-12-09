import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "../components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Altavista",
  description: "Prototype Altavista – rencontres pro éthiques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* Conteneur principal : fond sombre et padding bas pour le menu */}
        <div className="min-h-screen bg-black text-zinc-50 pb-16">
          {children}
        </div>

        {/* Menu de navigation en bas */}
        <BottomNav />
      </body>
    </html>
  );
}
