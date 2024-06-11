let arr=[1,2,3,3,3,3,4,4,5];
 console.log(arr);

 //convert array to set

 let setFromArray= new Set(arr);
 console.log(setFromArray);

//  convert set to array

let arrayFromSet=Array.from(setFromArray);
arrayFromSet.push(3);
console.log("Array from set", arrayFromSet);

//spread operator

let arrFromSetUsingSpreadOperator=[...setFromArray];
arrFromSetUsingSpreadOperator.push(3);
console.log(arrFromSetUsingSpreadOperator); 