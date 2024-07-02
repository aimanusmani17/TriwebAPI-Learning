
// array

const marksOfStudent= [20,40,25,87,90,57,78,92,76,44];

// object destructuring

[subject1Marks,subject2Marks,subject3Marks,subject4Marks,subject5Marks, ...otherMarks]= marksOfStudent;
console.log(subject1Marks);
console.log(subject2Marks);
console.log(subject3Marks);
console.log(subject4Marks);
console.log(subject5Marks);
console.log(otherMarks);

// object

const student = {
    'uname':"aiman",
    'mobile':9898,
    'address':"india"
};

const {uname,mobile} =student;
console.log(uname," and mobile= ", mobile);
