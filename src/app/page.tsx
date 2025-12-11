'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiAmazon } from 'react-icons/si';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-16 -left-16 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full -bottom-12 -right-16 blur-3xl"></div>
        <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </motion.div>

      {/* Content */}
      <div className="relative text-center px-6 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
              Charles Milton
            </span>
          </h1>
        </motion.div>

        {/* Subheading with Badge */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full backdrop-blur-sm">
            <SiAmazon className="text-orange-400 text-xl" />
            <span className="text-orange-300 font-semibold text-sm md:text-base">Incoming SDE at Amazon</span>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-light">
            CS Student at CSULB
          </p>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/projects"
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white text-sm sm:text-base font-semibold overflow-hidden shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Projects
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="/images/Charles_Milton_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-slate-800 border-2 border-slate-600 rounded-xl text-white text-sm sm:text-base font-semibold hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              View My Resume
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/charles-milton-0b679427b/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-500 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl text-slate-400 group-hover:text-blue-400 transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/chuckmilton"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-400 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl text-slate-400 group-hover:text-white transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              GitHub
            </span>
          </a>
          <a
            href="mailto:charlesmiltoncs@gmail.com"
            className="group relative p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-red-400 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl text-slate-400 group-hover:text-red-400 transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Email
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
