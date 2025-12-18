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
        <div className="mb-20">
          <div className="flex items-center mb-10 space-x-4">
            <div className="h-[1px] w-12 bg-neutral-700"></div>
            <h2 className="text-xs uppercase tracking-[0.5em] text-neutral-200 font-medium font-mono">LATEST TRACKS</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-neutral-950 border border-neutral-900/50 rounded-sm overflow-hidden flex flex-col md:flex-row">
            {/* Left Side: Artwork & Main Info */}
            <div className="w-full md:w-[280px] px-5 py-6 border-b md:border-b-0 md:border-r border-neutral-900 bg-neutral-950/80 relative overflow-hidden group shrink-0">
              {/* Background Artwork (Blur) */}
              {currentTrack?.artwork_url && (
                <div
                  className="absolute inset-0 opacity-20 blur-3xl scale-125 transition-all duration-1000 group-hover:opacity-30"
                  style={{ backgroundImage: `url(${currentTrack.artwork_url.replace('-large', '-t500x500')})`, backgroundSize: 'cover' }}
                ></div>
              )}

              <div className="relative z-10 flex flex-col h-full space-y-6">
                {/* Artwork Image */}
                <div className="aspect-square w-full max-w-[240px] mx-auto bg-neutral-900 border border-neutral-800 overflow-hidden rounded-sm shadow-xl">
                  {currentTrack?.artwork_url ? (
                    <img
                      src={currentTrack.artwork_url.replace('-large', '-t500x500')}
                      alt={currentTrack.title}
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Disc className={`w-12 h-12 text-neutral-800 ${isPlaying ? 'animate-spin-slow' : ''}`} />
                    </div>
                  )}
                </div>

                {/* Track Info - Fixed height to prevent shifting */}
                <div className="space-y-1 h-[72px] flex flex-col justify-end">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-white animate-pulse shadow-[0_0_8px_white]' : 'bg-neutral-800'}`}></div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white font-mono h-4">
                      {isPlaying ? 'ACTIVE' : 'IDLE'}
                    </span>
                  </div>
                  <h3 className="text-xl font-light tracking-tight text-white leading-tight line-clamp-2 overflow-hidden">
                    {currentTrack?.title || 'Initializing...'}
                  </h3>
                </div>

                {/* Main Controls */}
                <div className="flex items-center space-x-5 pt-1">
                  <button onClick={prevTrack} className="text-neutral-400 hover:text-white transition-colors p-2">
                    <SkipBack size={18} />
                  </button>
                  <button
                    onClick={togglePlay}
                    className="w-14 h-14 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all duration-500 shadow-xl"
                  >
                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-1" fill="currentColor" />}
                  </button>
                  <button onClick={nextTrack} className="text-neutral-400 hover:text-white transition-colors p-2">
                    <SkipForward size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Progress & Track List */}
            <div className="flex-1 flex flex-col bg-neutral-950/40">
              {/* Top: Progress & Branding */}
              <div className="px-5 py-6 border-b border-neutral-900 space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.4em] text-neutral-300 font-mono font-medium">
                  <span>Track List</span>
                  <a
                    href="https://soundcloud.com/leniwsek"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span>SOUNDCLOUD</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Progress Signal Line */}
                <div className="relative h-[2px] w-full bg-neutral-900 overflow-hidden rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-linear shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto max-h-[380px] scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
                {playlist.length > 0 ? (
                  playlist.map((track, index) => (
                    <button
                      key={track.id || index}
                      onClick={() => skipTo(index)}
                      className={`w-full text-left px-5 py-3.5 border-b border-neutral-900/50 hover:bg-white/5 transition-all duration-300 group ${currentTrack?.id === track.id ? 'bg-white/5' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 overflow-hidden">
                          <span className="text-[10px] font-mono text-neutral-700 shrink-0">{(index + 1).toString().padStart(2, '0')}</span>
                          <span className={`text-[11px] tracking-[0.12em] font-medium truncate ${currentTrack?.id === track.id ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                            {track.title}
                          </span>
                        </div>
                        {currentTrack?.id === track.id && isPlaying && (
                          <div className="flex space-x-1 items-end h-3.5 pb-0.5 shrink-0">
                            <div className="w-0.5 bg-white animate-[music-bar_0.8s_ease-in-out_infinite]"></div>
                            <div className="w-0.5 bg-white animate-[music-bar_1.2s_ease-in-out_infinite]"></div>
                            <div className="w-0.5 bg-white animate-[music-bar_1.0s_ease-in-out_infinite]"></div>
                          </div>
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="p-10 text-center text-[10px] text-neutral-500 tracking-[0.4em] uppercase animate-pulse">
                    Synchronizing...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Release Grid */}
        <div className="flex items-center mb-12 space-x-4">
          <div className="h-[1px] w-12 bg-neutral-700"></div>
          <h2 className="text-xs uppercase tracking-[0.5em] text-neutral-200 font-medium font-mono">Archive</h2>
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
          <a href="https://leniwsek.bandcamp.com/" target="_blank" rel="noreferrer" className="inline-block border border-neutral-700 px-10 py-4 text-xs tracking-[0.4em] text-neutral-200 hover:text-white hover:border-white hover:bg-neutral-950 transition-all duration-500 uppercase font-medium font-mono">
            View Archive
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;