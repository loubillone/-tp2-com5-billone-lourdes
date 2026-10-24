import React from "react";

const ProjectCard = ({ titulo, descripcion, tecnologia, url }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card proyecto-card">
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <p>
            <strong>Tecnologías:</strong> {tecnologia}
          </p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
