import { useRef, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const ContactUs = () => {
  const controls = useAnimation();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    controls.start({ scale: 0.98 });

    // Simulate request
    await new Promise((r) => setTimeout(r, 900));

    setSubmitting(false);
    setSent(true);
    controls.start({ scale: 1 });

    // reset form after short delay
    setTimeout(() => {
      formRef.current?.reset();
      setSent(false);
    }, 2200);
  }

  return (
    <section className="relative py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: animated heading + details */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="space-y-6">
            <motion.div variants={item} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100">
              <motion.span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Contact Us</span>
            </motion.div>

            <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Get in touch — let’s build the future together
            </motion.h2>

            <motion.p variants={item} className="text-base text-slate-600 max-w-xl">
              Share your project details or ask about partnership and asset conversion. We typically respond within 1-2 business days.
            </motion.p>

            <motion.div variants={item} className="flex flex-col gap-4 md:gap-6">
              <div className="flex gap-4">
                <div className="flex-1 bg-white p-4 border border-slate-100 shadow-sm">Sales: <strong className="block text-slate-800">sales@usdc.com</strong></div>
                <div className="flex-1 bg-white p-4 border border-slate-100 shadow-sm">General: <strong className="block text-slate-800">info@usdc.com</strong></div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 bg-white p-4 border border-slate-100 shadow-sm">Phone: <strong className="block text-slate-800">(555) 123-4567</strong></div>
                <div className="flex-1 bg-white p-4 border border-slate-100 shadow-sm">Locations: <strong className="block text-slate-800">United States</strong></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: animated form card */}
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
            <motion.div animate={float.animate} className="absolute -right-10 -top-10 w-36 h-36 bg-gradient-to-tr from-cyan-200 to-blue-300 opacity-40 rounded-full filter blur-3xl pointer-events-none" />

            <motion.form ref={formRef} onSubmit={handleSubmit} className="relative bg-white border border-slate-100 shadow-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col text-sm text-slate-600">
                  <span className="mb-2">Full name</span>
                  <input name="name" required className="px-4 py-3 border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200" />
                </label>
                <label className="flex flex-col text-sm text-slate-600">
                  <span className="mb-2">Email</span>
                  <input name="email" type="email" required className="px-4 py-3 border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200" />
                </label>
              </div>

              <label className="flex flex-col text-sm text-slate-600 mt-4">
                <span className="mb-2">Message</span>
                <textarea name="message" rows={5} required className="px-4 py-3 border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200" />
              </label>

              <div className="mt-6 flex items-center justify-between gap-4">
                <motion.button
                  type="submit"
                  animate={controls}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold shadow-md hover:scale-[1.01] active:scale-95"
                  disabled={submitting}
                >
                  <span>{submitting ? 'Sending…' : sent ? 'Sent' : 'Send Message'}</span>
                  <motion.span animate={{ rotate: sent ? 360 : 0 }} className="inline-block w-4 h-4">
                    {/* simple check/arrow indicator */}
                    {sent ? (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M5 12.5l4 4L19 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M5 12h14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M12 5v14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    )}
                  </motion.span>
                </motion.button>

                <div className="text-sm text-slate-500">Or email us directly at <strong className="text-slate-700">hello@usdc.com</strong></div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
