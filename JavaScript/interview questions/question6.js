// how to find max(highest number) from a list using math.max


const numList=[2,11,23,0,14]

//const maximumNumber= Math.max.apply(null,numList); // use apply
const maximumNumber= Math.max(...numList); //spread operator

console.log (maximumNumber);