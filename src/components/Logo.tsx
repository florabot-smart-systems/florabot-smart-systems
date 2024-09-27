import React from 'react';

interface FlorabotLogoProps {
  src: string;
  alt: string;
}

const FlorabotLogo: React.FC<FlorabotLogoProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain z-10 max-w-full aspect-[2.75] rounded-[54px] w-[168px]"
  />
);

export default FlorabotLogo;