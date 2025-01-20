import mteSplash from "../assets/splash/mte-splash.png";
import { PROJECTS } from "../utils/mainEndpoints";
import { P_TODO } from "../utils/projectEndpoints";

type linksType = {
  value: string;
  link: string;
};

type projectsType = {
  heading: string;
  image: string;
  moreInfo: string;
  links: linksType[];
  paragraphs: string[];
};

const projects: projectsType[] = [
  {
    heading: "Todo App (in development)",
    image: mteSplash,
    moreInfo: P_TODO,
    links: [
      {
        value: "Live Demo on GitHub Pages",
        link: "https://sa9102.github.io/Todo-App/",
      },
      {
        value: "Live Demo + Code on StackBlitz",
        link: "https://stackblitz.com/~/github.com/SA9102/Todo-App?file=README.md",
      },
      {
        value: "GitHub Repository",
        link: "https://github.com/SA9102/Todo-App",
      },
    ],
    paragraphs: [
      `My attempt to turn a simple todo application into a powerful tool for
          productivity.`,
      `High focus on using best practices to write clean and maintainable
          code.`,
    ],
  },
  {
    heading: "Markdown Text Editor",
    image: mteSplash,
    moreInfo: "",
    links: [
      {
        value: "Live Demo (without server)",
        link: "https://markdown-text-editor-2-0.onrender.com/",
      },
      {
        value: "Live Demo (with server) - wait for up to a minute",
        link: "https://mte2-backend.onrender.com/",
      },
      {
        value: "Code on StackBlitz",
        link: "https://stackblitz.com/~/github.com/SA9102/Todo-App?file=README.md",
      },
      {
        value: "GitHub Repository",
        link: "https://stackblitz.com/~/github.com/SA9102/Markdown-Text-Editor-2.0?file=README.md",
      },
    ],
    paragraphs: [
      `PLEASE NOTE: If you are viewing the application with the server, please allow for up to a minute for the server to start up (due to the limits of Render's free tier)`,
      `Create text files `,
    ],
  },
];

export default projects;
