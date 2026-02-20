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
                        src="./Untitled design (2) (1).mp4"
                        type="video/mp4"
                    />
                </video>

                {/* The Split Filter Overlay */}
                {/* Left side: Dark data center feel (Left Shadow for Visibility) */}
                <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />

                {/* Right side: Light/Green nature feel overlay (To mimic the image's split look) */}
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-green-900/10 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
                <div className="max-w-4xl space-y-8">
                    {/* Subheader */}
                    <div className="animate-fade-in-up flex items-center gap-2">
                        <span className="inline-block w-3 h-3 rounded-full bg-[#40D1FB]"></span>
                        <p className="text-[#40D1FB] text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-95">
                            Premium Data Center Solutions
                        </p>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Powering the <span className="bg-gradient-to-r from-[#40D1FB] to-blue-400 bg-clip-text text-transparent">Future of Data</span>: Expert Development for the Digital Age
                    </h1>

                    {/* Tagline */}
                    <p className="text-white/90 text-base md:text-lg font-medium max-w-3xl leading-relaxed">
                        We specialize in building and managing state-of-the-art data centers, providing infrastructure solutions tailored for the evolving needs of the digital economy.
                    </p>

                    {/* Button */}
                    <div className="pt-6 flex gap-4 items-center flex-wrap">
                        <button className="group relative flex items-center gap-3 bg-[#40D1FB] text-black px-7 py-3 font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#40D1FB]/50 hover:scale-105">
                            <span>Explore Data Centers</span>
                            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <a href="/company-overview.pdf" download className="group relative flex items-center gap-3 border-2 border-white text-white px-7 py-3 font-bold text-base hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <span>Download PDF</span>
                            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
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
