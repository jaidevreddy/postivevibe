import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar/>
            <LandingPage/>
          </>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App