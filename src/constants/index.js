import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    shirtopia,
    raven,
    PuppyProwl,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
      url : "https://resumeofsneha.netlify.app",
      external: true,
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
  ];
  
  
  const projects = [
    {
      title: "Shirtopia - ThreeJS 3D product website",
      description:
        "A 3D customization tool empowers you to unleash your imagination and craft your own one-of-a-kind shirt.The creation process involves designing the website's layout and user interface, implementing the desired features using the chosen technologies, and refining the design and functionality through testing and iterations.",
      tags: [
        {
          name: "threeeJS in React",
          color: "blue-text-gradient",
        },
        {
          name: "Rapid API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shirtopia,
      source_code_link: "https://github.com/snehSumi/Shirtopia",
    },
    {
      title: "Raven-Rush",
      description:
        "Raven Rush was created using HTML5 Canvas and JavaScript. The combination of these technologies allowed for the development of an interactive and visually appealing game that can be played directly in a web browserWeb application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "HTML5 canvas",
          color: "blue-text-gradient",
        },
        {
          name: "Vanilla Javascripti",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: raven,
      source_code_link: "https://github.com/snehSumi/Raven-Rush",
    },
    {
      title: "Puppy Prowl",
      description:
      "Puppy Prowl was developed using HTML, CSS, and JavaScript. The game utilizes the HTML5 canvas element for rendering graphics and providing an interactive gaming experience. The game mechanics and functionality were implemented using vanilla JavaScript." ,
      tags: [
        {
          name: "HTML5 canvas",
          color: "blue-text-gradient",
        },
        {
          name: "Vanilla Javascripti",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: PuppyProwl,
      source_code_link: "https://github.com/snehSumi/Puppy-Prowl",
    },
  ];
  
  export { services, technologies, projects };