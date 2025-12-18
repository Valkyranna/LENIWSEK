import React from 'react';
import { RELEASES } from '@/lib/constants';
import { Play, Disc } from 'lucide-react';

const Music: React.FC = () => {
  return (
    <section className="py-16 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Featured Release (SoundCloud Player) */}
        <div className="mb-20">
          <div className="flex items-center mb-8 space-x-4">
            <div className="h-[1px] w-12 bg-neutral-700"></div>
            <h2 className="text-2xl font-light tracking-[0.2em] text-neutral-200">LATEST TRACK</h2>
          </div>

          <div className="w-full max-w-3xl">
            {/* 
              SoundCloud Embed 
              Replace the 'url' parameter in the src below with a specific track URL if needed.
              Currently set to the artist profile which usually plays the latest track.
            */}
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/leniwsek&color=%23333&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&maxheight=300&show_artwork=true&sharing=false&download=false&show_playcount=false"
              title="SoundCloud Player"
              className="filter invert(1) hue-rotate(180deg) brightness(0.7) contrast(1.3) saturate(0.8)"
            ></iframe>
          </div>
        </div>

        {/* Release Grid */}
        <div className="flex items-center mb-12 space-x-4">
          <div className="h-[1px] w-12 bg-neutral-700"></div>
          <h2 className="text-xl font-light tracking-[0.2em] text-neutral-400">ARCHIVE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RELEASES.map((release) => (
            <a key={release.id} href={release.spotifyLink || release.appleLink} target="_blank" rel="noreferrer" className="group relative cursor-pointer block">
              <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-300 group-hover:border-neutral-500">
                <img
                  src={release.coverUrl}
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="p-3 bg-white text-black rounded-full">
                    <Play size={20} fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-medium text-neutral-200 tracking-wide group-hover:text-white transition-colors">{release.title}</h3>
                <div className="flex justify-between items-center text-xs text-neutral-500 mt-1 uppercase tracking-wider">
                  <span>{release.type}</span>
                  <span>{release.year}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://leniwsek.bandcamp.com/" target="_blank" rel="noreferrer" className="inline-block border border-neutral-700 px-8 py-3 text-sm tracking-[0.2em] text-neutral-400 hover:text-white hover:border-white transition-all duration-300 uppercase">
            VIEW FULL ARCHIVE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;