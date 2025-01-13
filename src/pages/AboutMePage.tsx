import AboutMePageCSS from "../scss/AboutMePage.module.scss";

const AboutMePage = () => {
  return (
    <>
      <h2>
        I'm an aspiring <span className="highlight">full-stack developer.</span>
      </h2>
      <p>
        Driven by a love for algorithms and problem-solving, I enjoy creating
        dynamic and intuitive web applications. I'm exploring front-end and
        back-end technologies like React, Svelte and MongoDB, while also honing
        and developing my skills through my own{" "}
        <span className="highlight-dark">personal projects</span>.
      </p>
      <p>
        I may just be starting my career journey, but my dedication and
        continuous desire to{" "}
        <span className="highlight-dark">learn, challenge myself and grow</span>{" "}
        set me apart from others.
      </p>
      <p
        className={`${AboutMePageCSS["job-search-desc"]} ${AboutMePageCSS["looking-for-role"]}`}
      >
        Currently looking for a 12-month placement or internship in software or
        web development. I'm excited to bring my enthusiasm and skills to
        real-world problems, and be in an environment that challenges me to do
        my best!
      </p>
    </>
  );
};

export default AboutMePage;
