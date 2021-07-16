let rangeSlider = document.querySelector("#range-slider");

let snapValues = [
  document.querySelector("#slider-snap-value-lower"),
  document.querySelector("#slider-snap-value-upper"),
];

noUiSlider.create(rangeSlider, {
  start: [Number(snapValues[0].value), Number(snapValues[1].value)],
  connect: true,
  range: {
    min: Number(snapValues[0].value),
    max: Number(snapValues[1].value),
  },
});

rangeSlider.noUiSlider.on("update", function (values, handle) {
  snapValues[handle].value = Math.round(values[handle]) + " " + "₽";
});
