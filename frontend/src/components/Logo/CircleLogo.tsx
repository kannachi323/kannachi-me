import logo from '@assets/logo.png';
import { Link } from '@tanstack/react-router';
import { GrProjects } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuNewspaper } from "react-icons/lu";
import type { MenuCircleProps } from '@/types/common';


export function MenuCircle({ onClick = () => {}, className = "", } : MenuCircleProps) {
  return (  
      <div 
        onClick={onClick}
        className={`rounded-full ${className}`}
      >
        <img className="w-full h-full bg-center rounded-full" style={{backgroundImage: `url(${logo})`}} />
      </div>
  )
}

export function MenuCircleOptions({ showOptions }: {showOptions : boolean}) {
  return (
    <div className={`
      flex flex-col absolute w-[35%] left-1/2 space-y-8
      transform transition-all duration-300 z-0
      ${showOptions ? '-translate-x-10 opacity-100' : 'opacity-0 translate-x-0'}
    `}>
      <div className='rounded-r-full h-20 w-full bg-black/80 text-4xl pl-40 flex items-center justify-between pr-25
        border-2 cursor-pointer'>
        <Link to='/menu' onClick={() => console.log('bruh')}>Projects</Link>
        <GrProjects />
      </div>
      
      <div className='rounded-r-full h-20 w-full bg-black/80 text-4xl pl-40 flex items-center justify-between pr-25
        border-2 cursor-pointer'>
        <p>Experience</p>
        <FaCode />
        </div>
      <div className='rounded-r-full h-20 w-full bg-black/80 text-4xl pl-40 flex items-center justify-between pr-25
        border-2 cursor-pointer'>
        <p>Resume</p>
        <LuNewspaper />
      </div>
      <div className='rounded-r-full h-20 w-full bg-black/80 text-4xl pl-40 flex items-center justify-between pr-25
        border-2 cursor-pointer'>
       <p>About Me</p>
       <CgProfile />
      </div>
    </div>
  );
}