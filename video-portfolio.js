// 1. Crear e insertar la sección de videos de manera segura
const videoSection = document.createElement('section');
videoSection.id = 'video';
videoSection.className = 'section video-section';

videoSection.innerHTML = `<p class="mini">03 / VIDEO</p>
<h2>mira mi<br>edición.</h2>
<p class="intro">Un ejemplo de edición para TikTok o Reels.</p>
<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
  <video src="video-juanploy.mp4" controls preload="none" muted style="max-width: 45%; height: auto; border-radius: 6px;"></video>
  <video src="video.mp4.mp4" controls preload="none" muted style="max-width: 45%; height: auto; border-radius: 6px;"></video>
</div>`;

// Insertar los videos justo antes de la sección de precios
const preciosSection = document.querySelector('#precios');
if (preciosSection) {
  preciosSection.before(videoSection);
}

// 2. Función interactiva para el filtrado de las imágenes del portafolio
function filterPortfolio(categoryName) {
  // Ocultar todas las categorías de fotos
  document.querySelectorAll('.portfolio-category').forEach(cat => {
    cat.classList.remove('active');
  });
  
  // Desactivar el estado visual de todos los botones
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Mostrar únicamente la categoría seleccionada
  const selectedCat = document.getElementById('cat-' + categoryName);
  if (selectedCat) {
    selectedCat.classList.add('active');
  }
}
