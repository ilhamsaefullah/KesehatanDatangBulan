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

function tampilkanBulan() {
  document.getElementById("namaBulan").textContent =
    namaBulan[bulanSekarang] + " " + tahunSekarang;
}

function bulanSebelumnya() {
  bulanSekarang--;

  if (bulanSekarang < 0) {
    bulanSekarang = 11;

    tahunSekarang--;
  }

  tampilkanBulan();
}

function bulanBerikutnya() {
  bulanSekarang++;

  if (bulanSekarang > 11) {
    bulanSekarang = 0;

    tahunSekarang++;
  }

  tampilkanBulan();
}

// Jalankan saat halaman dibuka

tampilkanBulan();
