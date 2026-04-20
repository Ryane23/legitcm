import Link from "next/link";

export default function AboutNavbar() {
  return (
    <nav className="bg-[#faf8ff]/80 dark:bg-[#131b2e]/80 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_8px_30px_rgb(19,27,46,0.04)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0052ff]">waves</span>
          <span className="text-2xl font-['Manrope'] font-black tracking-tighter text-[#0052ff]">Legit.cm</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-[#0052ff] border-b-2 border-[#0052ff] pb-1 font-['Inter'] font-medium transition-all duration-300" href="#">Our Vision</Link>
          <Link className="text-[#131b2e]/60 dark:text-[#faf8ff]/60 font-['Inter'] font-medium hover:text-[#0052ff] transition-all duration-300" href="#">The Community</Link>
          <Link className="text-[#131b2e]/60 dark:text-[#faf8ff]/60 font-['Inter'] font-medium hover:text-[#0052ff] transition-all duration-300" href="#">Documentary</Link>
        </div>
        <button className="hero-gradient text-on-primary px-6 py-2.5 rounded-full font-headline font-bold text-sm tracking-tight active:scale-95 duration-200 shadow-lg">
          Join Platform
        </button>
      </div>
    </nav>
  );
}