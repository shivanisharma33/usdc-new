import { useState, useEffect } from 'react';
import { ChevronDown, MessageSquare, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: "About us", path: "/about-us", hasDropdown: true },
        { name: "Investor", path: "/investors", hasDropdown: true },
        { name: "News & insight", path: "/insights", hasDropdown: false },
        { name: "Management Team", path: "/management", hasDropdown: false },
        { name: "Location", path: "/locations", hasDropdown: false },
        { name: "Careers", path: "/careers", hasDropdown: true },
    ];

    return (
        <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white sticky top-0 z-[100] border-b border-gray-50">
            {/* Logo Section */}
            <Link to="/" className="cursor-pointer relative z-[110]">
                <Logo />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className="flex items-center gap-1 cursor-pointer group"
                    >
                        <span className="text-[14px] font-bold text-gray-800 group-hover:text-[#40D1FB] transition-colors uppercase tracking-wider">
                            {link.name}
                        </span>
                        {link.hasDropdown && (
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#40D1FB] transition-transform group-hover:rotate-180" />
                        )}
                    </Link>
                ))}
            </div>

            {/* Desktop CTA Button */}
            <Link to="/contact" className="hidden lg:flex items-center gap-2 bg-[#40D1FB] text-white px-6 py-2.5 rounded-none hover:bg-[#32B8E0] transition-all font-black text-xs tracking-[0.1em] uppercase shadow-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Contact us</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
                className="lg:hidden relative z-[110] p-2 text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-[105] lg:hidden shadow-2xl flex flex-col"
                        >
                            <div className="flex flex-col pt-24 px-8 pb-10 flex-grow">
                                <div className="space-y-6">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.path}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Link
                                                to={link.path}
                                                className="block text-2xl font-black text-slate-900 hover:text-[#40D1FB] transition-colors uppercase tracking-tight"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-12 pt-8 border-t border-slate-100"
                                >
                                    <Link
                                        to="/contact"
                                        className="w-full flex items-center justify-center gap-3 bg-slate-950 text-white px-8 py-5 font-black text-sm tracking-widest uppercase hover:bg-[#40D1FB] transition-all rounded-none"
                                    >
                                        <MessageSquare className="w-5 h-5 text-[#40D1FB]" />
                                        <span>Contact Us</span>
                                    </Link>
                                </motion.div>
                            </div>

                            <div className="p-8 bg-slate-50">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                                    © 2026 USDC INFRASTRUCTURE
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
