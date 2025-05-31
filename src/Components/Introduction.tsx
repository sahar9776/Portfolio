import { motion } from "framer-motion";

function Introduction() {
  const animateVariants = {
    initial: { x: "-100vw" },
    visible: {
      x: "0px",
      transition: {
        duration: 2,
        type: "spring",
      },
    },
  };
  
  return (
    <div className="max-w-screen w-full h-[750px] bg-black overflow-hidden relative">
      <img
        src="../public/images/Introduction.jpg"
        alt="IntroductionBg"
        className="w-full h-auto
       opacity-60"
      />

      <motion.div
        variants={animateVariants}
        initial="initial"
        animate="visible"
        className="w-[900px] h-[900px] bg-black/75 absolute top-0 -left-60 rounded-2xl
       rotate-[35deg]"
      >
        <div
          className="w-[900px] h-20 bg-linear-70 from-black/70 to-[#ffc102] 
        rounded-br-2xl -ml-48"
        ></div>

        <div className="w-[400px] h-[400px] -rotate-[35deg] text-white p-5 mt-28 mx-auto">
          <h2 className="border-l-4 border-[#ffc102] px-2 text-4xl font-semibold">
            Who am I?
          </h2>
          <p className="text-[#ffc102] my-5">
            I am Sahar Samadi, 27 years old.
          </p>
          <p className="text-white/80 text-start max-w-xl my-2">
            I am a web developer who has been trained for two years and worked
            on various projects. I started my work with WordPress and then for
            some parts I needed to use HTML CSS. I learned HTML CSS, but
            everything was so interesting to me that I learned JavaScript,
            React, Next, TypeScript, and also working with other packages and
            libraries. Finally, whenever an idea came to my mind, I tried to
            code it.
          </p>
          <button
            className="bg-transparent text-[#ffc102] duration-300 ease-linear hover:bg-black/90
           font-semibold py-2 px-6 border border-[#ffc102] 
          rounded-full capitalize my-5 cursor-pointer"
          >
            Download CV
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Introduction;
