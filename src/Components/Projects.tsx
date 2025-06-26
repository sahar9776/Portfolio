import { projectList } from "../assets/data/data";
import Education from "./Education";
import ProjectItem from "./ProjectItem";
import Title from "./Title";
import { AiFillProject } from "react-icons/ai";

function Projects() {
  return (
    <div className="w-full h-[816px] custom-shadow  py-10">
      <div className="flex items-center justify-center gap-1">
        <span className="text-4xl text-black/80">
          <AiFillProject />
        </span>
        <Title title="Projects" />
      </div>

      <div className="container mx-auto py-10 relative">
        <div className="w-[30%] h-[440px] bg-primary rounded-lg p-10 absolute top-[420px] left-0">
          <Education />

          <p className="text-start text-md text-white/80 mt-5 max-w-xl mx-auto z-50">
            All of these projects are practice projects, but I worked hard on
            every single detail and usually the user interface is my own work.
          </p>
        </div>

        <div className="w-[70%] h-full absolute top-10 left-[33%] flex flex-wrap gap-5">
          {projectList.map((item) => (
            <div key={item.id} className="w-full lg:w-[30%] h-80">
              <ProjectItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
