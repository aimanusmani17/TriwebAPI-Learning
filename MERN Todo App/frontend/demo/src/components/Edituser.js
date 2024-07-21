import React from 'react';
import {useNavigate} from "react-router-dom";

const Edituser = () => {
  
    const navigate =useNavigate();
  return (
    <>
    <button onClick={()=> navigate("/")}>Home</button>
    <button onClick={()=> navigate("/add-user")}>Add User</button>
<div>Edit user</div>  
</>
  )
}

export default Edituser