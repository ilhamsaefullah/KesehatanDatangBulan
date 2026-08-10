// Mengambil elemen dari HTML
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");

const loginForm = document.getElementById("loginForm");

// Tombol LOGIN NOW
loginBtn.addEventListener("click", function () {
  loginModal.style.display = "flex";
});

// Tombol close
closeLogin.addEventListener("click", function () {
  loginModal.style.display = "none";
});

// Klik di luar kotak login
loginModal.addEventListener("click", function (event) {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// Proses login
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
