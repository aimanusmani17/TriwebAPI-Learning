import React , {useEffect, useState} from 'react';

import {useNavigate} from "react-router-dom";
import axios from "axios";

const Home = () => {
    const navigate =useNavigate();
    const [user, setUser ] = useState([]);
    useEffect(() =>{
        axios
        .get("http://localhost:3001/")
          .then((res)=> {
            console.log(res)
            setUser(res.data.data)
        })
        .catch((err) => console.log(err));
    }, []);
    console.log("user", user);
  return (
    <>
    <button onClick={()=> navigate("/add-user")}>Add User</button>
    <button onClick={()=> navigate("/edit-user")}>Add User</button>
<div>Homepage</div>  
<br />
<br />
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>userName</th>
            <th>Mobile</th>
        </tr>
        </thead>
        </table>
        <tbody>
            {user &&
             user.map((post)=> {
                return (
                    <tr key={post._id}>
                    <td>{post._id}</td>
                    <td>{post._userName}</td>
                    <td>{post.mobile}</td>
                    </tr>
             );
             
            })};
            </tbody>
 </table>
</>

);
};

export default Home