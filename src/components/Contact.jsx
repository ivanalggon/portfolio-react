import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // 🔥 HONEYPOT ANTI-SPAM
    if (form.current.company.value) return;

    // 🔥 VALIDACIÓN EMAIL
    const email = form.current.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Introduce un correo electrónico válido.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_portfolio",     // service ID
        "template_portfolio",    // template ID
        form.current,
        "Rm3aNLUF9uDm7nEUA"      // public key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          setLoading(false);
          alert("Error al enviar el mensaje. Verifica tu correo electrónico e inténtalo de nuevo.");
          console.log(error);
        }
      );
  };

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
              <form ref={form} onSubmit={sendEmail}>

                {/* 🔥 HONEYPOT (invisible para humanos) */}
                <input
                  type="text"
                  name="company"
                  style={{ display: "none" }}
                />

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

                <button
                  type="submit"
                  className="submit-btn w-100"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* 🔥 OVERLAY */}
      {success && (
        <div className="overlay-success">
          <div className="overlay-box">
            <p>Mensaje enviado correctamente ✅</p>
          </div>
        </div>
      )}
    </section>
  );
}