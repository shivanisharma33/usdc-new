import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, TrendingUp, ShieldCheck, Globe, Zap, BarChart3, PieChart, Users, ChevronDown } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const Investors = () => {
    // Parallax Hero
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

    // Pinned Strategy Section
    const strategyRef = useRef(null);
    const { scrollYProgress: strategyProgress } = useScroll({
        target: strategyRef,
        offset: ["start start", "end end"]
    });

    const stats = [
        { label: "Market Cap", value: "$4.2B", icon: TrendingUp },
        { label: "Annual Growth", value: "+28%", icon: BarChart3 },
        { label: "Global Facilities", value: "14", icon: Globe },
        { label: "HPC Capacity", value: "250MW", icon: Zap }
    ];

    const strategyCards = [
        {
            title: "Sustainable Asset Conversion",
            description: "Identifying and repurposing underutilized energy assets into high-performance Tier III data centers, maximizing ROI while minimizing environmental impact.",
            icon: ShieldCheck,
            color: "bg-emerald-50 text-emerald-600 border-emerald-100"
        },
        {
            title: "Strategic Market Expansion",
            description: "Targeted expansion into high-growth tech corridors where demand for AI and HPC infrastructure is outpacing current supply capabilities.",
            icon: PieChart,
            color: "bg-blue-50 text-blue-600 border-blue-100"
        },
        {
            title: "Technological Leadership",
            description: "Investing in liquid cooling, integrated waste-to-energy systems, and proprietary management software to maintain a competitive edge in efficiency.",
            icon: Zap,
            color: "bg-cyan-50 text-cyan-600 border-cyan-100"
        },
        {
            title: "Investor Governance",
            description: "Committed to transparency and high standards of ESG reporting, ensuring our partners have clear visibility into performance and social impact.",
            icon: Users,
            color: "bg-purple-50 text-purple-600 border-purple-100"
        }
    ];

    return (
        <div className="bg-white selection:bg-cyan-100 selection:text-cyan-900">
            {/* Parallax Hero Section */}
            <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-white z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                        alt="Investor Relations"
                        className="w-full h-full object-cover grayscale opacity-40 scale-110"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                            <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">Investor Hub</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[0.9]">
                            FUTURE <span className="text-cyan-400">VALUE</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
                            Transforming energy infrastructure into high-performance computing assets for the digital economy.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-cyan-400">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ChevronDown className="w-5 h-5 text-white/50" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Overview */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-slate-50 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                            <stat.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                    <h4 className="text-5xl font-black text-slate-900 group-hover:text-cyan-500 transition-colors duration-300">{stat.value}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pinned Stacking Mode Section */}
            <section ref={strategyRef} className="relative" style={{ height: `${strategyCards.length * 100 + 50}vh` }}>
                <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-slate-50">
                    {/* Background Decorative Element */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[30rem] font-black text-slate-900/[0.03] select-none pointer-events-none italic">
                        USDC
                    </div>

                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
                        {/* Left Side: Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <motion.div className="flex items-center gap-4">
                                    <div className="h-[2px] w-12 bg-cyan-400" />
                                    <span className="text-sm font-bold text-cyan-500 uppercase tracking-widest">Growth Engine</span>
                                </motion.div>
                                <h2 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight">
                                    Our Strategic <br />
                                    <span className="text-cyan-500">Pillars</span>
                                </h2>
                            </div>

                            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-md">
                                We focus on high-impact sectors where infrastructure and intelligence converge,
                                ensuring resilient and scalable returns for our investors.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="px-8 py-4 bg-slate-900 text-white font-bold group flex items-center gap-3 hover:bg-cyan-500 transition-all rounded-sm">
                                    Download Roadmap
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 border-2 border-slate-200 text-slate-900 font-bold hover:bg-white hover:border-cyan-500 transition-all rounded-sm">
                                    Financial Reports
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Stacking Cards Wrapper */}
                        <div className="relative h-[550px] w-full max-w-xl mx-auto">
                            {strategyCards.map((card, i) => (
                                <StackingCard
                                    key={i}
                                    index={i}
                                    total={strategyCards.length}
                                    progress={strategyProgress}
                                    {...card}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision / CTA */}
            <section className="bg-slate-900 py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-12">
                    <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        "Architecting the infrastructure that powers <span className="text-cyan-400">Global Intelligence</span>."
                    </h3>
                    <div className="flex justify-center flex-col items-center gap-4">
                        <div className="h-20 w-[2px] bg-gradient-to-b from-cyan-400 to-transparent" />
                        <span className="text-cyan-400 font-black tracking-[0.5em] uppercase text-xs">Commitment To Excellence</span>
                    </div>
                </div>
            </section>

            {/* Footer-level Contact */}
            <ContactUs />
        </div>
    );
};

// Sub-component for Stacking Cards
const StackingCard = ({ index, total, progress, title, description, icon: Icon, color }: any) => {
    // Each card is active in its own scroll segment
    // With 4 cards, each has ~25% of the progress
    const segment = 1 / total;
    const start = index * segment;
    const end = (index + 1) * segment;

    // Movement: Slide from bottom when starting their segment
    // Exit: They stay pinned, but we might scale them back slightly

    // Smooth entry: y from 600px to 0px
    const y = useTransform(progress, [start - segment * 0.5, start], ["100%", "0%"]);

    // Scale down cards already in "stack"
    const scale = useTransform(progress, [end, end + segment * 0.2], [1, 0.94 - (total - index) * 0.02]);

    // Darken cards as more come on top
    const opacity = useTransform(progress, [end, end + segment * 0.2], [1, 0.6]);

    // Rotate slightly for a non-perfect physical stack feel
    const rotate = useTransform(progress, [start - segment * 0.5, start], [5, 0]);

    // First card should be visible by default if progress is 0
    // const initialY = index === 0 ? "0%" : "100%";

    return (
        <motion.div
            style={{
                y: index === 0 ? useTransform(progress, [0, 0.05], ["0%", "0%"]) : y,
                scale,
                opacity,
                rotate,
                zIndex: index + 1
            }}
            className="absolute inset-0 w-full h-full"
        >
            <div className="bg-white p-10 h-full rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col justify-between group">
                <div className="space-y-8">
                    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h3>
                        <p className="text-lg text-slate-500 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <span className="text-xs font-black text-cyan-500 uppercase tracking-widest">Strategy Phase 0{index + 1}</span>
                    <div className="flex gap-1">
                        {[...Array(total)].map((_, dotIdx) => (
                            <div
                                key={dotIdx}
                                className={`w-1.5 h-1.5 rounded-full ${dotIdx <= index ? 'bg-cyan-400' : 'bg-slate-100'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Large Background Number */}
                <div className="absolute top-10 right-10 text-9xl font-black text-slate-50 -z-10 select-none">
                    0{index + 1}
                </div>
            </div>
        </motion.div>
    );
};

export default Investors;
