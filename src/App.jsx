import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import CartContainer from './Cart/CartContainer';
import NavBar from './components/navbar/NavBar'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import CartContextProvider from './Context/CartContext'

function App() {
  return (
    <BrowserRouter>
        
        
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/detalle/:categoria&:id' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element={<CartContainer/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
            </Routes>
        </CartContextProvider>
        
    </BrowserRouter>

  )
}

export default App

