import AboutMePageCSS from "../scss/AboutMePage.module.scss";

const AboutMePage = () => {
  return (
    <>
      <h2>
        I'm an aspiring <span className="highlight">full-stack developer.</span>
      </h2>
      <p>
        Driven by a love for algorithms and problem-solving through code, I
        enjoy creating dynamic and intuitive web applications. I'm exploring
        front-end and back-end technologies like React, Svelte and MongoDB,
        while also honing and developing my skills through my own{" "}
        <span className="highlight-dark">personal projects</span>.
      </p>
      <p>
        Although I'm at the start of my career adventure, my dedication and
        desire to{" "}
        <span className="highlight-dark">learn, challenge myself and grow</span>{" "}
        sets me apart from others.
      </p>
      <p className={AboutMePageCSS["job-search-desc"]}>
        Currently looking for a 12-month placement or internship in software or
        web development. I'm excited to bring my enthusiasm and skills to
        real-world challenges!
      </p>
      <div className={AboutMePageCSS["btn-group"]}>
        <button
          className={`${AboutMePageCSS["btn"]} ${AboutMePageCSS["projects"]}`}
        >
          Projects
        </button>
        <button
          className={`${AboutMePageCSS["btn"]} ${AboutMePageCSS["download-cv"]}`}
        >
          Download CV
        </button>
      </div>
    </>
  );
};

export default AboutMePage;
