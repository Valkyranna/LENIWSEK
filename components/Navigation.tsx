'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Patreon Icon
const PatreonIcon = ({ size = 16, className = "" }: { size?: number | string, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M0 .6v23.4h3.8V.6H0zm15.6 0c-4.2 0-7.6 3.4-7.6 7.6s3.4 7.6 7.6 7.6 7.6-3.4 7.6-7.6S19.8.6 15.6.6z" />
  </svg>
);

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Close mobile menu when scrolling
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: 'MUSIC', path: '/music' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const isHome = pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${scrolled || !isHome ? 'bg-[#050505]/90 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link
          href="/"
          onClick={handleNavClick}
          className="text-2xl font-bold tracking-[0.3em] hover:text-white transition-colors text-neutral-300 z-50 mix-blend-difference"
        >
          LENIWSEK
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-light tracking-[0.2em] transition-colors duration-300 ${pathname === link.path ? 'text-white border-b border-white pb-1' : 'text-neutral-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.patreon.com/leniwsek"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-light tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-300"
          >
            SUPPORT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>

          {/* Navigation Items */}
          <div className="flex flex-col items-center space-y-6">
            <Link
              href="/"
              onClick={handleNavClick}
              className={`text-4xl font-light tracking-widest transition-all duration-300 ${pathname === '/' ? 'text-white scale-110' : 'text-neutral-400 hover:text-white hover:scale-105'}`}
            >
              HOME
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={handleNavClick}
                className={`text-4xl font-light tracking-widest transition-all duration-300 ${pathname === link.path ? 'text-white scale-110' : 'text-neutral-400 hover:text-white hover:scale-105'}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.patreon.com/leniwsek"
              target="_blank"
              rel="noreferrer"
              onClick={handleNavClick}
              className="text-4xl font-light tracking-widest text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              SUPPORT
            </a>
          </div>

          {/* Bottom indicator */}
          <div className="absolute bottom-8 text-xs uppercase tracking-widest text-neutral-600">
            Swipe down to close
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
