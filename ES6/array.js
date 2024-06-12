
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
