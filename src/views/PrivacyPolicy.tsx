'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
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
                        <Shield className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Legal & Privacy</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        Privacy <span style={{ color: cyanColor }}>Policy</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Your privacy is our priority. Learn how USDC handles your data and ensures transparency in everything we do.
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
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Effective Date</h3>
                                <p className="text-slate-500 m-0">Last updated: February 24, 2026</p>
                            </div>
                        </div>

                        <div className="space-y-12 text-slate-700 leading-relaxed font-medium">
                            <div>
                                <p className="text-xl text-slate-900 font-bold mb-6">
                                    USDC, Inc. (“USDC,” “we,” “our,” or “us”) values your privacy.
                                </p>
                                <p>
                                    This Privacy Policy explains how we collect, use, and share information when you visit or interact with our website, USDC.com (the “Site”). By using the Site, you agree to the practices described here.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. Information We Collect</h2>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">a) Information You Provide</h3>
                                <ul className="list-disc pl-6 space-y-2 mb-6">
                                    <li>Name, email address, phone number, or other details submitted through forms or inquiries.</li>
                                    <li>Any information you voluntarily provide to us.</li>
                                </ul>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">b) Automatically Collected Information</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Log data: IP address, browser type, operating system, referring pages, and access times.</li>
                                    <li>Cookies: Used to improve the Site experience and understand usage behaviors.</li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-shadow">
                                    <Lock className="w-8 h-8 text-cyan-500 mb-4" />
                                    <h4 className="text-lg font-bold text-slate-950 mb-3">Data Security</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">We implement reasonable administrative, technical, and physical safeguards to protect your personal data.</p>
                                </div>
                                <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-shadow">
                                    <Eye className="w-8 h-8 text-cyan-500 mb-4" />
                                    <h4 className="text-lg font-bold text-slate-950 mb-3">Transparency</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">We are clear about what data we collect, why we collect it, and how we use it to improve our services.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. How We Use Your Information</h2>
                                <p className="mb-4">We use collected information to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Operate, maintain, and improve the Site.</li>
                                    <li>Respond to inquiries and provide support.</li>
                                    <li>Communicate updates, events, or services (if you opt in).</li>
                                    <li>Enhance security and prevent fraudulent activity.</li>
                                    <li>Comply with legal and regulatory obligations.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Sharing of Information</h2>
                                <p className="mb-4">We do not sell your personal information. We may share information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>With service providers such as hosting, analytics, or IT support partners.</li>
                                    <li>When required by law, subpoena, or regulatory authorities.</li>
                                    <li>If USDC undergoes a merger, acquisition, or asset transfer.</li>
                                </ul>
                            </div>

                            <div className="relative p-12 overflow-hidden rounded-[2.5rem] bg-slate-900 text-white my-16">
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, ${cyanColor} 1px, transparent 0)`,
                                        backgroundSize: '30px 30px'
                                    }}
                                />
                                <h3 className="text-3xl font-black mb-6 relative z-10">Our Commitment</h3>
                                <p className="text-slate-400 text-lg relative z-10 leading-relaxed">
                                    At USDC, we believe privacy is a fundamental human right. Our infrastructure is built with privacy-by-design principles to ensure your data remains your own.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. Cookies and Tracking</h2>
                                <p className="mb-4">We use cookies and tracking technologies to:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Improve Site functionality.</li>
                                    <li>Understand traffic and user behavior.</li>
                                    <li>Enhance your overall browsing experience.</li>
                                </ul>
                                <p>You may disable cookies through your browser settings, but certain features of the Site may not work properly.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">5. Data Security</h2>
                                <p>
                                    We implement reasonable administrative, technical, and physical safeguards to protect your personal data. However, no security system is completely secure, and we cannot guarantee absolute protection.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">6. Your Rights</h2>
                                <p className="mb-4">Depending on your location, you may have rights such as:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Requesting access to your information.</li>
                                    <li>Correcting or deleting your data.</li>
                                    <li>Opting out of email communications.</li>
                                    <li>Restricting or objecting to certain processing activities.</li>
                                    <li>Requesting a portable copy of your data.</li>
                                </ul>
                                <p>To exercise these rights, please contact us.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">7. Third-Party Links</h2>
                                <p>
                                    Our Site may contain links to third-party websites. We are not responsible for their privacy practices or content.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">8. Children’s Privacy</h2>
                                <p>
                                    The Site is not intended for children under 13. We do not knowingly collect information from children.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">9. Changes to This Privacy Policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time. Revised versions will be posted on this page with an updated effective date.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
