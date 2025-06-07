import { mySkills } from "../assets/data/data";
import SkillItem from "./SkillItem";
import Title from "./Title";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="max-w-screen h-auto py-24 px-5 lg:px-0">
      <Title title="my skills" align="text-center" />
      <p className="text-center text-slate-400 mt-5 max-w-xl mx-auto">
        The world of programming is very vast. The percentages I wrote below, I
        think are only a percentage of the topic that can be learned on your
        own, and the remaining percentage is what I believe should be learned in
        a team.
      </p>

      <div className="w-full h-auto flex py-5">
        <div className="w-full lg:w-[64%] h-auto flex flex-wrap justify-center items-center gap-5">
          {mySkills.map((item, index) => (
            <SkillItem key={index} {...item} />
          ))}
        </div>

        <div className="w-full lg:w-[36%] h-auto hidden lg:flex relative">
          <img
            src="/images/developer.png"
            alt="developer"
            className="w-full h-auto"
          />

          <motion.h3
            initial={{ right: "-100%" }}
            animate={{ right: "1%" }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="text-xl font-semibold text-white bg-primary rounded-full
             px-10 py-2 absolute top-10"
          >
            Next Or React?
          </motion.h3>

          <motion.h3
            initial={{ left: "-100%" }}
            animate={{ left: "0%" }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="text-xl font-semibold text-white bg-primary rounded-full
             px-10 py-2 absolute bottom-5"
          >
            Freelancer
          </motion.h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
