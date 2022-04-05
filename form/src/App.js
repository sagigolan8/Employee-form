import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Send from './Components/Send';
import Form from './Components/Form';
import { ToastContainer } from 'react-toastify';

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
        <Route path="/send" element={<Send/>} />
      </Routes>
      <ToastContainer/>
    </Router>
  )
}
