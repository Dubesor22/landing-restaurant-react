import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <a href="#menu">
            <h5 class="text-white h4">Menu del Viajero</h5>
          </a>
          <h5 class="text-white h4">Nuestras Experiencias</h5>
          <a href="#contacto">
            <h5 class="text-white h4">Contacto</h5>
          </a>
        </div>
      </div>
      <nav class="navbar">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="title">
        <h1>Restaurant Kawamura Urban Explorers</h1>
        <p>"un viaje de Alexis Bipoular"</p>
      </div>
    </div>
  );
};

export default Header;
