import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">

      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/Videos/Gameplay.webm" type="video/webm" />
      </video>

      {/* Overlay para oscurecer / difuminar */}
      <div className="video-overlay"></div>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
