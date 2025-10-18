import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">Iván</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300">Desarrollador Web</p>
      <nav className="mt-4 space-x-4">
        <a href="#about" className="text-blue-500 hover:underline">Sobre mí</a>
        <a href="#skills" className="text-blue-500 hover:underline">Habilidades</a>
        <a href="#projects" className="text-blue-500 hover:underline">Proyectos</a>
        <a href="#contact" className="text-blue-500 hover:underline">Contacto</a>
      </nav>
    </header>
  );
}
