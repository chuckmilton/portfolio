'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  image: string;
  demo?: string;
  code?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  tools,
  image,
  demo,
  code,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 flex flex-col h-full"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          priority
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-3 group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
          {title}
        </h3>
        <p className="text-slate-300 mb-4 flex-grow leading-relaxed text-sm">
          {description}
        </p>

        {/* Tools and Buttons */}
        <div className="mt-auto space-y-4">
          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1.5 rounded-full border border-slate-600 backdrop-blur-sm font-medium hover:bg-slate-600/50 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
              >
                <FaExternalLinkAlt className="text-xs" /> 
                <span>Live Demo</span>
              </a>
            )}
            {code && (
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-all duration-300 text-sm font-semibold border border-slate-600 hover:border-slate-500 hover:scale-105"
              >
                <FaGithub className="text-sm" /> 
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
