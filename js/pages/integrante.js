import { integrantes } from "../data/integrantes.js";

function getParametroId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function mostrarIntegrante() {
  const id = getParametroId();
  const integrante = integrantes.find(i => i.id === id);

  if (!integrante) {
    document.querySelector("main").innerHTML = "<p>Integrante no encontrado.</p>";
    return;
  }

  document.querySelector("main").innerHTML = `
    <section class="perfil">
      <img src="${integrante.foto}" alt="Foto de ${integrante.nombre}" style="max-width:200px">
      <h1>${integrante.nombre}</h1>
      <p><strong>Ciudad:</strong> ${integrante.ciudad}</p>
      <p><strong>Edad:</strong> ${integrante.edad}</p>
      
      <h2>Habilidades</h2>
      <ul>${integrante.habilidades.map(h => `<li>${h}</li>`).join("")}</ul>

      <h2>Películas favoritas</h2>
      <ul>${integrante.peliculas.map(p => `<li>${p}</li>`).join("")}</ul>

      <h2>Música favorita</h2>
      <ul>${integrante.musica.map(m => `<li>${m}</li>`).join("")}</ul>

      <button id="btnExtra">Mostrar más</button>
      <div id="extra" style="display:none;">
        <p>Me gusta programar proyectos creativos y aprender nuevas tecnologías 🚀</p>
      </div>
    </section>
  `;

  document.getElementById("btnExtra").addEventListener("click", () => {
    const extra = document.getElementById("extra");
    extra.style.display = extra.style.display === "none" ? "block" : "none";
  });
}

mostrarIntegrante();
