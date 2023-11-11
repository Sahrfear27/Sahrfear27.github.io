// Generic Functions : 
function creatPair<S, T> (word: S, num:T): [S, T]{
    return [word, num];

}
console.log(creatPair("Hello", 40));


// Arrow Function 
let num = (a:number, b:number)=> a * b;
console.log(num(5,6));

let names = (): string =>{return "I am sahrfear"}

console.log(names())
// Function Signature: Talk about the return type of the function

// Inferred type delcaration for object literals
let employee = {
    name: "Sahrfear",
    id: 200,
} as Person; //tell TypeScript that you want to treat the employee object as having the Person type

// Declare the object type
type Person = {
    name: string,
    id: number,
    isActive? : boolean;
}

// Function declaration
function greet(person: Person) {
    return "Hello " + person.name;
}
console.log(greet(employee));

employee.isActive = false;

console.log(employee);

// Add  properties from the objects
//Error : Property 'isAdmin' does not exist on type '{ name: string; age: number; }'.ts(2339)==> typeScript is treating the object user as having a specific type, 
//and it doesn't recognize the "isAdmin" property because it's not present in the type definition.
//Use  type assertion in the type defination (?) which means optional
type User = {
    name: string;
    age: number;
    isAdmin?: boolean; // Optional property
}

let user: User = {
    name: "John",
    age: 30
}as User;

user.isAdmin = true;

console.log(user);
// Remove  Property from the object
delete user.isAdmin
console.log(user);


// The following will log true to the console.

console.log("hELLO");


// Create 3 objects, student1, student2, student3
// ➢ property studentId : 101, 102, 103 respectively
// ➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
// ➢ push the students into an array, quizAnswers
// ➢ write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g.,
// [3,1,2,4] and returns an array that has scores for each student. Their score is the number of
// correct answers.
// ➢ expect [ 3, 2, 3 ]
// ➢ use a helper function to compute the score for a given student

const student1 ={
    studentId : 101,
    quizAnswers: [1, 1, 2,4]
}
const student2 ={
    studentId : 102,
    quizAnswers:[2, 1, 2,2],
}
const student3 ={
    studentId : 103,
    quizAnswers:[3, 1, 3,4]
}

type student ={
    studentId:number,
    quizAnswers: number[];
}
const studentArray = [student1, student2, student3];

function computeStudentScore(student:student, correctScore:number[]){
    let sum  = 0;
    const studentAnswers = student.quizAnswers;
    // let s = studentAnswers.filter((ele))
    for(let i = 0; i < studentAnswers.length; i++){
        if(studentAnswers[i] === correctScore[i]){
            sum += 1;
        }
    }
  return sum;
}

console.log("The ans is " + computeStudentScore(student1, [3, 1, 2, 4]));
// Interlinked Object with function
// Function that create and return 2 objects

type man ={
    name: string,
    wife: string
}

type woman ={
    name: string,
    husband: string
}
function marry(man: man, woman:woman){
  man.wife = woman.name;
  woman.husband = man.name;

   return {
    father : man,
    mtoher: woman
   }
}

let family = marry({ name: "John", wife :""},{name : "Ann", husband :""} )
console.log(family);