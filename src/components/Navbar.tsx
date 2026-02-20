import { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ChevronDown, MapPin, Target, TrendingUp, BookOpen, BarChart3, Layout, Newspaper, Lightbulb, Satellite } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
    {
        name: 'About us',
        path: '/about-us',
        subLinks: [
            { name: 'Our Mission', path: '/about-us#mission', icon: Target },
            { name: 'Core Values', path: '/about-us#values', icon: Layout },
            { name: 'Why USDC', path: '/about-us#why', icon: Satellite },
        ]
    },
    {
        name: 'Investor',
        path: '/investors',
        subLinks: [
            { name: 'Investors Overview', path: '/investors', icon: BarChart3 },
            { name: 'Deck', path: 'https://static1.squarespace.com/static/6765fcde25dea733d4a4c593/t/6785eb72626f767ed5792eea/1736829812905/USDC+Deck_PS+1.6.25.pdf', icon: BookOpen, external: true },
        ]
    },
    {
        name: 'News & insight',
        path: '/insights',
        subLinks: [
            { name: 'Latest News', path: '/insights', icon: Newspaper },
            { name: 'Insights', path: '/insights', icon: Lightbulb },
        ]
    },
    { name: 'Management Team', path: '/management' },
    {
        name: 'Location',
        path: '/locations',
        subLinks: [
            { name: 'Northern Virginia', path: '/locations#virginia', region: 'USA East' },
            { name: 'Columbus, Ohio', path: '/locations#ohio', region: 'USA Central' },
            { name: 'Helsinki', path: '/locations#helsinki', region: 'Europe' },
            { name: 'Singapore', path: '/locations#singapore', region: 'Asia Pacific' },
        ]
    },
    { name: 'Career', path: '/careers' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileSubmenu(null);
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
                            onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
                        >
                            <Link
                                to={link.path}
                                className="flex items-center gap-1 no-underline"
                            >
                                <span className={`text-[14px] font-semibold transition-colors duration-300 ${(activeDropdown === link.name) || location.pathname === link.path ? 'text-[#40D1FB]' : 'text-gray-800'
                                    }`}>
                                    {link.name}
                                </span>
                                {link.subLinks && (
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-[#40D1FB]' : 'text-gray-400'}`} />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.subLinks && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 overflow-hidden"
                                        >
                                            <div className="p-3 mb-1 border-b border-slate-50">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{link.name} Details</p>
                                            </div>
                                            {link.subLinks.map((sub, sIdx) => {
                                                const Icon = sub.icon || MapPin;
                                                return (
                                                    sub.external ? (
                                                        <a
                                                            key={sIdx}
                                                            href={sub.path}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all group/sub no-underline"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover/sub:bg-cyan-50 transition-colors">
                                                                    <Icon className="w-4 h-4 text-slate-400 group-hover/sub:text-[#40D1FB]" />
                                                                </div>
                                                                <span className="text-sm font-bold text-slate-800 group-hover/sub:text-[#40D1FB] transition-colors">{sub.name}</span>
                                                            </div>
                                                            <TrendingUp className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover/sub:opacity-100 transition-all" />
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            key={sIdx}
                                                            to={sub.path}
                                                            className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all group/sub no-underline"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover/sub:bg-cyan-50 transition-colors">
                                                                    <Icon className="w-4 h-4 text-slate-400 group-hover/sub:text-[#40D1FB]" />
                                                                </div>
                                                                <div>
                                                                    {sub.region && <p className="text-[9px] font-black text-cyan-500 uppercase tracking-widest leading-none mb-1">{sub.region}</p>}
                                                                    <p className="text-sm font-bold text-slate-800 group-hover/sub:text-[#40D1FB] transition-colors leading-none">{sub.name}</p>
                                                                </div>
                                                            </div>
                                                            <TrendingUp className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover/sub:opacity-100 transition-all" />
                                                        </Link>
                                                    )
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}

                            {/* Underline Indicator for Active Page */}
                            {location.pathname === link.path && !activeDropdown && (
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
                        className="absolute top-full left-4 right-4 mt-2 p-6 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 lg:hidden z-50 overflow-hidden overflow-y-auto max-h-[80vh]"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    <div
                                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[#40D1FB]/5 transition-colors group cursor-pointer"
                                        onClick={() => link.subLinks ? setMobileSubmenu(mobileSubmenu === link.name ? null : link.name) : setIsOpen(false)}
                                    >
                                        <Link
                                            to={link.path}
                                            className="flex items-center justify-start no-underline"
                                            onClick={(e) => link.subLinks && e.preventDefault()}
                                        >
                                            <span className={`text-lg font-bold transition-colors ${location.pathname === link.path ? 'text-[#40D1FB]' : 'text-gray-800'}`}>
                                                {link.name}
                                            </span>
                                        </Link>
                                        {link.subLinks && (
                                            <div className={`p-1.5 rounded-lg bg-slate-50 transition-transform duration-300 ${mobileSubmenu === link.name ? 'rotate-180 bg-cyan-50' : ''}`}>
                                                <ChevronDown className={`w-5 h-5 ${mobileSubmenu === link.name ? 'text-[#40D1FB]' : 'text-gray-400'}`} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile Sublinks */}
                                    {link.subLinks && (
                                        <AnimatePresence>
                                            {mobileSubmenu === link.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="pl-4 space-y-1 mb-2 overflow-hidden"
                                                >
                                                    {link.subLinks.map((sub, sIdx) => {
                                                        const Icon = sub.icon || MapPin;
                                                        return sub.external ? (
                                                            <a
                                                                key={sIdx}
                                                                href={sub.path}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-3 p-3 text-sm font-bold text-slate-500 hover:text-[#40D1FB] transition-colors no-underline"
                                                            >
                                                                <Icon className="w-4 h-4" />
                                                                {sub.name}
                                                            </a>
                                                        ) : (
                                                            <Link
                                                                key={sIdx}
                                                                to={sub.path}
                                                                onClick={() => setIsOpen(false)}
                                                                className="flex items-center gap-3 p-3 text-sm font-bold text-slate-500 hover:text-[#40D1FB] transition-colors no-underline"
                                                            >
                                                                <Icon className="w-4 h-4" />
                                                                {sub.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
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

