import {
  email,
  github,
  linkedin,
  copperleaf,
  portrait,
  rbc,
  ubc_cs,
  the_code_initiative,
  ubc,
  scrum_alliance,
  ubc_sauder,
  personal_website,
  cybersecurity_scripts
} from "./assets/index";

const contacts = [
  {
    icon: email,
    title: "feliciak.work@gmail.com"
  },
  {
    icon: linkedin,
    title: "https://www.linkedin.com/in/fkwala/"
  },
  {
    icon: github,
    title: "https://github.com/fkwala"
  }
];

const aboutInfo = {
  description: "I'm a recent CS + Business new graduate from the University of British Columbia (Vancouver). Having accomplished almost 2 years' worth of internships, I have gained substantial industrial software engineering experience. Beyond coding, I enjoy searching for new food and hiking spots . You may also find me lingering around random music shops to faze over the latest instrument accessories... :D",
  picture: portrait
};

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
    id: "education",
    title: "Education",
  },
  {
    id: "certification",
    title: "Certification",
  },
  {
    id: "project",
    title: "Project",
  },
];

const experiences = [
  {
    title: "Full-stack Software Developer Intern",
    company_name: "Copperleaf Technologies Inc. - Product Suite",
    icon: copperleaf,
    date: "May 2023 - July 2023",
    points: [
      "Enhanced Product UX by collaborating with UX designers to create and translate new design mock-ups to Angular web components.", 
      "Resolved legacy product issues by creating new Angular components and integrating them into multiple existing Angular.js and ASP.NET web pages."],
    tech: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      }
    ]
  },
  {
    title: "Full-stack Software Developer Intern",
    company_name: "Copperleaf Technologies Inc. - Decision Analytics",
    icon: copperleaf,
    date: "May 2022 - December 2022",
    points: [
      "Enhanced UX experience at 40+ client sites by re-designing web UX (grid filters, etc) in TypeScript.",
      "Resolved critical hidden search engine issues for major clients involving complex SQL queries.",
      "Reduced developer testing and debugging time by developing new multiple-error collection log handling feature in C#.",
      "Reduced manual regression testing time by up to 50% with test automation in Selenium."],
      tech: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: ".NET",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
        {
          name: "Selenium",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "blue-text-gradient",
        }
      ]
  },
  {
    title: "Coding Tutor",
    company_name: "The C.O.D.E. Initiative",
    icon: the_code_initiative,
    date: "May 2022 - Present",
    points: [
      "Mentored neuro-diverse children and youths (ages 8-18) on Java and Python (AI).",
      "Achieved high student retention rate by adopting effective customized 1:1 lesson plans.",],
      tech: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        }
      ]
  },
  {
    title: "Undergraduate Teaching Assistant",
    company_name: "University of British Columbia",
    icon: ubc_cs,
    date: "Sep 2021 - Dec 2021",
    points: [
      "Assisted 60+ CS students in UBC 2nd year Software Construction course.",
      "Conducted lab sessions, code reviews, and graded assignments/tests.",
      "Received a 90% teaching evaluation rate for coaching students in OOP and code troubleshooting.",],
    tech: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JUnit",
        color: "pink-text-gradient",
      },
      {
        name: "JSON",
        color: "green-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      }
    ]
  },
  {
    title: "Software QA Engineer Intern",
    company_name: "Royal Bank of Canada - Wealth Management Team",
    icon: rbc,
    date: "Jan 2021 - Aug 2021",
    points: [
      "Reduced testing time by automating 100+ tests for RBC wealth management web/mobile apps.",
      "Setup and ran API and UI feature, integration, and performance tests in CI/CD Jenkins pipeline.",
      "Side project: Enhanced scrum team project tracking by creating a Sprint project tracker web app in Node.js.",
      "Side project: Incorporated MVC architecture and RESTful APIs for front and back-end integration."],
    tech: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "LoadRunner",
        color: "green-text-gradient",
      },
      {
        name: "Jenkins",
        color: "blue-text-gradient",
      }
    ]
  },
];

const educations = [
  {
    name: "University of British Columbia",
    icon: ubc,
    degree: "Bachelors in Computer Science and Business",
    years: "2019 - 2024",
    awards: [
      "Dean’s Honor Roll 2019, 2020, 2021, 2022",
      "Trek Excellence Scholarship for Continuing Students 2020, 2022 (Top 5% in faculty)"
    ],
    involvements: [
      "UBC Launch Pad Software Developer 2022 - 2023",
      "UBC Commerce Undegraduate Society IT Director 2020 - 2021",
      "UBC Sauder Summit Global Case Competition Event Manager 2020",
      "UBC BizTech Tri-mentorship Program Mentee 2019 - 2020"
    ],
    courses:[
      "CPSC 416 (Distributed Systems), CPSC 436S (Computer Security)",
      "CPSC 330 (Applied Machine Learning), CPSC 317 (Internet Computing), CPSC 320 (Algorithm Design & Analysis)",
      "CPSC 313 (Computer Hardware & Operating Systems), CPSC 304 (Relational Databases), CPSC 310 (Software Engineering)",
      "CPSC 221 (Data Structures & Algorithms), CPSC 213 (Computer Systems), CPSC 210 (Software Construction)",
      "CPSC 110 (Systematic Programming), CPSC 121 (Models of Computation)"
    ]
  }
]

const certs = [
  {
    title: "Certified ScrumMaster",
    name: "Scrum Alliance",
    icon: scrum_alliance,
    date: "August 8, 2021",
  },
  {
    title: "Management in Times of Crisis",
    name: "UBC Sauder School of Business",
    icon: ubc_sauder,
    date: "April 25, 2021",
  }
];

const projects = [
  {
    name: "Personal Website",
    description:
      "The current website you are on!",
    tech: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
    ],
    image: personal_website,
    source: "https://github.com/fkwala",
  },
  {
    name: "Cybersecurity Scripts",
    description:
      "A compilation of cybersecurity problems and attacks... just for fun",
    tech: [
      {
        name: "Python",
        color: "blue-text-gradient",
      }
    ],
    image: cybersecurity_scripts,
    source: "https://github.com/fkwala/cybersecurity-scripts",
  },
];

export { contacts, aboutInfo, navLinks, experiences, educations, certs, projects };