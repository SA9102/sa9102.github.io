const TodoAppPage = () => {
  return (
    <>
      <h2>Todo App</h2>
      <p>This project is still in development.</p>
      <p>
        This project is my most complex and ambitious one to date for several
        reasons. Not only is it my attempt to take a basic application (i.e. a
        simple todo list app) and turn it into a real productivity tool, but it
        is my first project (and I will do this in future projects) where I take
        seriously the maintainability of my codebase, and the reusability of
        components. I am doing this through implementing best practices, such as{" "}
        <span className="highlight-dark">global state</span> (where appropriate)
        to avoid prop drilling,{" "}
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
        Some of my previous projects had messy and hard-to-maintain code, but I
        realise that even for small applications, this is not good as it will be
        hard to scale up the application. In professional development
        environments, codebases are expected to clean and maintainable, and
        therefore I realise that being able to not just write code, but write
        clean code, is an important skill.
      </p>
      <h3>Tech Stack</h3>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>Vitest/Jest</li>
        <li>Zustand</li>
        <li>NodeJS*</li>
        <li>Express*</li>
        <li>MongoDB*</li>
      </ul>
      <p>* Not implemented yet but will do eventually!</p>
    </>
  );
};

export default TodoAppPage;
