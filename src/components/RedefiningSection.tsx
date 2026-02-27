import OptimizedImage from './OptimizedImage';
import { Shield, Zap, RefreshCw, Layers } from 'lucide-react';

const RedefiningSection = () => {
    const cyanColor = "#40D1FB";
    // Using a slightly deeper navy for text contrast on white background
    const brandNavy = "#001738";

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorative Elements - Subtle gradients for white theme */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] -ml-40 -mb-40" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Innovation Leader</span>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-bold leading-tight" style={{ color: brandNavy }}>
                            Redefining <span style={{ color: cyanColor }}>Data</span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-medium">
                                At US Data Centers (USDC), we're redefining data center infrastructure to deliver
                                <span className="italic text-gray-900"> unmatched performance, efficiency, and sustainability </span>
                                for data-intensive organizations.
                            </p>

                            <p className="text-gray-500 leading-relaxed border-l-2 border-cyan-500 pl-6 italic">
                                Purpose-built to support next-generation high-performance computing, our expertise lies
                                in identifying and purchasing misused or under-utilized energy assets and converting
                                them to high-demand tier III HPC data centers.
                            </p>
                        </div>

                        {/* Feature Icons Grid */}
                        <div className="grid grid-cols-2 gap-6 pt-8">
                            {[
                                { icon: Zap, label: "Peak Performance" },
                                { icon: Shield, label: "Tier III Reliability" },
                                { icon: RefreshCw, label: "Sustainable Energy" },
                                { icon: Layers, label: "HPC Ready" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 group-hover:border-cyan-400 group-hover:bg-white transition-all shadow-sm">
                                        <item.icon className="w-5 h-5 text-cyan-600" />
                                    </div>
                                    <span className="text-gray-700 font-bold text-sm tracking-wide">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image / Visual Content */}
                    <div className="flex-1 relative group">
                        {/* More subtle glow for light mode */}
                        <div className="absolute -inset-4 bg-cyan-400/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />

                        <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
                            <OptimizedImage
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070"
                                alt="Technology Circuit Board"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                            />
                            {/* Gradient Overlay adjusted for white theme visibility */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#001738]/20 via-transparent to-transparent opacity-40" />

                            {/* Tech Schematic Lines - more visible in light mode */}
                            <div className="absolute inset-0 pointer-events-none opacity-20">
                                <div className="absolute h-[1px] w-full bg-cyan-500 top-1/4 animate-[scan_3s_linear_infinite]" />
                                <div className="absolute w-[1px] h-full bg-cyan-500 left-1/4 animate-[scan_4s_linear_infinite]" />
                            </div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl border border-gray-100 shadow-2xl hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#001738] flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-cyan-50">
                                    III
                                </div>
                                <div>
                                    <p className="text-[#001738] font-bold">Tier III Ready</p>
                                    <p className="text-gray-400 text-sm">Enterprise Critical</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(400%); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default RedefiningSection;
