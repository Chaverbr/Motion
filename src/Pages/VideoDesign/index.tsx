import "./index.css";
import montainVideo from "../../assets/Montanhavideo.webm";


const VideoDesign = () => {
  return (
    <>
      <section className="w-screen h-screen relative">
          <video src={montainVideo} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover"></video>

          <header className="w-full h-full bg-slate-800 opacity-85">
            <div className="flex h-1/5 w-full justify-between items-center px-16">
                <h1 className="text-gray-50 text-2xl font-medium font-inter">Motion</h1>
                <nav className="w-max h-full flex items-center">
                    <ul className="flex w-max h-max gap-4 text-gray-50">
                      <li className="font-inter cursor-pointer">Home</li>
                      <li className="font-inter cursor-pointer">Transition</li>
                      <li className="font-inter cursor-pointer">DropDown</li>
                    </ul>
                </nav>
            </div>
            <div className="flex justify-center items-center w-full h-4/5">
                <div className="w-4/5 h-3/5">
                  <h1 className="w-4/5 text-gray-50 text-7xl font-inter font-semibold">Web Design avançado com motion e ReactJS</h1>
                </div>
            </div>
          </header>
      </section>
    </>
  )
}

export default VideoDesign;