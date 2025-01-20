import ProjectsPageCSS from "../scss/ProjectsPage.module.scss";

import projects from "../content/projects";
import { useNavigate } from "react-router";

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Projects</h2>
      <div className={ProjectsPageCSS["all-projects"]}>
        {projects.map((content) => (
          <article className={ProjectsPageCSS["project-card"]}>
            <h3>{content.heading}</h3>
            <img src={content.image} className={ProjectsPageCSS.splash} />
            <div className={ProjectsPageCSS["btn-group"]}>
              <button onClick={() => navigate(content.moreInfo)}>
                More Info
              </button>
              {content.links.map((link) => (
                <form action={link.link} target="_blank">
                  <input
                    className={ProjectsPageCSS.btn}
                    type="submit"
                    value={link.value}
                  />
                </form>
              ))}
            </div>
            {content.paragraphs.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
