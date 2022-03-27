import {createContext, useContext, useEffect, useState} from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList,setCartList] = useState([])
    const [productInCart,setProductInCart] = useState(false)
    const [sumTotal,setTotal] = useState(0)

    const addToCart = (item) => {
        
        let found = false
        
        cartList.forEach(prod =>{
            if (prod.id === item.id){
                prod.cantidad += item.cantidad
                found = true
            } 
        })
        if (!found){
            setCartList([...cartList,item])
        }else{
            setCartList([...cartList])
        }

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
        let found = false
        cartList.forEach((prod)=>{
            if (prod.id === id) {found = true;}
        })
        found ? setProductInCart(true):setProductInCart(false)
    }

    const cleanCart = () =>{
        setCartList([])
    }

    const removeItem = ({id}) =>{
        console.log(id)
        let productos = cartList.filter(prod => prod.id!==id)
        setCartList([...productos])
    }

    useEffect(()=>{
        let tot = 0
        cartList.forEach(prod =>{
            tot += prod.cantidad * prod.precio
        })
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