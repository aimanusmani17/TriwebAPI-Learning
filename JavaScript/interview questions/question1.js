// create array.prototype.last()
// return last element and if empty then return -1

Array.prototype.last = function(){

        return this.length ===0 ?  -1 : this[this.length -1];

//     if(this.length){
//         return this[this.length =1];
//     }
//     else{
//         return -1;
//     }
};


const arr=[23,45];

console.log(arr.last());