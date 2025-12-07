import P1 from "../../assets/images/P1.png";
import P2 from "../../assets/images/P2.png";
import P3 from "../../assets/images/P3.png";
import P4 from "../../assets/images/P4.png";
import P5 from "../../assets/images/P5.png";
import P6 from "../../assets/images/P6.png";
import { LuGithub, LuArrowUpRight } from "react-icons/lu";

const PROJECTS = [
  {
    id: 6,
    imgSrc: P6,
    title: "Socket Chat App",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate beatae impedit excepturi tempore quae nobis voluptas neque ipsam cumque maiores voluptas neque ipsam cumque maiores error.",
    techStack: ["React", "TailwindCSS", "ExpressJS", "MongoDB", "NodeJS", "Socket"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 5,
    imgSrc: P5,
    title: "AI Blog App",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate beatae impedit excepturi tempore quae nobis voluptas neque ipsam cumque maiores voluptas neque ipsam cumque maiores error.",
    techStack: ["React", "TailwindCSS", "ExpressJS", "MongoDB", "NodeJS", "Gemini", "Generative AI"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 4,
    imgSrc: P4,
    title: "Task Management App",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate beatae impedit excepturi tempore quae nobis voluptas neque ipsam cumque maiores voluptas neque ipsam cumque maiores error.",
    techStack: ["React", "TailwindCSS", "ExpressJS", "MongoDB", "NodeJS", "ReCharts"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 3,
    imgSrc: P3,
    title: "Expense Tracker App",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate beatae impedit excepturi tempore quae nobis voluptas neque ipsam cumque maiores voluptas neque ipsam cumque maiores error.",
    techStack: ["React", "TailwindCSS", "ExpressJS", "MongoDB", "NodeJS", "ReCharts"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 2,
    imgSrc: P2,
    title: "Advanced Auth App",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate beatae impedit excepturi tempore quae nobis voluptas neque ipsam cumque maiores voluptas neque ipsam cumque maiores error.",
    techStack: ["React", "TailwindCSS", "ExpressJS", "MongoDB", "NodeJS", "Mailtrap"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 1,
    imgSrc: P1,
    title: "Notiqo - Notes App",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate beatae impedit excepturi tempore quae nobis voluptas neque ipsam cumque maiores voluptas neque ipsam cumque maiores error.",
    techStack: [
      "React",
      "TailwindCSS",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "DaisyUI",
      "Upstash",
    ],
    githubLink: "",
    liveLink: "",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="min-h-[50vh] px-4 lg:px-54 py-12">
        <div className="container mx-auto h-full flex flex-col items-start justify-start gap-4">
          <h1 className="font-semibold text-4xl text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400 mb-4">
            Projects
          </h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROJECTS.map(
              ({
                id,
                imgSrc,
                title,
                // desc,
                techStack,
                // githubLink,
                // liveLink,
              }) => (
                <div
                  key={id}
                  className="overflow-hidden bg-zinc-800 border-2 border-zinc-700 rounded-xl flex flex-col items-start justify-start gap-4 px-4 py-4"
                >
                  <div className="overflow-hidden w-full bg-zinc-700 border-2 border-zinc-400 rounded-xl flex items-center justify-center">
                    <img
                      src={imgSrc}
                      alt={title}
                      className="w-full max-w-96 h-full object-cover"
                    />
                  </div>
                  <h1 className="font-semibold text-2xl">{title}</h1>
                  {/* <h1 className="text-sm">{desc}</h1> */}
                  <div className="flex flex-wrap items-center gap-1">
                    {techStack.map((item, index) => (
                      <div
                        key={index}
                        className="text-xs text-zinc-300 bg-zinc-700 border border-zinc-600 rounded flex items-center justify-center px-2 py-1"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  {/* <div className="text-sm flex items-center gap-2">
                    <a
                      href={githubLink}
                      className="text-zinc-100 bg-rose-700 hover:text-black hover:bg-rose-300 hover:scale-105 border-2 border-rose-600 rounded-xl flex items-center gap-2 px-4 py-3 transition-all duration-300"
                    >
                      <p>GitHub</p>
                      <LuGithub size={20} />
                    </a>
                    <a
                      href={liveLink}
                      className="text-zinc-100 bg-zinc-800 hover:bg-zinc-600 hover:scale-105 border-2 border-zinc-700 rounded-xl flex items-center gap-1 px-4 py-3 transition-all duration-300"
                    >
                      <p>View Live</p>
                      <LuArrowUpRight size={20} />
                    </a>
                  </div> */}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
