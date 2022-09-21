/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let button = document.getElementById("btn");
let inputEl = document.getElementById("text");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

button.addEventListener("click", function () {
  let baseVal = inputEl.value;

  lengthEl.textContent = `${baseVal} meters = ${(baseVal * meterToFeet).toFixed(
    2
  )} feet  |  ${baseVal} feet = ${(baseVal / meterToFeet).toFixed(2)} meters`;

  volumeEl.textContent = `${baseVal} liters = ${(
    baseVal * literToGallon
  ).toFixed(2)} gallons  |  ${baseVal} gallons = ${(
    baseVal / literToGallon
  ).toFixed(2)} liters`;

  massEl.textContent = `${baseVal} kilograms = ${(
    baseVal * kiloToPound
  ).toFixed(2)} pounds  |  ${baseVal} pounds = ${(
    baseVal / kiloToPound
  ).toFixed(2)} kilograms`;

  inputEl.value = "";
});
