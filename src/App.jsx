import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";
import CounterButton from './components/CounterButton/CounterButton';
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer';
import ItemDetail from './components/Item/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/Item/ItemDetail/ItemDetailContainer';


function App() {
  return (
    <>
    <Navbar/>
    <CounterButton />
    <ItemListContainer />
    <ItemDetailContainer />
    </>
  );
}


export default App;
