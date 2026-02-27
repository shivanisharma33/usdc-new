'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowUpRight, Tag, Zap } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const LatestNews = () => {
    const brandNavy = "#001738";
    const cyanColor = "#40D1FB";
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const newsData = [
        {
            id: "01",
            title: "USDC Expands Tier III Footprint with New Ohio Facility",
            category: "Expansion",
            date: "May 12, 2024",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=2070",
            description: "Strategically located to serve the growing Midwest tech corridor, our newest site adds 15MW of HPC capacity with industry-leading PUE ratings.",
            accent: "#40D1FB",
            tag: "Expansion"
        },
        {
            id: "02",
            title: "Achieving 100% Renewable Energy Across All Sites",
            category: "Sustainability",
            date: "April 28, 2024",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
            description: "USDC hits a major milestone in carbon-neutral operations through integrated waste-to-energy systems and direct renewable PPAs.",
            accent: "#40D1FB",
            tag: "Sustainability"
        },
        {
            id: "03",
            title: "Revolutionizing AI Infrastructure with Liquid Cooling",
            category: "Innovation",
            date: "April 15, 2024",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
            description: "Next-gen cooling technologies implemented to support intense high-performance computing density beyond traditional air-cooled limits.",
            accent: "#40D1FB",
            tag: "Innovation"
        }
    ];

    return (
        <section className="relative py-28 overflow-hidden" style={{ background: '#f8fafd' }}>
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${cyanColor}, transparent)` }} />

            {/* Background watermark text */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[12rem] font-black leading-none select-none pointer-events-none opacity-[0.03] hidden xl:block translate-x-1/3"
                style={{ color: brandNavy }}
            >
                NEWS
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* ── Header ── */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <div className="space-y-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3"
                        >
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border" style={{ borderColor: `${cyanColor}40`, background: `${cyanColor}0f` }}>
                                <Zap className="w-3.5 h-3.5" style={{ color: cyanColor }} />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: cyanColor }}>
                                    News &  Insights
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight"
                            style={{ color: brandNavy }}
                        >
                            Latest{' '}
                            <span
                                className="relative inline-block"
                                style={{ color: cyanColor }}
                            >
                                News
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="absolute -bottom-1 left-0 w-full h-[3px] origin-left"
                                    style={{ background: `linear-gradient(90deg, ${cyanColor}, transparent)` }}
                                />
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-slate-500 text-base max-w-md leading-relaxed"
                        >
                            Stay ahead of the curve with the latest developments from USDC — your trusted partner in digital infrastructure.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-3 px-8 py-4 font-bold text-white rounded-full text-sm shadow-xl transition-shadow hover:shadow-2xl"
                            style={{ background: `linear-gradient(135deg, ${brandNavy} 0%, #002860 100%)` }}
                        >
                            View All Stories
                            <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: cyanColor }}>
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* ── News Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
                    {newsData.map((news, i) => (
                        <NewsCard
                            key={i}
                            news={news}
                            index={i}
                            isHovered={hoveredIndex === i}
                            isSiblingsHovered={hoveredIndex !== null && hoveredIndex !== i}
                            onHover={() => setHoveredIndex(i)}
                            onLeave={() => setHoveredIndex(null)}
                            brandNavy={brandNavy}
                        />
                    ))}
                </div>

                {/* ── Bottom stats bar ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6"
                    style={{ borderColor: 'rgba(0,23,56,0.08)' }}
                >
                    {[
                        { value: "100+", label: "Articles Published" },
                        { value: "12K+", label: "Monthly Readers" },
                        { value: "5", label: "Content Categories" },
                    ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-3xl font-black" style={{ color: i === 1 ? cyanColor : brandNavy }}>{stat.value}</span>
                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                            {i < 2 && <div className="hidden sm:block w-px h-8 bg-slate-200 ml-4" />}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

/* ── Individual News Card ── */
const NewsCard = ({
    news,
    index,
    isHovered,
    isSiblingsHovered,
    onHover,
    onLeave,
    brandNavy
}: {
    news: any;
    index: number;
    isHovered: boolean;
    isSiblingsHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
    brandNavy: string;
}) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            animate={{
                scale: isSiblingsHovered ? 0.97 : 1,
                opacity: isSiblingsHovered ? 0.75 : 1,
            }}
            style={{ transition: 'scale 0.3s ease, opacity 0.3s ease' }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="group relative cursor-pointer"
        >
            {/* Card */}
            <motion.div
                animate={{ y: isHovered ? -8 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white overflow-hidden"
                style={{
                    borderRadius: '16px',
                    boxShadow: isHovered
                        ? `0 24px 60px rgba(0,23,56,0.14), 0 0 0 1px ${news.accent}30`
                        : '0 4px 24px rgba(0,23,56,0.07), 0 0 0 1px rgba(0,23,56,0.06)',
                    transition: 'box-shadow 0.35s ease',
                }}
            >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                    <motion.div
                        animate={{ scale: isHovered ? 1.07 : 1 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full"
                    >
                        <OptimizedImage
                            src={news.image}
                            alt={news.title}
                            width={1200}
                            height={700}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Gradient overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to top, ${brandNavy}cc 0%, transparent 60%)`,
                            opacity: isHovered ? 1 : 0.4,
                            transition: 'opacity 0.4s ease',
                        }}
                    />

                    {/* Issue number */}
                    <div
                        className="absolute top-4 right-4 text-4xl font-black leading-none select-none"
                        style={{ color: 'rgba(255,255,255,0.15)' }}
                    >
                        {news.id}
                    </div>

                    {/* Category badge */}
                    <div
                        className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                        style={{
                            background: `${news.accent}22`,
                            color: news.accent,
                            border: `1px solid ${news.accent}44`,
                            borderRadius: '999px',
                        }}
                    >
                        {news.category}
                    </div>

                    {/* Bottom image text that appears on hover */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.25 }}
                                className="absolute bottom-4 left-5 right-5 flex items-center gap-2"
                                style={{ color: 'rgba(255,255,255,0.9)' }}
                            >
                                <span className="text-xs font-semibold">{news.readTime}</span>
                                <span className="text-white/30">·</span>
                                <span className="text-xs font-semibold">{news.category}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    {/* Date */}
                    <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" style={{ color: news.accent }} />
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{news.date}</span>
                    </div>

                    {/* Title */}
                    <h3
                        className="text-xl font-black leading-snug"
                        style={{
                            color: isHovered ? news.accent : brandNavy,
                            transition: 'color 0.3s ease',
                        }}
                    >
                        {news.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {news.description}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px" style={{ background: 'rgba(0,23,56,0.07)' }} />

                    {/* Footer: Read more */}
                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2">
                            <Tag className="w-3.5 h-3.5 text-slate-300" />
                            <span className="text-xs font-semibold text-slate-400">{news.tag}</span>
                        </div>

                        <motion.div
                            animate={{
                                x: isHovered ? 2 : 0,
                                y: isHovered ? -2 : 0,
                            }}
                            transition={{ duration: 0.25 }}
                            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest"
                            style={{ color: isHovered ? news.accent : brandNavy, transition: 'color 0.3s ease' }}
                        >
                            Read More
                            <ArrowUpRight className="w-4 h-4" />
                        </motion.div>
                    </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[3px]"
                    animate={{ width: isHovered ? '100%' : '0%' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ background: `linear-gradient(90deg, ${news.accent}, transparent)` }}
                />
            </motion.div>
        </motion.article>
    );
};

export default LatestNews;
