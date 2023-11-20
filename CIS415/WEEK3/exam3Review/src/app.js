// // Using the recursion
// function evenRec(num) {
//     //    Case1
//     if (num < 0) {
//         return;
//     }
//     if(num%2 === 0){
//         console.log(num)
//         return evenRec(num -2);
//     }
// }
// evenRec(7);



// let option2 = {
//     title: "My menu",
//     items : ["Item", "item2"]
// }

// const {title, items} = option2;
// console.log( {title, items} );

// function showMenu({title= "Untitle", width = 200, height = 300, items =[] }){
//     console.log(title)
//     console.log(width)
//     console.log(height)
//     console.log(items);
// }
// showMenu(option2)



// My map function
function myMap(arr, callBack){
    // Create a new array for returning the value of each elements
    let result = [];

    // Loop through each element of the array input
    for (let i = 0; i < arr.length; i++) {

        result.push(callBack(arr[i], i, arr));
    }
    return result;
}
let num = [1,2,3,4,5];
let doubles = (num)=> num * 2;

let doubleNum = myMap(num, doubles)
console.log(doubleNum);