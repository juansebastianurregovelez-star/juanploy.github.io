const seccionesPortafolio = [
  {
    titulo: "🚚 Diseños para Camiones",
    items: [
      { img: "./camion%201.jpg", nombre: "Andino Cargo" },
      { img: "./camion%202.jpg", nombre: "Ruta 57" },
      { img: "./camion%203.jpg", nombre: "Titan Truck" }
    ]
  },
  {
    titulo: "💈 Barberías y Estilo",
    items: [
      { img: "./barberia%201.jpg", nombre: "Barbería Estilo 1" },
      { img: "./barberia%202.jpg", nombre: "Barbería Estilo 2" },
      { img: "./barberia%203.jpg", nombre: "Barbería Estilo 3" }
    ]
  },

  {
    titulo: "🍔 Restaurantes y Comidas",
    items: [
      { img: "./restaurante%201.jpg", nombre: "Restaurante 1" },
      { img: "./restaurante%202.jpg", nombre: "Restaurante 2" },
      { img: "./restaurante%203.jpg", nombre: "Restaurante 3" }
    ]
  }
];

// Seleccionamos el contenedor del portafolio en tu página
const contenedorPortafolio = document.querySelector("#portafolio");

if (contenedorPortafolio) {
  // Limpiamos lo que haya actualmente y reestructuramos por categorías
  contenedorPortafolio.innerHTML = `
    <h2 class="section-title">02 / PORTAFOLIO</h2>
    <p class="section-subtitle">Explora diseños de logos y edición de videos para que tu idea se vea seria, moderna y lista para redes.</p>
    <div class="portfolio-categories"></div>
  `;

  const contenedorCategorias = contenedorPortafolio.querySelector(".portfolio-categories");

  seccionesPortafolio.forEach(seccion => {
    // Creamos el bloque de la sección con su título
    const HTMLSeccion = document.createElement("div");
    HTMLSeccion.className = "portfolio-section-block";
    HTMLSeccion.style.marginBottom = "40px";

    HTMLSeccion.innerHTML = `
      <h3 style="font-size: 24px; color: #fff; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px;">${seccion.titulo}</h3>
      <div class="logo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;"></div>
    `;

    const gridLogos = HTMLSeccion.querySelector(".logo-grid");

    // Metemos cada imagen dentro de su respectiva sección
    seccion.items.forEach(item => {
      const cardHTML = `
        <div class="card" style="background: #111; border: 1px solid #222; padding: 15px; border-radius: 8px; text-align: center;">
          <img src="${item.img}" alt="${item.nombre}" style="width: 100%; height: auto; border-radius: 4px; margin-bottom: 10px;">
          <h4 style="color: #ccc; margin: 0; font-size: 16px;">${item.nombre}</h4>
        </div>
      `;
      gridLogos.innerHTML += cardHTML;
    });

    contenedorCategorias.appendChild(HTMLSeccion);
  });
}
