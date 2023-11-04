
export function convertFahrenheit(fahrenheitTemp:number){
    let celciusTemperature = (fahrenheitTemp- 32) * 5/9;
    return celciusTemperature;
}
console.log("expect 0: ", convertFahrenheit (32));




// function div5(arr:number[]){
//     let div = 0;
//     for(let num of arr){
        
//         if(num % 5 == 0){
//             div+=1;
//         }
//     }
//     return div;
// }
// console.log(div5([34,35,66,77,87, 100]));

