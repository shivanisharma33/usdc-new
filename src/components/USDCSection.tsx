'use client';

import OptimizedImage from './OptimizedImage';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap } from 'lucide-react';

const USDCSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <svg className="absolute right-0 top-0 opacity-10" width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="240" cy="240" r="200" fill="#40D1FB" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid gap-12 lg:grid-cols-2 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#E6FBFF] to-white border border-slate-100 mb-4">
            <Globe className="w-4 h-4 text-[#40D1FB]" />
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">ARMS 200 Platform</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#00d3f2]">ARMS 200 -</span>
            <span className="ml-2 text-slate-900">Rapid, Modular Data Center Pods</span>
          </h2>
          <p className="mt-3 text-lg text-slate-600 max-w-xl">The ARMS 200 is a modular, containerized data center platform engineered for AI and HPC. Each ARMS 200 pod delivers dense GPU compute, fast site commissioning, and native renewable-energy integration for lower carbon intensity.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Module Density</span>
              <span className="text-2xl font-black text-[#0ea5e9]">ARMS 200 Pods</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Typical Deployment</span>
              <span className="text-2xl font-black text-slate-900"><span className="text-[#0ea5e9]">4–8</span> weeks</span>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Efficiency Gain</span>
              <span className="text-2xl font-black text-[#0ea5e9]">Up to 30% Less Energy</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#40D1FB] to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-3">
              Explore ARMS 200 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-5 py-3 bg-white border border-slate-200 text-slate-900 font-semibold rounded-lg flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" /> ARMS 200 Specs
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <OptimizedImage
                src="/usdc/usdccccc.jpg"
                alt="USDC modular containers"
                width={1600}
                height={1040}
                className="w-full h-96 md:h-[520px] object-cover"
              />
            </motion.div>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default USDCSection;
