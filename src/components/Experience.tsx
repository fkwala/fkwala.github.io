import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col">
      <div className="flex items-center space-x-4">
        <img
          src={experience.icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <div className="flex flex-col">
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
          <p className="text-secondary text-[16px]" style={{ margin: 0 }}>
            {experience.date}
          </p>
        </div>
      </div>
      <ul className="list-disc list-inside pl-5">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-secondary text-[16px]"
            style={{ marginTop: "2px" }}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
