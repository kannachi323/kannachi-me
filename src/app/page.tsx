import PFP_MAIN from "@public/images/pfp_main.jpeg";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center h-[90vh] w-full relative">
      {/* Profile Image */}
      <div
        className="flex flex-col rounded-full items-center h-[70vh] w-[70vh] border-4 border-white z-10 absolute left-[20vw]"
        style={{
          backgroundImage: `url(${PFP_MAIN.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />



    <div className="flex flex-col items-start justify-evenly h-[60vh] w-1/2 absolute left-[30vw]">
        {/* Button 1 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-full h-[10vh] flex items-center justify-end relative text-white text-4xl 
        font-bold rounded-tr-full rounded-br-md shadow-md hover:scale-105 transition-transform">
          <span className="absolute left-[60%]">Explore</span>
        </div>
        
        {/* Button 2 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-full h-[10vh] flex items-center justify-center relative text-white text-4xl 
        font-bold rounded-tr-3xl rounded-br-xl shadow-md hover:scale-105 transition-transform">
          <span className="absolute left-[60%]">Projects</span>
        </div>
        
        {/* Button 3 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-full h-[10vh] flex items-center justify-center relative text-white text-4xl 
        font-bold rounded-r-xl shadow-md hover:scale-105 transition-transform">
          <span className="absolute left-[60%]">Skills</span>
        </div>
        
        {/* Button 4 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-full h-[10vh] flex items-center justify-center relative text-white text-4xl 
        font-bold rounded-tr-xl rounded-br-full shadow-md hover:scale-105 transition-transform">
          <span className="absolute left-[59.5%]">About Me</span>
        </div>
    </div>


    </div>
  );
}
