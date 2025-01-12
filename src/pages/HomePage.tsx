import HomePageCSS from "../scss/HomePage.module.scss";

import reactIcon from "../assets/react-icon.png";
import tsIcon from "../assets/ts-icon.png";
import nodeIcon from "../assets/node-icon.png";
import mongoIcon from "../assets/mongo-icon.png";
import mysqlIcon from "../assets/mysql-icon.png";
import jestIcon from "../assets/jest-icon.png";

const icons = [
  {
    src: reactIcon,
    alt: "React",
  },
  {
    src: tsIcon,
    alt: "TypeScript",
  },
  {
    src: nodeIcon,
    alt: "NodeJS",
  },
  {
    src: mongoIcon,
    alt: "MongoDB",
  },
  {
    src: mysqlIcon,
    alt: "MySQL",
  },
  {
    src: jestIcon,
    alt: "Jest",
  },
];

const HomePage = () => {
  return (
    <section className={HomePageCSS.homepage}>
      <h1>
        Hi! I'm <span className="highlight">Shayan</span>.
      </h1>
      <p className={HomePageCSS["short-desc"]}>
        As an{" "}
        <span className="highlight-dark">aspiring full-stack developer</span>, I
        love problem solving and bringing ideas to life through code.
      </p>
      <p className={HomePageCSS["short-desc"]}></p>
      {/* <p className={HomePageCSS["short-desc"]}>
        I'm completing my bachelor's in Computer Science at Queen Mary
        University of London.
      </p> */}
      <p className={HomePageCSS["short-desc"]}>
        I'm in my second year at Queen Mary University of London, completing my
        bachelor's in Computer Science.
      </p>
      <div className={HomePageCSS["skill-icons"]}>
        {icons.map((iconData) => (
          <div className={HomePageCSS["skill-icon-and-name"]}>
            <img
              className={HomePageCSS["skill-icon"]}
              src={iconData.src}
              alt={iconData.alt}
            />
            <p className={HomePageCSS["skill-name"]}>{iconData.alt}</p>
          </div>
        ))}
      </div>
      <div className={HomePageCSS["btn-group"]}>
        <button className={`btn ${HomePageCSS["btn-projects"]}`}>
          Projects
        </button>
        <button className={`btn ${HomePageCSS["btn-download-cv"]}`}>
          Download CV
        </button>
      </div>
      {/* <h1 className="hero-name">
        Hello, I'm <span className="highlight">Shayan</span>.
      </h1>
      <h2 className="hero-short-desc">Aspiring web and software developer</h2>
      <div className="button-group">
        <button className="btn btn-solid btn-projects">
          <i className="fa-solid fa-hammer icon"></i>Projects
        </button>
        <button className="btn btn-solid btn-cv">
          <i className="fa-solid fa-user-tie icon"></i>Download CV
        </button>
      </div>

      <p className="hero-desc">
        <br />
        <br />
        Currently in my second year at university, completing my bachelor's in
        Computer Science at Queen Mary University of London.
        <br />
        <br />I also work part-time as a sales assistant at Superdrug, where I
        maintain a store and strive to deliver excellent customer service.
      </p> */}
    </section>
  );
};

export default HomePage;
