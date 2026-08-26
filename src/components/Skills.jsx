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
            <img src="/Technologies/Html logo.png" alt="Front-end 1" />
            <img src="/Technologies/Css logo.png" alt="Front-end 2" />
            <img src="/Technologies/JavaScript logo.png" alt="Front-end 3" />
            <img src="/Technologies/Node.js logo.png" alt="Front-end 4" />
            <img src="/Technologies/Bootstrap logo.png" alt="Front-end 7" />
            <img src="/Technologies/React logo.png" alt="Front-end 6" />
            <img src="/Technologies/Angular logo.png" alt="Front-end 8" />
            <img src="/Technologies/Git.png" alt="Front-end 8" />
            <img src="/Technologies/Github.png" alt="Front-end 8" />
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
            <img src="/Technologies/Csharp_Logo.png" alt="Backend 1" />
            <img src="/Technologies/MongoDB logo.png" alt="Backend 2" />
            <img src="/Technologies/Python logo.png" alt="Backend 3" />
            <img src="/Technologies/Git.png" alt="Backend 4" />
            <img src="/Technologies/Github.png" alt="Backend 5" />
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
            <img src="/Technologies/3ds-max.png" alt="Videojuegos 1" />
            <img src="/Technologies/Blender.png" alt="Videojuegos 1" />
            <img src="/Technologies/substance-painter-logo.png" alt="Videojuegos 1" />
            <img src="/Technologies/Zbrush Logo.png" alt="Videojuegos 1" />
            <img src="/Technologies/Unity-logo.png" alt="Videojuegos 1" />
            <img src="/Technologies/Git.png" alt="Videojuegos 1" />
            <img src="/Technologies/Github.png" alt="Videojuegos 1" />
          </div>

          <p>
            Desarrollo de proyectos interactivos y experiencias de juego.
          </p>
        </div>

      </div>
    </section>
  );
}