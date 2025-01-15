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
        I'm currently seeking a 12-month placement/internship in software or web
        development. I would love to bring my enthusiasm and skills to an
        environment that values growth and innovation, and challenges me to do
        my very best.
      </p>
      <p>
        Outside of university and work, I do sometimes enjoy a bit of gaming.
      </p>
      <h2>My core values.</h2>
      Here are some of my core values which I feel are essential
      <ul>
        <li>Kindness</li>
      </ul>
    </>
  );
};

export default AboutMePage;
