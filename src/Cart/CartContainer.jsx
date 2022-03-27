import { useCartContext } from '../Context/CartContext'
import CartAux from './CartAux/CartAux'
import './CartContainer.css'
import CartItem from './CartItem/CartItem'


function CartContainer() {

  const {cartList,reducirCant,aumentarCant,removeItem,sumTotal} = useCartContext()

  const increase = (item)=>{
    aumentarCant({...item})
  }

  const decrease = (item) =>{
    reducirCant({...item})
  }

  const eliminar = (item) =>{
      console.log(item)  
      removeItem(item)
  }


  return (

    <div className="CartContainer">
      <h2>Mi carrito</h2>
      {
        cartList.length===0 ?
          <CartAux/>
          :
          <>
            {cartList.map((item) =>
              <div className='itemCont' key={item.id}>
                <CartItem item={item} 
                          increase={increase} 
                          decrease={decrease} 
                          eliminar={eliminar}/>
              </div>
                  
            ) }
            <div className='itemCont'>
              <div className='totalCont'>
                <div className='regalo'>
                  <input type="radio" name='regalo' />
                  <label htmlFor="regalo">es para regalo</label>
                </div>
                <div className='cupon'>
                  <label htmlFor="cupon">Tengo un cupon!</label>
                  <input type="cupon" />
                </div>
                <div className='totComprar'>
                  <h2>{`TOTAL: $${sumTotal}`}</h2>
                  <button>iniciar compra</button>
                </div>
              </div>
            </div>
          </>
      }
        
    </div>
  )
}

export default CartContainer