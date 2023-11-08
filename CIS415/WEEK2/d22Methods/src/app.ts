// Methods in Javascript

let user = {
    name: "John",
    age: 22,
    sayHi: function(){} //a function that is a property of an object is called a method
}

user.sayHi = () :void => {console.log("Hello!")};
user.sayHi();
console.log(user);



// Using the "this" in methods
let user2 = {
    name: "John",
    age: 30,
    sayHi: function(){
       console.log("My name is " + this.name + " and my age is " + this.age);
    }
}
user2.sayHi();


let x = 5;
let y = {x};
console.log(y);  


function sum(arr: number[]): number { let tot = 0; for(let num of arr ) { tot += num } return tot; }
const foo = {sum };
console.log(sum([1,2,3]));