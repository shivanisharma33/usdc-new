const Logo = () => {
    const cyanColor = "#40D1FB"; // The bright cyan from the logo

    return (
        <div className="flex items-center gap-1">
            {/* Stylized U Icon */}
            <svg
                width="28"
                height="28"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 md:w-8 md:h-8"
            >
                {/* Left Side Slant */}
                <path
                    d="M10 20 L25 10 L25 75 L10 65 Z"
                    fill={cyanColor}
                />
                {/* Bar 1 */}
                <path
                    d="M32 12 L44 5 L44 85 L32 92 Z"
                    fill={cyanColor}
                />
                {/* Bar 2 */}
                <path
                    d="M51 16 L63 9 L63 80 L51 87 Z"
                    fill={cyanColor}
                />
                {/* Bar 3 */}
                <path
                    d="M70 20 L82 13 L82 75 L70 82 Z"
                    fill={cyanColor}
                />
            </svg>

            {/* Text Section */}
            <div className="flex flex-col leading-none">
                <h1
                    className="text-lg md:text-xl font-normal tracking-tight"
                    style={{ color: cyanColor, fontFamily: 'sans-serif' }}
                >
                    USDC
                </h1>
                <p
                    className="text-[8px] md:text-[9px] font-medium tracking-[0.05em] whitespace-nowrap"
                    style={{ color: cyanColor, fontFamily: 'sans-serif' }}
                >
                    US Data Centers Inc.
                </p>
            </div>
        </div>
    );
};

export default Logo;
