import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styles } from "../styles";

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
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex justify-center items-center`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Hello! I'm <span style={{ color: "purple" }}>{text}</span>
            <Cursor />
          </h1>
          <h4
            className={`${styles.heroSubText} mt-2 text-white-100 text-center`}
          >
            Computer Science + Business Graduate from UBC
          </h4>
        </div>
      </div>
    </section>
  );
}
export default Hero;
