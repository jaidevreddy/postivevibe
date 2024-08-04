import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Options from './Components/Options';
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
            <Options/>
          </>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App