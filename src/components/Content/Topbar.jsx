import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <section
      id="topbar"
      className="hidden bg-linear-to-r from-rose-700 via-rose-800 to-rose-700 container mx-auto lg:flex items-center justify-center py-2"
    >
      <Link to="work">
        <p className="hover:underline text-xs text-zinc-200 flex items-center gap-1">
          <span className="font-semibold">Freelancing</span>
          <span> - </span>
          <span className="">
            Check out my collection of amazing portfolios. Select from existing
            templates or get yourself a custom portfolio now!
          </span>
          <span className="font-bold">
            <HiArrowLongRight size={16} />
          </span>
        </p>
      </Link>
    </section>
  );
};

export default Topbar;
