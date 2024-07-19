import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerSections, fadeIn } from "../utils/motion";

// const SectionWrapper = <P extends object>(
//   Component: React.ComponentType<P>,
//   sectionId: string
// ): React.FC<P> => {
//   return function HOC(props: P) {
//     return (
//       <motion.section
//         id={sectionId}
//         variants={staggerSections()}
//         initial="hidden"
//         animate="show"
//         className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//       >
//         <Component {...props} />
//       </motion.section>
//     );
//   };
// };
const TestComponent = () => (
  <motion.div variants={staggerSections()} initial="hidden" animate="show">
    <motion.div variants={fadeIn()}>Item 1</motion.div>
    <motion.div variants={fadeIn()}>Item 2</motion.div>
    <motion.div variants={fadeIn()}>Item 3</motion.div>
  </motion.div>
);

export default TestComponent;
