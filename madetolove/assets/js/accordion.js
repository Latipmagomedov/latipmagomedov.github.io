const accordionOpen = document.querySelectorAll(
  ".cards__sidebar-accordion-name"
);

const accordion = document.querySelectorAll(".cards__sidebar-accordion");

accordionOpen.forEach((item, index) => {
  item.addEventListener("click", () => {
    accordion[index].classList.toggle("cards__sidebar-accordion_open");
  });
});
