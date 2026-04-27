import HomeNavbar from "../../components/HomeNavbar";
import AboutFooter from "../../components/AboutFooter";

export default function About() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-gradient {
              background: linear-gradient(135deg, #003ec7 0%, #0052ff 100%);
          }
          .glass-panel-about {
              background: rgba(218, 226, 253, 0.6);
              backdrop-filter: blur(20px);
          }
        `
      }} />
      <HomeNavbar />
      <main className="pt-0">
        <section className="relative px-8 pt-10 pb-24 md:pt-14 md:pb-32 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <span className="label-md uppercase tracking-[0.2em] text-primary font-bold">The Precision Luminary</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[1.1]">
                The Vision Behind Legit.cm
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
                At Legit.cm, we don't just invest; we incubate with surgical precision. Our platform was born from the need to bridge the gap between African innovation and global scale through a curated, editorial approach to startup growth.
              </p>
              <div className="pt-4 flex gap-4">
                <button className="hero-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold shadow-xl active:scale-95 transition-all">
                  Partner With Us
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 bg-surface-container">
                <img alt="Modern workspace" className="w-full h-[500px] object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFKIOGnB0wA3OyZjyC1qjkhRGgJxdXAQZfDvDWe0U_tFdmTsnKMcu3K6IbBTLPr2Csu98IPQmsG1Wx1PwgQJgZsTGX7KYPHFH6If1ID1PrFzLX0nOWdd6ws6-j-8EzZn4q8Mry9H0hC7ceow4tPmiUG7hRT_R7qAIlJyNO4IZzWr4uTnmjw9zqFM3Dcx5pzs6kdZbJMpMCYFnmEYvPE84A3PF2drkrfLfRZhDPaw4OXNImj0OgdYbFyrlLZp7vZx72Y_u96zWqLnQ"/>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel-about p-8 rounded-xl border border-outline-variant/15 shadow-2xl max-w-xs">
                <p className="font-headline font-bold text-primary text-3xl mb-1">120+</p>
                <p className="text-sm text-on-surface-variant font-medium">Startups transitioned from vision to reality under Legit.cm Incubation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-500 group border border-outline-variant/5">
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white">biotech</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Precision</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  We treat every data point as high-art. Our selection process is surgical, ensuring only the most resilient ideas reach the light.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-500 group border border-outline-variant/5">
                <div className="w-12 h-12 bg-tertiary-container rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white">hub</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Community</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  A curated ecosystem where visionary founders share more than resources—they share a collective destiny of growth.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-500 group border border-outline-variant/5">
                <div className="w-12 h-12 bg-surface-tint rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-white">trending_up</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Growth</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Scaling isn't just about numbers; it's about architectural breathing room. We build for the long-term legacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="label-md uppercase tracking-[0.2em] text-primary font-bold">The Visionaries</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mt-4">The Community</h2>
              <p className="text-on-surface-variant mt-6 text-lg">Meet the founders rewriting the narrative of African innovation. A fellowship of builders, dreamers, and doers.</p>
            </div>
            <button className="text-primary font-headline font-bold flex items-center gap-2 hover:underline decoration-2 underline-offset-4">
              View all founders <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group aspect-[4/5] rounded-xl overflow-hidden bg-surface-container">
              <img alt="Founder portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMjK3ij57y4DVhg2yO-nHTdh3asPwS0AXoLcCD7YS7nH4FSk5b3zWLmmhZJEV04hB4iaheI8Pcmt4VjdAhjX6YdLsUAVSoFE-QzgtFp3HV1-5V1PBWTU2qpnP218GU9gppQRl1wElDuSWo37errrkQh_3CMKHOnZGEwe0V5b0G9IYavomHM2dLNi7_OPxxKtI-Lse56SJO_VrdVbbBtmylCae4_1hyMJ871CSTfVyrnSBs1d8Me-mqAdUCqeqbiUJhoF-9kgrqgVc"/>
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-headline font-bold text-lg">Adewale K.</p>
                <p className="text-white/70 text-sm">CEO of AgriScale</p>
              </div>
            </div>
            <div className="relative group aspect-[4/5] rounded-xl overflow-hidden bg-surface-container mt-8 md:mt-0">
              <img alt="Founder portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBijb3CTqpDfI9JwYT88Ow7iCCfcQtG1OlWVIaBEm9630_gQ-XbMnUzhi9H9eH57z5dzHmDQe8zg-yy55bRPlS5xZP2pUreF74mdiRGqYEatbPtgM4ExIhO7S2eYiDRn33O-hmUICwG4BmA_x81YdVYpIopbcYoNhvShYat_Taz9sD5STAPizaQxFmcqm9kC3onMbrVgX5hO2AEcof3McBYKkIwT_Rz_3-Bp2NyIB0FAUJrxQo3fzyB0qW-FzMGvAFtRAp3xwrb_o"/>
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-headline font-bold text-lg">Zara M.</p>
                <p className="text-white/70 text-sm">Founder, Legit.cm Health</p>
              </div>
            </div>
            <div className="relative group aspect-[4/5] rounded-xl overflow-hidden bg-surface-container">
              <img alt="Founder portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNCs0VbGuUjACbzUGNJ4SUuOcJgE5ly7FqVQKnOI_8CynHISeqK_QYTw6Y7j3P852l7_LZPy7wqIxSwD4c8NMG4jRqvQ56on6s8eOsZ0_KMzn85gUhsRHp8IgdhQY89EUIOqUfx82c_2SSrVSXlyuoGH1Mku2R0oSaOVbAfqKBqRndBGXWNuqrR9BRElSTX5VPMMemlB9sjPx6_J2bvlDs6t6w7HpFnjCcoZ0RmIgZy98A_8cu-DB1JIqlANOikA5VCc5XOL6QC5Q"/>
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-headline font-bold text-lg">Samuel O.</p>
                <p className="text-white/70 text-sm">CTO, DataFlow</p>
              </div>
            </div>
            <div className="relative group aspect-[4/5] rounded-xl overflow-hidden bg-surface-container mt-8 md:mt-0">
              <img alt="Founder portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXNjs91_9xW4pMKMiPm59SLDJG2sVWfWoseZ7vkE1Mvg6xvIcbpHoOE555L7ATDXOV9YdkZkqySdhlEEGJrKVwxQ3CJBnH3VEynnQOcDSbHvbYINNeih-yhVBdGqWhRuO8Xt08bsAeCT246Fff1p_hdiAboQAg0PfVw3qJXs7tIeGHrMIFrxFlyFDp2oO8_n0AhbKXmanTNMyPysNaryqscWPFGS7rICPxCjrMUF0ojAJw2CTJ2c0-KXSc2x6P2Hlwx8ct3RptoxQ"/>
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-headline font-bold text-lg">Chidi B.</p>
                <p className="text-white/70 text-sm">Design Lead, Legit.cm</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-on-surface text-surface py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="label-md uppercase tracking-[0.2em] text-primary-fixed-dim font-bold">The Cinema of Scale</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter leading-tight">Legit.cm Documentary</h2>
              <p className="text-surface-variant/80 text-xl leading-relaxed">
                Beyond metrics, we capture the soul of the journey. Our ongoing documentary series explores the raw, unfiltered stories of innovation across the continent.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-on-surface bg-surface overflow-hidden">
                    <img alt="viewer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYAyFQ2aEWYJIhGWRgRcutBKKkVf-fowQ3pDLWUidVAnwMrLVghd3G827kezYNr44MKKKE9rEv8zVm1WI4u-f4rtg9gIMYIym5g55cL_l0JKzJvvCa094-tEkEYY44-MnmV4osySTmLG6oO5evk062D7-YGnS6lAD5eFqSnzKj4s9gnCJtPAYbn-pd3NY8hP4Vl430hizu58Jk6H1sTo3iHeohjFrJ8PlRSghBFZYszWDMW3Ebwk3z5YQcturVgAQkBjnyVTdzctw"/>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-on-surface bg-surface overflow-hidden">
                    <img alt="viewer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeuKWc0Bt4I9gJAega2vKlL28OzdvOwZS-oJCrTr9qTHAlpTOSB1aksLV-2feLnCcsg3vHbP1KG3AOHZPy1I1E_Qys2v8g0Rk8L4BLpiPNuF6qbJpT1Xmp77KngAa56I2ycZBHjPpTgzCDbuyG7yapRSu0kYDMUOUCGvyEDRLmoW5uyDXKO8nZHxO559D_dkdaIHtZTU32gH-RZ6-8nAuf3Eb0es2Cf7tkVPxbqG04mF7v-h2AaYSOPqWeJv8LsiYhFLxcS3pRSow"/>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-on-surface bg-surface overflow-hidden">
                    <img alt="viewer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKq-Cp1lH5gmOBxY3gXa43nZM8tJaBAfN-hKKrviSNuiXqKmwCB6QIGQnB6nmJqkoT3cf9bPK2MsHHdgS-erDPFCVIH8xuzpcPFAWL3WTrYYWCsCUl0lCsPIy-s4kd_M31DAlfHJsfAiGau8gyjZNZqKXsDyspukyMF-lxkqH1fksuSqki05iA2WCocwEK8DU5cxH6A4GtUQP6ytykaGL5txjOfmav6BG-MfE9koeo3uwKdv9FA5oz_cM6ksURM049VPy7EABQGOU"/>
                  </div>
                </div>
                <p className="text-sm font-medium text-surface-variant">45,000+ Minutes watched</p>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="rounded-xl overflow-hidden aspect-video bg-surface-container-low shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img alt="Documentary preview" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb5k9KxMZ8SmR-0Bzr-qp2AcZXrqIbEcNGfaT-iow5HyoKOk8MRvh9CaJBHKG-Z5L-78sRGaWD0KLsbwzGxhnkjesNYTRzqWyZ_o4YAAGbH2SJmFRY5l9bwjWDjH3YUxh9pYdz4mgMYsSQOXU6ot-s3SrOUcJMu5-xXctMWzU8Ul1l8IRMy_FMs6gghstYRq80zxi7xZoK1pwC5d99dHwBu2-ZqLKEubOuqFtLoBNzDgMuFQp8LtTjoUw1OIEUhzUy0TGTo0CUx0k"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary-container/90 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-tertiary-container px-4 py-2 rounded-lg text-white font-bold text-xs uppercase tracking-widest shadow-xl">
                New Episode
              </div>
            </div>
          </div>
        </section>
      </main>

      <AboutFooter />
    </div>
  );
}