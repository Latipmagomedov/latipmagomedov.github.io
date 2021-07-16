const catalogTitles = document.querySelectorAll(".catalog-mobile__item");
const catalogLinks = document.querySelector(".catalog-mobile-links");
const catalogLinksClose = document.querySelector(
  ".catalog-mobile-links__header-arrow"
);
catalogTitles.forEach((item, index) => {
  item.addEventListener("click", () => {
      
    console.log(index);

    catalogLinks.classList.add("catalog-mobile-links_active");
  });
});

catalogLinksClose.addEventListener("click", () => {
  catalogLinks.classList.remove("catalog-mobile-links_active");
});
