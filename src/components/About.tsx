import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a recent CS + Business new graduate from the University of British
        Columbia (Vancouver). Having accomplished almost 2 years' worth of
        internships, I have gained substantial industrial software engineering
        experience. Beyond coding, I enjoy searching for new food and hiking
        spots . You may also find me lingering around random music shops to faze
        over the latest instrument accessories... :D
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
