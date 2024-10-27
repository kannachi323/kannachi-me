'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: string;
  isMounted : boolean;
}

export default function PageTransition({ children, className, style, isMounted }: Props) {

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isMounted &&  ( <motion.div
        initial={{ opacity: 0 }} // Start with opacity 0 (blackout)
        animate={{ opacity: 1 }} // Fade to full opacity
        exit= {{ opacity: 0 }}
        
        transition={{
          duration: 0.5, // Duration of fade-in and fade-out effect
          delay: 0.5,
        }}
        className={className}
      >
        {children}
      </motion.div>
      )}
    </AnimatePresence>
  );
}