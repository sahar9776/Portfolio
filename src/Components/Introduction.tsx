import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import Title from "./Title";

function Introduction() {
  const myName: Array<string> = ["S", "A", "H", "A", "R"];

  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.8,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: "1000px" },
    show: {
      opacity: 1,
      x: "0px",
    },
  };

  return (
    <div className="w-full h-[760px] flex items-end relative">
      <div className="container h-[420px] bg-primary rounded-xl mx-auto ">
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
          className="w-96 h-auto absolute bottom-10 left-40 rounded-sm"
        />

        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="w-[400px] h-auto text-center flex flex-col justify-end ps-20
         absolute top-14 left-52 z-50 border-4 border-r-0  border-white"
        >
          {myName.map((item, index) => (
            <motion.h2
              key={index}
              variants={childVariants}
              className="font-extrabold uppercase text-9xl
             text-black/80 ms-[190px]"
            >
              {item}
            </motion.h2>
          ))}
        </motion.div>

        <div className="absolute right-24 top-96 text-start">
          <Title
            title="Front-end Web Developer"
            className="text-4xl font-bold text-white "
          />

          <p className="text-white/80 text-start max-w-72 lg:max-w-xl my-5">
            My Name is Sahar Samadi . I am a front-end web developer who has
            been trained for three years and worked on various projects. I started
            my work with WordPress and then for some parts I needed to use HTML
            CSS. I learned HTML CSS, but everything was so interesting to me
            that I learned JavaScript, React, Next, TypeScript, and also working
            with other packages and libraries. Finally, whenever an idea came to
            my mind, I tried to code it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
