

function product(productName,Price){
    this.productName=productName;
    this.Price=Price;
}

function student(sname,price,pName){
    // this.sname=sname,
    // this.price=price,
    product.call(this,price,pName);
    this.sname=sname;
}

const student1= new student("AIMAN",30000,"Headphones");
console.log(student1.sname,"Purchased a ",student1.pName, "for Rs", student1.price);

const p1=new product("laptop", 2000000);
const p2=new product("headphone", 250000);

console.log(p1);
console.log(p1.productName);
console.log(p2.Price);

