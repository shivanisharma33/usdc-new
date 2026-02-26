import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Globe, Zap, ArrowUpRight, Activity, ShieldCheck, Box, Server, Lock } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const Locations = () => {
    const { hash } = useLocation();
    const [activeLocation, setActiveLocation] = useState<string | null>(null);

    // Scroll to section based on hash
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    // Parallax Hero
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

    const locations = [
        {
            id: "buffalo",
            city: "Buffalo, New York",
            address: "1001 E Delavan Ave",
            status: "Operational",
            capacity: "19MW",
            tier: "Tier III Compliant",
            type: "Sustainable HPC",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2070",
            coords: { x: 82, y: 35 },
            description: "Strategically located to leverage regional power assets and direct sustainable energy integration."
        },
        {
            id: "tonawanda",
            city: "North Tonawanda, NY",
            address: "1070 Erie Ave",
            status: "Operational",
            capacity: "Active Site",
            tier: "Tier III Standard",
            type: "Enterprise Data Hub",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
            coords: { x: 80, y: 33 },
            description: "High-density facility optimized for cryptocurrency mining transitioning to GPU cloud compute."
        },
        {
            id: "alabama",
            city: "Columbiana, Alabama",
            address: "Alabama Tech Corridor",
            status: "Expanding",
            capacity: "ARMS 200 Ready",
            tier: "Tier III Certified",
            type: "GPU Integration Site",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070",
            coords: { x: 70, y: 75 },
            description: "Our flagship ARMS 200 deployment site, specializing in high-density GPU clustering for AI workloads."
        },
        {
            id: "carolina",
            city: "Hildebran, NC",
            address: "199 Cline Pk Ct",
            status: "Planned",
            capacity: "Upcoming",
            tier: "Tier III Designed",
            type: "Expansion Facility",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
            coords: { x: 78, y: 60 },
            description: "Next-generation data center campus planned to support the growing demand for cloud infrastructure in the Southeast."
        }
    ];

    return (
        <div className="bg-white">
            {/* ── CINEMATIC LOCATION HERO ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-white z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                        alt="US Data Centers"
                        className="w-full h-full object-cover scale-110 grayscale opacity-40 contrast-125"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-7xl mx-auto space-y-12 pt-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500 text-slate-950 rounded-full mb-8 font-black uppercase text-[10px] tracking-[0.4em]">
                            <Globe className="w-4 h-4 fill-current" />
                            Nationwide Network
                        </div>
                        <h1 className="text-8xl md:text-[14rem] font-black text-white tracking-tighter leading-none mb-8 uppercase select-none">
                            CENTERS.
                        </h1>
                        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto uppercase tracking-[0.3em] font-bold leading-relaxed">
                            Developing and operating Tier III-compliant <br /> data-center campuses across the United States.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-cyan-500 to-transparent" />
                    <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.6em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
                </div>
            </section>

            {/* ── PREMIUM INTERACTIVE GLOBAL MAP (HIGH-RES IMAGE) ── */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Clean Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(64,209,251,0.1),transparent_70%)] opacity-30" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center mb-24 text-center">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-900 rounded-full mb-6 font-black uppercase text-[9px] tracking-[0.4em]">
                            <Globe className="w-3 h-3 text-cyan-600" />
                            Global Infrastructure Network
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">
                            GLOBAL <span className="text-cyan-600">REACH.</span>
                        </h2>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest max-w-xl leading-relaxed">
                            A highly-distributed compute ecosystem built for the next generation of AI and High Performance Computing.
                        </p>
                    </div>

                    <div className="relative aspect-[16/9] w-full bg-white rounded-[4rem] border border-slate-200 shadow-[0_60px_120px_rgba(0,0,0,0.08)] overflow-hidden group">
                        {/* THE REAL MAP IMAGE */}
                        <img
                            src="/world-map.png"
                            alt="USDC Global Footprint"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-[1.05]"
                        />

                        {/* Technical Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:50px_50px] opacity-40 pointer-events-none" />

                        {/* HUD Elements */}
                        <div className="absolute top-12 left-12 z-30 flex gap-12 bg-white/80 backdrop-blur-2xl p-6 border border-slate-200/50 rounded-2xl shadow-xl">
                            <div className="space-y-1">
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Operating Zones</p>
                                <p className="text-xl font-black text-slate-900 uppercase">05 Regionals</p>
                            </div>
                            <div className="space-y-1 border-l border-slate-200 pl-8">
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Network Speed</p>
                                <p className="text-xl font-black text-cyan-600 uppercase tracking-tighter">TBPS / SEC</p>
                            </div>
                        </div>

                        {/* DATA HUB PINS */}
                        <div className="absolute inset-0 z-30">
                            {/* LONDONTECH HUB Pin (Pinned as per user reference image) */}
                            <motion.div
                                style={{ left: `48.5%`, top: `35%` }}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                                onMouseEnter={() => setActiveLocation('strategic-hub')}
                                onMouseLeave={() => setActiveLocation(null)}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 4], opacity: [0.6, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity }}
                                        className="absolute w-12 h-12 rounded-full bg-rose-500/30"
                                    />
                                </div>
                                <div className="relative w-6 h-6 rounded-full border-[3px] border-white shadow-2xl bg-rose-600 transition-all duration-300 group-hover:scale-150">
                                    <div className="absolute inset-1 rounded-full bg-white opacity-80 animate-pulse" />
                                </div>
                                <AnimatePresence>
                                    {(activeLocation === 'strategic-hub') && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: -90 }}
                                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                            className="absolute left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-2xl border border-slate-200 p-6 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] pointer-events-none z-50 min-w-[280px]"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-2.5 h-2.5 rounded-full bg-rose-600 shadow-[0_0_100px_rgba(225,29,72,0.8)]" />
                                                <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest">European Strategic Hub</p>
                                            </div>
                                            <h5 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-1 leading-none">London Unit 01</h5>
                                            <p className="text-[10px] font-bold text-slate-400 mb-5 uppercase tracking-widest">United Kingdom Operation</p>
                                            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/50 flex justify-between items-center text-[10px] font-black text-slate-900 uppercase">
                                                <span>TIER III+</span>
                                                <span className="text-slate-200">|</span>
                                                <span className="text-cyan-600 tracking-widest leading-none">Status: Active</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* North American Operations Group */}
                            <motion.div
                                style={{ left: `20%`, top: `38%` }}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div animate={{ scale: [1, 2.5], opacity: [0.3, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute w-20 h-20 rounded-full bg-cyan-500/20" />
                                </div>
                                <div className="relative w-6 h-6 rounded-full border-[3px] border-white shadow-xl bg-cyan-600" />
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity">US Data Corridor</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECTS GRID (Based on DigiPowerX) ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                        <div className="p-10 bg-slate-50 border border-slate-100 space-y-4">
                            <Box className="w-8 h-8 text-cyan-500" />
                            <h4 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">4</h4>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Facilities</p>
                        </div>
                        <div className="p-10 bg-slate-50 border border-slate-100 space-y-4">
                            <Server className="w-8 h-8 text-cyan-500" />
                            <h4 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">400+</h4>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total MW Capacity</p>
                        </div>
                        <div className="p-10 bg-slate-50 border border-slate-100 space-y-4">
                            <Activity className="w-8 h-8 text-cyan-500" />
                            <h4 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">99.98%</h4>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Uptime SLA</p>
                        </div>
                        <div className="p-10 bg-slate-50 border border-slate-100 space-y-4">
                            <Lock className="w-8 h-8 text-cyan-500" />
                            <h4 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">TIER III</h4>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compliance Standard</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-20">
                        <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none text-center">U.S. Data Centers</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-slate-100 border border-slate-100">
                        {locations.map((loc, i) => (
                            <div key={i} id={loc.id} className="bg-white p-16 group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[600px]">
                                <div className="relative z-10 space-y-12">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${loc.status === 'Operational' ? 'bg-cyan-500 shadow-[0_0_8px_#40D1FB]' : 'bg-orange-400 shadow-[0_0_8px_#fb923c]'}`} />
                                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">{loc.status}</span>
                                            </div>
                                            <h3 className="text-5xl font-black text-slate-950 uppercase tracking-tighter leading-none">{loc.city}</h3>
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{loc.address}</p>
                                        </div>
                                        <div className="w-16 h-16 bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <div className="relative aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                                        <img src={loc.image} alt={loc.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-slate-500 font-medium leading-relaxed max-w-lg">
                                            {loc.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-8">
                                            <div>
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Infrastructure Load</p>
                                                <p className="text-lg font-black text-slate-950 uppercase">{loc.capacity}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Facility Standard</p>
                                                <p className="text-lg font-black text-slate-950 uppercase">{loc.tier}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PERFORMANCE FEATURES ── */}
            <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center rounded-2xl">
                            <ShieldCheck className="w-6 h-6 text-slate-950" />
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-widest">Enterprise-Grade Security</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">24/7 monitoring with biometric access and SOC 2 transparency compliance.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center rounded-2xl">
                            <Globe className="w-6 h-6 text-slate-950" />
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-widest">Sustainable Operations</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Direct-wire renewable energy integration and secondary heat recovery systems.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center rounded-2xl">
                            <Box className="w-6 h-6 text-slate-950" />
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-widest">Scalable Infrastructure</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Future-proof ARMS 200 platform for rapid, predictable expansion cycles.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center rounded-2xl">
                            <Zap className="w-6 h-6 text-slate-950" />
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-widest">AI-Optimized Hardware</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">High-density GPU clustering and ultra-low latency networking cores.</p>
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

export default Locations;
