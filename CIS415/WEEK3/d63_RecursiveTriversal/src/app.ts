type Person = { name: string; salary: number;}
//index signature since do not know names of properties ahead of time
//Department is an object with an unknwon number and name of properties that are strings and values
//that are Person[] or Department objects
type Department = { [ deptName: string]: Person[] | Department};
const company: Department = {
sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
development: {
sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
internals: [{name: 'Jack', salary: 1300}]
}
};
function sumSalaries(department: Department) {
if (Array.isArray(department)) { // case (1)
return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
} else { // case (2)
let sum = 0;
for (const subdep of Object.values(department)) {
const subDepartment = subdep as Department;
sum += sumSalaries(subDepartment); // recursively call for subdepartments, sum the results
}
return sum; }}
console.log(sumSalaries(company)); // 6700


function sumSalarie(department: Department) {
if (Array.isArray(department)) { // case (1)

} else { // case (2)
let sum = 0;
for (const subdep of Object.values(department)) {
const subDepartment = subdep as Department;
sum += sumSalaries(subDepartment); // recursively call for subdepartments, sum the results
}
return sum; }}
console.log(sumSalaries(company)); // 6700



