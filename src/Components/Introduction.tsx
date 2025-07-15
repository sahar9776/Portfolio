import { motion } from "framer-motion";
import Title from "./Title";
import { parentVariants } from "../pages/Home";

function Introduction() {
  const myName: Array<string> = ["S", "A", "H", "A", "R"];

  const childVariants = {
    hidden: { opacity: 0, x: "1000px" },
    show: {
      opacity: 1,
      x: "0px",
    },
  };

  return (
    <div className="w-full h-auto lg:h-[760px] flex items-end relative">
      <div className="container h-[520px] lg:h-[420px] bg-primary lg:rounded-xl mx-auto ">
        <motion.img
          initial={{ y: "-1000px" }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1.4,
            type: "spring",
          }}
          src="/images/miss.jpg"
          alt=""
          className="max-w-full lg:w-96 h-auto absolute bottom-[174px] left-[50%] -translate-x-[50%]
           lg:bottom-10 lg:left-40 lg:translate-x-0 lg:rounded-sm"
        />

        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="w-[400px] h-auto text-center flex flex-col justify-end ps-20 z-50
         absolute top-5 left-5 lg:top-14 lg:left-48 border-4 border-r-0 border-white py-4 lg:py-0"
        >
          {myName.map((item, index) => (
            <motion.h2
              key={index}
              variants={childVariants}
              className="font-extrabold uppercase text-8xl lg:text-9xl
             text-white lg:text-black/80 ms-6 lg:ms-[220px]"
            >
              {item}
            </motion.h2>
          ))}
        </motion.div>

        <div className="w-full lg:w-auto absolute lg:right-24 top-96 px-5  lg:p-0 text-start">
          <Title
            title="Front-end Web Developer"
            className="text-xl lg:text-4xl font-bold text-white mt-2 lg:mt-0"
          />

          <p className="text-sm lg:text-lg text-white/80 w-full max-w-full lg:max-w-xl my-1 lg:my-5">
            My Name is Sahar Samadi . I am a front-end web developer who has
            been trained for three years and worked on various projects. I
            started my work with WordPress and then for some parts I needed to
            use HTML CSS.
            <span className="hidden lg:inline">
              I learned HTML CSS, but everything was so interesting to me that I
              learned JavaScript, React, Next, TypeScript, and also working with
              other packages and libraries.
            </span>
            Finally, whenever an idea came to my mind, I tried to code it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
