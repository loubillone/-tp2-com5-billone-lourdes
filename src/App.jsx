import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Proyects from "./pages/Proyects";
import Contact from "./pages/Contact";
import "./css/layout.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <aside className="layout-aside">
          <Sidebar />
        </aside>
        <main className="layout-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/proyectos" element={<Proyects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
