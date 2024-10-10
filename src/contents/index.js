import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import GPT from "../assets/img/GPT.png";
import eKart from "../assets/img/eKart.png";
import weather from "../assets/img/weather.png";
// import dhd from '/assets/projects'

export const HERO_CONTENT = `I’m a passionate full stack developer skilled in creating robust web applications. With expertise in HTML5, CSS3, TailwindCSS, and React on the front end, and Python, Django, Node.js, Express.js, MySQL, PostgreSQL, and MongoDB on the back end, I aim to leverage my skills to build innovative solutions and enhance user experiences.`;

export const ABOUT_TEXT = `I'm Sriram, a graduate from National Institute of Technology, Rourkela and an aspiring full-stack web developer. With a strong foundation in Python, Javascript, I've expanded my skills to include Django, Node.js, Express.js, React.js, MongoDB, HTML5, CSS, and Tailwind CSS. I’m passionate about building scalable web applications and eager to learn and collaborate on new projects.`;

export const EXPERIENCES = [
   {
    year: "May 2023 - July 2023",
    role: "Full Stack Developer Intern",
    company: "Fractal Analytics",
    description: `Developed responsive user interfaces for a Warehouse Management System tracking application using React.js, collaborating with senior developers and design teams to implement industry best practices. Enhanced user engagement by introducing features like time stamps and dark mode, leading to a 25% increase in user interaction and satisfaction.`,
    technologies: ["HTML", "CSS", "React.js", "JavaScript", "ANTD"]
  },
  {
    year: "Aug 2023 - Mar 2023",
    role: "Web Developer Intern",
    company: "NIT Rourkela",
    description: `Developed and maintained a high-performance conference website for IPDIMS using JavaScript, React.js, and EmailJS, enhancing user engagement by 40%. Optimized the research paper submission process by 60% through automated email integration, streamlining submissions directly to the admin. Improved content management to provide timely updates, increasing visitor retention with accurate conference announcements and deadlines.`,
    technologies: ["HTML", "CSS", "React.js", "JavaScript", "TailwindCSS"]
  }

];

export const PROJECTS = [
  {
    title: "AI-Chatbot-MERN",
    repoLink:"https://github.com/SriramM18/AI-Chatbot-MERN",
    image: GPT,
    description:
      "This project is a chatbot that leverages OpenAI's GPT-3.5 Turbo model, built with React for the frontend, Express for the backend, and MongoDB for data storage. It provides users with an intuitive interface to engage in natural language conversations powered by the GPT-3.5 Turbo model..",
    technologies: ["HTML", "CSS", "TailwindCSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "EKart ",
    repoLink:"https://github.com/SriramM18/EKart",
    image: eKart,
    description:
      "Developed an e-commerce platform using the Django framework, showcasing a catalog of 30+ products. Enabled customers to browse, add items to their cart, specify quantities, and complete purchases. Integrated a seamless checkout process with order placement, payment, and order tracking functionalities.",
    technologies: ["HTML", "CSS", "Django"],
  },
  {
    title: "Weather Forecast",
    repoLink:"https://github.com/SriramM18/Weather-Forecast",
    image: weather,
    description:
      "A simple and intuitive web application that provides real-time weather information based on user location. Built with a focus on ease of use, the app offers a clean and responsive design, making it accessible on any device.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Express.js", "Node.js", "API"],
  },
];

export const CONTACT = {
  address: "Andhra Pradesh, India",
  phoneNo: "+917569381223",
  email1: "srirammandalapu49@gmail.com",
  email2: "mandalapusriram18@gmail.com",
};

