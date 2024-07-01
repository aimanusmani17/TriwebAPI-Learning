for (let y = 0; y < 5; y++) {
    if(y == 3) {
        break;
    }
    console.log(y);
}

console.log();

for (let y = 0; y < 5; y++) {
    if(y == 3) {
        continue;
    }
    console.log(y);
}

for (let i = 1; i <=20; i++) {
    if(i % 2 == 0){
        console.log(` ${i} :Number is even` );
    } else {
        console.log(  `${i}: Number is odd`);
    }
}