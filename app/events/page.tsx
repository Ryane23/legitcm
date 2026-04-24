import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function EventsPage() {
	return (
		<div className="scroll-smooth bg-[#faf8ff] text-[#131b2e] min-h-screen selection:bg-primary-container selection:text-white">
			<HomeNavbar />
			<main className="pt-24 overflow-x-hidden">
				{/* SECTION 1: HERO */}
				<section className="relative min-h-[618px] flex items-center px-6 md:px-12 overflow-hidden">
					<div className="absolute inset-0 z-0">
						<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
						<img className="w-full h-full object-cover opacity-40 scale-105" alt="hero" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV9EAu7CPACT4Tbh9_bDJMz5fitBYrvImHd3BQIPFLOwCyWnFaB6vIrC0LnMC7nV4EuguwijBBvg19-AWbklHEgvfA3ytPyL8HPtx47_Xhbu76LQPK3UfLxaFBsN8TfIBnaNuxAzr2_QFe0JWal6G1f1Yp_AWppBikppIKNaWxI4Y3kRCccm1vgQ9BX0tyVApuOEy_eU7aOPUmXHevq8sez07XvTALKCeNizZV8hgC1uauRzR9bTgJyDBnqAZWFZ5d79ooGDld8VE" />
					</div>
					<div className="relative z-20 max-w-2xl">
						<span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">World-Class Connections</span>
						<h1 className="font-manrope text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">Discover <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Startup Events</span></h1>
						<p className="text-slate-400 text-lg md:text-xl mb-8 font-medium leading-relaxed max-w-lg">The focal point for founders, investors, and visionaries. Join high-impact gatherings designed to scale your ecosystem.</p>
						<div className="flex flex-col sm:flex-row gap-4"><button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-base hover:scale-105 transition-all shadow-lg shadow-blue-900/20">Browse Events</button><button className="px-8 py-4 glass-card text-white rounded-full font-bold text-base hover:bg-white/10 transition-all border border-slate-700">Host an Event</button></div>
					</div>
				</section>

				{/* Placeholder for remaining sections (featured, categories, upcoming, replays, CTA) */}
			</main>
			<HomeFooter />
		</div>
	);
}
import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function EventsPage() {
	return (
		<div className="scroll-smooth bg-[#faf8ff] text-[#131b2e] min-h-screen selection:bg-primary-container selection:text-white">
			<HomeNavbar />
			<main className="pt-24 overflow-x-hidden">
				{/* SECTION 1: HERO */}
				<section className="relative min-h-[618px] flex items-center px-6 md:px-12 overflow-hidden">
					<div className="absolute inset-0 z-0">
						<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
						<img className="w-full h-full object-cover opacity-40 scale-105" alt="vibrant blue laser lights illuminating a large modern conference hall with a crowd of silhouetted entrepreneurs and tech founders" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV9EAu7CPACT4Tbh9_bDJMz5fitBYrvImHd3BQIPFLOwCyWnFaB6vIrC0LnMC7nV4EuguwijBBvg19-AWbklHEgvfA3ytPyL8HPtx47_Xhbu76LQPK3UfLxaFBsN8TfIBnaNuxAzr2_QFe0JWal6G1f1Yp_AWppBikppIKNaWxI4Y3kRCccm1vgQ9BX0tyVApuOEy_eU7aOPUmXHevq8sez07XvTALKCeNizZV8hgC1uauRzR9bTgJyDBnqAZWFZ5d79ooGDld8VE" />
					</div>
					<div className="relative z-20 max-w-2xl">
						<span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">World-Class Connections</span>
						<h1 className="font-manrope text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
							Discover <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Startup Events</span>
						</h1>
						<p className="text-slate-400 text-lg md:text-xl mb-8 font-medium leading-relaxed max-w-lg">
							The focal point for founders, investors, and visionaries. Join high-impact gatherings designed to scale your ecosystem.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-base hover:scale-105 transition-all shadow-lg shadow-blue-900/20">
								Browse Events
							</button>
							<button className="px-8 py-4 glass-card text-white rounded-full font-bold text-base hover:bg-white/10 transition-all border border-slate-700">
								Host an Event
							</button>
						</div>
					</div>
				</section>
				{/* ...existing code... */}
			</main>
			<HomeFooter />
		</div>
	);
					{/* SECTION 4: UPCOMING EVENTS */}
					<section className="px-6 md:px-12 py-16 max-w-screen-2xl mx-auto">
						<div className="flex justify-between items-end mb-10">
							<h2 className="font-manrope text-3xl font-bold tracking-tight">Upcoming Journeys</h2>
							<a className="text-blue-500 font-bold text-sm hover:underline decoration-2 underline-offset-8" href="#">View Calendar</a>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{/* Card 1 */}
							<div className="glass-card rounded-3xl overflow-hidden group">
								<div className="relative h-48">
									<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="minimalist architectural photo of a glass skyscraper reflecting a clear blue sky, representative of corporate networking" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbUhDm_iexinJ3dUPk1T2R5uuaQ4mMUgJlyADyxKb_JBawnsQDzGMsSyfsKRR_pqV14eLdFV8W8a49VF7vuuo5KHkR8bx12KBvS67AdjJUTtiR5bY_BAAYuXyhEdGT-c4goFjhibX9P6bpUS0EU6D2Xzm0PxOXSrN8V5sjb-nNeDRVGYZbP_7OBU3s3UObMRrGot4pk2N5cOn1_lCFb93IhGB3iXc2UjBSk-uSK_lzTnLfyIqYQ1btDBr9OC3d0MPK9ykcupnTrkw" />
									<div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-white uppercase border border-white/20">Upcoming</div>
								</div>
								<div className="p-6">
									<div className="flex justify-between items-start mb-3">
										<h4 className="font-manrope text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors">The Series A Roadmap Workshop</h4>
										<span className="text-blue-500 font-bold text-sm">MAY 12</span>
									</div>
									<p className="text-slate-400 text-sm mb-6 line-clamp-2">Exclusive masterclass on navigating the bridge between seed and scale with world-class VCs.</p>
									<div className="flex items-center justify-between">
										<span className="text-xs text-slate-500 flex items-center gap-1 uppercase font-bold tracking-widest"><span className="material-symbols-outlined text-sm">schedule</span> 14:00 GMT</span>
										<button className="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-primary transition-all">Register</button>
									</div>
								</div>
							</div>
							{/* Card 2 */}
							<div className="glass-card rounded-3xl overflow-hidden group">
								<div className="relative h-48">
									<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="close-up of complex circuit board glowing with neon blue electricity patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmrg_chsI5qJhujWH7MQO07Fm3siJDBKx7kZ2nWFkH76-5kcdKdlQRr-9QmiThDD5-v5tO27Mx4snPL98OdfH8IdSCmxApPAFZ4j29EZA6l4y7ZC-pvEYwKpe75Yk29UHXQC4wsfpRnhgYe9GhWF8uVu6ByH8Me6LXswkbXBdM8TZonDHmdvqaSpivZOC6latIGeK-aTUmejCZec6apTJ2kTfwaKqq8GtP6MAirIVU8yFDhbF-pAx1Xk9_5UtbVukY4XFbZJCm8NY" />
									<div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-white uppercase border border-white/20">Upcoming</div>
								</div>
								<div className="p-6">
									<div className="flex justify-between items-start mb-3">
										<h4 className="font-manrope text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors">Quantum Compute 2024 Demo Day</h4>
										<span className="text-blue-500 font-bold text-sm">MAY 15</span>
									</div>
									<p className="text-slate-400 text-sm mb-6 line-clamp-2">Witness the next generation of deep-tech startups presenting their quantum-ready solutions.</p>
									<div className="flex items-center justify-between">
										<span className="text-xs text-slate-500 flex items-center gap-1 uppercase font-bold tracking-widest"><span className="material-symbols-outlined text-sm">location_on</span> San Francisco</span>
										<button className="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-primary transition-all">Register</button>
									</div>
								</div>
							</div>
							{/* Card 3 */}
							<div className="glass-card rounded-3xl overflow-hidden group">
								<div className="relative h-48">
									<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="interior of a luxury modern workspace with plants and stylish furniture for networking" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZdVot2LVj3GOWpuaroOBMdxm669MY-UpZNmDNGiTnW5iAlF9MI_CCYYIlPusJwB3j_rkyrfCPX0zio10gFWLmQG20ivm100-rbr8HmIQnLijO7yvkc6a_XISIMRaWxRH8loMc6R9aRtyZrgCYc4Obcayfs4ET4xPQICr78HOc8nqb6iil1IHu5fmYF2KJYyk7KApgtJkkR36bUvTOgc4x0Bl46GqfW_5C8lV30T5d79OXr5iFMeiX_HP6lbLlZ35BCw4cTmQe_KU" />
									<div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-white uppercase border border-white/20">Upcoming</div>
								</div>
								<div className="p-6">
									<div className="flex justify-between items-start mb-3">
										<h4 className="font-manrope text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors">Founder Mixer & Cocktails</h4>
										<span className="text-blue-500 font-bold text-sm">MAY 18</span>
									</div>
									<p className="text-slate-400 text-sm mb-6 line-clamp-2">A high-casual environment for ecosystem builders to connect and share off-the-record stories.</p>
									<div className="flex items-center justify-between">
										<span className="text-xs text-slate-500 flex items-center gap-1 uppercase font-bold tracking-widest"><span className="material-symbols-outlined text-sm">person_pin_circle</span> Berlin, DE</span>
										<button className="px-5 py-2.5 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-primary transition-all">Register</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* SECTION 5: PAST EVENTS / REPLAYS */}
					<section className="px-6 md:px-12 py-20 bg-slate-900/20">
						<div className="max-w-screen-2xl mx-auto">
							<h2 className="font-manrope text-3xl font-bold tracking-tight mb-10">Rewatch Excellence</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
								{/* Replay 1 */}
								<div className="group cursor-pointer">
									<div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
										<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="over-the-shoulder shot of a laptop displaying data graphs in a blurred dark workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArVMgLuX04Kh_EK8IpsznidhEQUrkk8gN6Tf0iByEvtd1WSQDRAma35tcxPgrot7SQL-TzUTIhqsKoerIsUgvEpLK18G_SjClE2L_i3gy5e0KPNdPKmmL6aOUUdxUECjPvLXD4i2T3u_-CFESGpVTObuj9vvdlf_RFAzP-mgQnCNwhGrzlkkonSsA5n0ZuI20KURsaweYi1XhsWRPvSBIoe_VKBwtVkvMyc65-FqfjqeMpIaYS7EjD3CEfoQQ3WWwzk0tzBGNdGDs" />
										<div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
											<span className="material-symbols-outlined text-5xl text-white">play_circle</span>
										</div>
										<span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-bold rounded">48:12</span>
									</div>
									<h5 className="text-sm font-bold text-slate-200 line-clamp-1 mb-1">Scaling to $100M ARR</h5>
									<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Documentary Special</p>
								</div>
								{/* Replay 2 */}
								<div className="group cursor-pointer">
									<div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
										<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="abstract close-up of light reflecting on glass prism surfaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDODr2lA8nQtD-_HFP5Prn5omTW1SkgmG5_FVyTFcb7-3EJxbUJ0TQ9MVWfixix2U3SXZYyCj6uPLs66vXYh4MAvLvVdMzFGBO2gta-TF9Tw3-hVttdvv2JP9zg2W0dtDO1GqJTnfXKXefV5B9qfrNUTKywkzLMeyTBSK0jfCeCZnLDr0Gd6zSwOlNms2Sara4n1RqowXS8LrMwW7j9CXvuhBIlIgzvNWVAvy1wyjUy8--XThR8NksLyR7hygGvc01vUfvSTRnQvgI" />
										<div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
											<span className="material-symbols-outlined text-5xl text-white">play_circle</span>
										</div>
										<span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-bold rounded">1:15:00</span>
									</div>
									<h5 className="text-sm font-bold text-slate-200 line-clamp-1 mb-1">Web3 and the Ownership Economy</h5>
									<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Roundtable</p>
								</div>
								{/* Replay 3 */}
								<div className="group cursor-pointer">
									<div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
										<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="person speaking at a podium in a dimly lit lecture hall with a focus on their hands gesturing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR-qtGw769T1lkSB65qHK6xcGfz-Eff8aZbfBQMhFf8lb60D_9Kz6d4_R2TdsyrFYm-VaQD5KRwzRVwriqsGkMfLnR2GKXVGk9gW6jcCre7O8RzaSiLKuSDQOye4mftCsHVfpvlllM_3WDDPbySTX2R8uyddZ-KKQ6Yl0rWL8BCKKn83g9CZMwp6GKgVItcjRtdEsIFn73FqEyXuH7bOpsc73RjWz0mBc9sexssAxAxH8Q3hSRvwtY5N3d7wo79Yny1fO9vtvwQI0" />
										<div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
											<span className="material-symbols-outlined text-5xl text-white">play_circle</span>
										</div>
										<span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-bold rounded">22:05</span>
									</div>
									<h5 className="text-sm font-bold text-slate-200 line-clamp-1 mb-1">The Ethics of AGI Design</h5>
									<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Keynote Replay</p>
								</div>
								{/* Replay 4 */}
								<div className="group cursor-pointer">
									<div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
										<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="wide angle shot of a clean minimal office rooftop at sunset with a cinematic purple sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc9YaxZ_EQEDjbrrDD98aXPHM2MOvlwxwbOgy4PSrA97SXtW0Hn9I0_91vKgX1xf2EJ3rJCMsIndmZgVGPjwo2j0UtbgcHWw3oJYdp1oIaHJPSu3BCjkrZFvMcoo-TY1C7Z6wUSH9F1B9JYy78bf6Ak1WofKFxMB2aHIs_g-Fpnac7iAK5-mN67ZZ7i0uEdrnn4MyRNomqmw5J_cJBzpvjTD1zb1csmnfVyQ9NKyPEtr3JNHtO5JkpM03qLNKRl2BNv25XipmT-jA" />
										<div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
											<span className="material-symbols-outlined text-5xl text-white">play_circle</span>
										</div>
										<span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-bold rounded">35:40</span>
									</div>
									<h5 className="text-sm font-bold text-slate-200 line-clamp-1 mb-1">Bootstrapping in 2024</h5>
									<p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Workshop</p>
								</div>
							</div>
						</div>
					</section>
					{/* SECTION 7: HOST CTA */}
					<section className="px-6 md:px-12 py-24 text-center">
						<div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden relative p-12 md:p-20 border border-white/10">
							<div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-950 to-slate-950 -z-10"></div>
							<div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
							<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full"></div>
							<h2 className="font-manrope text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter leading-tight">Empower the Community. <br />Host Your Event.</h2>
							<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Are you building something game-changing? Get the platform, audience, and technical support you need to make it happen.</p>
							<div className="flex justify-center">
								<button className="group flex items-center gap-3 bg-white text-slate-950 px-10 py-4 rounded-full font-black text-base hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
									Create Your Event
									<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
								</button>
							</div>
						</div>
					</section>
				</main>
				<HomeFooter />
			</div>
		);
	}
						<a className="text-slate-400 hover:text-[#0052FF] transition-colors text-xl" href="#"><span className="material-symbols-outlined">public</span></a>
						<a className="text-slate-400 hover:text-[#0052FF] transition-colors text-xl" href="#"><span className="material-symbols-outlined">podcasts</span></a>
						<a className="text-slate-400 hover:text-[#0052FF] transition-colors text-xl" href="#"><span className="material-symbols-outlined">share_reviews</span></a>
					</div>
				</div>
			</footer>
		</div>
	);
}## Error Type
Build Error

## Error Message
Expected ';', '}' or <eof>

## Build Output
./app/events/page.tsx:43:13
Expected ';', '}' or <eof>
  41 | 								<input className="w-full bg-slate-900 border-none rounded-...
  42 | 							</div>
> 43 | 							<div className="flex gap-2 overflow-x-auto w-full md:w-aut...
     |      ^^^^^^^^^
  44 | 								<button className="whitespace-nowrap px-5 py-2 bg-blue-600...
  45 | 								<button className="whitespace-nowrap px-5 py-2 bg-slate-90...
  46 | 								<button className="whitespace-nowrap px-5 py-2 bg-slate-90...

Parsing ecmascript source code failed

Next.js version: 16.2.4 (Turbopack)
