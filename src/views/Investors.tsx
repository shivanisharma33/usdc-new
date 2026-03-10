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
} from 'lucide-react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from 'recharts';
import ContactUs from '../components/ContactUs';


// Use an internal API route so Vercel-hosted site can access upstream HTTP endpoints
const STOCK_API_URL = '/api/live-stock';

const api = (path: string) => {
    const trimmed = path.startsWith('/') ? path : `/${path}`;
    return trimmed;
};

interface StockDataPoint {
    date: string;
    price: number;
    volume: number;
}

interface LiveStockAPIResponse {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
    volume: number;
    high: number | null;
    low: number | null;
    open: number;
    previousClose?: number | null;
    lastUpdated: string;
    source?: string;
}

interface StockData {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
    volume: number;
    high: number;
    low: number;
    open: number;
    lastUpdated: string;
    marketCap: string;
    weekHigh52: string;
    weekLow52: string;
    avgVolume: string;
}

const Investors = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
    const [chartPeriod, setChartPeriod] = useState<"1D" | "1W" | "1M" | "3M" | "6M" | "ALL">("1M");
    const [liveStockData, setLiveStockData] = useState<StockData | null>(null);
    const [isLoadingStock, setIsLoadingStock] = useState(true);
    const [stockError, setStockError] = useState<string | null>(null);
    const [historicalData, setHistoricalData] = useState<StockDataPoint[]>([]);
    const [cachedData, setCachedData] = useState<Record<string, StockDataPoint[]>>({});
    const [isLoadingChart, setIsLoadingChart] = useState(false);
    const cachedDataRef = useRef<Record<string, StockDataPoint[]>>({});

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                setIsLoadingStock(true);
                setStockError(null);

                const response = await fetch(api(STOCK_API_URL), { cache: 'no-store' });

                if (!response.ok) {
                    throw new Error('Failed to fetch stock data');
                }

                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    const text = await response.text();
                    throw new Error(`Unexpected response from /api/live-stock: ${text.slice(0, 120)}`);
                }

                const data: LiveStockAPIResponse = await response.json();

                const lastUpdated = new Date(data.lastUpdated || Date.now()).toLocaleString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                });

                const stockInfo: StockData = {
                    symbol: data.symbol || 'DGXX',
                    price: Number(data.price),
                    change: Number(data.change),
                    changePercent: Number(data.changePercent),
                    volume: Number(data.volume),
                    high: Number(data.high ?? data.price),
                    low: Number(data.low ?? data.price),
                    open: Number(data.open ?? data.price),
                    lastUpdated,
                    marketCap: '$450M',
                    weekHigh52: '$32.15',
                    weekLow52: '$18.40',
                    avgVolume: '1.8M',
                };

                setLiveStockData(stockInfo);
            } catch (err) {
                console.error('Error fetching stock data:', err);
                setStockError('Unable to load stock data. Please try again later.');
            } finally {
                setIsLoadingStock(false);
            }
        };

        fetchStockData();
        const interval = setInterval(fetchStockData, 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        cachedDataRef.current = cachedData;
    }, [cachedData]);

    useEffect(() => {
        const fetchHistoricalData = async () => {
            try {
                if (cachedDataRef.current[chartPeriod]) {
                    setHistoricalData(cachedDataRef.current[chartPeriod]);
                    return;
                }

                setIsLoadingChart(true);
                const today = new Date();
                const dataPoints: StockDataPoint[] = [];

                if (chartPeriod === '1D') {
                    setIsLoadingChart(false);
                    return;
                }

                let daysToFetch: number;
                let intervalDays: number;

                switch (chartPeriod) {
                    case '1W':
                        daysToFetch = 7;
                        intervalDays = 1;
                        break;
                    case '1M':
                        daysToFetch = 30;
                        intervalDays = 2;
                        break;
                    case '3M':
                        daysToFetch = 90;
                        intervalDays = 4;
                        break;
                    case '6M':
                        daysToFetch = 180;
                        intervalDays = 7;
                        break;
                    case 'ALL':
                        daysToFetch = 730;
                        intervalDays = 21;
                        break;
                    default:
                        daysToFetch = 30;
                        intervalDays = 2;
                }

                const dates: string[] = [];
                for (let i = daysToFetch - 1; i >= 0; i -= intervalDays) {
                    const date = new Date(today);
                    date.setDate(date.getDate() - i);

                    const dayOfWeek = date.getDay();
                    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                        dates.push(date.toISOString().split('T')[0]);
                    }
                }

                const batchSize = 10;
                const results: (unknown | null)[] = [];

                for (let i = 0; i < dates.length; i += batchSize) {
                    const batch = dates.slice(i, i + batchSize);
                    const batchPromises = batch.map(dateString =>
                        fetch(api(`/api/live-stock?date=${dateString}`))
                            .then(res => (res.ok ? res.json() : null))
                            .catch(() => null)
                    );

                    const batchResults = await Promise.all(batchPromises);
                    results.push(...batchResults);

                    if (i + batchSize < dates.length) {
                        await new Promise(resolve => setTimeout(resolve, 100));
                    }
                }

                results.forEach((data, index) => {
                    if (data && typeof data === 'object' && 'status' in data && data.status === 'OK') {
                        const dateStr = dates[index];
                        const date = new Date(dateStr);

                        const apiData = data as {
                            status: string;
                            close?: number;
                            preMarket?: number;
                            high?: number;
                            open?: number;
                            volume?: number;
                        };

                        const currentPrice = apiData.close ?? apiData.preMarket ?? apiData.high ?? apiData.open;

                        if (currentPrice) {
                            dataPoints.push({
                                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                                price: Number(currentPrice.toFixed(2)),
                                volume: apiData.volume || 0,
                            });
                        }
                    }
                });

                if (dataPoints.length > 0) {
                    setHistoricalData(dataPoints);
                    setCachedData(prev => {
                        const newCache = { ...prev, [chartPeriod]: dataPoints };
                        cachedDataRef.current = newCache;
                        return newCache;
                    });
                } else {
                    setHistoricalData([]);
                }

                setIsLoadingChart(false);
            } catch {
                setIsLoadingChart(false);
            }
        };

        fetchHistoricalData();
    }, [chartPeriod]);

    useEffect(() => {
        if (chartPeriod === '1D' && liveStockData && !cachedDataRef.current['1D']) {
            const dataPoints: StockDataPoint[] = [];
            const intervals = 14;

            for (let i = 0; i <= intervals; i++) {
                const time = 9.5 + (i * 0.5);
                const hour = Math.floor(time);
                const minute = (time % 1) * 60;
                const timeStr = `${hour}:${minute === 0 ? '00' : '30'}`;
                const progress = i / intervals;
                let price;

                if (progress < 0.3) {
                    price = liveStockData.open + (liveStockData.high - liveStockData.open) * (progress / 0.3);
                } else if (progress < 0.7) {
                    price = liveStockData.high - (liveStockData.high - liveStockData.low) * ((progress - 0.3) / 0.4);
                } else {
                    price = liveStockData.low + (liveStockData.price - liveStockData.low) * ((progress - 0.7) / 0.3);
                }

                dataPoints.push({
                    date: timeStr,
                    price: Number(price.toFixed(2)),
                    volume: Math.floor(liveStockData.volume / intervals),
                });
            }

            setHistoricalData(dataPoints);
            setCachedData(prev => {
                const newCache = { ...prev, '1D': dataPoints };
                cachedDataRef.current = newCache;
                return newCache;
            });
        }
    }, [chartPeriod, liveStockData]);

    const resources = [
        {
            title: "Stock Information",
            desc: "Real-time quote and performance chart for DigiPowerX stock.",
            icon: TrendingUp,
            link: "https://finance.yahoo.com/quote/USDC/"
        },
        {
            title: "SEC Filings",
            desc: "Access financial statements, reports, and compliance documents.",
            icon: FileText,
            link: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=digipowerx&CIK=&type=&dateb=&owner=include&count=40&search_text="
        },
        {
            title: "Events & Presentations",
            desc: "View upcoming events, webcasts, and investor presentations.",
            icon: Calendar,
            link: "/investors"
        },
        {
            title: "Press Room",
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
            link: "/contact"
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

    const CustomTooltip = ({
        active,
        payload,
    }: {
        active?: boolean;
        payload?: Array<{ payload: { date: string }; value: number }>;
    }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
                    <p className="text-sm font-semibold text-slate-900">
                        {payload[0].payload.date}
                    </p>
                    <p className="text-lg font-bold text-cyan-500">
                        ${payload[0].value.toFixed(2)}
                    </p>
                </div>
            );
        }
        return null;
    };

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

                {/* Technical HUD Overlays - Hidden on mobile for cleaner view */}
                <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                    <div className="absolute top-1/2 left-8 -translate-y-1/2 w-[1px] h-96 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                    <div className="absolute top-1/2 right-8 -translate-y-1/2 w-[1px] h-96 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                </div>

                <div className="relative z-20 text-center px-6 max-w-7xl mx-auto pt-24 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full mb-6 md:mb-8 font-black uppercase text-[10px] tracking-[0.4em]">
                            <Activity className="w-4 h-4 text-cyan-400" />
                            Value Terminal 2.0
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase select-none">
                            INVESTOR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-black"> OVERVIEW.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            </section>

            {/* ── Stock Information Card + Chart (Recharts, matching shared implementation) ── */}
            <section
                id="stock-info"
                className="py-24 bg-gradient-to-b from-white to-gray-50 border-y border-slate-100"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-4">
                            Stock Information
                        </h2>
                        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
                            Track USDC&apos;s real-time stock performance and key financial metrics
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto mb-12 px-4">
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200"
                        >
                            {isLoadingStock ? (
                                <div className="space-y-4 relative overflow-hidden">
                                    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"></div>

                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-gray-200">
                                        <div className="space-y-2">
                                            <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                                            <div className="h-12 bg-gray-300 rounded w-40 animate-pulse"></div>
                                        </div>
                                        <div className="space-y-2 text-left md:text-right">
                                            <div className="h-4 bg-gray-200 rounded w-36 animate-pulse"></div>
                                            <div className="h-10 bg-gray-300 rounded w-32 ml-auto animate-pulse"></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                                                <div className="h-6 bg-gray-300 rounded w-20 animate-pulse"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : stockError ? (
                                <div className="text-center py-8">
                                    <p className="text-xl font-semibold text-red-500">{stockError}</p>
                                </div>
                            ) : liveStockData ? (
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-gray-200">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-cyan-500 mb-1">
                                                Nasdaq: {liveStockData.symbol}
                                            </h3>
                                            <p className="text-4xl md:text-5xl font-bold text-slate-900">
                                                ${liveStockData.price.toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="text-left md:text-right">
                                            <p className="text-sm text-slate-500 mb-1">
                                                {liveStockData.lastUpdated}
                                            </p>
                                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold ${liveStockData.changePercent >= 0
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-red-100 text-red-600'
                                                }`}>
                                                <span className="text-xl">
                                                    {liveStockData.changePercent >= 0 ? '▲' : '▼'}
                                                </span>
                                                <span>
                                                    {liveStockData.changePercent >= 0 ? '+' : ''}${liveStockData.change.toFixed(2)} ({liveStockData.changePercent.toFixed(2)}%)
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                                        <div className="space-y-1">
                                            <p className="text-xs md:text-sm text-slate-500 font-medium">Change</p>
                                            <p className={`text-lg md:text-xl font-bold ${liveStockData.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {liveStockData.changePercent >= 0 ? '▲' : '▼'} ${Math.abs(liveStockData.change).toFixed(2)}
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-xs md:text-sm text-slate-500 font-medium">Change %</p>
                                            <p className={`text-lg md:text-xl font-bold ${liveStockData.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                {liveStockData.changePercent.toFixed(2)}%
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-xs md:text-sm text-slate-500 font-medium">Volume</p>
                                            <p className="text-lg md:text-xl font-bold text-slate-900">
                                                {(liveStockData.volume / 1_000_000).toFixed(3)}M
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-xs md:text-sm text-slate-500 font-medium">Open</p>
                                            <p className="text-lg md:text-xl font-bold text-slate-900">
                                                ${liveStockData.open.toFixed(2)}
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-xs md:text-sm text-slate-500 font-medium">Today&apos;s High</p>
                                            <p className="text-lg md:text-xl font-bold text-slate-900">
                                                ${liveStockData.high.toFixed(2)}
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-xs md:text-sm text-slate-500 font-medium">Today&apos;s Low</p>
                                            <p className="text-lg md:text-xl font-bold text-slate-900">
                                                ${liveStockData.low.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 max-w-6xl mx-auto border-2 border-gray-200 backdrop-blur-sm"
                        style={{
                            boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.1)'
                        }}
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">Stock Performance</h3>

                            <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-full md:w-auto">
                                {(['1D', '1W', '1M', '3M', '6M', 'ALL'] as const).map((period) => (
                                    <motion.button
                                        key={period}
                                        onClick={() => setChartPeriod(period)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`flex-1 md:flex-none px-4 md:px-5 py-2 rounded-lg font-bold text-xs md:text-sm transition-all duration-300 ${chartPeriod === period
                                            ? 'bg-white text-cyan-500 shadow-lg shadow-cyan-500/20 border border-cyan-500/20'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                                            }`}
                                    >
                                        {period}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        <div className="h-[400px] md:h-[500px] w-full relative bg-gradient-to-b from-slate-50 to-white rounded-xl p-4">
                            {isLoadingChart && historicalData.length === 0 && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10 rounded-xl">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-2"></div>
                                        <p className="text-sm text-slate-500">Loading chart data...</p>
                                    </div>
                                </div>
                            )}
                            {historicalData.length === 0 && !isLoadingChart ? (
                                <div className="flex flex-col items-center justify-center h-full space-y-3 px-4">
                                    <div className="text-slate-400">
                                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-slate-600 font-medium mb-1">No historical data available</p>
                                        <p className="text-sm text-slate-500">
                                            Historical data for {chartPeriod} period is not yet available. <br className="hidden md:block" />
                                            Try a shorter time period (1D, 1W, or 1M).
                                        </p>
                                    </div>
                                </div>
                            ) : historicalData.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={historicalData}>
                                        <defs>
                                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis
                                            dataKey="date"
                                            stroke="#94a3b8"
                                            style={{ fontSize: "12px" }}
                                        />
                                        <YAxis
                                            stroke="#94a3b8"
                                            style={{ fontSize: "12px" }}
                                            domain={["auto", "auto"]}
                                            tickFormatter={(value) => `$${value.toFixed(2)}`}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Area
                                            type="monotone"
                                            dataKey="price"
                                            stroke="#06b6d4"
                                            strokeWidth={3}
                                            fill="url(#colorPrice)"
                                            animationDuration={1000}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            ) : null}
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                    <span className="text-sm text-slate-600">Stock Price (USD)</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-500">Last Updated</p>
                                    <p className="text-sm font-semibold text-slate-900">
                                        {liveStockData?.lastUpdated ?? "Waiting for live data..."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                            <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Latest Press Room</h2>
                        </div>
                        <Link href="/press-release" className="text-xs font-black text-cyan-500 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                            View All Press Room <ArrowUpRight className="w-4 h-4" />
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


            <ContactUs />
        </div>
    );
};

export default Investors;
