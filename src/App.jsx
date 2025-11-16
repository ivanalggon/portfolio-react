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

      <Header />
      <main style={{ backgroundColor: "rgb(5 1 20)" }}>
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
