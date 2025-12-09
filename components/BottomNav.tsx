"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/directory", label: "Annuaire", icon: "👥" },
  { href: "/agenda", label: "Agenda", icon: "📅" },
  { href: "/contacts", label: "Rencontres", icon: "🤝" },
  { href: "/profile", label: "Profil", icon: "👤" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-black/95 text-zinc-400 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-2">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-xs ${
                isActive ? "text-white" : "text-zinc-500"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
