//  Nullish coalescing ?? OR ||

function printData(value){
    printThis= value ?? "not found";
    console.log("printThis is ", printThis);
}

// let var1; undefined

let var1=null;

printData("var1"); 

//  || operator function:
//  if left value is falsy--> right