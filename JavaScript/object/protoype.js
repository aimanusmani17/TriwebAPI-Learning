function Student(name,age){
    this.name=name;
    this.age= age;

}

let student1= new Student("kavi", 23);
console.log(student1);
console.log(student1, __proto__);
student1.__proto__.display= function (){
    console.log(`hi ${this.name}`);
}

student1.display();

let student2= new Student("Arena", 25);
console.log(student2);


student2.display();