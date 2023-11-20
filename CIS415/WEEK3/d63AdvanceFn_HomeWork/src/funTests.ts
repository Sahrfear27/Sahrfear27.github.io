
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */

export function myMap<T, U>(someArray: T[] | string[], callBack: (items: T, index: number, arr: T) => U[]) {
    // Create a new array for returning a new value of each elements
    let newElement: U[] = [];

    // Loop through some array for each input element
    for (let i = 0; i < someArray.length; i++) {

        newElement.push(...callBack(someArray[i] as T, i, someArray as T))
    }
    return newElement;
}
export function myFilter<T>(arr: T[] | string[], filterFunc: (elem: T, index: number, arr: T[]) => boolean):T[] {
    let filterElement: T[] = [];

    // Loop through the array for each element
    for (let i = 0; i < arr.length; i++) {
        // Call the filterFunc and add the element to the result if it return true
        if (filterFunc(arr[i] as T, i, arr as T[])) {
            filterElement.push(arr[i] as T)
        }

    }
    return filterElement;
}
 export function myReduce<T>(inputArr:T[], reduceFunc:(arr:T, current:T)=> T, initialValue:T):T{
    let accumulator = initialValue;

    // Loop through the array and apply reduce function
    for (let i = 0; i < inputArr.length; i++) {
        accumulator = reduceFunc(accumulator, inputArr[i]);
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