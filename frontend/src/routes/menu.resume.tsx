import { createFileRoute, Link } from '@tanstack/react-router'
import { AiOutlineClose } from "react-icons/ai";


import { ProfileBanner } from '@/components/Banners/ProfileBanner'
import resume from "@assets/matthew_chen_resume_v2.pdf"

export const Route = createFileRoute('/menu/resume')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="absolute inset-0 z-[99999] w-screen h-screen bg-black/85 p-2">
      <div className="absolute flex flex-row">
        <ProfileBanner />
      </div>
      
      <iframe className="absolute inset-0 m-auto h-[90%] w-1/2" src={resume} />

      <Link to={'/menu'}>
        <AiOutlineClose className="text-5xl absolute right-0 mr-2"/>
      </Link>
      
    </div>
  )
}
