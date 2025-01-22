import ProjectPageCSS from "../scss/ProjectPage.module.scss";

import projectPageType from "../types/projectPageType";

type props = {
  project: projectPageType;
  inDev: boolean;
};

const ProjectPage = ({ project, inDev }: props) => {
  return (
    <>
      <h2>{project.name}</h2>
      <ul className={ProjectPageCSS["tech-stack-tags"]}>
        {project.techStack.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      <h3>About</h3>
      {project.about.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <h3>Features {inDev && "(*planned)"}</h3>
      <ul>
        {project.features.map((paragraph) => (
          <li>{paragraph}</li>
        ))}
      </ul>
      <h3>Motivation</h3>
      {project.motivation.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </>
  );
};

export default ProjectPage;
