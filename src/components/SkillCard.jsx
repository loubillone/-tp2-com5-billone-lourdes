import React from "react";
import "../css/habilidades.css";
const SkillCard = () => {
  const habilidades = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Bootstrap",
  ];
  return (
    <>
      <section id="habilidades" className="habilidades">
        <div className="container">
          <h2 className="titulo-habilidades">Habilidades</h2>

          <div className="row">
            {habilidades.map((habilidad) => (
              <div className="col-6 col-md-4" key={habilidad}>
                <div className="habilidad-card">{habilidad}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillCard;
