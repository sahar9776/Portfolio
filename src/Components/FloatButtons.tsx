import { PiReadCvLogoFill } from "react-icons/pi";
import { PiHeadsetFill } from "react-icons/pi";
import Contact from "./Contact";
import { useState } from "react";
import { BiSolidHome } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function FloatButtons() {
  const resumeURL = "http://localhost:5173/files/sahar-samadi.pdf";
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeContactSidebar = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <>
      <div className="fixed bottom-5 left-5">
        <div className="relative group">
          <a
            href={resumeURL}
            download="Sahar-Samadi"
            target="_blank"
            className="w-12 h-12 bg-white/80 group-hover:bg-white flex justify-center items-center 
               rounded-full shadow-lg shadow/black/50 absolute bottom-14 left-5 z-50"
          >
            <PiReadCvLogoFill className="text-2xl" />
          </a>
          <div
            className="w-60 h-12 font-semibold justify-end bg-white/80 rounded-full px-10
           shadow-lg shadow/black/50 absolute bottom-14 left-5 z-10 text-end duration-700
           ease-linear hidden group-hover:flex items-center"
          >
            Downlad Resume
          </div>
        </div>

        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 bg-white/80 group-hover:bg-white flex justify-center items-center 
          rounded-full shadow-lg shadow/black/50 absolute bottom-0 left-5 z-50"
          >
            <PiHeadsetFill className="text-2xl" />
          </button>
          <div
            className="w-60 h-12 font-semibold justify-end bg-white/80 rounded-full px-10
          shadow-lg shadow/black/50 absolute bottom-0 left-5 z-10 text-end duration-700 
          ease-linear hidden group-hover:flex items-center"
          >
            Contact Me
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="min-w-screen min-h-screen overflow-hidden
       bg-black/80 fixed top-0 left-0 right-0 flex justify-center items-center"
        >
          <div className="bg-white w-[30%] h-auto p-10 pe-0 rounded-lg">
            <Contact />

            <button
              onClick={closeContactSidebar}
              className="w-[90%] me-10 mt-5 bg-white text-primary duration-500 ease-linear 
                hover:shadow-lg font-semibold py-2 px-6 border border-primary
                rounded-full shadow capitalize"
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatButtons;
