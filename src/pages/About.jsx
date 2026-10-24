import React, { useState } from "react";
import "../css/about.css";

const About = () => {
  const [verMas, setVerMas] = useState(false);

  return (
    <div className="sobre-mi">
      <h2 className="titulo-sobreMi">Sobre mí</h2>
      <p className="parrafo-sobreMi">
        Soy una desarrolladora web apasionada por crear soluciones digitales
        innovadoras y funcionales. Mi experiencia abarca el desarrollo frontend
        con tecnologías modernas para crear aplicaciones web dinámicas. Me
        especializo en transformar ideas complejas en aplicaciones web elegantes
        y eficientes.
      </p>

      <button
        className="btn btn-dark mb-3"
        onClick={() => setVerMas(!verMas)}
      >
        {verMas ? "Ver menos" : "Ver más"}
      </button>

      {verMas && (
        <div className="info-extra">
          <h5>Formación</h5>
          <p>Tecnicatura en Desarrollo de Software — UTN FRT (en curso).</p>

          <h5>Intereses</h5>
          <p>
            Me interesa el diseño UI/UX, la accesibilidad web y el desarrollo
            de aplicaciones que tengan un impacto real en las personas.
          </p>

          <h5>Objetivos profesionales</h5>
          <p>
            Seguir creciendo como desarrolladora full stack, profundizar en
            React y Node.js, y contribuir a proyectos que combinen buena
            experiencia de usuario con código limpio y mantenible.
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
