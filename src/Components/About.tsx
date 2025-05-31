
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full h-full py-10 ">
      <h3 className="text-black/50 text-xl capitalize">
        hello, I'm sahar samadi
      </h3>
      <h1 className="text-black/90 text-5xl lg:text-6xl font-semibold my-5 capitalize">
        Web <span className="text-[#ffc102]">Developer.</span>
      </h1>

      <p className="text-black/50 text-start max-w-xl my-2">
        My name is Sahar Samadi. I am a web developer who has been trained for
        three years. I started my work with WordPress and then for some parts I
        needed to use HTML CSS so I learned HTML CSS, but everything was so
        interesting to me that I kept learning. Currently I am fluent in
        JavaScript, React, Next, TypeScript.
      </p>

      <div className="flex gap-4 mt-8">
        <Link
          to="/my-resume"
          className="bg-white text-[#ffc102] duration-500 ease-linear 
          hover:shadow-lg font-semibold py-2 px-6 border border-[#ffc102] 
          rounded-full shadow capitalize"
        >
          my resume
        </Link>
        <Link
          to="/portfolio"
          className="bg-[#ffc102] text-white duration-500 ease-linear 
          hover:shadow-lg font-semibold py-2 px-6 border border-[#ffc102] 
          rounded-full shadow capitalize"
        >
          view portfolio
        </Link>
      </div>
    </div>
  );
}

export default About;
