import { Fragment } from "react";
import hero3 from "../assets/hero3.png";
import hero2 from "../assets/hero2.png";
import audifonos from "../assets/audifonos.png";
import banda from "../assets/banda.png";
import x7 from "../assets/x7.png";
import x8 from "../assets/x8.png";
import x9 from "../assets/x9.png";
import h50 from "../assets/h50.png";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      {/* ------- HERO ---------- */}

      <div className={classes["hero-container"]}>
        <div className={classes.hero}>
          <h1>¡Sorprendé a Mamá!</h1>
          <h3>con un regalo único como ella</h3>
          <img src={hero3} alt="Honor logo" className={classes["hero-img"]} />
          <img src={hero2} alt="Honor logo" className={classes["hero-img2"]} />
        </div>
      </div>

      {/* ----------- INFO ------------ */}

      <div className={classes.info}>
        <div className={classes.participa}>
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
        <div className={classes.fechas}>
          <h2>Promoción válida del 25 de julio al 18 de agosto del 2022</h2>
        </div>
        <div className={classes.condiciones}>
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
      <div className={classes.title}>
        <h1>Premios</h1>
      </div>

      <div className={classes.premios}>
        <div className={classes.cell}>
          <img
            src={audifonos}
            alt="audifonos"
            className={classes["premio-img"]}
          />
          ;<p>11 audifonos</p>
        </div>
        <div className={classes.cell}>
          <img src={banda} alt="banda" className={classes["premio-img"]} />;
          <p>7 bandas inteligentes</p>
        </div>
        <div className={classes.cell}>
          <img src={x7} alt="x7" className={classes["premio-img"]} />;
          <p>1 telefono x7</p>
        </div>
        <div className={classes.cell}>
          <img src={x8} alt="x8" className={classes["premio-img"]} />;
          <p>2 telefonos x8</p>
        </div>
        <div className={classes.cell}>
          <img src={x9} alt="x9" className={classes["premio-img"]} />;
          <p>2 telefonos x8</p>
        </div>
        <div className={classes.cell}>
          <img src={h50} alt="h50" className={classes["premio-img"]} />;
          <p>1 telefono p0</p>
        </div>
      </div>

      {/* ---------- SORTEOS ------------- */}
      <div className={classes.sorteos}>
        <div className={classes.sorteo}>
          <h4>Primer sorteo</h4>
          <p>Domingo 31 de Julio</p>
        </div>
        <div className={classes.sorteo}>
          <h4>Segundo sorteo</h4>
          <p>Domingo 7 de Agosto</p>
        </div>
        <div className={classes.sorteo}>
          <h4>Tercer sorteo</h4>
          <p>Domingo 14 de Agosto</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
