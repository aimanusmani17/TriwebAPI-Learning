//  how to write a method on instance of date, which gives you the next date.

function getNextDate(){
    let date=this.getDate();
    return date + 1;

}
// date instance
let myDateInstance= new Date();

// attach function to the date instance
myDateInstance.getNextDate= getNextDate;

const nextDate= myDateInstance.getNextDate();

console.log(`Next date is ${nextDate}`);