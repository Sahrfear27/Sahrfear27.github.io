// Variables

// Working with variables
let admin;
let name;
name = "John";
admin = name;
console.log(`The admin is ${admin}`);

// Giving the right name
const planetName = "Earth";
let currentVisitor = "Sahrfear";
// Uppercase const?
const BIRTHDAY = '18.04.1982'; // It will be a good coding practice to use uppercase on the Birthday because it is constant and will not change
//const age = someCode(BIRTHDAY); //The value of age changes every year, so the age should remain as lower case


// Basic operators, maths
let a = 1, b = 1;
let c = ++a; // C will be 2 ===> The prefix returns the new value
let d = b++; // d will be 1 ===> The postfix will return the old value
console.log(c);
console.log(d);

// Assignment result
let a1 = 2;
let x = 1 + (a1 *= 2); //a1 = 4, x=5;
console.log(a1);
console.log(x);

// Type conversions
"" + 1 + 0 //"10"
"" - 1 + 0  // -1
true + false //true == 1
6 / "3" //2
"2" * "3"   //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 //2
"4px" - 2   //NAN
"  -9  " + 5    // " -9 5"
"  -9  " - 5    //-14
null + 1    //1
undefined + 1   //NAN
" \t \n" - 2    //-2


// Fix the addition
let a3 = prompt("First number?", 1);
let b3 = prompt("Second number?", 2);

alert(a3 + b3); 
// 12    : ===> The output is 12 because the input from the user is considered as a string you have to convert it to number using the parse int function
                               


// Comparisons
5 > 4  //true
"apple" > "pineapple"   //false
"2" > "12"  // true : first compare 2 and 1

undefined == null //true : ==> You can convert from null to undefined
undefined === null //false: It does not allow comparism and they are not equal in both value and data type
null == "\n0\n" //false
null === +"\n0\n"   //false

// Logical operators

( null || 2 || undefined ) // return 2 since it requre one of the statement to be ture inorder for the expression to be true

alert( alert(1) || 2 || alert(3) ); //1 and 2

alert( 1 && null && 2 );    //output will be null since the && require all value to be true inorder for the expression to be true
