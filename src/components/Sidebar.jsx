import React from "react";
import { NavLink } from "react-router-dom";
import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h2>Lourdes Billone</h2>
        <p>Desarrolladora Web Full Stack</p>
      </div>
      <ul className="sidebar-nav">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            <i className="fa-solid fa-house"></i> Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            <i className="fa-solid fa-user"></i> Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>
            <i className="fa-solid fa-code"></i> Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/proyectos" className={({ isActive }) => isActive ? "active" : ""}>
            <i className="fa-solid fa-folder-open"></i> Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>
            <i className="fa-solid fa-envelope"></i> Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
