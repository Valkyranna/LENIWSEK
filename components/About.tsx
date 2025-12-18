import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-[#080808] text-neutral-300 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#111] to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative order-2 lg:order-1 group">
            <div className="absolute inset-0 border border-neutral-800 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative z-10 overflow-hidden bg-neutral-900 group">
               <img 
                src="/Leni.webp" 
                alt="LENIWSEK Portrait" 
                className="w-full h-auto object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000"></div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-10">
            <div className="flex items-center space-x-4">
              <div className="h-[1px] w-12 bg-neutral-600"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-neutral-500">Biography</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              LENIWSEK
            </h2>

            <div className="space-y-6 text-lg font-light leading-relaxed text-neutral-400 max-w-xl">
              <p>
                learning to make tunes. DC comics collector • Resident Evil • movie, tech &amp; gaming enthusiast. 
              </p>
              <p>
               Check out my <a href="https://soundcloud.com/leniwsek" target="_blank" rel="noreferrer" className="text-white hover:text-neutral-300 border-b border-neutral-700 hover:border-white transition-colors">https://soundcloud.com/leniwsek</a> for my first song
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-neutral-800">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-neutral-600 mb-2">Origin</h4>
                <p className="text-white">Prague, Czech Republic</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-neutral-600 mb-2">Focus</h4>
                <p className="text-white">EDM, DnB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;