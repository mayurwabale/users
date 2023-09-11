import './App.css';
import {React,useState,useEffect} from"react";
import axios from "axios";
import table from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
function App() {
  const [columns,setColumns]=useState([]);
  const [records,setRecords]=useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const users = await axios.get('http://localhost:3002/api/users');
      console.log(users.data)
    const  columnsName = users.data.map(res=>{
      return{
        name:res.name,
        email:res.email,
        phone:res.phone
      }
    })
    console.log(columnsName);
    setColumns(Object.keys(columnsName[0]));
    setRecords(users.data)
    };
    getUsers(); 
  }, []);

  
  
  // useEffect(()=>{
  //  async()=>{
  //  const userData= await axios.get('http://localhost:3002/api/users');
  //  setColumns(Object.keys(userData.data[0]));
  //   setRecords(userData.data)
  //  } 
  // },[])
  return (
    <div className='container mt-5'>

     <table className='table'>
        <thead>
          <tr>
            {columns.map((c,i)=>(<th key={i}>{c}</th>))}
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
            {
              records.map((d,i)=>(<tr key={d}>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td><Link to={`/update/${d._id}`} className='btn btn-success'>Update</Link></td>
              </tr>))
            }
            <tr></tr>
        </tbody>
      </table>
      </div> 
  );
}

export default App;
