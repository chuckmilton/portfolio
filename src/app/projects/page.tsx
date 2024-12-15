'use client';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
export default function Projects() {
  const projects = [
    {
      title: 'Rate My CSULB Professors',
      description:
        'Engineered a Chrome extension that integrates professor ratings into CSULB’s registration system, reducing query latency by 50% using GraphQL and LRU caching.',
      tools: ['HTML', 'CSS', 'JavaScript', 'GraphQL'],
      image: '/images/csulb-extension.png',
      demo: 'https://chromewebstore.google.com/detail/Rate%20My%20CSULB%20Professors/hfacilllhlfjdaakkmhmbdkidcibhoco',
      code: 'https://github.com/chuckmilton/Rate-My-CSULB-Professors',
    },
    {
      title: "XR Engineering Club's Official Website",
      description:
        'Built a responsive and user-friendly platform with real-time updates on the club’s mission, officers, and projects for 100+ members.',
      tools: ['Next.js', 'Node.js', 'Tailwind CSS'],
      image: '/images/xrclub-website.png',
      demo: 'https://www.xrengineering.club',
      code: 'https://github.com/chuckmilton/xrec-website',
    },
    {
      title: 'Lingo AI',
      description:
        'Created an AI-powered language trainer using OpenAI APIs and Hume AI for real-time grammar feedback and emotion-based engagement in 50+ languages.',
      tools: ['Flask', 'Next.js', 'OpenAI API', 'Hume AI API', 'Firebase'],
      image: '/images/lingoai.png',
      demo: 'https://lb-motion.vercel.app',
      code: 'https://github.com/JojayD/lb-motion',
    },
    {
      title: 'LingoCub',
      description: 'Developed a Chrome extension that dubs YouTube videos in real-time using the ElevenLabs API. The tool allows users to toggle between original and dubbed audio.',
      tools: ['HTML', 'CSS', 'JavaScript', 'ElevenLabs API'],
      image: '/images/lingocub.png',
      demo: 'https://chromewebstore.google.com/detail/lingocub/ahgefjkdcjegfhffmhghdnbabddffkcd',
      code: 'https://github.com/chuckmilton/lingocub',
    },
    {
        title: 'AR Cooking Simulator',
        description: 'Led the development an interactive augmented reality (AR) cooking game with recipe management, scoring systems, and virtual kitchen tools. Enhanced user engagement with intuitive AR mechanics and visual cues.',
        tools: ['Unity', 'C#', 'AR Foundation', 'XR Interaction Toolkit'],
        image: '/images/arcooking.png',
        demo: 'https://www.xrengineering.club/projects',
      },
  ];

  return (
      <div className="relative min-h-screen bg-gray-900 text-white py-12 px-6">
        {/* Background Glow */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full -top-16 -left-16 blur-3xl"></div>
          <div className="absolute w-72 h-72 bg-teal-400 opacity-20 rounded-full -bottom-12 -right-16 blur-3xl"></div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-6 mt-16 relative">
        <motion.h2
          className="text-5xl font-bold mb-12 text-blue-400 text-center"
          initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slide up
          animate={{ opacity: 1, y: 0 }} // Fade in and slide to original position
          transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth animation
        >
          Projects
        </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tools={project.tools}
                image={project.image}
                demo={project.demo}
                code={project.code}
              />
            ))}
          </div>
        </div>
      </div>
  );
}
