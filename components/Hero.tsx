import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-50 grayscale"
        >
          <source src="/LENIWSEK/banner_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Darker gradient at bottom to blend with next section, lighter at top to show video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#050505]"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 select-none cursor-default">
          LENIWSEK
        </h1>
        <p className="text-sm md:text-lg text-neutral-300 font-light">
          Learning to create tunes with a dream to make music<br />
          that makes people dance and captures the vibe.
        </p>
        <p className="text-sm md:text-lg text-neutral-300 font-light mt-4">
          Czechia
        </p>
      </div>

      {/* Subtle Atmospheric Detail */}
      <div className="absolute bottom-10 right-10 text-[10px] text-white/5 font-mono tracking-[1em] select-none pointer-events-none uppercase hidden md:block">
        REF_444
      </div>
    </section>
  );
};

export default Hero;