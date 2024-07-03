// set immidiate is not that immediate as its name
// its callback is placed in the check queue of the nect cycle
// Check queue: occurs letter than the TIMER QUEUE.




let a=2;
let b=3;
function addTwoNumbers(n1,n2){
    console.log(n1+n2);

}

setImmediate(()=>{
    addTwoNumbers(a,b);
});  //callback register



console.log("inside event loop");

// 