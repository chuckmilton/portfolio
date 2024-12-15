'use client';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamically import CurrentYear without SSR
const CurrentYear = dynamic(() => import('./CurrentYear'), { ssr: false });

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between px-6">
        {/* Name & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-400 mb-1">Charles Milton</h2>
          <p className="text-sm">
            &copy; <CurrentYear /> All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/charles-milton-0b679427b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/chuckmilton"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:charlesmiltoncs@gmail.com"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
