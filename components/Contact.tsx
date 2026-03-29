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
        viewBox="0 0 50 50"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M36,5H14c-4.971,0-9,4.029-9,9v22c0,4.971,4.029,9,9,9h22c4.971,0,9-4.029,9-9V14C45,9.029,40.971,5,36,5z M38.19,21.254	c0.65-0.279,1.42-0.317,2.07-0.121c0.27,0.084,0.51,0.196,0.74,0.335v1.23c-0.72-0.494-1.55-0.634-2.19-0.289	c-0.68,0.373-1.08,1.155-1.06,1.975c-0.01,0.904,0.29,1.742,0.92,2.133c0.56,0.382,1.44,0.382,2.33,0.242v1.025	c-0.35,0.112-0.72,0.177-1.1,0.214c-0.63,0.047-1.33-0.047-1.95-0.382c-0.63-0.326-1.09-0.894-1.35-1.463	c-0.25-0.587-0.34-1.183-0.35-1.752C36.22,23.191,36.87,21.831,38.19,21.254z M34,18.01c0.552,0,1,0.448,1,1s-0.448,1-1,1	s-1-0.448-1-1S33.448,18.01,34,18.01z M34.75,21.01v7h-1.5v-7H34.75z M27,26.175c0.64,0.261,1.42,0.532,2.03,0.59	c0.61,0.068,1.28-0.01,1.67-0.223c0.19-0.116,0.23-0.278,0.23-0.458s-0.036-0.282-0.123-0.417c-0.159-0.246-0.597-0.432-1.287-0.597	c-0.34-0.097-0.71-0.194-1.12-0.416c-0.41-0.184-1.243-0.852-1.081-1.991c0.087-0.609,0.718-1.205,1.601-1.483	c1.029-0.325,2.15-0.164,3.08,0.281V22.7c-0.83-0.426-1.82-0.641-2.66-0.361c-0.25,0.077-0.58,0.251-0.58,0.564	c0,0.751,0.87,0.893,1.2,1c0.34,0.106,0.71,0.203,1.11,0.406c0.4,0.194,1.202,0.678,1.202,1.783c0,1.058-0.522,1.447-0.952,1.621	c-0.89,0.387-1.68,0.319-2.45,0.213c-0.65-0.116-1.28-0.31-1.87-0.677C27,27.249,27,26.175,27,26.175z M20.25,21.012l1.5-0.002	l0.003,2.42c0.014,0.79,0.012,1.651,0.003,2.383c-0.035,0.391,0.402,0.847,0.976,0.917c0.306,0.034,0.534,0.009,0.886-0.14	c0.208-0.082,0.42-0.152,0.632-0.225V21.01l1.5,0.001v6.818h-1.5v-0.236c-0.041,0.022-0.08,0.046-0.12,0.067	c-0.381,0.228-0.992,0.386-1.514,0.343c-0.542-0.035-1.088-0.225-1.533-0.586c-0.442-0.356-0.776-0.915-0.819-1.529	c-0.027-0.88-0.02-1.634-0.011-2.457L20.25,21.012z M9.25,21.01h1.5v0.688c0.37-0.134,0.737-0.274,1.109-0.401	c0.535-0.19,1.206-0.152,1.733,0.141c0.218,0.117,0.409,0.282,0.577,0.469c0.562-0.208,1.123-0.417,1.689-0.611	c0.535-0.19,1.206-0.152,1.733,0.141c0.532,0.286,0.946,0.809,1.093,1.418c0.039,0.152,0.056,0.306,0.065,0.461l0.004,0.317	l0.006,0.625l-0.006,1.25l-0.003,2.5h-1.5l-0.006-4.844c-0.042-0.425-0.519-0.797-1.019-0.661c-0.51,0.135-1.024,0.255-1.537,0.379	c0.034,0.143,0.052,0.287,0.061,0.433l0.004,0.317l0.006,0.625l-0.006,1.25l-0.003,2.5h-1.5l-0.006-4.844	c-0.042-0.426-0.519-0.797-1.019-0.661c-0.489,0.13-0.983,0.245-1.475,0.364v5.14h-1.5C9.25,28.006,9.25,21.01,9.25,21.01z M38.768,33.932c-2.214,1.57-4.688,2.605-7.285,3.277c-2.595,0.663-5.297,0.914-7.986,0.729c-2.688-0.18-5.313-0.836-7.787-1.794	c-2.466-0.99-4.797-2.263-6.857-3.931c-0.107-0.087-0.124-0.245-0.037-0.352c0.077-0.095,0.209-0.119,0.313-0.063l0.014,0.008	c2.249,1.217,4.653,2.149,7.067,2.889c2.433,0.692,4.909,1.187,7.4,1.288c2.485,0.087,4.997-0.107,7.449-0.617	c2.442-0.504,4.905-1.236,7.17-2.279l0.039-0.018c0.251-0.115,0.547-0.006,0.663,0.245C39.035,33.537,38.961,33.796,38.768,33.932z M39.882,36.892c-0.278,0.21-0.556,0.14-0.417-0.21c0.417-1.12,1.32-3.501,0.903-4.061c-0.486-0.63-2.987-0.28-4.098-0.14	c-0.347,0-0.347-0.28-0.069-0.49c0.972-0.7,2.292-0.98,3.404-0.98c1.111,0,2.084,0.21,2.292,0.56	C42.243,31.99,41.757,35.281,39.882,36.892z" />
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
