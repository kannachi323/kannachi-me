import { ProfileBanner } from "../Banners/ProfileBanner"

export function MenuHeader() {
  return (
    <div className="w-full h-[12vh] flex flex-row p-2 bg-black/25">
      <div className="flex flex-row h-full w-1/4">
        <ProfileBanner />
      </div>
      <div className="flex flex-row h-full w-1/2">
        <MessageStarter />
      </div>
      <div className="flex flex-col h-full w-1/4 justify-center items-end space-y-2">
        <StatusBanner />
      </div>
    </div>
  )
}


function MessageStarter() {
  //fetch number of projects
  return (
    <>
      <h6>{`You have 5 projects available! kannachi has been running for 10 seconds.
      It is currently 7:27`}
      </h6>
    </>
  )
}

function StatusBanner() {
  return (
    <>
      <img className="h-6 object-contain" alt="Static Badge" src="https://img.shields.io/badge/currently-online-brightgreen"/>
      <img className="h-6 object-contain" alt="Static Badge" src="https://img.shields.io/badge/working_on-dweller-blue?logo=github" />
      <img className="h-6 object-contain" alt="Static Badge" src="https://img.shields.io/badge/listening_to-zutomayo_--_kan%20saete%20kuyashiiwa-darkred?logo=youtubemusic"/>
    </>
  )
}


