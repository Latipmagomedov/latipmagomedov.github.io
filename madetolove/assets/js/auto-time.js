const dateInp = document.querySelector(".added-date");

const date = new Date();
let fullDate = `${date.getFullYear()}-${
  date.getMonth() + 1 < 10
    ? "0" + Number(date.getMonth() + 1)
    : date.getMonth() + 1
}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;

dateInp.setAttribute("min", fullDate);
// dateInp.value = fullDate;