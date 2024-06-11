let obj={
    name:"Aiman",
    display:function(salary){
        console.log(` ${this.name} earning ${salary} rupees`);

    },

    printAge(age){
        console.log(` ${this.name} age is ${age} year old`);
    }
}

obj.display(1900);
obj.printAge(30);