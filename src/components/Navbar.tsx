import { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ChevronDown, MapPin, Target, BookOpen, BarChart3, Layout, Newspaper, Lightbulb, Satellite, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface SubLink {
    name: string;
    path: string;
    icon?: LucideIcon;
    desc?: string;
    external?: boolean;
    region?: string;
}

interface NavLink {
    name: string;
    path: string;
    subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
    {
        name: 'About us',
        path: '/about-us',
        subLinks: [
            { name: 'Our Mission', path: '/about-us#mission', icon: Target, desc: 'Vision & purpose' },
            { name: 'Core Values', path: '/about-us#values', icon: Layout, desc: 'What drives us' },
            { name: 'Why USDC', path: '/about-us#why', icon: Satellite, desc: 'Our differentiators' },
        ]
    },
    {
        name: 'Investor',
        path: '/investors',
        subLinks: [
            { name: 'Investors Overview', path: '/investors', icon: BarChart3, desc: 'ROI & strategy' },
            { name: 'Download Deck', path: 'https://static1.squarespace.com/static/6765fcde25dea733d4a4c593/t/6785eb72626f767ed5792eea/1736829812905/USDC+Deck_PS+1.6.25.pdf', icon: BookOpen, desc: 'Full PDF overview', external: true },
        ]
    },
    {
        name: 'News & insight',
        path: '/insights',
        subLinks: [
            { name: 'Latest News', path: '/insights', icon: Newspaper, desc: 'Press & updates' },
            { name: 'Insights', path: '/insights', icon: Lightbulb, desc: 'Industry intelligence' },
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

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileSubmenu(null);
    }, [location]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'px-3 md:px-6 py-2' : 'px-4 md:px-8 py-4'}`}>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled
                    ? 'bg-white/90 backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.1)] border border-white/60'
                    : 'bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_2px_20px_rgba(0,0,0,0.05)]'
                    }`}
            >
                {/* Logo */}
                <Link to="/" className="flex-shrink-0 relative z-10">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
                        >
                            {/* Nav Link Button */}
                            <Link to={link.path} className="no-underline">
                                <div className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-[13.5px] font-semibold tracking-wide transition-all duration-200 select-none ${isActive(link.path) || activeDropdown === link.name
                                    ? 'text-[#40D1FB] bg-[#40D1FB]/8'
                                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                                    }`}>
                                    {link.name}
                                    {link.subLinks && (
                                        <ChevronDown className={`w-3.5 h-3.5 transition-all duration-300 ${activeDropdown === link.name ? 'rotate-180 text-[#40D1FB]' : 'text-slate-400'
                                            }`} />
                                    )}
                                </div>
                            </Link>

                            {/* Active Dot */}
                            {isActive(link.path) && (
                                <motion.div
                                    layoutId="activeNavDot"
                                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#40D1FB]"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}

                            {/* Dropdown */}
                            {link.subLinks && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute top-full left-0 pt-3 z-50"
                                            style={{ minWidth: '260px' }}
                                        >
                                            <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100/80 overflow-hidden">
                                                {/* Dropdown Header */}
                                                <div className="px-4 pt-3.5 pb-2.5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                                                    <p className="text-[9px] font-black text-[#40D1FB] uppercase tracking-[0.25em]">{link.name}</p>
                                                </div>

                                                {/* Dropdown Items */}
                                                <div className="p-2">
                                                    {link.subLinks.map((sub, sIdx) => {
                                                        const Icon = sub.icon || MapPin;
                                                        const content = (
                                                            <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150 group/item cursor-pointer">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center flex-shrink-0 group-hover/item:from-[#40D1FB]/10 group-hover/item:to-[#40D1FB]/5 transition-all duration-200">
                                                                        <Icon className="w-4 h-4 text-slate-400 group-hover/item:text-[#40D1FB] transition-colors" />
                                                                    </div>
                                                                    <div>
                                                                        {sub.region && (
                                                                            <p className="text-[9px] font-black text-[#40D1FB] uppercase tracking-widest leading-none mb-0.5">{sub.region}</p>
                                                                        )}
                                                                        <p className="text-[13px] font-semibold text-slate-800 group-hover/item:text-slate-900 leading-tight">{sub.name}</p>
                                                                        {sub.desc && (
                                                                            <p className="text-[11px] text-slate-400 leading-none mt-0.5">{sub.desc}</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#40D1FB] opacity-0 group-hover/item:opacity-100 transition-all duration-200 flex-shrink-0 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                                            </div>
                                                        );

                                                        return sub.external ? (
                                                            <a key={sIdx} href={sub.path} target="_blank" rel="noopener noreferrer" className="no-underline block">
                                                                {content}
                                                            </a>
                                                        ) : (
                                                            <Link key={sIdx} to={sub.path} className="no-underline block">
                                                                {content}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>

                                                {/* Dropdown Footer */}
                                                <div className="px-4 py-2.5 border-t border-slate-50 bg-slate-50/50">
                                                    <Link to={link.path} className="no-underline">
                                                        <p className="text-[11px] font-bold text-slate-400 hover:text-[#40D1FB] transition-colors flex items-center gap-1">
                                                            View all {link.name} <ArrowUpRight className="w-3 h-3" />
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {/* Desktop CTA */}
                    <Link to="/contact" className="hidden md:block no-underline">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 bg-gradient-to-r from-[#40D1FB] to-[#0EA5E9] text-white px-5 py-2.5 rounded-xl font-bold text-[13px] tracking-wide shadow-lg shadow-[#40D1FB]/25 hover:shadow-[#40D1FB]/40 hover:shadow-xl transition-all duration-300"
                        >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Contact Us</span>
                        </motion.button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="lg:hidden w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <X className="w-5 h-5" />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <Menu className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-3 right-3 mt-2 bg-white/97 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100 lg:hidden z-50 overflow-hidden"
                    >
                        <div className="p-3 max-h-[80vh] overflow-y-auto">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <div
                                        className={`flex items-center justify-between px-3.5 py-3 rounded-xl cursor-pointer transition-all mb-0.5 ${isActive(link.path) ? 'bg-[#40D1FB]/8' : 'hover:bg-slate-50'
                                            }`}
                                        onClick={() => link.subLinks
                                            ? setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)
                                            : setIsOpen(false)
                                        }
                                    >
                                        <Link
                                            to={link.path}
                                            className="no-underline flex-1"
                                            onClick={(e) => link.subLinks && e.preventDefault()}
                                        >
                                            <span className={`font-semibold text-[15px] ${isActive(link.path) ? 'text-[#40D1FB]' : 'text-slate-800'}`}>
                                                {link.name}
                                            </span>
                                        </Link>
                                        {link.subLinks && (
                                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${mobileSubmenu === link.name ? 'bg-[#40D1FB]/15 rotate-180' : 'bg-slate-100'
                                                }`}>
                                                <ChevronDown className={`w-3.5 h-3.5 ${mobileSubmenu === link.name ? 'text-[#40D1FB]' : 'text-slate-500'}`} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile Sub Links */}
                                    {link.subLinks && (
                                        <AnimatePresence>
                                            {mobileSubmenu === link.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden ml-2 mb-1"
                                                >
                                                    <div className="pl-2 border-l-2 border-[#40D1FB]/20 space-y-0.5 py-1">
                                                        {link.subLinks.map((sub, sIdx) => {
                                                            const Icon = sub.icon || MapPin;
                                                            const content = (
                                                                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all group/msub">
                                                                    <div className="w-7 h-7 rounded-lg bg-slate-50 group-hover/msub:bg-[#40D1FB]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                                                                        <Icon className="w-3.5 h-3.5 text-slate-400 group-hover/msub:text-[#40D1FB] transition-colors" />
                                                                    </div>
                                                                    <div>
                                                                        {sub.region && (
                                                                            <p className="text-[9px] font-black text-[#40D1FB] uppercase tracking-widest">{sub.region}</p>
                                                                        )}
                                                                        <p className="text-[13px] font-semibold text-slate-700 group-hover/msub:text-slate-900">{sub.name}</p>
                                                                    </div>
                                                                </div>
                                                            );
                                                            return sub.external ? (
                                                                <a key={sIdx} href={sub.path} target="_blank" rel="noopener noreferrer" className="no-underline block">
                                                                    {content}
                                                                </a>
                                                            ) : (
                                                                <Link key={sIdx} to={sub.path} onClick={() => setIsOpen(false)} className="no-underline block">
                                                                    {content}
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <div className="mt-3 pt-3 border-t border-slate-100">
                                <Link to="/contact" className="no-underline block" onClick={() => setIsOpen(false)}>
                                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#40D1FB] to-[#0EA5E9] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#40D1FB]/20 transition-all active:scale-95">
                                        <MessageSquare className="w-4 h-4" />
                                        <span>Contact Us</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
