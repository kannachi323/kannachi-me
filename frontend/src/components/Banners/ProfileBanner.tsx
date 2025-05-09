import profile from '@assets/profile.png';

export function ProfileBanner() {
  return (
    <>
      <img src={profile} className="h-[10vh] w-auto object-fit"></img>
      <div className="flex flex-col w-[80%] h-full justify-center ml-2">
        <h3>Matthew Chen</h3>
        <h6>Computer Science @UCSC</h6>
        <h6>{`Level: Senior (3rd year)`}</h6>
      </div>
    </>
  )
}