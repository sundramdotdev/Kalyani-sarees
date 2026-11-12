'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImage } from '../../types/product';

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const activeImage = images[activeIndex] || {
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    alt: productName,
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails (Horizontal on Mobile, Vertical on Desktop) */}
      {images.length > 1 && (
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] pb-2 lg:pb-0 shrink-0">
          {images.map((img, idx) => (
            <button
              key={img.id || idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-16 h-20 sm:w-20 sm:h-26 rounded-xs overflow-hidden border-2 transition-all shrink-0 ${
                activeIndex === idx
                  ? 'border-[#6B1F2A] shadow-xs'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt || `${productName} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Large Display Viewport */}
      <div
        className="relative flex-1 aspect-3/4 bg-[#EFE5D5] rounded-sm overflow-hidden border border-[#DED5C8] cursor-crosshair group"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={activeImage.url}
          alt={activeImage.alt || productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top transition-transform duration-300"
          style={
            isZoomed
              ? {
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                  transform: 'scale(1.75)',
                }
              : undefined
          }
        />

        {/* View Type Badge if present */}
        {activeImage.viewType && (
          <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
            {activeImage.viewType} View
          </span>
        )}

        {/* Zoom Hint */}
        <span className="hidden lg:block absolute top-3 right-3 bg-white/80 backdrop-blur-xs text-[#252525] text-[10px] px-2 py-1 rounded shadow-xs uppercase tracking-wider font-semibold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          Roll over to Zoom
        </span>
      </div>
    </div>
  );
};
