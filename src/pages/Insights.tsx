import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, User, ChevronDown, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
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

    return (
        <div className="bg-white">
            {/* ── Parallax Hero ── */}
            <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden text-white" style={{ background: brandNavy }}>
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

                {/* Hero grid */}
                <div
                    className="absolute inset-0 z-[5] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(64,209,251,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(64,209,251,0.06) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20 md:pt-28">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex justify-center"
                        >
                            <div
                                className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ background: `${cyanColor}18`, border: `1px solid ${cyanColor}35`, color: cyanColor }}
                            >
                                <Zap className="w-3.5 h-3.5" />
                                USDC Data Hub
                            </div>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                            CENTRAL <br />
                            <span style={{ color: cyanColor }}>DATA HUB</span>
                        </h1>

                        <p className="text-slate-400 text-base max-w-xl mx-auto tracking-wider">
                            Perspectives on digital infrastructure, sustainability, and the future of computing.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </section>

            {/* ── Auto-Sliding Card Section ── */}
            <AutoSlideNewsSection insights={allInsights} categories={categories} />

            {/* ── Load More ── */}
            <div className="py-24 text-center bg-white border-t" style={{ borderColor: 'rgba(0,23,56,0.07)' }}>
                <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-12 py-5 font-bold text-white uppercase tracking-widest rounded-full shadow-xl text-sm"
                    style={{ background: `linear-gradient(135deg, ${brandNavy} 0%, #002860 100%)` }}
                >
                    View Full Archive
                    <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: cyanColor }}>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </span>
                </motion.button>
            </div>

            {/* ── Newsletter ── */}
            <section className="py-32 text-center text-white relative overflow-hidden" style={{ background: brandNavy }}>
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="w-full h-full" style={{ background: `radial-gradient(ellipse at 50% 0%, ${cyanColor}55 0%, transparent 60%)` }} />
                </div>
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(64,209,251,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(64,209,251,0.05) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
                <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
                    <div className="space-y-5">
                        <div className="flex justify-center">
                            <div
                                className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ background: `${cyanColor}18`, border: `1px solid ${cyanColor}35`, color: cyanColor }}
                            >
                                <Zap className="w-3.5 h-3.5" />
                                Weekly Digest
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                            Stay ahead with <span style={{ color: cyanColor }}>USDC Direct</span>.
                        </h2>
                        <p className="text-base text-slate-400 font-medium max-w-2xl mx-auto uppercase tracking-[0.25em]">
                            Weekly market analysis and infrastructure updates.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="px-8 py-5 bg-white/5 border text-white focus:outline-none transition-all min-w-[350px] rounded-full text-sm"
                            style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                            onFocus={e => e.currentTarget.style.borderColor = cyanColor}
                            onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                        />
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-10 py-5 font-black uppercase tracking-widest rounded-full text-sm transition-all"
                            style={{ background: cyanColor, color: brandNavy }}
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

