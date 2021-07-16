const menuBtn = document.querySelector(".header__mobile-icon");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("header__mobile-icon_active");
  menuMobile.classList.toggle("menu-mobile_active");
});

const citiesOpenModalBtn = document.querySelector(".menu-mobile__drop");
const citiesModal = document.querySelector(".menu-mobile__menu");
citiesOpenModalBtn.addEventListener("click", () => {
  citiesModal.classList.toggle("menu-mobile__menu_active");
});

citiesModal.addEventListener("click", (e) => {
  if (!e.target.closest(".menu-mobile__menu-cities")) {
    citiesModal.classList.toggle("menu-mobile__menu_active");
  }
});

const closeBottomMenu = document.querySelector(".menu-mobile__menu-cities");
const hammertime = new Hammer(closeBottomMenu, {});
hammertime.on("pan", function (ev) {
  citiesModal.classList.toggle("menu-mobile__menu_active");
});

// hammertime.get('swipe').set({ direction: console.log(5) });
