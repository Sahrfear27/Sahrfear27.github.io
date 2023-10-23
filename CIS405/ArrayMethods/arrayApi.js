const prompt = require("prompt-sync")({sigint:true});

// .concat()
let array1 = ['a','b','c','d'];
let array2 = ['e','f','g','h'];
let array3 = array1.concat(array2);
console.log(array3);


// .indexOf()
let beasts = ['ant', 'bison', 'camel', 'duck']
console.log(beasts.indexOf('camel'));


// .slice : start and end reperesent the indices
let animals = ["ants", "dog", "goat", "cat", "sheep"];
console.log(animals.slice(1,3));//dog, goat
console.log(animals.slice(2));
console.log(animals.slice(3));
console.log(animals.slice(1,5));   
console.log(animals.slice(-2));   


// .splice:  changes the contents of an array by removing or replacing existing elements
let month = ["jan", "feb", "march", "appril"];
month.splice(2, 0, 'November');
console.log(month);

month.splice(1, 2, 'November');
console.log(month);