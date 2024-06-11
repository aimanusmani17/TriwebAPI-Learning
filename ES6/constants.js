
const obj={ name: 'aiman', age: 28}
console.log("before" ,obj);

//  obj={ name: 'fati', age: 21} TypeError: Assignment to constant variable.
// console.log("before" ,obj);


obj.name="Fatima";
obj.age= 20;
console.log ("after", obj);
