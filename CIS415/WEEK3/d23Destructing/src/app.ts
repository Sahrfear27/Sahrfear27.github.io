let arr = ["Ilya", "Kantor"];

const [firstName, lastName] = arr; //

console.log(firstName)
console.log(lastName);


const team = ["Bob", "Fred", "Jim"];
const [bob, fred, jim] = team;
console.log(bob);
console.log(fred);
console.log(jim);


// Exercise:
// 1. destructure the team object onto variables with the same names as the properties

const teams = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };

// const {point, shooting, power, small, center} = teams;
// console.log(center);
// console.log(power);

const { point: one, shooting: two, power: four, small: three, center: five } = teams;
console.log(`Expect Jim: ${four}`);


// The destructure works with any iterable
let [a, b, c] = "abc"

// Assign at the left
type User = {
    fName: string,
    lName: string,
}
let users = {} as User;
[users.fName, users.lName] = "Sahrfear Macarthy".split(" ");
console.log(`The fist name created is ${users.fName}`);
console.log(`The last name created is ${users.lName}`);


// Looping through entries
// Object.entries: Return an array of [key, value] pair

const object1 = {
    a: "somestring",
    b: 23
}
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}`);
}

// Swap Variable trick
let guest = "Jane";
let admin = "Peta";

// Swap the values
[guest, admin] = [admin, guest];
console.log(`The guest now is ${guest}`)
console.log(`The admin now is ${admin}`)



// Default values: If the array is shorter than the list variable at the left
let [firstName2 = "Kelvin", secondName2 = "Alves"] = ["Olive"]
console.log(secondName2);


// Object Destructing: Porperty are assign to the corresponding variables

let option1 = {
    title: "Menu",
    width: 100,
    height: 200,
};

// Destructure the property of the objects
let { title, width, height } = option1;
console.log(title);
console.log(width);
console.log(height);

// Assign a property of the object to the destructure variable

let option2 = {
    area: "triangle",
    length2: 25,
    base: 20,
}

let { area: ar, length2: l, base: ba } = option2;
console.log(`The area is ${ar}`);

//Exercise:
const team2 = { point1: "Bob", shooting1: "Fred", power1: "Jim", small1: "Al", center1: "Big Sleep" }
let { point1, shooting1, power1, small1, center1 } = team2;
console.log(power1);

// Nested Destructuring
let option3 = {
    game: {
        score1: 25,
        score2: 20,
    },
    winner: "Alves",
}

let { game: { score1, score2 }, winner } = option3;
console.log(`The second score is ${score2}`);

// Smart Function Parameters: The function below is a bad practice 
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    // ...
}

// Let pass the object into function
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

