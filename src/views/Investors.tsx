'use client';

import OptimizedImage from '../components/OptimizedImage';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
    TrendingUp,
    FileText,
    Calendar,
    Newspaper,
    Mail,
    ArrowUpRight,
    Activity,
    Lock,
    X,
} from 'lucide-react';
import ContactUs from '../components/ContactUs';
import StockChart from '../components/StockChart';
import EmailAlerts from '../components/EmailAlerts';

// Use an internal API route so Vercel-hosted site can access upstream HTTP endpoints
const STOCK_API_URL = '/api/live-stock';

type LiveStockResponse = {
    symbol: string;
    price: number;
    open: number;
    high: number;
    low: number;
    volume: number;
    previousClose: number;
    change: number;
    changePercent: number;
    lastUpdated: string;
    source: string;
};

const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
});

const volumeFormatter = new Intl.NumberFormat('en-US');

const formatUsd = (value?: number) => (typeof value === 'number' ? usdFormatter.format(value) : '--');
const formatVolume = (value?: number) => (typeof value === 'number' ? volumeFormatter.format(value) : '--');
const formatLastUpdated = (value?: string) => {
    if (!value) return '--';
    return `${new Date(value).toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'UTC',
    })} UTC`;
};

const Investors = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
    const [stockData, setStockData] = useState<LiveStockResponse | null>(null);
    const [isStockLoading, setIsStockLoading] = useState(true);
    const [stockError, setStockError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                setStockError(null);
                const response = await fetch(STOCK_API_URL, { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const data = (await response.json()) as LiveStockResponse;
                setStockData(data);
            } catch (error) {
                setStockError(error instanceof Error ? error.message : 'Failed to load live stock data');
            } finally {
                setIsStockLoading(false);
            }
        };

        fetchStockData();
        const intervalId = window.setInterval(fetchStockData, 30000);

        return () => window.clearInterval(intervalId);
    }, []);

    const isPositiveChange = (stockData?.change ?? 0) >= 0;
    const changePrefix = isPositiveChange ? '+' : '';
    const changeLabel = stockData
        ? `${changePrefix}${stockData.change.toFixed(3)} (${changePrefix}${stockData.changePercent.toFixed(2)}%) Today`
        : 'Live data unavailable';

    const resources = [
        {
            title: "Stock Information",
            desc: "Real-time quote and performance chart for DigiPowerX stock.",
            icon: TrendingUp,
            link: "#"
        },
        {
            title: "SEC Filings",
            desc: "Access financial statements, reports, and compliance documents.",
            icon: FileText,
            link: "#"
        },
        {
            title: "Events & Presentations",
            desc: "View upcoming events, webcasts, and investor presentations.",
            icon: Calendar,
            link: "#"
        },
        {
            title: "Press Releases",
            desc: "Latest news and announcements from DigiPowerX.",
            icon: Newspaper,
            link: "/press-release"
        },
        {
            title: "Corporate Governance",
            desc: "Learn about our board, committees, and governance practices.",
            icon: Lock,
            link: "/management"
        },
        {
            title: "Contact IR",
            desc: "Get in touch with our investor relations team.",
            icon: Mail,
            link: "#"
        }
    ];

    const pressReleases = [
        {
            title: "USDC Unveils Strategic Expansion of AI Infrastructure Across North America",
            date: "Feb 15, 2026",
            link: "/press-release"
        },
        {
            title: "DigiPowerX and USDC Announce Joint Venture for Sustainable Energy Integration",
            date: "Jan 28, 2026",
            link: "/press-release"
        },
        {
            title: "Q4 2025 Financial Performance: Records Breaking Growth",
            date: "Jan 10, 2026",
            link: "/press-release"
        }
    ];

    return (
        <div className="bg-white">
            {/* ── CINEMATIC INVESTOR HERO (Navbar Synchronized) ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Immersive Background */}
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-white z-10" />
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                        alt="Investment Background"
                        className="w-full h-full object-cover grayscale opacity-40 scale-110"
                    />
                </motion.div>

                {/* Technical HUD Overlays */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="absolute top-1/2 left-8 -translate-y-1/2 w-[1px] h-96 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                    <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[1px] h-96 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                </div>

                <div className="relative z-20 text-center px-6 max-w-7xl mx-auto pt-24 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full mb-8 font-black uppercase text-[10px] tracking-[0.4em]">
                            <Activity className="w-4 h-4 text-cyan-400" />
                            Value Terminal 2.0
                        </div>

                        <h1 className="text-7xl md:text-[12rem] font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase select-none">
                            VALUE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-black">PORTAL.</span>
                        </h1>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-20 scale-105">
                            <div className="text-center group cursor-pointer">
                                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-1">Market Cap</p>
                                <p className="text-5xl font-black text-white leading-none">$4.2B</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 hidden md:block" />
                            <div className="text-center group cursor-pointer">
                                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-1">Growth Index</p>
                                <p className="text-5xl font-black text-white leading-none">+28%</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 hidden md:block" />
                            <div className="text-center group cursor-pointer">
                                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] mb-1">Energy Yield</p>
                                <p className="text-5xl font-black text-white leading-none">250MW</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            </section>

            {/* ── Real-World Stock Performance (DGXX) ── */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Centered Text Content */}
                    <div className="max-w-3xl mx-auto text-center space-y-8 mb-20">
                        <div className="space-y-4">
                            <span className="text-xs font-black text-cyan-500 uppercase tracking-[0.4em]">
                                NASDAQ: {stockData?.symbol ?? 'DGXX'}
                            </span>
                            <h2 className="text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">Stock Performance</h2>
                        </div>
                        <p className="text-slate-500 font-medium leading-relaxed text-lg">
                            DigiPowerX Inc. (DGXX) operates at the intersection of energy and computing. Following our 2025 strategic pivot, we continue to deliver transparency and value through institutional-grade infrastructure deployments.
                        </p>

                        {/* Financial Data Grid - Centered */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                            <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-2xl group hover:border-cyan-500/30 transition-all text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Day High</p>
                                <p className="text-2xl font-black text-slate-900">{formatUsd(stockData?.high)}</p>
                            </div>
                            <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-2xl group hover:border-cyan-500/30 transition-all text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Day Low</p>
                                <p className="text-2xl font-black text-slate-900">{formatUsd(stockData?.low)}</p>
                            </div>
                            <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-2xl group hover:border-cyan-500/30 transition-all text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Open</p>
                                <p className="text-2xl font-black text-slate-900">{formatUsd(stockData?.open)}</p>
                            </div>
                            <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-2xl group hover:border-cyan-500/30 transition-all text-center">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Prev Close</p>
                                <p className="text-2xl font-black text-slate-900">{formatUsd(stockData?.previousClose)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Full-Width Graph Card below centered text */}
                    <div className="bg-sky-50 p-10 md:p-16 shadow-2xl relative overflow-hidden group border border-sky-100 w-full">


                        <div className="flex flex-col md:flex-row justify-between items-center mb-16 relative z-10 gap-8">
                            <div className="space-y-2 text-center md:text-left">
                                <h4 className="text-6xl font-black text-slate-900 tracking-tighter">
                                    {isStockLoading ? 'Loading…' : formatUsd(stockData?.price)}
                                </h4>
                                <span className={`text-sm font-bold flex items-center justify-center md:justify-start gap-1 ${isPositiveChange ? 'text-emerald-600' : 'text-rose-600'}`}>
                                    <TrendingUp className="w-4 h-4" /> {isStockLoading ? 'Updating live feed…' : changeLabel}
                                </span>
                            </div>
                            <div className="flex bg-slate-900/5 p-1.5 rounded-2xl border border-slate-900/10 backdrop-blur-sm">
                                {['1M', '3M', '6M'].map(t => (
                                    <button key={t} className={`px-6 py-2.5 text-[10px] font-black rounded-xl transition-all ${t === '6M' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30' : 'text-slate-400 hover:text-slate-900'}`}>
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {stockError && (
                            <p className="text-[12px] font-black text-rose-500 uppercase tracking-widest mb-10 text-center relative z-10">
                                Live API unavailable ({stockError})
                            </p>
                        )}

                        {/* Enhanced Stock Chart Component - making it larger for full viewport feel */}
                        <div className="h-[400px] w-full relative mb-12">
                            <StockChart
                                currentPrice={stockData?.price ?? 2.77}
                                changePercent={stockData?.changePercent ?? 0}
                            />
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest mt-12 border-t border-slate-200 pt-10">
                            <div className="flex gap-12">
                                <span>Vol: {formatVolume(stockData?.volume)}</span>
                                <span>MCAP: $148.2M</span>
                            </div>
                            <div className="flex gap-12">
                                <span>Source: {stockData?.source ? stockData.source.replace(/_/g, ' ').toUpperCase() : '--'}</span>
                                <span>Updated: {formatLastUpdated(stockData?.lastUpdated)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Email Alert CTA Card ── */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-sky-50 p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 border border-sky-100 group">
                        {/* Decorative background circle */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 group-hover:bg-sky-500/10 transition-colors duration-700" />

                        <div className="space-y-4 max-w-2xl text-center md:text-left relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                Sign up for <span className="text-sky-500">Email Alerts</span>
                            </h2>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed">
                                Receive updates in real-time about company activities and stay up to date with business developments.
                            </p>
                        </div>

                        <Link
                            href="/email-alerts"
                            className="px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-sky-500 hover:shadow-2xl hover:shadow-sky-500/40 transition-all rounded-2xl md:rounded-[2rem] active:scale-95 relative z-10 flex items-center gap-4 group text-center"
                        >
                            Sign Up <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all" />
                        </Link>
                    </div>
                </div>
            </section>


            {/* ── Resources Grid (Same as DigiPowerX) ── */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter">Investor Resources</h2>
                        <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                            Explore comprehensive resources and stay informed about DigiPowerX&apos;s growth journey and operational metrics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((res, i) => (
                            <motion.a
                                key={res.title}
                                href={res.link}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-10 border border-slate-100 hover:border-cyan-500 transition-all group relative overflow-hidden flex flex-col items-start gap-6 hover:shadow-2xl hover:shadow-cyan-500/5"
                            >
                                <div className="w-14 h-14 bg-slate-50 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                                    <res.icon className="w-7 h-7 text-slate-400 group-hover:text-slate-950 transition-colors" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{res.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        {res.desc}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-slate-400 group-hover:text-cyan-500 uppercase tracking-widest transition-colors">
                                    Learn More <ArrowUpRight className="w-4 h-4" />
                                </div>
                                <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <res.icon className="w-20 h-20 text-slate-900" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Latest News Strip ── */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 skew-x-[-15deg] translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                        <div className="space-y-4">
                            <span className="text-xs font-black text-cyan-500 uppercase tracking-[0.6em]">Recent Updates</span>
                            <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Latest Press Releases</h2>
                        </div>
                        <Link href="/press-release" className="text-xs font-black text-cyan-500 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                            View All Press Releases <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pressReleases.map((pr, i) => (
                            <motion.a
                                key={i}
                                href={pr.link}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group space-y-6"
                            >
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{pr.date}</div>
                                <h4 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase leading-tight tracking-tight">
                                    {pr.title}
                                </h4>
                                <div className="pt-4 flex items-center gap-2 text-[9px] font-black text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                                    Full Story <ArrowUpRight className="w-3.5 h-3.5" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Corporate Identity ── */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-5xl font-black text-slate-900 leading-none uppercase tracking-tighter">INVESTOR <span className="text-cyan-500">CONTACT</span></h3>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md">
                                DigiPowerX is an innovative energy infrastructure company that develops cutting-edge data centers to drive the expansion of sustainable energy assets.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Investor Relations</p>
                                <a href="mailto:ir@digipowerx.com" className="text-2xl font-black text-slate-900 group-hover:text-cyan-500 transition-colors lowercase flex items-center gap-3">
                                    ir@digipowerx.com <ArrowUpRight className="w-5 h-5 text-cyan-500" />
                                </a>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Shareholder Services</p>
                                <p className="text-2xl font-black text-slate-900">1-800-USDC-IRX</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-video bg-slate-900 rounded-[2rem] overflow-hidden group shadow-2xl relative">
                            <OptimizedImage
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                                alt="Global headquarters facility"
                                width={1600}
                                height={900}
                                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black uppercase text-[10px] tracking-widest">Global Headquarters</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 -z-10 rounded-full blur-3xl opacity-20" />
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

export default Investors;
