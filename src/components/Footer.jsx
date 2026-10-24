import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="footer">
        <div className="container">
          <p>© 2026 Lourdes Billone</p>

          <div className="footer-links">
            <a
              href="https://github.com/loubillone"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/lourdes-billonear/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="mailto:lou.billone@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
