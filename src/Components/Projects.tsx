import { projectList } from "../assets/data/data";
import Education from "./Education";
import ProjectItem from "./ProjectItem";
import Title from "./Title";
import { AiFillProject } from "react-icons/ai";

function Projects() {
  return (
    <div className="w-full h-[816px] custom-shadow my-40 lg:my-0 py-10">
      <div className="flex items-center justify-center gap-1">
        <span className="text-4xl text-black/80">
          <AiFillProject />
        </span>
        <Title title="Projects" />
      </div>

      <div className="container mx-auto py-10 relative">
        <div
          className="w-full lg:w-[30%] lg:h-[440px] bg-primary lg:rounded-lg p-10
         absolute top-[640px] lg:top-[420px] left-0"
        >
          <Education />

          <p className="text-start lg:text-lg text-white/80 mt-5 max-w-xl mx-auto z-50">
            All of these projects are practice projects, but I worked hard on
            every single detail and usually the user interface is my own work.
          </p>
        </div>

        <div
          className="w-full lg:w-[70%] h-full absolute top-10 left-[50%] -translate-x-[50%]
         lg:left-[33%] lg:translate-x-0 flex flex-wrap justify-center gap-5 "
        >
          {projectList.map((item) => (
            <div key={item.id} className="w-[45%] max-w-[45%] h-44 lg:w-[30%] lg:h-80">
              <ProjectItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
