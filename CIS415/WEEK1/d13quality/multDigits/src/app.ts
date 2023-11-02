
export function multDigits(num : number){
    let multiply = 1;
    while(num > 0){
        // Get the last digit of the number and add it to multiply
        let lastDigit = num % 10;
        multiply *= lastDigit;

        num = Math.floor(num/10);
    }
    return multiply;
}
console.log(multDigits(8));