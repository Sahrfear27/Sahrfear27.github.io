
export function convertFahrenheit(fahrenheitTemp:number){
    let celciusTemperature = (fahrenheitTemp- 32) * 5/9;
    return celciusTemperature;
}
console.log("expect 0: ", convertFahrenheit (32));
