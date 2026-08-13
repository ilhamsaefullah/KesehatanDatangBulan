document.addEventListener("DOMContentLoaded", () => {
  const btnSimpan = document.getElementById("btnSimpan");
  const inputTanggal = document.getElementById("inputTanggal");
  const containerRiwayat = document.getElementById("containerRiwayat");

  btnSimpan.addEventListener("click", () => {
    const tanggal = inputTanggal.value;

    // Ambil radio button tingkat nyeri yang dipilih
    const tingkatNyeriEl = document.querySelector(
      'input[name="tingkatNyeri"]:checked',
    );
    const tingkatNyeri = tingkatNyeriEl ? tingkatNyeriEl.value : "Tidak Diisi";

    // Ambil semua gejala yang dicentang
    const gejalaCheckboxes = document.querySelectorAll(".gejala-check:checked");
    const gejalaList = [];
    gejalaCheckboxes.forEach((cb) => gejalaList.push(cb.value));

    // Validasi sederhana
    if (!tanggal) {
      alert("Pilih tanggal terlebih dahulu!");
      return;
    }

    if (gejalaList.length === 0 && tingkatNyeri === "Tidak Diisi") {
      alert("Isi minimal tingkat nyeri atau gejala yang dirasa.");
      return;
    }

    // Buat elemen item riwayat baru
    const itemRiwayat = document.createElement("div");
    itemRiwayat.className = "riwayat-item";
    itemRiwayat.innerHTML = `
      <strong>Tanggal:</strong> ${tanggal} <br>
      <strong>Tingkat Nyeri:</strong> ${tingkatNyeri} <br>
      <strong>Gejala:</strong> ${gejalaList.length > 0 ? gejalaList.join(", ") : "Tidak ada"}
    `;

    // Masukkan ke kolom Riwayat Gejala
    containerRiwayat.prepend(itemRiwayat);

    // Reset Form
    inputTanggal.value = "";
    if (tingkatNyeriEl) tingkatNyeriEl.checked = false;
    gejalaCheckboxes.forEach((cb) => (cb.checked = false));
  });
});

//Button Back//
function kembali() {
  window.location.href = "Beranda.html";
}
