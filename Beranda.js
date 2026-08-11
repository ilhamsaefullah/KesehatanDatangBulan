// Mengambil semua tombol menu
const menuButtons = document.querySelectorAll(".menu button");

// Memberikan fungsi klik pada setiap tombol
menuButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const menu = button.innerText;

    alert("Kamu memilih: " + menu);
  });
});
