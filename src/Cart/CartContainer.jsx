import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { useCartContext } from '../Context/CartContext'
import CartAux from './CartAux/CartAux'
import './CartContainer.css'
import CartItem from './CartItem/CartItem'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useNavigate } from "react-router-dom";
import { useUserContext } from '../Context/UserContext'




function CartContainer() {

  
  let navigate = useNavigate();     // utilizado para la navegación a pagina principal

  const MySwal = withReactContent(Swal) // utilizado para sweetAlert

  const {cartList,reducirCant,aumentarCant,removeItem,sumTotal,cleanCart} = useCartContext()

  const {usuario} = useUserContext()

  const increase = (item)=>{
    aumentarCant({...item})
  }

  const decrease = (item) =>{
    reducirCant({...item})
  }

  const eliminar = (item) =>{
      removeItem(item)
  }

  const pedirLoggeo = () =>{
    MySwal.fire({
      title: <strong>Perdona, ¿quien eres?</strong>,
      html: <i>Por favor inicia sesión o crea una cuenta para poder completar tu compra</i>,
      icon: 'info'
    }).then(()=>navigate("/User"))
  }

  const comprar = async () =>{
    
    let order = {comprador:usuario,items:cartList,total:sumTotal,fecha:{UTC:new Date(Date.now()).toLocaleString(),Timestamp:Date.now()}}

    const db = getFirestore()

    // guardar orden de compra en DB
    const queryOrders = collection (db,'orders')
    addDoc(queryOrders,order).catch(err => console.log(err))
    
    // corregir el stock a nuevas cantidades
    const queryItems = collection (db,"items")
    const queryStockAct = await query(queryItems, where(documentId(),"in",cartList.map(_item => _item.id)))
    const batch = writeBatch(db)
    await getDocs(queryStockAct)
    .then(resp => resp.docs.forEach(resp_item => batch.update(resp_item.ref,
          {stock: resp_item.data().stock - cartList.find(item => item.id === resp_item.id).cantidad})))
    .catch(err => console.log(err))    
    batch.commit()
    MySwal.fire({
      title: <strong>Gracias por tu compra!</strong>,
      html: <i>Te invitamos a seguir comprando! Podrás encontrar el numero de seguimiento en tu perfil.</i>,
      icon: 'success'
    }).then(
      cleanCart(),
      ()=>navigate("/")
    )  
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
                  <button onClick={usuario? comprar:pedirLoggeo}>iniciar compra</button>
                </div>
              </div>
            </div>
          </>
      }
        
    </div>
  )
}

export default CartContainer