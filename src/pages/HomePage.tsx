import HomePageCSS from "../scss/HomePage.module.scss";
import icons from "../utils/iconsDisplay";

const HomePage = () => {
  return (
    <section className={HomePageCSS.homepage}>
      <h1>
        Hi! I'm <span className="highlight">Shayan</span>.
      </h1>
      <p className={HomePageCSS["short-desc"]}>
        As an{" "}
        <span className="highlight-dark">aspiring full-stack developer</span>, I
        love problem solving and bringing ideas to life through code!
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
        <a className={`btn ${HomePageCSS["btn-projects"]}`}>Projects</a>
        <a
          href="https://docs.google.com/document/d/1m3x0UkWp1RxyxTo8Fff2iK0Yn0g8Szut/edit?usp=sharing&ouid=116523381189634774449&rtpof=true&sd=true"
          target="_blank"
          className={`btn ${HomePageCSS["btn-view-cv"]}`}
        >
          View CV
        </a>
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
