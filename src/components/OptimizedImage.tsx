'use client';

import Image, { type ImageProps } from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function OptimizedImage({
  src,
  alt,
  width = 1920,
  height = 1080,
  sizes = '100vw',
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      {...props}
    />
  );
}
