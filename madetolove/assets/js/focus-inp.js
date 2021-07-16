(function () {
  const focusInp = document.querySelectorAll(".click-focus");
  const focusInpDate = document.querySelector(".click-focus[type='date']");
  const timeSelect = document.querySelector(".time-select");
  const customSelect = document.querySelector(".custom-select");
  const selText = document.querySelector(".order__left-inp-title-sel");

  focusInp.forEach((item, index) => {
    item.addEventListener("focus", () => {
      const focusTitle = item
        .closest(".order__left-inp")
        .querySelector(".order__left-inp-title");
      focusTitle.classList.add("order__left-inp-title-focus");
    });
    item.addEventListener("blur", () => {
      const focusTitle = item
        .closest(".order__left-inp")
        .querySelector(".order__left-inp-title");
      focusTitle.classList.remove("order__left-inp-title-focus");

      if (item.value.length) {
        focusTitle.classList.add("order__left-inp-title-focus");
      }
    });

    if (item.value.length) {
      const focusTitle = item
        .closest(".order__left-inp")
        .querySelector(".order__left-inp-title");
      focusTitle.classList.add("order__left-inp-title-focus");
    }
  });

  focusInpDate.addEventListener("focus", () => {
    focusInpDate.classList.add("date-color");
  });
  focusInpDate.addEventListener("blur", () => {
    focusInpDate.classList.remove("date-color");
    if (focusInpDate.value.length) {
      focusInpDate.classList.add("date-color");
    }
  });

  if (focusInpDate.value.length) {
    focusInpDate.classList.add("date-color");
  }

  customSelect.addEventListener("click", () => {
    selText.classList.add("order__left-inp-title-focus");
  });
})();
