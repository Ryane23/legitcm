import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function Community() {
  return (
    <div className="bg-surface font-body text-on-surface flex flex-col min-h-screen">
      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-cta-gradient {
              background: linear-gradient(135deg, #003ec7 0%, #0052ff 100%);
          }
        `
      }} />
      <HomeNavbar />
      
      {/* Main Content Canvas */}
      <main className="flex-grow pt-12 px-6 md:px-12 pb-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <section className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-2xl">
              <span className="font-label text-xs font-bold uppercase tracking-[0.1em] text-primary mb-3 block">Network Directory</span>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface leading-tight">Connect with the next generation of <span className="text-primary">innovators.</span></h2>
              <p className="text-on-surface-variant mt-4 text-lg font-medium leading-relaxed">A curated collective of visionaries, engineers, and builders shaping the future of the ecosystem.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-cta-gradient text-white font-bold rounded-full text-sm shadow-lg hover:scale-105 transition-transform">
                Invite Founder
              </button>
            </div>
          </section>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button className="px-5 py-2 rounded-xl bg-primary text-white text-sm font-semibold">All Members</button>
            <button className="px-5 py-2 rounded-xl bg-surface-container text-on-secondary-container text-sm font-semibold hover:bg-surface-container-high transition-colors">SaaS Builders</button>
            <button className="px-5 py-2 rounded-xl bg-surface-container text-on-secondary-container text-sm font-semibold hover:bg-surface-container-high transition-colors">Fintech</button>
            <button className="px-5 py-2 rounded-xl bg-surface-container text-on-secondary-container text-sm font-semibold hover:bg-surface-container-high transition-colors">AI Research</button>
            <button className="px-5 py-2 rounded-xl bg-surface-container text-on-secondary-container text-sm font-semibold hover:bg-surface-container-high transition-colors">Hardware</button>
          </div>

          {/* Founder Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Founder Card 1 */}
            <div className="group bg-surface-container-lowest p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_40px_rgb(19,27,46,0.02)] flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-md">
                  <img alt="Marcus Chen" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASinW5_ZERWGMDYwQNmdw1TtD7m2fwRBbABGp8ANR2Os7EJcpyO3SBD4rcdYxUMQIaI8zHd3lRKF4enRa4dmjXwURFLjORCSLmZONpwG5tW6M_XcP4hMTq6XhALck3n-UbBilUJ2n8owqvA3xj4cplBvFrMTZh5EdZv-LZ4NusKvoDQEarzWGZMtkQfOiRKAchDJTb6kfy2D9TIrDRiZxY24XpP6X1lbWx9Vh04NJhn3ttQ3E-tcBAAIkrJivIu6gozhsXBCSxwJQ" />
                </div>
                <div className="flex -space-x-2">
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-headline text-lg font-extrabold text-on-surface">Marcus Chen</h3>
                <p className="text-primary text-sm font-semibold mb-2">CEO at FluxAI</p>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">Building autonomous supply chain infrastructure for global logistics teams.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-surface-container-low flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[10px] font-bold uppercase tracking-wider">Series A</span>
                  <span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold uppercase tracking-wider">San Francisco</span>
                </div>
                <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Connect</button>
              </div>
            </div>

            {/* Founder Card 2 */}
            <div className="group bg-surface-container-lowest p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_40px_rgb(19,27,46,0.02)] flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-md">
                  <img alt="Elena Rodriguez" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAltVHFDhFeSMlIvmtlrZFY4PhI7Nn9HDo4ErIHmsyVJuirREDtS59Npy1YDx9Fgj1kKPCMSPTZAz1rHel_HKbruIDN8KWu8KftPeQljOyjP9BTgd4g07-5t8-ep9GxuSQ74wJOzH45zG-hK6Z67iJoyOVKZ0zI33BgppW2zorYZaPPgFcBej-muqOPKAAU98yI6LPgJfYscY0u907CMfIlG0WLcpZHF266t_unoKQwnvjk74CyUIZq1Os15hV6PVz7F24hDpgHIM" />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-headline text-lg font-extrabold text-on-surface">Elena Rodriguez</h3>
                <p className="text-primary text-sm font-semibold mb-2">Founder of Verity</p>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">Decentralized authentication protocols for secure digital identities.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-surface-container-low flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[10px] font-bold uppercase tracking-wider">Seed</span>
                  <span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold uppercase tracking-wider">Madrid</span>
                </div>
                <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Connect</button>
              </div>
            </div>

            {/* Founder Card 3 */}
            <div className="group bg-surface-container-lowest p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_40px_rgb(19,27,46,0.02)] flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-md">
                  <img alt="Julian Vane" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkFL6BUcl4N7O9N7slpwCUKRQaPdYAIG83ombbHTHhmnOon-e09FrTnsLS2Sa0uh0aGrZWc-dMs7inagf8ZjK4c_yWMfAJLusfx3BaltYwuj1qZG1ScM2OeThSMjg0725VWo8-4iiaTW-evjrxfGgrRPNRgquY7wiv58REFmm1ISecwS_GJA7gMdRRVLy9L_7kU3c7eszho9xO9_mdd0eru_iKyHSqZYxgB1RGne4mXt9SCnM1zvemjLXD4JWaOSQRjwIOHp6n9iA" />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-headline text-lg font-extrabold text-on-surface">Julian Vane</h3>
                <p className="text-primary text-sm font-semibold mb-2">CTO at Orbit</p>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">Low-latency data synchronization for real-time collaborative applications.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-surface-container-low flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[10px] font-bold uppercase tracking-wider">Stealth</span>
                  <span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold uppercase tracking-wider">Berlin</span>
                </div>
                <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Connect</button>
              </div>
            </div>

            {/* Founder Card 4 */}
            <div className="group bg-surface-container-lowest p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_40px_rgb(19,27,46,0.02)] flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-md">
                  <img alt="Sarah Jenkins" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHEJSZyFpmEUssW0gmFHjz_qVBzw67BO01FvfGR4sKbpDjboAMEAlIgf7x8PSavTdYgu-wJxlOEelZaawA9X_WvWeHW1TDi8otBSWvJvUTppxsAyByAv4tut6deLSVC7Hj67w2sayGrLv_NH1C-tG67GYYv1M4T4VgC72J_VL0sOISF_btj1lCupSjRYDynTrN6YmlNYMpp2QjEhmT9PuCPN8t0ph3u2W9b6RYAi5MIkODxAmSjCS-2e3T5hLvqle2B2mr6TAelYM" />
                </div>
                <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div className="mb-4">
                <h3 className="font-headline text-lg font-extrabold text-on-surface">Sarah Jenkins</h3>
                <p className="text-primary text-sm font-semibold mb-2">Partner at Elevate</p>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">Early-stage venture builder focused on climate-tech and sustainable energy.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-surface-container-low flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[10px] font-bold uppercase tracking-wider">VC</span>
                  <span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold uppercase tracking-wider">London</span>
                </div>
                <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Connect</button>
              </div>
            </div>

            {/* Founder Card 5 (Wide) */}
            <div className="md:col-span-2 group bg-surface-container-lowest p-6 rounded-xl hover:scale-[1.01] transition-all duration-300 shadow-[0_8px_40px_rgb(19,27,46,0.02)] flex flex-col sm:flex-row gap-6">
              <div className="h-40 w-40 rounded-2xl overflow-hidden flex-shrink-0">
                <img alt="David Kalu" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7x_g7XUKb00Buiy4fTt6zFkXRtGbUXrcBNPzQdRvmfUAqKoc351p_Hhqj_2dq3QNSfweYLCr1KVEWcXFjdU5NF7Ox-VRVJTJBEPAY-at2F26jKVrVgPdsq30ZOiNArr2x9idvu9QX9t2_5bBK43wNxQtvdNs2wty2Or9TcNXPZxpvR_sbSMonFsMND6joqYoDhxEO0ABA5EaXdCCWDSlwdYw5ZlWchJFfYERqQx6durz4n1JMnXxRwh8EcEWNXW41KrhB6UHpak" />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-xl font-extrabold text-on-surface">David Kalu</h3>
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase tracking-widest rounded-full">Top Contributor</span>
                </div>
                <p className="text-primary text-sm font-semibold mb-3">Product Lead at Nile</p>
                <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Designing the future of collaborative entrepreneurship. Focused on building tools that empower African founders to reach global markets.</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1 text-outline">
                      <span className="material-symbols-outlined text-sm">chat_bubble</span>
                      <span className="text-xs font-bold">42 Posts</span>
                    </div>
                    <div className="flex items-center gap-1 text-outline">
                      <span className="material-symbols-outlined text-sm">thumb_up</span>
                      <span className="text-xs font-bold">1.2k Likes</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-surface-container-high text-primary font-bold rounded-full text-xs hover:bg-primary hover:text-white transition-all">View Full Profile</button>
                </div>
              </div>
            </div>

            {/* Founder Card 6 */}
            <div className="group bg-surface-container-lowest p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_40px_rgb(19,27,46,0.02)] flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-md">
                  <img alt="Amara Okafor" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKLbjOxsqm5lI6ImkKzKyWPg-E5KLpiBl4BYcd5xBwazsqw6iFBdL9H8Ds9nhu_t4LhGCx9EJWekuA62QF8Vd79nMsuKr0Ba9UBIp0-cIw47kQ9LS0JsD2J4famVVKorwlIFifrFB5gynjZgHykQS5fto1rN_cPGnm_uEx7UQ-g7nl4educv6aqceEHBmv76oP583ineNY1OET-42MIfPwQeVqsDiVyHOEskVZ12l_SUcLV6IlTFe6oBWnNV2j9o5CH88CffX9qCo" />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-headline text-lg font-extrabold text-on-surface">Amara Okafor</h3>
                <p className="text-primary text-sm font-semibold mb-2">CEO at GreenGrid</p>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">Sustainable energy management for smart cities across Sub-Saharan Africa.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-surface-container-low flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[10px] font-bold uppercase tracking-wider">Series B</span>
                  <span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold uppercase tracking-wider">Lagos</span>
                </div>
                <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Connect</button>
              </div>
            </div>

            {/* Founder Card 7 */}
            <div className="group bg-surface-container-lowest p-6 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_40px_rgb(19,27,46,0.02)] flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-md">
                  <img alt="Kenji Yamamoto" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQkQM1vbmr8nF3IVQ3zohren7L4lqUoVSAgfJ_ULy3vLpcRxXADD1ptubb6h5FEDH5E89XC83McW67XKJWZ4qEiH0RejybzkCQrI7LVkeF4IpzSwT0n4-GrlcAiO8jaTKcucoLRQFO3q_pqwMj55weeUPImYMyZMqWJkGq_nNobdMvvraUp9yK51tSi672DuDMYlb5P4wFBQbJd28BmW3a58gwhPPWHqiTOZE9IpZ_afubC7L7xv1yXcxVmkQeHLc4ULAZthczM6o" />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-headline text-lg font-extrabold text-on-surface">Kenji Yamamoto</h3>
                <p className="text-primary text-sm font-semibold mb-2">Founder of Kyber</p>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">High-performance rust-based frameworks for web3 gaming infrastructure.</p>
              </div>
              <div className="mt-auto pt-6 border-t border-surface-container-low flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[10px] font-bold uppercase tracking-wider">Seed</span>
                  <span className="px-2 py-1 bg-surface-container text-outline text-[10px] font-bold uppercase tracking-wider">Tokyo</span>
                </div>
                <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Connect</button>
              </div>
            </div>
          </div>

          {/* Pagination Section */}
          <div className="mt-16 flex justify-center items-center gap-4">
            <button className="p-3 rounded-full bg-surface-container text-outline hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">1</button>
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface font-bold text-sm hover:bg-surface-container-high transition-all">2</button>
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface font-bold text-sm hover:bg-surface-container-high transition-all">3</button>
              <span className="w-10 h-10 flex items-center justify-center text-outline">...</span>
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface font-bold text-sm hover:bg-surface-container-high transition-all">12</button>
            </div>
            <button className="p-3 rounded-full bg-surface-container text-outline hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>

      <HomeFooter />

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 h-14 w-14 bg-cta-gradient text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-50">
        <span className="material-symbols-outlined text-2xl">chat</span>
      </button>
    </div>
  );
}