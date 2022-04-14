import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import './UserInfo.css'

function UserInfo({usuario, cerrarSesion}) {

  const [queMostrar,setQueMostar] = useState(false)
  const [orders,setOrders] = useState([])

  const MiCuenta = ()=>{
    return(
      <div>
        <table className='datos'>
          <tr>
            <td>Nombre:</td>
            <td>{usuario.nombre}</td>
          </tr>
          <tr>
            <td>Apellido:</td>
            <td>{usuario.apellido}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{usuario.email}</td>
          </tr>
          <tr>
            <td>Telefono:</td>
            <td>{usuario.tel}</td>
          </tr>
          <tr>
            <td>Dirección:</td>
            <td>{usuario.dir}</td>
          </tr>
        </table> 
      </div>
    )
  }
  
  const MisCompras = ()=>{
    return(
      <div>
        <h2>últimas compras</h2>
        <table>
          <thead>
            <tr>
              <th>n° Pedido</th>
              <th>Fecha</th>
              <th>Enviar a</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {
            orders.map((order)=>
               <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.data.fecha.UTC}</td>
                <td>{order.data.comprador.dir}</td>
                <td>{`$${order.data.total}`}</td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }

  useEffect (()=>{
    const db = getFirestore()
    const queryOrders = collection (db,'orders')
    const queryCompras = query(queryOrders,where('comprador','==',usuario))
    getDocs(queryCompras)
      .then(
        resp => {
          setOrders(resp.docs.map(order => ({ id:order.id, data: order.data()})))
        }
      )
  },[queMostrar,usuario])


  return (
    <div className='userInfo'>
      <h2>{`Hola ${usuario.nombre}`}</h2>
      <div className='selector'>
        <button onClick={()=>setQueMostar(false)} className={!queMostrar? "sButtonActive":"sButton"}>Mi Cuenta</button>
        <button onClick={()=>setQueMostar(true)} className={queMostrar? "sButtonActive":"sButton"}>Mis compras</button>
        <button className='sButton' onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>
      <div className='queMostrar'>
        {
          queMostrar?
            <MisCompras/>
          :
            <MiCuenta/>
        }
      </div>
    </div>
  )
}

export default UserInfo