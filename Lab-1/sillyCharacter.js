/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let charName = 'Kevin Adamson';
let charAge = Math.floor(Math.random() * 61) + 20;
let superhero = true;
let specialPowers = 'fly';
let favFood = 'subs';
let pDesc = document.querySelector('p#characterDescription');


// Function to generate a random character description
function charDesc() {
    if (superhero == true) {
        pDesc.textContent = `Introducing the superhero ${charName} who is ${charAge}. They have the ability to ${specialPowers} and their favourite food is ${favFood}!`;
    }
    else {
        pDesc.textContent = `Introducing the villian ${charName} who is ${charAge}. Their favourite food is ${favFood} and have the abilities to ${specialPowers}!`;
    }
}

// Functions to update character's age
function increaseAge() {
    ++charAge;
    updateDescAge();
}
function decreaseAge() {
    --charAge;
    updateDescAge();
}

//function to update character's name
function updateName() {
    charName = document.querySelector('input#newName').value;
    updateDescName();
}

//function to update favourite food
function updateFood() {
    favFood = document.querySelector('input#newFood').value;
    updateDescFood();
}

//function to update ability
function updateAbility() {
    specialPowers = document.querySelector('input#newAbility').value;
    updateDescAbility();
}

//functions to change whether they are a superhero or not
function yesSuperhero() {
    superhero = true;
    updateDescSuper();
}
function noSuperhero() {
    superhero = false;
    updateDescSuper();
}

// Function to update the character's description after changing name or age
function updateDescName() {
    if (superhero == true) {
        pDesc.textContent = `Introducing the superhero ${charName} (with a new name) who is ${charAge} with the ability to ${specialPowers} and a favourite food of ${favFood}!`;
    }
    else {
        pDesc.textContent = `Introducing the villian ${charName} (with a new name) who is ${charAge}. Their favourite food is ${favFood} and they have the ability to ${specialPowers}!`;
    }
}
function updateDescAge() {
    if (superhero == true) {
        pDesc.textContent = `Introducing the superhero ${charName}'s new age is ${charAge}. They have the ability to ${specialPowers} and their favourite food is ${favFood}!`;
    }
    else {
        pDesc.textContent = `Introducing the villian ${charName}'s new age is ${charAge}. Their favourite food is ${favFood} and have the ability to ${specialPowers}!`;
    }
}
function updateDescFood() {
    if (superhero == true) {
        pDesc.textContent = `Introducing the superhero ${charName} is ${charAge}. They have the ability to ${specialPowers} and their new favourite food is ${favFood}!`;
    }
    else {
        pDesc.textContent = `Introducing the villian ${charName} is ${charAge}. Their new favourite food is ${favFood} and have the ability to ${specialPowers}!`;
    }
}
function updateDescAbility() {
    if (superhero == true) {
        pDesc.textContent = `Introducing the superhero ${charName} is ${charAge}. They have the new ability to ${specialPowers} and their favourite food is ${favFood}!`;
    }
    else {
        pDesc.textContent = `Introducing the villian ${charName} is ${charAge}. Their favourite food is ${favFood} and have the new ability to ${specialPowers}!`;
    }
}
function updateDescSuper() {
    if (superhero == true) {
        pDesc.textContent = `Introducing the new superhero: ${charName} who is ${charAge}. They have the ability to ${specialPowers} and their favourite food is ${favFood}!`;
    }
    else {
        pDesc.textContent = `Introducing the new villian ${charName} who is ${charAge}. Their favourite food is ${favFood} and have the ability to ${specialPowers}!`;
    }
}

// Add event listeners for buttons using querySelector
let generateButton = document.querySelector('button#generateButton');
let incAge = document.querySelector('button#increaseAgeButton');
let decAge = document.querySelector('button#decreaseAgeButton');
let updName = document.querySelector('button#newName');
let updFood = document.querySelector('button#newFood');
let updAbility = document.querySelector('button#newAbility');
let yesSuperButton = document.querySelector('button#yesSuper');
let noSuperButton = document.querySelector('button#noSuper');

generateButton.addEventListener('click', charDesc);
incAge.addEventListener('click', increaseAge);
decAge.addEventListener('click', decreaseAge);
updName.addEventListener('click', updateName);
updFood.addEventListener('click', updateFood);
updAbility.addEventListener('click', updateAbility);
yesSuperButton.addEventListener('click', yesSuperhero);
noSuperButton.addEventListener('click', noSuperhero);