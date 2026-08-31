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

// Cambiamos esta línea para meter el video al final del body sin romper nada
document.querySelector('#precios').before(videoSection);

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
/* Ajuste de la galería para que las fotos sean uniformes */
.grid-portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
}

.grid-portfolio .item {
  width: 100%;
  text-align: center;
}

.grid-portfolio .item img {
  width: 100%;
  height: 250px; /* Forzamos a que todas tengan la misma altura */
  object-fit: cover; /* Recorta la imagen elegantemente para que no se deforme */
  border-radius: 6px;
  border: 1px solid #222;
}

/* Ajuste para que los botones de categorías no deformen el ancho del celular */
.portfolio-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 0 10px;
}

.tab-btn {
  font-size: 14px;
  padding: 8px 16px;
}
