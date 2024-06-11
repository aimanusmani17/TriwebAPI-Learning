function addNumers(...numbers){
    let sum=0;
        numbers.forEach(element => {
            sum=sum+element;
        
    });
    return sum;
}

let res= addNumers(2,3);
console.log(res);

let res2= addNumers(2,3,4,5,6);
console.log(res2);

let res3= addNumers(2,3,6,7,8,9,53,23,90);
console.log(res3);

