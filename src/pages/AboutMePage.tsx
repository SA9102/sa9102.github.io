import AboutMePageCSS from "../scss/AboutMePage.module.scss";

const AboutMePage = () => {
  return (
    <>
      <h2>
        I enjoy <span className="highlight">full-stack web development</span>.
      </h2>
      <div className="card">
        <p>
          Driven by a love for algorithms and problem-solving, I enjoy creating
          dynamic and intuitive web applications. I'm exploring front-end and
          back-end technologies like React, Svelte and MongoDB, while also
          honing and developing my skills through my own{" "}
          <span className="highlight-dark">personal projects</span>.
        </p>
        <br />
        <p>
          Even though my current skillset lies within software development, I am
          open to learning new technologies.
        </p>
        <br />
        <p>
          I may just be starting my career journey, but my dedication and
          continuous desire to{" "}
          <span className="highlight-dark">
            learn, challenge myself and grow
          </span>{" "}
          set me apart from others.
        </p>
      </div>
      <p
        className={`${AboutMePageCSS["job-search-desc"]} ${AboutMePageCSS["looking-for-role"]}`}
      >
        I'm currently seeking a graduate job in a tech role like software
        development, full-stack development, cloud engineering or data
        science/analysis. I would love to bring my enthusiasm and skills to an
        environment that values growth and innovation, and challenges me to do
        my very best.
      </p>
    </>
  );
};

export default AboutMePage;
