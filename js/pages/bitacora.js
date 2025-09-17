import { decisiones, dificultades, cambios } from "../data/bitacora.js";

// Renderizar datos
const log = document.getElementById("log");

const seccionDecisiones = crearSeccion("Decisiones de diseño", decisiones);
const seccionDificultades = crearSeccion("Dificultades encontradas", dificultades);
const seccionCambios = crearSeccion("Cambios importantes", cambios);

log.append(seccionDecisiones);
log.append(seccionDificultades);
log.append(seccionCambios);

// -------------------------------
// Funciones para secciones
// -------------------------------
function crearSeccion(titulo, items) {
  const section = document.createElement("section");
  section.classList.add("bitacora-section"); // 👈 Nueva clase para estilos

  // título
  const h2 = document.createElement("h2");

  const span = document.createElement("span");
  span.textContent = titulo;

  const spanTriangulo = document.createElement("span");
  spanTriangulo.textContent = "▼";
  spanTriangulo.classList.add("triangle");

  h2.append(span);
  h2.append(spanTriangulo);

  // listado
  const ul = document.createElement("ul");
  ul.classList.add("hide");

  items.forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    ul.appendChild(li);
  });

  // mostrar / ocultar lista
  h2.onclick = () => mostrarOcultar(ul, spanTriangulo);

  // append
  section.appendChild(h2);
  section.appendChild(ul);

  return section;
}

function mostrarOcultar(ul, spanTriangulo) {
  ul.classList.toggle("hide");
  spanTriangulo.textContent = spanTriangulo.textContent === "▼" ? "▲" : "▼";
}

// -------------------------------
// Interactividad de la página
// -------------------------------
function agregarEventos() {
  const btnTema = document.getElementById("btnTema");

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
}

agregarEventos();

