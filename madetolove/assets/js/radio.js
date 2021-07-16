const label = document.querySelectorAll(".order__left-radio");

label.forEach((item) => {
  item.addEventListener("click", () => {
    const radioInp = document.querySelectorAll(".order__left-radio input");

    radioInp.forEach((item) => {
      if (item.checked) {
        item.closest(".order__left-radio").classList.add("checked-radio");
      } else {
        item.closest(".order__left-radio").classList.remove("checked-radio");
      }
    });
  });
});
