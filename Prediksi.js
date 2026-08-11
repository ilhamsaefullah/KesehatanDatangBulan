function hitungPrediksi() {
  const tanggal = parseInt(document.getElementById("tanggal").value);

  const bulan = parseInt(document.getElementById("bulan").value);

  const tahun = parseInt(document.getElementById("tahun").value);

  const siklus = parseInt(document.getElementById("siklus").value);

  // Cek input

  if (isNaN(tanggal) || isNaN(bulan) || isNaN(tahun) || isNaN(siklus)) {
    alert("Silakan isi semua data terlebih dahulu!");

    return;
  }

  // Validasi tanggal

  if (
    tanggal < 1 ||
    tanggal > 31 ||
    bulan < 1 ||
    bulan > 12 ||
    tahun < 1900 ||
    siklus < 1
  ) {
    alert("Data yang dimasukkan tidak valid!");

    return;
  }

  // Membuat tanggal menstruasi terakhir

  const tanggalTerakhir = new Date(tahun, bulan - 1, tanggal);

  // Menghitung tanggal berikutnya

  const tanggalPrediksi = new Date(tanggalTerakhir);

  tanggalPrediksi.setDate(tanggalPrediksi.getDate() + siklus);

  // Format tanggal

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

  // Tampilkan hasil

  document.getElementById("hasilTanggal").textContent = hasil;
}

// =====================================
// TOMBOL BACK
// =====================================

function kembali() {
  window.location.href = "Beranda.html";
}
