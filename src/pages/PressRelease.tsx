import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, Newspaper, Download, Share2, Zap, Clock, ChevronRight, User, Search } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const brandNavy = "#001738";
const cyanColor = "#40D1FB";

const PressRelease = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

    const pressReleases = [
        {
            id: 1,
            title: "USDC Unveils Strategic Expansion of AI Infrastructure Across North America",
            date: "February 15, 2026",
            category: "Strategic Update",
            summary: "Major infrastructure initiative to deploy next-generation liquid-cooled data centers in key power corridors, supporting the rapid acceleration of enterprise AI.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2070",
            readTime: "4 min read"
        },
        {
            id: 2,
            title: "DigiPowerX and USDC Announce Joint Venture for Sustainable Energy Integration",
            date: "January 28, 2026",
            category: "Partnership",
            summary: "A landmark agreement to direct-wire 500MW of renewable assets into high-performance computing clusters, setting a new benchmark for PUE efficiency.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
            readTime: "3 min read"
        },
        {
            id: 3,
            title: "Q4 2025 Financial Performance: Records Breaking Growth in Digital Infrastructure",
            date: "January 10, 2026",
            category: "Financial",
            summary: "USDC reports record revenue growth driven by hyperscale demand and successful commissioning of the Northern Virginia Phase II facility.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070",
            readTime: "6 min read"
        }
    ];

    return (
        <div className="bg-white">
            {/* ── DESIGN 4.0: THE "CINEMATIC COMMAND" HERO ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Immersive Video/Image Background */}
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-white z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                        alt="News & Insights"
                        className="w-full h-full object-cover grayscale opacity-40 scale-110"
                    />
                </motion.div>

                {/* Animated HUD Elements */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-white/5 opacity-20" />
                </div>

                <div className="relative z-20 text-center px-6 max-w-7xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500 text-slate-950 rounded-full mb-8 font-black uppercase text-[10px] tracking-[0.4em] shadow-2xl shadow-cyan-500/40">
                            <Zap className="w-4 h-4 fill-current" />
                            Live Transmission
                        </div>

                        <h1 className="text-8xl md:text-[14rem] font-black text-white tracking-tighter leading-none mb-8 uppercase select-none">
                            PRESS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ROOM.</span>
                        </h1>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16 scale-110">
                            <div className="text-center group cursor-pointer">
                                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Total Archives</p>
                                <p className="text-4xl font-black text-white leading-none">004</p>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden md:block" />
                            <div className="text-center group cursor-pointer">
                                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Last Updated</p>
                                <p className="text-4xl font-black text-white leading-none">TODAY</p>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden md:block" />
                            <div className="text-center group cursor-pointer">
                                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Source Status</p>
                                <p className="text-4xl font-black text-white leading-none">VERIFIED</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-3"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500 to-transparent" />
                </motion.div>
            </section>

            {/* ── TRENDING NEWS BENTO ── */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Major Hero Card */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="lg:col-span-8 bg-slate-950 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                            <div className="relative z-10 h-full flex flex-col justify-end space-y-8">
                                <span className="bg-cyan-500 text-slate-950 px-5 py-2 text-[10px] font-black uppercase tracking-widest w-fit">Featured release</span>
                                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                                    Strategic AI <br /> <span className="text-cyan-500">Expansion</span> 2026.
                                </h2>
                                <p className="text-slate-400 text-lg font-medium max-w-xl group-hover:text-white transition-colors">
                                    Leading the next generation of liquid-cooled infrastructure to support global enterprise hardware demands.
                                </p>
                                <div className="flex items-center gap-6 pt-4">
                                    <button className="px-10 py-5 bg-white text-slate-950 font-black uppercase tracking-widest hover:bg-cyan-500 transition-all rounded-full flex items-center gap-3">
                                        Full Story <ArrowUpRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Side Sidebar Card */}
                        <div className="lg:col-span-4 space-y-8">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="bg-slate-100 rounded-[3rem] p-10 space-y-8 group cursor-pointer"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-slate-950 flex items-center justify-center text-white rounded-2xl group-hover:bg-cyan-500 transition-colors">
                                        <Newspaper className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Jan 28</span>
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight group-hover:text-cyan-500 transition-colors">
                                    Joint Venture <br /> Integration.
                                </h3>
                                <p className="text-slate-500 text-sm font-medium">500MW Renewable integration announced today.</p>
                                <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="bg-cyan-500 rounded-[3rem] p-10 space-y-8 group cursor-pointer shadow-2xl shadow-cyan-500/20"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-slate-950 flex items-center justify-center text-white rounded-2xl group-hover:bg-white group-hover:text-slate-950 transition-colors">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-tight">
                                    Q4 Records <br /> Growth.
                                </h3>
                                <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-slate-950/60">
                                    Read Analysis <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE INTELLIGENT LIST ── */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="space-y-4">
                            <span className="text-xs font-black text-cyan-500 uppercase tracking-[0.6em]">Document Repository</span>
                            <h2 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">Archive.</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <Search className="w-5 h-5 text-slate-300" />
                            <input type="text" placeholder="Filter by keyword..." className="bg-transparent border-b border-slate-200 py-2 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-cyan-500 transition-all w-64" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        {pressReleases.map((pr, i) => (
                            <motion.div
                                key={pr.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2rem] p-4 lg:p-6 border border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/5 transition-all"
                            >
                                <div className="flex items-center gap-8 flex-1">
                                    <div className="w-24 h-24 rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all shadow-xl">
                                        <img src={pr.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                            <span className="text-cyan-500">{pr.category}</span>
                                            <span>•</span>
                                            <Calendar className="w-3 h-3" /> {pr.date}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-cyan-500 transition-colors uppercase tracking-tight">{pr.title}</h3>
                                    </div>
                                </div>

                                <div className="flex items-center gap-12 pl-32 lg:pl-0">
                                    <div className="hidden xl:block text-right">
                                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Impact Status</p>
                                        <p className="text-xs font-bold text-slate-900 uppercase">Strategic</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Download</p>
                                        <div className="flex items-center gap-2">
                                            <Download className="w-4 h-4 text-cyan-500" />
                                            <span className="text-xs font-black text-slate-950 uppercase tracking-widest">PDF</span>
                                        </div>
                                    </div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="w-16 h-16 bg-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-all flex items-center justify-center rounded-2xl"
                                    >
                                        <ArrowUpRight className="w-6 h-6" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THE HUB FOOTER ── */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-cyan-500/5 skew-x-[-20deg] translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-10">
                            <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">Press <br /> <span className="text-cyan-500">Center.</span></h3>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">For institutional inquiries, high-resolution brand assets, or executive commentary.</p>
                            <div className="space-y-4">
                                <a href="mailto:media@usdc.com" className="text-3xl font-black text-white hover:text-cyan-500 transition-colors flex items-center gap-4 group">
                                    media@usdc.com <ArrowUpRight className="w-6 h-6 text-cyan-500 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </a>
                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">Global Press Relations</p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] space-y-8 hover:border-cyan-500/50 transition-all group">
                                <h4 className="text-2xl font-black text-white uppercase tracking-widest">Brand Kit 2026</h4>
                                <p className="text-slate-500 text-sm">Download all logos, renders, and guidelines in one master file.</p>
                                <button className="w-full py-5 bg-cyan-500 text-slate-950 font-black uppercase tracking-widest hover:bg-white transition-all rounded-full flex items-center justify-center gap-3">
                                    Download (84MB) <Download className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

export default PressRelease;
