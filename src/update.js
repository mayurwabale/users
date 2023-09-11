import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
 function Update(){
    const {id} = useParams();
    console.log(id);
    const [data,setData]=useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getUser = async () => {
          const users = await axios.get('http://localhost:3002/api/users/'+id);
          setData(users.data)
        };
        getUser(); 
      }, []);
    const [inputData,setInputData]=useState({name:"",email:"",phone:""})
   async function handleSubmit(event){
        event.preventDefault();
       const updateUser= await axios.put('http://localhost:3002/api/users/'+id,data);
       console.log(updateUser);
       if(updateUser.status === 200){
        swal({
            icon: "success",
            text:"User updated successfully"
          })
        navigate('/');
       }else{
        swal({
            icon: "error",
            text:"update failed"
          })
        throw Error('Error during saving the user');

       }
    }
    return(<div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-light p-5">
            <form onSubmit={handleSubmit}>
            <div style={{paddingTop: "10px"}}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={data.name}
                 className="form-control"
                 onChange={changes=>{setData({...data,name:changes.target.value})}}/>
                
            </div>
            <div style={{paddingTop: "10px"}}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={data.email}
                 className="form-control"
                 onChange={changes=>{setData({...data,email:changes.target.value})}}></input>
            </div>
            <div style={{paddingTop: "10px"}}>
                <label htmlFor="phone">Phone:</label>
                <input type="mobile" name="phone" value={data.phone}
                 className="form-control"
                 onChange={changes=>{setData({...data,phone:changes.target.value})}}></input>
            </div>
            <div style={{paddingTop: "10px"}}>
            <button  className="btn btn-info">Submit</button>
            </div>
            </form>
        </div>
    </div>)
}

export default Update