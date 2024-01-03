class Person {
    name = "Alves Macarthy";
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const n = new Person()

class SuperPerson extends Person {
    power = "Fly";
    greet() {
        console.log(`Hello ${this.name} your super power is ${this.power}`);
    }
}
const newPerson = new SuperPerson();
newPerson.name = "Alvin"
newPerson.greet();

class SuperPerson3 extends Person {
    constructor(private power: string) {
        super()
    }//Call the constructor method and get access to the parent and the other method
    greet() {
        console.log(`Hello ${this.name} your super power is ${this.power}`)
    }
}
const sahr = new SuperPerson3("Back");
sahr.greet();

const per = {
    name: "Alven",
    greet() {
        console.log(`Hello ${this.name}`)
    }
}
console.log(per);
per.greet()

let p2 = per.greet()
p2


// Bind: Clone a function and parmanently replace this with the provided parameter

const person = {
    name: "Kai",
    printNow() {
        console.log(`Hello ${this.name}`)
    }
}

const person2 = {
    name: "Kao",
    printNow() {
        console.log(`Hello ${this.name}`)
    }
}

const prints = person.printNow.bind(person)
prints()

per.greet.apply(person2)