// Pattern

// *
// **
// ***
// ****
// *****

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}

let x = 5;
for (let i = x; i >= 1; i--) {
    let str = "* ";
    // let space  = '  ';
    console.log(str.repeat(i));
}

let p = 5;
for (let i = 1; i <= p; i++) { 
    let str = "* "; 
    let space = '  '; 
    console.log(space.repeat((p - i)) + str.repeat(i * 2 - 1)); 
}