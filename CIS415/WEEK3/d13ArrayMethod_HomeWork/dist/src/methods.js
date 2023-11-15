/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    return arr.filter((ele) => ((ele > a || ele === a) && (ele < b || ele === b)));
}
/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr, a, b) {
    let filteredArray = arr.filter((ele) => (ele >= a && ele <= b));
    //  Clear the original Array and add the filter value
    arr.length = 0;
    arr.push(...filteredArray); //The three dot means gather the remaining parameter from filteredArray
    // Alternative method
    // Loop through the array
    // for(let i = 0; i < arr.length; i++){
    //     let elements = arr[i];
    //     if(!(elements >= a || elements <= b)){
    //         // At that position, remove that single elements
    //         arr.splice(i,1);
    //         i--;
    //     }
    // }
}
export const calculator = {
    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    },
    calculate: function (str) {
        // Use the destructrue of the parameter
        const [num1, operator, num2] = str.split(' ');
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        // Check for invalid input
        if (isNaN(a) || isNaN(b) || !(calculator.methods[operator])) {
            throw new Error("Invalid Input or Unsuported format");
        }
        const operationFun = this.methods[operator];
        return operationFun(a, b);
    },
    addMethod: function (name, calFunction) {
        this.methods[name] = calFunction;
    }
};
// export function unique(arr: string[]): string[] {
//     return [];
// }
// export type User = {
//     id: string;
//     name: string;
//     age: number;
// }
// export function groupById(users: User[]): { [key: string]: User } {
//     // declare usersById to be an object with string keys and User values
//     const usersById: { [key: string]: User } = {};
//     // FURTHER IMPLEMENTATION REQUIRED HERE
//     return usersById;
// }
// type SurnameUser = {
//     name: string;
//     surname: string;
//     id: number;
// }
// type FullNameUser = {
//     fullName: string;
//     id: number;
// }
// export function map2fullName(users: SurnameUser[]): FullNameUser[] {
//     let result: { fullName: string, id: number }[] = [];
//     // FURTHER IMPLEMENTATION REQUIRED HERE
//     return result;
// }
// export function sortByAge(users: User[]): void {
//     // FURTHER IMPLEMENTATION REQUIRED HERE
// }
// export function findOldest(users: User[]): User {
//     let oldest = users[0];
//     // FURTHER IMPLEMENTATION REQUIRED HERE
//     return oldest;
// }
// /* getAverageAge using reduce */
// export function getAverageAge(users: User[]): number {
//     return 0;
// }
