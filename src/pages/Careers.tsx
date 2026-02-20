import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Users, Zap, Heart, Star, Target, ShieldCheck, Briefcase } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const Careers = () => {
    // Parallax Hero
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

    const benefits = [
        {
            title: "Future of Work",
            desc: "Hybrid flexibility and modern workspaces designed for collaborative high-performance.",
            icon: Users
        },
        {
            title: "Health & Wellness",
            desc: "Comprehensive health plans and wellness stipends to keep our team at their peak.",
            icon: Heart
        },
        {
            title: "Equity & Growth",
            desc: "Stock options and professional development budgets for long-term shared success.",
            icon: Star
        },
        {
            title: "Sustainability",
            desc: "Be part of a team actively solving the energy crisis for digital infrastructure.",
            icon: Zap
        }
    ];

    const jobs = [
        {
            title: "Infrastructure Engineer",
            department: "Engineering",
            location: "Northern Virginia / Remote",
            type: "Full-Time"
        },
        {
            title: "Energy Solutions Architect",
            department: "Sustainability",
            location: "Columbus, OH",
            type: "Full-Time"
        },
        {
            title: "Senior Facility Manager",
            department: "Operations",
            location: "Helsinki, Finland",
            type: "Full-Time"
        },
        {
            title: "Data Center Operations Lead",
            department: "Operations",
            location: "Singapore",
            type: "Full-Time"
        },
        {
            title: "AI Infrastructure Specialist",
            department: "Technology",
            location: "Remote",
            type: "Contract"
        }
    ];

    return (
        <div className="bg-white">
            {/* Parallax Hero Section */}
            <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-white z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                        alt="Join our team"
                        className="w-full h-full object-cover opacity-30 grayscale contrast-125 scale-105"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8 pt-20 md:pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-8 uppercase">
                            Build the <br /> <span className="text-cyan-400">Future</span>
                        </h1>
                        {/* <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
                            USDC is looking for visionaries, engineers, and problem-solvers to architect the sustainable backbone of the digital economy.
                        </p> */}
                    </motion.div>
                </div>

                {/* 'Open Positions' floating label removed per request */}
            </section>

            {/* Why Join Us Section */}
            <section className="py-24 bg-white border-y border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 text-[18rem] font-black text-slate-50 leading-none -z-0 translate-x-1/4 translate-y-1/4 select-none pointer-events-none uppercase">
                    Team
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4 group"
                            >
                                <div className="p-3 w-fit bg-slate-50 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">{benefit.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture / Mission Section */}
            <section className="py-32 bg-slate-50/50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-cyan-400" />
                                <span className="text-sm font-bold text-cyan-500 uppercase tracking-widest">Our Culture</span>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 uppercase leading-[0.9]">
                                Intelligence <br /><span className="text-cyan-400">at Scale</span>
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-cyan-500 text-slate-950">
                                    <Target className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-2">Outcome Driven</h4>
                                    <p className="text-slate-500">We value results and radical transparency. Every voice contributes to our collective engineering excellence.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-cyan-500 text-slate-950">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-2">Sustainable First</h4>
                                    <p className="text-slate-500">We don't build unless it's sustainable. Our team is dedicated to carbon-neutral operations in every market we enter.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
                                alt="Collaborative culture"
                                className="w-full h-full object-cover grayscale"
                            />
                            <div className="absolute inset-0 bg-cyan-500/10 mix-blend-multiply" />
                            <div className="absolute bottom-0 left-0 p-8 text-white z-10 group cursor-default">
                                <p className="text-[8rem] font-black leading-none opacity-20">2k25</p>
                                <p className="text-xs font-black uppercase tracking-[0.5em] mt-[-2rem]">Architecting Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Listing Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-cyan-400" />
                                <span className="text-sm font-bold text-cyan-500 uppercase tracking-widest">Find your role</span>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight uppercase">
                                Open <span className="text-cyan-400">Positions</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">{jobs.length} Active Openings</p>
                    </div>

                    <div className="space-y-6">
                        {jobs.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="group p-8 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-cyan-500 transition-all cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute inset-y-0 left-0 w-[2px] bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                                <div className="space-y-2 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="w-4 h-4 text-cyan-500" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{job.department}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 group-hover:text-cyan-500 transition-colors uppercase tracking-tight">{job.title}</h3>
                                </div>

                                <div className="flex items-center gap-12 relative z-10">
                                    <div className="hidden lg:block text-right">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                                        <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">{job.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Commitment</p>
                                        <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">{job.type}</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* General Application CTA */}
                    <div className="mt-20 p-12 bg-slate-900 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#40D1FB_1px,transparent_1px)] bg-[length:30px_30px]" />
                        </div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="space-y-4 text-center lg:text-left">
                                <h3 className="text-4xl font-black uppercase tracking-tighter">Don't see a fit?</h3>
                                <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">We're always looking for exceptional talent to join our network.</p>
                            </div>
                            <button className="px-12 py-5 bg-cyan-500 text-slate-950 font-black uppercase tracking-widest hover:bg-white transition-all">
                                General Application
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

export default Careers;
