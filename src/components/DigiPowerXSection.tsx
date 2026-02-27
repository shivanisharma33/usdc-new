'use client';

import OptimizedImage from './OptimizedImage';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Shield, Globe } from 'lucide-react';

const DigiPowerXSection = () => {
    return (
        <section className="relative py-32 bg-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-[-12deg] translate-x-1/2" />
            <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl">
                            <OptimizedImage
                                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070"
                                alt="Renewable Energy Integration"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                            {/* Floating Stats Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 shadow-2xl space-y-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center rounded-2xl">
                                        <Zap className="w-6 h-6 text-slate-950" />
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-2xl uppercase tracking-tighter">100%</p>
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Sustainability</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative HUD */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-[4rem] hidden lg:block" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-[4rem] hidden lg:block" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-100 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Strategic Ecosystem</span>
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                                OUR PARTNER: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">DIGIPOWERX</span>
                            </h2>

                            <p className="text-gray-500 text-lg lg:text-xl font-medium leading-relaxed max-w-xl">
                                DigiPowerX is the cornerstone of our sustainable infrastructure. By integrating their industrial-grade power solutions, we ensure 100% uptime with a carbon-negative footprint.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                                <Shield className="w-8 h-8 text-cyan-500 mt-1" />
                                <div>
                                    <h4 className="font-black text-slate-950 uppercase tracking-tighter">Power Guard</h4>
                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">Redundant energy systems for hyperscale reliability.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                                <Globe className="w-8 h-8 text-cyan-500 mt-1" />
                                <div>
                                    <h4 className="font-black text-slate-950 uppercase tracking-tighter">Green Grid</h4>
                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">Direct integration with renewable wind and solar assets.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="https://www.digipowerx.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-slate-950 text-white font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-2xl hover:shadow-cyan-500/40 group"
                            >
                                Visit Website <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DigiPowerXSection;
