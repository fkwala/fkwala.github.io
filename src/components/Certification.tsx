import React from "react";
import { motion } from "framer-motion";
import { fadeIn, headingMotion } from "../utils/motion";
import { styles } from "../styles";
import { certs } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

type Cert = {
  title: string;
  name: string;
  icon: string;
  date: string;
};

const CertCard: React.FC<{ cert: Cert }> = ({ cert }) => (
  <motion.div
    variants={fadeIn()}
    className="w-2/5 green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col">
      <div className="flex items-center space-x-4">
        <img src={cert.icon} className="w-16 h-16 object-contain" />
        <div className="flex flex-col">
          <h3 className="text-white text-[24px] font-bold">{cert.title}</h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {cert.name}
          </p>
          <p className="text-secondary text-[16px]" style={{ margin: 0 }}>
            Issue Date: {cert.date}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Certification = () => {
  return (
    <>
      <motion.div variants={headingMotion()}>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {certs.map((cert, index) => (
          <CertCard key={`cert-${index}`} cert={cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certification");
