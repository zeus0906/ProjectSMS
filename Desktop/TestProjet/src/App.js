import logo from './logo.svg';
import './App.css';
import './Pages/Components/NavbarE.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AllUsers from './Pages/AllUsers';
import HomeE from './Pages/HomeE';

export const App = () => {
  return (
     /*code minimal ici à enlever */
     <Router>
        <Routes>
          <Route path="" element ={<Login />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/register" element ={<Register />} />
          <Route path="/allusers" element ={<AllUsers />} />
          <Route path="/home_etudiant" element ={<HomeE />} />
        </Routes>
    </Router> 
  )
}


export default App;


