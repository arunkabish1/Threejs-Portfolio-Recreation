
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  image,
  image4,
  image3,
  typescript,
  html,
  wd201,
  wd301,
  MAPATHON,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nptel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Overview",
  },
  {
    id: "work",
    title: "Path",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },{
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Problem Solving through Programming in C",
    company_name: "NPTEL",
    icon: tesla,
    iconBg: "#383E56",
    date: "JUL-OCT 2022",
    points: [
      "Nptel Certification for C language",
    ],
    image: nptel
    
  },
  {
    title: "IIT FOOSEE MAPATHON WINNER",
    company_name: "IIT FOOSSEE",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "FEB-MAY 2023",
    points: [
      "Mapathon is a map making competition for creating thematic maps, using open source data and mapping software."
    ],
    image: MAPATHON
  },
  {
    title: "WD201 - Web Developer Course",
    company_name: "AICTE PUPILFIRST",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
    ],
    image: wd201
  },
  {
    title: "WD301 - Web Developer Course",
    company_name: "AICTE PUPILFIRST",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
    image: wd301
  },
  {
    title: "WD401-Production Web Developer Course",
    company_name: "AICTE PUPILFIRST",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Few Days to Go for Course Completion !",
      "Developing and maintaining web applications from scratch using company production and other related technologies.",
    ],
    // image: wd301
   },
];

const testimonials = [
  // {
  //   testimonial:
  //     "They thought it was impossible to make a website as beautiful as our product, but I proved they wrong.",
  //   name: "ITS ME",
  //   designation: "",
  //   company: "",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  
];

const projects = [
  {
    name: "IETEC Website Design Challenge", 
    description:
      " Web application that enables users to search for IETEC events, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: image4,
    source_code_link: "https://arunkabish1.github.io/ietec/Home",
  },
  {
    name: "Sports News Website",
    description:
      "Web application that enables users to search for sports news.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: image3,
    source_code_link: "https://sports-app-arunkabish.netlify.app/scorepanel",
  },
  {
    name: "LMS Website",
    description:
      " Web application that enables users to search for courses, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: image,
    source_code_link: "https://lms-app-4x6h.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
