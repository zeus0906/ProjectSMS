import React, { useState } from 'react'
import { Button, Form, Table } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const AllUsers = () => {
    const location = useLocation();
    const token = location.state;
    const [users,setUsers] = useState([])
    const showUsers = ()=>{
       const config = { headers: { Authorization: `Bearer ${token}` } };
       axios.get("https://localhost:7272/AllUsers",config)
       .then((res)=>{
        //console.log(res.data);
        setUsers(res.data);
       })
       .catch((err)=>{
        console.log(err);
       })
    }
  return (
    <div>
    
     <Table striped bordered>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Département</th>
          </tr>
        </thead>
        <tbody>
           { users && users.map((user)=>(
            <tr>
               <td>{user.firstName}</td>
               <td>{user.lastName}</td>
               <td>{user.email}</td>
               <td>{user.department}</td>
             </tr>
           ))
           }
        </tbody>
     </Table>

    <Button className='bouton' variant="primary"      
          onClick={showUsers}        type="submit">  
                  Voir la liste         
       </Button>
    </div>
  )
}

export default AllUsers