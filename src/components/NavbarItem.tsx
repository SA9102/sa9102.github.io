import { useLocation, useNavigate } from "react-router";
import removeForwardSlash from "../utils/removeForwardSlash";
import getTitleFromRoute from "../utils/getUpperTextFromRoute";
// CSS
import "../scss/NavbarItem.scss";

type props = {
  route: string;
  onClose: () => void;
};

const NavbarItem = ({ route, onClose }: props) => {
  const currentRoute = removeForwardSlash(useLocation().pathname);
  const navigate = useNavigate();

  return (
    <li
      className={currentRoute === route ? "selected" : "not-selected"}
      onClick={() => {
        onClose();
        navigate(route);
      }}
    >
      {getTitleFromRoute(route)}
    </li>
  );
};

export default NavbarItem;
