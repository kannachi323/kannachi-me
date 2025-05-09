import { createFileRoute } from '@tanstack/react-router';
import {useState} from 'react';

import { MenuCircle, MenuCircleOptions } from '@/components/Logo/CircleLogo';
import '@/animations/HeartBeat.css';
import menu from "@assets/menu.png"
import {MainHeader} from "@/components/Headers/MainHeader";
import {MainFooter} from "@/components/Footers/MainFooter";
import { FadeInOut } from '@/animations/FadeTransition';


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [showOptions, setShowOptions] = useState(false);

    function handleClick() {
      setShowOptions(!showOptions);
    }
  
    return (
      <FadeInOut className="">
        <MainHeader />
        <div 
          className={`h-[76vh] w-full relative flex flex-row justify-center items-center`}
          >

          
          <div style={{backgroundImage: `url(${menu})`}} 
            className="absolute w-screen h-screen bg-no-repeat bg-cover z-[-999]"
          />

          <MenuCircle 
            onClick={handleClick} 
            className={`h-128 w-128 bg-center z-[99] transition-transform duration-200 ease-in-out transform 
              ${showOptions ? '-translate-x-50 scale-[1.05]' : 'translate-x-0 scale-100'} animate-heartbeat`}
          />
           
     
        <MenuCircleOptions showOptions={showOptions} />
      </div>
      <MainFooter />
    </FadeInOut>
  )
}
