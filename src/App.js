import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Menupage from './Menu/Menupage.js';
import MenuUser from './MenuUser/MenuUser.js';
import Userorder from './Orderspages/Userorder.js';
import Ordersadmin from './Ordersadmin/Ordersadmin';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/menuAdmin" element={<Menupage />} />
        <Route path="/Odersadmin" element={<Ordersadmin/>}/>
        <Route path='/usermenu' element={<MenuUser/>}/>
        <Route path='/Userorder' element={<Userorder/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;




