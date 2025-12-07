import Topbar from "../Content/Topbar";
import Navbar from "../Content/Navbar";

const Header = () => {
  return (
    <header className="z-50 fixed top-0 left-0 w-full">
      {/* <Topbar/> */}
      <Navbar />
    </header>
  );
};

export default Header;
