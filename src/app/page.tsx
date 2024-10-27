'use client'
import { useState, useEffect } from 'react';
import PFP_MAIN from "@public/images/pfp_main.jpeg";
import "./animations.css"
import Link from "next/link"

import ZoomInHover from '@/animations/ZoomIn';
import PageTransition from '@/animations/PageTransition';


export default function Home() {
  const [showOptions, setShowOptions] = useState(false)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <PageTransition className="flex flex-col justify-center items-center h-[90vh] w-full" isMounted={isMounted}>
      
  
      {/* Profile Image */}

      <ZoomInHover className={`${showOptions ? 'absolute z-[5] left-[20vw]' : 'relative' } `}>
        <div
          className="flex flex-col rounded-full items-center h-[70vh] w-[70vh] border-4 border-white animate-metronome"
          style={{
            backgroundImage: `url(${PFP_MAIN.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={() => setShowOptions(!showOptions)}  // Click to toggle the shift
        />
      </ZoomInHover>

    
      {/* Conditionally render the buttons */}
      <div className={`flex flex-col items-start justify-evenly h-[60vh] w-1/2 transition-opacity duration-700 ease-in-out absolute left-[30vw]
        ${showOptions ? 'opacity-100 visible' : 'opacity-0 invisible'} z-0`}>
        
        <ZoomInHover className="w-full">
          <Link href='/play' className="bg-gradient-to-r from-purple-600 to-purple-800 w-full h-[10vh] flex items-center justify-end relative text-white text-4xl font-bold rounded-r-[30px] shadow-md custom-cursor">
            <span className="absolute left-[60%]">Play</span>
          </Link>
        </ZoomInHover>

        <ZoomInHover className="w-full">
          <Link href='/projects' className="bg-gradient-to-r from-purple-600 to-purple-800 w-full h-[10vh] flex items-center justify-center relative text-white text-4xl font-bold rounded-r-[30px] shadow-md custom-cursor">
            <span className="absolute left-[60%]">Projects</span>
          </Link>
        </ZoomInHover>

        <ZoomInHover className="w-full">
          <Link href='/skills' className="bg-gradient-to-r from-purple-600 to-purple-800 w-full h-[10vh] flex items-center justify-center relative text-white text-4xl font-bold rounded-r-[30px] shadow-md custom-cursor">
            <span className="absolute left-[60%]">Skills</span>
          </Link>
        </ZoomInHover>

        <ZoomInHover className="w-full">
          <Link href='/about-me' className="bg-gradient-to-r from-purple-600 to-purple-800 w-full h-[10vh] flex items-center justify-center relative text-white text-4xl font-bold rounded-r-[30px] shadow-md custom-cursor">
            <span className="absolute left-[59.5%]">About Me</span>
          </Link>
        </ZoomInHover>
      </div>
    </PageTransition>
  );
}
