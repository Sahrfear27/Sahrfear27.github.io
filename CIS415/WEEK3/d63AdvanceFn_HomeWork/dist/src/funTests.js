/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myMap(someArray, callBack) {
    // Create a new array for returning a new value of each elements
    let newElement = [];
    // Loop through some array for each input element
    for (let i = 0; i < someArray.length; i++) {
        newElement.push(...callBack(someArray[i], i, someArray));
    }
    return newElement;
}
export function myFilter(arr, filterFunc) {
    let filterElement = [];
    // Loop through the array for each element
    for (let i = 0; i < arr.length; i++) {
        // Call the filterFunc and add the element to the result if it return true
        if (filterFunc(arr[i], i, arr)) {
            filterElement.push(arr[i]);
        }
    }
    return filterElement;
}
export function myReduce(arr, reduceFunc, initialValue) {
    let accumulator = initialValue;
    // Loop through the array and apply reduce function
    for (let i = 0; i < arr.length; i++) {
        accumulator = reduceFunc(accumulator, arr[i]);
    }
    return accumulator;
}
/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
// export function myFilter(arr, func) {
//     //IMPLEMENTATION NEEDED
// }
// /**
//  * 
//  * @param {*} arr 
//  * @param {*} func 
//  * @param {*} initialValue 
//  * @returns 
//  */
// export function myReduce(arr, func, initialValue) {
//     //IMPLEMENTATION NEEDED
//     return;
// }
