


let student={
    sname:"Ankur",
    Friend:"john",
    class:"MCA",
    mobile:98997
}

console.log(student);
// convert object to string

let stringFromObject=JSON.stringify(student);

// string to object

let objectFromString=JSON.parse(stringFromObject);
console.log(objectFromString)
console.log(objectFromString.sname);