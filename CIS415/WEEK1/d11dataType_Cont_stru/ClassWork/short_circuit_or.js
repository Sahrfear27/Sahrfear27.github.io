let x = false;
let y = 0;
let z = null;

console.log(x ?? y ?? z); //only check for null or undefined

 x = undefined;
 y = 0;
z = null;
console.log(x ?? y ?? z);


//  Write code to print following pattern on the console
// 11111
// 22222
// 33333
// 44444
// 55555

for (let i = 1; i < 6; i++) {
    let str = ""
    for (let j = 1; j < 6; j++) {
        str += i
    }
    console.log(str);
}