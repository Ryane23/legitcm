"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    const baseClasses = "font-['Inter'] text-sm scale-100 active:scale-95 transition-all outline-none";
    if (isActive) {
      return `${baseClasses} text-[#003ec7] dark:text-[#0052FF] font-bold border-b-2 border-[#003ec7] py-1`;
    }
    return `${baseClasses} text-[#131b2e] dark:text-slate-300 font-medium hover:bg-[#eaedff] dark:hover:bg-slate-800 px-3 py-1 rounded transition-colors duration-300`;
  };

  return (
    <header className="bg-[#faf8ff] dark:bg-slate-950 docked w-full top-0 sticky z-50 relative">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <span className="font-['Manrope'] font-black tracking-[-0.02em] text-[#003ec7] dark:text-[#0052FF] text-2xl">Legit.cm</span>
          <nav className="hidden md:flex items-center gap-6">
            <Link className={getLinkClasses("/")} href="/">Home</Link>
            <Link className={getLinkClasses("/about")} href="/about">About Us</Link>
            <Link className={getLinkClasses("/documentary")} href="/documentary">Documentary</Link>
            <Link className={getLinkClasses("/events")} href="/events">Events</Link>
            <Link className={getLinkClasses("/pitch")} href="/pitch">Pitch Hub</Link>
            <Link className={getLinkClasses("/community")} href="/community">Community</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 text-[#003ec7]"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? "close" : "menu"}</span>
          </button>
          <button className="hidden md:block px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm hover:opacity-90 transition-all scale-100 active:scale-95">Get Started</button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute left-0 right-0 top-full px-6 pb-4 pt-2 border-t border-outline-variant/40 bg-[#faf8ff] shadow-[0_10px_30px_rgba(19,27,46,0.08)]">
          <div className="flex flex-col gap-1">
            <Link className={getLinkClasses("/")} href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link className={getLinkClasses("/about")} href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link className={getLinkClasses("/documentary")} href="/documentary" onClick={() => setIsMobileMenuOpen(false)}>Documentary</Link>
            <Link className={getLinkClasses("/events")} href="/events" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
            <Link className={getLinkClasses("/pitch")} href="/pitch" onClick={() => setIsMobileMenuOpen(false)}>Pitch Hub</Link>
            <Link className={getLinkClasses("/community")} href="/community" onClick={() => setIsMobileMenuOpen(false)}>Community</Link>
          </div>
        </nav>
      )}
    </header>
  );
}