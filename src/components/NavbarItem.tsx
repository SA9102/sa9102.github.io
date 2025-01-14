import { useLocation, useNavigate } from "react-router";
import removeForwardSlash from "../utils/removeForwardSlash";
import getTitleFromRoute from "../utils/getUpperTextFromRoute";
// CSS
import NavbarItemCSS from "../scss/NavbarItem.module.scss";

type props = {
  route: string;
  onClose: () => void;
};

const NavbarItem = ({ route, onClose }: props) => {
  const currentRoute = removeForwardSlash(useLocation().pathname);
  const navigate = useNavigate();

  return (
    <li
      className={`${NavbarItemCSS["navbar-item"]} ${
        currentRoute === route
          ? NavbarItemCSS["selected"]
          : NavbarItemCSS["not-selected"]
      }`}
      // className={NavbarItemCSS["navbar-item"] currentRoute === route ? "selected" : "not-selected"}
      onClick={() => {
        onClose();
        // navigate(`/${BASE}/${route}`);
        navigate(route);
      }}
    >
      {getTitleFromRoute(route)}
    </li>
  );
};

export default NavbarItem;
