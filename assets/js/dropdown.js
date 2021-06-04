// Dropdown
let clickIndex = 0;
document.body.addEventListener("click", (e) => {
  if (e.target.closest("[data-open-dropdown]")) {
    clickIndex++;
    const target = e.target;
    const attribute = target
      .closest("[data-open-dropdown]")
      .getAttribute("data-open-dropdown");

    const allDropdownImg = document.querySelectorAll(`[data-open-dropdown]`);
    allDropdownImg.forEach((item) => item.classList.remove("drop-img-active"));

    const arrow = document.querySelector(`[data-open-dropdown="${attribute}"]`);
    arrow.classList.add("drop-img-active");

    const allDropdown = document.querySelectorAll(`[data-dropdown]`);
    allDropdown.forEach((item) =>
      item.classList.remove("dropdown-wrapper_open")
    );

    const dropdown = document.querySelector(`[data-dropdown="${attribute}"]`);
    dropdown.classList.add("dropdown-wrapper_open");

    if (clickIndex >= 2) {
      clickIndex = 0;
      arrow.classList.remove("drop-img-active");
      dropdown.classList.remove("dropdown-wrapper_open");
    }
  }
});
