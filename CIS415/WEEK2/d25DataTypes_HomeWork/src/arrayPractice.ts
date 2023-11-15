
export type Person = {
    name: string,
    age: number
}

export function doubleNums(arr:number[]){
return arr.map(num => num * 2);
}

export function doubleAges(arr:Person[]): Person[]{
     return arr.map((property) => {
        return{
            name:property.name,
            age: property.age * 2,
        } 
    });
 
}

export function filterEven(arr:number[]){
    return arr.filter((num) => num%2 === 0);
}

export function filterOver10(arr:Person[]): Person[] {
   return arr.filter((person)=> person.age > 10);
}
// numArray = [5, 0, 7, 77, -20, 300, 51, 2];

export function findEvenNum(arr: number[]){
    return arr.find((num)=> num % 2 ===0)
}

export function findEvenAge(arr:Person[]): Person | undefined{
    return arr.find((person)=> person.age %2 === 0);
}

export function includesEvenNum(arr:number[]){
    return arr.includes(77);
}

// export function includesEvenAge(arr){

// }


