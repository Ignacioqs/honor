import { Fragment } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import logo from "./assets/logo.svg";
import Landing from "./Landing";
import Facturas from "./Facturas";
import Ganadores from "./Ganadores";
import Contacto from "./Contacto";

import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";

const Header = () => {
  return (
    <Fragment>
      <div className="container">
        {/* ------- HEADER ---------- */}
        <header className="header">
          <NavLink
            className={(navData) => (navData.isActive ? "" : "")}
            to="/home"
          >
            <img src={logo} alt="Honor logo" className="logo" />
          </NavLink>

          <nav className="user-nav">
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "navItem")}
              to="/activar"
            >
              activa facturas
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "navItem")}
              to="/ganadores"
            >
              ganadores
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "navItem")}
              to="/contacto"
            >
              contacto
            </NavLink>

            <NavLink className="nav-btn" to="/activar">
              participa
            </NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/home" element={<Landing />}></Route>
          <Route path="/activar" element={<Facturas />}></Route>
          <Route path="/ganadores" element={<Ganadores />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>

        {/* ---------- FOOTER ------------- */}
        <div className="footer">
          <div className="social1">
            <img src={logo} alt="Honor logo" className="logo" />;
            <p>email: Honor@customer.com</p>
            <p>tel: 2298- 23-43</p>
          </div>
          <div className="social2">
            <h4>reglamento</h4>
            <p>
              Xerum velectur rem harum, si sit, iditatur a estes et ut
              officipsae vendes magnimp oribus et utem antio dias dolorpor sitae
              nonsendit etur?Imconsedist qui odis eatium dolupta nam
              voluptisquam eturio ea que eseque eatur magni voloreNonsecus
              aligend isimus illaborerum si serspelenem quam eos comnis esse
              consed exeriam volo bernatibus doles dest eatur, seris aut ut.
            </p>
          </div>
          <div className="social-icons">
            <div>
              <img src={facebook} alt="facebook" className="social-icon" />
            </div>
            <div>
              <img src={twitter} alt="twitter" className="social-icon" />
            </div>
            <div>
              <img src={instagram} alt="instagram" className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
