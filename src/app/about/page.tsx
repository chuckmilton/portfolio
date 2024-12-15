'use client';
import * as FramerMotion from 'framer-motion';
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPhp,
} from 'react-icons/si';

const { motion } = FramerMotion;

export default function About() {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-400" /> },
    { name: 'PHP', icon: <SiPhp className="text-violet-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Flask', icon: <SiFlask className="text-gray-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-300" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
    { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-yellow-500" /> },
    { name: 'Pandas', icon: <SiPandas className="text-white" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
  ];

  return (
      <div className="relative min-h-screen flex items-center bg-gray-900 text-white overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full -top-16 -left-16 blur-3xl"></div>
          <div className="absolute w-72 h-72 bg-teal-400 opacity-20 rounded-full -bottom-12 -right-16 blur-3xl"></div>
        </motion.div>

        {/* About Content */}
        <div className="container mx-auto py-12 px-6 flex flex-col lg:flex-row items-center gap-12 mt-16 lg:mt-0 relative">
          {/* Left Section: Profile Picture */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <img
              src="/images/profile.jpg"
              alt="Charles Milton"
              className="w-64 h-64 rounded-full md:rounded-full  shadow-lg object-cover md:w-60 md:h-60 lg:w-full lg:h-full lg:rounded-lg"
            />
          </motion.div>

          {/* Right Section: About Content */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h2 className="text-5xl font-bold mb-6 text-blue-400 text-center lg:text-left">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Hello! I’m <span className="text-blue-300 font-semibold">Charles Milton</span>, a passionate{' '}
              <span className="text-teal-300 font-semibold">Computer Science student</span> with a focus on building
              innovative <span className="text-blue-400">AI-driven solutions</span> and <span className="text-red-400"> modern web applications</span>.
            </p>

            <p className="text-gray-400 mb-8 text-lg">
              I enjoy combining creativity with technology to solve real-world problems. My current focus
              is on <span className="text-yellow-400">Machine Learning</span>, <span className="text-green-400">Software Development</span>, and building
              dynamic applications that have a positive impact.
            </p>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <h3 className="text-2xl font-bold text-gray-200 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    {skill.icon}
                    <span className="text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
  );
}
