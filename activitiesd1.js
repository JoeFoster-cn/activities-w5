//objects

const person = {
    name: "Joe",
    age: 28,

    sayHi() {
        return (`Hello, my name is ${this.name}`);
    }
}

console.log(person.sayHi());


const pet = {
    name: "Poppy",
    typeOfPet: "Dog",
    age: 8,
    colour: "Brown",
    
    eat() {
        return (`${this.name} is eating`)
    },

    drink() {
        return (`${this.name} is drinking`)
    }
}

console.log(pet.drink());
console.log(pet.eat());


const coffeeShop = {
    branch: "Joe's",
    food: {
        croissant: 2.5,
        donut: 3,
        sandwich: 7
    },
    drinks: {
        latte: 2.5,
        tea: 2,
        water: 1.5
    },
    drinksOrdered() {
        const order = [];
        for(let key in this.drinks) {
            order.push(`\t${key}: ${this.drinks[key]}\n`);
        }
        return `Your drinks order is:\n${order.reduce((obj, accumulator) => obj + accumulator)}`;
    },
    foodOrdered() {
        return this.food;
    }
};
console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());

console.log("Next activity");

//OOP


class Car {
    constructor(reg, rate) {
        this.reg = reg;
        this.hours = 0;
        this.rate = rate;
    }

    get total() {
        return this.hours * this.rate;
    }

    pay() {
        return `${this.reg} owes £${this.total}`;
    }

}

const car1 = new Car("VG6 XNF", 1.5);
const car2 = new Car("GHY 4FB", 3.5);
car1.hours = 5;
car2.hours = 9;
console.log(car1.pay());
console.log(car2.pay());

console.log("Next activity");

class Staff extends Car {
    constructor(name, staffNumber, credits){
        super(name);
        this.staffNumber = staffNumber;
        this.credits = credits;
    }
    get balance(){
        return this.credits - this.total;
    }
    get result(){
        return `Hello Joe, please provide your staff number\n` +
               `Staff Number: ${this.staffNumber}\n` +
               `Thank you, your current credits are ${this.credits} pounds\n` +
               `You owe ${this.total} pounds for car reg ${this.reg}\n` +
               `Your balance following payment is ${this.balance} pounds, have a nice day\n`;
    }
}

const Joe = new Staff(
    "HGY 6HG", //reg
    "ID: 404", //staff number
    10.5, //credits
);

Joe.hours = 5; //hours parked
Joe.rate = 1.50; //rate

console.log(Joe.result);