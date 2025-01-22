import projectPageType from "../types/projectPageType";

export const todoProject: projectPageType = {
  name: "Todo App (in development)",
  images: [],
  techStack: [
    "React",
    "TypeScript",
    "Vite",
    "Zustand",
    "React Router",
    "Node",
    "MongoDB",
    "Vitest (Jest)",
    "React Testing Library",
    "MUI",
  ],
  about: [
    "My attempt to create an efficient productivity tool beyond just the simple todo app. Was initially meant to be a todo application, but now I want to extend it into something much more.",
    "Still in the early stages of development, and slow progress due to university coursework.",
  ],
  features: [
    "Create, edit, and delete tasks",
    "Optionally add a description and priority to each task",
    "Filter tasks by text within name/description",
    "*Create an account to permanently save tasks",
    "*Download tasks in a certain format like JSON (undecided yet)",
    "*Undo task deletions",
    "*Recurring tasks on a daily/weekly/monthly basis",
    "*Eventually have it as a Progressive Web App (PWA)",
    // "*Sync tasks across multiple devices",
    "*Reminder notifications",
    "*Add quick notes unrelated to tasks",
    "*Possibly integrate a file editor within the application (to make it an all-in-one productivity tool)",
    "*Possibly be able to use it in a 'group' environment where you can share it with others and work on it in real time",
    "(And much more - see requirements.md in repository page)",
  ],
  motivation: [
    `This project will be my most complex and ambitious one to date for several reasons.
    Unlike with previous projects, with this project I want to challenge myself and see
    how far I can go and take a basic application (i.e. a simple todo app) and turn it
    into something really special. Moreover, it is my first project (and I will do this
    in future projects) where I take seriously the maintainability of my codebase, and
    the reusability of components. I am doing this through implementing best practices,
    such as global state (where appropriate) to avoid prop drilling, separating the logic
    from the UI (either putting the logic in a utility function or in a custom hook), and
    having a good folder structure. It is also my first React application where I am
    writing unit and integration tests for my components.`,
    `Some of my previous projects have messy and hard-to-maintain code, but I
    realise that even for small applications, this is not good as it will be
    hard to scale up the application. In professional development
    environments, codebases are expected to be clean and maintainable, and
    so I realise that being able to not just write code, but write clean
    code, is an important skill.`,
  ],
};

export const mteProject: projectPageType = {
  name: "Markdown Text Editor",
  images: [],
  techStack: [
    "React",
    "TypeScript",
    "Vite",
    "React Router",
    "Node",
    "Express",
    "MongoDB",
    "Mantine",
  ],
  about: [
    "Quickly create notes using Markdown, organise them into folders, and have them permanently saved.",
  ],

  features: [
    "View live weather and forecast data of almost any place in the world",
    "Switch between Celsius and Fahrenheit",
    "Light and dark modes",
    "Responsive for smaller screens",
  ],
  motivation: [
    `I made this project whilst still getting used to the React library.
    I wanted to create a simple project that made me get more comfortable
    in using the library, and also wanted to know how to fetch data using
    an API. For this, I used the useEffect hook.`,
    `I also decided to learn a bit of a React component library called
    Chakra UI, just to get a taste of what it's like and how it's used.`,
  ],
};

export const weatherProject: projectPageType = {
  name: "Weather App",
  images: [],
  techStack: ["React", "Chakra UI"],
  about: [
    "A simple React application that displays live weather and forecast information in a nice and minimal interface.",
    "Uses OpenWeatherMap API to retrieve the live data.",
  ],

  features: [
    "View live weather and forecast data of almost any place in the world",
    "Switch between Celsius and Fahrenheit",
    "Light and dark modes",
    "Responsive for smaller screens",
  ],
  motivation: [
    `I made this project whilst still getting used to the React library.
    I wanted to create a simple project that made me get more comfortable
    in using the library, and also wanted to know how to fetch data using
    an API. For this, I used the useEffect hook.`,
    `I also decided to learn a bit of a React component library called
    Chakra UI, just to get a taste of what it's like and how it's used.`,
  ],
};
