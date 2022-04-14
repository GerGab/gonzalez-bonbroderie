import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import CartContainer from './Cart/CartContainer';
import NavBar from './components/navbar/NavBar'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import CartContextProvider from './Context/CartContext'
import UserContainer from './UserContainer/UserContainer';
import UserContextProvider from './Context/UserContext';

function App() {
  return (
    <BrowserRouter>
        
        
        <CartContextProvider>
          <UserContextProvider>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/detalle/:categoria&:id' element={<ItemDetailContainer/>}/>
              <Route path='/Cart' element={<CartContainer/>}/>
              <Route path='/*' element={<Navigate to='/'/>}/>
              <Route path='/User' element={<UserContainer/>}/>
            </Routes>
          </UserContextProvider>
        </CartContextProvider>
        
    </BrowserRouter>

  )
}

export default App

