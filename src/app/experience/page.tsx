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
        company: 'Associated Students Inc. at CSULB',
        logo: '/logos/asi-logo.jpeg',
        role: 'Software Developer',
        duration: 'Aug 2025 - Present',
        description: [
          'Replaced a $500/month third-party magazine host with an in-house viewer and uploads dashboard (React, Node.js, Cloudflare R2, MongoDB, GridFS), cutting cost to $0 ($6k/yr) and serving thousands of users.',
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
        <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full -top-16 -left-16 blur-3xl"></div>
            <div className="absolute w-72 h-72 bg-teal-400 opacity-20 rounded-full -bottom-12 -right-16 blur-3xl"></div>
          </motion.div>
  
          {/* Experience Content */}
          <div className="container mx-auto py-12 px-6 mt-16 relative">
            <motion.h2
              className="text-5xl font-bold mb-12 text-blue-400 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Experience
            </motion.h2>
  
            <VerticalTimeline lineColor="#4B5563">
              {experiences.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  contentStyle={{
                    background: '#1F2937',
                    color: '#E5E7EB',
                    borderRadius: '8px',
                  }}
                  contentArrowStyle={{ borderRight: '7px solid #1F2937' }}
                  date={<span className="text-lg md:text-xl font-semibold text-blue-300">{exp.duration}</span>}
                  iconStyle={{
                    background: exp.iconColor.replace('bg-', '#'),
                    color: '#fff',
                  }}
                  icon={exp.icon}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex items-center mb-4">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={50}
                        height={50}
                        priority
                        className="rounded-full mr-4"
                        style={{ width: '50px', height: '50px' }}
                      />
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-300">
                          {exp.company}
                        </h3>
                        <h4 className="text-gray-400 italic">{exp.role}</h4>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
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