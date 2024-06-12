// global symbol

const person={
    id:123,
    pname:"abc"
}
const xyz=Symbol.for('xyz');
person[xyz]="not hidden symbol data";
console.log(person[xyz]);
const iKnowThis= Symbol.for('xyz');
console.log(person[iKnowThis]);