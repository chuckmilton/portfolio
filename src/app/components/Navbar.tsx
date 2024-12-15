'use client';
import Link from 'next/link';
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
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
         {/* Logo Section */}
        <div className="flex items-center">
          {showVideo ? (
            <video
              src="/videos/cm-logo.mp4" // Replace with the path to your MP4
              autoPlay
              muted
              onEnded={handleVideoEnd}
              className="w-12 h-12"
            />
          ) : (
            <img
              src="/images/cm-logo-static.png" // Replace with your static logo
              alt="CM Static Logo"
              className="w-12 h-12"
            />
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-1 bg-white mb-1.5 transition-transform duration-300 ease-in-out transform origin-center" 
               style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)' }}></div>
          <div className={`w-6 h-1 bg-white mb-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className="w-6 h-1 bg-white transition-transform duration-300 ease-in-out transform origin-center" 
               style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)' }}></div>
        </button>

        {/* Navbar Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-gray-900 flex flex-col space-y-4 items-center p-6"
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
        <ul className="hidden md:flex md:space-x-6 items-center">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/experience', label: 'Experience' },
            { href: '/projects', label: 'Projects' },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-lg ${
                  isActive(link.href) ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out ${
                    isActive(link.href) ? 'w-full' : 'hover:w-full'
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
