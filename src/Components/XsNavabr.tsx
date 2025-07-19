import { useState } from "react";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";
import { navbarList } from "../assets/data/data";
import { useNavigate } from "react-router-dom";

function XsNavabr() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url);
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-full h-full bg-white flex items-center justify-center">
        <div className="container mx-auto px-5 md:px-0 flex items-center justify-between">
          <Logo />

          <button onClick={() => setIsOpen(!isOpen)}>
            <FiMenu className="text-black/80 text-4xl font-semibold" />
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } max-w-screen h-auto fixed top-24 left-0 right-0 z-50 
         rounnded-lg shadow flex flex-col justify-between bg-white`}
      >
        {navbarList.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.url)}
            className="w-full h-20 flex justify-center items-center text-2xl
             font-semibold text-black/80 text-center py-10 capitalize
            duration-500 ease-linear hover:bg-[#ffc102] hover:text-white"
          >
            {item.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default XsNavabr;
