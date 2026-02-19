import { Globe } from 'lucide-react';

const WhatWeDo = () => {
    const brandNavy = "#001738";

    return (
        <section className="relative py-24 bg-gray-50/50 overflow-hidden">
          

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">

                    {/* Content Side */}
                    <div className="flex-1 space-y-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-cyan-400" />
                                <span className="text-sm font-bold text-cyan-500 uppercase tracking-widest">Our Mission</span>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-bold leading-tight" style={{ color: brandNavy }}>
                                What We <span className="text-gray-400">Do</span>
                            </h2>
                        </div>

                        <div className="relative group">
                            <div className="absolute -left-6 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-200 to-transparent" />
                            <div className="space-y-6">
                                <p className="text-xl lg:text-3xl text-gray-800 font-bold leading-[1.3]">
                                    At USDC, we believe high-performance computing can unlock <span className="text-cyan-500">transformative opportunities</span> for businesses and research.
                                </p>
                                <p className="text-lg lg:text-xl text-gray-500 leading-relaxed font-medium">
                                    By integrating cutting-edge technology with renewable energy and waste management systems,
                                    we deliver exceptional results for our partners while prioritizing sustainability
                                    and responsibility.
                                </p>
                            </div>
                        </div>

                        {/* Pillar Grid */}

                    </div>

                    {/* Image Side */}
                    <div className="flex-1 w-full max-w-2xl relative">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl group">
                            <img
                                src="https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg"
                                alt="Data Center Facility"
                                className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[2s] group-hover:scale-110"
                            />

                         

                            {/* Bottom Interactive Card */}
                            <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-2xl p-6 rounded-2xl border border-white/20 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-bold text-lg">Next-Gen HPC</p>
                                        <p className="text-white/70 text-sm">Sustainability First</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                        {/* Geometric Accents */}
                        
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
        </section>
    );
};

export default WhatWeDo;
