import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";
import Link from "next/link";

export default function PitchHub() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `
      }} />
      <HomeNavbar />
      
      <main className="max-w-7xl mx-auto pt-4 md:pt-8 pb-24">
        {/* Hero Section */}
        <section className="px-6 pt-8 md:pt-10 pb-16 text-center md:text-left md:flex md:items-center md:gap-12 relative z-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container-low text-primary font-semibold text-xs tracking-widest uppercase mb-4">
              Spring Cohort 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface leading-[1.1]">
              Launch Your <span className="text-primary">Dream</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-xl mx-auto md:mx-0">
              Secure funding and mentorship for your next big idea. We bridge the gap between innovation and capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Link href="/pitch" className="h-14 min-w-[190px] px-8 bg-primary text-white font-bold rounded-full border border-primary shadow-lg shadow-primary/20 hover:bg-primary-container hover:scale-[1.02] transition-all active:scale-95 inline-flex items-center justify-center">
                Submit Your Pitch
              </Link>
              <Link href="/events" className="h-14 min-w-[190px] px-8 bg-surface-container-high text-primary font-bold rounded-full border border-outline-variant/40 hover:bg-surface-container-highest transition-colors inline-flex items-center justify-center">
                View Tracks
              </Link>
            </div>
          </div>
          <div className="hidden lg:block flex-1 relative">
            <div className="aspect-square rounded-xl bg-surface-container-low overflow-hidden shadow-2xl relative">
              <img alt="Modern Workspace" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr4vEvbnGUiXZuYrmbZz_CpFHoXON8xiVgWj6kqIqJPNcXYWvXQy85yEojlB9sO5YTMkbhO4Slih7QQtUImhJZNuBlxr44z96JHMMEW7k_ltZrOhgwiSmapT9dwGpQodu7MQXecpBFf_UfGNfiHXZC_ezHUzts_Ts3hQpN6Co_ovta-4V1gyKU23ganDV7fuQH-cZ9DMpdUxvRlDgszV8qs5xaL-XouhGtTfIBOUFdz3Ulfw5PohD2cQgLpLbwPX7lfNkIF2qKMe4"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Application Tracking (Status Card) */}
        <section className="px-6 mb-16">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_30px_60px_-15px_rgba(19,27,46,0.06)] border border-outline-variant/15">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Active Application</span>
                <h3 className="text-2xl font-headline font-bold text-on-surface">EcoScale Logistics AI</h3>
                <p className="text-secondary">Submitted on Oct 12, 2023</p>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low px-6 py-4 rounded-xl">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle className="text-surface-container-high" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
                    <circle className="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="31.4" strokeWidth="4"></circle>
                  </svg>
                  <span className="absolute text-[10px] font-bold text-primary">75%</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">In Review</p>
                  <p className="text-xs text-secondary">Final Committee Round</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Tracks (Bento Grid) */}
        <section className="px-6 mb-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">Funding Tracks</h2>
              <p className="text-secondary mt-1">Specialized paths for every stage of growth.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Track 1 */}
            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
              <div>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">child_care</span>
                </div>
                <h4 className="text-xl font-headline font-bold mb-3">Pre-Seed Accelerator</h4>
                <p className="text-secondary text-sm leading-relaxed mb-8">For early stage founders turning a MVP into a scalable business model with $50k funding.</p>
              </div>
              <button className="w-full py-3 bg-white text-primary font-bold rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all">Apply</button>
            </div>
            {/* Track 2 (Hero) */}
            <div className="bg-primary text-white rounded-xl p-8 flex flex-col justify-between md:scale-105 shadow-xl shadow-primary/20">
              <div>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-3xl">rocket</span>
                </div>
                <h4 className="text-xl font-headline font-bold mb-3">Series A Growth</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-8">Fueling rapid expansion for proven companies with up to $2M in equity-backed investment.</p>
              </div>
              <button className="w-full py-3 bg-white text-primary font-bold rounded-full hover:bg-primary-fixed transition-all">Apply Now</button>
            </div>
            {/* Track 3 */}
            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
              <div>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-tertiary text-3xl">public</span>
                </div>
                <h4 className="text-xl font-headline font-bold mb-3">Impact Fund</h4>
                <p className="text-secondary text-sm leading-relaxed mb-8">Dedicated support for social enterprises and green-tech startups changing the world.</p>
              </div>
              <button className="w-full py-3 bg-white text-primary font-bold rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all">Apply</button>
            </div>
          </div>
        </section>

        {/* Pitch Showcase (Horizontal Scroll) */}
        <section className="mb-16 overflow-hidden">
          <div className="px-6 mb-8">
            <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface">Successful Pitches</h2>
            <p className="text-secondary mt-1">Innovators who secured funding this quarter.</p>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-6 px-6 pb-6">
            {/* Startup 1 */}
            <div className="flex-none w-72 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <div className="h-40 bg-surface-dim">
                <img alt="Startup Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzMcw-tPezyIZfUwOW9afCjLxEk5Mj0GKzrbBVB_AhYBpSJnvqmLv_jNGmfqNnN4SDpxP-w_1iN3sPeFfjwnXOnjAggrJHaj3fG_KpKLByu-jeyguvkvq3_e8ASFr7hpiQ-O_vYAHH3WWuYaq5zHZRoz0vGv4oIepdDxjspgeqSmdqc1KLnBn85WKBWx3Gs72Yhg4ogHeFSz89Flw28V2rVqotpRwHyJ8CvPgJTu6Cj7bHLzcfH02CqGuuVmwQeeeRcMwjg-hBDPg"/>
              </div>
              <div className="p-6">
                <h5 className="font-headline font-bold text-lg">BioStream Tech</h5>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1 mb-4">HealthTech</p>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <span className="material-symbols-outlined text-sm">payments</span>
                  $450k Secured
                </div>
              </div>
            </div>
            {/* Startup 2 */}
            <div className="flex-none w-72 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <div className="h-40 bg-surface-dim">
                <img alt="Startup Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHFQqKlpeJk_GvICgXPM2blWTqhRXAhlYyz62BBv_dOAJDKAIprj8H382E1mjFkmrbix9BAKxKhcqiLgKrnBx4PgQXILpizVU0xonVVUC65hNmCbTQ2aWta3ngT6CRHd_ueT3E5chN8zOYT61ZO-IX7Rab1KuPo2Q3-dhFHOuIdaDdjhCc6sBREzUP6-DnN_wTH8pH4oO_oUIhcoffnZCizhTWmsz02n2ZrO2axm7V57PueK9Va8NSM2ET83tVP2FxzD3JpbMTcNg"/>
              </div>
              <div className="p-6">
                <h5 className="font-headline font-bold text-lg">Nexus AI</h5>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1 mb-4">Automation</p>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <span className="material-symbols-outlined text-sm">payments</span>
                  $1.2M Secured
                </div>
              </div>
            </div>
            {/* Startup 3 */}
            <div className="flex-none w-72 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <div className="h-40 bg-surface-dim">
                <img alt="Startup Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu-9djKIRdJTnZuCdPTk0jZVHaoom8NYgzKeiEUCsVwkV5uxnTstw7N17DFyKwI66l95pVFVcX9yZeNkS6CCxfWKEiQQxPIPNAKufQn0JkZBIwIZG3C1v5zbYTka1F9iX39by01ftSo7jo6MG1AI8m1Bj8oYRk1FD6NvilNqs0WYCNCfdXJQYcMOpPG_9srMcAXnoHUHAMEsGhx0JRPXJSxoVEPi9a0cLbxmOJMtJDtoJZ-oSZom-nZVzXYdIuyCGxp87oQuMo184"/>
              </div>
              <div className="p-6">
                <h5 className="font-headline font-bold text-lg">Veridia Cyber</h5>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1 mb-4">Security</p>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <span className="material-symbols-outlined text-sm">payments</span>
                  $800k Secured
                </div>
              </div>
            </div>
            {/* Startup 4 */}
            <div className="flex-none w-72 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
              <div className="h-40 bg-surface-dim">
                <img alt="Startup Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf9WPIkfFvvYGGtWqXYEa9fHdTuuuVEYUBdJzfHetVRUJmMmQ0wYy2AgWXUKxxEoO0ezjMIMeHRJrjvdN-BG-_eLMEcF5ki8DHVypZOQa-aamLQsgujvFl3yXHuORj7SfDBu9h-ajbF0Oy0UvAPuxOMBmDAz8a17NBl8RI8p7iTDzX-kGG0GIJK75WGFQhl-xx2FCrxyI1a6rCdskW5H-I8QjDFGbncJZmnxDrqO-awAOmLJVwh4SYNt4f4gRzHDpsYiEN-SvtzaQ"/>
              </div>
              <div className="p-6">
                <h5 className="font-headline font-bold text-lg">Solaris Grid</h5>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1 mb-4">Energy</p>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <span className="material-symbols-outlined text-sm">payments</span>
                  $2.5M Secured
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Incubation Benefits */}
        <section className="px-6 mb-16">
          <div className="bg-surface-container-low rounded-xl p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">monetization_on</span>
                </div>
                <h6 className="text-lg font-headline font-bold mb-2">Equity-Free Funding</h6>
                <p className="text-sm text-secondary leading-relaxed">Keep your ownership while we provide the capital needed to scale your operations rapidly.</p>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h6 className="text-lg font-headline font-bold mb-2">Expert Mentorship</h6>
                <p className="text-sm text-secondary leading-relaxed">One-on-one sessions with industry veterans who have successfully exited multi-million dollar startups.</p>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <h6 className="text-lg font-headline font-bold mb-2">Network Access</h6>
                <p className="text-sm text-secondary leading-relaxed">Unlock doors to Fortune 500 partners and a global network of specialized angel investors.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}