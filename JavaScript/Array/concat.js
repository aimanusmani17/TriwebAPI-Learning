let arr1=['a','b','c','d'];
let arr2=['1','2','3','4'];

console.log('concat');
console.log( arr1.concat(arr2));

console.log('-------------join----------');

let str= arr1.join(' ');
console.log(str);

console.log('-------------push----------');

let l= arr1.push('e');
console.log("return from push", l);
console.log("Array after push", arr1);

console.log('-------------pop----------'); //pop returns from last

let elem=arr1.pop();
console.log("return from pop",elem);
console.log ("Array after pop", arr1);

console.log('-------------Shift----------'); // removes first element from array

let shiftElem=arr1.shift();
console.log("return from Shift",shiftElem);
console.log ("Array after shift", arr1);



console.log('-------------unshift----------');

let lUnshift= arr1.unshift('a');
console.log("return from unshift", lUnshift);
console.log("Array after unshift", arr1);