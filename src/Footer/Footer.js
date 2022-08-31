import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="social1">
        <img src={logo} alt="Honor logo" className={classes.logo} />;
        <p>
          <b>EMAIL:</b> honor@customerservice.com
        </p>
        <p>
          <b>TEL:</b> 2298-23-43 / 2281-30-25
        </p>
      </div>
      <div className={classes.social2}>
        <h4>reglamento</h4>
        <p>
          Xerum velectur rem harum, si sit, iditatur a estes et ut officipsae
          vendes magnimp oribus et utem antio dias dolorpor sitae nonsendit
          etur?Imconsedist qui odis eatium dolupta nam voluptisquam eturio ea
          que eseque eatur magni voloreNonsecus aligend isimus illaborerum si
          serspelenem quam eos comnis esse consed exeriam volo bernatibus doles
          dest eatur, seris aut ut.
        </p>
      </div>
      <div className={classes["social-icons"]}>
        <div>
          <img
            src={facebook}
            alt="facebook"
            className={classes["social-icon"]}
          />
        </div>
        <div>
          <img src={twitter} alt="twitter" className={classes["social-icon"]} />
        </div>
        <div>
          <img
            src={instagram}
            alt="instagram"
            className={classes["social-icon"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
