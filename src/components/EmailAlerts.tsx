'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, BarChart3, BellRing, FileJson } from 'lucide-react';
import Link from 'next/link';

const EmailAlerts = ({ isModal = false }: { isModal?: boolean }) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className={`${isModal ? 'py-4' : 'py-32 bg-white min-h-[90vh] flex items-center'} relative overflow-visible`}>
            {/* Background Aesthetic Layers */}
            {!isModal && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-[60rem] h-[60rem] bg-cyan-400/5 rounded-full blur-[140px]" />
                    <div className="absolute bottom-[-15%] right-[-5%] w-[50rem] h-[50rem] bg-indigo-500/5 rounded-full blur-[120px]" />
                </div>
            )}

            <div className={`${isModal ? 'max-w-full' : 'max-w-7xl'} mx-auto px-6 relative z-10 w-full`}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Column: Context & Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.div variants={itemVariants} className="flex items-center gap-3">
                                <span className="px-5 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] inline-block">
                                    Investor Connectivity
                                </span>
                                <div className="h-[1px] w-12 bg-slate-100" />
                            </motion.div>

                            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9] text-balance">
                                Institutional <br />
                                <span className="text-cyan-500">Intelligence.</span>
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-slate-500 font-medium text-xl leading-relaxed max-w-lg border-l-4 border-cyan-500/20 pl-6">
                                Get direct access to DigiPowerX (USDC) corporate developments, financial reporting, and end-of-day market performance metrics.
                            </motion.p>
                        </div>

                        {/* Feature Highlights instead of image */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                            {[
                                { icon: BellRing, title: 'Press Releases', desc: 'Real-time updates on company activities and strategic growth.' },
                                { icon: BarChart3, title: 'End-of-Day Detail', desc: 'Secure summary of stock performance and daily metrics.' },
                                { icon: FileJson, title: 'SEC Filings', desc: 'Official institutional reports and regulatory submissions.' },
                                { icon: ShieldCheck, title: 'Encrypted Feed', desc: 'Institutional-grade data security and privacy protocols.' }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="space-y-3 group"
                                >
                                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-black text-slate-900 uppercase tracking-tight text-sm">{feature.title}</h3>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Subscriber Counter */}
                        <motion.div variants={itemVariants} className="pt-10 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
                                ))}
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <span className="text-slate-900">4.2K+</span> Active stakeholders connected
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Form Card */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] relative overflow-hidden">
                            <div className="relative z-10 space-y-10">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Subscription Terminal</h2>
                                    <div className="w-12 h-1.5 bg-cyan-500 rounded-full" />
                                </div>

                                <form className="space-y-8" onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.currentTarget as HTMLFormElement;
                                    const fd = new FormData(form);
                                    const payload = {
                                        firstName: (fd.get('firstName') as string) || '',
                                        lastName: (fd.get('lastName') as string) || '',
                                        email: (fd.get('email') as string) || '',
                                        company: (fd.get('company') as string) || '',
                                        pressReleases: fd.get('pr') === 'on',
                                        secFilings: fd.get('sec') === 'on',
                                        stockDetailEndOfDay: fd.get('stock') === 'on'
                                    };

                                    try {
                                        const res = await fetch('/api/email-alert', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify(payload)
                                        });

                                        if (!res.ok) {
                                            console.error('Submission failed', await res.text());
                                            alert('Submission failed. Please try again.');
                                            return;
                                        }

                                        alert('Thank you — your subscription request was received.');
                                        form.reset();
                                    } catch (err) {
                                        console.error(err);
                                        alert('Network error. Please try again later.');
                                    }
                                }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">First Name</label>
                                            <input
                                                name="firstName"
                                                type="text"
                                                placeholder="John"
                                                className="w-full px-7 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-cyan-500/5 focus:border-cyan-500 focus:bg-white transition-all text-slate-900 font-bold placeholder:text-slate-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Last Name</label>
                                            <input
                                                name="lastName"
                                                type="text"
                                                placeholder="Smith"
                                                className="w-full px-7 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-cyan-500/5 focus:border-cyan-500 focus:bg-white transition-all text-slate-900 font-bold placeholder:text-slate-300"
                                            />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Work Email <span className="text-cyan-500">*</span></label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="name@company.com"
                                                className="w-full px-7 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-cyan-500/5 focus:border-cyan-500 focus:bg-white transition-all text-slate-900 font-bold placeholder:text-slate-300"
                                            />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Organization</label>
                                            <input
                                                name="company"
                                                type="text"
                                                placeholder="Investment Firm / Private"
                                                className="w-full px-7 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-cyan-500/5 focus:border-cyan-500 focus:bg-white transition-all text-slate-900 font-bold placeholder:text-slate-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Categories */}
                                    <div className="space-y-6 pt-2">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Subscription Options</p>
                                        <div className="space-y-4">
                                            {[
                                                { id: 'pr', label: 'Press Releases' },
                                                { id: 'sec', label: 'All SEC Filings' },
                                                { id: 'stock', label: 'Stock Detail – End of Day' }
                                            ].map((option) => (
                                                <label key={option.id} className="flex items-center gap-4 cursor-pointer group/opt p-4 bg-slate-50/50 hover:bg-white rounded-2xl border border-transparent hover:border-cyan-500/20 transition-all">
                                                    <div className="relative">
                                                        <input name={option.id === 'pr' ? 'pr' : option.id === 'sec' ? 'sec' : 'stock'} type="checkbox" className="peer sr-only" defaultChecked={option.id === 'pr'} />
                                                        <div className="w-5 h-5 border-2 border-slate-200 rounded-lg group-hover/opt:border-cyan-500 peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all flex items-center justify-center">
                                                            <div className="w-2 h-2 bg-white rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                                                        </div>
                                                    </div>
                                                    <span className="text-[11px] font-black text-slate-500 group-hover/opt:text-slate-900 uppercase tracking-widest transition-colors">
                                                        {option.label}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-50 space-y-6">
                                        <button type="submit" className="w-full py-6 bg-slate-900 text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all rounded-2xl flex items-center justify-center gap-4 group active:scale-[0.98]">
                                            Submit Alerts <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                        </button>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] text-center leading-relaxed">
                                            Secure end-to-end encryption active. <Link href="/privacy" className="text-slate-900 underline underline-offset-4 decoration-cyan-500/30">Privacy Data Protocol</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default EmailAlerts;
