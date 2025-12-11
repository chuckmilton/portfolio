'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    // Check if the animation has been played
    const hasPlayed = sessionStorage.getItem('cm-logo-shown');
    if (hasPlayed) {
      setShowVideo(false);
    }
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
    sessionStorage.setItem('cm-logo-shown', 'true'); // Mark as played
  };
  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 fixed w-full top-0 z-50 border-b border-slate-800 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
         {/* Logo Section */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          {showVideo ? (
            <video
              src="/videos/cm-logo.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnd}
              onError={() => setShowVideo(false)}
              className="w-12 h-12"
            />
          ) : (
            <Image
              src="/images/cm-logo-static.png"
              alt="Charles Milton Logo"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
          )}
        </Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none relative w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          suppressHydrationWarning
        >
          <div className="w-6 relative flex flex-col items-center justify-center">
            <span 
              className="w-full h-0.5 bg-white absolute transition-all duration-300 ease-in-out"
              style={{
                transform: isOpen ? 'rotate(45deg)' : 'translateY(-8px)',
              }}
            ></span>
            <span 
              className="w-full h-0.5 bg-white transition-all duration-300 ease-in-out"
              style={{
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? 'scale(0)' : 'scale(1)',
              }}
            ></span>
            <span 
              className="w-full h-0.5 bg-white absolute transition-all duration-300 ease-in-out"
              style={{
                transform: isOpen ? 'rotate(-45deg)' : 'translateY(8px)',
              }}
            ></span>
          </div>
        </button>

        {/* Navbar Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 flex flex-col space-y-4 items-center p-6 shadow-xl"
            >
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/experience', label: 'Experience' },
                { href: '/projects', label: 'Projects' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`relative text-lg ${
                      isActive(link.href)
                        ? 'text-blue-400'
                        : 'hover:text-blue-400'
                    }`}
                  >
                    {link.label}
                    {/* Hover Animation */}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out ${
                        isActive(link.href) ? 'w-full' : 'hover:w-full'
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:space-x-2 items-center">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/experience', label: 'Experience' },
            { href: '/projects', label: 'Projects' },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(link.href) 
                    ? 'text-white bg-blue-600 shadow-lg shadow-blue-500/50' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
