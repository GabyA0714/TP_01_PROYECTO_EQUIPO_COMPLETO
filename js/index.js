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

  // Al cargar, aplicar el tema guardado en localStorage
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("theme-dark");
    }
  });

  // Botón de cambiar tema
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    const isDark = document.body.classList.contains("theme-dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Botón de saludo
  btnSaludo.addEventListener("click", () => {
    mensaje.hidden = !mensaje.hidden;
  });
}

mostrarIntegrantes();
agregarEventos();

