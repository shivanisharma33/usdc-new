'use client';

import { motion } from 'framer-motion';

const EarthSection = () => {
    const cyanColor = "#40D1FB";
    // Map removed — focusing on attractive stats presentation

    const stats = [
        {
            number: "4",
            label: "United States-based Redevelopment Sites"
        },
        {
            number: "55",
            label: "Megawatts Currently In Development"
        },
        {
            number: "300",
            label: "Megawatts of Potential Conversion Assets"
        }
    ];

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background removed per request */}

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-16"
                >
                    {/* Header */}
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                        USDC By The <span style={{ color: cyanColor }}>Numbers</span>
                    </h2>

                    {/* Stats Grid - upgraded cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                className="relative bg-white p-8 md:p-10 shadow-lg border border-slate-100 flex flex-col items-center"
                            >
                                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(64,209,251,0.12), rgba(7,89,190,0.12))' }}>
                                    <span className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{stat.number}</span>
                                </div>

                                <p className="mt-6 text-center text-base md:text-lg text-gray-600 font-medium max-w-[300px] leading-relaxed">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Soft background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[140px] pointer-events-none" />
        </section>
    );
};

export default EarthSection;
