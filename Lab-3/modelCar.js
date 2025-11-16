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

class Truck {
    name;
    colour;
    year;
    scale;
    trim; // this means the lowrider or standard style
    packaging;
    vehicleType;
    manufacturer;
    openableDoors;
    freewheeling;
    price;
    stock;
    constructor(name, colour, year, scale, trim, packaging, vehicleType, manufacturer, openableDoors, freewheeling, price, stock){
        this.name = name;
        this.colour = colour;
        this.year = year;
        this.scale = scale;
        this.trim = trim;
        this.packaging = packaging;
        this.vehicleType = vehicleType;
        this.manufacturer = manufacturer;
        this.openableDoors = openableDoors;
        this.freewheeling = freewheeling;
        this.price = price;
        this.stock = stock;
    }
}