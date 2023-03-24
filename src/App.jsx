import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';


import './App.css'
import LoginPage from './pages/AuthPages/Login/Login';
import RegisterPage from './pages/AuthPages/Register/Register';

import HomePage from './pages/HomePage/HomePage'

import { Link } from 'react-router-dom';
import DashaboardPage from './pages/DashboardPage/DashaboardPage';

function App() {
 

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      
      <Route path="/login" element={<LoginPage/>}/>

      <Route path="/register" element={<RegisterPage/>}/>

<Route path='/dashboard' element={<DashaboardPage/>}/>


      
      
      </Routes>

    </div>
     
  );
};

export default App;
