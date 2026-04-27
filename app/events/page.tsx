import HomeNavbar from "../../components/HomeNavbar";
import HomeFooter from "../../components/HomeFooter";

export default function EventsPage() {
	return (
		<div className="scroll-smooth bg-[#faf8ff] text-[#131b2e] min-h-screen selection:bg-primary-container selection:text-white">
			<HomeNavbar />
			<main className="pt-0 overflow-x-hidden">
				{/* SECTION 1: HERO */}
				<section className="relative min-h-[618px] flex items-start pt-10 md:pt-14 px-6 md:px-12 overflow-hidden">
					<div className="absolute inset-0 z-0">
						<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
						<img className="w-full h-full object-cover opacity-40 scale-105" alt="hero" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV9EAu7CPACT4Tbh9_bDJMz5fitBYrvImHd3BQIPFLOwCyWnFaB6vIrC0LnMC7nV4EuguwijBBvg19-AWbklHEgvfA3ytPyL8HPtx47_Xhbu76LQPK3UfLxaFBsN8TfIBnaNuxAzr2_QFe0JWal6G1f1Yp_AWppBikppIKNaWxI4Y3kRCccm1vgQ9BX0tyVApuOEy_eU7aOPUmXHevq8sez07XvTALKCeNizZV8hgC1uauRzR9bTgJyDBnqAZWFZ5d79ooGDld8VE" />
					</div>
					<div className="relative z-20 max-w-2xl">
						<span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">World-Class Connections</span>
						<h1 className="font-manrope text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
							Discover <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Startup Events</span>
						</h1>
						<p className="text-slate-300 text-lg md:text-xl mb-8 font-medium leading-relaxed max-w-lg">
							The focal point for founders, investors, and visionaries. Join high-impact gatherings designed to scale your ecosystem.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-base hover:scale-105 transition-all shadow-lg shadow-blue-900/20">
								Browse Events
							</button>
							<button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold text-base hover:bg-white/20 transition-all border border-slate-600">
								Host an Event
							</button>
						</div>
					</div>
				</section>

				{/* SECTION 2: FEATURED EVENT */}
				<section className="px-6 md:px-12 py-16">
					<div className="max-w-screen-2xl mx-auto rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-[0_30px_80px_rgba(19,27,46,0.08)]">
						<div className="grid grid-cols-1 lg:grid-cols-2">
							<div className="relative min-h-[320px] lg:min-h-full">
								<img
									className="absolute inset-0 w-full h-full object-cover"
									alt="founders on a stage presenting at a startup conference"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbUhDm_iexinJ3dUPk1T2R5uuaQ4mMUgJlyADyxKb_JBawnsQDzGMsSyfsKRR_pqV14eLdFV8W8a49VF7vuuo5KHkR8bx12KBvS67AdjJUTtiR5bY_BAAYuXyhEdGT-c4goFjhibX9P6bpUS0EU6D2Xzm0PxOXSrN8V5sjb-nNeDRVGYZbP_7OBU3s3UObMRrGot4pk2N5cOn1_lCFb93IhGB3iXc2UjBSk-uSK_lzTnLfyIqYQ1btDBr9OC3d0MPK9ykcupnTrkw"
								/>
								<div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 to-slate-950/10"></div>
								<div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
									<span className="px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-black tracking-widest uppercase border border-white/20">Featured</span>
									<span className="text-white/90 font-bold text-sm">May 27, 2026</span>
								</div>
							</div>
							<div className="p-8 md:p-12 flex flex-col justify-center">
								<span className="text-blue-600 text-xs font-black tracking-widest uppercase mb-4">Global Founder Week</span>
								<h2 className="font-manrope text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
									Legit Summit: Building Across Borders
								</h2>
								<p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
									A one-day summit bringing together founders, operators, and investors across Africa, Europe, and North America.
								</p>
								<div className="flex flex-wrap gap-3 mb-8">
									<span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">Lagos + Online</span>
									<span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">500+ Attendees</span>
									<span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">Investor Sessions</span>
								</div>
								<div className="flex flex-col sm:flex-row gap-3">
									<button className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:scale-[1.02] transition-transform">Reserve Seat</button>
									<button className="px-6 py-3 bg-slate-100 text-slate-800 rounded-xl font-bold hover:bg-slate-200 transition-colors">Download Agenda</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SECTION 3: FILTERS */}
				<section className="px-6 md:px-12 pb-8">
					<div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
						<div className="flex flex-wrap gap-2">
							<button className="px-5 py-2.5 rounded-full bg-primary text-white font-bold text-sm">All Events</button>
							<button className="px-5 py-2.5 rounded-full bg-white text-slate-700 font-bold text-sm border border-slate-200 hover:border-slate-400 transition-colors">Workshops</button>
							<button className="px-5 py-2.5 rounded-full bg-white text-slate-700 font-bold text-sm border border-slate-200 hover:border-slate-400 transition-colors">Demo Days</button>
							<button className="px-5 py-2.5 rounded-full bg-white text-slate-700 font-bold text-sm border border-slate-200 hover:border-slate-400 transition-colors">Roundtables</button>
							<button className="px-5 py-2.5 rounded-full bg-white text-slate-700 font-bold text-sm border border-slate-200 hover:border-slate-400 transition-colors">Networking</button>
						</div>
						<div className="w-full lg:w-auto">
							<input
								className="w-full lg:w-[320px] bg-white border border-slate-200 rounded-full px-5 py-2.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
								type="text"
								placeholder="Search by title, city, or speaker"
							/>
						</div>
					</div>
				</section>

				{/* SECTION 4: UPCOMING EVENTS */}
				<section className="px-6 md:px-12 py-12">
					<div className="max-w-screen-2xl mx-auto">
						<div className="flex justify-between items-end mb-8">
							<h3 className="font-manrope text-3xl font-extrabold tracking-tight">Upcoming Journeys</h3>
							<a className="text-blue-600 font-bold text-sm hover:underline decoration-2 underline-offset-8" href="#">View Calendar</a>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
							<div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow group">
								<div className="relative h-52">
									<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="workshop crowd" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmrg_chsI5qJhujWH7MQO07Fm3siJDBKx7kZ2nWFkH76-5kcdKdlQRr-9QmiThDD5-v5tO27Mx4snPL98OdfH8IdSCmxApPAFZ4j29EZA6l4y7ZC-pvEYwKpe75Yk29UHXQC4wsfpRnhgYe9GhWF8uVu6ByH8Me6LXswkbXBdM8TZonDHmdvqaSpivZOC6latIGeK-aTUmejCZec6apTJ2kTfwaKqq8GtP6MAirIVU8yFDhbF-pAx1Xk9_5UtbVukY4XFbZJCm8NY" />
									<span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 text-slate-800 text-[10px] font-black tracking-widest uppercase">Upcoming</span>
								</div>
								<div className="p-6">
									<div className="flex justify-between gap-4 mb-3">
										<h4 className="font-manrope text-xl font-bold leading-tight">The Series A Roadmap Workshop</h4>
										<span className="text-blue-600 text-sm font-black">MAY 12</span>
									</div>
									<p className="text-slate-600 text-sm mb-5">Masterclass on navigating the bridge between seed and scale with world-class VCs.</p>
									<div className="flex items-center justify-between">
										<span className="text-xs text-slate-500 font-bold uppercase tracking-widest">14:00 GMT</span>
										<button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-primary transition-colors">Register</button>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow group">
								<div className="relative h-52">
									<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="conference stage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZdVot2LVj3GOWpuaroOBMdxm669MY-UpZNmDNGiTnW5iAlF9MI_CCYYIlPusJwB3j_rkyrfCPX0zio10gFWLmQG20ivm100-rbr8HmIQnLijO7yvkc6a_XISIMRaWxRH8loMc6R9aRtyZrgCYc4Obcayfs4ET4xPQICr78HOc8nqb6iil1IHu5fmYF2KJYyk7KApgtJkkR36bUvTOgc4x0Bl46GqfW_5C8lV30T5d79OXr5iFMeiX_HP6lbLlZ35BCw4cTmQe_KU" />
									<span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 text-slate-800 text-[10px] font-black tracking-widest uppercase">Upcoming</span>
								</div>
								<div className="p-6">
									<div className="flex justify-between gap-4 mb-3">
										<h4 className="font-manrope text-xl font-bold leading-tight">Quantum Compute Demo Day</h4>
										<span className="text-blue-600 text-sm font-black">MAY 15</span>
									</div>
									<p className="text-slate-600 text-sm mb-5">Deep-tech founders present frontier breakthroughs and funding opportunities.</p>
									<div className="flex items-center justify-between">
										<span className="text-xs text-slate-500 font-bold uppercase tracking-widest">San Francisco</span>
										<button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-primary transition-colors">Register</button>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow group">
								<div className="relative h-52">
									<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="networking lounge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArVMgLuX04Kh_EK8IpsznidhEQUrkk8gN6Tf0iByEvtd1WSQDRAma35tcxPgrot7SQL-TzUTIhqsKoerIsUgvEpLK18G_SjClE2L_i3gy5e0KPNdPKmmL6aOUUdxUECjPvLXD4i2T3u_-CFESGpVTObuj9vvdlf_RFAzP-mgQnCNwhGrzlkkonSsA5n0ZuI20KURsaweYi1XhsWRPvSBIoe_VKBwtVkvMyc65-FqfjqeMpIaYS7EjD3CEfoQQ3WWwzk0tzBGNdGDs" />
									<span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 text-slate-800 text-[10px] font-black tracking-widest uppercase">Upcoming</span>
								</div>
								<div className="p-6">
									<div className="flex justify-between gap-4 mb-3">
										<h4 className="font-manrope text-xl font-bold leading-tight">Founder Mixer and Cocktails</h4>
										<span className="text-blue-600 text-sm font-black">MAY 18</span>
									</div>
									<p className="text-slate-600 text-sm mb-5">A high-casual evening for ecosystem builders to connect off-record.</p>
									<div className="flex items-center justify-between">
										<span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Berlin, DE</span>
										<button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-primary transition-colors">Register</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SECTION 5: PAST EVENTS */}
				<section className="px-6 md:px-12 py-16 bg-slate-950 text-white">
					<div className="max-w-screen-2xl mx-auto">
						<div className="flex justify-between items-end mb-8">
							<h3 className="font-manrope text-3xl font-extrabold tracking-tight">Rewatch Excellence</h3>
							<a className="text-blue-300 font-bold text-sm hover:underline" href="#">Open Replay Library</a>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
							<div className="group cursor-pointer">
								<div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
									<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="replay thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR-qtGw769T1lkSB65qHK6xcGfz-Eff8aZbfBQMhFf8lb60D_9Kz6d4_R2TdsyrFYm-VaQD5KRwzRVwriqsGkMfLnR2GKXVGk9gW6jcCre7O8RzaSiLKuSDQOye4mftCsHVfpvlllM_3WDDPbySTX2R8uyddZ-KKQ6Yl0rWL8BCKKn83g9CZMwp6GKgVItcjRtdEsIFn73FqEyXuH7bOpsc73RjWz0mBc9sexssAxAxH8Q3hSRvwtY5N3d7wo79Yny1fO9vtvwQI0" />
									<div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<span className="material-symbols-outlined text-5xl">play_circle</span>
									</div>
									<span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-bold rounded">48:12</span>
								</div>
								<h4 className="text-sm font-bold line-clamp-1">Scaling to $100M ARR</h4>
								<p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Documentary Special</p>
							</div>
							<div className="group cursor-pointer">
								<div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
									<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="replay thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDODr2lA8nQtD-_HFP5Prn5omTW1SkgmG5_FVyTFcb7-3EJxbUJ0TQ9MVWfixix2U3SXZYyCj6uPLs66vXYh4MAvLvVdMzFGBO2gta-TF9Tw3-hVttdvv2JP9zg2W0dtDO1GqJTnfXKXefV5B9qfrNUTKywkzLMeyTBSK0jfCeCZnLDr0Gd6zSwOlNms2Sara4n1RqowXS8LrMwW7j9CXvuhBIlIgzvNWVAvy1wyjUy8--XThR8NksLyR7hygGvc01vUfvSTRnQvgI" />
									<div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<span className="material-symbols-outlined text-5xl">play_circle</span>
									</div>
									<span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-bold rounded">1:15:00</span>
								</div>
								<h4 className="text-sm font-bold line-clamp-1">Web3 and the Ownership Economy</h4>
								<p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Roundtable</p>
							</div>
							<div className="group cursor-pointer">
								<div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
									<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="replay thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc9YaxZ_EQEDjbrrDD98aXPHM2MOvlwxwbOgy4PSrA97SXtW0Hn9I0_91vKgX1xf2EJ3rJCMsIndmZgVGPjwo2j0UtbgcHWw3oJYdp1oIaHJPSu3BCjkrZFvMcoo-TY1C7Z6wUSH9F1B9JYy78bf6Ak1WofKFxMB2aHIs_g-Fpnac7iAK5-mN67ZZ7i0uEdrnn4MyRNomqmw5J_cJBzpvjTD1zb1csmnfVyQ9NKyPEtr3JNHtO5JkpM03qLNKRl2BNv25XipmT-jA" />
									<div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<span className="material-symbols-outlined text-5xl">play_circle</span>
									</div>
									<span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-bold rounded">22:05</span>
								</div>
								<h4 className="text-sm font-bold line-clamp-1">The Ethics of AGI Design</h4>
								<p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Keynote Replay</p>
							</div>
							<div className="group cursor-pointer">
								<div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
									<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="replay thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArVMgLuX04Kh_EK8IpsznidhEQUrkk8gN6Tf0iByEvtd1WSQDRAma35tcxPgrot7SQL-TzUTIhqsKoerIsUgvEpLK18G_SjClE2L_i3gy5e0KPNdPKmmL6aOUUdxUECjPvLXD4i2T3u_-CFESGpVTObuj9vvdlf_RFAzP-mgQnCNwhGrzlkkonSsA5n0ZuI20KURsaweYi1XhsWRPvSBIoe_VKBwtVkvMyc65-FqfjqeMpIaYS7EjD3CEfoQQ3WWwzk0tzBGNdGDs" />
									<div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
										<span className="material-symbols-outlined text-5xl">play_circle</span>
									</div>
									<span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-bold rounded">35:40</span>
								</div>
								<h4 className="text-sm font-bold line-clamp-1">Bootstrapping in 2024</h4>
								<p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Workshop</p>
							</div>
						</div>
					</div>
				</section>

				{/* SECTION 6: HOST CTA */}
				<section className="px-6 md:px-12 py-20">
					<div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden relative p-12 md:p-16 border border-slate-200 bg-white">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100 -z-10"></div>
						<div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/20 blur-[100px] rounded-full"></div>
						<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-700/10 blur-[100px] rounded-full"></div>
						<h3 className="font-manrope text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter leading-tight text-slate-900">
							Empower the Community. <br />Host Your Event.
						</h3>
						<p className="text-slate-600 text-lg mb-10 max-w-2xl">
							Building something game-changing? Get the platform, audience, and support to make your event unforgettable.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="group flex items-center justify-center gap-2 bg-slate-950 text-white px-10 py-4 rounded-full font-black text-base hover:bg-blue-600 transition-all">
								Create Your Event
								<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
							</button>
							<button className="px-10 py-4 rounded-full font-black text-base text-slate-900 border border-slate-300 hover:bg-slate-100 transition-colors">
								Talk to Team
							</button>
						</div>
					</div>
				</section>
			</main>
			<HomeFooter />
		</div>
	);
}
