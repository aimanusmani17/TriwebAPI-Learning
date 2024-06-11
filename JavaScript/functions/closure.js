function getProductFunction(multiplier){

    function multiply(num){
        return multiplier*num;
    }
    return multiply(3);

}

let res= getProductFunction(4);
console.log(res);