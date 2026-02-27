'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const ContactUs = () => {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate request
    await new Promise((r) => setTimeout(r, 1500));

    setSubmitting(false);
    setSent(true);

    // Reset form after delay
    setTimeout(() => {
      formRef.current?.reset();
      setSent(false);
    }, 3000);
  };

  return (
    <section className="relative pt-8 pb-24 md:pt-12 md:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#40D1FB]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Content Area */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#40D1FB]/10 border border-[#40D1FB]/20"
              >
                <span className="w-2 h-2 rounded-full bg-[#40D1FB] animate-pulse" />
                <span className="text-xs font-bold text-[#40D1FB] uppercase tracking-widest">Connect With Us</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight"
              >
                Let's build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40D1FB] to-blue-600">something great.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 font-medium leading-relaxed max-w-md"
              >
                Whether you're interested in asset conversion, partnerships, or our technology, our team is ready to assist you.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 gap-4"
            >
              {/* Email */}
              <div className="group p-5 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Email Us</p>
                  <p className="text-sm font-bold text-slate-900">hello@usdc.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="group p-5 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Call Us</p>
                  <p className="text-sm font-bold text-slate-900">(555) 123-4567</p>
                </div>
              </div>

              {/* Address */}
              <div className="group p-5 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">USDC Headquarters</p>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    218 NW 24th St 2nd FL<br />
                    Miami, FL 33127
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form Area */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] shadow-[0_32px_96px_-16px_rgba(0,0,0,0.12)] border border-slate-100 p-10 md:p-16 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#40D1FB] transition-colors">Your Name</label>
                        <input
                          name="name"
                          required
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border-none px-8 py-6 rounded-2xl focus:ring-2 focus:ring-[#40D1FB]/20 transition-all outline-none text-slate-900 text-lg font-bold placeholder:text-slate-300"
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#40D1FB] transition-colors">Email Address</label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="w-full bg-slate-50 border-none px-8 py-6 rounded-2xl focus:ring-2 focus:ring-[#40D1FB]/20 transition-all outline-none text-slate-900 text-lg font-bold placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#40D1FB] transition-colors">How can we help?</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full bg-slate-50 border-none px-8 py-6 rounded-2xl focus:ring-2 focus:ring-[#40D1FB]/20 transition-all outline-none text-slate-900 text-lg font-bold placeholder:text-slate-300 resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={submitting}
                      className={`w-full py-7 rounded-2xl font-black uppercase tracking-widest text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl shadow-[#40D1FB]/20 ${submitting
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-950 text-white hover:bg-slate-900'
                        }`}
                    >
                      {submitting ? (
                        <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-[#40D1FB]/10 text-[#40D1FB] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-slate-900">Message Received!</h3>
                      <p className="text-slate-500 font-medium">Thank you for reaching out. We'll be in touch soon.</p>
                    </div>
                    <button
                      onClick={() => setSent(false)}
                      className="text-sm font-black text-[#40D1FB] uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
