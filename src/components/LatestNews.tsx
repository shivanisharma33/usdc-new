import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight, MessageSquare } from 'lucide-react';

const LatestNews = () => {
    const brandNavy = "#001738";
    const cyanColor = "#40D1FB";

    const newsData = [
        {
            title: "USDC Expands Tier III Footprint with New Ohio Facility",
            category: "Expansion",
            date: "May 12, 2024",
            image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=2070",
            description: "Strategically located to serve the growing Midwest tech corridor, our newest site adds 15MW of HPC capacity."
        },
        {
            title: "Achieving 100% Renewable Energy Across All Sites",
            category: "Sustainability",
            date: "April 28, 2024",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070",
            description: "USDC hits major milestone in carbon-neutral operations through integrated waste-to-energy systems."
        },
        {
            title: "Revolutionizing AI Infrastructure with Liquid Cooling",
            category: "Innovation",
            date: "April 15, 2024",
            image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=2070",
            description: "Next-gen cooling technologies implemented to support intense high-performance computing density."
        }
    ];

    return (
        <section className="relative py-32 bg-white overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <span className="w-8 h-[2px] bg-cyan-500" />
                            <span className="text-sm font-bold text-cyan-600 uppercase tracking-widest">Insights</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-7xl font-bold leading-tight"
                            style={{ color: brandNavy }}
                        >
                            Latest <span style={{ color: cyanColor }}>News</span>
                        </motion.h2>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-4 bg-[#001738] text-white rounded-full font-bold hover:bg-cyan-500 transition-colors shadow-xl"
                    >
                        View All Stories
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Stacking Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {newsData.map((news, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="group relative h-[500px] w-full preserve-3d"
                        >
                            {/* The "Stack" underlying effect */}
                            <div className="absolute inset-0 bg-gray-100 translate-y-4 scale-[0.95] z-0 group-hover:translate-y-6 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gray-50 translate-y-2 scale-[0.98] z-0 group-hover:translate-y-3 transition-transform duration-500" />

                            {/* Main Card */}
                            <div className="relative h-full w-full bg-white overflow-hidden border border-gray-100 shadow-2xl z-10 group-hover:-translate-y-4 transition-transform duration-500 cursor-pointer">
                                {/* Image Section */}
                                <div className="h-1/2 w-full overflow-hidden relative">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#001738] shadow-lg">
                                        {news.category}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Content Section */}
                                <div className="p-8 space-y-4">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold">
                                        <Calendar className="w-4 h-4 text-cyan-500" />
                                        {news.date}
                                    </div>
                                    <h3
                                        className="text-2xl font-bold leading-snug transition-colors group-hover:text-cyan-600"
                                        style={{ color: brandNavy }}
                                    >
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                        {news.description}
                                    </p>

                                    <div className="pt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                <MessageSquare className="w-4 h-4" />
                                                <span>12</span>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all transform group-hover:rotate-45">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Side Decorative Text */}
            <div className="absolute left-0 bottom-10 text-[10rem] font-black text-gray-50 pointer-events-none select-none -translate-x-1/2 rotate-90 leading-none">
                INSIGHTS
            </div>
        </section>
    );
};

export default LatestNews;
