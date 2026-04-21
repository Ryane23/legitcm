import Link from "next/link";
import HomeNavbar from "../../../components/HomeNavbar";
import HomeFooter from "../../../components/HomeFooter";

export default function EventDetails({ params }: { params: { id: string } }) {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col">
      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-cta-gradient {
              background: linear-gradient(135deg, #003ec7 0%, #0052ff 100%);
          }
        `
      }} />
      
      <HomeNavbar />
      
      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto w-full space-y-12">
        {/* Back Navigation & Title */}
        <div className="flex items-center gap-4">
          <Link href="/events" className="hover:bg-surface-container-low rounded-full p-2 transition-all">
            <span className="material-symbols-outlined text-[#0052ff]">arrow_back</span>
          </Link>
          <h1 className="font-headline text-2xl font-bold text-on-surface">Event Details</h1>
        </div>

        {/* Hero Event Summary Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative group overflow-hidden rounded-xl h-[300px] sm:h-[400px]">
            <img alt="Event Header" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDXWOuJcE8YDTR3tN1N0cnGR-usdynlSBshku0aUfHA1O6iCSCABqzvtFQy0_zFa3hLAnCjM1nLoML9s7gBSDb_7CN1Rwor_eRv1iG3KdC9S86nE1qoNynnfvt5tk_jXGkZJe19Gy4pQOVDXwseOc6cRbORazRPvF6hPpWn_Nv-lUZuVj17rFo1g-vWqOkt60-zJpGPtR5RpHOTS1U6nR-lVqPbWyRd5jchH2JX3cvSyY5wrB7x_eM1DZbWaGSIBRlCGZaTuTTwDc"/>
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
              <div className="space-y-2">
                <span className="bg-primary-container/20 backdrop-blur-md text-primary-fixed border border-primary-fixed/20 px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase">Tech Summit 2024</span>
                <h2 className="text-white text-3xl sm:text-5xl font-black font-headline tracking-tighter">Scalable Architecture for Global Markets</h2>
                <p className="text-surface-variant/80 max-w-xl font-light text-sm sm:text-base">A deep dive into cross-continental infrastructure, latency optimization, and the future of distributed systems.</p>
              </div>
            </div>
          </div>
          {/* Stats & Quick Actions */}
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between h-full">
            <div className="space-y-6">
              <h3 className="font-label font-bold text-on-surface-variant tracking-widest uppercase text-xs">Event Insights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
                  <span className="text-primary material-symbols-outlined block mb-2">visibility</span>
                  <span className="block text-2xl font-black font-headline text-on-surface">2.4k</span>
                  <span className="text-xs text-outline font-medium">Live Views</span>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
                  <span className="text-tertiary material-symbols-outlined block mb-2">favorite</span>
                  <span className="block text-2xl font-black font-headline text-on-surface">892</span>
                  <span className="text-xs text-outline font-medium">Reactions</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <span>Recorded on Oct 12, 2023 • 1h 45m</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span>Main Hall, Innovation Center, Lagos</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 bg-cta-gradient text-white py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform active:scale-95">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
              Share Replay
            </button>
          </div>
        </section>

        {/* Main Grid: Video, Attendees, Topics */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Video Replay */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm aspect-video relative group">
              <img alt="Video Placeholder" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDal1GnycTQfMQdRf1a_9ROlDVwl7l4xRfoxAU3UcyO191A98imDe7_tKpuo6gIkCIzd9NXKJvNVHAkE02ghJmhNFnb-fXPkb8Ec4LhKo46armfJuLeIRvZKyucJJeBvRkIj0f9Yni3_8XyMppyfUg8t4ZKxU0nIXPiPt6YrFDlGAFqL8beh_MVy2XREI37-hMOZ20rLDTyGu5shY_FpTGyQyy4EC3cYH6ppx9_Ckh6csHHxVPHg_LJm7XGOs9xAzPoc4bVa75sOnw"/>
              <div className="absolute inset-0 bg-on-surface/40 flex items-center justify-center backdrop-blur-[2px] transition-all group-hover:bg-on-surface/20">
                <button className="w-16 h-16 sm:w-24 sm:h-24 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-2xl hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl sm:text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined cursor-pointer">replay_10</span>
                    <span className="material-symbols-outlined cursor-pointer">forward_10</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined cursor-pointer">settings</span>
                    <span className="material-symbols-outlined cursor-pointer">fullscreen</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Highlights Section */}
            <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl">
              <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-4 items-start p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                  <span className="text-xs font-black text-primary bg-primary-fixed w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">12'</span>
                  <p className="text-sm leading-relaxed"><span className="font-bold">Database Sharding:</span> Discussion on why vertical scaling is a temporary bandage for most startups.</p>
                </div>
                <div className="flex gap-4 items-start p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                  <span className="text-xs font-black text-primary bg-primary-fixed w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">45'</span>
                  <p className="text-sm leading-relaxed"><span className="font-bold">Micro-frontends:</span> The case for decoupling UI components to allow team autonomy.</p>
                </div>
              </div>
            </div>

            {/* Feedback Module */}
            <div className="bg-surface-container-highest/30 backdrop-blur-xl border border-outline-variant/20 p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">rate_review</span>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-on-surface">Was this replay helpful?</h4>
                  <p className="text-sm text-outline">Your feedback helps us curate better sessions.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="bg-surface-container-lowest hover:bg-white px-6 py-2 rounded-full text-sm font-bold transition-all border border-outline-variant/10">No, too basic</button>
                <button className="bg-cta-gradient text-white px-8 py-2 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all">Yes, very insightful</button>
              </div>
            </div>
          </div>
          
          {/* Side Rail (Attendees & Topics) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Attendees List */}
            <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline font-bold text-lg">Attendees</h3>
                <span className="text-xs font-bold text-primary px-2 py-1 bg-primary-container/10 rounded-md">842 Total</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <img className="w-10 h-10 rounded-full object-cover border border-outline-variant/20 group-hover:scale-110 transition-transform" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTkZZ4H7CmBCzOR33GhaMocvGao7xJPsu2is4Ma9WEQb7JLXDuM8tvh1ElDAPbKPxyLbdF79z2EBIhJ5WrMKXrF6d7xBepcwcJrNZGBk9JKPe7InCbCzRmO_Xu7fkZNl-hrognTnTlQaG8JytxyQmTXtMutT0p8C0SObxWlc82oNGhJ2p1wW6Uc3Xj_rPDiR3QlPlycWy90Uuq789ZGQ5XSf1mK5PkO5P7ibcs3PiyFOvlEQg2yC21PZQ2Hl1iGV6R7XhZojxCJdQ"/>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold">Sarah Jenkins</h4>
                    <p className="text-xs text-outline">CTO at TechFlow</p>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-sm">chat</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <img className="w-10 h-10 rounded-full object-cover border border-outline-variant/20 group-hover:scale-110 transition-transform" alt="Marcus Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7gcqXtRa83pW42_Ujo42t3olQvZhZ-HnxxeIOFhjbUPwWylLAsUmDbkiti7rKAtNEcmplR7FEUsgLucONzyRgGQ4rAxGiJ3gC6msW2ZYdFv0SMVpXtH5XIMZedCR9GTVsNSAM9oi2lJGScHF19E-i1_eATQbqfsEh49_DRHagESnzt6kyIaorwBRTW5hYaC5e8VaaIdoF6TMJYk2JK7xYlcN2vKUJS3jrXVp1ovEa1UxxlIwJiL21QhOadYugKRsh3FbVZasdK4Y"/>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold">Marcus Chen</h4>
                    <p className="text-xs text-outline">Sr. Architect, Azure</p>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-sm">chat</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <img className="w-10 h-10 rounded-full object-cover border border-outline-variant/20 group-hover:scale-110 transition-transform" alt="Amara Okafor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBalhNbmLz2kCyPFJB397Jy6QIqt0p9cdsQW2RJZgh_d1XrTIWZf5Im5w0wuSKOGrbq6QOjOyQioq3ajZkJw1kwfGwyAK-pf8pq9Fw1RA8lLqTbsRCa84EJx5ggYa40cgpkLyG39wEx0dNMbpD4JdDGp5csNBypa6plgA0ycNXvzhv5Wg-rwErGU5xrEG-XlnCBoE8ceNNiA3CHRRfaH43mPSK5QgzNQJkA5fh4ebSCvWG_JNhxpH9HwfREoJN6n_oIbay_RDJjlIw"/>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold">Amara Okafor</h4>
                    <p className="text-xs text-outline">Founding Engineer</p>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-sm">chat</span>
                </div>
              </div>
              <button className="w-full mt-6 py-2 text-xs font-bold text-primary border-b border-primary/20 hover:border-primary transition-all">View All Attendees</button>
            </div>
            
            {/* Topics Discussed */}
            <div className="bg-surface-container-low p-6 sm:p-8 rounded-xl">
              <h3 className="font-headline font-bold text-lg mb-6">Topics Discussed</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-surface-container-lowest rounded-md text-xs font-medium text-secondary shadow-sm">Kubernetes</span>
                <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-md text-xs font-bold shadow-sm">Serverless</span>
                <span className="px-4 py-2 bg-surface-container-lowest rounded-md text-xs font-medium text-secondary shadow-sm">GraphQL</span>
                <span className="px-4 py-2 bg-surface-container-lowest rounded-md text-xs font-medium text-secondary shadow-sm">Edge Computing</span>
                <span className="px-4 py-2 bg-surface-container-lowest rounded-md text-xs font-medium text-secondary shadow-sm">Latency</span>
                <span className="px-4 py-2 bg-surface-container-lowest rounded-md text-xs font-medium text-secondary shadow-sm">CI/CD</span>
                <span className="px-4 py-2 bg-surface-container-lowest rounded-md text-xs font-medium text-secondary shadow-sm">Observability</span>
              </div>
            </div>
          </div>
          
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}