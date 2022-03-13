import React, { useState } from 'react'
import { useEffect } from "react"
import "./ItemCount.css"

function ItemCount({stock,nombre}) {

    const [count,setCount] = useState(1)
    const [_stock,setStock] = useState(stock)
    const sumCount = () =>{
        if (count<_stock){
            setCount(count + 1);
        }
    }
    const restCount = () =>{
        if (count>0){
            setCount(count - 1);
        }
    }
    const agregarCarrito = ()=>{
        alert(`Se agregaron al carrito ${count} ${nombre}`)
        setStock(_stock - count);
        }
    
    useEffect(()=>{
        _stock>0 ? setCount(1):setCount(0);
    },[_stock])
    


  return (
    <div className='itemCount'>
        {_stock>0 ? 
        <>
            <div className='counter'>
                    
                <button onClick={restCount}> <p>-</p> </button>
                <p>{count}</p>
                <button onClick={sumCount}> <p>+</p> </button>
            </div>
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
        </>
        :
        <>
            <div className='counter'>
                Sin Stock
            </div>
        </>
        }   
    </div>
  )
}

export default ItemCount