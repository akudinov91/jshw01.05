const rangeValue = document.querySelector("#range__value");
const slider = document.querySelector("#range");
const inputValue = document.querySelector("#textInput");

rangeValue.innerHTML = slider.value;

slider.oninput = function () {
  rangeValue.innerHTML = this.value;
};

inputValue.oninput = function () {
  const value = this.value;
  if (this.value >= 0 && this.value <= 100) {
    slider.value = value;
    rangeValue.innerHTML = value;
  }
};
