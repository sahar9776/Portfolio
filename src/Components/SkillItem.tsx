import type { TSkillItem } from "../assets/types/types";

type SkillItemProps = TSkillItem;

function SkillItem({ experience, name }: SkillItemProps) {
  return (
    <div className="w-full h-full flex items-end gap-2 p-5">
      <h3 className="text-4xl lg:text-6xl font-extrabold text-black/80">{experience}</h3>
      <div className="flex flex-col lg:items-start text-start">
        <p className="text-sm lg:text-md font-semibold text-black/75">{name}</p>
        <p className="text-sm text-black/50">months of experience</p>
      </div>
    </div>
  );
}

export default SkillItem;
