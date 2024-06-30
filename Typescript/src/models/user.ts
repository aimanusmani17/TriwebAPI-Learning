
const addUserToDB = (userName:string, password:string, age:number) => {
    console.log(userName, password);
    return "USer Registration Done";
};

interface USer{
    id:number,
    name:string,
    password:string,
    age:number,
    is_active: true|false,
    accountStatus: string | number
}
const updateUserData= (objUSer:USer):string =>{
    console.log( objUSer.name);
    // expect
    return "Update Done";
}

export {addUserToDB, updateUserData};
