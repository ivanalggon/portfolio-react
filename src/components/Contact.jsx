import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="p-5">
      <h2 className="text-3xl text-center font-bold mb-2" id="title">Contacto</h2>

      {/* Button con Currículum para descargar en vez de la imagen
 
        <button className="submit-btn w-100" style={{ maxWidth: "200px", margin: "1rem auto", display: "block" }}>
          Descargar Currículum
        </button>

      */}
      <div>
        <p style={{ maxWidth: "600px", margin: "0 auto", marginTop: "1.5rem", textAlign: "left" }}>
          Si deseas ponerte en contacto conmigo, puedes enviarme un correo electrónico mediante el siguiente formulario.
        </p>
      </div>

      <div className="container my-5">
      <div className="row align-items-center contact-wrapper">
        
        <div class="col-md-4 text-center mb-4 mb-md-0">
          <img src="/contact image.png" 
              alt="Contacto" 
              class="contact-img img-fluid"/>
        </div>

        <div class="col-md-8">
          <div class="contact-form p-4 rounded">
            <form action="https://formspree.io/f/mrbdegdz" method="POST">
              
              <div className="floating-group">
                <input 
                  type="name" 
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

              <button type="submit" className="submit-btn w-100">Enviar</button>

            </form>
          </div>
        </div>

      </div>
    </div>

    </section>
  );
}
