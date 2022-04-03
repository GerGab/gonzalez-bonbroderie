import {createContext, useContext, useEffect, useState} from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList,setCartList] = useState([])
    const [productInCart,setProductInCart] = useState(false)
    const [sumTotal,setTotal] = useState(0)

    const addToCart = (item) => {
        
        let prod = cartList.filter(prod => prod.id === item.id)[0]
        !prod && setCartList([...cartList,item]);
    }

    const reducirCant = ({id}) =>{
        let producto = cartList.filter(prod => prod.id===id)[0]
        if (producto.cantidad>1) {producto.cantidad -= 1}
        setCartList([...cartList])

    }
    const aumentarCant = ({id}) =>{
        let producto = cartList.filter(prod => prod.id===id)[0]
        if (producto.cantidad<producto.stock) {producto.cantidad += 1}
        setCartList([...cartList])
    }      

    const searchProduct = ({id}) => {
        let found = cartList.filter(prod => prod.id === id)[0]
        found ? setProductInCart(true):setProductInCart(false)
    }

    const cleanCart = () =>{
        setCartList([])
    }

    const removeItem = ({id}) =>{
        let productos = cartList.filter(prod => prod.id!==id)
        setCartList([...productos])
    }

    useEffect(()=>{

        let tot = cartList.reduce((tot,prod) => tot += prod.cantidad * prod.precio,
        0);
        setTotal(tot)
    },[cartList])

  return (
      
    <CartContext.Provider value={{
        cartList,
        sumTotal,
        addToCart,
        searchProduct,
        productInCart,
        removeItem,
        reducirCant,
        aumentarCant,
        cleanCart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider