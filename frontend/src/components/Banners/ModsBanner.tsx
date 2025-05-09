import { FaTools } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { LuNewspaper } from "react-icons/lu";
import { BsChatDots } from "react-icons/bs";
import { Link } from "@tanstack/react-router";




export function ModsBanner() {

  return (
    <>
      <Link className="h-full w-1/4 border-t-2 bg-gray-800 flex flex-col justify-center items-center gap-2"
        to='/menu/skills'
      >
        <FaTools className="text-4xl"/>
        <p className="text-sm">Skills</p>
      </Link>
      <Link className="h-full w-1/4 border-t-2 bg-gray-800 flex flex-col justify-center items-center gap-2"
        to='/menu/social'
      >
        <BsChatDots className="text-4xl" />
        <p className="text-sm">Social</p>
      </Link>
      <div className="h-full w-1/4 border-t-2 bg-gray-800 flex flex-col justify-center items-center gap-2">
        <ImStatsDots className="text-4xl"/>
        <p className="text-sm">Stats</p>
      </div>
      <Link className="h-full w-1/4 border-t-2 bg-gray-800 flex flex-col justify-center items-center gap-2"
        to='/menu/resume'
      >
        <LuNewspaper className="text-4xl"/>
        <p className="text-sm">Resume</p>
      </Link>
    </>
  )
}