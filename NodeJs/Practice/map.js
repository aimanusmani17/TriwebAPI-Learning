//  Double each element of array and create a new array


let arr=[1,2,3,4,5,6,7,8];


let newArr2=[];

for(let i=0; i<8;i++){
    newArr2.push(arr[i]*2);
}
console.log(newArr2);

// any operation on each element of array and return the same size of array

// using map()

let newArrM= arr.map((element)=> element*2);
console.log(newArrM);
