import { motion } from 'framer-motion';

interface SlideMotionProps {
  children: React.ReactNode;
  enable: boolean;
  direction?: 'left' | 'right';
  className?: string;
  offset: number;
}

export function SlideMotion({
  children,
  enable,
  direction = 'left',
  className = '',
  offset = 0,
}: SlideMotionProps) {
  const fromX = direction === 'left' ? -offset : offset;

  return (
    <motion.div
      className={className}
      initial={{ x: 0 }}
      animate={enable ? { x: fromX } : { x: 0 }}
      exit={{
        x: 0, // Ensure it resets to the original position when it leaves
      }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
