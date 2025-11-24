import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="about-section p-6 " >
      <div className="profileimage">
        <img src="/Profile/profile.png" alt="Foto de Perfil" />
      </div>
      <div className="aboutme">
        <div>
          <h2 className="text-3xl font-bold mb-2" id="title">Sobre Mí</h2>
          <p>
            Soy un desarrollador web con una base técnica sólida y una orientación clara hacia el desarrollo de videojuegos, 
            combinando conocimientos, creatividad y atención al detalle para dar vida a experiencias digitales únicas.
          </p>
        </div>
      </div>
    </section>
  );
}