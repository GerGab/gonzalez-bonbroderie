import React from 'react'
import './App.css';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer gretting={"HOLA MUNDO ESTO ES BONBRODERIE"}/>
    </>
  )
}

export default App

