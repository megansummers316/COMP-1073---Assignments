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


const showDetailsBtn = document.querySelector('button.showDetails');

class Truck {
    name;
    colour;
    year;
    scale;
    trim; // this means the lowrider or standard style
    packaging;
    openableDoors;
    freewheeling;
    price;
    stock;
    constructor(name, colour, year, scale, trim, packaging, openableDoors, freewheeling, price, stock){
        this.name = name;
        this.colour = colour;
        this.year = year;
        this.scale = scale;
        this.trim = trim;
        this.packaging = packaging;
        this.openableDoors = openableDoors;
        this.freewheeling = freewheeling;
        this.price = price;
        this.stock = stock;
    }
    newTruck() {
        const img = document.createElement('img');
        let truckImg;
        //this.name used for name throughout as it does not need modified from user input
        
    }
}