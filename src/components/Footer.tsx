import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#40D1FB]">USDC</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Powering the future of data with state-of-the-art data center infrastructure and solutions for the digital economy.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#40D1FB] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#40D1FB] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#40D1FB] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">Data Centers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#40D1FB] transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#40D1FB]" />
                <a href="mailto:info@usdc.com" className="hover:text-[#40D1FB] transition-colors">info@usdc.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-[#40D1FB]" />
                <a href="tel:+15551234567" className="hover:text-[#40D1FB] transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-[#40D1FB] flex-shrink-0 mt-0.5" />
                <span>United States, Multiple Locations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 USDC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#40D1FB] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#40D1FB] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#40D1FB] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
