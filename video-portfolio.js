const videoSection = document.createElement('section');
videoSection.id = 'video';
videoSection.className = 'section video-section';

videoSection.innerHTML = `<p class="mini">03 / VIDEO</p><h2>mira mi<br>edición.</h2><p class="intro">Un ejemplo de edición para TikTok o Reels.</p><div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;"><video src="video-juanploy.mp4" controls style="max-width: 45%; height: auto;"></video><video src="video.mp4.mp4" controls style="max-width: 45%; height: auto;"></video></div>`;

document.querySelector('#precios').before(videoSection);
