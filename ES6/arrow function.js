const xyz = ()=> {
    console.log ("xyz", this);

}

// cons of arrow function

// 1. cant make constructor
// 2.arguments variable
// 3.new.target

let arr=[1,2,3,4];

const arrmap=arr.map(element => element*2)
console.log(arrmap);


const retObj=(uname,age) => ({uname,age})

console.log(retObj('Aiman',28));

const addTwoNum= (num1,num2)=> num1+num2;
console.log(addTwoNum(2,5));


let arr1=[1,2,3,4];
arr1.forEach((e) => {
    console.log(e," ");
    
});
