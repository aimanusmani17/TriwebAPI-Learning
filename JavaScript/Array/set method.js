let newSet=new Set();

newSet.add(34);
newSet.add(44);
newSet.add(54);

//unique element
newSet.add(64);

if(newSet.has(54)){
    console.log("method is working");
}
newSet.delete(54);
console.log(newSet);

for (const element of newSet){
    console.log("element: ",element);
}



console.group("size of new set is: ",newSet.size);