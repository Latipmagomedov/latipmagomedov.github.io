document.body.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest("[data-checkbox]")) {
    const elem = target.closest("[data-checkbox]");
    const checkbox = elem.querySelector("input");
    const hiddenElement = document.querySelector(
      `[data-hidden="${elem.getAttribute("data-checkbox")}"]`
    );
    if (checkbox.checked) {
      hiddenElement.classList.add("hidden");
      hiddenElement.querySelectorAll("input").forEach((item) => {
        item.setAttribute("disabled", "disabled");
      });
    } else {
      hiddenElement.classList.remove("hidden");
      hiddenElement.querySelectorAll("input").forEach((item) => {
        item.removeAttribute("disabled");
      });
    }
  }
  if (target.closest("[data-checkbox-2]")) {
    const elem = target.closest("[data-checkbox-2]");
    const checkbox = elem.querySelector("input");
    const hiddenElement = document.querySelector(
      `[data-hidden-2="${elem.getAttribute("data-checkbox-2")}"]`
    );
    if (checkbox.checked) {
      hiddenElement.classList.remove("hidden");
      hiddenElement.querySelectorAll("input").forEach((item) => {
        item.removeAttribute("disabled");
      });
      hiddenElement.querySelectorAll("textarea").forEach((item) => {
        item.removeAttribute("disabled");
      });
      
    } else {
      hiddenElement.classList.add("hidden");
      hiddenElement.querySelectorAll("input").forEach((item) => {
        item.setAttribute("disabled", "disabled");
      });
      hiddenElement.querySelectorAll("textarea").forEach((item) => {
        item.setAttribute("disabled", "disabled");
      });
    }
  }
});
