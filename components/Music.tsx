'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RELEASES } from '@/lib/constants';
import { Play, Pause, SkipBack, SkipForward, ExternalLink, Disc, X } from 'lucide-react';
import Script from 'next/script';
import { Release } from '@/lib/types';

const Music: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [widget, setWidget] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [playlist, setPlaylist] = useState<any[]>([]);
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);

  const handleScriptLoad = () => {
    if (iframeRef.current && (window as any).SC) {
      const scWidget = (window as any).SC.Widget(iframeRef.current);
      setWidget(scWidget);
    }
  };

  useEffect(() => {
    if (!widget || !(window as any).SC) return;

    const events = (window as any).SC.Widget.Events;
    
    // Define handlers
    const onReady = () => {
      if (!iframeRef.current) return;
      setIsLoaded(true);
      widget.getCurrentSound((sound: any) => setCurrentTrack(sound));
      widget.getSounds((sounds: any[]) => setPlaylist(sounds));
    };

    const onPlay = () => {
      if (!iframeRef.current) return;
      setIsPlaying(true);
      widget.getCurrentSound((sound: any) => setCurrentTrack(sound));
    };

    const onPause = () => setIsPlaying(false);
    const onFinish = () => setIsPlaying(false);
    
    const onProgress = (data: any) => {
      if (!iframeRef.current) return;
      // Throttle: only update if change is > 0.5% to reduce re-renders
      const newProg = data.relativePosition * 100;
      setProgress(prev => Math.abs(prev - newProg) > 0.5 ? newProg : prev);
    };

    // Bind events
    widget.bind(events.READY, onReady);
    widget.bind(events.PLAY, onPlay);
    widget.bind(events.PAUSE, onPause);
    widget.bind(events.FINISH, onFinish);
    widget.bind(events.PLAY_PROGRESS, onProgress);

    // Initial check if ready (in case it loaded fast)
    // Note: SC Widget doesn't have a simple synchronous 'isReady' property, 
    // but the READY event should fire or have fired. 
    
    // Cleanup
    return () => {
      if (widget && (window as any).SC) {
        try {
          widget.unbind(events.READY);
          widget.unbind(events.PLAY);
          widget.unbind(events.PAUSE);
          widget.unbind(events.FINISH);
          widget.unbind(events.PLAY_PROGRESS);
        } catch (e) {}
      }
    };
  }, [widget]);

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
    <section id="music" className="py-16 bg-[#050505] relative space-y-24">
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
                      className="w-full h-full object-cover transition-all duration-700"
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

        {/* Catalogue Section */}
        <div id="catalogue" className="pt-24">
          <div className="flex items-center mb-6 space-x-4">
            <div className="h-[1px] w-12 bg-neutral-700"></div>
            <h2 className="text-xs uppercase tracking-[0.5em] text-neutral-200 font-medium font-mono">Music Catalogue</h2>
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 mb-12 ml-16">
            Click any release below to explore the story and process behind the track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {RELEASES.map((release) => (
            <div 
              key={release.id} 
              onClick={() => setSelectedRelease(release)}
              className="group relative cursor-pointer block"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-500 group-hover:border-neutral-600">
                {/* Story Indicator Badge */}
                {release.story && (
                  <div className="absolute top-3 right-3 z-10 pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 flex items-center space-x-1.5 rounded-full">
                      <div className="w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_5px_white]"></div>
                      <span className="text-[7px] tracking-[0.2em] uppercase text-white font-mono">Behind the Track</span>
                    </div>
                  </div>
                )}

                <img
                  src={release.coverUrl}
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center text-white bg-black/40">
                    <div className="text-[9px] tracking-[0.3em] font-mono uppercase">Read Story</div>
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
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="https://leniwsek.bandcamp.com/" target="_blank" rel="noreferrer" className="inline-block border border-neutral-700 px-10 py-4 text-xs tracking-[0.4em] text-neutral-200 hover:text-white hover:border-white hover:bg-neutral-950 transition-all duration-500 uppercase font-medium font-mono">
            View Archive
          </a>
        </div>
      </div>

      {/* Catalogue Modal / Behind the Track */}
      {selectedRelease && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedRelease(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl bg-neutral-950 border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedRelease(null)}
              className="absolute top-4 right-4 z-20 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>

            {/* Left: Artwork & Links */}
            <div className="w-full md:w-2/5 p-8 border-b md:border-b-0 md:border-r border-white/5 bg-neutral-900/30 flex flex-col">
              <div className="aspect-square w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl mb-8 group">
                <img 
                  src={selectedRelease.coverUrl} 
                  alt={selectedRelease.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-mono">
                  <span>{selectedRelease.type}</span>
                  <span>{selectedRelease.year}</span>
                </div>
                <h2 className="text-3xl font-light tracking-tight text-white">{selectedRelease.title}</h2>
                <div className="flex flex-col space-y-3 pt-4">
                  <a 
                    href={selectedRelease.spotifyLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-between px-4 py-3 border border-white/10 bg-white/5 text-xs tracking-widest text-neutral-300 hover:text-white hover:border-white/40 transition-all"
                  >
                    <span>SOUNDCLOUD</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[80vh] md:max-h-[600px] scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
              <div className="space-y-12">
                {selectedRelease.description && (
                  <section className="space-y-4">
                    <h3 className="text-[10px] tracking-[0.4em] uppercase text-neutral-500 font-mono border-b border-white/5 pb-2">Overview</h3>
                    <p className="text-lg font-light text-neutral-200 leading-relaxed italic">
                      "{selectedRelease.description}"
                    </p>
                  </section>
                )}

                {selectedRelease.story && (
                  <section className="space-y-4">
                    <h3 className="text-[10px] tracking-[0.4em] uppercase text-neutral-500 font-mono border-b border-white/5 pb-2">The Story</h3>
                    <p className="text-sm font-light text-neutral-400 leading-relaxed">
                      {selectedRelease.story}
                    </p>
                  </section>
                )}

                {selectedRelease.process && (
                  <section className="space-y-4">
                    <h3 className="text-[10px] tracking-[0.4em] uppercase text-neutral-500 font-mono border-b border-white/5 pb-2">The Process</h3>
                    <p className="text-sm font-light text-neutral-400 leading-relaxed">
                      {selectedRelease.process}
                    </p>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Music;