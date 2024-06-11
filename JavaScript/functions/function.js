//nested function

function getfunction(num){
    function square(){

        //console.log(num*num);
        return num*num
    }
    let sqr= square();
    // console.log(sqr);
    return(sqr);

}
 let result=getfunction(2);
 console.log(result);