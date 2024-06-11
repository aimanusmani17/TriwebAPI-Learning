let wMap= new WeakMap();
obj1={}
obj2={1:1}
obj3={2:2}

wMap.set(obj1,"val1");
wMap.set(obj1,"val2");
wMap.set(obj1,"val3");

// console.log(wMAp);

let v1=wMap.get(obj1);
console.log(v1);





