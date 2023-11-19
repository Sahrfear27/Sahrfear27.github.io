// // import { listeners } from "process";
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
console.log(list.value);
// //Destructure the list
//  let { value: value1, next: { value: value2, next: { value: value3, next: { value: value4 } } } } = list;
//  let x = { value: value1, next: { value: value2, next: { value: value3, next: { value: value4 } } } }
// //  Get the keys of each values
// // for(let key of ;){
// // }
let word = 1 + "" + 2 + 3;
console.log(word);
export {};
