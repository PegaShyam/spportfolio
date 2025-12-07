import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Logo from "../../assets/images/logo.svg";
import { SITEMAP, SOCIAL_LINKS } from "../../utils/data";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="px-4 lg:px-54 pb-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 py-20 border-b border-zinc-800">
          <div className="flex flex-col items-start justify-start gap-6">
            <h1 className="text-3xl lg:text-6xl text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400 border">
              Let's work together today!
            </h1>
            <a
              href="#"
              className="cursor-pointer text-zinc-100 bg-rose-700 hover:text-black hover:bg-rose-300 hover:scale-105 border-2 border-rose-600 rounded-xl flex items-center justify-center gap-2 px-4 py-2 mb-10 transition-all duration-300"
            >
              <p>Email</p>
              <MdOutlineKeyboardArrowRight size={25} />
            </a>
          </div>

          <div className="xl:pl-10 2xl:pl-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <h3>Sitemap</h3>
              <ul className="flex flex-col gap-1">
                {SITEMAP.map(({ label, href }, index) => (
                  <li key={index}>
                    <HashLink
                      smooth
                      to={href}
                      className="text-sm text-zinc-400"
                    >
                      {label}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3>Socials</h3>
              <ul className="flex flex-col gap-1">
                {SOCIAL_LINKS.map(({ id, platform, link }) => (
                  <li key={id}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400"
                    >
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-2 py-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-8 rotate-90 skew-x-12 object-cover py-1"
          />
          <p className="font-normal text-sm text-zinc-400">
            &copy; {currentYear} Shyam Prasad M. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
