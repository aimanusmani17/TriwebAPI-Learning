// how to check is 2 passed from a function or not

function isTwoPassed(){
    if(Array.from(arguments).indexOf(2) >= 0){
        console.log("yes 2 is passed from this function");
    }
    else{
        console.log("no 2 is not passed from this function");
    }
}

isTwoPassed(3,2);