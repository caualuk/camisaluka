import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";
import CounterButton from './components/CounterButton/CounterButton';


function App() {
  return (
    <>
    <Navbar/>
    <CounterButton />
    </>
  );
}


export default App;
