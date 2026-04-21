import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function Events() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col">
      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-primary-gradient {
              background: linear-gradient(135deg, #003ec7 0%, #0052ff 100%);
          }
        `
      }} />
      <HomeNavbar />
      
      <main className="flex-grow pt-12 px-6 sm:px-12 pb-20 max-w-7xl mx-auto w-full">
        {/* Hero Section: Upcoming Events Highlight */}
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl font-black tracking-tight font-headline">Upcoming Events</h2>
            <div className="h-px flex-grow mx-8 bg-surface-container hidden md:block"></div>
            <span className="text-primary font-bold text-sm tracking-widest uppercase">04 Active</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Event Card (Asymmetric Layout) */}
            <div className="lg:col-span-8 group relative overflow-hidden bg-surface-container-lowest rounded-xl h-[420px] transition-transform hover:scale-[1.01] duration-500">
              <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="modern tech conference hall with blue atmospheric lighting and large digital screen showing complex data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDou06Nmj-gm3XtHgreFcO82dd3BzUh68vTR0zCFXRgCx5-NzoPFKHUPu7zVoGE7lYFnUGwacE5vCP9PZ32IaTieS4s7hrZ5jpTFfrrlTS2PFWeX9ZW7wKWeXz2Wj02d3f1nhcKH7RF9ACcmDgI-Zt86sApx1QjqWGmcOOhwuahG1GcmrdofVwOfuEgUu5N_dRc6ruRmhlqbKRw87SrUTWm18jF5Yzm5yWM6T2Vn7qGauY4G03V-NjxjX1BVua4FuV_l1cb4iV_-u0"/>
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-10 w-full">
                <div className="flex gap-3 mb-6">
                  <span className="bg-primary/20 backdrop-blur-md text-primary-fixed font-bold px-4 py-1 rounded-md text-xs tracking-wider uppercase border border-primary/30">Live Soon</span>
                  <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1 rounded-md text-xs font-medium border border-white/20">Pitch Session</span>
                </div>
                <h3 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 max-w-xl font-headline">Nile Founders Summit 2024: Scaling Beyond Borders</h3>
                <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-surface-variant/80 text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-sm">calendar_today</span>
                    <span>Oct 12, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-sm">schedule</span>
                    <span>10:00 AM WAT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-sm">location_on</span>
                    <span>Lagos Tech Hub</span>
                  </div>
                </div>
                <button className="bg-primary-gradient text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl">
                  <a href="/events/nile-founders-summit-2024" className="flex items-center gap-3">
                    Join Event
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </button>
              </div>
            </div>
            {/* Secondary Highlight Card */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between flex-grow hover:bg-surface-container transition-colors duration-300">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Next in 48h</span>
                  <h4 className="text-xl font-bold mb-4 font-headline">VC Speed Dating: Web3 &amp; FinTech Founders</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Connect with 12 global investors in focused 10-minute sprint sessions.</p>
                </div>
                <div className="flex -space-x-3 mb-6">
                  <img alt="User" className="w-10 h-10 rounded-full border-4 border-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXPBoqsMHRAAvLA9uZ4fZYlrsHSlsEu9O1Mp3VBN30gyaausTp_OhmmElTJqKcPFQCGxQcBRx3wwfR4vF68mIsUnunVY5FlZlHKaxVet9LOtDGAYVYwSq5box1GocIpY-vhyg2RvOLHPq7E1QMyqIxNaZ0LaYAdnM4878aruwn3-IdxhjqrM5vOKiTMFbQwxQZE1XO7CtUp_mAXETkSc_BtDNQ5kbuJ1IZYvI5kcWIliUeeuxoLw3nbBBOHqW2XInKK2bmSfC_rOg"/>
                  <img alt="User" className="w-10 h-10 rounded-full border-4 border-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQlCXDASMIFhjxlS1Z13l-r3b8xtruCZLgQq0qb4aImzr6bqMsJ6nEtVa0px2jqjN96cDMDLTNx63MiZt2l5NlV0sIgGHCRgnW9E-5XX9fmANgv18nW_GoUHwnNMAG-wxFEZYN5sPAg-c6sD5aUH2ov8CnYBuUPLIFXoWzQjKXi462iHiL_4MvvFkPuKJbmHM4_z1jlEzye0Nt6KzfEA3UsC0SOJ9PY7YJP1d60PwW2T4ogNUkjARsEY_odH_ZF2BD_C6AgYKF5QA"/>
                  <img alt="User" className="w-10 h-10 rounded-full border-4 border-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu7zMOoeH1Qvma5mdvsDze2LJ3nw_usDTRVIS9WD0l9LcI9c3YE9h6Ldp9e9e9proF_yXhiFfp8iZR_QURJ7luCYsFszLeNljbpr8qm_7B86syf0XmnC7XVIsYjB4xgI0vDfCbK4SW_uyEiwhV3cqu5LP25L3vn_vL6HTVW9fUCOP2IzvSRWrig0ypQhRi7gJvsPFfsSHX-DmUr_CW2kZf1Ib9T72HMyMfohyg5TEpwJWhZqGZKSxhd3Vih9rSCiCwoRKBmmCg4sk"/>
                  <div className="w-10 h-10 rounded-full border-4 border-surface-container-low bg-primary text-white flex items-center justify-center text-xs font-bold">+28</div>
                </div>
                <button className="w-full py-3 px-6 rounded-full bg-surface-container-lowest text-primary font-bold border border-primary/10 hover:border-primary transition-all">RSVP Now</button>
              </div>
              {/* Small Banner Card */}
              <div className="bg-on-surface rounded-xl p-8 text-white relative overflow-hidden h-40">
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2 font-headline">Host an Event</h4>
                  <p className="text-white/60 text-xs mb-4">Launch your own community meetup or webinar.</p>
                  <a className="text-primary-fixed-dim text-xs font-bold underline underline-offset-4" href="#">Learn More</a>
                </div>
                <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/5 text-9xl">add_circle</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Past Events Section: Grid of Cards */}
        <section>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl font-black tracking-tight font-headline">Past Events</h2>
            <button className="flex items-center gap-2 text-outline hover:text-primary transition-colors font-medium">
              View Archive
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Past Event Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(19,27,46,0.06)] group">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="vibrant indoor event space with attendees networking in small groups under warm industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyhN4AJ-j3s5oYVNnXWooBdhmBDuLOWSu1dDe9dclUeA9saiOh9GbVxat0NiDF57htpAISdsdwbUXvXFMbBB88J2O18D8gAXclXb0iz6ttuGGtM4ThVdXJHQosJuQjNvR042M4Bis3qF3Rh-JhyfSp5zvyp2bAoRBx_ckKIU816E4Q3-jQKsNizm7tX6vS3dH0zmwy7oTAD2IKQLnHjo0VohaOo3jJYJGPZZrVzqtIv39m_F1E-UC8ma8RTDn9ouwF2fKPrEzY4_4"/>
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-outline-variant bg-surface-container-low px-3 py-1 rounded">AUG 2024</span>
                <div className="flex items-center gap-1 text-secondary text-xs">
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  <span>420 Views</span>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-3 leading-snug font-headline">Product-Led Growth in the Nigerian Market</h4>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Exploring the dynamics of user-centric scaling strategies with senior product leaders from Paystack and Flutterwave.</p>
              <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Watch Recording
                <span className="material-symbols-outlined text-sm">play_circle</span>
              </button>
            </div>
            {/* Past Event Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(19,27,46,0.06)] group">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="people gathered around a wooden table in a brightly lit modern office working together on laptops" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNE5YGEcLmUBIAeEsdh22Fp4EWNroT_cj-462YfU-RxEYNSHRk1jHNNfV09QmsoRkwDd-iFlwmRiyM6Rscd-I7pjyXqzUbtPdE3YRXiQ4E3tMCicHMtmZM3XPZUzpB7odIMAjFyZNrrhMHntS-6-1Idk1pjRIAbOmpEstHhjCRp4nTgTfJLQ7DdMEM58tCcXuU3NKUeNo2SMHJHgxWw7mXv8pKQZGqQWmLBzbnZ4FHWdLvw68nmzwBRW3UpdNhbvQApfvswtgpYI"/>
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-outline-variant bg-surface-container-low px-3 py-1 rounded">JUL 2024</span>
                <div className="flex items-center gap-1 text-secondary text-xs">
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  <span>1.2k Views</span>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-3 leading-snug font-headline">The Future of AgriTech: 2024 Outlook</h4>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">A comprehensive deep dive into sustainable farming technologies and investment trends across the continent.</p>
              <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Watch Recording
                <span className="material-symbols-outlined text-sm">play_circle</span>
              </button>
            </div>
            {/* Past Event Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(19,27,46,0.06)] group">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="close-up of hands typing on a modern laptop with a coffee mug nearby in a minimalist bright setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrnNMZaOcdCGw-lhZIP9vOiCpYY3b_Q9icJ9sL5hHq8ky0i7-ugCWEDeOZKoJUPT5D3-lybjkENshWB-Q_BbM0nkUjgAwX_mCQqgEawCrB-KVZqW_vcxdnuLwmgjQxY2_iWeLEGvlR7c6imglu3gz2WTGxFrDf7G2C9edKkD51-xoRwDzlE5NFbk7LddXv5o3v8_BzYc1P85qKfhquPlLZfm7BMHXbYJv9bp-7HtPqi6xLTKHFe_A-fM3qPUQod3sFhjtVWnNNo8o"/>
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-outline-variant bg-surface-container-low px-3 py-1 rounded">JUN 2024</span>
                <div className="flex items-center gap-1 text-secondary text-xs">
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  <span>890 Views</span>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-3 leading-snug font-headline">AI for Founders: Beyond the Hype</h4>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Practical implementation strategies for generative AI in early-stage operations and customer success.</p>
              <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Watch Recording
                <span className="material-symbols-outlined text-sm">play_circle</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}