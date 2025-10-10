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
//declare and initialize variables for each column's selected value
let person1 = document.querySelector('p#personSelected');
let verb2 = document.querySelector('p#verbSelected');
let adjective3 = document.querySelector('p#adjSelected');
let thing4 = document.querySelector('p#thingSelected');
let place5 = document.querySelector('p#placeSelected');

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
    //get all elements in div class person
    const persons = document.querySelectorAll('div.person p:not(#personSelected)');
    //find current index of selected person
    let currentIndex = Array.from(persons).findIndex(p => p.textContent === person1.textContent);
    //calculate next index (wrapping to 0 if at end)
    let nextIndex = (currentIndex + 1) % persons.length;
    //update person1 text
    person1.textContent = persons[nextIndex].textContent;
}
function verb() {
    //get all verb elements
    const verbs = document.querySelectorAll('div.verb p:not(#verbSelected)');
    //find current index of selected verb
    let currentIndex = Array.from(verbs).findIndex(p => p.textContent === verb2.textContent);
    //calculate next index
    let nextIndex = (currentIndex + 1) % verbs.length;
    //update verb2 text
    verb2.textContent = verbs[nextIndex].textContent;
}
function adjective() {
    //get all adj. elements
    const adjs = document.querySelectorAll('div.adjective p:not(#adjSelected)');
    //find current index
    let currentIndex = Array.from(adjs).findIndex(p => p.textContent === adjective3.textContent);
    //calculate next index
    let nextIndex = (currentIndex + 1) % adjs.length;
    //update adjective3 text
    adjective3.textContent = adjs[nextIndex].textContent;
}
function thing() {
    //get all thing elements
    const things = document.querySelectorAll('div.thing p:not(#thingSelected)');
    //find current index
    let currentIndex = Array.from(things).findIndex(p => p.textContent === thing4.textContent);
    //calculate next index
    let nextIndex = (currentIndex + 1) % things.length;
    //update adjective3 text
    thing4.textContent = things[nextIndex].textContent;
}
function place() {
    //get all adj. elements
    const places = document.querySelectorAll('div.place p:not(#placeSelected)');
    //find current index
    let currentIndex = Array.from(places).findIndex(p => p.textContent === place5.textContent);
    //calculate next index
    let nextIndex = (currentIndex + 1) % places.length;
    //update adjective3 text
    place5.textContent = places[nextIndex].textContent;
}
function surpriseSentence() {

}
function playSentence() {
    sentenceElement.textContent = person1.textContent + " " + verb2.textContent + " " + adjective3.textContent + " " + thing4.textContent + " " + place5.textContent;
}