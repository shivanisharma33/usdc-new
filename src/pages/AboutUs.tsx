import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Zap, Leaf, Shield, TrendingUp, Users, Target } from 'lucide-react';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const AboutUs = () => {
  const values = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Delivering cutting-edge GPU/CPU infrastructure for demanding HPC workloads',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Integrating renewable energy and efficient cooling systems',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Tier-III redundancy standards with 99.99% uptime guarantee',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Pioneering next-generation data center architectures',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Collaborating closely with industry leaders and research institutions',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to operational perfection and customer success',
    },
  ];

  const stats = [
    {
      number: '55+',
      label: 'Megawatts in Development',
    },
    {
      number: '300+',
      label: 'MW Potential Assets',
    },
    {
      number: '10+',
      label: 'Years Industry Experience',
    },
    {
      number: '50+',
      label: 'Enterprise Partners',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-50 pt-32">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-slate-100/20 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="space-y-6">
            <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#40D1FB] animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">About Our Company</span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Redefining <span className="bg-gradient-to-r from-[#40D1FB] to-blue-500 bg-clip-text text-transparent">Data Center</span> Excellence
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              USDC is transforming energy infrastructure by converting under-utilized assets into world-class Tier-3 HPC data centers. We're powering the future of AI, research, and high-performance computing.
            </motion.p>

            <motion.div variants={item} className="flex gap-4 pt-4">
              <a
                href="https://static1.squarespace.com/static/6765fcde25dea733d4a4c593/t/6785eb72626f767ed5792eea/1736829812905/USDC+Deck_PS+1.6.25.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-[#40D1FB] to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-block"
              >
                Download Overview
              </a>
              <button className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-900 font-semibold rounded-lg hover:border-[#40D1FB] transition-all">
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div variants={item} className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-100/30 border border-cyan-200">
                <Target className="w-4 h-4 text-[#40D1FB]" />
                <span className="text-sm font-semibold text-[#40D1FB]">Our Mission</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">Building Tomorrow's Infrastructure Today</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our mission is to identify underutilized energy assets and transform them into state-of-the-art Tier-3 HPC data centers that power the next generation of AI, research, and high-performance computing innovation at a fraction of traditional build costs.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#40D1FB] mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Accelerate global AI adoption and research</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#40D1FB] mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Reduce carbon footprint through efficient asset conversion</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#40D1FB] mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Deliver cost-effective, sustainable computing power</span>
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div variants={item} className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100/30 border border-blue-200">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Our Vision</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">The Global Leader in Sustainable HPC Infrastructure</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We envision a world where advanced computing infrastructure is accessible, sustainable, and integrated with renewable energy. USDC is positioned to lead the market transformation by capitalizing on the 19-22% annual growth in global data center demand through 2030.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Become the preferred infrastructure partner globally</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Establish industry standards for efficiency and sustainability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">Enable breakthrough discoveries through accessible computing</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="space-y-12">
            <motion.div variants={item} className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Core Values</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                These principles guide every decision we make and shape our company culture
              </p>
            </motion.div>

            <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={item}
                    className="group bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#40D1FB]/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#40D1FB]/10 to-blue-500/10 flex items-center justify-center mb-4 group-hover:from-[#40D1FB]/20 group-hover:to-blue-500/20 transition-all">
                      <Icon className="w-6 h-6 text-[#40D1FB]" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="space-y-12">
            <motion.div variants={item} className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">By The Numbers</h2>
              <p className="text-xl text-slate-600">Our scale and impact across the industry</p>
            </motion.div>

            <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  className="relative group bg-gradient-to-br from-slate-50 to-white p-8 rounded-lg border border-slate-200 text-center hover:shadow-lg transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#40D1FB]/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <p className="text-5xl font-black text-[#40D1FB] mb-2">{stat.number}</p>
                    <p className="text-slate-700 font-semibold">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose USDC */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="space-y-12">
            <motion.div variants={item} className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Why Choose USDC</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We're not just building data centers—we're building the future
              </p>
            </motion.div>

            <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div variants={item} className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#40D1FB]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-[#40D1FB]">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Cost-Effective Conversion</h3>
                    <p className="text-slate-600">Transform existing energy assets at 40-60% lower costs than traditional builds</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#40D1FB]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-[#40D1FB]">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Sustainable Design</h3>
                    <p className="text-slate-600">Integrated renewable energy and efficient cooling systems for zero impact operations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#40D1FB]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-[#40D1FB]">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Enterprise Grade Infrastructure</h3>
                    <p className="text-slate-600">Tier-III redundant systems with 99.99% uptime and advanced security</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item} className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Rapid Deployment</h3>
                    <p className="text-slate-600">Accelerate time-to-market with our optimized conversion and commissioning process</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Partnership</h3>
                    <p className="text-slate-600">With 10+ years of industry experience and 50+ enterprise partnerships</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Future-Ready Technology</h3>
                    <p className="text-slate-600">Built for AI, HPC, and quantum computing with extensible architecture</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 md:p-16 text-center space-y-8">
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-extrabold text-white">
              Ready to Transform Your Infrastructure?
            </motion.h2>
            <motion.p variants={item} className="text-xl text-slate-300 max-w-xl mx-auto">
              Join industry leaders who are powering the future with USDC. Let's build something extraordinary together.
            </motion.p>
            <motion.div variants={item} className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-[#40D1FB] text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-all hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
                View PDF Overview
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
