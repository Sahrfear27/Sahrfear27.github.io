

type Person = {
    name: string;
    age: number;
    job: string;
    sayHi(this: Person): void;
}
const manager: Person = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdy
};
const intern: Person = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
};

function sayHowdy(this: Person) {
    console.log("Hello, my name is " + this.name + ".I am " + this.age + ". My Job is a software Engineer");
}


// modify the code on the previous slide so that
manager.sayHi(); // Hello, my name is John. I am 27. My job is Software Engineer.'
intern.sayHi(); // Hello, my name is Ben. I am 21. My job is Software Engineer Intern.'



let a = 5;
let b = { a };
console.log(b); // {x : 5}
function su(arr: number[]): number { let tot = 0; for (let num of arr) { tot += num } return tot; }
const fo = { su, a };

console.log(fo.su)
console.log(fo.su([1, 2, 3]));
console.log("Foo is " + fo);


//write a for loop to print out the values of the properties according to the property names in the
// propertyOrder array. You must use the properties array to access the values. You cannot directly
// write console.log(numbers.one)

const numbers : {[key:string]: number}={
    one: 1,
    two: 22,
    three: 333,
    four: 444
}
const propertyOrder = ["one", "four", "three", "two",];

for(let property of propertyOrder){
    console.log(numbers[property])
}


