'use client'

import { motion } from 'framer-motion';

interface Props {
    children : React.ReactNode
    className? : string;
}

export default function ZoomInHover({children, className} : Props) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className={className}
        >
            {children}
        </motion.div>
    )

}