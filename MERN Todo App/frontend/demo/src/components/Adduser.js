import {React, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Adduser = () => {
    
  const navigate =useNavigate();
  const [userName, setUserName] = useState("")
 const [mobile , setMobile] =useState("");
 console.log("username and mobile", userName, mobile);


  const addUserHandler = () => {
   let payload = { 
    userName,
    mobile,
   }
   axios.post("http://localhost:3002/", payload)
   .then((res)=>{
    console.log(res);
    setUserName("");
    setMobile("");
   })
   .catch((err) => console.log((err)));
  };
  return (
    <>
    <button onClick={()=> navigate("/")}>home</button>
    <button onClick={()=> navigate("/edit-user")}>Edit User</button>
      <br />
      <br />
      <label>UserName</label>
      <input type="text" value={userName}
       onChange={(e)=> 
       setUserName(e.target.value)} />

<label>Mobile</label>
      <input type="number" value={mobile}
       onChange={(e)=> 
       setMobile(e.target.value)} />

        <button onClick={addUserHandler}>Click</button>
<div>Add user</div>  
</>
  )
}

export default Adduser