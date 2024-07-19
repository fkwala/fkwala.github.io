import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, headingMotion } from "../utils/motion";
import { aboutDescription } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div>
        <motion.div variants={headingMotion()}>
          <h2 className={styles.sectionHeadText}>About me</h2>
        </motion.div>
        <motion.p
          variants={fadeIn()}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {aboutDescription}
        </motion.p>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
