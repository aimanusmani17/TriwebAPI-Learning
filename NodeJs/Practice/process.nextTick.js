function add(callfrom,n1,n2){
    console.log(callfrom," ", n1+n2);
}

setImmediate(()=>{
    add("SetImmediate", 1,2);
});

setTimeout(()=>{
    add("SetTimeout", 2,3);
},0); //this 0 is the time to process

process.nextTick(()=>{
    add("Process next tick", 4,5);
});

// process.next puts its call back in front of the event queue.
// executes after the current code being executed, but before the IO events or timers

add("Direct", 3,4);
