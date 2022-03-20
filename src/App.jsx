import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Cart from './Cart/Cart';
import NavBar from './components/navbar/NavBar'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer'

function App() {
  return (
    <BrowserRouter>
    
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detalle/:categoria&:id' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
          
    
    </BrowserRouter>

  )
}

export default App

