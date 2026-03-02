'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useMemo, useRef } from 'react';

interface StockChartProps {
    currentPrice: number;
    changePercent: number;
}

const StockChart = ({ currentPrice, changePercent }: StockChartProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 150 });

    // Generate realistic historical candle data
    const data = useMemo(() => {
        const points = 40;
        const trend = changePercent / 100;
        const result = [];
        let runningPrice = currentPrice / (1 + trend);

        for (let i = 0; i < points; i++) {
            const volatility = currentPrice * 0.04;
            const open = runningPrice;
            const close = runningPrice + (currentPrice * trend) / points + (Math.random() - 0.45) * volatility;

            const maxVal = Math.max(open, close);
            const minVal = Math.min(open, close);
            const high = maxVal + Math.random() * (volatility * 0.4);
            const low = minVal - Math.random() * (volatility * 0.4);
            const volume = Math.random() * 40 + 20;

            runningPrice = close;

            const item = {
                x: (i / (points - 1)) * 400,
                open,
                close,
                high,
                low,
                volume,
                isUp: close >= open
            };

            if (i === points - 1) {
                item.close = currentPrice;
                item.isUp = currentPrice >= open;
            }
            result.push(item);
        }
        return result;
    }, [currentPrice, changePercent]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const allValues = data.flatMap(d => [d.high, d.low]);
    const minPrice = Math.min(...allValues) * 0.99;
    const maxPrice = Math.max(...allValues) * 1.01;
    const range = maxPrice - minPrice;

    const getTrendPath = () => {
        return data.map((p, i) => {
            const y = 150 - ((p.close - minPrice) / range) * 120;
            return `${i === 0 ? 'M' : 'L'} ${p.x},${y}`;
        }).join(' ');
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 400;
        mouseX.set(x);
    };

    const hoveredPrice = useTransform(smoothMouseX, (x) => {
        const index = Math.min(data.length - 1, Math.max(0, Math.floor((x / 400) * data.length)));
        return data[index]?.close.toFixed(3);
    });

    const hoveredY = useTransform(smoothMouseX, (x) => {
        const index = Math.min(data.length - 1, Math.max(0, Math.floor((x / 400) * data.length)));
        const price = data[index]?.close || 0;
        return 150 - ((price - minPrice) / range) * 120;
    });

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="h-72 w-full relative group/chart bg-white p-6 overflow-hidden border border-slate-100 shadow-xl cursor-crosshair select-none"
        >
            <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible">
                <defs>
                    <filter id="navyGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="volGradient" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#001738" stopOpacity="0" />
                        <stop offset="100%" stopColor="#001738" stopOpacity="0.1" />
                    </linearGradient>
                </defs>



                {/* Candlesticks */}
                {data.map((p, i) => {
                    const yOpen = 150 - ((p.open - minPrice) / range) * 120;
                    const yClose = 150 - ((p.close - minPrice) / range) * 120;
                    const yHigh = 150 - ((p.high - minPrice) / range) * 120;
                    const yLow = 150 - ((p.low - minPrice) / range) * 120;

                    return (
                        <g key={i}>
                            <motion.line
                                initial={{ scaleY: 0, opacity: 0 }}
                                animate={{ scaleY: isLoaded ? 1 : 0, opacity: isLoaded ? 0.4 : 0 }}
                                transition={{ delay: i * 0.015 + 0.5 }}
                                x1={p.x} y1={yHigh} x2={p.x} y2={yLow}
                                stroke="#001738" strokeWidth="0.8"
                            />
                            <motion.rect
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: isLoaded ? Math.max(2, Math.abs(yOpen - yClose)) : 0,
                                    opacity: isLoaded ? 1 : 0,
                                    y: isLoaded ? Math.min(yOpen, yClose) : Math.max(yOpen, yClose)
                                }}
                                transition={{ delay: i * 0.015 + 0.5, duration: 0.3 }}
                                x={p.x - 2} width="4" rx="0.5"
                                fill={p.isUp ? "#00d3f2" : "#ffffff"}
                                stroke={p.isUp ? "#00d3f2" : "#94a3b8"}
                                strokeWidth="0.5"
                            />
                        </g>
                    );
                })}

                {/* Premium Trend Line */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: isLoaded ? 1 : 0, opacity: isLoaded ? 0.9 : 0 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 1.2 }}
                    d={getTrendPath()}
                    fill="none" stroke="#001738" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                />

                {/* Current Value Target */}
                <motion.circle
                    cx="400" cy={150 - ((currentPrice - minPrice) / range) * 120} r="3" fill="#001738"
                />

                {/* Interactive Scan Line */}
                <motion.line
                    style={{ x: smoothMouseX }}
                    y1="0" y2="150" stroke="#001738" strokeOpacity="0.1"
                    strokeWidth="1" strokeDasharray="4 4"
                />
                <motion.circle
                    style={{ x: smoothMouseX, y: hoveredY }}
                    r="4" fill="#001738" stroke="#001738" strokeWidth="4"
                    strokeOpacity="0.1"
                />
            </svg>

            {/* Floating Interaction UI */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Mouse Price Tooltip */}
                <motion.div
                    style={{ x: smoothMouseX, y: hoveredY }}
                    className="absolute -translate-x-1/2 -translate-y-12 bg-slate-900 px-2 py-1 rounded text-[10px] font-black text-white shadow-xl opacity-0 group-hover/chart:opacity-100 transition-opacity"
                >
                    <motion.span>{hoveredPrice}</motion.span>
                </motion.div>

                {/* Corner Labels (O/H/L/C) */}
                <div className="absolute top-4 left-6 flex gap-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>O: <span className="text-slate-900">{data[data.length - 1].open.toFixed(2)}</span></span>
                    <span>H: <span className="text-slate-900">{data[data.length - 1].high.toFixed(2)}</span></span>
                    <span>L: <span className="text-slate-900">{data[data.length - 1].low.toFixed(2)}</span></span>
                </div>

                {/* Status Bar */}
                <div className="absolute bottom-6 right-8 flex items-center gap-3">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Vol 24h</span>
                        <span className="text-xs font-black text-slate-900">$124.5M</span>
                    </div>
                </div>
            </div>

            {/* Bottom Timeline */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center text-[7px] font-bold text-slate-300 uppercase tracking-[0.4em] border-t border-slate-50 pt-2 px-6 pb-2">
                <span>00:00 UTC</span>
                <span>Real-Time Performance Matrix</span>
                <span>24:00 UTC</span>
            </div>
        </div>
    );
};

export default StockChart;
