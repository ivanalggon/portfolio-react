import React from "react";

export default function Header() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const headerHeight = document.querySelector("header").offsetHeight;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - headerHeight - 20,
      behavior: "smooth"
    });
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          padding: "1rem",
          backgroundColor: "rgb(9 9 9)",
          borderBottom: "2px solid #222"
        }}
      >
        <div className="container-fluid">

          <a
            className="navbar-brand"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("aboutme");
            }}
            style={{
              fontFamily: "Monospace",
              color: "#a5e2f6",
              fontSize: "1.5rem"
            }}
          >
            Iván Alguacil
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ justifyContent: "space-around" }}
          >
            <ul
              className="navbar-nav"
              style={{ textAlign: "center" }}
            >

              <li className="nav-item">
                <a
                  className="nav-link nav-hover"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("aboutme");
                  }}
                >
                  Sobre mí
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link nav-hover"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                  }}
                >
                  Habilidades
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link nav-hover"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  Proyectos
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link nav-hover"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contacto
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}