import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 id="title">Habilidades</h2>

      <div className="skills-container">

        {/* FRONT-END */}
        <div className="skill-card">
          <h1>Front-end</h1>

          <div className="skill-gallery">
            <img src="/public/Technologies/Html logo.png" alt="Front-end 1" />
            <img src="/public/Technologies/Css logo.png" alt="Front-end 2" />
            <img src="/public/Technologies/JavaScript logo.png" alt="Front-end 3" />
            <img src="/public/Technologies/Node.js logo.png" alt="Front-end 4" />
            <img src="/public/Technologies/Bootstrap logo.png" alt="Front-end 7" />
            <img src="/public/Technologies/React logo.png" alt="Front-end 6" />
            <img src="/public/Technologies/Angular logo.png" alt="Front-end 8" />
            <img src="/public/Technologies/Git.png" alt="Front-end 8" />
            <img src="/public/Technologies/Github.png" alt="Front-end 8" />
          </div>

          <p>
            Desarrollo de interfaces web modernas y funcionales.
          </p>
        </div>


        {/* DISEÑO WEB */}
        <div className="skill-card">
          <h1>Back-end</h1>
          <br />
          <div className="skill-gallery">
            <img src="/public/Technologies/Csharp_Logo.png" alt="Backend 1" />
            <img src="/public/Technologies/MongoDB logo.png" alt="Backend 2" />
            <img src="/public/Technologies/Python logo.png" alt="Backend 3" />
            <img src="/public/Technologies/Git.png" alt="Backend 4" />
            <img src="/public/Technologies/Github.png" alt="Backend 5" />
          </div>
          <br />
          <p>
            Diseño de experiencias digitales atractivas e intuitivas.
          </p>
        </div>


        {/* VIDEOJUEGOS */}
        <div className="skill-card">
          <h1>Videojuegos</h1>

          <div className="skill-gallery">
            <img src="/public/Technologies/3ds-max.png" alt="Videojuegos 1" />
            <img src="/public/Technologies/Blender.png" alt="Videojuegos 1" />
            <img src="/public/Technologies/substance-painter-logo.png" alt="Videojuegos 1" />
            <img src="/public/Technologies/Zbrush Logo.png" alt="Videojuegos 1" />
            <img src="/public/Technologies/Unity-logo.png" alt="Videojuegos 1" />
            <img src="/public/Technologies/Git.png" alt="Videojuegos 1" />
            <img src="/public/Technologies/Github.png" alt="Videojuegos 1" />
          </div>

          <p>
            Desarrollo de proyectos interactivos y experiencias de juego.
          </p>
        </div>

      </div>
    </section>
  );
}