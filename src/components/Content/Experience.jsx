import { FiArrowRight } from "react-icons/fi";
import { EXPERIENCE } from "../../utils/data";

const Experience = () => {
  return (
    <>
      <section id="experience" className="min-h-screen px-4 lg:px-54 py-12">
        <div className="container mx-auto h-full flex flex-col items-start justify-start gap-4">
          <h1 className="font-semibold text-4xl text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400 mb-6">
            Work Experience
          </h1>
          <div className="relative w-full border-l-3 border-rose-700 grid grid-cols-1 gap-4 pl-1 lg:pl-0">
            {EXPERIENCE.map(({ id, role, company, place, work, timeline }) => (
              <div
                key={id}
                className="flex flex-col lg:flex-row items-start justify-start gap-4"
              >
                {/* LEFT */}
                <div className="w-[250px] h-full flex items-start justify-start py-4">
                  <div className="flex items-center gap-4">
                    <div className="text-rose-100 bg-rose-700 rounded-r flex items-center justify-center p-2 -translate-x-1 lg:translate-x-0">
                      <FiArrowRight size={18} />
                    </div>
                    {timeline}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex-1 bg-zinc-800 border-2 border-zinc-700 rounded-xl flex flex-col gap-3 px-6 py-6">
                  <div className="leading-6">
                    <h1 className="font-semibold text-2xl">{role}</h1>
                    <h1 className="font-semibold text-lg text-zinc-300">
                      {company}
                    </h1>
                    <h1 className="text-sm text-zinc-400">{place}</h1>
                  </div>
                  <hr className="w-full text-zinc-500" />
                  <ul className="list-disc list-inside flex flex-wrap items-center gap-1">
                    {work.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm lg:text-base text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
