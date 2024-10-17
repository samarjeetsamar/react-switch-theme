import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from './Components/Theme';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route>
                <Route index element={<Theme/>} /> 
                <Route path="/register" element={<Register/>} /> 
                <Route path="/login"  element={<Login/>} /> 
            </Route>
        </Routes>
      
      </BrowserRouter>
  );
}

export default App;
