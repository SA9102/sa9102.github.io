import todoPreview from "../../assets/previews/todo.png";
import ProjectsPageCSS from "../../scss/ProjectsPage.module.scss";

const TodoAppPage = () => {
  return (
    <>
      <h2>Todo App</h2>
      <img src={todoPreview} className={ProjectsPageCSS["preview"]} />
      <ul className={ProjectsPageCSS["tech-stack-tags"]}>
        <li>React</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>Zustand</li>
        <li>Node</li>
        <li>MongoDB</li>
        <li>Vitest (Jest)</li>
        <li>React Testing Library</li>
        <li>Material UI</li>
      </ul>
      <h3>About</h3>
      <p>
        Instead of creating a simple todo application involving just basic
        functionalities such as CRUD operations on tasks, I am planning on
        making this an efficient productivity tool.
      </p>
      <p>
        This application is in development. Here are some features already
        implemented:
      </p>
      <ul>
        <li>Able to create, view, edit and delete tasks.</li>
        <li>
          Assign a name to a task, and optionally a description and priority.
        </li>
        <li>Filter tasks by a combination of: name/description, priority</li>
      </ul>
      <p>
        I plan to add many features. Here are just some of them (see
        'requirements.md' on GitHub repository for more information):
      </p>
      <ul>
        <li>
          Be able to create recurring tasks; can repeat daily, weekly, or on
          custom intervals
        </li>
        <li>Provided detailed analytics </li>
      </ul>
      <h3>Motivation</h3>
      <p>
        This project will be my most complex and ambitious one to date for
        several reasons. Unlike with previous projects, with this project I want
        to challenge myself and see how far I can go and take a basic
        application (i.e. a simple todo app) and turn it into something really
        special. Moreover, it is my first project (and I will do this in future
        projects) where I take seriously the maintainability of my codebase, and
        the reusability of components. I am doing this through implementing best
        practices, such as <span className="highlight-dark">global state</span>{" "}
        (where appropriate) to avoid prop drilling,{" "}
        <span className="highlight-dark">separating the logic from the UI</span>{" "}
        (either putting the logic in a utility function or in a custom hook),
        and having a{" "}
        <span className="highlight-dark">good folder structure</span>. It is
        also my first React application where I am writing{" "}
        <span className="highlight-dark">unit</span> and{" "}
        <span className="highlight-dark">integration tests</span> for my
        components.
        <br />
        <br />
        Some of my previous projects have messy and hard-to-maintain code, but I
        realise that even for small applications, this is not good as it will be
        hard to scale up the application. In professional development
        environments, codebases are expected to be clean and maintainable, and
        so I realise that being able to not just write code, but write clean
        code, is an important skill.
      </p>
    </>
  );
};

export default TodoAppPage;
