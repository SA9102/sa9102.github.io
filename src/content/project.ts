import projectPageType from "../types/projectPageType";

export const todoProject: projectPageType = {
  name: "Advanced Todo (in development)",
  images: [],
  techStack: [
    "React",
    "TypeScript",
    "Vite",
    "Zustand",
    "React Router",
    "Mantine",
  ],
  about: [
    "My attempt to create an efficient productivity tool beyond just the simple todo app. Was initially meant to be a todo application, but now I want to extend it into something much more.",
    "Still in the early stages of development, and slow progress due to university coursework.",
  ],
  features: [
    "Create, edit, and delete todo tasks",
    "Optionally add a description, priority, tags, start and end datetimes to each todo",
    "Filter tasks by text, tags, priority and start/end datetimes",
    "*Create an account to permanently save tasks",
    "*Download tasks in a certain format like JSON (undecided yet)",
    "*Undo task deletions",
    "*Recurring tasks on a daily/weekly/monthly basis",
    "*Have it as a Progressive Web App (PWA)",
    "*Reminder notifications",
  ],
  motivation: [
    `I'm looking to see how far I can go and turn a simple todo application into a useful productivity tool.
    I'm also ensuring, to the best of my ability, that the code is well-commented, maintainable and follows best practices.
    Some methods I use include using global state (where appropriate) to avoid prop drilling, and having a
    good folder structure. 
    `,
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
    "Live parsing of Markdown into text",
    "Create files within nested folders",
    "Tabs for recently-opened files for quick access",
    "Login and registration to permanently save files and access them from any machine",
    "Light and dark modes",
    "Responsive for smaller screens",
  ],
  motivation: [
    `Now that I had a fair amount of React experience from creating simple projects, I wanted to take my
    skills further and make an application that was a little more than a simple Markdown text editor. I
    did this by adding some productivity features like a nested folder system, and also tabs of recently-opened
    files.
    `,
    `I also wanted to learn how to connect a React application to a MongoDB database. I did this so that users
    can permanently save their files on the database and retrieve them when the access the web application from any
    machine. This requires them to have create an account. This was a good learning experience as I overcame many
    challenges while trying to set up a back-end, such as trying to set up CORS correctly (due to the front-end and
    back-end running on different ports), setting up the logic for login and registration (I used passportjs for this),
    and setting up sessions.
    `,
  ],
  future: [
    `I realised I haven't touched this application in a while, and looking back,
    there's much to be improved on, such as the functionality and design.`,
    `There is a possibility I may integrate a Markdown text editor into my Todo application.`,
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
