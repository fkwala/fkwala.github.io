import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styles } from "../styles";
import { motion } from "framer-motion";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Felicia",
      "a Software Developer",
      "a Foodie",
      "a Hiking Enthusiast",
      "a Music Lover",
    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello! I'm <span style={{ color: "purple" }}>{text}</span>
            <Cursor />
          </h1>
          <h4 className={`${styles.heroSubText} mt-2 text-white-100`}>
            Computer Science + Business Graduate from UBC
          </h4>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
export default Hero;
