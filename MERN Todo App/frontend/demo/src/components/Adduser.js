import React from 'react';
import {useNavigate} from "react-router-dom";

const Adduser = () => {
    const navigate =useNavigate();
  return (
    <>
    <button onClick={()=> navigate("/")}>home</button>
    <button onClick={()=> navigate("/edit-user")}>Edit User</button>
<div>Add user</div>  
</>
  )
}

export default Adduser