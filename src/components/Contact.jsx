import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-3xl text-center font-bold mb-2" id="title">
        Contacto
      </h2>

      <div className="container my-5">
        <div className="row align-items-center g-4 contact-wrapper">

          {/* Imagen */}
          <div className="col-md-4 text-center mb-4 mb-md-0 contact-visual">
            <img
              src="/Profile/profile2.png"
              alt="Contacto"
              className="contact-img img-fluid"
            />
          </div>

          {/* Formulario */}
          <div className="col-md-8">
            <div className="contact-form rounded contact-card">
              <form action="https://formspree.io/f/mrbdegdz" method="POST">

                <div className="floating-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control custom-input"
                    required
                    placeholder=" "
                  />
                  <label>Nombre</label>
                </div>

                <div className="floating-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control custom-input"
                    required
                    placeholder=" "
                  />
                  <label>Correo electrónico</label>
                </div>

                <div className="floating-group">
                  <textarea
                    name="message"
                    rows="4"
                    className="form-control custom-input"
                    required
                    placeholder=" "
                  ></textarea>
                  <label>Mensaje</label>
                </div>

                <button type="submit" className="submit-btn w-100">
                  Enviar
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}