import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink className={(navData) => (navData.isActive ? "" : "")} to="/home">
        <img src={logo} alt="Honor logo" className={classes.logo} />
      </NavLink>

      <nav className={classes["user-nav"]}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navItem
          }
          to="/activar"
        >
          activa facturas
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navItem
          }
          to="/ganadores"
        >
          ganadores
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.navItem
          }
          to="/contacto"
        >
          contacto
        </NavLink>

        <NavLink className={classes["nav-btn"]} to="/activar">
          participa
        </NavLink>
        <img src={hamburger} alt="hamburger" className={classes.hamburger} />
      </nav>
    </header>
  );
};

export default Header;
