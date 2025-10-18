import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // obtiene el año actual

  return (
    <footer className="p-4 text-center bg-gray-200">
      <p className="text-gray-600">
        © {currentYear} Iván Alguacil. Todos los derechos reservados.
      </p>
    </footer>
  );
}