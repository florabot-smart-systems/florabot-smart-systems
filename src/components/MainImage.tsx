import React from 'react';

interface FlorabotImageProps {
  src: string;
  alt: string;
}

const FlorabotImage: React.FC<FlorabotImageProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain self-stretch mt-8 w-full aspect-[1.3] rounded-[60px] max-md:max-w-full"
  />
);

export default FlorabotImage;