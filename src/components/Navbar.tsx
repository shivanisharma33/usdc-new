import { ChevronDown, MessageSquare } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 md:px-12 py-3 bg-white sticky top-0 z-50">
            {/* Logo Section */}
            <Logo />

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-10">
                <div className="flex items-center gap-1 cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">Data Centers</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#40D1FB]" />
                </div>
                <div className="flex items-center gap-1 cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">Solutions</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#40D1FB]" />
                </div>
                <div className="cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">Digital Initiatives</span>
                </div>
                <div className="cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">Sustainability</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">About Us</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#40D1FB]" />
                </div>
            </div>

            {/* CTA Button */}
            <button className="flex items-center gap-2 bg-[#40D1FB] text-white px-5 py-2.5 rounded hover:bg-[#32B8E0] transition-all font-bold text-sm tracking-wide">
                <MessageSquare className="w-4 h-4" />
                <span className="uppercase">Talk To An Expert</span>
            </button>
        </nav>
    );
};

export default Navbar;
