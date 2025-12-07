import { MdOutlineFileDownload, MdOutlineArrowDownward } from "react-icons/md";
import SP from "../../assets/images/bg3.png";

const PROFILE = [
  {
    id: "profile",
    workStatus: "Available for work",
    heroTitle: "Building Scalable Modern Websites for the Future",
    profileImg: SP,
  },
];

const Hero = () => {
  return (
    <section id="hero" className="h-auto lg:min-h-screen px-4 lg:px-54">
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-center gap-4 pt-28 lg:pt-36">
        {/* Left */}
        <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-center gap-8">
          <div className="text-sm tracking-wide text-zinc-400 border-2 border-zinc-700 rounded-xl flex items-center gap-1.5 px-3 py-1">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
            {PROFILE.map(({ workStatus, id }) => (
              <p key={id}>{workStatus}</p>
            ))}
          </div>
          {PROFILE.map(({ heroTitle, id }) => (
            <h1
              key={id}
              className="font-medium text-3xl lg:text-6xl text-balance text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400"
            >
              {heroTitle}
            </h1>
          ))}
          <div className="text-sm flex items-center gap-2">
            <button className="cursor-not-allowed text-zinc-100 bg-rose-700 hover:text-black hover:bg-rose-300 hover:scale-105 border-2 border-rose-600 rounded-xl flex items-center gap-2 px-4 py-3 transition-all duration-300">
              <p>Resume</p>
              <MdOutlineFileDownload size={20} />
            </button>
            <button className="cursor-pointer text-zinc-100 bg-zinc-800 hover:bg-zinc-600 hover:scale-105 border-2 border-zinc-700 rounded-xl flex items-center gap-1 px-4 py-3 transition-all duration-300">
              <p>Scroll Down</p>
              <MdOutlineArrowDownward size={20} />
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="relative w-full lg:w-1/2 h-full hidden lg:flex items-center justify-end">
          <img
            src={SP}
            alt="SP"
            className="border-2 border-[#E2C9FF] rounded-[50px] object-cover drop-shadow-lg drop-shadow-blue-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
