import type { TProjectItem } from "../assets/types/types";
import { IoClose } from "react-icons/io5";
import Title from "./Title";
import { motion } from "framer-motion";
import { IoLibrarySharp } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

type ProjectSidebarProps = {
  openValue: boolean;
  handleClose: () => void;
} & TProjectItem;

function ProjectSidebar({
  openValue,
  handleClose,
  name,
  url,
  imageUrl,
  libraries,
}: ProjectSidebarProps) {
  return (
    <div
      className={`${openValue ? "flex justify-center items-center" : "hidden"}
       min-w-screen w-screen max-w-screen min-h-screen h-screen max-h-screen bg-black/80
       fixed top-0 left-0 right-0 z-50 p-5 lg:px-0`}
    >
      <div
        className="w-full lg:w-[48%] p-5 h-auto bg-white rounded-lg flex flex-col
         gap-5 items-center lg:flex-row"
      >
        <div className="w-64 h-64 rounded-full relative">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{
              delay: 0.8,
              duration: 2.4,
              repeatType: "mirror",
              repeat: Infinity,
            }}
            className="w-full h-full rounded-full border-t-4 border-b-4
          border-[#ffc102] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          />
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              delay: 0.8,
              duration: 2.4,
              repeatType: "mirror",
              repeat: Infinity,
            }}
            className="w-56 h-56 rounded-full p-3 border-r-4 border-l-4
          border-[#ffc102] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          />
          <img
            src={imageUrl}
            alt={name}
            className="w-48 h-48 rounded-full
          shadow-lg shaow-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          />
        </div>

        <div className="w-full lg:w-[52%] h-full">
          <div className="w-full h-auto flex justify-between items-center">
            <Title className="group">
              <a href={url} className="text-3xl ">
                {name}
              </a>
            </Title>

            <button onClick={handleClose}>
              <IoClose className="text-black/75 group-hover:text-slate-900" />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-1 font-bold">
            <div className="flex items-center gap-1 text-xl text-black/75">
              <IoLibrarySharp />
              <h4>Libraries : </h4>
            </div>
            <p className="text-md text-black/65"> {libraries}</p>
          </div>

          <div className="mt-3 font-bold hidden lg:block">
            <div className="flex items-center gap-1 text-xl text-black/75">
              <IoLogoGithub />
              <h4>Github</h4>
            </div>
            <p className="text-md text-black/65">{url}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSidebar;
