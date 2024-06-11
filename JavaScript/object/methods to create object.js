let objInit={name:'aiman',  mobile:98112};

console.log(objInit);

function employee(name,designation,salary,age){
    this.name=name;
    this.designation= designation;
    this.salary= salary;


}

let objFunc= new employee("aiman",'engineer', 901,29)
console.log(objFunc);