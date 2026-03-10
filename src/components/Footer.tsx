"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
import CookieModal from './CookieModal';

const Footer = () => {
  const [showCookies, setShowCookies] = useState(false);

  return (
    <footer className="bg-[#020617] text-slate-300 relative border-t border-[#1e293b] overflow-hidden">
      {/* Premium Background Glows */}
      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#40D1FB]/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#40D1FB]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Socials (takes 4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center mb-6">
              <Logo />
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
              Powering the future of data with state-of-the-art infrastructure and solutions designed for the demands of the digital economy.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/company/us-data-center/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center hover:bg-[#40D1FB]/10 hover:border-[#40D1FB]/30 transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-[18px] h-[18px] text-slate-400 group-hover:text-[#40D1FB] transition-colors" />
              </a>
              <a href="https://x.com/USDataCenters" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center hover:bg-[#40D1FB]/10 hover:border-[#40D1FB]/30 transition-all duration-300 hover:-translate-y-1">
                <Twitter className="w-[18px] h-[18px] text-slate-400 group-hover:text-[#40D1FB] transition-colors" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574593116858" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center hover:bg-[#40D1FB]/10 hover:border-[#40D1FB]/30 transition-all duration-300 hover:-translate-y-1">
                <Facebook className="w-[18px] h-[18px] text-slate-400 group-hover:text-[#40D1FB] transition-colors" />
              </a>
              <a href="https://www.instagram.com/usdatacenter?igsh=NTN0M282cWtxZWtp" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center hover:bg-[#40D1FB]/10 hover:border-[#40D1FB]/30 transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-[18px] h-[18px] text-slate-400 group-hover:text-[#40D1FB] transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-semibold text-white tracking-wide">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about-us' },
                { label: 'Investors', path: '/investors' },
                { label: 'Data Centers', path: '/locations' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.path} className="group flex items-center text-slate-400 hover:text-[#40D1FB] transition-colors text-[15px]">
                    <span className="relative overflow-hidden">
                      <span className="block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                      <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#40D1FB]">{link.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (takes 3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-[15px] group">
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#40D1FB]/10 transition-colors">
                  <Mail className="w-[18px] h-[18px] text-[#40D1FB]" />
                </div>
                <div className="pt-2">
                  <a href="mailto:info@usdc.com" className="text-slate-300 hover:text-[#40D1FB] transition-colors">info@usdc.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-[15px] group">
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#40D1FB]/10 transition-colors">
                  <Phone className="w-[18px] h-[18px] text-[#40D1FB]" />
                </div>
                <div className="pt-2">
                  <a href="tel:+15551234567" className="text-slate-300 hover:text-[#40D1FB] transition-colors">(555) 123-4567</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-[15px] group">
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#40D1FB]/10 transition-colors mt-1">
                  <MapPin className="w-[18px] h-[18px] text-[#40D1FB]" />
                </div>
                <div className="text-slate-300 leading-relaxed">
                  USDC Headquarters<br />
                  218 NW 24th St 2nd FL<br />
                  Miami, FL 33127
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup (takes 3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-white tracking-wide">Stay Updated</h4>
            <p className="text-slate-400 text-[14px]">
              Subscribe to our newsletter for the latest insights and data center news.
            </p>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl py-3.5 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[#40D1FB]/50 focus:ring-1 focus:ring-[#40D1FB]/50 transition-all placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-10 flex items-center justify-center bg-[#40D1FB] hover:bg-[#0EA5E9] text-white rounded-lg transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[13px]">
          <p>&copy; {new Date().getFullYear()} USDC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-[#40D1FB] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#40D1FB] transition-colors">Terms of Service</Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowCookies(true);
              }}
              className="hover:text-[#40D1FB] transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {showCookies && <CookieModal onClose={() => setShowCookies(false)} />}
    </footer>
  );
};

export default Footer;
