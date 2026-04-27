import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="bg-[#f2f3ff] dark:bg-slate-900 w-full py-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <span className="font-['Manrope'] text-2xl font-extrabold text-[#131b2e] dark:text-white">Legit.cm</span>
          <p className="max-w-sm font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400">
            © 2024 Legit.cm Inc. Precision in Incubation.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-center sm:flex sm:flex-wrap sm:justify-center md:gap-8">
          <Link className="font-['Inter'] text-sm tracking-wide text-[#003ec7] font-semibold hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Home</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Events</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Community</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Pitch</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Privacy</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0052FF] underline-offset-4 hover:underline transition-all" href="#">Terms</Link>
        </nav>

        <div className="flex items-center justify-center gap-4 md:justify-end">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container transition-colors hover:bg-primary-fixed">
            <span className="material-symbols-outlined text-lg">public</span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container transition-colors hover:bg-primary-fixed">
            <span className="material-symbols-outlined text-lg">alternate_email</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
