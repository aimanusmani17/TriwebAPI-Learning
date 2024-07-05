// The yield keyword is used to pause or resume generator function.

function* getNum(index){
    while(index<5){
        
        yield index;
        index++;
        
    }
}

let it=getNum(0);
console.log(it.next().value); 
console.log(it.next().value); 
console.log(it.next().value); 
console.log(it.next().value); 
console.log(it.next().value); 
console.log(it.next().done);    