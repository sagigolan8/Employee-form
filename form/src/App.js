import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from './components/Form';
import { ToastContainer } from 'react-toastify';
import Sent from './components/Sent';

export default function App() {
  useEffect(()=>{
    if(window.innerWidth <= 450){ //=>For mobile
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
        })
    }
   },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/sent" element={<Sent/>} />
      </Routes>
      <ToastContainer/>
    </Router>
  )
}
