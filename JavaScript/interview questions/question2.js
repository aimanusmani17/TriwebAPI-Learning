//  arbitory object as this

function printName(){
    console.log( `${this.fname} ${this.lname}`);

}

const student1={
    fname:"aiman",
    lname: "usmani",
}
    

const callItLater= printName.bind(student1);
callItLater();