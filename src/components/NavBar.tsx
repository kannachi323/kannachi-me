import Image from 'next/image';
import PFP_TOP from '@public/images/pfp_top.jpeg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";


import ZoomInHover from '@/animations/ZoomIn';

export function NavBar() {
    return (
     
        <div className="flex flex-row justify-between items-center h-[10vh] w-full border-b-4 border-white">
          
          <Profile />

          <h1 className="text-3xl font-bold w-1/2 text-center"> web developer/software engineer </h1>
    
          <SocialMedia />
        
        </div>


    )
}

export function NavBarBottom() {
  return (
      <div className="flex flex-row justify-between items-center h-[10vh] w-full border-t-2 border-t-[#41a1de]">
        <div className="text-6xl w-1/4 ml-3 text-start">Back</div>
        <Profile />
      
        <SocialMedia />
    </div>

  )
}





function Profile() {
  return (
    <div className="flex flex-row justify-start items-start h-full w-1/4">
      <Image src={PFP_TOP} alt="my pfp image from github" className="h-full w-1/5 mx-2 p-1"/>
      <div className="flex flex-col justify-start items-start">
        <p className="text-2xl">matthew chen</p>
        <span className="text-sm"> 
          <p className="text-[#d3d2d2] text-sm">Computer Science B.S.</p>
          <p className="text-[#d3d2d2]">University of California, Santa Cruz</p>
        </span>
      </div>
    
    </div>
  )
}

function SocialMedia() {
  return (
    <div className="flex flex-col h-full w-1/4">
      <span className="flex flex-row justify-end items-start h-1/2 w-full my-1">
        <p className="text-xl">Currently working on --- </p>
      </span>
      <span className="flex flex-row justify-end items-end h-1/2 w-full">
      <ZoomInHover>
        <FaGithub className="h-10 w-10 mr-2 mb-1"/>
      </ZoomInHover>
      <ZoomInHover>
        <FaLinkedin className="h-10 w-10 mr-2 mb-1" />
      </ZoomInHover>
      <ZoomInHover>
        <FaInstagram className="h-10 w-10 mr-2 mb-1" />
      </ZoomInHover>
      <ZoomInHover>
        <RiMailLine className="h-10 w-10 mb-1" />
      </ZoomInHover>
        
        
        
        
      </span>
      
    </div>
    

  )
}