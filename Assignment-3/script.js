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

function displayResults(json) {
    //log to console for debugging
    console.log(json);

    //clear old results
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    //build elements for article
    const article = document.createElement('article');
    const heading = document.createElement('h2');
    const img = document.createElement('img');
    const para = document.createElement('p');

    //extract information from json
    const title = json.title;
    const desc = json.explanation;
    const date = json.date;
    const mediaType = json.mediaType;
    const url = json.url;

    //APOD sometimes returns videos so to stop the error
    if (mediaType === "image") {
        img.src = url;
        img.alt = title;
        article.appendChild(img);
    }

    //fill in other information
    heading.textContent = `${title} (${date})`;
    para.textContent = desc;

    //committing to html
    article.appendChild(heading);
    article.appendChild(para);
    section.appendChild(article);
}