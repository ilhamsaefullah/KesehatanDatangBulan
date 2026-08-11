// =====================================
// HITUNG PREDIKSI MENSTRUASI
// =====================================

function hitungPrediksi() {
  // Ambil riwayat dari localStorage
  const riwayat = JSON.parse(localStorage.getItem("riwayatMenstruasi")) || [];

  // Minimal membutuhkan 2 riwayat
  if (riwayat.length < 2) {
    alert(
      "Data belum cukup untuk menghitung panjang siklus.\n\n" +
        "Minimal diperlukan 2 catatan menstruasi.",
    );

    return;
  }

  // Ambil 2 data menstruasi terakhir
  const menstruasiSekarang = riwayat[riwayat.length - 1];

  const menstruasiSebelumnya = riwayat[riwayat.length - 2];

  // Ambil tanggal mulai
  const tanggalSekarang = new Date(menstruasiSekarang.mulai);

  const tanggalSebelumnya = new Date(menstruasiSebelumnya.mulai);

  // =====================================
  // HITUNG PANJANG SIKLUS
  // =====================================

  const selisih = tanggalSekarang - tanggalSebelumnya;

  const panjangSiklus = Math.round(selisih / (1000 * 60 * 60 * 24));

  // Validasi siklus
  if (panjangSiklus <= 0) {
    alert("Data tanggal menstruasi tidak valid.");

    return;
  }

  // =====================================
  // HITUNG PREDIKSI BERIKUTNYA
  // =====================================

  const tanggalPrediksi = new Date(tanggalSekarang);

  tanggalPrediksi.setDate(tanggalPrediksi.getDate() + panjangSiklus);

  // =====================================
  // FORMAT TANGGAL
  // =====================================

  const namaBulan = [
    "JANUARI",
    "FEBRUARI",
    "MARET",
    "APRIL",
    "MEI",
    "JUNI",
    "JULI",
    "AGUSTUS",
    "SEPTEMBER",
    "OKTOBER",
    "NOVEMBER",
    "DESEMBER",
  ];

  const hasilHari = tanggalPrediksi.getDate();

  const hasilBulan = namaBulan[tanggalPrediksi.getMonth()];

  const hasilTahun = tanggalPrediksi.getFullYear();

  const hasil = `${hasilHari} ${hasilBulan} ${hasilTahun}`;

  // =====================================
  // TAMPILKAN HASIL
  // =====================================

  document.getElementById("hasilTanggal").textContent = hasil;

  // =====================================
  // TAMPILKAN PANJANG SIKLUS
  // =====================================

  const inputSiklus = document.getElementById("siklus");

  if (inputSiklus) {
    inputSiklus.value = panjangSiklus;
  }
}

// =====================================
// TOMBOL BACK
// =====================================

function kembali() {
  window.location.href = "Beranda.html";
}
