import { ChevronDown, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 md:px-12 py-3 bg-white sticky top-0 z-50">
            {/* Logo Section */}
            <Link to="/" className="cursor-pointer">
                <Logo />
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-10">
                <Link to="/about-us" className="flex items-center gap-1 cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">About us </span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#40D1FB]" />
                </Link>
                <Link to="/investors" className="flex items-center gap-1 cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">Investor</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#40D1FB]" />
                </Link>
                <Link to="/insights" className="cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">News & insight</span>
                </Link>
                <Link to="/management" className="cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">Management Team</span>
                </Link>

                <Link to="/locations" className="cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">Location</span>
                </Link>
                <Link to="/careers" className="flex items-center gap-1 cursor-pointer group">
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#40D1FB] transition-colors">Careers</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#40D1FB]" />
                </Link>
            </div>

            {/* CTA Button */}
            <button className="flex items-center gap-2 bg-[#40D1FB] text-white px-5 py-2.5 rounded hover:bg-[#32B8E0] transition-all font-bold text-sm tracking-wide">
                <MessageSquare className="w-4 h-4" />
                <span className="uppercase">Contact us</span>
            </button>
        </nav>
    );
};

export default Navbar;
