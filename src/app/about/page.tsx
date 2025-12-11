'use client';
import * as FramerMotion from 'framer-motion';
import Image from 'next/image';
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
  SiNestjs,
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
    { name: 'React Native', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 -z-10"></div>
      
      {/* Animated Background (behind, ignore clicks) */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      >
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-16 -left-16 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full -bottom-12 -right-16 blur-3xl"></div>
        <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </motion.div>

      {/* About Content Container (pushed down to avoid nav overlap) */}
      <div className="relative container mx-auto py-12 px-6 pt-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Profile Picture */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full lg:rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Image
                src="/images/cropped-me.png"
                alt="Charles Milton"
                width={320}
                height={320}
                className="relative w-72 h-72 rounded-full shadow-2xl object-cover border-4 border-slate-800 lg:w-full lg:h-full lg:rounded-2xl"
                sizes="(min-width: 1024px) 33vw, 288px"
                priority
              />
            </div>
          </motion.div>

          {/* Right: About Content */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text text-center lg:text-left mt-20">
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <span className="group-hover:scale-110 transition-transform">{skill.icon}</span>
                    <span className="text-slate-200 font-medium">{skill.name}</span>
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-12 text-center">Testimonials</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-500">
              <div className="relative inline-block">
                <Image
                  src="/images/vrej-sanati.jpeg"
                  alt="Vrej Sanati"
                  width={96}
                  height={96}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-slate-700 group-hover:border-blue-500/50 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Vrej Sanati</h3>
              <p className="text-slate-400 text-sm mt-2 font-medium">
                Senior Front-End Web Application Developer at Munchkin
              </p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
              <p className="mt-6 text-slate-300 text-base leading-relaxed select-text">
                “Charles is a very intelligent, hardworking and disciplined individual with extraordinary mannerisms and professionalism.
                He works diligently and completes projects quickly without wasting time, all while remaining humble. Charles is eager to
                learn, explore new skills, and take on new responsibilities. He is a pleasure to work with and a great asset to any company that hires him.”
              </p>
            </div>

            {/* Harish Fulara Testimonial */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/50 hover:scale-[1.02] transition-all duration-500">
              <div className="relative inline-block">
                <Image
                  src="/images/harish-fulara.jpeg"
                  alt="Harish Fulara"
                  width={96}
                  height={96}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-slate-700 group-hover:border-orange-500/50 transition-all duration-300"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Harish Fulara</h3>
              <p className="text-slate-400 text-sm mt-2 font-medium">
                Senior Software Development Engineer at Amazon
              </p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
              {/* Scrollable content to keep the card compact */}
              <div className="mt-6 text-slate-300 text-base leading-relaxed select-text max-h-60 md:max-h-72 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-orange-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-orange-400">
                <p>
                  “I had the pleasure of working with Charles during his internship at Amazon, where he quickly made a strong impact as an SDE Intern.
                </p>
                <p className="mt-3">
                  Charles contributed to a backend Java service aimed at fixing retail inventory misclassification in fulfillment centers—a project with direct financial implications. He not only delivered his work ahead of schedule but also integrated improvements that reduced cost-data inaccuracies by ~80% across multiple regions. This work meaningfully improved financial reporting accuracy for our accounting teams.
                </p>
                <p className="mt-3">
                  Beyond planned project work, Charles also rose to the occasion during a high-severity incident. He helped deliver a targeted hotfix that restored stability and data integrity, resolving an issue that had affected over 1,700 transactions. His ability to stay calm under pressure and collaborate effectively with peers made a real difference.
                </p>
                <p className="mt-3">
                  On the engineering side, Charles gained strong experience with Java backend development, testing practices, CI/CD pipelines, and AWS fundamentals. He also showed real initiative in improving observability by setting up CloudWatch metrics, dashboards, and alarms that improved our monitoring. Just as importantly, he contributed documentation that made life easier for both current team members and future interns.
                </p>
                <p className="mt-3">
                  What stood out most about Charles was not just his technical ability but his collaborative spirit. He actively sought feedback, wrote clear and thoughtful PRs, and consistently helped the team move faster with his proactive communication.
                </p>
                <p className="mt-3">
                  I’m confident that Charles will excel in any engineering role he takes on. His combination of technical rigor, ownership, and teamwork makes him a valuable asset to any team.”
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
