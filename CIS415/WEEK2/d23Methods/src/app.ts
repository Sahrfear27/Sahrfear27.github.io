// Methods in Javascript

let user = {
    name: "John",
    age: 22,
    sayHi: function () { } //a function that is a property of an object is called a method
}

user.sayHi = (): void => { console.log("Hello!") };
user.sayHi();
console.log(user);



// Using the "this" in methods
let user2 = {
    name: "John",
    age: 30,
    sayHi: function () {
        console.log("My name is " + this.name + " and my age is " + this.age);
    }
}
user2.sayHi();


let x = 5;
let y = { x };
console.log(y);


function sum(arr: number[]): number { let tot = 0; for (let num of arr) { tot += num } return tot; }
const foo = { sum };
console.log(sum([1, 2, 3]));




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
    console.log("Hello, my name is "+ this.name + ".I am " + this.age + ". My Job is a software Engineer");
}


// modify the code on the previous slide so that
manager.sayHi(); // Hello, my name is John. I am 27. My job is Software Engineer.'
intern.sayHi(); // Hello, my name is Ben. I am 21. My job is Software Engineer Intern.'




let a = 5;
let b = {a};
console.log(b); // {x : 5}
function su(arr: number[]): number { let tot = 0; for(let num of arr){tot += num} return tot; }
const fo = {su, a };

console.log(foo.sum )
console.log(foo.sum([1,2,3]));
console.log("Foo is " + fo);
