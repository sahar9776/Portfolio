import { motion } from "framer-motion";
import About from "../Components/About";

function Home() {
  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div
      className="max-w-screen w-full min-h-[545px] h-[545px]
     flex justify-center bg-white lg:bg-gradient-to-r lg:from-white lg:from-60% lg:to-[#ffc102] lg:to-40% "
    >
      <div className="container px-5 md:px-0 mx-auto flex">
        <div className="w-full lg:w-[60%] h-full">
          <About />
        </div>

        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="hidden lg:flex w-[40%] h-full relative overflow-hidden flex-col items-center"
        >
          <motion.div
            className="w-96 h-96 rounded-full bg-white/70 absolute top-[50%] -translate-y-[50%]
            left-[50%] -translate-x-[50%]"
            variants={childVariants}
          />
          <>
            <motion.img
              src="/images/employmentTwo.jpg"
              alt="site-idea-on-paper"
              className="max-w-[45%] h-auto rounded-tl-full rounded-bl-full absolute top-4 left-4"
              variants={childVariants}
            />
            <motion.img
              src="/images/employmentOne.jpg"
              alt="site-idea-on-paper"
              className="max-w-[45%] h-auto rounded-tr-full rounded-br-full absolute bottom-4 right-4"
              variants={childVariants}
            />
          </>

          <>
            <motion.h3
              variants={childVariants}
              className="uppercase text-black/75 text-5xl font-semibold absolute top-6 left-[52%]"
            >
              web
              <br />
              deve
              <br />
              loper
            </motion.h3>

            <motion.h3
              variants={childVariants}
              className="capitalize text-black/75 text-5xl font-semibold absolute bottom-6 right-[52%]"
            >
              next
              <br />
              or
              <br />
              react?
            </motion.h3>
          </>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
