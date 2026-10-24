import React from "react";
import "../css/home.css";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero
        nombre="Lourdes Billone"
        titulo="Desarrolladora Web Full Stack"
        descripcion="Especializada en crear experiencias web modernas y funcionales utilizando las últimas tecnologías. Transformo ideas en realidad digital."
      />
    </div>
  );
};

export default Home;
