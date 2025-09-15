import { integrantes } from "../data/integrantes.js";

document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu   = document.querySelector('.nav-menu');

    // Si seguís usando el botón para menú móvil:
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // --- Dropdown con hover ---
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        dropdown.addEventListener('mouseenter', () => {
            // Cierra otros dropdowns abiertos
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });
            dropdownMenu.classList.add('show');
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdownMenu.classList.remove('show');
        });
    });
});

function cargarDropdownIntegrantes() {
    const ul = document.getElementById("dropdownIntegrantes");
    ul.innerHTML = integrantes.map(int => `
    <li>
      <a class="dropdown-item" href="integrante.html?id=${int.id}">
        ${int.nombre}
      </a>
    </li>
  `).join("");
}

cargarDropdownIntegrantes();