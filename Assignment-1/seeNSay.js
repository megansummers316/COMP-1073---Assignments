//declare and initialize each column button
let personButton = document.querySelector('button#personButton');
let verbButton = document.querySelector('button#verbButton');
let adjButton = document.querySelector('button#adjButton');
let thingButton = document.querySelector('button#thingButton');
let placeButton = document.querySelector('button#placeButton');
//and surprise and playback button 
let surprise = document.querySelector('button#surprise');
let playback = document.querySelector('button#playback');
//and initializer for sentence element
let sentenceElement = document.querySelector('p#sentence');
//declare variables for each column's selected value
let person1, verb2, adjective3, thing4, place5;

//add event listeners for each button
personButton.addEventListener('click', person);
verbButton.addEventListener('click', verb);
adjButton.addEventListener('click', adjective);
thingButton.addEventListener('click', thing);
placeButton.addEventListener('click', place);
surprise.addEventListener('click', surpriseSentence);
playback.addEventListener('click', playSentence)

//functions for declaring which option user chooses
function person() {
    //7 options
}
function verb() {
    //6 options
}
function adjective() {
    //6 options
}
function thing() {
    //7 options
}
function place() {
    //6 options
}
function surpriseSentence() {

}
function playSentence() {
    sentenceElement.textContent = person1 + " " + verb2 + " " + adjective3 + " " + thing4 + " " + place5;
}