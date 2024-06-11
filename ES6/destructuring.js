// Array matching

let arr= [1,2,3,4];

let [a,b]=arr;
console.log("first element a:" , a);
console.log("first element b:" , b);

[b,a]=[a,b];

console.log("arr is : ", arr);
console.log("first element a:" , a);
console.log("first element b:" , b);

// shorthand matching

function getStudent(){
    let student= {
        name:"aiman",
        age: 28,
        level:"MCA"
    }
    return student;
}

var {name,age,level}=getStudent();

console.log(name,age,level)


// object mthcing or deep matching

function getData(){
    let obj={
        ename:"Fatima",
        salary: 10000,
        location:{
            city:"Delhi"
        }
    }
    return obj;
}

let {ename: employeeName ,salary: employeeSalary, location: {city:employeeCity}} = getData();
console.log("Ename: ",employeeName, "Salary: ",employeeSalary, "Location: ",employeeCity );