'use client';

import OptimizedImage from '../components/OptimizedImage';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Mail, ArrowUpRight, ChevronDown, Globe, Award, ShieldCheck, Zap } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const Management = () => {
    // Parallax Hero
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

    const team = [
        {
            name: "Alec Amar",
            role: "President",
            bio: "Mr. Amar is an entrepreneur and infrastructure executive with deep experience in energy, high-density data-center development, and advanced digital infrastructure. Under Mr. Amar's leadership, DigiPowerX has expanded into multiple U.S. markets with a growing portfolio of high-power data-center properties, including the development of a Tier III campus in Columbiana, Alabama; the modernization and repurposing of critical-power infrastructure in New York; and a national pipeline tied to power-station redevelopment, modular AI-ready facilities, and long-term energy-backed compute sites. Mr. Amar guided the creation of DigiPowerX's proprietary ARMS 200 modular Tier III data-center system, engineered specifically for ultra-dense GPU clusters such as Nvidia B200/B300 deployments.",
            image: "/alec.webp",
            linkedin: "https://www.linkedin.com/search/results/all/?keywords=Alec%20Amar%20DigiPowerX",
            email: "alec@digipowerx.com"
        },
        {
            name: "Michel Amar",
            role: "Chief Executive Officer & Chairman",
            bio: "Michel Amar is a French-American businessman and entrepreneur known for his success in innovative technology, such as blockchain and electronics, as well as developing branded fashion. With a Bachelor's degree in accounting and business management, Michel has worked and consulted with some of the most famous international brands, playing a vital role in their profitability and continued relevance. In 2019, Michel partnered with Brookstone, a novelty retailer, in developing exclusive, technologically advanced products for their consumer electronics market.",
            image: "/michal.webp",
            linkedin: "https://www.linkedin.com/search/results/all/?keywords=Michel%20Amar%20DigiPowerX",
            email: "michel@digipowerx.com"
        }
    ];

    return (
        <div className="bg-white">
            {/* Parallax Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-white z-10" />
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                        alt="Management"
                        className="w-full h-full object-cover opacity-30 grayscale contrast-125 scale-105"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8 pt-20 md:pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-8">
                            STOCKED WITH <br /> <span className="text-cyan-400">EXPERTISE</span>
                        </h1>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Meet our leaders</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </section>

            {/* Core Values / Expertise Section */}
            <section className="py-24 bg-white border-y border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 text-[20rem] font-black text-slate-50 leading-none -z-10 translate-x-1/4 translate-y-1/4 select-none pointer-events-none">
                    LEAD
                </div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: Globe, title: "Global Vision", desc: "Expanding infrastructure across high-growth corridors." },
                            { icon: Award, title: "Industry Experts", desc: "Decades of combined experience in energy & HPC." },
                            { icon: ShieldCheck, title: "Operational Security", desc: "Tier III standards maintained by our global ops team." },
                            { icon: Zap, title: "Technical Edge", desc: "Pioneering liquid cooling and asset optimization." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4 group"
                            >
                                <div className="p-3 w-fit bg-slate-50 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">{item.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Leadership Section (Fixed Blur Design) ─── */}
            <section className="py-32 bg-slate-50/50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-32">
                        <span className="text-xs font-black text-cyan-600 uppercase tracking-[0.6em] mb-6 block">Our Leadership</span>
                        <h2 className="text-5xl lg:text-7xl font-black text-slate-900">The Human <span className="text-cyan-500 italic">Engine</span></h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
                        {team.map((member, i) => (
                            <LeadershipCard key={i} index={i} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Quote Section */}
            <section className="bg-white py-32 relative text-center border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-6 space-y-12">
                    <p className="text-cyan-600 font-black tracking-[0.6em] uppercase text-xs">A unified dedication</p>
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                        &ldquo;We don&apos;t just build buildings; we build the <span className="text-cyan-500">intelligence backbone</span> of the future.&rdquo;
                    </h3>
                    <div className="flex justify-center pt-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-cyan-500 transition-all flex items-center gap-3"
                        >
                            Investor Deck <ArrowUpRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

// ─── Refined Leadership Card with smaller image area to reduce blur ───
type LeadershipProps = {
    index: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
    email?: string;
};

const LeadershipCard = ({ index, name, role, bio, image, linkedin, email }: LeadershipProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-white p-6 border border-slate-200"
        >
            <div className="flex flex-col gap-8">
                {/* Image area with restricted size and sharpening fixes */}
                <div className="relative w-full aspect-square overflow-hidden bg-slate-900">
                    <OptimizedImage
                        src={image}
                        alt={name}
                        width={900}
                        height={900}
                        loading="eager"
                        className="w-full h-full object-cover object-top transition-all duration-700"
                        style={{
                            imageRendering: 'auto',
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0)',
                            filter: 'contrast(1.05) brightness(1.02)' // mask low-res blur with slight contrast
                        }}
                    />

                    {/* Socials - Overlay Layout */}
                    <div className="absolute bottom-0 right-0 flex gap-[2px]">
                        <a href={linkedin} className="p-4 bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-cyan-500 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${email}`} className="p-4 bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-cyan-500 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Content Area */}
                <div className="space-y-4">
                    <div className="space-y-1">
                        <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                            {name}
                        </h3>
                        <p className="text-xs font-black text-cyan-500 uppercase tracking-[0.3em]">
                            {role}
                        </p>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">
                        {bio}
                    </p>

                    <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Member since 2024
                        </span>
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 cursor-pointer"
                        >
                            Full Profile <ArrowUpRight className="w-3 h-3 text-cyan-500" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Accent lines */}
            <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t border-r border-cyan-500/30" />
            <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b border-l border-cyan-500/30" />
        </motion.div>
    );
};

export default Management;
