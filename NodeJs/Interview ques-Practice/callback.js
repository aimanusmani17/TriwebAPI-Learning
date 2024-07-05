/*
Asynchronous , equivalent of  a function
--> helps in non -blocking code
--> helps in performance of single thread  nodeJS application
*/

console.log("HELLO")
setTimeout(()=>{
    console.log("Inside");
},5000)

console.log("Hi");