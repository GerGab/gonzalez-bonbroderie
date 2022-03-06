import React, { useState } from 'react'
import "./ItemCount.css"

function ItemCount() {

    const stock = 10;
    const [count,setCount] = useState(1)
    const modCount = (value) =>{
        value>0 ? 
            count<stock && setCount(count+value)
            :
            count>1 && setCount(count+value);
        }
    const agregarCarrito = ()=>{
        alert(`Se agrego al carrito ${count}`)
    }

  return (
    <div className='itemCount'>
        <div className='counter'>
            <button onClick={()=>modCount(-1)}> <p>-</p> </button>
            <p>{count}</p>
            <button onClick={()=>modCount(1)}> <p>+</p> </button>
        </div>
        <button onClick={agregarCarrito}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount