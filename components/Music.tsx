'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RELEASES } from '@/lib/constants';
import { Play, Pause, SkipBack, SkipForward, ExternalLink, Disc } from 'lucide-react';
import Script from 'next/script';

const Music: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [widget, setWidget] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [playlist, setPlaylist] = useState<any[]>([]);

  const handleScriptLoad = () => {
    if (iframeRef.current && (window as any).SC) {
      const scWidget = (window as any).SC.Widget(iframeRef.current);
      setWidget(scWidget);

      scWidget.bind((window as any).SC.Widget.Events.READY, () => {
        setIsLoaded(true);
        scWidget.getCurrentSound((sound: any) => {
          setCurrentTrack(sound);
        });
        // Fetch full playlist
        scWidget.getSounds((sounds: any[]) => {
          setPlaylist(sounds);
        });
      });

      scWidget.bind((window as any).SC.Widget.Events.PLAY, () => {
        setIsPlaying(true);
        scWidget.getCurrentSound((sound: any) => {
          setCurrentTrack(sound);
        });
      });
      scWidget.bind((window as any).SC.Widget.Events.PAUSE, () => setIsPlaying(false));
      scWidget.bind((window as any).SC.Widget.Events.FINISH, () => setIsPlaying(false));

      scWidget.bind((window as any).SC.Widget.Events.PLAY_PROGRESS, (data: any) => {
        setProgress(data.relativePosition * 100);
      });
    }
  };

  const togglePlay = () => {
    if (widget) {
      widget.toggle();
    }
  };

  const nextTrack = () => widget?.next();
  const prevTrack = () => widget?.prev();
  const skipTo = (index: number) => {
    if (widget) {
      widget.skip(index);
      widget.play();
    }
  };

  return (
    <section className="py-16 bg-[#050505] relative space-y-24">
      <Script
        src="https://w.soundcloud.com/player/api.js"
        onLoad={handleScriptLoad}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Hidden SoundCloud Player */}
        <iframe
          ref={iframeRef}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/leniwsek&color=%23333&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
          className="hidden"
          title="SoundCloud Engine"
        ></iframe>

        {/* Custom Signal Console */}
        <div className="mb-32">
          <div className="flex items-center mb-12 space-x-4">
            <div className="h-[1px] w-12 bg-neutral-800"></div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-medium">LATEST TRACKS</h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Player Console */}
            <div className="lg:col-span-2 bg-neutral-950/50 border border-neutral-900 p-8 md:p-12 relative overflow-hidden group hover:border-neutral-800 transition-colors duration-500 rounded-sm">
              {/* Ambient Background Detail */}
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Disc className={`w-32 h-32 text-white ${isPlaying ? 'animate-spin-slow' : ''}`} />
              </div>

              <div className="relative z-10 flex flex-col space-y-10">
                {/* Status & Link */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-white animate-pulse' : 'bg-neutral-800'}`}></div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-mono">
                      {isPlaying ? 'STRM_ACTIVE' : 'IDLE'}
                    </span>
                  </div>
                  <a
                    href="https://soundcloud.com/leniwsek"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-600 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Track Info */}
                <div className="min-h-[60px]">
                  <h3 className="text-xl md:text-2xl font-light tracking-tight text-white mb-2 truncate">
                    {currentTrack?.title || 'Loading Transmission...'}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                    {currentTrack?.user?.username || 'LENIWSEK'}
                  </p>
                </div>

                {/* Progress Signal Line */}
                <div className="relative h-[2px] w-full bg-neutral-900 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-linear shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-start pt-4">
                  <div className="flex items-center space-x-8">
                    <button onClick={prevTrack} className="text-neutral-500 hover:text-white transition-colors p-2">
                      <SkipBack size={18} />
                    </button>
                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 border border-neutral-800 rounded-full flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all duration-500 group/play"
                    >
                      {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-1" fill="currentColor" />}
                    </button>
                    <button onClick={nextTrack} className="text-neutral-500 hover:text-white transition-colors p-2">
                      <SkipForward size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Track List */}
            <div className="bg-neutral-950/30 border border-neutral-900 rounded-sm overflow-hidden flex flex-col">
              <div className="p-4 border-b border-neutral-900 bg-neutral-950/50">
                <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-600 font-mono">Transmission_Queue</span>
              </div>
              <div className="flex-1 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
                {playlist.length > 0 ? (
                  playlist.map((track, index) => (
                    <button
                      key={track.id || index}
                      onClick={() => skipTo(index)}
                      className={`w-full text-left p-4 border-b border-neutral-900/50 hover:bg-white/5 transition-all duration-300 group ${currentTrack?.id === track.id ? 'bg-white/5' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] tracking-widest truncate pr-4 ${currentTrack?.id === track.id ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                          {track.title}
                        </span>
                        {currentTrack?.id === track.id && isPlaying && (
                          <div className="flex space-x-0.5 items-end h-3">
                            <div className="w-0.5 bg-white animate-[music-bar_0.8s_ease-in-out_infinite]"></div>
                            <div className="w-0.5 bg-white animate-[music-bar_1.2s_ease-in-out_infinite]"></div>
                            <div className="w-0.5 bg-white animate-[music-bar_1.0s_ease-in-out_infinite]"></div>
                          </div>
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center text-[10px] text-neutral-700 tracking-[0.3em] uppercase">
                    Initialising...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Release Grid */}
        <div className="flex items-center mb-12 space-x-4">
          <div className="h-[1px] w-12 bg-neutral-800"></div>
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-medium">Archive</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {RELEASES.map((release) => (
            <a key={release.id} href={release.spotifyLink || release.appleLink} target="_blank" rel="noreferrer" className="group relative cursor-pointer block">
              <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-500 group-hover:border-neutral-600">
                <img
                  src={release.coverUrl}
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 filter grayscale"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white bg-black/40">
                    <Play size={16} fill="white" className="ml-1" />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <h3 className="text-sm font-medium text-neutral-200 tracking-wide group-hover:text-white transition-colors">{release.title}</h3>
                <div className="flex justify-between items-center text-[9px] text-neutral-600 uppercase tracking-[0.2em] font-medium">
                  <span>{release.type}</span>
                  <span>{release.year}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="https://leniwsek.bandcamp.com/" target="_blank" rel="noreferrer" className="inline-block border border-neutral-800 px-10 py-4 text-[10px] tracking-[0.4em] text-neutral-500 hover:text-white hover:border-white hover:bg-neutral-950 transition-all duration-500 uppercase font-medium">
            View Full Transmission Archive
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;