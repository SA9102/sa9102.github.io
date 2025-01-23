import ConnectPageCSS from "../scss/ConnectPage.module.scss";

const ConnectPage = () => {
  return (
    <section className={ConnectPageCSS["connect-page"]}>
      <h2>Let's connect!</h2>
      <div className={ConnectPageCSS["icon-group"]}>
        <a href="https://github.com/SA9102" target="_blank" title="github">
          <i className={`fa-brands fa-github ${ConnectPageCSS.icon}`}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shayan-za/"
          target="_blank"
          title="linkedin"
        >
          <i className={`fa-brands fa-linkedin ${ConnectPageCSS.icon}`}></i>
        </a>
        <a href="mailto:shayan677@gmail.com" title="email">
          <i className={`fa-solid fa-envelope ${ConnectPageCSS.icon}`}></i>
        </a>
      </div>
    </section>
  );
};

export default ConnectPage;
