'use client';

import { useState } from 'react';
import Image from 'next/image';

const Logo = () => {
  const [src, setSrc] = useState('/USDC_3i.png');

  return (
    <div className="flex items-center">
      <Image
        src={src}
        onError={() => setSrc('/logo.webp')}
        alt="USDC Logo"
        width={180}
        height={48}
        className="h-10 md:h-12 w-auto object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
