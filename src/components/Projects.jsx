import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="p-6">
      <h2 className="text-3xl font-bold mb-2 text-center" id="title">Proyectos</h2>
      <p className="text-center">Aquí mostraré mis proyectos más destacados.</p>

      <div className="container my-5" id="Project1" style={{backgroundColor: "rgb(9 9 9)", padding: "1rem", borderRadius: "0.5rem", border: "2px solid #222"}}>
        <div className="row align-items-center">
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <img src="/Projects/Portada.jpg" 
                alt="Proyecto" 
                className="project-img img-fluid"
                style={{borderRadius: "0.5rem"}}/>
          </div>
          <div className="col-md-8">
            <h3 className="text-2xl font-bold mb-2" >Echoes of the Abyss</h3>
            <p>Demo de videojuego "Roguelike" 3D con vista isométrica desarrollado en Unity.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
              <img src="/Technologies/Unity-logo.png" alt="Unity" className="img-fluid" style={{width: "50px", height: "50px"}}/>
              <img src="/Technologies/Csharp_Logo.png" alt="C#" className="img-fluid" style={{width: "50px", height: "50px"}}/>
              <img src="/Technologies/3ds-max.png" alt="3ds-max" className="img-fluid" style={{width: "50px", height: "50px"}}/>
              <img src="/Technologies/substance-painter-logo.png" alt="Substance Painter" className="img-fluid" style={{width: "50px", height: "50px"}}/>
            </div>
            <div className="text-center mt-3">
              <a href="https://github.com/ivanalggon/Echoes-Of-The-Abyss" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver en GitHub</a>
            </div>
          </div>
        </div>
      </div>

    <div className="container my-5" id="Project1" style={{backgroundColor: "rgb(9 9 9)", padding: "1rem", borderRadius: "0.5rem", border: "2px solid #222"}}>
        <div className="row align-items-center">
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <img src="/Projects/Portada.jpg" 
                alt="Proyecto" 
                className="project-img img-fluid"
                style={{borderRadius: "0.5rem"}}/>
          </div>
          <div className="col-md-8">
            <h3 className="text-2xl font-bold mb-2" >Echoes of the Abyss</h3>
            <p>Demo de videojuego "Roguelike" 3D con vista isométrica desarrollado en Unity.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
              <img src="/Technologies/Unity-logo.png" alt="Unity" className="img-fluid" style={{width: "50px", height: "50px"}}/>
              <img src="/Technologies/Csharp_Logo.png" alt="C#" className="img-fluid" style={{width: "50px", height: "50px"}}/>
              <img src="/Technologies/3ds-max.png" alt="3ds-max" className="img-fluid" style={{width: "50px", height: "50px"}}/>
              <img src="/Technologies/substance-painter-logo.png" alt="Substance Painter" className="img-fluid" style={{width: "50px", height: "50px"}}/>
            </div>
            <div className="text-center mt-3">
              <a href="https://github.com/ivanalggon/Echoes-Of-The-Abyss" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver en GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5" id="Project1" style={{backgroundColor: "rgb(9 9 9)", padding: "1rem", borderRadius: "0.5rem", border: "2px solid #222"}}>
        <div className="row align-items-center">
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <img src="/Projects/Portada.jpg" 
                alt="Proyecto" 
                className="project-img img-fluid"
                style={{borderRadius: "0.5rem"}}/>
          </div>
          <div className="col-md-8">
            <h3 className="text-2xl font-bold mb-2" >Echoes of the Abyss</h3>
            <p>Demo de videojuego "Roguelike" 3D con vista isométrica desarrollado en Unity.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
              <img src="/Technologies/Unity-logo.png" alt="Unity" className="img-fluid" style={{width: "50px", height: "50px"}}/>
              <img src="/Technologies/Csharp_Logo.png" alt="C#" className="img-fluid" style={{width: "50px", height: "50px"}}/>
              <img src="/Technologies/3ds-max.png" alt="3ds-max" className="img-fluid" style={{width: "50px", height: "50px"}}/>
              <img src="/Technologies/substance-painter-logo.png" alt="Substance Painter" className="img-fluid" style={{width: "50px", height: "50px"}}/>
            </div>
            <div className="text-center mt-3">
              <a href="https://github.com/ivanalggon/Echoes-Of-The-Abyss" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver en GitHub</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}