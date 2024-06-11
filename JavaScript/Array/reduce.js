//The purpose of reduce is to reducing the list of itmes down to a single unit



let arr=[10,20,30];

let total= arr.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
});

console.log( total);