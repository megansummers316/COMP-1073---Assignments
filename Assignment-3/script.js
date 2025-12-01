//url for NASA APOD API 
const baseURL = 'https://api.nasa.gov/planetary/apod';

//api key received in email from "Get Started" on webpage
const key = 'o5G6k206tjCz8Pz5Voc1X9e2JCTbdAh9ZwMEKcwe';
let url;

//get references for html
const dateInput = document.querySelector('.date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');

//adding event listener for button
searchForm.addEventListener('submit', fetchResults);

//functions
function fetchResults(event) {
    event.preventDefault();
    const selectedDate = dateInput.value;

    //assemble full url
    url = `${baseURL}?api_key=${key}`;
    if (selectedDate) {
        url += `&date=${selectedDate}`;
    }

    //use fetch() and display json info
    fetch(url)
        .then(result => { return result.json() })
        .then(json => { displayResults(json) })
        .catch(error => { console.log("Error: " + error)});
}
