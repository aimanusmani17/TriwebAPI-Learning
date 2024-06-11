// Template literals


function printData(sname, age){
    let toPrint=`Student's name is ${sname} 
    and age is ${age}`;
    
    // let toPrint= "student's anme is " +sname + "and age is: " +age;
    console.log(toPrint);
}

let sname="aiman";
let age= 28;

printData(sname,age);
