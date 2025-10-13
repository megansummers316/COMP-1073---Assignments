//declare and initialize (step 5)
const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue');
const body = document.querySelector('body');

//declare colours to make them global
let red = 0, green = 0, blue = 0;

//add event listeners for the sliders (step 6)
redSlider.addEventListener('change', changeRed);
greenSlider.addEventListener('change', changeGreen);
blueSlider.addEventListener('change', changeBlue);
//functions for event listeners (step 7)
function changeRed() {
    red = Number(redSlider.value);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
function changeGreen() {
    green = Number(greenSlider.value);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
function changeBlue() {
    blue = Number(blueSlider.value);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}