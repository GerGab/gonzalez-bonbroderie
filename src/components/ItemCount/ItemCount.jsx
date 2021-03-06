import React, { useState } from 'react'
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import "./ItemCount.css"

function ItemCount({stock,inCart,agregarCarrito,id}) {

    const [count,setCount] = useState(1)
   
    // funcionabilidad de los botones + y -
    const sumCount = () =>{
        if (count<stock ){
            setCount(count + 1);
        }
    }
    const restCount = () =>{
        if (count>1 ){
            setCount(count - 1);
        }
    }

    //Intercambiabilidad sin Stock
    const  SinStock = ()=>{
        return(
            <div className='counter'>
                Sin Stock
            </div>
        )
    }

    const IrCarrito = ()=>{
        return(
            <div className='seguirComprando'>
                <Link to='/Cart'>
                    <button>Iniciar Compra</button>
                </Link>
                <Link to='/'>
                    <button>Seguir comprando</button>
                </Link>
            </div>
            )
    }
    const AgregarCarrito = ()=>{
        return(
            <>
                <div className='counter'>
                        
                    <button onClick={restCount}> <p>-</p> </button>
                    <p>{count}</p>
                    <button onClick={sumCount}> <p>+</p> </button>
                </div>
                <button onClick={()=>agregarCarrito(count)}>Agregar al Carrito</button>
            </>
        )
    }
    useEffect(()=>{
        setCount(1);
    },[stock,inCart,id])

  return (
    
    <>
        {inCart ? 
        <IrCarrito/>
        :        
        <div className='itemCount'>

            {stock>0 ? 
            <AgregarCarrito/>
            :
            <SinStock/>
            }   
        </div>
        }           
    </>
  )
}

export default ItemCount