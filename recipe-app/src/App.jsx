import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Homepage from './components/Homepage';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar"



function App() {
  return (
   <Router>
    

    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />} />

    </Routes>
    <ToastContainer />
   </Router>
  );
}

export default App;
