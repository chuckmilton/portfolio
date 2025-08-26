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
  SiSupabase,
  SiSharp,
  SiExpress,
  SiDocker,
  SiGithubactions,
  SiPostman,
  SiJunit5,
  SiAmazon,
  SiAmazondynamodb,
  SiAmazons3,
  SiAmazoncloudwatch,
  SiGooglecloud,
  SiFirebase,
  SiNeo4J,
  SiRedis,
  SiGraphql,
} from 'react-icons/si';

const { motion } = FramerMotion;

export default function About() {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'C#', icon: <SiSharp className="text-purple-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-400" /> },
    { name: 'PHP', icon: <SiPhp className="text-violet-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
    { name: 'Flask', icon: <SiFlask className="text-gray-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-300" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
    { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-yellow-500" /> },
    { name: 'Pandas', icon: <SiPandas className="text-white" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'Supabase', icon: <SiSupabase className="text-green-500" /> },
    { name: 'Neo4j', icon: <SiNeo4J className="text-teal-400" /> },
    { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
    { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
    { name: 'AWS', icon: <SiAmazon className="text-orange-400" /> },
    { name: 'DynamoDB', icon: <SiAmazondynamodb className="text-blue-500" /> },
    { name: 'S3', icon: <SiAmazons3 className="text-yellow-500" /> },
    { name: 'CloudWatch', icon: <SiAmazoncloudwatch className="text-green-500" /> },
    { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-500" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-orange-400" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },  
    { name: 'CI/CD', icon: <SiGithubactions className="text-gray-300" /> },
    { name: 'JUnit', icon: <SiJunit5 className="text-red-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
];
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background (behind, ignore clicks) */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      >
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full -top-16 -left-16 blur-3xl"></div>
        <div className="absolute w-72 h-72 bg-teal-400 opacity-20 rounded-full -bottom-12 -right-16 blur-3xl"></div>
      </motion.div>

      {/* About Content Container (pushed down to avoid nav overlap) */}
      <div className="relative container mx-auto py-12 px-6 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Profile Picture */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <img
              src="/images/cropped-me.png"
              alt="Charles Milton"
              className="w-64 h-64 rounded-full shadow-lg object-cover md:w-60 md:h-60 lg:w-full lg:h-full lg:rounded-lg"
            />
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h2 className="text-5xl font-bold mb-6 text-blue-400 text-center lg:text-left">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Hello! I’m <span className="text-blue-300 font-semibold">Charles Milton</span>, a passionate{' '}
              <span className="text-teal-300 font-semibold">Computer Science student</span> with a focus on building
              innovative <span className="text-blue-400">AI-driven solutions</span> and
              <span className="text-red-400"> modern web applications</span>.
            </p>
            <p className="text-gray-400 mb-8 text-lg">
              I enjoy combining creativity with technology to solve real-world problems. My current focus is on{' '}
              <span className="text-yellow-400">Machine Learning</span>, <span className="text-green-400">Software Development</span>, and building dynamic applications that have a positive impact.
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

      {/* Testimonials Section */}
      <div className="container w-full mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Testimonials</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 text-center shadow-md hover:scale-105 transition-transform duration-300">
              <img
                src="/images/vrej-sanati.svg"
                alt="Vrej Sanati"
                className="w-20 h-20 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-white">Vrej Sanati</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Senior Front-End Web Application Developer at Munchkin
              </p>
              <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed select-text">
                “Charles is a very intelligent, hardworking and disciplined individual with extraordinary mannerisms and professionalism.
                He works diligently and completes projects quickly without wasting time, all while remaining humble. Charles is eager to
                learn, explore new skills, and take on new responsibilities. He is a pleasure to work with and a great asset to any company that hires him.”
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
