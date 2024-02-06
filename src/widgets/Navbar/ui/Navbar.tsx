import cls from "./Navbar.module.scss";
import { Link } from "react-scroll";
import { useState } from "react";
import logo from "src/shared/assets/logo_grineo.png";
export const Navbar = () => {
  const [linksVariant, setLinksVariant] = useState(false);
  const handleOpenMenu = () => {
    setLinksVariant((prev) => !prev);
  };
  return (
    <div className={linksVariant ? cls.navbar_open : cls.navbar}>
      <div className={cls.container}>
        {" "}
        <img src={logo}></img>
        <div
          className={linksVariant ? cls.links_open : cls.links}
          onClick={() => setLinksVariant(false)}
        >
          <Link
            className={cls.mainLink}
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setLinksVariant(false)}
          >
            About
          </Link>
          <Link
            to="about"
            className={cls.mainLink}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setLinksVariant(false)}
          >
            Card
          </Link>
          <Link
            to="projects"
            className={cls.mainLink}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setLinksVariant(false)}
          >
            Course
          </Link>
          <Link
            to="contacts"
            className={cls.mainLink}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setLinksVariant(false)}
          >
            Faq
          </Link>
          <Link
            to="contacts"
            className={cls.mainLink}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setLinksVariant(false)}
          >
            Contact
          </Link>
        </div>
      </div>

      <div className={cls.burger} onClick={handleOpenMenu}>
        <div className={cls.btn_line}></div>
        <div className={cls.btn_line}></div>
        <div className={cls.btn_line}></div>
      </div>
    </div>
  );
};
