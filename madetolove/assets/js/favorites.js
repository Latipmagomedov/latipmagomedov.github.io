const favButtons = document.querySelectorAll(".fav");
favButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("fav-active");
  });
});

const favBtnContainer = document.querySelector(".fav-btn");
const favImg = document.querySelector(".fav-btn .fav");

favImg.addEventListener("click", () => {
  favImg.classList.toggle("fav-active");
});


favBtnContainer.addEventListener("click", () => {
  favImg.classList.toggle("fav-active");
});
