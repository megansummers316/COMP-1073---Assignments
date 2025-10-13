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
redSlider.addEventListener('change', changeColour);
greenSlider.addEventListener('change', changeColour);
blueSlider.addEventListener('change', changeColour);
//function for event listeners (step 7)
function changeColour() {
    //get all colour amounts from sliders
    red = Number(redSlider.value);
    green = Number(greenSlider.value);
    blue = Number(blueSlider.value);
    //reset background colour
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}