import { MoveRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[700px] w-full overflow-hidden">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    <source
                        src="https://www.pexels.com/download/video/3129576/"
                        type="video/mp4"
                    />
                </video>

                {/* The Split Filter Overlay */}
                {/* Left side: Dark data center feel */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

                {/* Right side: Light/Green nature feel overlay (To mimic the image's split look) */}
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-green-900/20 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
                <div className="max-w-4xl space-y-8">
                    {/* Subheader */}
                    <div className="animate-fade-in-up">
                        <p className="text-white text-[13px] md:text-[15px] font-bold tracking-[0.25em] uppercase opacity-90">
                            India's Largest Data Center Network
                        </p>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
                        <span className="hero-title-italic block md:inline mr-4">Sustainable</span>
                        <span className="font-sans block md:inline">by choice</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-white/95 text-lg md:text-2xl font-medium max-w-2xl leading-relaxed">
                        Scalable, secure and resilient data centers<br className="hidden md:block" />
                        for future-ready enterprises
                    </p>

                    {/* Button */}
                    <div className="pt-4">
                        <button className="group flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded hover:bg-[#40D1FB] hover:border-[#40D1FB] transition-all duration-300 font-bold text-lg">
                            <span>Explore Data Centers</span>
                            <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Floating Banner (IDC MarketScape) */}
                <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 right-6 md:right-auto">
                    <div className="group bg-black/30 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 max-w-2xl transition-all hover:bg-black/40">


                        <div className="space-y-3">
                            <h3 className="text-white text-base md:text-lg font-bold leading-tight tracking-wide">
                                Nxtra emerged as a leader in the 2024 IDC MarketScape<br className="hidden md:block" />
                                data center services
                            </h3>
                            <div className="flex items-center gap-2 cursor-pointer transition-all hover:translate-x-1">
                                <span className="text-white text-sm md:text-base font-bold border-b-2 border-transparent hover:border-white transition-all uppercase tracking-wider">
                                    Read full report
                                </span>
                                <MoveRight className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Accents */}
            {/* Small marker to mimic the red dot in the image - changed to cyan for USDC */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#40D1FB] rounded-full blur-[2px] opacity-40 z-10" />
        </div>
    );
};

export default Hero;
