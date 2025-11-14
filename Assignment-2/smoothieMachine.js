const mixBtn = document.querySelector('button');

class Smoothie {
    yogurt;
    fruits = {};
    nuts = {};
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
        let ygtFlv;
        switch(this.yogurt) {
            case "Vanilla":
                ygtFlv = 'vanilla';
                break;
            case "Strawberry":
                ygtFlv = 'strawberry';
                break;
            case "Blueberry":
                ygtFlv = 'blueberry';
                break;
            case "Mixed Berry":
                ygtFlv = 'mixed berry';
                break;
            case "Greek":
                ygtFlv = 'greek';
                break;
            default:
                ygtFlv = 'vanilla';
        }
        //fruit options: Strawberries, raspberries, blueberries, blackberries, peaches, banana, kiwi, mango
        let fruitUsed = [];
        this.fruits.forEach(fruit => {
            switch(fruit) {
                case "Strawberries":
                    fruitUsed.push("strawberries");
                    break;
                case "Raspberries":
                    fruitUsed.push('raspberries');
                    break;
                case "Blueberries": 
                    fruitUsed.push('bluberries');
                    break;
                case 'Blackberries':
                    fruitUsed.push('blackberries');
                    break;
                case 'Peaches':
                    fruitUsed.push('peaches');
                    break;
                case 'Banana':
                    fruitUsed.push('banana');
                    break;
                case 'Kiwi':
                    fruitUsed.push('kiwi');
                    break;
                case 'Mango':
                    fruitUsed.push('mango');
                    break;
            }
        })
        
        //seed/nut options: chai seeds, hemp seeds, flax seeds, pumpkin seeds, almonds, walnuts, pecans, cashews, granola
        let seedsNuts = [];
        this.nuts.forEach(sn => {
            switch(sn) {
                case "Chai Seeds":
                    seedsNuts.push("chai seeds");
                    break;
                case "Hemp Seeds":
                    seedsNuts.push("hemp seeds");
                    break;
                case "Flax Seeds": 
                    seedsNuts.push('flax seeds');
                    break;
                case 'Pumpkin Seeds':
                    seedsNuts.push('pumpkin seeds');
                    break;
                case 'Almonds':
                    seedsNuts.push('almonds');
                    break;
                case 'Walnuts':
                    seedsNuts.push('walnuts');
                    break;
                case 'Pecans':
                    seedsNuts.push('pecans');
                    break;
                case 'Cashews':
                    seedsNuts.push('cashews');
                    break;
                case 'Granola':
                    seedsNuts.push('granola');
                    break;
            }
        })
        
        //drizzle options: chocolate, honey, maple syurp, cinnamon
        let drz;
        switch(this.drizzle) {
            case "Chocolate":
                drz = 'chocolate';
                break;
            case "Honey":
                drz = 'honey';
                break;
            case "Maple Syrup":
                drz = 'maple syrup'
                break;
            case "Cinnamon":
                drz = 'cinnamon';
                break;
            default:
                drz = 'no';
        }
        //size options: S - XL
        let cupSize;
        switch(this.size) {
            case "S":
                cupSize = '100';
                break;
            case "M":
                cupSize = '125';
                break;
            case "L":
                cupSize = '150';
                break;
            case "XL":
                cupSize = '200';
                break;
            default:
                cupSize = '125';
        }
        cup.setAttribute('height', cupSize);
        //generate a description for the drink
        let desc = `A ${this.size} ${ygtFlv} smoothie with ${fruitUsed}, ${seedsNuts} and ${drz} drizzle to top it off!`;
        const descEle = document.querySelector('p#output');
        //set image and description elements
        descEle.textContent = desc;
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