import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Activity, Server, Zap } from 'lucide-react';

const Opportunity = () => {
    const cyanColor = "#40D1FB";

    // Parallax setup
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const stats = [
        { icon: TrendingUp, label: "Data Growth", value: "x10", color: "text-blue-500" },
        { icon: Activity, label: "AI Workloads", value: "+300%", color: "text-cyan-500" },
        { icon: Server, label: "HPC Demand", value: "Unlimited", color: "text-indigo-500" },
        { icon: Zap, label: "Energy Efficiency", value: "Tier III", color: "text-emerald-500" }
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden bg-[#001738]">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y: yImg }}
                className="absolute inset-0 z-0 opacity-40 scale-110"
            >
                <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                    alt="Futuristic Technology Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#001738] via-transparent to-[#001738]" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <motion.div
                    style={{ opacity: opacityText }}
                    className="flex flex-col items-center text-center space-y-12"
                >
                    {/* Header Section */}
                    <div className="space-y-6 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                        >
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-xs font-bold text-cyan-400 uppercase tracking-[0.3em]">The Opportunity</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl lg:text-8xl font-black text-white leading-tight tracking-tight"
                        >
                            Powering the <span style={{ color: cyanColor }}>AI Evolution</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto"
                        >
                            The massive growth in data and AI is driving an unprecedented demand for
                            High-Performance Computing (HPC) power.
                        </motion.p>
                    </div>

                    {/* Main Description */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 lg:p-16 rounded-[3rem] max-w-5xl"
                    >
                        <p className="text-lg lg:text-2xl text-gray-400 leading-relaxed italic text-center">
                            "Data creates value, and AI unlocks it. As companies across all sectors race to integrate AI into
                            their business models, the need for specialized data centers that can handle these intensive
                            workloads is skyrocketing."
                        </p>

                        <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

                        <p className="mt-12 text-white text-xl lg:text-2xl font-bold tracking-wide uppercase">
                            USDC is positioned to capture this demand.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className={`inline-flex p-3 rounded-xl bg-gray-900 mb-4 ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(${cyanColor} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>
        </section>
    );
};

export default Opportunity;
