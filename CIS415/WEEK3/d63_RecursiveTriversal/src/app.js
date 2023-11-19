
let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
for(let subDepartment of Object.values(company)){
    // sum += sumSalaries(subDepartment); //subdapratment will now be an array
    console.log(subDepartment);
}
