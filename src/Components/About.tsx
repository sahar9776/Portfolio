
import { PiDownloadSimpleFill } from "react-icons/pi";
import { useState } from "react";
import ContactSidebar from "./ContactSidebar";

function About() {
  const resumeURL = "/files/sahar-samadi.pdf";
  const [isOpenContact, setIsOpenContact] = useState<boolean>(false);

  const handleContact=()=>{
    setIsOpenContact(!isOpenContact)
  }

  return (
    <div className="w-full h-full py-10 ">
      <h3 className="text-black/70 text-xl capitalize">
        hello, I'm sahar samadi
      </h3>
      <h1 className="text-black/90 text-5xl lg:text-6xl font-semibold my-5 capitalize">
        Web <span className="text-[#ffc102]">Developer.</span>
      </h1>

      <p className="text-black/50 text-start w-full lg:max-w-xl my-2">
        My name is Sahar Samadi. I am a web developer who has been trained for
        three years. I started my work with WordPress and then for some parts I
        needed to use HTML CSS so I learned HTML CSS, but everything was so
        interesting to me that I kept learning. Currently I am fluent in
        JavaScript, React, Next, TypeScript.
      </p>

      <div className="flex gap-4 mt-8">
        <button>
          <a
            href={resumeURL}
            download="Sahar-Samadi"
            target="_blank"
            className="bg-white text-primary border border-[#ffc102] 
            duration-500 ease-linear hover:shadow-lg
            font-semibold py-2 px-4 lg:px-6 rounded-full flex gap-1 items-center"
          >
            <PiDownloadSimpleFill className="text-2xl hidden lg:block" />
            <span>Download CV</span>
          </a>
        </button>
        <button
        onClick={handleContact}
          className="bg-primary text-white border border-[#ffc102] 
          duration-500 ease-linear hover:shadow-lg
           font-semibold py-2 px-4 lg:px-6 rounded-full"
        >
          Contact Me
        </button>
      </div>

      <div>
        <ContactSidebar isOpen={isOpenContact} handleClose={handleContact} />
      </div>
    </div>
  );
}

export default About;
