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
            name: "Alex Sterling",
            role: "Chief Executive Officer",
            bio: "With over 20 years in digital infrastructure, Alex leads USDC's vision of integrating sustainable energy with high-performance computing.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2000",
            linkedin: "#",
            email: "alex@usdc.com"
        },
        {
            name: "Dr. Sarah Chen",
            role: "Chief Technology Officer",
            bio: "A pioneer in liquid cooling technologies, Dr. Chen oversees our internal R&D and ensures our facilities remain at the cutting edge of efficiency.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2000",
            linkedin: "#",
            email: "sarah@usdc.com"
        },
        {
            name: "Marcus Vane",
            role: "Chief Operating Officer",
            bio: "Marcus specializes in global asset conversion, turning underutilized power sites into operational Tier III data centers in record time.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2000",
            linkedin: "#",
            email: "marcus@usdc.com"
        },
        {
            name: "Elena Rodriguez",
            role: "Head of Sustainability",
            bio: "Elena leads our Net-Zero initiatives, ensuring every USDC facility contributes positively to the local energy grid and environment.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=2000",
            linkedin: "#",
            email: "elena@usdc.com"
        },
        {
            name: "Julian Thorne",
            role: "VP of Strategic Partnerships",
            bio: "Julian manages relationships with hyperscale providers and global energy companies to secure the future of our digital footprint.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000",
            linkedin: "#",
            email: "julian@usdc.com"
        },
        {
            name: "Sophia Wu",
            role: "Director of Infrastructure",
            bio: "Sophia oversees the physical build-out of our global facilities, ensuring top-tier security and structural excellence at every site.",
            image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c943?auto=format&fit=crop&q=80&w=2000",
            linkedin: "#",
            email: "sophia@usdc.com"
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
                    <img
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

            {/* Management Grid */}
            <section className="py-32 bg-slate-50/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-4 mb-20">
                        <div className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-cyan-400" />
                            <span className="text-sm font-bold text-cyan-500 uppercase tracking-widest">Our Leadership</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
                            The Minds Behind <br />
                            <span className="text-cyan-400">Sustainable Growth</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                        {team.map((member, i) => (
                            <TeamCard key={i} index={i} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Quote Section */}
            <section className="bg-slate-950 py-32 relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#40D1FB_1px,transparent_1px)] bg-[length:40px_40px]" />
                </div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
                    <p className="text-cyan-400 font-black tracking-[0.6em] uppercase text-xs">A unified dedication</p>
                    <h3 className="text-4xl md:text-6xl font-bold leading-tight">
                        "We don't just build buildings; we build the <span className="text-cyan-400">intelligence backbone</span> of the future."
                    </h3>
                    <div className="flex justify-center pt-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-white text-slate-950 font-black uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center gap-3"
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

// Team Card Component with sharp edges and premium animations
const TeamCard = ({ index, name, role, bio, image, linkedin, email }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
            viewport={{ once: true }}
            className="group"
        >
            <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-slate-100">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 flex items-center gap-4">
                        <a href={linkedin} className="p-3 bg-white text-slate-950 hover:bg-cyan-400 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${email}`} className="p-3 bg-white text-slate-950 hover:bg-cyan-400 transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="space-y-1">
                    <h3 className="text-3xl font-black text-slate-900 group-hover:text-cyan-500 transition-colors">
                        {name}
                    </h3>
                    <p className="text-sm font-black text-cyan-500 uppercase tracking-widest">
                        {role}
                    </p>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed line-clamp-3">
                    {bio}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-950 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    Full Profile <ArrowUpRight className="w-4 h-4 text-cyan-500" />
                </div>
            </div>
        </motion.div>
    );
};

export default Management;
