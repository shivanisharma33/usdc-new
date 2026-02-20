import { motion } from 'framer-motion';
import { Cpu, Globe, ArrowUpRight } from 'lucide-react';

const Arm200 = () => {

    return (
        <section className="relative py-24 bg-slate-950 overflow-hidden text-white">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                        >
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-xs font-black text-cyan-400 uppercase tracking-[0.3em]">Institutional Milestone</span>
                        </motion.div>

                        <div className="space-y-6">

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                            >
                                <span className="text-white">ARM</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">200 MW.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl"
                            >
                                Reaching the next horizon of digital infrastructure. Initiating the development of 200MW+ Hyperscale projects designed for the world's most demanding AI and enterprise workloads.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6"
                        >
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold">Hyperscale Blueprint</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Advanced liquid cooling and high-density rack configurations Optimized for 200MW+ output.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 border border-white/10">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold">Strategic Siting</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Identifying under-utilized energy assets across global corridors to minimize carbon impact.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-8"
                        >
                            <button className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-all">
                                Project Roadmap <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Side: Visual Element */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative z-10 aspect-square flex items-center justify-center"
                        >
                            {/* Central Glow */}
                            <div className="absolute w-[80%] h-[80%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />

                            {/* Tech Ring Visual */}
                            <div className="relative w-full h-full border-2 border-white/5 rounded-full flex items-center justify-center">
                                <div className="w-[85%] h-[85%] border border-white/10 rounded-full border-dashed animate-spin-slow" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <motion.span
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="block text-8xl md:text-9xl font-black text-white"
                                        >
                                            200
                                        </motion.span>
                                        <span className="text-2xl font-black text-cyan-400 uppercase tracking-[0.4em]">Megawatts</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Data Nodes */}
                            {[0, 72, 144, 216, 288].map((angle, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -15, 0],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 4,
                                        delay: i * 0.5,
                                        repeat: Infinity
                                    }}
                                    className="absolute w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                    style={{
                                        top: `${50 + 45 * Math.sin(angle * Math.PI / 180)}%`,
                                        left: `${50 + 45 * Math.cos(angle * Math.PI / 180)}%`,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Arm200;
