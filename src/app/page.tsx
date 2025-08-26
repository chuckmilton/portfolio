'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full -top-12 -left-16 blur-3xl"></div>
        <div className="absolute w-72 h-72 bg-teal-400 opacity-20 rounded-full -bottom-12 -right-16 blur-3xl"></div>
      </motion.div>

      {/* Content */}
      <div className="text-center px-6">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Hi, I&#39;m <span className="text-blue-400">Charles Milton</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          CS Student at CSULB | Building Web Apps & Machine Learning Solutions
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-500 transition-transform transform hover:scale-105 shadow-md"
          >
            View My Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-12 flex justify-center gap-6 text-3xl z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/charles-milton-0b679427b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition duration-300 z-10"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/chuckmilton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 transition duration-300 z-10"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:charlesmiltoncs@gmail.com"
            className="text-red-400 hover:text-red-500 transition duration-300 z-10"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
