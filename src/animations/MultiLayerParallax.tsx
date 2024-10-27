import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center">
            {/* Parallax text with the highest z-index */}
            <motion.h1 style={{ y: textY }} className="font-bold text-white text-7xl md:text-9xl relative z-10">
                Welcome
            </motion.h1>

            {/* Parallax background (Full layer) */}
            <motion.div
                className="absolute inset-0 z-0"  // Adjusted z-index to ensure it is layered properly
                style={{
                    backgroundImage: `url(/images/zenith-full.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY
                }}
            />

            {/* Static background (Bottom layer) */}
            <div
                className="absolute inset-0 z-20"  // Placed above the full parallax background but below the text
                style={{
                    backgroundImage: `url(/images/zenith-bottom.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
}
