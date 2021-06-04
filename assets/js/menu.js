// Menu
const menuBtn = document.querySelector(".open-menu");
const menu = document.querySelector(".header__mobile-nav");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("header__mobile-nav-open");
});
