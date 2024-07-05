// map and weakmap

let user={
    uname:"Aiman",
    mobile:989877
}

let key1={};
let key2={uname:"Aiman"};
let weakMApExample={

    [key1]: "Some data",
    [key2]:"new data"
}

console.log(weakMApExample);

// A weak map  accepts only objects as keys 
// Map accepts premetive datatypes as keys
// 