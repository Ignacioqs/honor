import { Fragment } from "react";
import hero3 from "./assets/hero3.png";
import audifonos from "./assets/audifonos.png";
import banda from "./assets/banda.png";
import x7 from "./assets/x7.png";
import x8 from "./assets/x8.png";
import x9 from "./assets/x9.png";
import h50 from "./assets/h50.png";

const Landing = () => {
  return (
    <Fragment>
      {/* ------- HERO ---------- */}

      <div className="hero-container">
        <div className="hero">
          <h1>¡Sorprendé a Mamá!</h1>
          <h3>con un regalo único como ella</h3>
          <img src={hero3} alt="Honor logo" className="hero-img" />;
        </div>
      </div>

      {/* ----------- INFO ------------ */}

      <div className="info">
        <div className="participa">
          <h4>Participa</h4>
          <p>
            Xerum velectur rem harum, si sit, iditatur a estes et ut officipsae
            vendes magnimp oribus et utem antio dias dolorpor sitae nonsendit
            etur?Imconsedist qui odis eatium dolupta nam voluptisquam eturio ea
            que eseque eatur magni volore
          </p>
          <p>
            ri temporem rerum rendipi cillendit ad quia simus, il ipidel mos
            adit, cUpiendebis et ut aut que volorem postrum nis et es sumquae
            dunt iderum, vellora vel in nissincitat.
          </p>
        </div>
        <div className="fechas">
          <h4>Fechas</h4>
          <p>
            Xerum velectur rem harum, si sit, iditatur a estes et ut officipsae
            vendes magnimp oribus et utem antio dias dolorpor sitae nonsendit
            etur?Imconsedist qui odis eatium dolupta nam voluptisquam eturio ea
            que eseque eatur magni volore
          </p>
        </div>
        <div className="condiciones">
          <h4>Condiciones</h4>
          <p>
            Xerum velectur rem harum, si sit, iditatur a estes et ut officipsae
            vendes magnimp oribus et utem antio dias dolorpor sitae nonsendit
            etur?Imconsedist qui odis eatium dolupta nam voluptisquam eturio ea
            que eseque eatur magni volore
          </p>
          <p>
            ri temporem rerum rendipi cillendit ad quia simus, il ipidel mos
            adit, cUpiendebis et ut aut que volorem postrum nis et es sumquae
            dunt iderum, vellora vel in nissincitat.
          </p>
        </div>
      </div>
      {/* ---------- PREMIOS ------------- */}
      <div className="title">
        <h1>Premios</h1>
      </div>

      <div className="premios">
        <div className="cell">
          <img src={audifonos} alt="audifonos" className="premio-img" />;
          <p>11 audifonos</p>
        </div>
        <div className="cell">
          <img src={banda} alt="banda" className="premio-img" />;
          <p>7 bandas inteligentes</p>
        </div>
        <div className="cell">
          <img src={x7} alt="x7" className="premio-img" />;<p>1 telefono x7</p>
        </div>
        <div className="cell">
          <img src={x8} alt="x8" className="premio-img" />;<p>2 telefonos x8</p>
        </div>
        <div className="cell">
          <img src={x9} alt="x9" className="premio-img" />;<p>2 telefonos x8</p>
        </div>
        <div className="cell">
          <img src={h50} alt="h50" className="premio-img" />;
          <p>1 telefono p0</p>
        </div>
      </div>

      {/* ---------- SORTEOS ------------- */}
      <div className="sorteos">
        <div className="sorteo">
          <h4>Primer sorteo</h4>
          <p>Domingo 31 de Julio</p>
        </div>
        <div className="sorteo">
          <h4>Segundo sorteo</h4>
          <p>Domingo 7 de Agosto</p>
        </div>
        <div className="sorteo">
          <h4>Tercer sorteo</h4>
          <p>Domingo 14 de Agosto</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
