//declare and initialize each column button
let personButton = document.querySelector('button#personButton');
let verbButton = document.querySelector('button#verbButton');
let adjButton = document.querySelector('button#adjButton');
let thingButton = document.querySelector('button#thingButton');
let placeButton = document.querySelector('button#placeButton');
//and surprise and playback button 
let surprise = document.querySelector('button#surprise');
let playback = document.querySelector('button#playback');

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

}
function verb() {

}
function adjective() {

}
function thing() {

}
function place() {

}
function surpriseSentence() {

}
function playSentence() {
    
}