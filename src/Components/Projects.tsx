import { projectList } from "../assets/data/data";
import ProjectItem from "./ProjectItem";
import Title from "./Title";

function Projects() {
  return (
    <div className="max-w-screen min-h-[640px] h-[640px]">
      <div className="px-5 lg:px-0">
        <Title title="my projects" align="text-center" />
        <p className="text-center text-slate-400 mt-5 max-w-xl mx-auto z-50">
          All of these projects are exercises, but I worked hard on every detail
          and usually the UI is my own work.
        </p>
      </div>

      <div
        className="w-full h-auto lg:h-[536px] flex justify-center items-center
        bg-[#ffc102]/50 py-10 lg:py-5 mt-5 lg:mt-32"
      >
        <div className="container px-5 lg:px-0 flex flex-wrap justify-center items-center gap-3 lg:gap-10">
          {projectList.map((item, index) => (
            <ProjectItem {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
