const videoSection = document.createElement('section');
videoSection.id = 'video';
videoSection.className = 'section video-section';

videoSection.innerHTML = `<p class="mini">03 / VIDEO</p>
<h2>mira mi<br>edición.</h2>
<p class="intro">Un ejemplo de edición para TikTok o Reels.</p>
<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
  <video src="video-juanploy.mp4" controls preload="metadata" muted style="max-width: 45%; height: auto;"></video>
  <video src="video.mp4.mp4" controls preload="metadata" muted style="max-width: 45%; height: auto;"></video>
</div>`;

// Coloca los videos justo antes de la sección de precios
const preciosSection = document.querySelector('#precios');
if (preciosSection) {
  preciosSection.before(videoSection);
}

function filterPortfolio(categoryName) {
  // Oculta todas las galerías de fotos
  document.querySelectorAll('.portfolio-category').forEach(cat => {
    cat.classList.remove('active');
  });
  
  // Desactiva el estado visual de todos los botones
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Muestra únicamente la galería seleccionada
  const selectedCat = document.getElementById('cat-' + categoryName);
  if (selectedCat) {
    selectedCat.classList.add('active');
  }
}
