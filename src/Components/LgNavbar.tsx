import { Link, useLocation } from "react-router-dom";
import { navbarList } from "../assets/data/data";
import Logo from "./Logo";

function LgNavbar() {
  const { pathname } = useLocation();

  return (
    <div
      className={`${
        pathname === "/" ? "bg-gradient" : "bg-white"
      } w-full h-full flex items-center justify-center`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        <div className="flex gap-4">
          {navbarList.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="bg-white text-[#ffc102] 
             font-semibold py-2 px-6 border border-[#ffc102] 
              rounded-full hover:shadow-lg capitalize my-5 cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LgNavbar;
