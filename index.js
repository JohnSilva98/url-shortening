document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMobile = document.getElementById("nav-mobile");

  menuToggle.addEventListener("click", function () {
    navMobile.classList.toggle("active");
  });
});
