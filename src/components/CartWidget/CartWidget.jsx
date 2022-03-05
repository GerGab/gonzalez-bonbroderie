import "./CartWidget.css"
import {} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons/faBagShopping'


function CartWidget({cantidad}) {
  return (
      <>
        <button className='cartButton'><FontAwesomeIcon icon={faBagShopping}/></button>
        <i className="num">{cantidad}</i>
      </>
    
  )
}

export default CartWidget