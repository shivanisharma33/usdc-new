import { motion } from 'framer-motion';

const EarthSection = () => {
    const cyanColor = "#40D1FB";

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
        <section className="relative min-h-[150vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Earth Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source
                        src="https://www.pexels.com/download/video/3129957/"
                        type="video/mp4"
                    />
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-16"
                >
                    {/* Header */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        USDC By The <span style={{ color: cyanColor }}>Numbers</span>
                    </h2>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="flex flex-col items-center space-y-4"
                            >
                                <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                                    {stat.number}
                                </span>
                                <p className="text-lg md:text-xl text-gray-300 font-medium max-w-[250px] leading-relaxed transition-colors hover:text-white">
                                    {stat.label}
                                </p>

                                {/* Decorative underline that glows on view */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "60px" }}
                                    transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                                    className="h-1 bg-cyan-400 rounded-full"
                                    style={{ boxShadow: `0 0 15px ${cyanColor}` }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Subtle atmospheric glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
};

export default EarthSection;
