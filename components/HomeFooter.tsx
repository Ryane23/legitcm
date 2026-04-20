import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="bg-[#f2f3ff] dark:bg-slate-900 w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-['Manrope'] font-extrabold text-[#131b2e] dark:text-white text-2xl">Legit.cm</span>
          <p className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 opacity-100 hover:opacity-80 transition-opacity">© 2024 Legit.cm Inc. Precision in Incubation.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-8">
          <Link className="font-['Inter'] text-sm tracking-wide text-[#003ec7] font-semibold hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Home</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Events</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Community</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Pitch</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Privacy</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Terms</Link>
        </nav>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined text-lg">public</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined text-lg">alternate_email</span>
          </button>
        </div>
      </div>
    </footer>
  );
}