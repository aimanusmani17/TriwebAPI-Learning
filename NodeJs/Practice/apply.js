/*
In call() we pass arguments

In apply() we pass array
*/

function marksOfStudent(...marks){
    
    this.subject1 = marks[0];
    this.subject2 = marks[1];
    this.subject3 = marks[2];
    this.subject4 = marks[3];
    this.subject5 = marks[4];

    let status='pass';
    marks.forEach((num)=>{
        if(num<33){
            status='fail'
        }
    })

    this.result=status;
   
}

function student(sname, ...marks){

    marksOfStudent.apply(this,marks)
   this.sname=sname;

 
 
}

const student1 = new student("aiman", 45,34,56,42,68);
console.log(student1); 