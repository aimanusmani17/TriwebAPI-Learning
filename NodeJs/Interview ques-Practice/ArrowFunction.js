// Arrow function

 const addTwoNumber=(num1,num2)=>{
    return num1+num2;
 }
 
 const addHiToName=uname=> {
    return "Hi" + uname;

 }

 const addHelloToName =uname=>"Hello"+uname

 const result= addTwoNumber(3,4);
 console.log(result);

 const hiName=addHiToName("AIman");
 console.log(hiName);

 const helloToName=addHelloToName("Arushi");
 console.log(helloToName)

 const isThis=()=>{
    console.log(this);
 }

 console.log(this);
 isThis();
