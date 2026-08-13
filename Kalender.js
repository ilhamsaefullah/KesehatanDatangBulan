// =====================================
// VARIABEL BULAN
// =====================================

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

// =====================================
// TAMPILKAN KALENDER
// =====================================

function tampilkanKalender() {
  // Nama bulan
  document.getElementById("namaBulan").textContent =
    namaBulan[bulanSekarang] + " " + tahunSekarang;

  const kalender = document.getElementById("tanggalKalender");

  // Kosongkan kalender
  kalender.innerHTML = "";

  // Jumlah hari dalam bulan
  const jumlahHari = new Date(tahunSekarang, bulanSekarang + 1, 0).getDate();

  // Ambil data pencatatan
  const riwayat = JSON.parse(localStorage.getItem("riwayatMenstruasi")) || [];

  // =====================================
  // BUAT TANGGAL
  // =====================================

  for (let tanggal = 1; tanggal <= jumlahHari; tanggal++) {
    const kotakTanggal = document.createElement("div");

    kotakTanggal.textContent = tanggal;

    // Tanggal kalender yang sedang dicek
    const tanggalKalender = new Date(tahunSekarang, bulanSekarang, tanggal);

    // =====================================
    // MENSTRUASI AKTUAL
    // =====================================

    riwayat.forEach(function (data) {
      const mulai = buatTanggal(data.mulai);

      const selesai = buatTanggal(data.selesai);

      if (tanggalKalender >= mulai && tanggalKalender <= selesai) {
        kotakTanggal.classList.add("menstruasi");
      }
    });

    // =====================================
    // PREDIKSI & MASA SUBUR
    // =====================================

    if (riwayat.length >= 2) {
      const terakhir = riwayat[riwayat.length - 1];

      const sebelumnya = riwayat[riwayat.length - 2];

      const mulaiTerakhir = buatTanggal(terakhir.mulai);

      const selesaiSebelumnya = buatTanggal(sebelumnya.selesai);

      // =====================================
      // HITUNG PANJANG SIKLUS
      // =====================================

      const selisih = mulaiTerakhir - selesaiSebelumnya;

      const panjangSiklus = Math.round(selisih / (1000 * 60 * 60 * 24));

      // =====================================
      // TANGGAL PREDIKSI
      // =====================================

      const tanggalPrediksi = new Date(mulaiTerakhir);

      tanggalPrediksi.setDate(tanggalPrediksi.getDate() + panjangSiklus);

      // Prediksi selama 5 hari
      const prediksiSelesai = new Date(tanggalPrediksi);

      prediksiSelesai.setDate(prediksiSelesai.getDate() + 4);

      // =====================================
      // WARNA PREDIKSI
      // =====================================

      if (
        tanggalKalender >= tanggalPrediksi &&
        tanggalKalender <= prediksiSelesai
      ) {
        kotakTanggal.classList.add("prediksi");
      }

      // =====================================
      // MASA SUBUR
      // =====================================

      const ovulasi = new Date(tanggalPrediksi);

      ovulasi.setDate(ovulasi.getDate() - 14);

      const awalSubur = new Date(ovulasi);

      awalSubur.setDate(awalSubur.getDate() - 5);

      const akhirSubur = new Date(ovulasi);

      akhirSubur.setDate(akhirSubur.getDate() + 1);

      if (tanggalKalender >= awalSubur && tanggalKalender <= akhirSubur) {
        kotakTanggal.classList.add("subur");
      }
    }

    // =====================================
    // HARI INI
    // =====================================

    const hariIni = new Date();

    if (
      tanggal === hariIni.getDate() &&
      bulanSekarang === hariIni.getMonth() &&
      tahunSekarang === hariIni.getFullYear()
    ) {
      kotakTanggal.classList.add("hari-ini");
    }

    // Masukkan ke kalender
    kalender.appendChild(kotakTanggal);
  }
}

// =====================================
// FUNGSI MEMBUAT TANGGAL
// =====================================

function buatTanggal(tanggal) {
  const bagian = tanggal.split("-");

  return new Date(Number(bagian[0]), Number(bagian[1]) - 1, Number(bagian[2]));
}

// =====================================
// FORMAT TANGGAL
// =====================================

function formatTanggalKalender(tanggal) {
  const hari = String(tanggal.getDate()).padStart(2, "0");

  const bulan = String(tanggal.getMonth() + 1).padStart(2, "0");

  const tahun = tanggal.getFullYear();

  return `${hari}/${bulan}/${tahun}`;
}

// =====================================
// DATA DI SISI KANAN
// =====================================

function tampilkanDataMenstruasi() {
  const riwayat = JSON.parse(localStorage.getItem("riwayatMenstruasi")) || [];

  // Kalau belum ada data
  if (riwayat.length === 0) {
    document.getElementById("mensTerakhir").value = "";

    document.getElementById("prediksi").value = "";

    document.getElementById("panjangSiklus").value = "";

    return;
  }

  // =====================================
  // MENSTRUASI TERAKHIR
  // =====================================

  const terakhir = riwayat[riwayat.length - 1];

  const mulaiTerakhir = buatTanggal(terakhir.mulai);

  document.getElementById("mensTerakhir").value =
    formatTanggalKalender(mulaiTerakhir);

  // =====================================
  // KALAU BARU ADA 1 DATA
  // =====================================

  if (riwayat.length < 2) {
    document.getElementById("prediksi").value = "-";

    document.getElementById("panjangSiklus").value = "-";

    return;
  }

  // =====================================
  // DATA SEBELUMNYA
  // =====================================

  const sebelumnya = riwayat[riwayat.length - 2];

  const selesaiSebelumnya = buatTanggal(sebelumnya.selesai);

  // =====================================
  // HITUNG PANJANG SIKLUS
  // =====================================

  const selisih = mulaiTerakhir - selesaiSebelumnya;

  const panjangSiklus = Math.round(selisih / (1000 * 60 * 60 * 24));

  document.getElementById("panjangSiklus").value = panjangSiklus + " Hari";

  // =====================================
  // PREDIKSI BERIKUTNYA
  // =====================================

  const tanggalPrediksi = new Date(mulaiTerakhir);

  tanggalPrediksi.setDate(tanggalPrediksi.getDate() + panjangSiklus);

  document.getElementById("prediksi").value =
    formatTanggalKalender(tanggalPrediksi);
}

//Button Back//
const btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", () => {
  // Kembali ke halaman sebelumnya
  window.history.back();
});

// =====================================
// BULAN SEBELUMNYA
// =====================================

function bulanSebelumnya() {
  bulanSekarang--;

  if (bulanSekarang < 0) {
    bulanSekarang = 11;

    tahunSekarang--;
  }

  tampilkanKalender();
}

// =====================================
// BULAN BERIKUTNYA
// =====================================

function bulanBerikutnya() {
  bulanSekarang++;

  if (bulanSekarang > 11) {
    bulanSekarang = 0;

    tahunSekarang++;
  }

  tampilkanKalender();
}

// =====================================
// JALANKAN
// =====================================

tampilkanKalender();

tampilkanDataMenstruasi();
