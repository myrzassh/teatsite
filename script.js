	const music = document.getElementById('bgMusic');
	const icon = document.getElementById('musicIcon');

	function toggleMusic() {
	  if (music.paused) {
		music.play();
		icon.textContent = '🎶';
	  } else {
		music.pause();
		icon.textContent = '🎶';
	  }
	}

	window.addEventListener('load', () => {
	  music.play().catch(() => {
		icon.textContent = '🎶'; 
	  });
	});