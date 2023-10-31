// Write code to print the number patterns on the console
12345
12345
12345
12345
12345

let count1 = "";
for (let i = 1; i < 6; i++) {

    for (let j = 1; j < 6; j++) {
        count1 += j;
       
    }
    console.log(count1);
    count1 = "";
}
console.log("\n")
// Other way
for (let k = 1; k <= 5; k++) {
    const patterns = '12345';
    console.log(patterns);
}

console.log("\n")
1
22
333
4444
55555
for (let a = 1; a <= 5; a++) {
    let str2 = ""
    for (let c = 1; c <= a; c++) {
       str2 += a;
       
    }
    console.log(str2);
}

// Other way
for (let t = 0; t <= 5; t++) {
    console.log(String(t).repeat(t));
}

console.log("\n");

55555
4444
333
22
1
for (let m = 5; m > 0; m--) {
    let pattern2 = ""
    for (let n = m; n > 0; n--) {
        pattern2 += m;
    }
    console.log(pattern2);
    
}
