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

const {point:one, shooting:two, power: four, small: three, center:five} = teams;
console.log(`Expect Jim: ${four}`);
