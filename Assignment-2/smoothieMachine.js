const mixBtn = document.querySelector('button');

class Smoothie {
    yogurt;
    fruits = [];
    nuts = [];
    drizzle;
    size;
    constructor(yogurt, fruits, nuts, drizzle, size) {
        this.yogurt = yogurt;
        this.fruits = fruits;
        this.nuts = nuts;
        this.drizzle = drizzle;
        this.size = size;
    }
    smoothieMaker() {
        const cup = document.querySelector('img#smoothie'); // need to set image src throughout
        //yogurt options: vanilla, strawberry, blueberry, mixed berry, greek
        //fruit options: Strawberries, raspberries, blueberries, blackberries, peaches, banana, kiwi, mango        
        //seed/nut options: chai seeds, hemp seeds, flax seeds, pumpkin seeds, almonds, walnuts, pecans, cashews, granola
        let seedsNuts = [];
        this.nuts.forEach(sn => {
            switch(sn) {
                case "chai":
                    seedsNuts.push("chai seeds");
                    break;
                case "hemp":
                    seedsNuts.push("hemp seeds");
                    break;
                case "flax": 
                    seedsNuts.push('flax seeds');
                    break;
                case 'pumpkin':
                    seedsNuts.push('pumpkin seeds');
                    break;
                case 'almond':
                    seedsNuts.push('almonds');
                    break;
                case 'walnut':
                    seedsNuts.push('walnuts');
                    break;
                case 'pecan':
                    seedsNuts.push('pecans');
                    break;
                case 'cashew':
                    seedsNuts.push('cashews');
                    break;
                case 'granola':
                    seedsNuts.push('granola');
                    break;
            }
        })
        
        //drizzle options: chocolate, honey, maple syurp, cinnamon
        let drz;
        switch(this.drizzle) {
            case "chocolate":
                drz = 'chocolate';
                break;
            case "honey":
                drz = 'honey';
                break;
            case "mapleSyrup":
                drz = 'maple syrup'
                break;
            case "cinnamon":
                drz = 'cinnamon';
                break;
            default:
                drz = 'no';
        }
        //size options: S - XL
        let cupSize;
        let amount;
        switch(this.size) {
            case "S":
                amount = '100';
                cupSize = 'small';
                break;
            case "M":
                amount = '125';
                cupSize = 'medium';
                break;
            case "L":
                amount = '150';
                cupSize = 'large';
                break;
            case "XL":
                amount = '200';
                cupSize = 'extra large';
                break;
            default:
                amount = '125';
                cupSize = 'medium';
        }
        cup.setAttribute('height', amount);
        //generate descriptions for the drink dependent on what is in it
        let desc;
        if (drz == 'no' && this.fruits.length === 0 && seedsNuts.length === 0) {
            desc = `A(n) ${cupSize} ${this.yogurt} smoothie!`;
        }
        else if (drz == 'no' && this.fruits.length === 0) {
            desc = `A(n) ${cupSize} ${this.yogurt} smoothie with ${seedsNuts.join(", ")}!`;
        }
        else if (drz == 'no' && seedsNuts.length === 0) {
            desc = `A(n) ${cupSize} ${this.yogurt} smoothie with ${this.fruits.join(", ")}!`;
        }
        else if (seedsNuts.length === 0 && this.fruits.length === 0) {
            desc = `A(n) ${cupSize} ${this.yogurt} smoothie with ${drz} drizzle to top it off!`;
        }
        else if (this.fruits.length === 0) {
            desc = `A(n) ${cupSize} ${this.yogurt} smoothie with ${seedsNuts.join(", ")} and ${drz} drizzle to top it off!`;
        }
        else if (seedsNuts.length === 0) {
            desc = `A(n) ${cupSize} ${this.yogurt} smoothie with ${this.fruits.join(", ")} and ${drz} drizzle to top it off!`;
        }
        else if (drz == 'no'){
            desc = `A(n) ${cupSize} ${this.yogurt} smoothie with ${this.fruits.join(", ")}, ${seedsNuts.join(", ")}!`;
        } 
        else {
            desc = `A(n) ${cupSize} ${this.yogurt} smoothie with ${this.fruits.join(", ")}, ${seedsNuts.join(", ")} and ${drz} drizzle to top it off!`;
        }
        const descEle = document.querySelector('p#output');
        //set image and description elements
        descEle.textContent = desc;
        document.querySelector('div.customerSmoothie').style.display = 'block';
        //image src set here
    }
}

function smoothieOrder() {
    //dropdown values
    const ygt = document.getElementById("ygtFlv").value;
    const drz = document.getElementById("drz").value;
    const cupSz = document.getElementById("cupSize").value;
    //checkboxes
    const frts = [...document.querySelectorAll('input[name="frtUsed"]:checked')]
        .map(c => c.value);
    const sdNt = [...document.querySelectorAll('input[name="seedsNuts"]:checked')]
        .map(c => c.value);
    //create smoothie object
    const smoothie = new Smoothie(ygt, frts, sdNt, drz, cupSz);
    //to build image and description
    smoothie.smoothieMaker();
}

mixBtn.addEventListener('click', smoothieOrder);