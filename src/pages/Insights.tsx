import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';
import { ArrowUpRight, Calendar, User, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const Insights = () => {
    // Parallax Hero
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

    const categories = ["All", "Industry News", "Case Studies", "Technology", "Sustainability"];

    const allInsights = [
        {
            title: "The Future of Liquid Cooling in AI Data Centers",
            description: "As power densities climb, traditional air cooling is reaching its limits. Explore how USDC is pioneering liquid immersion to sustain next-gen workloads.",
            category: "Technology",
            date: "May 24, 2024",
            author: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=2070",
            color: "bg-cyan-50 text-cyan-600"
        },
        {
            title: "Converting Stranded Energy into Digital Gold",
            description: "How we identify underutilized power assets and transform them into Tier III computing hubs with minimal grid impact.",
            category: "Sustainability",
            date: "May 18, 2024",
            author: "Michael Chen",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            title: "USDC Expands Footprint in Northern Virginia",
            description: "Announcement of our latest 40MW facility designed specifically for hyperscale cloud providers and AI research firms.",
            category: "Industry News",
            date: "May 12, 2024",
            author: "David Ross",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Achieving Net Zero: A Real-World Case Study",
            description: "A deep dive into the operational metrics of our Ohio facility, which recently celebrated one year of carbon-negative operations.",
            category: "Case Studies",
            date: "May 05, 2024",
            author: "Emma Wilson",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "AI-Driven Efficiency: Optimization at the Edge",
            description: "Using machine learning algorithms to predict and manage thermal loads in real-time across multiple geographic regions.",
            category: "Technology",
            date: "April 28, 2024",
            author: "Justin Blake",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
            color: "bg-cyan-50 text-cyan-600"
        },
        {
            title: "Security in Hyperscale: Future-Proofing Data",
            description: "Reviewing the multi-layered security protocols being implemented to protect enterprise-grade AI training models.",
            category: "Industry News",
            date: "April 20, 2024",
            author: "Robert Vance",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "The Impact of Cloud Edge on Local Economies",
            description: "How our data center deployments are fostering digital growth and high-tech job creation in rural corridors.",
            category: "Case Studies",
            date: "April 15, 2024",
            author: "Alicia Keys",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070",
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Integrating Renewables into the Grid Mix",
            description: "Exploring the technical challenges and triumphs of direct-wiring wind and solar farms into high-density server clusters.",
            category: "Sustainability",
            date: "April 08, 2024",
            author: "Samuel Lee",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
            color: "bg-emerald-50 text-emerald-600"
        }
    ];

    return (
        <div className="bg-white">
            {/* Parallax Hero Section */}
            <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-white z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                        alt="News & Insights"
                        className="w-full h-full object-cover grayscale opacity-50 contrast-125"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20 md:pt-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                            CENTRAL <br /> <span className="text-cyan-400">DATA HUB</span>
                        </h1>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </section>

            {/* ─── AUTO-SLIDING CARD SECTION ─── */}
            <AutoSlideNewsSection insights={allInsights} categories={categories} />

            {/* Load More */}
            <div className="py-24 text-center bg-white border-t border-slate-50">
                <button className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-cyan-500 transition-all flex items-center gap-3 mx-auto">
                    View Full Archive <ArrowUpRight className="w-5 h-5" />
                </button>
            </div>

            {/* Newsletter */}
            <section className="bg-slate-950 py-32 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_50%_0%,#40D1FB_0%,transparent_50%)]" />
                </div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Stay ahead with <span className="text-cyan-400">USDC Direct</span>.</h2>
                        <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto uppercase tracking-[0.3em]">Weekly market analysis and infrastructure updates.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-8 py-5 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-all min-w-[350px]"
                        />
                        <button className="px-12 py-5 bg-cyan-500 text-slate-900 font-black uppercase tracking-widest hover:bg-white transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

/* ─────────────────────────────────────────────
   AUTO-SLIDE NEWS SECTION
   - Normal page scroll
   - When section enters viewport, cards animate RIGHT → LEFT one by one
   - Shows 3 cards at a time
   - Manual prev/next controls also available
───────────────────────────────────────────── */
const AutoSlideNewsSection = ({ insights, categories }: { insights: any[], categories: string[] }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const controls = useAnimation();
    const trackRef = useRef(null);

    // Card width: 33.33% of container - gap
    // Total slide distance: (total - 3) * cardWidth+gap
    // We animate x from 0 to -(n-3) * (cardWidth+gap)
    const CARD_WIDTH_PERCENT = 33.333;
    const GAP = 24; // px gap between cards
    const TOTAL = insights.length;
    const SLIDES = TOTAL - 3; // how many steps to slide

    useEffect(() => {
        if (isInView) {
            // Start animation: slide all cards right→left one by one
            // Each step slides by one card width (approx 33.33% of container)
            controls.start({
                x: [`0%`, `-${SLIDES * (CARD_WIDTH_PERCENT + 1)}%`],
                transition: {
                    duration: SLIDES * 1.4, // ~1.4s per card
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5,
                }
            });
        }
    }, [isInView]);

    const handlePrev = () => {
        controls.stop();
        controls.start({ x: '0%', transition: { duration: 0.6, ease: 'easeInOut' } });
    };

    const handleNext = () => {
        controls.stop();
        controls.start({
            x: `-${SLIDES * (CARD_WIDTH_PERCENT + 1)}%`,
            transition: { duration: SLIDES * 1.4, ease: [0.25, 0.46, 0.45, 0.94] }
        });
    };

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                <div className="space-y-3">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-cyan-400" />
                        <span className="text-sm font-bold text-cyan-500 uppercase tracking-widest">Latest Updates</span>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-none">
                        Latest <span className="text-cyan-400">News</span>
                    </h2>
                </div>

                <div className="flex items-center gap-6">
                    {/* Category filters */}
                    <div className="hidden lg:flex items-center gap-5 overflow-x-auto">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-cyan-500 ${i === 0 ? 'text-cyan-500' : 'text-slate-400'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Manual controls */}
                    <div className="flex items-center gap-2 ml-4">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full border border-slate-200 hover:border-cyan-400 hover:text-cyan-500 flex items-center justify-center text-slate-500 transition-all"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-500 flex items-center justify-center text-slate-500 transition-all"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards Track — clipped to viewport width, cards slide inside */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="overflow-hidden">
                    <motion.div
                        ref={trackRef}
                        animate={controls}
                        initial={{ x: '0%' }}
                        className="flex gap-6"
                        style={{ width: `${(TOTAL / 3) * 100}%` }}
                    >
                        {insights.map((insight, i) => (
                            <SlideCard key={i} index={i} isInView={isInView} {...insight} />
                        ))}
                    </motion.div>
                </div>

                {/* Progress dots */}
                <div className="flex items-center justify-center gap-2 mt-10">
                    {Array.from({ length: SLIDES + 1 }).map((_, i) => (
                        <div
                            key={i}
                            className={`rounded-full transition-all duration-300 ${i === 0 ? 'w-6 h-1.5 bg-cyan-500' : 'w-1.5 h-1.5 bg-slate-200'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─── Individual Slide Card ─── */
const SlideCard = ({ index, title, description, category, date, author, image, color, isInView }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: Math.min(index, 2) * 0.15, // only first 3 stagger on entry
                ease: [0.22, 1, 0.36, 1]
            }}
            className="flex-1 min-w-0 group cursor-pointer"
        >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-5 rounded-sm">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.15] group-hover:grayscale-0"
                />
                <div className="absolute top-3 left-3">
                    <div className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest backdrop-blur-md ${color}`}>
                        {category}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 right-3 text-white/20 text-5xl font-black leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-cyan-500" /> {date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-cyan-500" /> {author}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-snug group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                    {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center gap-2 pt-1 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-cyan-500 transition-all">
                    Read Article <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

export default Insights;
