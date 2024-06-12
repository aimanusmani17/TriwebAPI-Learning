
let str="Hi I am here";
let arr=Array.from(str);
console.log(arr);

function checkData(){
    console.log(arguments);   //Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

    let arr=Array.from(arguments);
    console.log(arr);              // arguments is only possible in function not in arrow function.


}
checkData(1,2,3,4,5);

// Array .keys

let arr1=["a","b","c"];

let keys=arr1.keys();

console.log(keys);

for (e of keys){
    console.log(arr[e]);
}

// Array .find()

let arr2= [12,13,14,15];

let firstOddNum=arr2.find(getOdd);

function getOdd(value,index,ar){
    return value % 2 !==0;
}

console.log(firstOddNum);


// Array Find index()

let arr4=[23,22,12,45,21];

let indexOfFirstOdd= arr4.findIndex((value,index,ar)=>{
    return value % 2!==0;
})
console.log(indexOfFirstOdd)
