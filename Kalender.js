let tanggalSekarang = new Date();

let bulanSekarang = tanggalSekarang.getMonth();

let tahunSekarang = tanggalSekarang.getFullYear();

const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function tampilkanKalender() {
  // Tampilkan nama bulan dan tahun
  document.getElementById("namaBulan").textContent =
    namaBulan[bulanSekarang] + " " + tahunSekarang;

  const kalender = document.getElementById("tanggalKalender");

  // Kosongkan tanggal sebelumnya
  kalender.innerHTML = "";

  // Menentukan jumlah hari dalam bulan
  const jumlahHari = new Date(tahunSekarang, bulanSekarang + 1, 0).getDate();

  // Membuat tanggal
  for (let tanggal = 1; tanggal <= jumlahHari; tanggal++) {
    const kotakTanggal = document.createElement("div");

    kotakTanggal.textContent = tanggal;

    // =========================
    // TANGGAL MENSTRUASI
    // =========================

    if (
      bulanSekarang === 7 &&
      tahunSekarang === 2026 &&
      tanggal >= 15 &&
      tanggal <= 19
    ) {
      kotakTanggal.classList.add("menstruasi");
    }

    // =========================
    // TANGGAL PREDIKSI
    // =========================

    if (
      bulanSekarang === 8 &&
      tahunSekarang === 2026 &&
      tanggal >= 12 &&
      tanggal <= 16
    ) {
      kotakTanggal.classList.add("prediksi");
    }

    // =========================
    // MASA SUBUR
    // =========================

    if (
      bulanSekarang === 7 &&
      tahunSekarang === 2026 &&
      tanggal >= 25 &&
      tanggal <= 30
    ) {
      kotakTanggal.classList.add("subur");
    }

    // =========================
    // HARI INI
    // =========================

    const hariIni = new Date();

    if (
      tanggal === hariIni.getDate() &&
      bulanSekarang === hariIni.getMonth() &&
      tahunSekarang === hariIni.getFullYear()
    ) {
      kotakTanggal.classList.add("hari-ini");
    }

    kalender.appendChild(kotakTanggal);
  }
}

// Tombol bulan sebelumnya

function bulanSebelumnya() {
  bulanSekarang--;

  if (bulanSekarang < 0) {
    bulanSekarang = 11;

    tahunSekarang--;
  }

  tampilkanKalender();
}

// Tombol bulan berikutnya

function bulanBerikutnya() {
  bulanSekarang++;

  if (bulanSekarang > 11) {
    bulanSekarang = 0;

    tahunSekarang++;
  }

  tampilkanKalender();
}

// Jalankan pertama kali

tampilkanKalender();
