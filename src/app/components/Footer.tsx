'use client';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamically import CurrentYear without SSR
const CurrentYear = dynamic(() => import('./CurrentYear'), { ssr: false });

export default function Footer() {
  return (
    <footer className="relative bg-transparent border-t border-slate-800 text-slate-300 py-8 mt-0">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      <div className="relative container mx-auto flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between px-6">
        {/* Name & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2">
            Charles Milton
          </h2>
          <p className="text-sm text-slate-400">
            &copy; <CurrentYear /> All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/charles-milton-0b679427b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl text-slate-400 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://github.com/chuckmilton"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl text-slate-400 hover:text-white transition-colors" />
          </a>
          <a
            href="mailto:charlesmiltoncs@gmail.com"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-red-400 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope className="text-xl text-slate-400 hover:text-red-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
