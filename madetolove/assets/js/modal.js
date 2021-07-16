document.querySelectorAll("[data-open-modal]").forEach((item, index) => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth < 850) {
      document.querySelectorAll("[data-modal]").forEach((item) => {
        item.classList.remove("modal-open");
      });
    }

    const element = e.target
      .closest("[data-open-modal]")
      .getAttribute("data-open-modal");
    const modal = document.querySelector(`[data-modal="${element}"]`);

    document.body.classList.toggle("no-scroll");
    modal.classList.toggle("modal-open");
    const modalFilter = document.querySelector(`.modal__filter`);
    modalFilter.classList.toggle("modal__filter-open");
  });
});

document.querySelectorAll("[data-close-modal]").forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const element = e.target
      .closest("[data-close-modal]")
      .getAttribute("data-close-modal");
    const modal = document.querySelector(`[data-modal="${element}"]`);
    document.body.classList.toggle("no-scroll");
    modal.classList.toggle("modal-open");
    const modalFilter = document.querySelector(`.modal__filter`);
    modalFilter.classList.toggle("modal__filter-open");
  });
});

document.querySelectorAll(`.modal__filter`).forEach((item, index) => {
  item.addEventListener("click", () => {
    const modal = document.querySelector(`[data-modal]`);
    document.body.classList.toggle("no-scroll");
    modal.classList.toggle("modal-open");
    const modalFilter = document.querySelector(`.modal__filter`);
    modalFilter.classList.toggle("modal__filter-open");
  });
});

if (document.querySelector(".bottom-menu__icon-home")) {
  document
    .querySelector(".bottom-menu__icon-home")
    .addEventListener("click", () => {
      document.querySelectorAll("[data-modal]").forEach((item) => {
        item.classList.remove("modal-open");
      });
      document.body.classList.remove("no-scroll");
    });
}

if (document.querySelector(".bottom-menu__icon-fav")) {
  document
    .querySelector(".bottom-menu__icon-fav")
    .addEventListener("click", () => {
      document.querySelectorAll("[data-modal]").forEach((item) => {
        item.classList.remove("modal-open");
      });
      document.body.classList.remove("no-scroll");
    });
}
