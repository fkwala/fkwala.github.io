const headingMotion = () => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 3,
          delay: 0.1,
        },
      },
    };
  };

const fadeIn = () => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
});
  
const staggerSections = () => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // Adjust to control stagger timing
      delayChildren: 0.2,   // Adjust to control initial delay
    },
  },
});

export { headingMotion, fadeIn, staggerSections }