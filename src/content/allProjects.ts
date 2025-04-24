import todoSplash from "../assets/splash/todo-splash.png";
import advancedTodoSplash from "../assets/splash/advanced-todo-splash.png";
import mteSplash from "../assets/splash/mte-splash.png";
import weatherSplash from "../assets/splash/weather-splash.png";
import { PROJECTS } from "../utils/mainEndpoints";
import { P_TODO, P_MTE, P_WEATHER } from "../utils/projectEndpoints";

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
  features: string[];
};

const projects: projectsType[] = [
  {
    heading: "Advanced Todo (in development)",
    image: advancedTodoSplash,
    moreInfo: P_TODO,
    links: [
      {
        value: "Live Demo on GitHub Pages",
        link: "https://sa9102.github.io/Advanced-Todo/",
      },
      {
        value: "Live Demo + Code on StackBlitz",
        link: "https://stackblitz.com/~/github.com/SA9102/Advanced-Todo?file=README.md",
      },
      {
        value: "GitHub Repository",
        link: "https://github.com/SA9102/Advanced-Todo",
      },
    ],
    paragraphs: [
      `A todo application designed for speed and productivity.`,
      `High focus on using best practices to write clean and maintainable
          code.`,
    ],
    features: [
      "Create, view, edit and delete todos",
      "Filter todos",
      "Todos have description, start/end datetimes, priority and tags",
    ],
  },
  {
    heading: "Markdown Text Editor",
    image: mteSplash,
    moreInfo: P_MTE,
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
        link: "https://stackblitz.com/~/github.com/SA9102/Markdown-Text-Editor-2.0?file=README.md",
      },
      {
        value: "GitHub Repository",
        link: "https://github.com/SA9102/Markdown-Text-Editor-2.0",
      },
    ],
    paragraphs: [
      `PLEASE NOTE: If you are viewing the application with the server, please allow for up to a minute for the server to start up (due to the limits of Render's free tier)`,
      `Create text files using Markdown syntax. Have them organised into folders and sub-folders. Save your files permanently and access them from any machine. Features light and dark modes.`,
    ],
    features: [
      "Create, view, edit and delete files",
      "Organise files into folders and sub-folders",
      "Create an account to permanently save files",
      "View recently-opened files",
      "Light and dark modes",
      "Responsive on smaller screens",
    ],
  },
  {
    heading: "Weather App",
    image: weatherSplash,
    moreInfo: P_WEATHER,
    links: [
      {
        value: "Live Demo on GitHub Pages",
        link: "https://sa9102.github.io/Weather-App/",
      },
      {
        value: "Live Demo + Code on StackBlitz",
        link: "https://stackblitz.com/~/github.com/SA9102/Markdown-Text-Editor-2.0?file=README.md",
      },
      {
        value: "GitHub Repository",
        link: "https://github.com/SA9102/Weather-App",
      },
    ],
    paragraphs: [
      `View weather and forecast information from any city, anywhere in the world. Uses APIs from OpenWeatherMap to fetch weather data.`,
    ],
    features: [
      "View weather and forecast anywhere",
      "Switch between Celsius and Fahrenheit",
      "Light and dark modes",
      "Responsive on smaller screens",
    ],
  },
];

export default projects;
