const submitBtn = document.querySelector(".order__right-btn");
const requiredInp = document.querySelectorAll(".required-inp");
const timeSelect = document.querySelector(".time-select");
const customSelect = document.querySelector(".custom-select");

submitBtn.addEventListener("click", (e) => {
  requiredInp.forEach((item, index) => {
    if (!item.value.length) {
      e.preventDefault();
      item.closest(".order__left-inp").classList.add("error-validate");
    } else {
      item.closest(".order__left-inp").classList.remove("error-validate");
    }
  });

  if (timeSelect.value == "dis") {
    e.preventDefault();
    timeSelect.closest(".order__left-inp").classList.add("error-validate");
  } else {
    timeSelect.closest(".order__left-inp").classList.remove("error-validate");
  }
});
