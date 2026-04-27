'use client';

import { motion } from 'framer-motion';

const NvidiaArchitecture = () => {
    return (
        <section className="bg-[#0a0f1c] py-24 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32 relative z-10">
                {/* Section 1: Built for NVIDIA's Roadmap */}
                <div className="space-y-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-4 text-[#40D1FB] text-sm font-bold tracking-widest uppercase">
                            <span className="w-8 h-[2px] bg-[#40D1FB]"></span>
                            GPU PLATFORM SUPPORT
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                            Built for <span className="text-[#40D1FB]">NVIDIA&apos;s Roadmap</span>
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl max-w-3xl pt-2">
                            The ARMS200 is engineered to support NVIDIA&apos;s highest-density AI compute platforms — today and into the next generation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 hover:border-[#40D1FB]/30 transition-all duration-300"
                        >
                            <div className="inline-block bg-[#0f172a] border border-[#1e293b] text-[#40D1FB] text-[11px] font-bold px-3 py-1.5 rounded-full mb-8 tracking-wider">
                                <span className="mr-1.5">•</span> CURRENTLY SUPPORTED
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Blackwell</h3>
                            <p className="text-sm text-slate-400 mb-8 font-medium">NVIDIA B100 / B200 Series</p>
                            <ul className="space-y-4 text-[13px] text-slate-300 font-medium">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> DTC liquid cooling — fully integrated
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> High-density rack power up to 120 kW/rack
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> Optimized coolant loop thermal design
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> Low-latency InfiniBand fabric ready
                                </li>
                            </ul>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#111827] border border-[#40D1FB]/40 rounded-2xl p-8 hover:border-[#40D1FB]/70 transition-all duration-300 shadow-[0_0_40px_rgba(64,209,251,0.08)] relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#40D1FB]/50 to-transparent rounded-t-2xl opacity-50"></div>
                            <div className="inline-block bg-[#0f172a] border border-[#1e293b] text-[#40D1FB] text-[11px] font-bold px-3 py-1.5 rounded-full mb-8 tracking-wider">
                                <span className="mr-1.5">•</span> CURRENTLY SUPPORTED
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Grace Blackwell</h3>
                            <p className="text-sm text-slate-400 mb-8 font-medium">NVIDIA GB200 / NVL Series</p>
                            <ul className="space-y-4 text-[13px] text-slate-300 font-medium">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> NVL72 / NVL36 rack configurations
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> Unified CPU+GPU liquid cooling loops
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> 400G / 800G networking fabric support
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> Up to 1.8 MW per module for full NVL builds
                                </li>
                            </ul>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300"
                        >
                            <div className="inline-block bg-[#0f172a] border border-[#1e293b] text-amber-500 text-[11px] font-bold px-3 py-1.5 rounded-full mb-8 tracking-wider">
                                <span className="mr-1.5">•</span> IN DEVELOPMENT
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Vera Rubin</h3>
                            <p className="text-sm text-slate-400 mb-8 font-medium">NVIDIA Rubin / Rubin Ultra — 2025+</p>
                            <ul className="space-y-4 text-[13px] text-slate-300 font-medium">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> Thermal architecture in active development
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> Next-gen DTC loop design in progress
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> Targeting &gt;1 MW/rack density
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#40D1FB] mt-0.5 text-[10px]">●</span> Module upgradeable — no pod replacement
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Section 2: DTC Liquid Cooling From Day One */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-6 border-t border-[#1e293b]"
                >
                    <div className="max-w-4xl space-y-8 pt-10">
                        <div className="flex items-center gap-4 text-[#40D1FB] text-sm font-bold tracking-widest uppercase">
                            <span className="w-8 h-[2px] bg-[#40D1FB]"></span>
                            THERMAL INFRASTRUCTURE
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                            DTC Liquid Cooling <br />
                            <span className="text-[#40D1FB]">From Day One</span>
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl">
                            Air cooling can&apos;t keep up with modern GPU clusters. The ARMS200 is designed ground-up around Direct-to-Chip liquid cooling — no retrofits, no compromises.
                        </p>
                    </div>
                </motion.div>

                {/* Section 3: The Infrastructure AI Teams Actually Need */}
                <div className="space-y-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                            The Infrastructure <br />
                            <span className="text-[#40D1FB]">AI Teams Actually Need</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Cards 1-6 */}
                        {[
                            {
                                num: '01',
                                title: 'Speed to Compute',
                                desc: 'While traditional data centers take 2-4 years, ARMS200 modules deploy in under 90 days. For AI teams, faster infrastructure means faster training, faster products, and faster competitive advantage.'
                            },
                            {
                                num: '02',
                                title: 'Modular Scalability',
                                desc: 'Start at 600 kW and expand to 40 MW on the same campus without downtime. Each module is independently operational, so your existing workloads never pause for expansion.'
                            },
                            {
                                num: '03',
                                title: 'GPU-Native Design',
                                desc: 'ARMS200 is architected around NVIDIA\'s GPU roadmap — not adapted from general-purpose data center designs. Thermal, power, and networking are optimized for AI compute from day one.'
                            },
                            {
                                num: '04',
                                title: 'TIA-942 Rated-3',
                                desc: 'Every ARMS200 module carries TIA-942 Rated-3 certification — independently verified concurrent maintainability across architecture, telecom, electrical, and mechanical systems.'
                            },
                            {
                                num: '05',
                                title: 'CapEx Efficiency',
                                desc: 'Pay for compute capacity as you deploy it. Modular procurement eliminates the multi-hundred-million dollar greenfield commitment required by traditional data center builds.'
                            },
                            {
                                num: '06',
                                title: 'Future-Proof Platform',
                                desc: 'With Vera Rubin cooling architecture in active development, ARMS200 customers get a clear upgrade path — ensuring today\'s infrastructure investment supports tomorrow\'s GPU generations.'
                            }
                        ].map((item, i) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                key={i} 
                                className="bg-[#111827] border border-[#1e293b] rounded-2xl p-8 hover:border-[#40D1FB]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(64,209,251,0.05)] group"
                            >
                                <div className="text-5xl font-black text-[#1e293b] mb-6 group-hover:text-[#40D1FB]/20 transition-colors">{item.num}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-[14px] text-slate-400 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NvidiaArchitecture;
