// ===============================
// HITUNG LAMA MENSTRUASI
// ===============================

const tanggalMulai = document.getElementById("tanggalMulai");
const tanggalSelesai = document.getElementById("tanggalSelesai");
const lamaMenstruasi = document.getElementById("lamaMenstruasi");

// Jalankan ketika tanggal berubah
tanggalMulai.addEventListener("change", hitungDurasi);
tanggalSelesai.addEventListener("change", hitungDurasi);

function hitungDurasi() {
  if (tanggalMulai.value === "" || tanggalSelesai.value === "") {
    lamaMenstruasi.textContent = "-";
    return;
  }

  const mulai = new Date(tanggalMulai.value);
  const selesai = new Date(tanggalSelesai.value);

  const selisih = selesai - mulai;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24)) + 1;

  if (hari <= 0) {
    lamaMenstruasi.textContent = "Tanggal tidak valid";

    return;
  }

  lamaMenstruasi.textContent = hari + " Hari";
}

// ===============================
// SIMPAN CATATAN
// ===============================

function simpanCatatan() {
  const mulai = tanggalMulai.value;
  const selesai = tanggalSelesai.value;

  if (mulai === "" || selesai === "") {
    alert("Silakan isi tanggal mulai dan tanggal selesai!");

    return;
  }

  const tanggalMulaiObj = new Date(mulai);
  const tanggalSelesaiObj = new Date(selesai);

  if (tanggalSelesaiObj < tanggalMulaiObj) {
    alert("Tanggal selesai tidak boleh sebelum tanggal mulai!");

    return;
  }

  const selisih = tanggalSelesaiObj - tanggalMulaiObj;

  const durasi = Math.floor(selisih / (1000 * 60 * 60 * 24)) + 1;

  // Ambil data lama
  let riwayat = JSON.parse(localStorage.getItem("riwayatMenstruasi")) || [];

  // Data baru
  const dataBaru = {
    mulai: mulai,

    selesai: selesai,

    durasi: durasi,
  };

  // Masukkan data baru
  riwayat.push(dataBaru);

  // Simpan ke localStorage
  localStorage.setItem("riwayatMenstruasi", JSON.stringify(riwayat));

  // Tampilkan ulang
  tampilkanRiwayat();

  // Kosongkan input
  tanggalMulai.value = "";
  tanggalSelesai.value = "";

  lamaMenstruasi.textContent = "-";

  alert("Catatan menstruasi berhasil disimpan!");
}

// ===============================
// TAMPILKAN RIWAYAT
// ===============================

function tampilkanRiwayat() {
  const daftarRiwayat = document.getElementById("daftarRiwayat");

  const riwayat = JSON.parse(localStorage.getItem("riwayatMenstruasi")) || [];

  daftarRiwayat.innerHTML = "";

  riwayat.forEach(function (data) {
    const baris = document.createElement("div");

    baris.className = "riwayat-data";

    baris.innerHTML = `
            <p>${formatTanggal(data.mulai)}</p>

            <p>${formatTanggal(data.selesai)}</p>

            <p>${data.durasi} Hari</p>
        `;

    daftarRiwayat.appendChild(baris);
  });
}

// ===============================
// FORMAT TANGGAL
// ===============================

function formatTanggal(tanggal) {
  const data = new Date(tanggal);

  const hari = String(data.getDate()).padStart(2, "0");

  const bulan = String(data.getMonth() + 1).padStart(2, "0");

  const tahun = data.getFullYear();

  return `${hari}/${bulan}/${tahun}`;
}

// ===============================
// TOMBOL BACK
// ===============================

function kembali() {
  window.location.href = "Beranda.html";
}

// Jalankan ketika halaman dibuka
tampilkanRiwayat();
