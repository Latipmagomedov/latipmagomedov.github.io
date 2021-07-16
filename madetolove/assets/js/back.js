const menuIcon = document.querySelector(".header__mobile-icon");
const backBtn = document.querySelector(".header__mobile-back");

menuIcon.style.display = "none";
backBtn.classList.add("header__mobile-back_active");

backBtn.addEventListener("click", () => {
    history.back();
});
