import Logo from "../../assets/images/logo.svg";
import CountUp from "../Animations/CountUp";
import { ABOUT } from "../../utils/data";

const About = () => {
  return (
    <section id="about" className="px-4 lg:px-54 py-12">
      <div className="container mx-auto h-full bg-linear-to-br from-zinc-800 to-zinc-800 border-2 border-zinc-700 rounded-xl flex flex-col p-4 lg:px-10 lg:py-10">
        <div className="w-full lg:w-4/5 mb-10">
          {ABOUT.map(({ content, id }) => (
            <h1
              key={id}
              className="text-sm lg:text-xl text-zinc-300 text-balance"
            >
              {content}
            </h1>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Number of Projects */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {ABOUT.map(({ projectCount, id }) => (
                  <p key={id} className="font-bold text-2xl lg:text-4xl">
                    <CountUp
                      from={0}
                      to={projectCount}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                  </p>
                ))}

                <p className="text-base lg:text-lg text-blue-300">+</p>
              </div>

              <p className="text-xs lg:text-sm text-zinc-400">Projects Done</p>
            </div>
            {/* Years of Experience */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {ABOUT.map(({ experienceCount, id }) => (
                  <p key={id} className="font-bold text-2xl lg:text-4xl">
                    <CountUp
                      from={0}
                      to={experienceCount}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                  </p>
                ))}
                <p className="text-base lg:text-lg text-blue-300">+</p>
              </div>

              <p className="text-xs lgtext-sm text-zinc-400">
                Years of Experience
              </p>
            </div>
          </div>
          <img
            src={Logo}
            alt="Logo"
            className="rotate-90 skew-x-12 scale-75 lg:scale-100"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
