import ProjectsPageCSS from "../scss/ProjectsPage.module.scss";

import projects from "../content/allProjects";
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
            <div className={ProjectsPageCSS["content-and-image"]}>
              <img src={content.image} className={ProjectsPageCSS.splash} />
              <div>
                <div className={ProjectsPageCSS["btn-group"]}>
                  <button
                    className={ProjectsPageCSS["btn-more-info"]}
                    onClick={() => navigate(content.moreInfo)}
                  >
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
                <br />
                <div className={ProjectsPageCSS["paragraphs"]}>
                  {content.paragraphs.map((paragraph) => (
                    <p>{paragraph}</p>
                  ))}
                </div>
                <br />
                <div className={ProjectsPageCSS["features"]}>
                  <p>Features:</p>
                  <ul>
                    {content.features.map((feature) => (
                      <li>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
