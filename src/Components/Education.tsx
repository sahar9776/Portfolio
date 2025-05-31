import { educationList } from "../assets/data/data";
import Title from "./Title";

function Education() {
  return (
    <div className="mb-5">
      <div className="w-full h-auto flex justify-between items-center">
        <Title title="Education" align="text-start" />
        <hr className="w-1/2 h-2 ms-auto rounded-l-full bg-[#ffc102] border-0 my-5" />
      </div>

      {educationList.map((item) => (
        <div key={item.id} className="group mt-3 cursor-pointer">
          <p className="capitalize font-semibold text-lg text-black/70">
            {item.name}
          </p>
          <p
            className="text-sm mt-2 text-black/40 duration-300 ease-linear
           hidden group-hover:block"
          >
            {item.url}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Education;
