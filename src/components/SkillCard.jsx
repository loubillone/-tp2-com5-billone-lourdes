import React from "react";

const SkillCard = ({ icono, nombre }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="habilidad-card">
        <i className={`${icono} fa-2x mb-2`}></i>
        <p>{nombre}</p>
      </div>
    </div>
  );
};

export default SkillCard;
