'use client'

import PageTransition from '@/animations/PageTransition';


import { useState, useEffect } from 'react';
import { NavBarBottom } from '@/components/NavBar';

export default function Play() {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
    
    return (
      <>
        <PageTransition className="flex flex-row h-[90vh] w-full relative overflow-hidden" isMounted={isMounted}>
      

            
            <div className="w-full h-[20vh] bg-[#1e1d1d] border-b-white border-b-4 z-[0]" />
            <div className="absolute left-1/3 top-[10vh] w-2/3 h-[10vh] rounded-tl-full border-t-white border-t-4 border-b-[#1e1d1d] border-b-4 z-[1]" />
             
            

            <div className="absolute right-0 top-[10vh] w-1/3 h-[80vh] bg-red-500 z-[2] border-t-white border-t-4 items-end py-1
              overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white"
            >
              

                <button className="w-full h-[13%] text-3xl border-2 border-white mb-1"></button>
                <button className="w-full h-[13%] text-3xl border-2 border-white mb-1"></button>
                <button className="w-full h-[13%] text-3xl border-2 border-white mb-1"></button>
                <button className="w-full h-[13%] text-3xl border-2 border-white mb-1"></button>
                <button className="w-full h-[13%] text-3xl border-2 border-white mb-1"></button>
                <button className="w-full h-[13%] text-3xl border-2 border-white mb-1"></button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur facere quasi officiis quae ipsa eum corporis, maxime, porro perspiciatis laboriosam amet repudiandae adipisci nam, unde incidunt iusto itaque esse.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur facere quasi officiis quae ipsa eum corporis, maxime, porro perspiciatis laboriosam amet repudiandae adipisci nam, unde incidunt iusto itaque esse.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur facere quasi officiis quae ipsa eum corporis, maxime, porro perspiciatis laboriosam amet repudiandae adipisci nam, unde incidunt iusto itaque esse.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur facere quasi officiis quae ipsa eum corporis, maxime, porro perspiciatis laboriosam amet repudiandae adipisci nam, unde incidunt iusto itaque esse.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur facere quasi officiis quae ipsa eum corporis, maxime, porro perspiciatis laboriosam amet repudiandae adipisci nam, unde incidunt iusto itaque esse.</p>

            
            </div>
            
        </PageTransition>
        <PageTransition isMounted={isMounted}>
          <NavBarBottom />
        </PageTransition>
      
      </>
        
  );

    
}