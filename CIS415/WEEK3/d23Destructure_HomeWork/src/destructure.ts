/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

// the following type definition says that SalaryObj has keys of type string and values of type number
type SalaryObj = { [key: string]: number };


 export function topSalary(salaries:SalaryObj){
    // Check if the object is empty
    if(Object.keys(salaries).length === 0){
        return "none";
    }

    // Initialize the highest salary to 0 and employeeName = null
    let highestSalary = 0;
    let employeeName = null;
    for(const [employee, salary] of Object.entries(salaries)){
        // Check if salary is greater than highest salary
        if(salary > highestSalary){
            highestSalary = salary;
            employeeName = employee;
        }
    }
    return employeeName;
}


 