/* ─────────────────────────────────────────────
   AUTO-SLIDE NEWS SECTION
───────────────────────────────────────────── */
const AutoSlideNewsSection = ({ insights, categories }: { insights: any[], categories: string[] }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const controls = useAnimation();
    const trackRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const CARD_WIDTH_PERCENT = 33.333;
    const TOTAL = insights.length;
    const SLIDES = TOTAL - 3;

    useEffect(() => {
        if (isInView) {
            controls.start({
                x: [`0%`, `-${SLIDES * (CARD_WIDTH_PERCENT + 1)}%`],
                transition: {
                    duration: SLIDES * 1.4,
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
        <section ref={sectionRef} className="py-28 overflow-hidden" style={{ background: '#f8fafd' }}>
            {/* Background grid */}
            <div
                className="absolute left-0 right-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,23,56,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,23,56,0.03) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    height: '100%',
                    top: 0,
                }}
            />

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 relative">
                <div className="space-y-5">
                    <div className="flex items-center gap-3">
                        <div
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]"
                            style={{ background: `${cyanColor}12`, border: `1px solid ${cyanColor}35`, color: cyanColor }}
                        >
                            <Zap className="w-3.5 h-3.5" />
                            Latest Updates
                        </div>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-black leading-none tracking-tight" style={{ color: brandNavy }}>
                        Latest{' '}
                        <span className="relative inline-block" style={{ color: cyanColor }}>
                            News
                            <span
                                className="absolute -bottom-1 left-0 w-full h-[3px] origin-left"
                                style={{ background: `linear-gradient(90deg, ${cyanColor}, transparent)` }}
                            />
                        </span>
                    </h2>
                </div>

                <div className="flex items-center gap-5 flex-wrap">
                    {/* Category filters */}
                    <div className="hidden lg:flex items-center gap-2 flex-wrap">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat)}
                                className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 px-4 py-2 rounded-full"
                                style={{
                                    background: activeCategory === cat ? `${CATEGORY_COLORS[cat] || cyanColor}18` : 'transparent',
                                    color: activeCategory === cat ? (CATEGORY_COLORS[cat] || cyanColor) : '#94a3b8',
                                    border: activeCategory === cat ? `1px solid ${CATEGORY_COLORS[cat] || cyanColor}35` : '1px solid transparent',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Manual controls */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrev}
                            className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
                            style={{ border: '1px solid rgba(0,23,56,0.12)', color: '#64748b' }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.borderColor = cyanColor;
                                (e.currentTarget as HTMLButtonElement).style.color = cyanColor;
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,23,56,0.12)';
                                (e.currentTarget as HTMLButtonElement).style.color = '#64748b';
                            }}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
                            style={{ background: brandNavy, color: 'white' }}
                            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = cyanColor}
                            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = brandNavy}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards Track */}
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
                            <SlideCard
                                key={i}
                                index={i}
                                isInView={isInView}
                                isHovered={hoveredCard === i}
                                isSiblingsHovered={hoveredCard !== null && hoveredCard !== i}
                                onHover={() => setHoveredCard(i)}
                                onLeave={() => setHoveredCard(null)}
                                {...insight}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Progress bar */}
                <div className="mt-10 flex items-center justify-center gap-2">
                    {Array.from({ length: SLIDES + 1 }).map((_, i) => (
                        <div
                            key={i}
                            className="rounded-full transition-all duration-500"
                            style={{
                                width: i === 0 ? '24px' : '6px',
                                height: '6px',
                                background: i === 0 ? cyanColor : 'rgba(0,23,56,0.12)',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ── Individual Slide Card ── */
const SlideCard = ({ index, title, description, category, date, author, image, isInView, isHovered, isSiblingsHovered, onHover, onLeave }: any) => {
    const accent = CATEGORY_COLORS[category] || cyanColor;

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={isInView
                ? { opacity: isSiblingsHovered ? 0.72 : 1, y: 0, scale: isSiblingsHovered ? 0.97 : 1 }
                : { opacity: 0, y: 40 }
            }
            transition={{
                duration: 0.6,
                delay: isInView ? Math.min(index, 2) * 0.12 : 0,
                ease: [0.22, 1, 0.36, 1],
                scale: { duration: 0.3 },
                opacity: { duration: 0.3 },
            }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="flex-1 min-w-0 group cursor-pointer"
        >
            <motion.div
                animate={{ y: isHovered ? -8 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white overflow-hidden"
                style={{
                    borderRadius: '16px',
                    boxShadow: isHovered
                        ? `0 24px 60px rgba(0,23,56,0.14), 0 0 0 1px ${accent}30`
                        : '0 4px 24px rgba(0,23,56,0.07), 0 0 0 1px rgba(0,23,56,0.06)',
                    transition: 'box-shadow 0.35s ease',
                    position: 'relative',
                }}
            >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.07 : 1 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to top, ${brandNavy}bb 0%, transparent 55%)`,
                            opacity: isHovered ? 1 : 0.3,
                            transition: 'opacity 0.4s ease',
                        }}
                    />
                    {/* index number */}
                    <div
                        className="absolute top-3 right-4 text-4xl font-black select-none leading-none"
                        style={{ color: 'rgba(255,255,255,0.12)' }}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </div>
                    {/* Category badge */}
                    <div
                        className="absolute top-3 left-3 px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full backdrop-blur-md"
                        style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}
                    >
                        {category}
                    </div>

                    {/* Hover: read time overlay */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 8 }}
                                transition={{ duration: 0.22 }}
                                className="absolute bottom-3 left-4 text-xs font-semibold"
                                style={{ color: 'rgba(255,255,255,0.85)' }}
                            >
                                5 min read
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" style={{ color: accent }} />
                            {date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" style={{ color: accent }} />
                            {author}
                        </span>
                    </div>

                    <h3
                        className="text-lg font-black leading-snug line-clamp-2 transition-colors duration-300"
                        style={{ color: isHovered ? accent : brandNavy }}
                    >
                        {title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300"
                        style={{ color: isHovered ? accent : brandNavy }}>
                        Read Article
                        <ArrowUpRight className="w-3.5 h-3.5" style={{ transform: isHovered ? 'translate(2px,-2px)' : 'translate(0,0)', transition: 'transform 0.25s ease' }} />
                    </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[3px]"
                    animate={{ width: isHovered ? '100%' : '0%' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                />
            </motion.div>
        </motion.article>
    );
};

export default Insights;
