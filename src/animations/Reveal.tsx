'use client';

import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  activate: boolean;
  direction: 'x' | 'y';
  start: number;
  end: number;
}

export default function Reveal({ children, activate, direction, start, end }: RevealProps) {
  const initial = direction === 'x' ? { x: start, opacity: 0} : { y: start, opacity: 0};
  const animate = direction === 'x' ? { x: end, opacity: 1} : { y: end, opacity: 1};
  return (
    <div className="w-full">
      <motion.div
        initial={initial} // Start off-screen to the left with opacity 0
        animate={activate ? animate : initial} // Animate to the visible position
        transition={{ duration: 0.5, ease: 'easeOut' }} // Control duration and easing of the animation
        style={{ position: 'relative', overflow: 'hidden', width: '100%' }}
      >
        {children}
      </motion.div>

    </div>
    
  );
}
