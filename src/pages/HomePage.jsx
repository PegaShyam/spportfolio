import { ReactLenis } from "lenis/react";
import Hero from "../components/Content/Hero";
import About from "../components/Content/About";
import Skills from "../components/Content/Skills";
import Projects from "../components/Content/Projects";
import Experience from "../components/Content/Experience";
import Contact from "../components/Content/Contact";

const HomePage = () => {
  return (
    <>
      <ReactLenis root/>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </>
  );
};

export default HomePage;
