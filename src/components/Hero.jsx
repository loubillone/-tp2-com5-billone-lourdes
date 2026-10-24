import React from "react";
import "../css/hero.css";
import fotoPerfil from "../assets/img/lourdesbillone.png";

const Hero = ({ titulo, descripcion }) => {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <h1>{titulo}</h1>

        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={fotoPerfil} alt="Lourdes Billone" className="hero-img" />
          </div>
          <div className="col-md-8">
            <p>{descripcion}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
