import React from "../../assets/images/react.svg";
import TailwindCSS from "../../assets/images/tailwindcss.svg";
import ExpressJS from "../../assets/images/expressjs.svg";
import NodeJS from "../../assets/images/nodejs.svg";
import MongoDB from "../../assets/images/mongodb.svg";
import HTML from "../../assets/images/html.svg";
import CSS from "../../assets/images/css3.svg";
import JavaScript from "../../assets/images/javascript.svg";
import Vite from "../../assets/images/vite.svg";

const TOOLS = [
  {
    id: 1,
    imgSrc: React,
    name: "React",
    type: "UI Library",
  },
  {
    id: 2,
    imgSrc: TailwindCSS,
    name: "TailwindCSS",
    type: "User Interface / Styling",
  },
  {
    id: 3,
    imgSrc: ExpressJS,
    name: "ExpressJS",
    type: "Node Framework",
  },
  {
    id: 4,
    imgSrc: MongoDB,
    name: "MongoDB",
    type: "NoSQL Database",
  },
  {
    id: 5,
    imgSrc: NodeJS,
    name: "NodeJS",
    type: "Runtime Environment",
  },
  {
    id: 6,
    imgSrc: JavaScript,
    name: "JavaScript",
    type: "Interaction",
  },
  {
    id: 7,
    imgSrc: Vite,
    name: "Vite",
    type: "Optimized Bundler",
  },
  {
    id: 8,
    imgSrc: CSS,
    name: "CSS",
    type: "UI / Styling",
  },
];

const Skills = () => {
  return (
    <>
      <section id="skills" className="px-4 lg:px-54 py-6 lg:py-12">
        <div className="container mx-auto h-full flex flex-col items-start justify-start gap-4">
          <h1 className="font-semibold text-3xl lg:text-4xl text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400">
            Essential Tools I Use
          </h1>
          <p className="w-full lg:w-2/3 text-balance text-zinc-400">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOOLS.map(({ id, imgSrc, name, type }) => (
              <div
                key={id}
                className="cursor-pointer hover:text-white hover:bg-rose-700 border-2 border-zinc-700/80 hover:border-rose-500 rounded-2xl flex items-center gap-3 px-3 py-3 transition-colors durataion-300"
              >
                {/* Image */}
                <div className="bg-zinc-700/80 rounded-md flex items-center justify-center p-2">
                  <img src={imgSrc} alt={name} className="w-8 h-8" />
                </div>

                {/* Name */}
                <div className="flex flex-col">
                  <h3 className="text-sm lg:text-base">{name}</h3>
                  <p className="text-sm text-zinc-400">{type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
