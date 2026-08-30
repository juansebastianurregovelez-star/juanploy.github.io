const seccionesPortafolio = [
  {
    titulo: "🚚 Diseños para Camiones",
    items: [
      { img: "./camion 1.jpg", nombre: "Andino Cargo" },
      { img: "./camion 2.jpg", nombre: "Ruta 57" },
      { img: "./camion 3.jpg", nombre: "Titan Truck" }
    ]
  },
  {
    titulo: "💈 Barberías y Estilo",
    items: [
      { img: "./barberia 1.jpg", nombre: "Barbería Estilo 1" },
      { img: "./barberia 2.jpg", nombre: "Barbería Estilo 2" },
      { img: "./barberia 3.jpg", nombre: "Barbería Estilo 3" }
    ]
  },
  {
    titulo: "💪 Gimnasios y Fitness",
    items: [
      { img: "./gidnasio 1.jpg", nombre: "Gym Fitness 1" },
      { img: "./gidnasio 2.jpg", nombre: "Gym Fitness 2" },
      { img: "./gidnasio3.jpg", nombre: "Gym Fitness 3" } 
    ]
  },
  {
    titulo: "🍔 Restaurantes y Comidas",
    items: [
      { img: "./restaurante 1.jpg", nombre: "Restaurante 1" },
      { img: "./restaurante 2.jpg", nombre: "Restaurante 2" },
      { img: "./restaurante 3.jpg", nombre: "Restaurante 3" }
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
          <img src="${item.img}" alt="${item.nombre}" style="width: 100%; height: auto; border-radius: 4px; margin-bottom: 10px;" onerror="this.onerror=null; if(!this.src.includes('%20')) { this.src=this.src.replace(' ', '%20'); } else if(this.src.endsWith('.jpg')) { this.src=this.src.replace('.jpg', '.png'); }">
          <h4 style="color: #ccc; margin: 0; font-size: 16px;">${item.nombre}</h4>
        </div>
      `;
      gridLogos.innerHTML += cardHTML;
    });

    contenedorCategorias.appendChild(HTMLSeccion);
  });
}
