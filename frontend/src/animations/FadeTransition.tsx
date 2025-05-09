import { motion } from "motion/react";



export function FadeInOut({children, className} : {children: React.ReactNode, className: string}) {

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
      }} 
      animate={{
        opacity: 1,
        transition: { duration : 0.5, delay: 0.3},
      
      }}
    
    >
      {children}
  
    </motion.div>
  )
}