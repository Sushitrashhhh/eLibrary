const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementById("loginForm");
const closeForm = document.getElementById("closeForm");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeForm.addEventListener("click", () => {
  loginForm.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
  if (event.target === loginForm) {
    loginForm.style.display = "none";
    document.body.style.overflow = "auto";
  }
});