import type { TSkillItem } from "../assets/types/types";
import CircleProgressBar from "./CircleProgressBar";

type SkillItemProps = TSkillItem;

function SkillItem({ size, name, description }: SkillItemProps) {
  return (
    <div className="w-52 lg:w-56 max-h-60 rounded-lg bg-white shadow-lg text-center p-5">
      <CircleProgressBar circleWidth={size} circleHeight={size} />
      <h3 className="text-xl text-black/70 font-semibold capitalize">{name}</h3>
      <p className="text-sm text-slate-400 mt-3">{description}</p>
    </div>
  );
}

export default SkillItem;
