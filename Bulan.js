// Mengambil tombol LOGIN
const loginBtn = document.getElementById("loginBtn");

// Mengambil tombol SIGN IN
const signupBtn = document.getElementById("signupBtn");

// Mengambil popup login
const loginModal = document.getElementById("loginModal");

// Mengambil tombol close
const closeLogin = document.getElementById("closeLogin");

// Mengambil form login
const loginForm = document.getElementById("loginForm");

// ======================================
// TOMBOL LOGIN NOW
// ======================================

loginBtn.addEventListener("click", function () {
  loginModal.style.display = "flex";
});

// ======================================
// TOMBOL CLOSE
// ======================================

closeLogin.addEventListener("click", function () {
  loginModal.style.display = "none";
});

// ======================================
// KLIK DI LUAR KOTAK LOGIN
// ======================================

loginModal.addEventListener("click", function (event) {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// ======================================
// PROSES LOGIN
// ======================================

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Email dan password harus diisi!");

    return;
  }

  alert("Login berhasil!");
});

// ======================================
// SIGN IN
// ======================================

const signupModal = document.getElementById("signupModal");

const closeSignup = document.getElementById("closeSignup");

const signupForm = document.getElementById("signupForm");

// Tombol SIGN IN NOW
signupBtn.addEventListener("click", function () {
  signupModal.style.display = "flex";
});

// Tombol close SIGN IN
closeSignup.addEventListener("click", function () {
  signupModal.style.display = "none";
});

// Klik di luar kotak SIGN IN
signupModal.addEventListener("click", function (event) {
  if (event.target === signupModal) {
    signupModal.style.display = "none";
  }
});

// Proses SIGN IN
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("signupEmail").value;

  const password = document.getElementById("signupPassword").value;

  // Simpan email dan password
  localStorage.setItem("email", email);

  localStorage.setItem("password", password);

  alert("Akun berhasil dibuat!");

  // Tutup popup
  signupModal.style.display = "none";
});
