
export function sumDigits(num : number){
    let sum = 0;
    while(num > 0){
        // Get the last digit of the number and add it to sum
        let lastDigit = num % 10;
        sum += lastDigit;

        num = Math.floor(num/10);
    }
    return sum;
}
console.log(sumDigits(8));