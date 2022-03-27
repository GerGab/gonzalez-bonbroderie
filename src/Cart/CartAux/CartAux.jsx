import './CartAux.css'
import { Link} from 'react-router-dom'

function CartAux() {

  return (
    <div className='cartAux'>
        <h3>Oh no! Tu Carrito Esta Vacio</h3>
        <img src="https://cdn-icons-png.flaticon.com/512/102/102661.png" alt="" />
        <h4>vayamos al shop a buscar lo que necesitas!!!</h4>
        <Link to="/">
            <button>Seguir Explorando</button>
        </Link>
    </div>
  )
}

export default CartAux