import { motion } from "framer-motion";
import About from "../Components/About";
import HomeAnimate from "../Components/HomeAnimate";
import { FaReact } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";

export const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.8,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Home() {
  return (
    <div
      className="max-w-screen w-full min-h-[545px] h-[545px]
     flex justify-center bg-white lg:bg-gradient-to-r lg:from-white lg:from-60% lg:to-[#ffc102] lg:to-40% "
    >
      <div className="container px-5 md:px-0 mx-auto lg:flex">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="w-full h-60 lg:hidden relative"
        >
          <motion.div
            className="w-56 h-56 rounded-full bg-primary
             absolute top-4 left-[50%] -translate-x-[50%]"
            variants={childVariants}
          />
          <motion.img
            src="/images/employmentThree.png"
            alt="employmentThree"
            className="min-w-[520px] h-auto absolute -top-6 left-[50%] -translate-x-[50%] drop-shadow-xl drop-shadow-black/70"
            variants={childVariants}
          />

          <>
            <motion.div
              variants={childVariants}
              className="w-16 h-16 rounded-full absolute top-3 right-1.5
             shadow-md shadow-black/50 flex justify-center items-center"
            >
              <FaReact className="text-4xl" />
            </motion.div>
            <motion.div
              variants={childVariants}
              className="w-16 h-16 rounded-full absolute bottom-2.5 left-1.5
             shadow-md shadow-black/50 flex justify-center items-center"
            >
              <AiOutlineJavaScript className="text-4xl" />
            </motion.div>
          </>
        </motion.div>

        <div className="w-full lg:w-[60%] h-full ">
          <About />
        </div>

        <HomeAnimate />
      </div>
    </div>
  );
}

export default Home;
