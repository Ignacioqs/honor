import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Facturas from "./Facturas/Facturas";
import Ganadores from "./Ganadores/Ganadores";
import Contacto from "./Contacto/Contacto";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/activar" element={<Facturas />}></Route>
          <Route path="/ganadores" element={<Ganadores />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>

        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
