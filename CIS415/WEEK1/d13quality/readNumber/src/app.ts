


export function readNumber(arr:(number|string)[]) : number[]{
    let result: number[] = []
    // Loop through the element of the array
    for(let element of arr){
        // Check the element  for regular numbers
        let checkRegular = /^[-+]?\d*\.?\d+$/;
        if(typeof(element) === 'string' && checkRegular.test(element)){
            result.push(Number(element));
        }
    }
    return result;
}