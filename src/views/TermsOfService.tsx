'use client';

import { motion } from 'framer-motion';
import { Scale, ShieldCheck, FileText, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
    const brandNavy = "#001738";
    const cyanColor = "#40D1FB";

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden" style={{ background: brandNavy }}>
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${cyanColor} 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8"
                    >
                        <Scale className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Legal Agreement</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        Terms <span style={{ color: cyanColor }}>Of Service</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Please read these terms carefully before using USDC infrastructure and services.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg prose-slate max-w-none"
                    >
                        <div className="mb-12 p-8 bg-slate-50 border border-slate-100 rounded-3xl flex items-start gap-6">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${cyanColor}15`, color: cyanColor }}>
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Last Update</h3>
                                <p className="text-slate-500 m-0">Effective as of: February 24, 2026</p>
                            </div>
                        </div>

                        <div className="space-y-12 text-slate-700 leading-relaxed font-medium">
                            <div>
                                <p className="text-xl text-slate-900 font-bold mb-6">
                                    Welcome to USDC.com (the “Site”). USDC, Inc. (“USDC,” “we,” “our,” or “us”) provides this Site for informational purposes and access to certain services.
                                </p>
                                <p>
                                    By using the Site, you (“User,” “you,” or “your”) agree to be bound by these Terms of Use (“Terms”). If you do not agree, you must not use the Site.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">01</span>
                                    Use of the Site
                                </h2>
                                <p className="mb-4">
                                    The Site is provided for general information about USDC and our services. You may only use the Site for lawful purposes and in accordance with these Terms. You agree not to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600">
                                    <li>Attempt to gain unauthorized access to the Site or related systems.</li>
                                    <li>Use the Site to transmit harmful code, spam, or malicious content.</li>
                                    <li>Interfere with or disrupt the Site’s operation or security.</li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-shadow">
                                    <ShieldCheck className="w-8 h-8 text-cyan-500 mb-4" />
                                    <h4 className="text-lg font-bold text-slate-950 mb-3">Compliance</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">Users must comply with all applicable local, state, and international laws while using our platforms.</p>
                                </div>
                                <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-shadow">
                                    <AlertCircle className="w-8 h-8 text-cyan-500 mb-4" />
                                    <h4 className="text-lg font-bold text-slate-950 mb-3">User Conduct</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">Any misuse of our infrastructure or interference with other users' access will result in immediate termination.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">02</span>
                                    Intellectual Property
                                </h2>
                                <p>
                                    All content, logos, graphics, designs, images, software, and materials on the Site are the property of USDC or its licensors and are protected by intellectual property laws. You may not copy, distribute, modify, or use any content without written permission, except for personal, non-commercial use.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">03</span>
                                    No Investment or Professional Advice
                                </h2>
                                <p>
                                    All content on the Site is provided for informational purposes only. Nothing on the Site constitutes legal, financial, investment, or technical advice.
                                </p>
                            </div>

                            <div className="relative p-12 overflow-hidden rounded-[2.5rem] bg-slate-900 text-white my-16">
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, ${cyanColor} 1px, transparent 0)`,
                                        backgroundSize: '30px 30px'
                                    }}
                                />
                                <h3 className="text-3xl font-black mb-6 relative z-10">Termination Clause</h3>
                                <p className="text-slate-400 text-lg relative z-10 leading-relaxed">
                                    USDC reserves the right to suspend or terminate access to our services at any time, without prior notice, for conduct that we believe violates these Terms of Use.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">04</span>
                                    Third-Party Links
                                </h2>
                                <p>
                                    The Site may include links to third-party websites. These are provided for convenience and do not imply endorsement. USDC is not responsible for third-party content or practices.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">05</span>
                                    Disclaimer of Warranties
                                </h2>
                                <p>
                                    The Site and all content are provided “as is” and “as available” without any warranties. USDC does not guarantee the Site will be uninterrupted, error-free, or secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">06</span>
                                    Limitation of Liability
                                </h2>
                                <p>
                                    USDC and its affiliates shall not be liable for any damages arising from your use of the Site, including direct, indirect, incidental, or consequential damages.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">07</span>
                                    Indemnification
                                </h2>
                                <p>
                                    You agree to indemnify and hold USDC harmless against any claims or losses arising from your use of the Site or violation of these Terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">08</span>
                                    Privacy
                                </h2>
                                <p>
                                    Your use of the Site is governed by our Privacy Policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">09</span>
                                    Changes to the Terms
                                </h2>
                                <p>
                                    USDC may update these Terms at any time. Updates are effective upon posting. Continued use of the Site means you accept the updated Terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs">10</span>
                                    Governing Law
                                </h2>
                                <p>
                                    These Terms are governed by the laws of the State of Delaware. Any disputes must be resolved in state or federal courts located in Delaware.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
