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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    minecraft,
    youtube,
    nft
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "Front End Developer",
      icon: backend,
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
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "IMBNET",
      icon: shopify,
      iconBg: "#383E56",
      date: "January 2021 - October 2021",
      points: [
        "Developing and maintaining Websites and E-shops using Shopify and Wordpress.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React FrontEnd Developer",
      company_name: "Digibridge",
      icon: typescript,
      iconBg: "#E6DEDD",
      date: "October 2021 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies in the insurance industry.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Enforcing responsive design principles and guaranteeing compatibility across different browsers.",
"Engaging in code reviews and offering constructive feedback to fellow developers."
      ],
    },
    {
      title: "Front End Developer",
      company_name: "PCCW GLOBAL",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Feb 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies in the Telecomunication Industry.",
        "Engaging in collaborative efforts with diverse teams, such as designers, product managers, and fellow developers, to craft top-notch products.",

"Executing responsive design techniques and verifying compatibility across various browsers.",

"Actively taking part in code reviews and offering valuable input to fellow developers in a constructive manner."
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Minecraft",
      description:
        "Minecraft clone directly to you browser using React and Three.js",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
      ],
      image: minecraft,
      source_code_link: "https://github.com/OrfeasNifakos/MinecraftJS",
    },
    {
      name: "Youtube",
      description:
        "Youtube Clone with React and rapidapi",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Rapidapi",
          color: "green-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/OrfeasNifakos/Youtube-CLone",
    },
    {
      name: "NFT MARKETPLACE",
      description:
        "WEB 3.0 Marketplace made with React Native and Expo",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Expo",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: nft,
      source_code_link: "https://github.com/OrfeasNifakos/NFT-Marketplace/tree/master",
    },
  ];
  
  export { services, technologies, experiences,  projects };