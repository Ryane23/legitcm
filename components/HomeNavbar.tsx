"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavbar() {
  const pathname = usePathname();

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    const baseClasses = "font-['Inter'] text-sm scale-100 active:scale-95 transition-all outline-none";
    if (isActive) {
      return `${baseClasses} text-[#003ec7] dark:text-[#0052FF] font-bold border-b-2 border-[#003ec7] py-1`;
    }
    return `${baseClasses} text-[#131b2e] dark:text-slate-300 font-medium hover:bg-[#eaedff] dark:hover:bg-slate-800 px-3 py-1 rounded transition-colors duration-300`;
  };

  return (
    <header className="bg-[#faf8ff] dark:bg-slate-950 docked w-full top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <span className="font-['Manrope'] font-black tracking-[-0.02em] text-[#003ec7] dark:text-[#0052FF] text-2xl">Legit.cm</span>
          <nav className="hidden md:flex items-center gap-6">
            <Link className={getLinkClasses("/")} href="/">Home</Link>
            <Link className={getLinkClasses("/about")} href="/about">About Us</Link>
            <Link className={getLinkClasses("/documentary")} href="#">Documentary</Link>
            <Link className={getLinkClasses("/events")} href="#">Events</Link>
            <Link className={getLinkClasses("/pitch")} href="#">Pitch Hub</Link>
            <Link className={getLinkClasses("/community")} href="/community">Community</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-[#003ec7]">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button className="hidden md:block px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm hover:opacity-90 transition-all scale-100 active:scale-95">Get Started</button>
        </div>
      </div>
    </header>
  );
}