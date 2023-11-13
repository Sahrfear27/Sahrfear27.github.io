export function doubleNums(arr) {
    return arr.map(num => num * 2);
}
export function doubleAges(arr) {
    return arr.map((property) => {
        return {
            name: property.name,
            age: property.age * 2,
        };
    });
}
export function filterEven(arr) {
    return arr.filter((num) => num % 2 === 0);
}
export function filterOver10(arr) {
    return arr.filter((person) => person.age > 10);
}
export function findEvenNum(arr) {
    return arr.find((num) => num % 2 === 0);
}
export function findEvenAge(arr) {
    return arr.find((person) => person.age % 2 === 0);
}
export function includesEvenNum(arr) {
    return arr.includes(77);
}
// export function includesEvenAge(arr){
// }
