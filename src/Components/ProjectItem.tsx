import type { TProjectItem } from "../assets/types/types";
import Title from "./Title";
import { Link } from "react-router-dom";

type ProjectProps = TProjectItem;

function ProjectItem(item: ProjectProps) {
  const { imageUrl, name,url } = item;

  return (
      <div
        className="w-full h-full bg-black shadow-lg shadow-black rounded-lg text-center relative"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full opacity-55 rounded-lg absolute top-0 left-0 z-10"
        />
        <div
          className="w-[90%] h-14 lg:h-20 bg-white/50 rounded-lg flex flex-col items-center
          justify-center gap-2 absolute bottom-4 left-[50%] -translate-x-[50%] p-5 z-30"
        >
          <Title className="text-lg lg:text-2xl font-bold text-white" >
            <Link to={url}>{name}</Link>
          </Title>

          <p className="text-sm text-black/50 hidden lg:block">Libraries : {item.libraries}</p>
        </div>
      </div>
  );
}

export default ProjectItem;
