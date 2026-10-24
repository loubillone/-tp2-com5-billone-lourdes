import React from "react";
import "../css/skills.css";
import SkillCard from "../components/SkillCard";

const categorias = [
  {
    nombre: "Frontend",
    skills: [
      { icono: "fa-brands fa-html5", nombre: "HTML" },
      { icono: "fa-brands fa-css3-alt", nombre: "CSS" },
      { icono: "fa-brands fa-js", nombre: "JavaScript" },
      { icono: "fa-brands fa-react", nombre: "React" },
      { icono: "fa-brands fa-bootstrap", nombre: "Bootstrap" },
    ],
  },
  {
    nombre: "Backend",
    skills: [
      { icono: "fa-solid fa-code", nombre: "C#" },
      { icono: "fa-solid fa-database", nombre: "MySQL" },
    ],
  },
  {
    nombre: "Herramientas",
    skills: [
      { icono: "fa-brands fa-git-alt", nombre: "Git" },
      { icono: "fa-brands fa-github", nombre: "GitHub" },
      { icono: "fa-solid fa-bolt", nombre: "Vite" },
      { icono: "fa-solid fa-cloud", nombre: "Netlify" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="habilidades">
      <div className="container">
        <h2 className="titulo-habilidades">Habilidades</h2>
        {categorias.map((cat) => (
          <div key={cat.nombre} className="mb-5">
            <h4 className="categoria-titulo">{cat.nombre}</h4>
            <div className="row">
              {cat.skills.map((skill) => (
                <SkillCard
                  key={skill.nombre}
                  icono={skill.icono}
                  nombre={skill.nombre}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
