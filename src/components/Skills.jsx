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
            <img src="/Technologies/Html logo.png" alt="Html" />
            <img src="/Technologies/Css logo.png" alt="Css" />
            <img src="/Technologies/JavaScript logo.png" alt="JavaScript" />
            <img src="/Technologies/Node.js logo.png" alt="Node.js" />
            <img src="/Technologies/Bootstrap logo.png" alt="Bootstrap" />
            <img src="/Technologies/React logo.png" alt="React" />
            <img src="/Technologies/Angular logo.png" alt="Angular" />
            <img src="/Technologies/Git.png" alt="Git" />
            <img src="/Technologies/GitHub.png" alt="GitHub" />
          </div>

          <p>
            Desarrollo de interfaces web modernas y funcionales.
          </p>
        </div>


        {/* DISEÑO WEB */}
        <div className="skill-card">
          <h1>Back-end</h1>
          <div className="skill-gallery">
            <img src="/Technologies/Csharp_Logo.png" alt="C#" />
            <img src="/Technologies/Python logo.png" alt="Python" />
            <img src="/Technologies/Java logo.png" alt="Java" />
            <img src="/Technologies/Mysql logo.png" alt="MySQL" />
            <img src="/Technologies/mongodb logo.png" alt="MongoDB" />
            <img src="/Technologies/Git.png" alt="Git" />
            <img src="/Technologies/GitHub.png" alt="GitHub" />
          </div>
          <p>
            Diseño de experiencias digitales atractivas e intuitivas.
          </p>
        </div>


        {/* VIDEOJUEGOS */}
        <div className="skill-card">
          <h1>Videojuegos</h1>

          <div className="skill-gallery">
            <img src="/Technologies/3ds-max.png" alt="3ds Max" />
            <img src="/Technologies/Blender.png" alt="Blender" />
            <img src="/Technologies/substance-painter-logo.png" alt="Substance Painter" />
            <img src="/Technologies/zbrush logo.png" alt="ZBrush" />
            <img src="/Technologies/Unity-logo.png" alt="Unity" />
            <img src="/Technologies/Unreal engine logo.png" alt="Unreal Engine" />
            <img src="/Technologies/Git.png" alt="Git" />
            <img src="/Technologies/GitHub.png" alt="GitHub" />
          </div>

          <p>
            Desarrollo de proyectos interactivos y experiencias de juego.
          </p>
        </div>

      </div>
    </section>
  );
}