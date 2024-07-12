import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  sectionId: string
): React.FC<P> => {
  return function HOC(props: P) {
    return (
      <motion.section
        id={sectionId}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component {...props} />
      </motion.section>
    );
  };
};

export default SectionWrapper;
