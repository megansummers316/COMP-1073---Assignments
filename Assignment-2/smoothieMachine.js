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
        const cup = document.createElement('img'); // need to set image src throughout
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
        let fruitUsed = {};
        switch(this.fruits) {
            case "Strawberries":
                fruitUsed.add("strawberries");
            case "Raspberries":
                fruitUsed.add('raspberries');
            case "Blueberries": 
                fruitUsed.add('bluberries');
            case 'Blackberries':
                fruitUsed.add('blackberries');
            case 'Peaches':
                fruitUsed.add('peaches');
            case 'Banana':
                fruitUsed.add('banana');
            case 'Kiwi':
                fruitUsed.add('kiwi');
            case 'Mango':
                fruitUsed.add('mango');
        }
        //seed/nut options: chai seeds, hemp seeds, flax seeds, pumpkin seeds, almonds, walnuts, pecans, cashews, granola
        let seedsNuts = {};
        switch(this.nuts) {
            case "Chai Seeds":
                seedsNuts.add("chai seeds");
            case "Hemp Seeds":
                seedsNuts.add("hemp seeds");
            case "Flax Seeds": 
                seedsNuts.add('flax seeds');
            case 'Pumpkin Seeds':
                seedsNuts.add('pumpkin seeds');
            case 'Almonds':
                seedsNuts.add('almonds');
            case 'Walnuts':
                seedsNuts.add('walnuts');
            case 'Pecans':
                seedsNuts.add('pecans');
            case 'Cashews':
                seedsNuts.add('cashews');
            case 'Granola':
                seedsNuts.add('granola');
        }
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
    }
}