import React from "react";

export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg" style={{padding: "1rem", backgroundColor: "rgb(9 9 9)", borderBottom: "2px solid #222"}} >
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{fontFamily : "Monospace", color: "#a5e2f6", fontSize: "1.5rem"}}>Iván Alguacil</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "space-around"}}>
            <ul class="navbar-nav" style={{textAlign: "center"}}>
              <li class="nav-item">
                <a className="nav-link nav-hover" href="#habilidades">Habilidades</a>
              </li>
              <li class="nav-item">
                <a className="nav-link nav-hover" href="#proyectos">Proyectos</a>
              </li>
              <li class="nav-item">
                <a className="nav-link nav-hover" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
