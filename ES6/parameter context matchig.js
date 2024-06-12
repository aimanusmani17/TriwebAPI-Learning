// Paraneter context matching

// function printData([name,age]){
//     console.log("name is", name);
//     console.log("age is:", age);
// }
// console.log(["aiman", 28]);

function printData2({name: ename, age: eage}){
    console.log("name is", ename);
    console.log("age is:", eage);
}
printData2({name: "aiman", age:28});
