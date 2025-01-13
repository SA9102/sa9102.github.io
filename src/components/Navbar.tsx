import "../scss/Navbar.scss";
import NavbarItem from "./NavbarItem";
import {
  HOME,
  ABOUT_ME,
  PROJECTS,
  SKILLS_AND_EXP,
  EDUCATION,
} from "../utils/routes";

import Drawer from "react-modern-drawer";

import { useMediaQuery } from "react-responsive";
import useDrawer from "../hooks/useDrawer";
import { laptop } from "../utils/breakpoints";

const Navbar = () => {
  const { isOpen, toggleDrawer } = useDrawer();
  // const route = useLocation().pathname;

  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-width: ${laptop})`,
  });

  const navbarItems = (
    <>
      {[HOME, ABOUT_ME, EDUCATION, SKILLS_AND_EXP, PROJECTS].map((route) => (
        <NavbarItem key={route} route={route} onClose={toggleDrawer} />
      ))}
    </>
  );

  return (
    <nav className="navbar-container">
      <p className="navbar-name">Shayan Ali</p>
      {isDesktopOrLaptop ? (
        <ul className="navbar">{navbarItems}</ul>
      ) : (
        <>
          <div className="drawer-and-button">
            <i className="fa-solid fa-bars icon" onClick={toggleDrawer} />
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="top"
              duration={300}
            >
              {navbarItems}
            </Drawer>
          </div>
        </>
      )}
    </nav>
    // <nav className="navbar">
    //   {isDesktopOrLaptop ? (
    //     <></>
    //   ) : (
    //     <>
    //       <p>Shayan</p>
    //       <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
    //         {navbarItems}
    //       </Drawer>
    //     </>
    //   )}
    // </nav>
  );
};

export default Navbar;
