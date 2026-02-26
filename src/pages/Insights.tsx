import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, User, ChevronDown, Zap } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const brandNavy = "#001738";
const cyanColor = "#40D1FB";

const CATEGORY_COLORS: Record<string, string> = {
    "Technology": "#40D1FB",
    "Sustainability": "#34d399",
    "Industry News": "#818cf8",
    "Case Studies": "#fb923c",
    "All": "#40D1FB",
};

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
            title: "The Future of Liquid Cooling in AI Data Centers",
            description: "As power densities climb, traditional air cooling is reaching its limits. Explore how USDC is pioneering liquid immersion to sustain next-gen workloads.",
            category: "Technology",
            date: "May 24, 2024",
            author: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "Converting Stranded Energy into Digital Gold",
            description: "How we identify underutilized power assets and transform them into Tier III computing hubs with minimal grid impact.",
            category: "Sustainability",
            date: "May 18, 2024",
            author: "Michael Chen",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "USDC Expands Footprint in Northern Virginia",
            description: "Announcement of our latest 40MW facility designed specifically for hyperscale cloud providers and AI research firms.",
            category: "Industry News",
            date: "May 12, 2024",
            author: "David Ross",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "Achieving Net Zero: A Real-World Case Study",
            description: "A deep dive into the operational metrics of our Ohio facility, which recently celebrated one year of carbon-negative operations.",
            category: "Case Studies",
            date: "May 05, 2024",
            author: "Emma Wilson",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "AI-Driven Efficiency: Optimization at the Edge",
            description: "Using machine learning algorithms to predict and manage thermal loads in real-time across multiple geographic regions.",
            category: "Technology",
            date: "April 28, 2024",
            author: "Justin Blake",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "Security in Hyperscale: Future-Proofing Data",
            description: "Reviewing the multi-layered security protocols being implemented to protect enterprise-grade AI training models.",
            category: "Industry News",
            date: "April 20, 2024",
            author: "Robert Vance",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "The Impact of Cloud Edge on Local Economies",
            description: "How our data center deployments are fostering digital growth and high-tech job creation in rural corridors.",
            category: "Case Studies",
            date: "April 15, 2024",
            author: "Alicia Keys",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070",
        },
        {
            title: "Integrating Renewables into the Grid Mix",
            description: "Exploring the technical challenges and triumphs of direct-wiring wind and solar farms into high-density server clusters.",
            category: "Sustainability",
            date: "April 08, 2024",
            author: "Samuel Lee",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
        }
    ];

    const filteredInsights = activeCategory === "All"
        ? allInsights
        : allInsights.filter(item => item.category === activeCategory);

    return (
        <div className="bg-white">
            {/* ── Parallax Hero ── */}
            <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden text-white" style={{ background: brandNavy }}>
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, ${brandNavy}99, ${brandNavy}cc)` }} />
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                        alt="News & Insights"
                        className="w-full h-full object-cover opacity-30"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                            News & <br />
                            <span style={{ color: cyanColor }}>Insights</span>
                        </h1>
                        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto tracking-widest uppercase font-bold">
                            Architecture, sustainability, and industry intelligence.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
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
const NewsCard = ({ title, description, category, date, author, image, index }: any) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group bg-white border border-slate-200 flex flex-col h-full hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
        >
            {/* Image container */}
            <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
