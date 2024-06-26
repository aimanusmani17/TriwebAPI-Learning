import {Request, Response} from 'express';

import {addUserToDB, updateUserData} from '../models/user';


const registerUSer = (req:Request, res:Response) => {
    // fetch data from request
    // validation
    // normalize
    const userName:string = "Aiman";
    const password:string = "password";
    const age:number =30;
    const result = addUserToDB(userName, password,age );
    res.send("USer Registration ");
};

const checkTypesAndInterface= (req:Request,res:Response)=>{

    interface Point{
        readonly x:number,
        readonly y:number
    }

    let num:Point ={x:2,y:4};
    // num.x=3; Cannot assign to 'x' because it is a read-only property.




    type lockedState= "locked"|"unclocked";
    let xState: lockedState="locked";

    const myUSer={
        id:1,
        name:"aiman",
        password:"string",
        age:25,
        is_active:false,
        accountStatus:""
        

        
    }

    const result= updateUserData(myUSer);
    res.send(result);



}

class Employee{
    ename:String ;
    salary: Number;
    constructor(name:String, salary: Number){
        this.ename=name;
        this.salary=salary;
    }
}

    class EmployeeWithAge extends Employee{
        age: Number=0;
    }

const relatedToClass= ( req:Request, res:Response)=>{
    const john= new EmployeeWithAge("john", 300000);
    john.salary= 40000;
    john.age=32;
}

export {registerUSer, checkTypesAndInterface};
