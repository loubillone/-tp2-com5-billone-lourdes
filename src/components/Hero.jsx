import React from "react";
import "../css/hero.css";
import fotoPerfil from "../assets/img/lourdesbillone.png";

const Hero = ({ nombre, titulo, descripcion }) => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-foto-wrapper">
          <img src={fotoPerfil} alt={nombre} className="hero-img" />
        </div>
        <div className="hero-texto">
          <h1 className="hero-nombre">{nombre}</h1>
          <h2 className="hero-titulo">{titulo}</h2>
          <p className="hero-descripcion">{descripcion}</p>
          <a href="/projects" className="btn btn-dark boton-portafolio">
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
