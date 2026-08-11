const videoSection = document.createElement('section');
videoSection.id = 'video';
videoSection.className = 'section video-section';
videoSection.innerHTML = `<p class="mini">03 / VIDEO</p><h2>Mira mi<br>edición.</h2><p class="intro">Un ejemplo de edición para TikTok o Reels.</p><video controls playsinline preload="metadata"><source src="video-juanploy.mp4" type="video/mp4">Tu navegador no puede reproducir este video.</video>`;
document.querySelector('#precios').before(videoSection);
