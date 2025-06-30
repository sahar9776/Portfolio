import { mySkills } from "../assets/data/data";
import SkillItem from "./SkillItem";
import Title from "./Title";
import { RiUserSettingsFill } from "react-icons/ri";

function Skills() {
  return (
    <div className="w-full h-96 py-10">
      <div className="container h-full mx-auto">
        <div className="flex items-center justify-center gap-1">
          <span className="text-4xl text-black/80">
            <RiUserSettingsFill />
          </span>
          <Title title="Skills" />
        </div>

        <div className="w-full h-auto mx-auto flex justify-center lg:juctify-between flex-wrap gap-10 mt-10">
          {mySkills.map((item) => (
            <div key={item.id} className="w-auto max-w-[43%] lg:w-[30%] h-24">
              <SkillItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
