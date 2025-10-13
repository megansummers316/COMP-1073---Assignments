//declare and initialize (step 5)
const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue');
const body = document.querySelector('body');

//declare colours to make them global
let red = 0;
let green = 0;
let blue = 0;

//add event listeners for the sliders (step 6)
redSlider.addEventListener('change', changeRed);
greenSlider.addEventListener('change', changeGreen);
blueSlider.addEventListener('change', changeBlue);
//functions for event listeners (step 7)
function changeRed() {
    //get amount red is set to from slider
    red = Number(redSlider.value);
    //reset background colour
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
function changeGreen() {
    //get green amount from slider
    green = Number(greenSlider.value);
    //reset background colour
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
function changeBlue() {
    //get blue amount from slider
    blue = Number(blueSlider.value);
    //reset background colour
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
