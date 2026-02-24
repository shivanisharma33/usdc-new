import { motion } from 'framer-motion';
import { Zap, Clock, Shield, CheckCircle2 } from 'lucide-react';

const Arm200 = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-none text-left italic uppercase">
                                ARMS 200 <span className="text-cyan-500">System</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium max-w-xl">
                                <p>
                                    The ARMS 200 is USDC's proprietary modular data-center platform.
                                    Each module delivers up to 600 kW of critical IT load and is designed for Tier III redundancy (concurrent maintainability).
                                </p>
                                <p>
                                    The system's prefabricated architecture allows rapid on-site assembly and
                                    integration with chilled-water or direct-to-chip cooling systems, making it the
                                    ideal solution for AI-ready infrastructure.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Boxes */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-6 rounded-2xl bg-cyan-50 border border-cyan-100 flex flex-col gap-3"
                            >
                                <div className="flex items-center gap-3 text-cyan-600">
                                    <Zap className="w-5 h-5" />
                                    <span className="font-bold uppercase tracking-wider text-sm">Power Capacity</span>
                                </div>
                                <div className="text-4xl font-black text-slate-900">40 MW</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-6 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col gap-3"
                            >
                                <div className="flex items-center gap-3 text-blue-600">
                                    <Clock className="w-5 h-5" />
                                    <span className="font-bold uppercase tracking-wider text-sm">Deployment</span>
                                </div>
                                <div className="text-4xl font-black text-slate-900">≤ 12 Mo</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Visuals */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <img
                                src="/arms.webp"
                                alt="ARMS 200 System"
                                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                            />

                            {/* Floating Certificate */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, x: 20 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="absolute -bottom-12 -right-6 md:-right-12 w-2/3 md:w-[320px] bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 hidden sm:block"
                            >
                                <div className="text-center">
                                    <div className="flex justify-center mb-3">
                                        <Shield className="w-8 h-8 text-red-600" />
                                    </div>
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">TIA-942 READY</h4>
                                    <div className="text-sm font-black text-slate-900 uppercase italic mb-3">Rated-3 Certified</div>
                                    <div className="flex justify-center gap-2">
                                        {['Arch', 'Elec', 'Mech', 'Tel'].map((scope) => (
                                            <div key={scope} className="px-2 py-1 bg-slate-50 rounded text-[8px] font-bold text-slate-500 uppercase">
                                                {scope}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Decorative Element for Image */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Arm200;
