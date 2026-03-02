'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Building2,
  Briefcase,
  CheckCircle2,
  Zap,
  Info,
  ArrowRight
} from 'lucide-react';
import type { Job } from '@/lib/careers/jobs';

type JobDescriptionProps = {
  job: Job;
};

const JobDescription = ({ job }: JobDescriptionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 px-6 py-24 md:py-32">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-50 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-cyan-500" />
            <span className="text-xs font-black tracking-[0.4em] text-cyan-600 uppercase">Careers / Detail</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight uppercase mb-10"
          >
            {job.title.split(' / ').map((part, i) => (
              <span key={i} className="block last:text-cyan-500">
                {part}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest"
          >
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-500" />
              {job.team}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-500" />
              {job.location}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-500" />
              {job.employmentType}
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-500" />
              {job.workplaceType}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deployment Banner */}
      <section className="mx-auto max-w-5xl px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[21/9] overflow-hidden rounded-3xl group shadow-2xl"
        >
          <img
            src="/infrastructure-crane.png"
            alt="USDC Infrastructure Deployment"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <h4 className="text-xl font-black uppercase tracking-widest mb-1 text-cyan-400">Execution in Focus</h4>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Deploying USDC ARMS Infrastructure</p>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-5xl px-6 -mt-10 relative z-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview Card */}
            <motion.div variants={item} className="bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-3xl">
              <h2 className="text-sm font-black tracking-[0.3em] text-slate-400 uppercase mb-6 flex items-center gap-3">
                <Info className="w-4 h-4 text-cyan-500" />
                Role Overview
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                {job.description}
              </p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div variants={item} className="bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-3xl">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">
                Key Responsibilities
              </h2>
              <div className="grid gap-6">
                {job.responsibilities.map((resp, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full border border-cyan-200 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:bg-white" />
                    </div>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div variants={item} className="bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-3xl">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">
                Qualifications & Requirements
              </h2>
              <div className="grid gap-4">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-200 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-700 font-bold text-sm tracking-wide uppercase">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Action Bar */}
            <motion.div variants={item} className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl shadow-cyan-900/20">
              <h3 className="text-2xl font-black uppercase mb-4 leading-tight">Apply for this role</h3>
              <p className="text-slate-400 text-sm mb-8 font-medium">
                Join our mission to power the future of digital infrastructure.
              </p>
              <Link
                href={`/careers/${job.slug}/apply`}
                className="group w-full flex items-center justify-between bg-cyan-500 hover:bg-white px-6 py-4 rounded-2xl text-slate-950 font-black tracking-widest uppercase transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Why It Matters */}
            {job.whyItMatters && (
              <motion.div variants={item} className="bg-cyan-50 border border-cyan-100 rounded-3xl p-8">
                <Zap className="w-10 h-10 text-cyan-500 mb-6" />
                <h3 className="text-lg font-black text-slate-900 uppercase mb-4 tracking-tight">Why It Matters</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-semibold italic">
                  &quot;{job.whyItMatters}&quot;
                </p>
              </motion.div>
            )}

            {/* Work Environment */}
            {job.workEnvironment && (
              <motion.div variants={item} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Environment</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-bold">
                  {job.workEnvironment}
                </p>
              </motion.div>
            )}

            {/* Nice to Have */}
            {job.niceToHave.length > 0 && (
              <motion.div variants={item} className="p-2">
                <h3 className="text-xs font-black text-cyan-600 uppercase tracking-[0.3em] mb-6 px-4">Preference Plus</h3>
                <div className="space-y-3">
                  {job.niceToHave.map((item, i) => (
                    <div key={i} className="px-4 py-2 border-l-2 border-slate-100 hover:border-cyan-500 transition-colors">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Footer Back Link */}
      <section className="mx-auto max-w-5xl px-6 mt-16 text-center">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-slate-400 hover:text-cyan-500 transition-colors uppercase"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Browse more positions
        </Link>
      </section>
    </div>
  );
};

export default JobDescription;
