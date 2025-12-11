'use client';
// @ts-expect-error: VerticalTimeline type mismatch, safe to ignore for now
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { MdWork, MdEngineering, MdShoppingCart, MdSchool } from 'react-icons/md';
import Image from 'next/image';

export default function Experience() {
    const experiences = [
      {
        company: 'Amazon',
        logo: '/logos/amazon-logo.png',
        role: 'Incoming Software Development Engineer',
        duration: 'August 2026',
        description: [
          'Accepted return offer to join Amazon as a Software Development Engineer following successful internship performance.',
        ],
        icon: <MdShoppingCart />,
        iconColor: '#FF9900',
      },
      {
        company: 'Associated Students Inc. at CSULB',
        logo: '/logos/asi-logo.jpeg',
        role: 'Software Developer',
        duration: 'Aug 2025 - Present',
        description: [
          'Replaced a $2,300/year third-party magazine host with an in-house viewer and uploads dashboard (React, Node.js, Cloudflare R2, MongoDB, CloudConvert API), cutting costs to $0 and serving thousands of users.',
          'Maintain and develop ASI web platforms for 40,000+ students with accessibility, reliability, and performance goals.',
          'Ship responsive features for student programs and events that increase engagement across campus.',
        ],
        icon: <MdSchool />,
        iconColor: '#8B5CF6',
      },
      {
        company: 'Amazon',
        logo: '/logos/amazon-logo.png',
        role: 'Software Development Engineer Intern',
        duration: 'May 2025 - Aug 2025',
        description: [
          'Built an AWS-native Java service to correct retail inventory misclassification in fulfillment centers, reducing cost data inaccuracies by 80% globally and adding CloudWatch metrics and monitoring.',
          'Collaborated with SDE II engineers to resolve a Sev-2 affecting 1,700+ transactions by shipping a hotfix that restored system stability and data integrity.',
          'Authored internal documentation that improved onboarding and knowledge sharing across engineering and accounting teams.'
        ],
        icon: <MdShoppingCart />,
        iconColor: '#FF9900',
      },
      {
        company: 'DreamWay Media',
        logo: '/logos/dreamway.png',
        role: 'Software Engineer Intern',
        duration: 'Sept 2024 - Dec 2024',
        description: [
          'Converted Figma designs into responsive PHP/React pages with pixel-accurate UI.',
          'Refactored e-commerce web apps, boosting performance scores by 30%.',
          'Containerized development with Docker for a 5-person team, speeding onboarding and reducing environment issues.'
        ],
        icon: <FaLaptopCode />,
        iconColor: '#60A5FA',
      },
      {
        company: 'Association for Computing Machinery',
        logo: '/logos/acm.png',
        role: 'Lead Full-Stack Developer',
        duration: 'Aug 2024 - Aug 2025',
        description: [
          'Built the ACM 2024 chapter website (currently used today), centralizing event updates, blog posts, and resources for 500+ members.',
          'Enhanced the BeachHacks hackathon platform by integrating user-driven features and refining UI components, helping the event surpass 300+ applications (50% above capacity).',
        ],
        icon: <MdWork />,
        iconColor: '#34D399',
      },
      {
        company: 'XR Engineering Club',
        logo: '/logos/xrclub.png',
        role: 'Full-Stack Developer & Project Lead',
        duration: 'Sept 2023 - Aug 2025',
        description: [
          'Developed and maintained the club website using Next.js, Supabase, GCP, and TailwindCSS, automating event updates and email notifications for 100+ members.',
          'Led the development of an AR Cooking Simulator using Unity and AR frameworks, showcased at the Senior Project Expo and selected by the CSULB ISPACE Lab for further collaboration.',
        ],
        icon: <MdEngineering />,
        iconColor: '#FBBF24',
      },
    ];
  
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          
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
  
          {/* Experience Content */}
          <div className="container mx-auto py-12 px-6 mt-20 relative">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text pb-2">
                Experience
              </h2>
            </motion.div>
  
            <VerticalTimeline lineColor="#475569">
              {experiences.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  contentStyle={{
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                    color: '#f1f5f9',
                    borderRadius: '16px',
                    border: '1px solid #334155',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                  }}
                  contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
                  date={<span className="text-base md:text-lg font-semibold text-cyan-400">{exp.duration}</span>}
                  iconStyle={{
                    background: exp.iconColor,
                    color: '#fff',
                    boxShadow: `0 0 0 4px #0f172a, 0 0 0 8px ${exp.iconColor}40`,
                  }}
                  icon={exp.icon}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4 pb-4 border-b border-slate-700">
                      <div className="relative">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={56}
                          height={56}
                          className="rounded-full mr-4 border-2 border-slate-700 object-cover"
                          style={{ width: '56px', height: '56px' }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                          {exp.company}
                        </h3>
                        <h4 className="text-slate-300 font-medium mt-1">{exp.role}</h4>
                      </div>
                    </div>
                    <ul className="space-y-3 text-slate-300 leading-relaxed">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1.5 text-xs">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
    );
  }