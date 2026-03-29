'use client';

import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

// Apple Icon
const AppleIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

// SoundCloud Icon

// Spotify Icon
const SpotifyIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.3c-.22.36-.68.48-1.04.26-2.9-1.78-6.55-2.18-10.85-1.2-.41.09-.81-.17-.9-.58-.09-.41.17-.81.58-.9 4.7-1.07 8.78-.62 12.01 1.36.36.22.48.67.26 1.04-.04.02-.04.02-.06.02zm1.46-3.26c-.28.45-.87.59-1.32.32-3.32-2.04-8.38-2.63-12.31-1.44-.51.15-1.04-.14-1.19-.65s.14-1.04.65-1.19c4.51-1.37 10.08-.71 13.85 1.61.45.28.6.86.32 1.32l0 .03zm.12-3.41c-3.98-2.37-10.55-2.58-14.36-1.43-.61.18-1.25-.17-1.43-.78-.18-.61.17-1.25.78-1.43 4.38-1.33 11.64-1.08 16.23 1.64.55.33.73 1.04.4 1.59s-1.04.73-1.59.4l-.03.01z" />
    </svg>
);

const SoundCloudIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M11.993 3.809c-.396 0-.717.32-.717.717v12.99c0 .396.321.717.717.717.396 0 .717-.32.717-.717V4.525c0-.396-.321-.716-.717-.716zm-2.928 2.928c-.396 0-.717.32-.717.717v10.062c0 .396.321.717.717.717.396 0 .717-.32.717-.717V7.454c0-.396-.321-.717-.717-.717zM6.137 9.337c-.396 0-.717.32-.717.717v8.179c0 .396.321.717.717.717.396 0 .717-.32.717-.717v-8.179c0-.396-.321-.717-.717-.717zm-2.928 2.928c-.396 0-.717.32-.717.717v5.251c0 .396.321.717.717.717.396 0 .717-.32.717-.717v-5.251c0-.396-.321-.717-.717-.717zm17.584-2.928c-.396 0-.717.32-.717.717v8.179c0 .396.321.717.717.717.396 0 .717-.32.717-.717v-8.179c0-.396-.321-.717-.717-.717zm-2.928-2.928c-.396 0-.717.32-.717.717v10.062c0 .396.321.717.717.717.396 0 .717-.32.717-.717V7.454c0-.396-.321-.717-.717-.717zm-2.928-2.928c-.396 0-.717.32-.717.717v12.99c0 .396.321.717.717.717.396 0 .717-.32.717-.717V4.525c0-.396-.321-.716-.717-.716z" />
    </svg>
);

// Custom Bandcamp Icon
const BandcampIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
    </svg>
);

// Custom X (Twitter) Icon
const XIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

// Ko-fi Icon
const KofiIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M12 11h.01" />
        <path d="M21 15c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8z" />
        <path d="M16 17v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2" />
        <path d="M18 5v12" />
        <path d="M6 10h.01" />
    </svg>
);

// Amazon Icon
const AmazonIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M15.012 13.518c.026.155.155.155.33.155h3.047c.181 0 .285-.155.337-.363.052-.259.052-.466.052-1.036 0-3.37-3.655-4.407-3.655-4.407S11.455 7.042 11.455 10.41c0 2.257 1.452 3.868 3.557 3.108zm-9.332 5.34c-1.218 0-1.892-.622-1.892-1.633 0-1.088.751-1.685 2.15-1.685 1.14 0 2.046.285 2.046.285s-.026 1.452-.052 1.633c-.026.233-.285.492-.518.544a4.34 4.34 0 0 1-1.734.855zm8.136-2.177c0 .648-.389 1.115-.907 1.425a4.896 4.896 0 0 1-2.903.623 4.636 4.636 0 0 1-3.238-.855 3.02 3.02 0 0 1-1.166-2.515c0-1.685.959-2.592 2.747-2.903l1.841-.337c1.399-.234 1.451-.57.181-.7-.803-.078-1.581.052-2.385.285-.181.052-.337-.052-.363-.259l-.493-2.126c-.026-.181.052-.337.259-.388a10.6 10.6 0 0 1 3.524-.493c1.789 0 3.033.441 3.759 1.27.7.804.855 1.633.855 2.955l.026 3.033v1.14c0 1.996 1.348 2.307 1.348 2.307.181.052.233.182.026.337-1.14.778-2.333.778-2.333.778-.207 0-.31-.155-.31-.389V16.68zm9.539 3.448c-4.251 3.059-11.846 3.655-16.719 1.84l-.44-.207c-.156-.078-.156-.259.052-.311.596-.13 1.814-.311 2.358-.337.207-.026.311.13.259.285-.31.855-1.555 1.84-1.996 2.15l-.233.156c-.155.104-.207.129 0 .155 3.163.519 8.165.182 11.225-1.918.493-.337.985-.726.855-1.426-.104-.57-.674-.648-.674-.648-.182-.026-.337.13-.182.259.855.778.855 1.244.311 1.607zM24 10.229c0-1.01-.259-1.348-.751-1.348-.156 0-.311.026-.519.078C21.455 9.348 21.04 10.592 21.04 13.57c0 2.2.337 3.654.778 3.654.466 0 .803-.492.803-1.088v-5.907z" />
    </svg>
);

