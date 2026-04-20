import Link from "next/link";

export default function AboutFooter() {
  return (
    <footer className="bg-[#eaedff] dark:bg-[#131b2e] w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-['Manrope'] font-bold text-[#0052ff]">Legit.cm Incubation.</span>
          <p className="text-[#131b2e]/70 dark:text-[#faf8ff]/70 font-['Inter'] text-sm tracking-wide">© 2024 Legit.cm Incubation. Precision in Growth.</p>
        </div>
        <div className="flex gap-8">
          <Link className="text-[#0052ff] font-semibold font-['Inter'] text-sm tracking-wide hover:underline decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-80" href="#">Our Vision</Link>
          <Link className="text-[#131b2e]/70 dark:text-[#faf8ff]/70 font-['Inter'] text-sm tracking-wide hover:underline decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-80" href="#">The Community</Link>
          <Link className="text-[#131b2e]/70 dark:text-[#faf8ff]/70 font-['Inter'] text-sm tracking-wide hover:underline decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-80" href="#">Documentary</Link>
          <Link className="text-[#131b2e]/70 dark:text-[#faf8ff]/70 font-['Inter'] text-sm tracking-wide hover:underline decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-80" href="#">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}