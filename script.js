/* ===== FRUVI - shared script.js ===== */

// ---- Page 1 (index.html): tap anywhere to go to Home ----
function goToHome() {
  window.location.href = "home.html";
}

// ---- Password show/hide toggle (used on login.html & signup.html) ----
function togglePassword(inputId, iconEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === "password") {
    input.type = "text";
    iconEl.textContent = "🙈";
  } else {
    input.type = "password";
    iconEl.textContent = "👁";
  }
}

// ---- Email validation helper ----
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// ---- Login form handling ----
function initLoginForm() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const emailError = document.getElementById("loginEmailError");
    const passwordError = document.getElementById("loginPasswordError");

    let valid = true;

    if (!isValidEmail(email.value.trim())) {
      emailError.style.display = "block";
      valid = false;
    } else {
      emailError.style.display = "none";
    }

    if (password.value.trim().length < 6) {
      passwordError.style.display = "block";
      valid = false;
    } else {
      passwordError.style.display = "none";
    }

    if (valid) {
      window.location.href = "loginsuccess.html";
    }
  });
}

// ---- Signup form handling ----
function initSignupForm() {
  const form = document.getElementById("signupForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName");
    const email = document.getElementById("signupEmail");
    const mobile = document.getElementById("signupMobile");
    const password = document.getElementById("signupPassword");

    const nameError = document.getElementById("signupNameError");
    const emailError = document.getElementById("signupEmailError");
    const mobileError = document.getElementById("signupMobileError");
    const passwordError = document.getElementById("signupPasswordError");

    let valid = true;

    if (name.value.trim().length < 2) {
      nameError.style.display = "block";
      valid = false;
    } else {
      nameError.style.display = "none";
    }

    if (!isValidEmail(email.value.trim())) {
      emailError.style.display = "block";
      valid = false;
    } else {
      emailError.style.display = "none";
    }

    if (!/^\d{10}$/.test(mobile.value.trim())) {
      mobileError.style.display = "block";
      valid = false;
    } else {
      mobileError.style.display = "none";
    }

    if (password.value.trim().length < 6) {
      passwordError.style.display = "block";
      valid = false;
    } else {
      passwordError.style.display = "none";
    }

    if (valid) {
      window.location.href = "signupsuccess.html";
    }
  });
}

// ---- Run on page load ----
document.addEventListener("DOMContentLoaded", function () {
  initLoginForm();
  initSignupForm();
});
