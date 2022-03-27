import "./CartWidget.css"
import {} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons/faBagShopping'
import { useCartContext } from "../../Context/CartContext"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function CartWidget() {

  const {cartList} = useCartContext()
  const [cantidad,setCantidad] = useState(0)

  useEffect(()=>{
    let cant = 0
    cartList.forEach(prod => {
      cant +=prod.cantidad
    });
    setCantidad(cant)
  },[cartList])
  return (
      <>
      <Link to='/Cart'>
        <div>
          <button className='cartButton'><FontAwesomeIcon icon={faBagShopping}/></button>
          {cantidad>0 ?
          <p className="num">{cantidad}</p>
          :
          <p></p>
          }
        </div>
      </Link>
      </>
    
  )
}

export default CartWidget