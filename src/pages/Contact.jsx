import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <form>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Tu nombre"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              placeholder="Tu apellido"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono celular
            </label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              placeholder="+54 11 1234-5678"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="tu@email.com"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            className="form-control"
            id="mensaje"
            rows="5"
            placeholder="Escribí tu mensaje..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
