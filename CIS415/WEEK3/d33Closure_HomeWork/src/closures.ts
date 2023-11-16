

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */


/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */




/**
 * @returns {Function} closure that returns it's number
 */

// Filter inbetween
export function inBetween(num1: number, num2: number){
    return function(num: number){
        return num >= num1 && num <= num2;
    }
}

// In array
export function inArray(arr: number[]){
    // Return the function and check if x in included
    return function(num: number){
        return arr.includes(num);
    }
}


  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...

export function makeArmy(){
    let shooters = [];
    for(let i = 0; i < 10; i++){
        let shooter = function(){
            console.log("I am shooter", i)
            return i;
        }
        shooters.push(shooter);
    }
    return shooters;
}