import Link from "next/link";

export default function AboutFooter() {
  return (
    <footer className="bg-[#eaedff] dark:bg-[#131b2e] w-full py-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <span className="font-['Manrope'] text-2xl font-bold text-[#0052ff]">Legit.cm Incubation.</span>
          <p className="max-w-sm font-['Inter'] text-sm tracking-wide text-[#131b2e]/70 dark:text-[#faf8ff]/70">
            © 2024 Legit.cm Incubation. Precision in Growth.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-center sm:flex sm:flex-wrap sm:justify-center md:gap-8">
          <Link className="font-['Inter'] text-sm tracking-wide text-[#0052ff] font-semibold hover:underline decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-80" href="#">Our Vision</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-[#131b2e]/70 dark:text-[#faf8ff]/70 hover:underline decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-80" href="#">The Community</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-[#131b2e]/70 dark:text-[#faf8ff]/70 hover:underline decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-80" href="#">Documentary</Link>
          <Link className="font-['Inter'] text-sm tracking-wide text-[#131b2e]/70 dark:text-[#faf8ff]/70 hover:underline decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-80" href="#">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
