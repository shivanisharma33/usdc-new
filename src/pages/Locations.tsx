import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MapPin, Globe, Zap, ArrowUpRight, ChevronDown, Activity, ShieldCheck } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const Locations = () => {
    const { hash } = useLocation();

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
            id: "virginia",
            city: "Northern Virginia",
            region: "USA East",
            status: "Operational",
            capacity: "120MW",
            tier: "Tier III Gold",
            type: "Hyperscale Hub",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070",
            coords: "39.0438° N"
        },
        {
            id: "ohio",
            city: "Columbus, Ohio",
            region: "USA Central",
            status: "Expanding",
            capacity: "85MW",
            tier: "Tier III",
            type: "Carbon-Free Site",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
            coords: "39.9612° N"
        },
        {
            id: "helsinki",
            city: "Helsinki",
            region: "Europe North",
            status: "Operational",
            capacity: "45MW",
            tier: "Tier III+",
            type: "Heat Recovery",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070",
            coords: "60.1699° N"
        },
        {
            id: "singapore",
            city: "Singapore",
            region: "Asia Pacific",
            status: "Strategic",
            capacity: "60MW",
            tier: "Tier III",
            type: "Digital Gateway",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
            coords: "1.3521° N"
        }
    ];

    return (
        <div className="bg-white">
            {/* Theme Consistent: Dark Institutional Hero */}
            <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-white z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                        alt="Global Network"
                        className="w-full h-full object-cover scale-110 grayscale opacity-40 contrast-125"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8 pt-20 md:pt-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >

                        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                            GLOBAL <br /> <span className="text-cyan-400">SYSTEMS</span>
                        </h1>

                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Node Status</span>
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                </motion.div>
            </section>

            {/* Performance Metrics Bar - Theme Consistent */}
            <section className="bg-slate-900 py-12 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Aggregate Capacity", value: "310MW", icon: Zap },
                            { label: "Uptime Reliability", value: "99.999%", icon: Activity },
                            { label: "Operational Hubs", value: "04 Nodes", icon: Globe },
                            { label: "Secured Assets", value: "Tier III Gold", icon: ShieldCheck }
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                                    <stat.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                                    <p className="text-3xl font-black text-white">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Location Grid - Theme Consistent: Grayscale, Sharp, Bold */}
            <section className="py-32 bg-white overflow-hidden relative">
                {/* Large Background Watermark */}
                <div className="absolute top-0 right-0 text-[20rem] font-black text-slate-50 leading-none -z-0 translate-x-1/4 select-none pointer-events-none uppercase">
                    NETWORK
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-cyan-500" />
                                <span className="text-sm font-bold text-cyan-600 uppercase tracking-widest">Site Directory v1.0</span>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-black text-slate-950 uppercase leading-none tracking-tighter">
                                STRATEGIC <span className="text-cyan-400">ASSETS</span>
                            </h2>
                        </div>
                        <button className="px-10 py-5 bg-slate-950 text-white font-black uppercase tracking-widest hover:bg-cyan-500 transition-all rounded-none flex items-center gap-3">
                            Full Network Specs <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-1 bg-slate-100 border border-slate-100">
                        {locations.map((loc, i) => (
                            <div key={i} id={loc.id} className="bg-white p-12 group cursor-pointer relative overflow-hidden">
                                {/* Hover Gradient Reveal */}
                                <div className="absolute inset-0 bg-slate-950 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 -z-0" />

                                <div className="relative z-10 space-y-12">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] group-hover:text-cyan-400 transition-colors">{loc.region}</p>
                                            <h3 className="text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tighter group-hover:text-white transition-colors">{loc.city}</h3>
                                        </div>
                                        <span className="text-[10px] font-black text-slate-300 group-hover:text-white/20 transition-colors font-mono">{loc.coords}</span>
                                    </div>

                                    <div className="relative aspect-video overflow-hidden border border-slate-100 group-hover:border-white/10">
                                        <img
                                            src={loc.image}
                                            alt={loc.city}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <div className="px-4 py-1.5 bg-white text-slate-950 font-black text-[9px] uppercase tracking-widest border border-slate-100 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                                                {loc.status}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 pt-4">
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-500">Facility Type</p>
                                            <p className="text-sm font-bold text-slate-900 group-hover:text-white transition-colors uppercase tracking-widest">{loc.type}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-500">Design Load</p>
                                            <p className="text-sm font-bold text-slate-900 group-hover:text-white transition-colors uppercase tracking-widest">{loc.capacity}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-8 border-t border-slate-50 group-hover:border-white/10 transition-colors">
                                        <div className="flex items-center gap-2 group-hover:text-cyan-400 text-slate-950 font-black uppercase text-[10px] tracking-widest transition-colors">
                                            Explore Node <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                        <p className="text-[10px] font-black text-slate-200 group-hover:text-white/10 tracking-widest">{loc.tier}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Footer CTA - Theme Consistent */}
            <section className="bg-slate-950 py-32 md:py-48 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#40D1FB_1px,transparent_1px)] bg-[length:40px_40px]" />
                </div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
                    <p className="text-cyan-400 font-black tracking-[0.6em] uppercase text-xs">Architectural Integrity</p>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
                        Powering the <br /> <span className="text-cyan-400">Edge Layer.</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 pt-8">
                        <button className="px-10 py-5 bg-white text-slate-950 font-black uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center gap-3">
                            Site Access Inquiry <MapPin className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Minimalist Watermark */}
                <div className="absolute bottom-0 left-0 text-[15rem] font-black text-white/[0.03] leading-none pointer-events-none select-none uppercase -translate-x-1/4">
                    Edge
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

export default Locations;
