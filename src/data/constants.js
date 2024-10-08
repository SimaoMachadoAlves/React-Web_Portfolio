import BackOffice from "../images/BackOffice.png";
import App from "../images/App.png";
import github_whitelogo from "../images/github_whitelogo.png";
import VolleyStats from "../images/VolleyStats.png";
import AGC from "../images/AGC.png";
import GoHelp_LandingPage from "../images/GoHelp_LandingPage.png";
import Arquiconsult from "../images/arquiconsult.jpg";
import CV_SimaoAntonioMachadoAlves from "../utils/CV_SimaoAntonioMachadoAlves.pdf";

/* ---------------------------------------- BIO  ---------------------------------------- */
export const Bio = {
  name: "Simão Alves",
  roles: [
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "D365 F&O Consultant",
  ],
  description:
    "I'm 21 years old and my main goal is to become a full stack dev. Web development is my passion and with my dedication I know for sure that I can succeed and achieve positive results. Three words that characterize me: Competent, flexible and proactive!",
  github: "https://github.com/SimaoMachadoAlves",
  resume: CV_SimaoAntonioMachadoAlves,
  linkedin:
    "https://www.linkedin.com/in/sim%C3%A3o-alves-89256222b/?originalSubdomain=pt",
  twitter: "https://x.com/simao_alves20",
  insta: "https://www.instagram.com/simaoalves20/",
};

/* ---------------------------------------- SKILLS  ---------------------------------------- */
export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Vue Js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "X++",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinZNu02fBBhCLD6x9CsJ68WGhLxrfvjQEMQ&s",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      },
      {
        name: "GitHub",
        image: github_whitelogo,
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: "https://www.svgrepo.com/show/354202/postman-icon.svg",
      },
      {
        name: "Figma",
        image:
          "https://blog.greggant.com/images/posts/2019-04-25-figma/Figma.png",
      },
    ],
  },
];

/* ---------------------------------------- EXPERIENCE  ---------------------------------------- */
export const experiences = [
  {
    id: 0,
    img: Arquiconsult,
    role: "Junior Consultant",
    company: "Arquiconsult",
    date: "Oct 2024 - Today",
    desc: "Working with Microsoft Dynamics 365 Finance and Operations (F&O) in the implementation, customization, support and optimization proccesses.",
    skills: ["D365 F&O", "X++", "Azure DevOps"],
    doc: "",
  },
];

/* ---------------------------------------- EDUCATION  ---------------------------------------- */
export const education = [
  {
    id: 0,
    img: "https://lh5.googleusercontent.com/proxy/Jrqqwnr2ZWqrniVf_HqlNK-QFRwvbOR5AL_4DDb1jimE6A996aPo4FtJp4DZE6uXcIQgSwpvzhOzkCjMC3xz0iDhKhVrKlNx6cU",
    school: "University of Minho, Braga",
    date: "Sep 2021 - Jun 2024",
    grade: "15.56",
    desc: "I completed my degree in Engineering and Management of Information Systems, Braga. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Web Environment, among others.",
    degree: "Bachelor in Engineering and Management of Information Systems",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oUsO8t7B1YCFCsRkTWnM0JGARUf6Oc4UbA&s",
    school: "Dona Maria II Secondary School, Braga",
    date: "Sep 2018 - Jun 2021",
    grade: "17",
    desc: "I completed my class 12 high school education at Dona Maria II Secondary School, where I studied Science and Technologies.",
    degree: "Science and Technologies",
  },
];

