import { createFileRoute, Outlet } from '@tanstack/react-router'

import { MenuFooter } from '@/components/Footers/MenuFooter';
import { MenuHeader } from '@/components/Headers/MenuHeader';
import nice from '@assets/nice.png'
import { FadeInOut } from '@/animations/FadeTransition';

export const Route = createFileRoute('/menu')({
  component: Menu,
})


function Menu() {
  return (
    <>
      <FadeInOut className="">
        <MenuHeader />
        <div 
          className={`h-[76vh] w-full relative flex flex-row justify-center items-center`}
          >
            
            <div style={{backgroundImage: `url(${nice})`}} 
              className="absolute w-screen h-screen bg-no-repeat bg-cover z-[-999]"
            />

            <div className="absolute right-0 h-full w-1/2 overflow-y-scroll">
              <Projects />
            </div>
        </div>
        <MenuFooter />
      </FadeInOut>
      <Outlet />
    </>
  )
}

function Projects() {
  return (
    <ul className="h-full overflow-visible space-y-2">
      {Array.from({ length: 12 }).map((_, i) => (
        <li
          key={i}
          className="place-self-end z-10 w-2/3 h-1/6 hover:scale-x-110 transition-all duration-300 border-2 transform origin-top-right 
          cursor-pointer bg-[#39332e] rounded-sm"
        >
          ad;slifjads;lkfj #{i + 1}
        </li>
      ))}
    </ul>
  )
}