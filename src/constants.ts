import {
  copperleaf,
  rbc,
  ubc_cs,
  the_code_initiative,
} from "./assets/index";

const aboutDescription = "I'm a recent CS + Business new graduate from the University of British Columbia (Vancouver). Having accomplished almost 2 years' worth of internships, I have gained substantial industrial software engineering experience. Beyond coding, I enjoy searching for new food and hiking spots . You may also find me lingering around random music shops to faze over the latest instrument accessories... :D"

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const experiences = [
    {
      title: "Full-stack Developer Intern",
      company_name: "Copperleaf Technologies Inc. - Product Suite",
      icon: copperleaf,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Enhanced Product UX by collaborating with UX designers to create and translate new design mock-ups to Angular web components.", 
        "Resolved legacy product issues by creating new Angular components and integrating them into existing Angular.js and ASP.NET web pages."],
      technologies: [
        "C#", ".NET", "TypeScript", "Angular", "SQL", "Selenium", "AWS"
      ],
      
    },
    {
      title: "Full-stack Developer Intern",
      company_name: "Copperleaf Technologies Inc. - Decision Analytics",
      icon: copperleaf,
      iconBg: "#E6DEDD",
      date: "May 2022 - December 2022",
      points: [
        "Enhanced UX experience at 40+ client sites by re-designing web UX (grid filters, etc) in TypeScript.",
        "Resolved critical hidden search engine issues for major clients involving complex SQL queries.",
        "Reduced developer testing and debugging time by developing new multiple-error collection log handling feature in C#.",
        "Reduced manual regression testing time by up to 50% with test automation in Selenium."],
      technologies: [
        "C#", ".NET", "TypeScript", "Angular", "SQL", "Selenium", "AWS"
      ]
    },
    {
      title: "Coding Tutor",
      company_name: "The C.O.D.E. Initiative",
      icon: the_code_initiative,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Mentored neuro-diverse children and youths (ages 8-18) on Java and Python (AI).",
        "Achieved 100% student retention rate by adopting effective customized 1:1 lesson plans.",],
      technologies: [
        "Java", "Python"
      ]
    },
    {
      title: "Undergraduate Teaching Assistant",
      company_name: "University of British Columbia",
      icon: ubc_cs,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Dec 2021",
      points: [
        "Assisted 60+ CS students in UBC 2nd year Software Construction course.",
        "Conducted lab sessions, code reviews, and graded assignments/tests.",
        "Received a 90% teaching evaluation rate for coaching students in OOP and code troubleshooting.",],
      technologies: [
        "Java", "JUnit", "JSON", "GitHub"
      ]
    },
    {
      title: "Software QA Engineer Intern",
      company_name: "Royal Bank of Canada - Wealth Management Team",
      icon: rbc,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Aug 2021",
      points: [
        "Reduced testing time by automating 100+ tests for RBC wealth management web/mobile apps.",
        "Setup and ran API and UI feature, integration, and performance tests in CI/CD Jenkins pipeline.",
        "Enhanced scrum team project tracking by creating a Sprint project tracker web app in Node.js.",
        "Incorporated MVC architecture and RESTful APIs for front and back-end integration.",],
      technologies: [
        "Node.js", "Express.js", "EJS", "JavaScript"
      ]
    },
  ];

  export { aboutDescription, navLinks, experiences };