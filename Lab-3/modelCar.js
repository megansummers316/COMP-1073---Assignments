/* make: Chevrolet
    model: C10 Fleetside Pickup Truck

    name: user made
    colour: white/orange
    year: 1966
    scale: 1/24
    trim: Lowrider
    packaging: window box
    vehicleType: Pickup Truck
    manufacturer: Motor Max
    openableDoors: true
    freewheeling: true
    price: 20.99 */

const createSection = document.querySelector('div.create');
const showDetailsBtn = document.querySelector('button.showDetails');

class Truck {
    name;
    colour;
    year = 1966;
    scale = '1/24';
    trim; // this means the lowrider or standard style
    packaging = 'window box';
    openableDoors;
    freewheeling;
    price = 20.99;
    constructor(name, colour, trim, openableDoors, freewheeling){
        this.name = name;
        this.colour = colour;
        this.trim = trim;
        this.openableDoors = openableDoors;
        this.freewheeling = freewheeling;
    }
    newTruck() {
        const truck = document.querySelector('img#truckImg');
        let truckImg;
        //this.name used for name throughout as it does not need modified from user input
        //determining chosen colour and trim and setting src accordingly
        if (this.trim === 'lowrider') {
            if (this.colour === 'white/orange') {
                truckImg = 'img/white-orangeLowrider.jpg';
            }
            else if (this.colour === 'green') {
                truckImg = 'img/greenLowrider.png';
            }
            else if (this.colour === 'red') {
                truckImg = 'img/redLowrider.jpg';
            }
            else if (this.colour === 'blue/black') {
                truckImg = 'img/blue-blackLowrider.png';
            }
        } else {
            if (this.colour === 'white/orange') {
                truckImg = 'img/white-orangeStandard.jpg';
            }
            else if (this.colour === 'green') {
                truckImg = 'img/greenStandard.webp';
            }
            else if (this.colour === 'red') {
                truckImg = 'img/redStandard.png';
            }
            else if (this.colour === 'blue/black') {
                truckImg = 'img/blue-blackStandard.png';
            }
        }
        truck.setAttribute('src', truckImg);

        //create and set a description
        let desc;
        if (this.openableDoors === 'false' && this.freewheeling === 'false') {
            desc = `${this.name} is a ${this.colour} ${this.trim} Chevy C10 Fleetside Pickup Truck with a ${this.scale} scale in a ${this.packaging}. Purchase them for \$${this.price}!`;
        }
        else if (this.freewheeling === 'false') {
            desc = `${this.name} is a ${this.colour} ${this.trim} Chevy C10 Fleetside Pickup Truck with openable doors has a ${this.scale} scale in a ${this.packaging}. Purchase them for \$${this.price}!`;
        }
        else if (this.openableDoors === 'false') {
            desc = `${this.name} is a ${this.colour} ${this.trim} 1966 Chevy C10 Fleetside Pickup Truck with freewheeling has a ${this.scale} scale in a ${this.packaging}. Purchase them for \$${this.price}!`;
        }
        else {
            desc = `${this.name} is a ${this.colour} ${this.trim} 1966 Chevy C10 Fleetside Pickup Truck with openable doors and freewheeling as well as a ${this.scale} scale in a ${this.packaging}. Purchase them for \$${this.price}!`;
        }
        const descEle = document.querySelector('p#truckDesc');
        descEle.textContent = desc;
    }
}

function createTruck() {
    //name and dropdown values
    const nm = document.getElementById('tName').value;
    const clr = document.getElementById('colour').value;
    const trm = document.getElementById('trim').value;
    const open = document.getElementById('openableDoors').value;
    const tiresMove = document.getElementById('freewheeling').value;

    //create truck object
    const truck = new Truck(nm, clr, trm, open, tiresMove);
    truck.newTruck();
}

showDetailsBtn.addEventListener('click', createTruck);