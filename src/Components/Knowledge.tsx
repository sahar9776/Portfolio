import { mySkills } from "../assets/data/data";
import CircleKnowledge from "./CircleKnowledge";
import Title from "./Title";

function Knowledge() {
  return (
    <div className="mb-5">
      <div className="w-full h-auto flex justify-between items-center">
        <Title title="Knowledge" align="text-start" />
        <hr className="w-1/2 h-2 ms-auto rounded-l-full bg-[#ffc102] border-0 my-5" />
      </div>
      
      {mySkills.map((item) => (
        <div key={item.id} className="flex gap-10 mt-3">
          <p className="w-[35%] lg:w-[30%] capitalize font-semibold text-lg text-black/70 ">
            {item.name}{" "}
          </p>
          <CircleKnowledge size={item.size} />
        </div>
      ))}
    </div>
  );
}

export default Knowledge;
