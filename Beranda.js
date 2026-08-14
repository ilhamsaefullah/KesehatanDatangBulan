document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicToggleBtn");

  // Atur volume lagu (0.0 sampai 1.0) -> 0.3 artinya volume 30% agar lembut
  bgMusic.volume = 0.3;

  // Coba putar musik secara otomatis saat pertama masuk
  let playPromise = bgMusic.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Jika browser memblokir autoplay, musik diputar saat pengguna pertama kali mengklik layar
      const startMusicOnInteraction = () => {
        bgMusic.play();
        document.removeEventListener("click", startMusicOnInteraction);
      };
      document.addEventListener("click", startMusicOnInteraction);
    });
  }

  // Buka/Mati musik manual lewat tombol musik
  if (musicBtn) {
    musicBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Agar tidak bentrok dengan event click dokumentasi
      if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerText = "🔊 Musik: ON";
      } else {
        bgMusic.pause();
        musicBtn.innerText = "🔇 Musik: OFF";
      }
    });
  }
});
