import { useLocation } from "react-router";
import "../scss/Navbar.scss";
import NavbarItem from "./NavbarItem";
import { HOME, ABOUT_ME, EXP_AND_EDU, PROJECTS } from "../utils/routes";

import Drawer from "react-modern-drawer";

import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import useDrawer from "../hooks/useDrawer";

const Navbar = () => {
  const { isOpen, toggleDrawer } = useDrawer();
  const route = useLocation().pathname;

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const navbarItems = (
    <>
      {[HOME, ABOUT_ME, EXP_AND_EDU, PROJECTS].map((route) => (
        <NavbarItem key={route} route={route} onClose={toggleDrawer} />
      ))}
    </>
  );

  return (
    <nav className="navbar-container">
      {isDesktopOrLaptop ? (
        <ul className="navbar">{navbarItems}</ul>
      ) : (
        <>
          <p className="navbar-name">Shayan Ali</p>
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
