/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/

export function copyArray<T>(arr: T[]): T[] {
    // COMPLETE THIS
    let newArr = [...arr];
    return newArr;
}

export function concat<T>(arr1: T[], arr2: T[]): T[] {
    // COMPLETE THIS
    let result = [...arr1, ...arr2];
    return result;
}

export function findMin<T>(...arr1: T[]): T {
    // COMPLETE THIS
    let result = arr1.reduce((minValue, currentValue)=> {
        if(minValue < currentValue){
            return minValue;
        }
        else{
            return currentValue
        }
    });
    return result;
}

export function findProduct(...arr1: number[]): number {
    // COMPLETE THIS
    let result = arr1.reduce((minValue, currentValue)=> {
        return minValue * currentValue;
    },1)
    return result;
}


