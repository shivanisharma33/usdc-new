import { motion } from 'framer-motion';
import { Send, Globe, ShieldCheck, Zap } from 'lucide-react';

const ContactPage = () => {

    const departments = [
        { name: "General Inquiry", email: "info@usdc.com" },
        { name: "Investor Relations", email: "investors@usdc.com" },
        { name: "Careers", email: "talent@usdc.com" },
        { name: "Media & Press", email: "media@usdc.com" }
    ];

    const offices = [
        { city: "Northern Virginia", address: "21000 Atlantic Blvd, Dulles, VA", type: "East Coast HQ" },
        { city: "Columbus", address: "700 Ackerman Rd, Columbus, OH", type: "Operational Hub" },
        { city: "Helsinki", address: "Kaivokatu 8, 00100 Helsinki", type: "European Node" }
    ];

    return (
        <div className="bg-white selection:bg-cyan-100 selection:text-cyan-700">
            {/* Split Screen Design */}
            <section className="min-h-screen relative flex flex-col lg:flex-row overflow-hidden pt-20">

                {/* Left Side: Information & Branding */}
                <div className="w-full lg:w-5/12 bg-slate-950 p-8 md:p-16 lg:p-24 flex flex-col justify-between text-white relative">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,#40D1FB_1px,transparent_1px)] bg-[length:30px_30px]" />
                    </div>

                    <div className="relative z-10 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-cyan-500/30 bg-cyan-500/10 mb-8">
                                <span className="w-1.5 h-1.5 bg-cyan-400" />
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-300">Global Communication</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                                Get In <br /> <span className="text-cyan-400">Touch.</span>
                            </h1>
                            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-sm">
                                Architecting the future requires constant dialogue. Reach out to our specialized departments for institutional inquiries.
                            </p>
                        </motion.div>

                        <div className="space-y-8 pt-8 border-t border-white/5">
                            {offices.map((office, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="group cursor-default"
                                >
                                    <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-1">{office.type}</p>
                                    <p className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors uppercase">{office.city}</p>
                                    <p className="text-sm text-slate-500">{office.address}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 pt-16 flex items-center gap-8">
                        <a href="#" className="p-3 bg-white/5 border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 hover:text-slate-950 transition-all">
                            <Send className="w-5 h-5" />
                        </a>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                            Secure Data Channel <br /> v2.4 Active
                        </div>
                    </div>
                </div>

                {/* Right Side: High-End Contact Form */}
                <div className="w-full lg:w-7/12 bg-white p-8 md:p-16 lg:p-24 flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full max-w-2xl mx-auto"
                    >
                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-600 transition-colors">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-slate-50 border-none px-6 py-4 focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-slate-900 font-bold uppercase tracking-widest placeholder:text-slate-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-600 transition-colors">Corporate Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-slate-50 border-none px-6 py-4 focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-slate-900 font-bold uppercase tracking-widest placeholder:text-slate-300"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Department</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {departments.map((dept, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            className="px-4 py-3 border border-slate-100 bg-slate-50 text-[9px] font-black uppercase tracking-widest hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all text-center leading-tight"
                                        >
                                            {dept.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-600 transition-colors">Brief Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full bg-slate-50 border-none px-6 py-4 focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-slate-900 font-bold uppercase tracking-widest placeholder:text-slate-300"
                                    placeholder="Tell us about your project requirements..."
                                />
                            </div>

                            <div className="pt-6">
                                <button className="w-full bg-slate-950 text-white px-12 py-6 font-black uppercase tracking-[0.3em] hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center justify-center gap-4 group">
                                    Initialize Inquiry <MoveRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>

                            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-30">
                                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                                    <ShieldCheck className="w-4 h-4 text-cyan-600" /> AES-256 Encrypted
                                </div>
                                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                                    <Zap className="w-4 h-4 text-cyan-600" /> Instant Routing
                                </div>
                                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                                    <Globe className="w-4 h-4 text-cyan-600" /> Global Gateway
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const MoveRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
);

export default ContactPage;
