const mediaQuery = () => {
  if (window.matchMedia("(min-width: 850px)").matches) {
    let height = document.querySelector(".cards__cards").clientHeight;
    document.querySelector(".cards__sidebar").style.minHeight = height + "px";
  } else {
    document.querySelector(".cards__sidebar").style.minHeight = "auto";
    document.querySelector(".cards__sidebar").style.maxHeight = "100vh";
  }
};

window.addEventListener("resize", mediaQuery);
mediaQuery();
