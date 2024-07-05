function demoNewTarget(x){

    if(new.target==undefined){
        console.log("NO");
    }
    else{
        this.x=x;
        console.log("Creating an object");
    }
    console.log("inside the function");
}

demoNewTarget(5);

let x=new demoNewTarget(4);
console.log(x);

