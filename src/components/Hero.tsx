"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  fullHeight?: boolean;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage, fullHeight }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`relative flex items-center justify-center ${fullHeight ? 'min-h-screen' : 'py-32 md:py-40 lg:py-48'} overflow-hidden`}
    >
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105 transition-transform duration-[10s]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden
        />
      )}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 via-[#0066CC]/80 to-[#1E3A8A]/90" aria-hidden />
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm md:text-base uppercase tracking-widest text-blue-200 font-bold mb-6 animate-pulse">
            ✦ ISO 9001:2015 Certified • Industrial Coating Specialists
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-8 tracking-tight drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-100 mb-10 max-w-3xl drop-shadow-lg">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link 
              href={ctaLink} 
              className="group px-8 md:px-10 py-4 md:py-5 bg-white text-[#0066CC] font-bold text-base md:text-lg rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl"
            >
              <span className="flex items-center gap-2">
                {ctaText}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link 
              href="/projects" 
              className="px-8 md:px-10 py-4 md:py-5 bg-white/10 text-white font-bold text-base md:text-lg rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-2 border-white/30 backdrop-blur-md shadow-xl"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
