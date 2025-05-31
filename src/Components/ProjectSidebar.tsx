import { useRef } from "react";
import type { TProjectItem } from "../assets/types/types";
import { IoClose } from "react-icons/io5";

type ProjectSidebarProps = {
  openValue: boolean;
  handleSidebar: () => void;
} & TProjectItem;

function ProjectSidebar({
  openValue,
  handleSidebar,
  name,
  url,
  videoUrl,
  SPALibrary,
  CSSLibrary,
}: ProjectSidebarProps) {
  const video = useRef<HTMLVideoElement | null>(null);

  const handleClose = () => {
    video.current!.pause();
    handleSidebar();
  };

  return (
    <div
      className={`${
        openValue ? "flex justify-center items-center" : "hidden"
      } min-w-screen w-screen max-w-screen min-h-screen h-screen max-h-screen bg-black/80
    fixed top-0 left-0 z-50 px-5 lg:px-0`}
    >
      <div className="w-full lg:w-[45%] h-80 mx-auto flex justify-center bg-white rounded-lg p-5">
        <div className="w-[45%] h-full rounded-l-lg">
          <video
            src={videoUrl}
            width={100}
            height={100}
            controls
            playsInline
            ref={video}
            className="w-full h-full rounded-l-lg"
          ></video>
        </div>

        <div className="w-[55%] h-full rounded-r-lg p-5">
          <div className="w-full h-auto flex justify-between items-center">
            <h3 className="text-2xl lg:text-4xl text-[#2f2f2e] font-bold capitalize">
              <a href={url}>{name}</a>
            </h3>

            <button onClick={handleClose} className="group">
              <IoClose className="text-slate-400 group-hover:text-slate-900" />
            </button>
          </div>

          <div className="py-5 my-5 flex flex-col gap-5">
            <p className="text-lg lg:text-xl text-black/75 font-semibold capitalize">
              single page library/framework : {SPALibrary}
            </p>
            <p className="text-lg lg:text-xl text-black/75 font-semibold capitalize">
              css library : {CSSLibrary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSidebar;
