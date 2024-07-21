import {React, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Edituser = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState([]);
    const [flag,setFlag] = useState(false);
    const editHandler= (e, _id, key)=>{

      const editedData = user.find((item)=> item._id === _id);
      let tempData= {...editedData, [key]: e.tartget.innerHTML}
      axios.put("http://localhost:3002/", tempData)
      .then((res) => {
        setUser(editedData);
        setFlag(!flag);
      });
    } 


    useEffect(()=> {
      axios
      .get("http://localhost:3002/")
      .then((res)=> {
        console.log(res);
        setUser(res.data.data);
      })
      .catch((err)=> console.log(err));

    }, [flag]);

        return (
          <>
          <button onClick={()=> navigate("/add-user")}>Add User</button>
          <button onClick={()=> navigate("/edit-user")}>Edit User</button>
          <div className="header-title">Edit User</div>  
          <br />
          <br />
          <div className="table-container">
              <table className="moduleSection">
                  <thead>
                      <tr>
                          <th className="table-header">Id</th>
                          <th className="table-header">UserName</th>
                          <th className="table-header">Mobile</th>
                          <th className="table-header">Delete</th>
                      </tr>
                      </thead>
                      <tbody>
                          { user.length > 0
                          ? user &&
                          user.map((post)=> {
                              return (
                                  <tr key={post._id}>
                                  <td className="table-data">{post._id}</td>
                                  <td contentEditable supressContentEditableWarning 
                                  onBlur={ (e)=> editHandler (e, post._id, "userName")}
                                  className="table-data">{post.userName}</td>
                                  <td contentEditable
                              suppressContentEditableWarning
                              onBlur={(e) => editHandler(e, post._id, "mobile") }
                                  className="table-data">{post.mobile}</td>
                              </tr>
                              );
                          }): "no data found"}
                          </tbody>
              </table>
              </div>

              </>
          
        );
        };

  


export default Edituser