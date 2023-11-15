// Sort(fn): Default sort order is asending and convert all arguements to string

// 1) change comparator function to sort in descending order, then
// 2) change it to sort in lexicographic descending order


function sortable(a: number, b: number): number { //need to modify this function
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    return 0;
}
let arr = [1, 2, 15];
console.log(arr.sort());

console.log(arr.sort(sortable)); //Pass in the compare function to compare the values

// The reverse comparism
function reverseab(a: number, b: number): number { //need to modify this function
    const a1 = a.toString();
    const b1 = b.toString();
    if (a1 > b1) return -1;
    if (a1 == b1) return 0;
    if (a1 < b1) return 1;
    return 0;
}
// Check if this works
function compareDesend(a: number, b: number): number { //need to modify this function
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
    return 0;
}



// Exercise: Sort all the names in asending order : It might be both filter and sort
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

function mySorted(a: string, b: string) { //need to modify this function
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    return 0;
}
let sortedUser = users.sort((ids, names)=> mySorted(ids.name, names.name));
console.log(sortedUser);


// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

// Reduce : Calculate a single value based on the array.
// How to get a sum of an array in one line:
let arr1 = [1, 2, 3, 4, 5];


let result = arr.reduce((sum, current): number => { return sum + current; }, 0);
console.log(result);


// Exercise:
// ➢ reduce the array to the product of the numbers (“expect 120”)
// ➢ reduce the array to the max of the numbers (“expect 5”)
let arr3 = [1, 2, 3, 4, 5];
let result1 = arr3.reduce((product, currentElement): number => { return product * currentElement; }, 1);
console.log(result1);

let result2 = arr3.reduce((max, currentValue): number => (currentValue > max) ? currentValue : max);
console.log(result2);