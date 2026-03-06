'use client';

import OptimizedImage from '../components/OptimizedImage';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, User, Zap } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const brandNavy = "#001738";
const cyanColor = "#40D1FB";

const Insights = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

    const categories = ["All", "Industry News", "Case Studies", "Technology", "Sustainability"];
    const [activeCategory, setActiveCategory] = useState("All");

    const allInsights = [
        {
            title: "Microsoft Expects to Spend $80 Bn on Ai-enabled data centers in fiscal 2025",
            description: "Microsoft announces massive investment in AI-enabled data center infrastructure, signaling accelerated momentum in enterprise AI adoption and hyperscale computing expansion.",
            category: "Industry News",
            date: "January 3, 2025",
            author: "Microsoft",
            image: "/first-news.webp",
        },
        {
            title: "McKinsey & Co on AI power: Expanding data center capacity to meet growing demand",
            description: "McKinsey analysis reveals critical infrastructure gaps and expansion strategies needed to meet surging global demand for AI computing capacity and low-latency workloads.",
            category: "Industry News",
            date: "January 2, 2025",
            author: "McKinsey & Company",
            image: "/sec-news.webp",
        },
        {
            title: "AI Power: Expanding data center capacity to meet growing demand",
            description: "Comprehensive overview of data center modernization strategies, capacity planning, and infrastructure investments required to support the explosive growth in AI workloads.",
            category: "Technology",
            date: "December 28, 2024",
            author: "USDC team",
            image: "/third-news.webp",
        },
       
     
      
    ];

    const filteredInsights = activeCategory === "All"
        ? allInsights
        : allInsights.filter(item => item.category === activeCategory);

    return (
        <div className="bg-white">
            {/* ── CINEMATIC INSIGHTS HERO ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Immersive Background Overlay */}
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-white z-10" />
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                        alt="News & Insights"
                        className="w-full h-full object-cover grayscale opacity-40 scale-110 contrast-125"
                    />
                </motion.div>

                {/* Technical HUD Overlay - Hidden on mobile for cleaner view */}
                <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                </div>

                <div className="relative z-20 text-center px-6 max-w-7xl mx-auto space-y-12 pt-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500 text-slate-950 rounded-full mb-6 md:mb-8 font-black uppercase text-[10px] tracking-[0.4em] shadow-2xl shadow-cyan-500/40">
                            <Zap className="w-4 h-4 fill-current" />
                            Knowledge Base 4.0
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[14rem] font-black text-white tracking-tighter leading-none mb-6 md:mb-8 uppercase select-none">
                            INSIGHTS.
                        </h1>

                       
                    </motion.div>
                </div>

              
            </section>

            {/* ── News Grid Section ── */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${activeCategory === cat
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-cyan-400 hover:text-cyan-500'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* News Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredInsights.map((insight, i) => (
                                <NewsCard key={insight.title} {...insight} index={i} />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredInsights.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate-400 font-bold uppercase tracking-widest">No articles found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── Newsletter ── */}
            <section className="py-32 text-center text-white relative overflow-hidden" style={{ background: brandNavy }}>
                <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                            USDC <span style={{ color: cyanColor }}>Direct</span>
                        </h2>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-[0.3em]">
                            Weekly infrastructure & market updates.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="px-6 py-4 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-all rounded-none flex-1 font-bold"
                        />
                        <button className="px-10 py-4 bg-cyan-500 text-slate-950 font-black uppercase tracking-widest hover:bg-white transition-all">
                            Join Us
                        </button>
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

/* ── Simple News Card ── */
interface NewsCardProps {
    title: string;
    description: string;
    category: string;
    date: string;
    author: string;
    image: string;
    index: number;
}

const NewsCard = ({ title, description, category, date, author, image, index }: NewsCardProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group bg-white border border-slate-200 flex flex-col h-full hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 rounded-2xl md:rounded-3xl overflow-hidden"
        >
            {/* Image container */}
            <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <OptimizedImage src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-slate-900 border border-slate-100">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content container */}
            <div className="p-8 flex flex-col flex-1 gap-4">
                <div className="flex items-center gap-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-cyan-500" /> {date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3 h-3 text-cyan-500" /> {author}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 group-hover:text-cyan-500 transition-colors leading-tight uppercase tracking-tight">
                    {title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">
                    {description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-cyan-500 transition-all flex items-center gap-2">
                        Read Story <ArrowUpRight className="w-4 h-4" />
                    </span>
                    <Zap className="w-4 h-4 text-slate-100 group-hover:text-cyan-500/20 transition-all" />
                </div>
            </div>
        </motion.div>
    );
};

export default Insights;
