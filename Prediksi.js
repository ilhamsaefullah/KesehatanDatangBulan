// =====================================
// HITUNG PREDIKSI MENSTRUASI
// =====================================

function hitungPrediksi() {
  // Ambil tanggal mulai menstruasi terakhir
  const tanggal = parseInt(document.getElementById("tanggal").value);

  const bulan = parseInt(document.getElementById("bulan").value);

  const tahun = parseInt(document.getElementById("tahun").value);

  // =====================================
  // CEK INPUT
  // =====================================

  if (isNaN(tanggal) || isNaN(bulan) || isNaN(tahun)) {
    alert("Silakan isi tanggal mulai menstruasi terakhir!");

    return;
  }

  // =====================================
  // VALIDASI INPUT
  // =====================================

  if (tanggal < 1 || tanggal > 31 || bulan < 1 || bulan > 12 || tahun < 1900) {
    alert("Tanggal menstruasi tidak valid!");

    return;
  }

  // =====================================
  // BUAT TANGGAL MENSTRUASI TERAKHIR
  // =====================================

  const tanggalTerakhir = new Date(tahun, bulan - 1, tanggal);

  // =====================================
  // AMBIL RIWAYAT MENSTRUASI
  // =====================================

  const riwayat = JSON.parse(localStorage.getItem("riwayatMenstruasi")) || [];

  // =====================================
  // CARI DATA SEBELUMNYA
  // =====================================

  let dataSebelumnya = null;

  for (let i = 0; i < riwayat.length; i++) {
    const data = riwayat[i];

    const tanggalMulaiData = new Date(data.mulai);

    // Cari menstruasi yang mulai
    // sebelum tanggal yang dimasukkan

    if (tanggalMulaiData < tanggalTerakhir) {
      if (
        dataSebelumnya === null ||
        tanggalMulaiData > new Date(dataSebelumnya.mulai)
      ) {
        dataSebelumnya = data;
      }
    }
  }

  // =====================================
  // CEK DATA SEBELUMNYA
  // =====================================

  if (dataSebelumnya === null) {
    alert(
      "Data menstruasi sebelumnya belum ditemukan.\n\n" +
        "Silakan pastikan sudah ada catatan menstruasi " +
        "sebelum tanggal yang dimasukkan.",
    );

    return;
  }

  // =====================================
  // AMBIL TANGGAL SELESAI SEBELUMNYA
  // =====================================

  const tanggalSelesaiSebelumnya = new Date(dataSebelumnya.selesai);

  // =====================================
  // HITUNG RENTANG WAKTU
  // =====================================

  const selisih = tanggalTerakhir - tanggalSelesaiSebelumnya;

  const panjangSiklus = Math.round(selisih / (1000 * 60 * 60 * 24));

  // =====================================
  // VALIDASI HASIL
  // =====================================

  if (panjangSiklus <= 0) {
    alert(
      "Tanggal menstruasi tidak valid.\n\n" +
        "Tanggal mulai terakhir harus setelah " +
        "tanggal selesai menstruasi sebelumnya.",
    );

    return;
  }

  // =====================================
  // TAMPILKAN PANJANG SIKLUS
  // =====================================

  const inputSiklus = document.getElementById("siklus");

  if (inputSiklus) {
    inputSiklus.value = panjangSiklus;
  }

  // =====================================
  // HITUNG PREDIKSI BERIKUTNYA
  // =====================================

  const tanggalPrediksi = new Date(tanggalTerakhir);

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
}

// =====================================
// TOMBOL BACK
// =====================================

function kembali() {
  window.location.href = "Beranda.html";
}
