if (document.querySelector(".bottom-menu__icon")) {
  const bottomMenuIcon = document.querySelectorAll(".bottom-menu__icon");
  bottomMenuIcon.forEach((item) => {
    item.addEventListener("click", () => {
      bottomMenuIcon.forEach((item) => {
        item.classList.remove("bottom-menu__icon-active");
      });
      item.classList.add("bottom-menu__icon-active");
    });
  });
}
