import { motion } from 'framer-motion';

const Opportunity = () => {
    const titleBlue = '#0b4a8a';

    return (
        <section className="relative py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold"
                    style={{ color: titleBlue }}
                >
                    The Opportunity
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-6 text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
                >
                    The Global demand for data center capacity is expected to rise at an annual rate between 19% and 22% from 2023 to 2030 to reach a yearly demand of 219 Gigawatts. At USDC, we stand poised to capitalize on these secular trends by taking existing energy assets and converting them into Tier III HPC data centers at a fraction of the cost when compared to the competition.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-10 bg-white shadow-2xl border border-slate-100 overflow-hidden"
                >
                    {/* Replace `/opportunity-chart.png` with the exact image file in your public folder */}
                    <img src={`./midis post (3).jpg`} alt="Opportunity chart" className="w-full h-auto block" />
                </motion.div>
            </div>
        </section>
    );
};

export default Opportunity;