// Tidal Icon
const TidalIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M12.012 7.248L8.008 11.252l4.004 4.004 4.004-4.004-4.004-4.004zm0-7.248L8.008 4.004l4.004 4.004 4.004-4.004L12.012 0zm-8.008 8.008L0 12.012l4.004 4.004 4.004-4.004L4.004 8.008zm16.016 0l-4.004 4.004 4.004 4.004 4.004-4.004-4.004-4.004z" />
    </svg>
);

// PayPal Icon
const PaypalIcon = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.727a.78.78 0 0 1 .772-.656H14.03c4.717 0 7.375 2.27 6.848 6.576-.566 4.63-3.69 7.04-8.03 7.04H10.19c-.312 0-.583.21-.652.514l-2.462 4.136z" />
    </svg>
);

const Contact: React.FC = () => {
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <footer id="contact" className="flex flex-col items-center justify-center bg-black border-t border-neutral-900 relative py-16">
            <div className="max-w-4xl w-full mx-auto px-6 text-center">

                {/* Minimalist Contact Form */}
                <div className="mb-20 w-full max-w-sm mx-auto text-left">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInput}
                                placeholder="YOUR NAME"
                                className="w-full bg-transparent border-b border-neutral-800 py-2 text-xs tracking-widest text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInput}
                                placeholder="YOUR EMAIL"
                                className="w-full bg-transparent border-b border-neutral-800 py-2 text-xs tracking-widest text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                                required
                            />
                        </div>
                        <div className="relative group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInput}
                                placeholder="YOUR MESSAGE"
                                rows={3}
                                className="w-full bg-transparent border-b border-neutral-800 py-2 text-xs tracking-widest text-white focus:outline-none focus:border-white transition-colors resize-none placeholder:text-neutral-700"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full pt-4 text-[10px] tracking-[0.5em] uppercase text-neutral-400 hover:text-white transition-colors disabled:opacity-30"
                        >
                            {status === 'loading' ? 'SENDING...' : status === 'success' ? 'MESSAGE SENT' : status === 'error' ? 'TRY AGAIN' : 'SEND MESSAGE'}
                        </button>
                    </form>
                </div>


                {/* Support Links */}
                <div id="support" className="flex flex-col items-center mb-12 w-full max-w-lg mx-auto">
                    <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Support</h3>
                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
                        <a
                            href="https://ko-fi.com/leniwsek"
                            target="_blank"
                            rel="noreferrer"
                            className="text-lg font-light text-white hover:text-neutral-400 transition-colors flex items-center space-x-2 p-2"
                        >
                            <KofiIcon size={20} />
                            <span>Ko-fi</span>
                        </a>
                        <a
                            href="https://www.paypal.me/leniwsek1"
                            target="_blank"
                            rel="noreferrer"
                            className="text-lg font-light text-white hover:text-neutral-400 transition-colors flex items-center space-x-2 p-2"
                        >
                            <PaypalIcon size={20} />
                            <span>PayPal</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-8">
                    <div className="h-[1px] w-24 bg-neutral-800"></div>

                    {/* Social Icons */}
                    <div className="flex space-x-12">
                        {[
                            { icon: Instagram, href: "http://instagram.com/leniwsek", label: "Instagram" },
                            { icon: Facebook, href: "https://facebook.com/leniwsek", label: "Facebook" },
                            { icon: Youtube, href: "https://youtube.com/leniwsek", label: "YouTube" },
                            { icon: XIcon, href: "https://x.com/leniwsek", label: "X" },
                            { icon: BandcampIcon, href: "https://leniwsek.bandcamp.com", label: "Bandcamp" },
                            { icon: SoundCloudIcon, href: "https://soundcloud.com/leniwsek", label: "SoundCloud" },
                            { icon: SpotifyIcon, href: "https://open.spotify.com/artist/3CZcBvEHgbcm347Jxii9Pn", label: "Spotify" },
                            { icon: AppleIcon, href: "https://music.apple.com/us/artist/leniwsek/1858297709", label: "Apple Music", size: 32 },
                            { icon: AmazonIcon, href: "https://music.amazon.com/artists/B0G4XP2TXG/leniwsek", label: "Amazon" },
                            { icon: TidalIcon, href: "https://tidal.com/artist/70717901", label: "Tidal" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative flex items-center justify-center"
                                aria-label={social.label}
                                style={{ transform: social.label === 'Apple Music' ? 'translateY(-5px)' : 'none' }}
                            >
                                <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <social.icon size={social.size || 28} className="text-neutral-500 group-hover:text-white transition-colors duration-300 relative z-10 self-center" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 text-[10px] text-neutral-800 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} LENIWSEK
            </div>
        </footer>
    );
};

export default Contact;
