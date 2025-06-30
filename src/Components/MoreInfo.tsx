import Title from "./Title";
import { PiStarFourFill } from "react-icons/pi";
import { contactList } from "../assets/data/data";
import { MdLanguage } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { RiPresentationFill } from "react-icons/ri";

function MoreInfo() {
  return (
    <div className="w-full h-auto mt-60 lg:mt-0 px-5 lg:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-0">
        <div className="w-full lg:w-1/2 h-auto pt-44 lg:pb-20">
          <div className="flex items-center justify-start gap-1">
            <span className="text-2xl lg:text-4xl text-black/80">
              <MdContactPage />
            </span>
            <Title title="Contact Me" />
          </div>

          <>
            {contactList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-y-4 justify-start items-start"
              >
                <div className="flex items-center gap-5 lg:gap-10 mt-5">
                  <div className="flex items-center gap-1 lg:gap-2">
                    <PiStarFourFill className="text-primary text-2xl" />
                    <h4 className="lg:text-2xl font-bold text-black/80">
                      {item.name}
                    </h4>
                  </div>

                  <Title className="lg:text-xl text-black/60">
                    {item.info}
                  </Title>
                </div>

                {item.id < 3 && (
                  <hr className="w-8 h-[2px] border-0 bg-primary rotate-90 -ms-1" />
                )}
              </div>
            ))}
          </>
        </div>

        <div className="w-full lg:w-1/2 h-full py-5 lg:py-10">
          <>
            <div className="flex items-center justify-start gap-1">
              <span className="text-2xl lg:text-4xl text-black/80">
                <MdLanguage />
              </span>
              <Title title="Language" />
            </div>

            <div className="px-2 py-3">
              <h4 className="font-semibold text-xl lg:text-2xl text-black/80">
                English :
                <span className="lg:text-lg text-black/70">Intermediate</span>
              </h4>
            </div>
          </>

          <div className="mt-5 lg:mt-10">
            <div className="flex items-center justify-start gap-1">
              <span className="text-2xl lg:text-4xl text-black/80">
                <RiPresentationFill />
              </span>
              <Title title="More Information" />
            </div>

            <div className="px-2 py-3">
              <h4 className="font-semibold text-xl lg:text-2xl text-black/80">
                Sahar Samadi
              </h4>
              <p className="lg:text-lg text-black/70">Kermanshah, Iran</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
