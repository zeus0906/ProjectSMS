import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({email:"",password:""})
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    //console.log(user.email + " " + user.password)
    axios.post("https://localhost:7272/login",user)
    .then((res)=>{
      setToken(res.data.token);
      alert('Connecté avec succès');
    })
    .catch((err)=>{
        console.log(err);
        alert('Échec de la connexion');
    })

}

  const openRegister = (e) =>{
     e.preventDefault();
     navigate("/register");
  }  

  const openAllUsers = (e)=>{
    e.preventDefault();
    if(!token){
      navigate("NoData")
    }else{
        navigate("/allusers", {state : token});
    }
  }

  
  return (
    <div>
       <h3 style={{ color :"blue"}}> SchoManSyst </h3> <br/><br/>
        

             <Form className="formulaire" onSubmit={handleSubmit}>
                  <div>
                    <label className="form-label">Email address</label>
                    <input  type="email" placeholder="Email" required="true"
                      className='form-control'
                      onChange={(e)=>setUser({...user,email:e.target.value})}
                    />
                     
                  </div><br/>
                  <div>
                    <label className="form-label">Mot de passe</label>
                    <input type="password" placeholder="Mot de passe"  required="true"
                      className='form-control'
                     onChange={(e)=>setUser({...user,password:e.target.value})}
                    />

                  </div><br/>
                  <Button className='bouton' variant="primary" type="submit">
                      Connexion
                  </Button>
                </Form> 

       <Button className='bouton' variant="primary" 
              onClick ={openRegister}     
                type="submit">  
            Create User         
        </Button>
        <br />
        <br />
        <Button className='bouton' variant="primary" 
              onClick ={openAllUsers}     
                type="submit">  
            See Users      
        </Button>

    </div>
  )
}

export default Login