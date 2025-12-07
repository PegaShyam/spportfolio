import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useState } from "react";
import { NAVLINKS, MOBNAVLINKS } from "../../utils/data";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <>
      {/* Desktop Nav */}
      <nav className="border-0 border-red-400 h-18 lg:h-20 bg-linear-to-b from-black/70 via-black/20 to-transparent backdrop-blur-2xl lg:backdrop-blur-none px-4 lg:px-8 py-2">
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* LEFT */}
          <div className="w-full lg:w-1/3 flex items-center gap-4">
            {/* Logo */}
            <img src={Logo} alt="Logo" className="rotate-90 skew-x-12" />

            {/* Name & Title */}
            <div className="flex flex-col items-start justify-center leading-3.5 pt-1 lg:pt-0">
              <p>Shyam Prasad M</p>
              <p className="font-medium text-sm text-zinc-300">
                Fullstack Developer
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="hidden w-1/3 lg:flex items-center justify-center">
            <ul className="text-sm bg-zinc-600/30 border-2 border-zinc-700/30 backdrop-blur-lg rounded-xl flex items-center gap-0 py-1">
              {NAVLINKS.map(({ name, link }, index) => (
                <li key={index} className="px-2 py-3">
                  <HashLink
                    smooth
                    to={link}
                    className="text-zinc-300 bg-transparent hover:text-black hover:bg-white rounded-xl px-4 py-3 transition-all duration-300"
                  >
                    {name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="w-1/3 flex items-center justify-end gap-3">
            <button className="hidden lg:flex cursor-pointer text-black bg-white rounded-xl px-4 py-2">
              <HashLink smooth to="#contact" className="text-sm">
                Contact Me
              </HashLink>
            </button>
            <button
              onClick={handleNavToggle}
              className="lg:hidden cursor-pointer text-zinc-100 bg-rose-700 hover:text-white hover:bg-rose-600 border-2 border-rose-600 rounded-xl flex items-center gap-2 px-2 py-1 transition-all duration-300"
            >
              {navOpen ? <IoClose size={25} /> : <IoMenuSharp size={25} />}
            </button>
          </div>
        </div>

        {/* Desktop - PF & FL */}
        {/* <div className="absolute top-[50vh] right-0 -translate-y-1/2 text-sm bg-zinc-800 border-2 border-r-0 border-zinc-600 rounded-l-xl grid grid-cols-1 gap-2 px-2 pr-0 py-2">
        <Link
          to="/"
          className="w-full text-black bg-white rounded-l-lg px-4 py-2"
        >
          Portfolio
        </Link>
        <Link
          to="work"
          className="w-full text-white bg-zinc-700 border-2 border-r-0 border-zinc-500 rounded-l-lg px-4 py-2"
        >
          Freelancing
        </Link>
      </div> */}
      </nav>
      {/* Mobile Nav */}
      <nav
        className={`fixed bottom-0 left-0 z-50 w-full h-screen bg-zinc-900/30 backdrop-blur-2xl  ${
          navOpen ? "translate-y-0" : "translate-y-full"
        } flex flex-col items-center justify-evenly transition-all duration-700`}
      >
        <ul className="w-full h-auto flex flex-col items-center justify-center gap-6">
          {MOBNAVLINKS.map(({ name, link }, index) => (
            <li key={index}>
              <HashLink onClick={handleNavToggle} smooth to={link} className="uppercase text-4xl">
                {name}
              </HashLink>
            </li>
          ))}
        </ul>
        <button
          onClick={handleNavToggle}
          className="lg:hidden cursor-pointer text-zinc-100 bg-rose-700 hover:text-white hover:bg-rose-600 border-2 border-rose-600 rounded-full flex items-center gap-2 p-4 transition-all duration-300"
        >
          {navOpen ? <IoClose size={25} /> : <IoMenuSharp size={25} />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
