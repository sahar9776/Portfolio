import { educationList } from "../assets/data/data";
import Title from "./Title";
import { PiStarFourFill } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";

function Education() {
  return (
    <>
      <div className="flex items-center justify-start gap-1">
        <span className="text-4xl text-black">
          <MdCastForEducation />
        </span>
        <Title title="Education" />
      </div>

      <>
        {educationList.map((item) => (
          <div className="flex flex-col gap-y-4 justify-start items-start">
            <div key={item.id} className="flex items-center gap-10 mt-5">
              <div className="flex items-center gap-2">
                <PiStarFourFill className="text-white text-2xl" />
                <h4 className="text-2xl font-bold">{item.year}</h4>
              </div>

              <Title className="text-xl text-black/60">
                {item.educationsName}
              </Title>
            </div>

            {item.id < 3 && (
              <hr className="w-8 h-[2px] border-0 bg-white rotate-90 -ms-1" />
            )}
          </div>
        ))}
      </>
    </>
  );
}

export default Education;
