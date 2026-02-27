'use client';

import OptimizedImage from '../components/OptimizedImage';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Calendar, Newspaper, Zap, Clock, Search, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ContactUs from '../components/ContactUs';

const API_BASE = 'https://thankful-miracle-1ed8bdfdaf.strapiapp.com/api/press-releases';
const PAGE_SIZE = 5;

type PressReleaseRecord = {
  id: number;
  documentId: string;
  title: string;
  date: string;
  content?: string;
  pdf_file?: {
    url?: string;
  } | null;
};

type PressReleaseApiResponse = {
  data: PressReleaseRecord[];
  meta: {
    pagination: {
      pageCount: number;
      total: number;
    };
  };
};

const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    });
};

const getSummary = (content = '', maxLength = 180) => {
    const plain = content.replace(/!\[.*?\]\(.*?\)/g, '').replace(/\n+/g, ' ').trim();
    return plain.length > maxLength ? plain.slice(0, maxLength) + '…' : plain;
};

const PressRelease = () => {
    const router = useRouter();
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const heroY = useTransform(heroScroll, [0, 1], ['0%', '40%']);
    const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

    const [allReleases, setAllReleases] = useState<PressReleaseRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [totalCount, setTotalCount] = useState(0);
    const [archivePage, setArchivePage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchAll = async () => {
            setLoading(true);
            setError(null);
            try {
                // populate=pdf_file to get the PDF URL in every record
                const firstRes = await fetch(
                    `${API_BASE}?pagination[page]=1&pagination[pageSize]=25&sort=date:desc&populate=pdf_file`
                );
                if (!firstRes.ok) throw new Error('Failed to fetch press releases');
                const firstData = (await firstRes.json()) as PressReleaseApiResponse;

                const { pageCount, total } = firstData.meta.pagination;
                setTotalCount(total);

                let collected = [...firstData.data];

                if (pageCount > 1) {
                    const results = await Promise.all(
                        Array.from({ length: pageCount - 1 }, (_, i) => i + 2).map((p) =>
                            fetch(
                                `${API_BASE}?pagination[page]=${p}&pagination[pageSize]=25&sort=date:desc&populate=pdf_file`
                            ).then((r) => r.json() as Promise<PressReleaseApiResponse>)
                        )
                    );
                    results.forEach((r) => { collected = [...collected, ...r.data]; });
                }

                collected.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setAllReleases(collected);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch press releases');
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, []);

    const handlePressReleaseClick = (pr: PressReleaseRecord) => {
        router.push(`/press-release/${pr.documentId}`);
    };

    const featuredReleases = allReleases.slice(0, 5);
    const heroRelease = featuredReleases[0];
    const sideReleases = featuredReleases.slice(1, 3);

    const archiveSource = searchQuery.trim() !== ''
        ? allReleases.filter((pr) =>
            pr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (pr.content || '').toLowerCase().includes(searchQuery.toLowerCase())
        )
        : allReleases;

    const archiveTotalPages = Math.ceil(archiveSource.length / PAGE_SIZE);
    const archiveItems = archiveSource.slice((archivePage - 1) * PAGE_SIZE, archivePage * PAGE_SIZE);

    const handleSearch = (val: string) => {
        setSearchQuery(val);
        setArchivePage(1);
    };

    const getPageNumbers = () => {
        return Array.from({ length: archiveTotalPages }, (_, i) => i + 1)
            .filter((p) => {
                if (archiveTotalPages <= 7) return true;
                if (p === 1 || p === archiveTotalPages) return true;
                if (Math.abs(p - archivePage) <= 1) return true;
                return false;
            })
            .reduce<(number | string)[]>((acc, p, idx, arr) => {
                if (idx > 0 && p - arr[idx - 1] > 1) acc.push('ellipsis-' + p);
                acc.push(p);
                return acc;
            }, []);
    };

    return (
        <div className="bg-white">
            {/* ── HERO ── */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-white z-10" />
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                        alt="News & Insights"
                        className="w-full h-full object-cover grayscale opacity-40 scale-110"
                    />
                </motion.div>

                <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-white/5 opacity-20" />
                </div>

                <div className="relative z-20 text-center px-6 max-w-7xl mx-auto space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500 text-slate-950 rounded-full mb-8 font-black uppercase text-[10px] tracking-[0.4em] shadow-2xl shadow-cyan-500/40">
                            <Zap className="w-4 h-4 fill-current" />
                            Live Transmission
                        </div>
                        <h1 className="text-8xl md:text-[14rem] font-black text-white tracking-tighter leading-none mb-8 uppercase select-none">
                            PRESS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ROOM.</span>
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16 scale-110">
                            <div className="text-center group cursor-pointer">
                                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Total Archives</p>
                                <p className="text-4xl font-black text-white leading-none">
                                    {loading ? '—' : String(totalCount).padStart(3, '0')}
                                </p>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden md:block" />
                            <div className="text-center group cursor-pointer">
                                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Last Updated</p>
                                <p className="text-4xl font-black text-white leading-none">TODAY</p>
                            </div>
                            <div className="w-px h-10 bg-white/20 hidden md:block" />
                            <div className="text-center group cursor-pointer">
                                <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest mb-1 group-hover:text-white transition-colors">Source Status</p>
                                <p className="text-4xl font-black text-white leading-none">VERIFIED</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-3"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.6em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500 to-transparent" />
                </motion.div>
            </section>

            {/* ── LATEST 5 BENTO ── */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    {loading ? (
                        <div className="flex items-center justify-center py-32">
                            <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
                        </div>
                    ) : error ? (
                        <div className="text-center py-32 text-slate-500 font-bold uppercase tracking-widest">
                            Failed to load press releases.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {heroRelease && (
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    onClick={() => handlePressReleaseClick(heroRelease)}
                                    className="lg:col-span-8 bg-slate-950 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden group cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-cyan-950/30 via-slate-950 to-blue-950/20" />
                                    <div
                                        className="absolute inset-0 opacity-5"
                                        style={{
                                            backgroundImage: 'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
                                            backgroundSize: '60px 60px',
                                        }}
                                    />
                                    <div className="relative z-10 h-full flex flex-col justify-between gap-10 min-h-[380px]">
                                        <div className="flex items-center justify-between">
                                            <span className="bg-cyan-500 text-slate-950 px-5 py-2 text-[10px] font-black uppercase tracking-widest">Featured Release</span>
                                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{formatDate(heroRelease.date)}</span>
                                        </div>
                                        <div className="space-y-6">
                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight line-clamp-3">
                                                {heroRelease.title}
                                            </h2>
                                            <p className="text-slate-400 text-base font-medium max-w-xl group-hover:text-slate-300 transition-colors line-clamp-2">
                                                {getSummary(heroRelease.content, 200)}
                                            </p>
                                        </div>
                                        <div>
                                            <button className="px-10 py-4 bg-white text-slate-950 font-black uppercase tracking-widest hover:bg-cyan-500 transition-all rounded-full flex items-center gap-3 text-sm">
                                                Full Story <ArrowUpRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div className="lg:col-span-4 space-y-8">
                                {sideReleases[0] && (
                                    <motion.div
                                        whileHover={{ x: 6 }}
                                        onClick={() => handlePressReleaseClick(sideReleases[0])}
                                        className="bg-slate-100 rounded-[3rem] p-10 space-y-6 group cursor-pointer"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="w-12 h-12 bg-slate-950 flex items-center justify-center text-white rounded-2xl group-hover:bg-cyan-500 transition-colors">
                                                <Newspaper className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                {formatDate(sideReleases[0].date)}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-tight group-hover:text-cyan-500 transition-colors line-clamp-3">
                                            {sideReleases[0].title}
                                        </h3>
                                        <p className="text-slate-500 text-sm font-medium line-clamp-2">{getSummary(sideReleases[0].content, 100)}</p>
                                        <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                    </motion.div>
                                )}

                                {sideReleases[1] && (
                                    <motion.div
                                        whileHover={{ x: 6 }}
                                        onClick={() => handlePressReleaseClick(sideReleases[1])}
                                        className="bg-cyan-500 rounded-[3rem] p-10 space-y-6 group cursor-pointer shadow-2xl shadow-cyan-500/20"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="w-12 h-12 bg-slate-950 flex items-center justify-center text-white rounded-2xl group-hover:bg-white group-hover:text-slate-950 transition-colors">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-950/60">
                                                {formatDate(sideReleases[1].date)}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-black text-slate-950 uppercase tracking-tighter leading-tight line-clamp-3">
                                            {sideReleases[1].title}
                                        </h3>
                                        <p className="text-slate-800 text-sm font-medium line-clamp-2">{getSummary(sideReleases[1].content, 100)}</p>
                                        <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-slate-950/60">
                                            Read Analysis <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ── ARCHIVE ── */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="space-y-4">
                            <span className="text-xs font-black text-cyan-500 uppercase tracking-[0.6em]">Document Repository</span>
                            <h2 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">Archive.</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <Search className="w-5 h-5 text-slate-300" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="Filter by keyword..."
                                className="bg-transparent border-b border-slate-200 py-2 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-cyan-500 transition-all w-64"
                            />
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-32">
                            <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest text-sm">Unable to load archive.</div>
                    ) : archiveItems.length === 0 ? (
                        <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest text-sm">No results found.</div>
                    ) : (
                        <>
                            <div className="space-y-4">
                                {archiveItems.map((pr, i) => (
                                    <motion.div
                                        key={pr.id}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        onClick={() => handlePressReleaseClick(pr)}
                                        className="bg-white rounded-[2rem] px-8 py-6 border border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group cursor-pointer hover:shadow-xl hover:shadow-cyan-500/5 hover:border-slate-200 transition-all"
                                    >
                                        <div className="flex items-start gap-6 flex-1 min-w-0">
                                            {/* Date badge */}
                                            <div className="flex-shrink-0 w-16 text-center hidden md:block">
                                                <div className="bg-slate-50 group-hover:bg-cyan-500/10 transition-colors rounded-2xl p-3 border border-slate-100">
                                                    <p className="text-[9px] font-black text-cyan-500 uppercase tracking-widest leading-none mb-1">
                                                        {new Date(pr.date).toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }).toUpperCase()}
                                                    </p>
                                                    <p className="text-2xl font-black text-slate-900 leading-none">
                                                        {new Date(pr.date).getUTCDate()}
                                                    </p>
                                                    <p className="text-[9px] font-bold text-slate-400 leading-none mt-1">
                                                        {new Date(pr.date).getUTCFullYear()}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-2 min-w-0 flex-1">
                                                <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest md:hidden">
                                                    <Calendar className="w-3 h-3" />
                                                    {formatDate(pr.date)}
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[9px] font-black text-cyan-500 uppercase tracking-widest">Press Release</span>
                                                    {pr.pdf_file?.url && (
                                                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">• PDF Available</span>
                                                    )}
                                                </div>
                                                <h3 className="text-lg md:text-xl font-black text-slate-900 group-hover:text-cyan-500 transition-colors uppercase tracking-tight leading-tight line-clamp-2">
                                                    {pr.title}
                                                </h3>
                                                <p className="text-slate-400 text-sm font-medium line-clamp-1 hidden lg:block">
                                                    {getSummary(pr.content, 140)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 flex-shrink-0 pl-0 lg:pl-4">
                                            <motion.div
                                                whileHover={{ x: 3 }}
                                                className="w-14 h-14 bg-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-all flex items-center justify-center rounded-2xl flex-shrink-0"
                                            >
                                                <ArrowUpRight className="w-5 h-5" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {archiveTotalPages > 1 && (
                                <div className="flex flex-col sm:flex-row items-center justify-between mt-16 pt-10 border-t border-slate-200 gap-6">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        Showing {(archivePage - 1) * PAGE_SIZE + 1}–{Math.min(archivePage * PAGE_SIZE, archiveSource.length)} of {archiveSource.length} releases
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setArchivePage((p) => Math.max(1, p - 1))}
                                            disabled={archivePage === 1}
                                            className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>

                                        {getPageNumbers().map((item) =>
                                            typeof item === 'string' ? (
                                                <span key={item} className="text-slate-300 font-black text-xs px-1">…</span>
                                            ) : (
                                                <button
                                                    key={item}
                                                    onClick={() => setArchivePage(item)}
                                                    className={`w-12 h-12 rounded-2xl font-black text-sm transition-all ${
                                                        archivePage === item
                                                            ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                                                            : 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-100'
                                                    }`}
                                                >
                                                    {item}
                                                </button>
                                            )
                                        )}

                                        <button
                                            onClick={() => setArchivePage((p) => Math.min(archiveTotalPages, p + 1))}
                                            disabled={archivePage === archiveTotalPages}
                                            className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* ── FOOTER ── */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-cyan-500/5 skew-x-[-20deg] translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-10">
                            <h3 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                                Press <br /> <span className="text-cyan-500">Center.</span>
                            </h3>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                                For institutional inquiries, high-resolution brand assets, or executive commentary.
                            </p>
                            <div className="space-y-4">
                                <a href="mailto:IR@digihostpower.com" className="text-3xl font-black text-white hover:text-cyan-500 transition-colors flex items-center gap-4 group">
                                    IR@digihostpower.com
                                    <ArrowUpRight className="w-6 h-6 text-cyan-500 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </a>
                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">Global Press Relations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactUs />
        </div>
    );
};

export default PressRelease;
