import {createContext, useState} from "react"

export const CartContext = createContext([])


function CartContextProvider({children}) {
    const [cartList,setCartList] = useState([])

    const addToCart = (item) => {
        setCartList([...cartList, item])
    }

  return (
    <CartContext.Provider value={{
        cartList,
        addToCart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider