'use client';

import OptimizedImage from '../components/OptimizedImage';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ShieldCheck, Zap, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const ContactPage = () => {
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);
    const [selectedDept, setSelectedDept] = useState("General Inquiry");
    const formRef = useRef<HTMLFormElement | null>(null);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        await new Promise(r => setTimeout(r, 1500));
        setSubmitting(false);
        setSent(true);
        setTimeout(() => {
            setSent(false);
            formRef.current?.reset();
        }, 3000);
    };

    return (
        <div className="bg-white selection:bg-cyan-100 selection:text-cyan-700">
            <section className="min-h-screen relative flex flex-col lg:flex-row overflow-hidden">

                {/* Left Side: Institutional Information */}
                <div className="w-full lg:w-[45%] bg-slate-950 p-8 md:p-16 lg:p-24 flex flex-col justify-between text-white relative pt-32 lg:pt-32">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_20%_30%,#40D1FB_1px,transparent_1px)] bg-[length:30px_30px]" />
                    </div>

                    <div className="relative z-10 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-cyan-500/30 bg-cyan-500/10 mb-8">
                                <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-300">Global Communication</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                                Get In <br /> <span className="text-cyan-400">Touch.</span>
                            </h1>
                            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-sm">
                                Architecting the future requires constant dialogue. Reach out to our specialized departments for institutional inquiries.
                            </p>
                        </motion.div>

                        <div className="space-y-10 pt-10 border-t border-white/5">
                            {offices.map((office, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-1">{office.type}</p>
                                            <p className="text-xl font-bold text-white uppercase tracking-tight">{office.city}</p>
                                            <p className="text-sm text-slate-500 leading-relaxed">{office.address}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 pt-16 flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden">
                                    <OptimizedImage src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Support" width={40} height={40} />
                                </div>
                            ))}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 leading-tight">
                            Specialized Support <br /> <span className="text-white">Active 24/7 Globally</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Interface */}
                <div className="w-full lg:w-[55%] bg-slate-50/50 p-8 md:p-16 lg:p-24 flex items-center pt-16 lg:pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full max-w-3xl mx-auto"
                    >
                        <div className="bg-white rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-200/50 p-8 md:p-12">
                            <AnimatePresence mode="wait">
                                {!sent ? (
                                    <motion.form
                                        key="form"
                                        ref={formRef}
                                        onSubmit={handleSubmit}
                                        className="space-y-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-600 transition-colors">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none text-slate-900 font-bold placeholder:text-slate-300"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-600 transition-colors">Corporate Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none text-slate-900 font-bold placeholder:text-slate-300"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Select Department</label>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                {departments.map((dept, i) => (
                                                    <button
                                                        key={i}
                                                        type="button"
                                                        onClick={() => setSelectedDept(dept.name)}
                                                        className={`px-4 py-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all text-center leading-tight border ${selectedDept === dept.name
                                                            ? 'bg-slate-950 text-white border-slate-950 shadow-lg shadow-slate-200'
                                                            : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-cyan-200 hover:text-cyan-600'
                                                            }`}
                                                    >
                                                        {dept.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-cyan-600 transition-colors">Brief Message</label>
                                            <textarea
                                                required
                                                rows={5}
                                                className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none text-slate-900 font-bold placeholder:text-slate-300 resize-none"
                                                placeholder="Tell us about your project requirements..."
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <motion.button
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.99 }}
                                                disabled={submitting}
                                                className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-4 transition-all duration-300 shadow-xl ${submitting
                                                    ? 'bg-slate-100 text-slate-400'
                                                    : 'bg-slate-950 text-white hover:bg-slate-900 shadow-slate-200/50'
                                                    }`}
                                            >
                                                {submitting ? (
                                                    <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        <span>Initialize Inquiry</span>
                                                        <ArrowRight className="w-5 h-5" />
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>

                                        <div className="pt-8 grid grid-cols-3 gap-6 opacity-30">
                                            {[
                                                { icon: ShieldCheck, text: "AES-256" },
                                                { icon: Zap, text: "Instant" },
                                                { icon: Globe, text: "Global" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center justify-center gap-2 text-[8px] font-black uppercase tracking-[0.2em]">
                                                    <item.icon className="w-3 h-3 text-cyan-600" /> {item.text}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-24 text-center space-y-8"
                                    >
                                        <div className="w-24 h-24 bg-cyan-50 text-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                            <CheckCircle2 className="w-12 h-12" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Transmission Received</h3>
                                            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm mx-auto">
                                                Your inquiry has been routed to our <span className="text-cyan-600 font-bold">{selectedDept}</span> team.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSent(false)}
                                            className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] hover:text-slate-950 transition-colors"
                                        >
                                            ← Launch New Inquiry
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
