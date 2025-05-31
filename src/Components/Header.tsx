import LgNavbar from "./LgNavbar";
import XsNavabr from "./XsNavabr";

function Header() {
  return (
    <div className="max-w-screen w-full h-24 flex items-center shadow-md shaodw-black">
      {/* Mobile Navbar */}
      <div className="block lg:hidden w-full h-full">
        <XsNavabr />
      </div>
      {/* Desktop Navbar  */}
      <div className="hidden lg:block w-full h-full">
        <LgNavbar />
      </div>
    </div>
  );
}

export default Header;
