'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Users,
  Zap,
  Heart,
  Star,
  Target,
  ShieldCheck,
  Briefcase,
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import ContactUs from '@/components/ContactUs';
import { getAllJobs } from '@/lib/careers/jobs';

const Careers = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const benefits = [
    {
      title: 'Future of Work',
      desc: 'Hybrid flexibility and modern workspaces designed for collaborative high-performance.',
      icon: Users,
    },
    {
      title: 'Health & Wellness',
      desc: 'Comprehensive health plans and wellness stipends to keep our team at their peak.',
      icon: Heart,
    },
    {
      title: 'Equity & Growth',
      desc: 'Stock options and professional development budgets for long-term shared success.',
      icon: Star,
    },
    {
      title: 'Sustainability',
      desc: 'Be part of a team actively solving the energy crisis for digital infrastructure.',
      icon: Zap,
    },
  ];

  const jobs = getAllJobs();

  return (
    <div className="bg-white">
      <section
        ref={heroRef}
        className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-slate-950"
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/40 via-transparent to-white" />
          <OptimizedImage
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
            alt="Join our team"
            className="h-full w-full scale-105 object-cover opacity-30 grayscale contrast-125"
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-5xl space-y-8 px-6 pt-20 text-center md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-8 text-7xl font-black leading-none tracking-tighter text-white uppercase md:text-9xl">
              Build the <br /> <span className="text-cyan-400">Future</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-slate-100 bg-white py-24">
        <div className="pointer-events-none absolute top-0 right-0 -z-0 translate-x-1/4 translate-y-1/4 select-none text-[18rem] leading-none font-black text-slate-50 uppercase">
          Team
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group space-y-4"
              >
                <div className="w-fit bg-slate-50 p-3 text-cyan-500 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-black tracking-widest text-slate-900 uppercase">{benefit.title}</h4>
                <p className="leading-relaxed font-medium text-slate-500">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50/50 py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
          <div className="order-2 space-y-10 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-cyan-400" />
                <span className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Our Culture</span>
              </div>
              <h2 className="text-5xl leading-[0.9] font-black text-slate-900 uppercase lg:text-7xl">
                Intelligence <br /> <span className="text-cyan-400">at Scale</span>
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-cyan-500 p-1 text-slate-950">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-black tracking-widest text-slate-900 uppercase">
                    Outcome Driven
                  </h4>
                  <p className="text-slate-500">
                    We value results and radical transparency. Every voice contributes to our collective
                    engineering excellence.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-cyan-500 p-1 text-slate-950">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-black tracking-widest text-slate-900 uppercase">
                    Sustainable First
                  </h4>
                  <p className="text-slate-500">
                    We do not build unless it is sustainable. Our team is dedicated to carbon-neutral
                    operations in every market we enter.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
                alt="Collaborative culture"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-cyan-500/10 mix-blend-multiply" />
              <div className="group absolute bottom-0 left-0 z-10 cursor-default p-8 text-white">
                <p className="text-[8rem] leading-none font-black opacity-20">2k25</p>
                <p className="mt-[-2rem] text-xs font-black tracking-[0.5em] uppercase">Architecting Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-cyan-400" />
                <span className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Find your role</span>
              </div>
              <h2 className="text-5xl leading-tight font-black text-slate-900 uppercase lg:text-7xl">
                Open <span className="text-cyan-400">Positions</span>
              </h2>
            </div>
            <p className="mb-2 text-sm font-bold tracking-widest text-slate-500 uppercase">
              {jobs.length} Active Openings
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={job.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/careers/${job.slug}`}
                  className="group relative flex cursor-pointer flex-col gap-8 overflow-hidden border border-slate-100 p-8 transition-all hover:border-cyan-500 md:flex-row md:items-center md:justify-between"
                >
                  <div className="absolute inset-y-0 left-0 w-[2px] scale-y-0 bg-cyan-500 transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-4 w-4 text-cyan-500" />
                      <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        {job.team}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase transition-colors group-hover:text-cyan-500">
                      {job.title}
                    </h3>
                  </div>

                  <div className="relative z-10 flex items-center gap-12">
                    <div className="hidden text-right lg:block">
                      <p className="mb-1 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        Location
                      </p>
                      <p className="text-sm font-bold tracking-widest text-slate-900 uppercase">
                        {job.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="mb-1 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        Commitment
                      </p>
                      <p className="text-sm font-bold tracking-widest text-slate-900 uppercase">
                        {job.employmentType}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 transition-all group-hover:bg-cyan-500 group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-20 overflow-hidden bg-slate-900 p-12 text-white">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,#40D1FB_1px,transparent_1px)] bg-[length:30px_30px]" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-4xl font-black tracking-tighter uppercase">Do not see a fit?</h3>
                <p className="text-sm font-medium tracking-widest text-slate-400 uppercase">
                  We are always looking for exceptional talent to join our network.
                </p>
              </div>
              <Link
                href="/careers/apply"
                className="bg-cyan-500 px-12 py-5 font-black tracking-widest text-slate-950 uppercase transition-all hover:bg-white"
              >
                General Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
};

export default Careers;