/* ---------------------------------------- PROJECTS  ---------------------------------------- */
export const projects = [
  {
    id: 0,
    title: "VolleyStats",
    date: "Fev 2023 - May 2023",
    description:
      "Developed an app in JavaFX for the VSC Volleyball team, where they could do the management of their teams. The data was saved and fetch directly in a SQL server (Ubuntu) provided by the University.",
    image: VolleyStats,
    tags: ["Java", "JavaFX", "MySQL"],
    category: "app",
    github: "https://github.com/SimaoMachadoAlves/JAVAFX-Project",
    webapp: "https://www.youtube.com/watch?v=lIsHudl_sJo",
    member: [
      {
        name: "Simão Alves",
        img: "https://avatars.githubusercontent.com/u/154460266?v=4&size=64",
        linkedin:
          "https://www.linkedin.com/in/sim%C3%A3o-alves-89256222b/?originalSubdomain=pt",
        github: "https://github.com/SimaoMachadoAlves",
      },
      {
        name: "Rodrigo Esteves",
        img: "https://avatars.githubusercontent.com/u/152817048?v=4&size=64",
        linkedin: "https://www.linkedin.com/in/rodrigo-esteves-605823229/",
        github: "https://github.com/rodrigoesteves11",
      },
    ],
  },
  {
    id: 1,
    title: "Auto Gear Components",
    date: "Sep 2023 - Jan 2024",
    description:
      "Web application integrating SAP and Moloni systems, developed in Outsystems.",
    image: AGC,
    tags: ["Outsystems", "Rest API", "Postman"],
    category: "web app",
    github: "https://github.com/SimaoMachadoAlves/Middleware-Outsystems",
    webapp: "https://www.youtube.com/watch?v=rVBZ5Bfp7MA",
  },
  {
    id: 2,
    title: "GoHelp - FrontOffice",
    date: "Feb 2024 - Jun 2024",
    description:
      "GoHelp is a fictional organization whose main goal is to regrow culture in Portugal by creating some events such as book exchange, musical concerts and theaters. GoHelp FO is the landing page of Gohelp, where users can login via Google, check the current and upcomming events, register in an event, etc.",
    image: GoHelp_LandingPage,
    tags: ["LocalStorage", "SessionStorage"],
    category: "web app",
    github: "https://github.com/SimaoMachadoAlves/GoHelp-FO",
    webapp: "https://simaomachadoalves.github.io/GoHelp-FO/GoHelp/index.html",
    member: [
      /* {
        name: "Simão Alves",
        img: "https://avatars.githubusercontent.com/u/154460266?v=4&size=64",
        linkedin:
          "https://www.linkedin.com/in/sim%C3%A3o-alves-89256222b/?originalSubdomain=pt",
        github: "https://github.com/SimaoMachadoAlves",
      }, */
    ],
  },
  {
    id: 3,
    title: "GoHelp - BackOffice",
    date: "Feb 2024 - Jun 2024",
    description:
      "GoHelp BO is where the data is managed. The admin has access to all information about the users, events, materials, colaborators, etc and even a dashboard and some KPI's. He is in control and he decides whether or not an event will occur.",
    image: BackOffice,
    tags: ["LocalStorage", "SessionStorage"],
    category: "web app",
    github: "https://github.com/SimaoMachadoAlves/GoHelp-BO",
    webapp:
      "https://simaomachadoalves.github.io/GoHelp-BO/BACK-OFFICE/index.html",
    member: [
      {
        name: "Simão Alves",
        img: "https://avatars.githubusercontent.com/u/154460266?v=4&size=64",
        linkedin:
          "https://www.linkedin.com/in/sim%C3%A3o-alves-89256222b/?originalSubdomain=pt",
        github: "https://github.com/SimaoMachadoAlves",
      },
      {
        name: "Rodrigo Esteves",
        img: "https://avatars.githubusercontent.com/u/152817048?v=4&size=64",
        linkedin: "https://www.linkedin.com/in/rodrigo-esteves-605823229/",
        github: "https://github.com/rodrigoesteves11",
      },
    ],
  },
  {
    id: 4,
    title: "GoHelp - App",
    date: "Feb 2024 - Jun 2024",
    description:
      "GoHelp App is a management app (built in Vue.js) designed for the colaborators who are leading the current events. They can check presences and materials, sent some alerts to the office, register some actions, etc.",
    image: App,
    tags: ["Vue", "LocalStorage", "SessionStorage"],
    category: "web app",
    github: "https://github.com/SimaoMachadoAlves/GoHelp-APP",
    webapp: "https://simaomachadoalves.github.io/GoHelp-APP/",
    member: [
      {
        name: "Simão Alves",
        img: "https://avatars.githubusercontent.com/u/154460266?v=4&size=64",
        linkedin:
          "https://www.linkedin.com/in/sim%C3%A3o-alves-89256222b/?originalSubdomain=pt",
        github: "https://github.com/SimaoMachadoAlves",
      },
      {
        name: "João Domingos",
        img: "https://avatars.githubusercontent.com/u/122760661?v=4&size=64",
        linkedin:
          "https://www.linkedin.com/in/jo%C3%A3o-domingos-correia-borges-50026329a/",
        github: "https://github.com/mingos11",
      },
    ],
  },
];

/*export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
  ];*/
