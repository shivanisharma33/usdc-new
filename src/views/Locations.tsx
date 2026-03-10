'use client';

import OptimizedImage from '../components/OptimizedImage';
import InteractiveMap from '../components/InteractiveMap';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Globe, Zap, Activity, ShieldCheck, Box, Server, Lock } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const Locations = () => {
    const pathname = usePathname();
    const [, setActiveLocation] = useState<string | null>(null);

    const handleLocationSelect = useCallback((locationId: string) => {
        setActiveLocation(locationId);
    }, []);

    // Scroll to section based on hash
    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.getElementById(hash.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        scrollToHash();
        window.addEventListener('hashchange', scrollToHash);

        return () => {
            window.removeEventListener('hashchange', scrollToHash);
        };
    }, [pathname]);

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
            image: "/Buffalo.jpg.jpeg",
            coords: { x: 82, y: 35 },
            lat: 42.9019,
            lng: -78.7957,
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
            image: "/Tonawanda.png",
            coords: { x: 80, y: 33 },
            lat: 43.0247,
            lng: -78.8674,
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
            image: "/Alabama.png",
            coords: { x: 70, y: 75 },
            lat: 33.8739,
            lng: -85.1539,
            description: "Our flagship ARMS 200 deployment site, specializing in high-density GPU clustering for AI workloads."
        },
        {
            id: "carolina",
            title: "North Carolina Development Site",
            city: "North Carolina",
            address: "199 Cline Pk Ct",
            status: "Development",
            capacity: "200 MW",
            tier: "Tier III Designed",
            type: "Expansion Facility",
            image: "/north.png",
            lat: 35.5731,
            lng: -81.3151,
            coords: { x: 78, y: 60 },
            description: "Next-generation data center campus planned to support the growing demand for cloud infrastructure in the Southeast."
        }
    ];

    const mapLocations = useMemo(() => locations.map(loc => ({
        id: loc.id,
        title: loc.title,
        city: loc.city,
        lat: loc.lat,
        lng: loc.lng,
        status: loc.status,
        capacity: loc.capacity
    })), []);

    return (
        <div className="bg-white">
            {/* ── CINEMATIC LOCATION HERO ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-white z-10" />
                    <OptimizedImage
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
                    
             
                </div>
            </section>

            {/* ── INTERACTIVE DATA CENTER MAP ── */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Map with Overlaid Stats */}
                    <div className="relative w-full" style={{ height: '700px' }}>
                        <InteractiveMap
                            locations={mapLocations}
                            onLocationSelect={handleLocationSelect}
                        />

                        {/* Map Overlay Cards */}
                        {/* Overlay Legend - Bottom Left */}
                        <div className="absolute bottom-8 left-8 z-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 backdrop-blur-xl bg-white/95"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-5 h-5 flex items-center justify-center">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#40D1FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900">Data Center Locations</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-[#1e3a8a] border-2 border-[#40D1FB]" />
                                        <span className="text-sm font-medium text-slate-700">Operational Facilities</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full relative">
                                            <div className="absolute inset-0 bg-white rounded-full border-2 border-[#fb923c]"></div>
                                            <div className="absolute inset-[3px] bg-[#fb923c] rounded-full"></div>
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">In Development</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Overlay Stats Cards - Right Side */}
                        <div className="absolute top-8 right-8 flex flex-col gap-4 z-20">
                            {/* Active Locations Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 backdrop-blur-xl bg-white/95"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                        <Box className="w-6 h-6 text-cyan-500" />
                                    </div>
                                    <div>
                                        <p className="text-2xl md:text-3xl font-black text-slate-900">4</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Locations</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Total Capacity Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 backdrop-blur-xl bg-white/95"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-2xl md:text-3xl font-black text-slate-900">400 MW</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total Capacity</p>
                                    </div>
                                </div>
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
                            <div key={i} id={loc.id} className="bg-white p-8 group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-2 h-2 rounded-full ${loc.status === 'Operational' ? 'bg-cyan-500 shadow-[0_0_8px_#40D1FB]' : 'bg-orange-400 shadow-[0_0_8px_#fb923c]'}`} />
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.35em]">{loc.status}</span>
                                    </div>

                                    <div className="relative overflow-hidden rounded-2xl h-48 mb-4">
                                        <OptimizedImage src={loc.image} alt={loc.city} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight">{loc.city}</h3>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{loc.address}</p>

                                    <p className="text-slate-500 font-medium leading-relaxed max-w-lg">{loc.description}</p>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-6 border-t border-slate-100 pt-6">
                                    <div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Infrastructure Load</p>
                                        <p className="text-lg font-black text-slate-900 uppercase">{loc.capacity}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Facility Standard</p>
                                        <p className="text-lg font-black text-slate-900 uppercase">{loc.tier}</p>
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
