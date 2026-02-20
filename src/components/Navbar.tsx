import { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
    { name: 'About us', path: '/about-us' },
    { name: 'Investor', path: '/investors' },
    { name: 'News & insight', path: '/insights' },
    { name: 'Management Team', path: '/management' },
    { name: 'Location', path: '/locations' },
    { name: 'Career', path: '/careers' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 md:px-8 py-4 ${scrolled ? 'mt-0' : 'mt-2'
                }`}
        >
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/20'
                    : 'bg-white/40 backdrop-blur-md border border-white/30 shadow-sm'
                    }`}
            >
                {/* Logo Section */}
                <Link to="/" className="flex-shrink-0">
                    <Logo />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link, idx) => (
                        <div
                            key={link.name}
                            className="relative px-3 py-2 cursor-pointer group"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Link to={link.path} className="flex items-center no-underline">
                                <span className={`text-[14px] font-semibold transition-colors duration-300 ${hoveredIndex === idx || location.pathname === link.path ? 'text-[#40D1FB]' : 'text-gray-800'
                                    }`}>
                                    {link.name}
                                </span>
                            </Link>

                            {/* Animated Background Highlight */}
                            <AnimatePresence>
                                {(hoveredIndex === idx) && (
                                    <motion.div
                                        layoutId="navHighlight"
                                        className="absolute inset-0 bg-[#40D1FB]/5 rounded-xl -z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Underline Indicator for Active Page */}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="navUnderline"
                                    className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#40D1FB] rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-2 bg-[#40D1FB] text-white px-6 py-2.5 rounded-xl hover:bg-[#32B8E0] transition-all font-bold text-sm tracking-wide shadow-lg shadow-[#40D1FB]/20 border border-white/20"
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span className="uppercase">Contact us</span>
                        </motion.button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 rounded-xl bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-4 right-4 mt-2 p-6 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 lg:hidden z-50 overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="flex items-center justify-start p-3 rounded-xl hover:bg-[#40D1FB]/5 transition-colors group no-underline"
                                >
                                    <span className={`text-lg font-semibold transition-colors ${location.pathname === link.path ? 'text-[#40D1FB]' : 'text-gray-800'
                                        }`}>
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                            <hr className="border-gray-100 my-2" />
                            <Link to="/contact" className="no-underline">
                                <button className="w-full flex items-center justify-center gap-2 bg-[#40D1FB] text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-[#40D1FB]/20 transition-all active:scale-95">
                                    <MessageSquare className="w-5 h-5" />
                                    <span className="uppercase">Contact us</span>
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;

