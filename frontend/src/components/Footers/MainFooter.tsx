import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export function MainFooter() {
  return (
    <div className="w-full h-[12vh] flex flex-row p-2 bg-black/25">
      <SocialChannels />
      
    </div>
  )
}


export function SocialChannels() {
  const size = 42;
  return (
    <>
      <FaLinkedin size={size}/>
      <FaGithub size={size}/>
      <FaInstagram size={size}/>
      <FaFacebook size={size}/>
    </>
  )
}