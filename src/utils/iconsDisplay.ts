// All tech icons and names for the home page.

import reactIcon from "../assets/react-icon.png";
import tsIcon from "../assets/ts-icon.png";
import nodeIcon from "../assets/node-icon.png";
import mongoIcon from "../assets/mongo-icon.png";
import mysqlIcon from "../assets/mysql-icon.png";
import jestIcon from "../assets/jest-icon.png";
import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.png";
import pythonIcon from "../assets/python-icon.png";
import javaIcon from "../assets/java-icon.png";
import expressIcon from "../assets/express-icon.png";
import muiIcon from "../assets/mui-icon.png";

type iconsType = {
  src: string;
  alt: string;
};

const icons: iconsType[] = [
  {
    src: htmlIcon,
    alt: "HTML",
  },
  {
    src: cssIcon,
    alt: "CSS",
  },
  {
    src: reactIcon,
    alt: "React",
  },
  {
    src: tsIcon,
    alt: "TypeScript",
  },
  {
    src: muiIcon,
    alt: "Material UI",
  },
  {
    src: nodeIcon,
    alt: "NodeJS",
  },
  {
    src: expressIcon,
    alt: "ExpressJS",
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
    src: pythonIcon,
    alt: "Python",
  },
  {
    src: javaIcon,
    alt: "Java",
  },
];

export default icons;
