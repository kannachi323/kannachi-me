import Image from 'next/image';
import PFP_TOP from '@public/images/pfp_top.jpeg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";


export default function NavBar() {
    return (
        <div className="flex flex-row justify-between items-center h-[10vh] w-full bg-red-500">
          
          <Profile />
          <h1 className="text-5xl">matthew chen</h1>
          <SocialMedia />
        
        </div>
    )
}





function Profile() {
  return (
    <div className="flex flex-row justify-start items-start h-full w-1/4">
      <Image src={PFP_TOP} alt="my pfp image from github" className="h-full w-1/5 mx-2 py-1"/>
      <div className="flex flex-col justify-start items-start">
        <p className="text-3xl">kannachi323</p>
        <span> 
          <p>CS @ucsc</p>
          <p>Baskin Engineering</p>
        </span>
      </div>
    
    </div>
  )
}

function SocialMedia() {
  return (
    <div className="flex flex-col h-full w-1/4 ">
      <span className="flex flex-row justify-end items-start h-1/2 w-full my-1">
        <p className="text-xl">Currently working on --- </p>
      </span>
      <span className="flex flex-row justify-end items-end h-1/2 w-full">
        <FaGithub className="h-10 w-10 mx-2"/>
        <FaLinkedin className="h-10 w-10 mx-2" />
        <FaInstagram className="h-10 w-10 mx-2" />
        <RiMailLine className="h-10 w-10 mx-2" />
      </span>
      
    </div>
    

  )
}