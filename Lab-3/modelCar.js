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
    constructor(name, colour, scale, trim, packaging, openableDoors, freewheeling, price, stock){
        this.name = name;
        this.colour = colour;
        this.trim = trim;
        this.openableDoors = openableDoors;
        this.freewheeling = freewheeling;
    }
    newTruck() {
        const truck = document.createElement('img');
        let truckImg;
        //this.name used for name throughout as it does not need modified from user input
        //determining chosen colour and trim and setting src accordingly
        if (this.trim === 'lowrider') {
            if (this.colour === 'white/orange') {
                truckImg = 'img/white-orangeLowrider';
            }
            else if (this.colour === 'green') {
                truckImg = 'img/greenLowrider';
            }
            else if (this.colour === 'red') {
                truckImg = 'img/greenLowrider';
            }
            else if (this.colour === 'blue/black') {
                truckImg = 'img/blue-blackLowrider';
            }
        } else {
            if (this.colour === 'white/orange') {
                truckImg = 'img/white-orangeStandard';
            }
            else if (this.colour === 'green') {
                truckImg = 'img/greenStandard';
            }
            else if (this.colour === 'red') {
                truckImg = 'img/greenStandard';
            }
            else if (this.colour === 'blue/black') {
                truckImg = 'img/blue-blackStandard';
            }
        }
        truck.setAttribute('src', truckImg);

        //create and set a description
        let desc;
        if (this.openableDoors === false && this.freewheeling === false) {
            desc = `A ${this.colour} ${this.trim} Chevy C10 Fleetside Pickup Truck with a ${this.scale} scale in a ${this.packaging} are sold at \$${this.price}!`;
        }
        else if (this.freewheeling === false) {
            desc = `A ${this.colour} ${this.trim} Chevy C10 Fleetside Pickup Truck with openable doors has a ${this.scale} scale in a ${this.packaging} are sold at \$${this.price}!`;
        }
        else if (this.openableDoors === false) {
            desc = `A ${this.colour} ${this.trim} 1966 Chevy C10 Fleetside Pickup Truck with freewheeling has a ${this.scale} scale in a ${this.packaging} are sold at \$${this.price}!`;
        }
        const descEle = document.createElement('p');
        descEle.textContent = desc;

        createSection.appendChild(truck);
        createSection.appendChild(descEle);
    }
}

function createTruck() {
    //dropdown values
    const clr = document.getElementById('colour').value;
    const trm = document.getElementById('trim').value;

    //create truck object
    const truck = new Truck
}

showDetailsBtn.addEventListener('click', createTruck);