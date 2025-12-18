'use client';

import React from 'react';
import { Instagram } from 'lucide-react';

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
        <path d="M0 19h8.73L24 5H15.27L0 19z" />
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
        <footer className="flex flex-col items-center justify-center bg-black border-t border-neutral-900 relative py-16">
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
                            { icon: XIcon, href: "https://x.com/leniwsek", label: "X" },
                            { icon: BandcampIcon, href: "https://bandcamp.com/leniwsek", label: "Bandcamp" },
                            { icon: SoundCloudIcon, href: "https://soundcloud.com/leniwsek", label: "SoundCloud" },
                            { icon: AppleIcon, href: "https://music.apple.com/us/album/introduction-theres-always-time-single/1858365351?l=cs", label: "Apple Music", size: 32 }
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
