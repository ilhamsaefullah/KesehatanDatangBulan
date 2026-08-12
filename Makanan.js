document.addEventListener("DOMContentLoaded", () => {
  // Tombol Back
  const btnBack = document.getElementById("btnBack");
  btnBack.addEventListener("click", () => {
    // Kembali ke halaman sebelumnya
    window.history.back();
  });

  // Interaktivitas saat kartu makanan diklik
  const foodCards = document.querySelectorAll(".food-card");
  foodCards.forEach((card) => {
    card.addEventListener("click", () => {
      const foodName = card.getAttribute("data-food");
      alert(
        `Kamu memilih: ${foodName}. Makanan ini baik untuk meredakan nyeri menstruasi!`,
      );
    });
  });
});
