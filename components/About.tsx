import React from 'react';
import { BASE_PATH } from '@/lib/constants';

const About: React.FC = () => { // Updated bio content
  return (
    <section id="about" className="bg-[#080808] text-neutral-300 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#111] to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

          {/* Image Column */}
          <div className="relative order-2 lg:order-1 group max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 border border-neutral-800 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative z-10 overflow-hidden bg-neutral-900 group aspect-square">
              <img
                src={`${BASE_PATH}/Lenipicture.webp`}
                alt="LENIWSEK Portrait"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000"></div>

              {/* Subtle 444 Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none select-none">
                <span className="text-8xl md:text-9xl font-bold tracking-[0.1em] font-mono text-white">444</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-10 relative z-20 lg:-ml-20">
            <div className="flex items-center space-x-4">
              <div className="h-[1px] w-12 bg-neutral-700"></div>
              <h2 className="text-xs uppercase tracking-[0.5em] text-neutral-200 font-medium font-mono">Biography</h2>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              LENIWSEK
            </h2>

            <div className="space-y-6 text-lg font-light leading-relaxed text-neutral-400 max-w-xl">
              <p>
                My name is Leni, I'm an aspiring producer who's deeply inspired by visionary incredible artist barnacle boi since May 2018. I have to say that wave music especially barnacle boi’s discography changed my life.
              </p>
              <p>
                Although I am also heavily inspired a lot by artists such as: Klimeks, FATE, STM, Sidewalks and Skeletons, CASHFORGOLD, Øfdream, Trash Lord, MYSTXRIVL, Wevlth, Enjoii, Brothel, Skeler, deadwinter, Deadcrow and many more.
              </p>
              <p>
                My dream is to create music that people can resonate with, relate to, dance to, and feel connected to throughout their journeys.
              </p>
              <p>
                Barnacle boi's sound helped me find myself to start this music path.
              </p>
              <p>
                Here we go.
              </p>
              <p>
                Check out my Soundcloud <a href="https://soundcloud.com/leniwsek" target="_blank" rel="noreferrer" className="text-white hover:text-neutral-300 border-b border-neutral-700 hover:border-white transition-colors">https://soundcloud.com/leniwsek</a> for my little creations
              </p>
            </div>

            <div className="pt-8 grid grid-cols-1 gap-8 border-t border-neutral-800">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-neutral-600 mb-2">Genres</h4>
                <p className="text-white leading-relaxed">Electronic with passion to Wave, Witch House, Trance, R&B, Hip Hop, Trap, Jazz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
