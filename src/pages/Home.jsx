import React from "react";
import "../css/home.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header nombre="Lourdes Billone" />
      <Hero
        titulo="Desarrolladora Web Full Stack"
        descripcion="Especializada en crear experiencias web modernas y funcionales utilizando las últimas tecnologías. Transformo ideas en realidad digital."
      />

      <Footer />
    </div>
  );
};

export default Home;
