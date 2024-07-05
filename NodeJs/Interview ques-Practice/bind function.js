//Change the 'this' for some object
//but call it later

/*
-> The siplest use of bind is to make a fucntion that, no matter how it is called, is called with a particular 'this'

-> In call(), and apply() we bind 'this' and execute funtion at a time, while
    in bind() we bind 'this' now and 
    execute it later */

    let student2= {
        sname:"Ankita",
        mobile:789696,
    }



    let student= {
        sname:"fatima",
        mobile:98678,

        getName:function(){
            console.log(this.sname);
        }
    }
    
    let sn=student.getName.bind(student);
    setTimeout(sn,1000)

    let sn2=student.getName.bind(student2);
    setTimeout(sn2,1000);

  