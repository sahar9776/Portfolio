import { projectList } from "../assets/data/data";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Knowledge from "../Components/Knowledge";

function Resume() {
  return (
    <div className="w-full h-auto">
      <div className="container mx-auto px-5 lg:px-0 my-32 flex justify-center flex-col lg:flex-row">
        <div
          className="w-full lg:w-[30%] h-full mx-auto lg:mx-0
         ps-5 py-10 rounded-lg shadow-lg shadow-slate-500"
        >
          <img
            src="/public/images/avatar.jpg"
            alt="developer"
            className="w-1/2 h-auto rounded-lg shadow text-center mx-auto mb-10 -mt-32"
          />
          <Contact />
          <Knowledge />
          <Education />
        </div>

        <div className="w-full lg:w-[70%] h-full px-5 py-10 lg:py-0 lg:px-10">
          <>
            <h1 className="text-4xl font-semibold text-black/80 capitalize">
              Sahar Samadi
            </h1>
            <h3 className="text-2xl text-[#ffc102] capitalize mt-5">
              web developer
            </h3>
            <p className="text-slate-400 text-start max-w-full mt-5">
              In addition to JavaScript, React, Next, and Bootstrap, I am
              proficient in Tailwind and TypeScript, and have even done several
              projects with them.
            </p>
          </>
          <div
            className="w-full h-auto border border-slate-300
           rounded-lg p-5 mt-10"
          >
            <h3 className="text-2xl font-semibold text-black/70 capitalize">
              portfolio and my projects
            </h3>
            <ol className="list-disc flex justify-between flex-wrap gap-y-5 p-5">
              <li className="w-[50%] text-xl text-black/60">
                <a href="#">Portfolio</a>
              </li>
              {projectList.map((item) => (
                <li
                  key={item.id}
                  className="w-[50%] text-xl text-black/60 capitalize"
                >
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ol>
          </div>
          <>
            <p className="text-md text-[#ffc102] mt-10">2022 - currently</p>
            <h3 className="text-2xl font-semibold text-black/70 capitalize">
              front-end development
            </h3>
            <p className="text-slate-400 text-start max-w-full mt-5">
              I studied mathematics and physics in high school and graduated. I
              studied computer systems architecture for five semesters, but due
              to some problems, I had to drop out. However, after dropping out,
              due to my great interest in programming, apart from university
              teachings, I started programming seriously with great effort and
              perseverance, and I am currently looking for experience. I am
              eager to work with your team and I am sure that with my abilities
              and the experience I have gained with your team, I can meet the
              needs of your team.
            </p>
          </>
        </div>
      </div>
    </div>
  );
}

export default Resume;
