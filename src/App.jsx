import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <>
    <Navbar/>
    <div className="welcome">
        <h1>Luka Store</h1>
    </div>
    </>
  );
}


export default App
