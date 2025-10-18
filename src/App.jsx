import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css"; // opcional si vas a usar Tailwind puedes borrarlo

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Secciones principales */}
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
