'use client'


import Image from 'next/image'
import MultiLayerParallax from "@/animations/MultiLayerParallax"
import PageTransition from '@/animations/PageTransition';


import { useState, useEffect } from 'react';

export default function Play() {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
    
    return (
        <PageTransition className="h-screen w-full relative overflow-hidden" isMounted={isMounted}>
            
            {/* Background Image using Next.js Image component */}
            <Image
                src="/images/canvas.jpeg"
                alt="Background image"
                layout="fill" // Makes the image cover the entire div
                objectFit="cover" // Mimics the 'background-size: cover' behavior
                objectPosition="center" // Mimics the 'background-position: center'
                quality={100} // Optional, ensures image is high quality
                priority // Optional, ensures the image loads quickly
                className="z-[-1]" // Ensures the image is behind all content
            />

            {/* Content inside the PageTransition */}
            <h1 className="text-white text-4xl p-4">This is a fixed background</h1>
            <p className="text-white p-4">Scroll to see the effect</p>
        </PageTransition>
  );

    
}