import { integrantes } from "./data/integrantes.js";

// Tarjetas dinámicas
function mostrarIntegrantes() {
  const container = document.getElementById("cards-container");
  container.innerHTML = integrantes.map(int => `
    <div class="card">
      <a href="integrante.html?id=${int.id}">
        <img src="${int.foto}" alt="Foto de ${int.nombre}" class="avatar">
        <h2>${int.nombre}</h2>
        <p>${int.ciudad}</p>
      </a>
    </div>
  `).join("");
}

// Interactividad en portada
function agregarEventos() {
  const btnTema = document.getElementById("btnTema");
  const btnSaludo = document.getElementById("btnSaludo");
  const mensaje = document.getElementById("mensaje");

  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
  });

  btnSaludo.addEventListener("click", () => {
    mensaje.hidden = !mensaje.hidden;
  });
}

mostrarIntegrantes();
agregarEventos();
