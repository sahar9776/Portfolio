import Title from "./Title";
import { AiFillProject } from "react-icons/ai";
import { PiStarFourFill } from "react-icons/pi";
import { contactList } from "../assets/data/data";
import { MdLanguage } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { RiPresentationFill } from "react-icons/ri";

function MoreInfo() {
  return (
    <div className="w-full h-auto">
      <div className="container mx-auto flex">
        <div className="w-1/2 h-auto pt-44 pb-20">
          <div className="flex items-center justify-start gap-1">
            <span className="text-4xl text-black/80">
              <MdContactPage />
            </span>
            <Title title="Contact Me" />
          </div>

          <>
            {contactList.map((item) => (
              <div className="flex flex-col gap-y-4 justify-start items-start">
                <div key={item.id} className="flex items-center gap-10 mt-5">
                  <div className="flex items-center gap-2">
                    <PiStarFourFill className="text-primary text-2xl" />
                    <h4 className="text-2xl font-bold text-black/80">{item.name}</h4>
                  </div>

                  <Title className="text-xl text-black/60">{item.info}</Title>
                </div>

                {item.id < 3 && (
                  <hr className="w-8 h-[2px] border-0 bg-primary rotate-90 -ms-1" />
                )}
              </div>
            ))}
          </>
        </div>

        <div className="w-1/2 h-full py-10">
            <div className="flex items-center justify-start gap-1">
              <span className="text-4xl text-black/80">
                <MdLanguage />
              </span>
              <Title title="Language" />
            </div>

            <div className="px-2 py-3">
              <h4 className="font-semibold text-2xl">
                English : <span className="text-lg text-black/70">Intermediate</span>
              </h4>
            </div>

          <div className="mt-10">
            <div className="flex items-center justify-start gap-1">
              <span className="text-4xl text-black/80">
                <RiPresentationFill />
              </span>
              <Title title="More Information About Me" />
            </div>

            <div className="mt-5 px-1 text-black/70 text-start max-w-xl">
              <p className="text-2xl font-semibold">Sahar Samadi</p>
              <p className="">Kermanshah, Iran</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
