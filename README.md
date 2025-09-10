# TP01 - Proyecto Web en Equipo

## Descripción del Proyecto
Este es el primer trabajo práctico grupal de Frontend. El objetivo fue crear un sitio web colaborativo que presente a cada integrante del equipo con una tarjeta personal, además de incluir una portada y una bitácora del proceso de desarrollo.

El proyecto utiliza un sistema dinámico: todos los integrantes se cargan desde un archivo JavaScript (`integrantes.js`) y se muestran en la página de integrante según el parámetro en la URL.

## Tecnologías Utilizadas
- HTML5
- CSS3 (con Google Fonts y responsive design)
- JavaScript (módulos ES6)
- Git & GitHub
- Vercel (para deploy)

## Estructura de Archivos
```
/
├── index.html          # Portada principal
├── integrante.html     # Página dinámica para cada integrante
├── bitacora.html       # Sección de bitácora
├── css/
│   └── style.css
├── js/
│   ├── data/
│   │   └── integrantes.js
│   └── pages/
│       └── integrante.js
├── img/
│   ├── gabriela.png
│   └── juan.png
└── README.md
```

## JavaScript
- `index.html`: lista de integrantes con enlaces dinámicos (`integrante.html?id=...`).
- `integrante.js`: toma el parámetro `id` de la URL, busca al integrante en el array y genera su tarjeta en el DOM.
- Cada tarjeta incluye un botón **"Mostrar más"** que despliega información adicional (interactividad requerida).

## Enlace al Proyecto Desplegado
👉 [Link en Vercel](https://tu-link-aqui.vercel.app)
