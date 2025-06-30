import type { TProjectItem } from "../assets/types/types";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import ProjectSidebar from "./ProjectSidebar";
import Title from "./Title";
import { Link } from "react-router-dom";

type ProjectProps = TProjectItem;

function ProjectItem(item: ProjectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { imageUrl, name,url } = item;

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ProjectSidebar
        openValue={isOpen}
        handleClose={handleSidebar}
        {...item}
      />

      <div
        className="w-full h-full bg-black shadow-lg shadow-black rounded-lg text-center relative"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full opacity-55 rounded-lg absolute top-0 left-0 z-10"
        />
        <div
          className="w-[90%] h-10 lg:h-16 bg-white/50 rounded-lg flex items-center justify-between
          absolute bottom-4 left-[50%] -translate-x-[50%] p-5 z-30"
        >
          <Title className="text-sm lg:text-2xl font-bold text-white" >
            <Link to={url}>{name}</Link>
          </Title>

          <button onClick={() => setIsOpen(true)}>
            <FaPlay className="text-sm lg:text-xl text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
