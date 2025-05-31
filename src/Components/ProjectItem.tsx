import type { TProjectItem } from "../assets/types/types";
import { CiMenuKebab } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectSidebar from "./ProjectSidebar";

type ProjectProps = TProjectItem;

function ProjectItem(item: ProjectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { imageUrl, name } = item;

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ProjectSidebar
        openValue={isOpen}
        handleSidebar={handleSidebar}
        {...item}
      />

      <div
        className="group w-48 lg:w-60 h-64 lg:h-[328px] rounded-lg bg-[#202020] shadow-lg 
      text-center p-2 relative"
      >
        <motion.img
          src={imageUrl}
          alt={name}
          className="w-full h-full rounded-lg shadow-white shadow-xl
           text-center duration-300 ease-linear opacity-30 group-hover:opacity-60"
        />

        <h3
          className="absolute top-[50%] left-[50%] 
        -translate-x-[50%] -translate-y-[50%] font-bold text-3xl text-white
         capitalize z-10 opacity-70 group-hover:opacity-100"
        >
          {name}
        </h3>

        <button
          onClick={() => setIsOpen(true)}
          className="w-7 h-7 rounded-full border-2 border-white/50
         flex justify-center items-center absolute bottom-5 left-5 text-white/50
          group-hover:text-white group-hover:border-white"
        >
          <CiMenuKebab className="text-xl" />
        </button>
      </div>
    </>
  );
}

export default ProjectItem;
