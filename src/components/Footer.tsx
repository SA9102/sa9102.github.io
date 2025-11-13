import FooterCSS from "../scss/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={FooterCSS.footer}>
      <p>&copy; Shayan Ali (SA9102)</p>
      <div className={FooterCSS["icon-group"]}>
        <a href="https://github.com/SA9102" target="_blank" title="github">
          <i className={`fa-brands fa-github ${FooterCSS.icon}`}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shayan-za/"
          target="_blank"
          title="linkedin"
        >
          <i className={`fa-brands fa-linkedin ${FooterCSS.icon}`}></i>
        </a>
        <a href="mailto:shayan.ziyad.ali@gmail.com" title="email">
          <i className={`fa-solid fa-envelope ${FooterCSS.icon}`}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
