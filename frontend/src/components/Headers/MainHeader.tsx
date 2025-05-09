import profile from '@assets/profile.png';


export function MainHeader() {
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

function ProfileBanner() {
  return (
    <>
      <img src={profile} className="h-[10vh] w-auto object-fit"></img>
      <div className="w-[80%] h-full">
        <h3>Matthew Chen</h3>
        <h6>Computer Science @UCSC</h6>
        <h6>{`Level: Senior (3rd year)`}</h6>
      </div>
    </>
  )
}

function MessageStarter() {
  //fetch number of projects
  return (
    <>
      <h6>{`You have 5 projects availble! kannachi has been running for 10 seconds.
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


