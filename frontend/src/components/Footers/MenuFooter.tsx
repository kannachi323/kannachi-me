import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "@tanstack/react-router";


import { ModsBanner } from "../Banners/ModsBanner";
import { ProfileBanner } from "../Banners/ProfileBanner";
import { MenuCircle } from "../Logo/CircleLogo";
import "@/animations/HeartBeat.css"



export function MenuFooter() {
  return (
    <div className="w-full h-[12vh] flex flex-row p-2 bg-black/25 space-x-12 items-center">
      <Link to='/' className="flex flex-row w-1/12 h-2/3 justify-center items-center border-2 rounded-3xl space-x-2">
        <IoArrowBackCircleOutline className="text-3xl mt-0.5" />
        <b className="text-2xl">Back</b>
      </Link>
      <div className="flex flex-row w-1/4 h-full">
        <ModsBanner />
      </div>
      <div className="flex flex-row w-1/4 h-full items-center justify-center">
        <ProfileBanner />
      </div>
      <div className="absolute left-[85%] top-[80%] animate-heartbeat">
        <MenuCircle className="h-64 w-64 z-[99]"/>
      </div>
    </div>
  )
}