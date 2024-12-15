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
}

export default function ProjectCard({
  title,
  description,
  tools,
  image,
  demo,
  code,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          priority
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-300 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition"
            >
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
