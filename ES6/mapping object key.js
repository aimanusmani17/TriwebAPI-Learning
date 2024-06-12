//  we can use object as a key (an important map feature of ES6)

const student1={sname:"Aiman"};
const student2={sname:"Fatima"}

studentMap=new Map();

studentMap.set("key1", 29);

studentMap.set(student1, "Her sir name is Khan");
studentMap.set(student1, "Her sir name is usmani");

console.log(studentMap);