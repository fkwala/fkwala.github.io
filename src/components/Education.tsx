import React from "react";
import { motion } from "framer-motion";
import { fadeIn, headingMotion } from "../utils/motion";
import { styles } from "../styles";
import { educations } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

type Education = {
  name: string;
  icon: string;
  degree: string;
  years: string;
  awards: string[];
  involvements: string[];
  courses: string[];
};

const Education = () => {
  return (
    <>
      <motion.div variants={headingMotion()}>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {educations.map((education, index) => (
          <EducationCard key={`education-${index}`} education={education} />
        ))}
      </div>
    </>
  );
};

const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
  <motion.div
    variants={fadeIn()}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col">
      <div className="flex items-center space-x-4">
        <img src={education.icon} className="w-16 h-16 object-contain" />
        <div className="flex flex-col">
          <h2 className="text-white text-[24px] font-bold">{education.name}</h2>
          <h3 className="text-white text-[20px] font-bold">
            {education.degree}
          </h3>
          <h3 className="text-white text-[20px] font-bold">
            {education.years}
          </h3>
        </div>
      </div>
      <h4 className="pt-4 text-[18px] font-bold">Awards</h4>
      <ul className="list-disc list-inside pl-5">
        {education.awards.map((award, index) => (
          <li
            key={index}
            className="text-secondary text-[16px]"
            style={{ marginTop: "2px" }}
          >
            {award}
          </li>
        ))}
      </ul>
      <h4 className="pt-4 text-[18px] font-bold">Community Involvement</h4>
      <ul className="list-disc list-inside pl-5">
        {education.involvements.map((involvement, index) => (
          <li
            key={index}
            className="text-secondary text-[16px]"
            style={{ marginTop: "2px" }}
          >
            {involvement}
          </li>
        ))}
      </ul>
      <h4 className="pt-4 text-[18px] font-bold">Relevant Courses</h4>
      <ul className="list-disc list-inside pl-5">
        {education.courses.map((course, index) => (
          <li
            key={index}
            className="text-secondary text-[16px]"
            style={{ marginTop: "2px" }}
          >
            {course}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);
export default SectionWrapper(Education, "education");
