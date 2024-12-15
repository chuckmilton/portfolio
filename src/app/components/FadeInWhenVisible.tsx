'use client';
import { motion } from 'framer-motion';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
}

export default function FadeInWhenVisible({ children }: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Only trigger once
      transition={{ duration: 0.5, ease: 'easeOut' }}
      variants={{
        hidden: { opacity: 0, y: 20 }, // Start hidden with slide-up effect
        visible: { opacity: 1, y: 0 }, // Fade in and slide to position
      }}
    >
      {children}
    </motion.div>
  );
}
