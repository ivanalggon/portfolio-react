import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="about-section" >
      <div className="profileimage">
        <img src="./Profile/profile3.jpg" alt="Foto de Perfil" />
      </div>
      <div className="aboutme">
        <div>
          <h2 className="text-3xl font-bold mb-2" id="title">Sobre Mí</h2>
          <p>
           <strong>Desarrollador Full Stack</strong> especializado en <strong>Front-end</strong> y <strong>diseño Web</strong>,
            con una sólida base en <strong>Desarrollo de Videojuegos</strong>. 
            Me apasiona crear experiencias digitales funcionales, atractivas y creativas, 
            combinando <strong>diseño</strong> y <strong>programación</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}