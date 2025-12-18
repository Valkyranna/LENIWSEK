'use client';

import React, { useState, useEffect } from 'react';
import { BASE_PATH } from '@/lib/constants';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showColor = isHovered || isScrolled;

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${showColor ? 'grayscale-0 opacity-70' : 'grayscale opacity-50'
            }`}
        >
          <source src={`${BASE_PATH}/banner_video_hq.mp4`} type="video/mp4" />
          <source src={`${BASE_PATH}/banner_video_hq.webm`} type="video/webm" />
          <source src={`${BASE_PATH}/banner_video.webm`} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Darker gradient at bottom to blend with next section, lighter at top to show video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#050505]"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-[0.3em] text-white mb-6 select-none cursor-default">
          LENIWSEK
        </h1>
        <p className="text-sm md:text-lg text-neutral-300 font-light max-w-2xl mx-auto">
          My dream is to create music to what can people resonate to, dance to and connects with their journeys
        </p>
        <p className="text-sm md:text-lg text-neutral-300 font-light mt-4">
          Czechia
        </p>
      </div>

      {/* Subtle Atmospheric Detail */}
      <div className="absolute bottom-10 right-10 text-[10px] text-white/5 font-mono tracking-[1em] select-none pointer-events-none uppercase hidden md:block">
        444
      </div>
    </section>
  );
};

export default Hero;