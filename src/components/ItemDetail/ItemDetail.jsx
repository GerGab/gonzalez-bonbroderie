import React, { useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../Context/CartContext'
import './ItemDetail.css'

function ItemDetail({producto}) {

    const {addToCart,searchProduct,productInCart} = useCartContext()

    //funcion para agregar al carrito la cantidad del itemCount
    const agregarCarrito = (count)=>{
        addToCart({...producto, cantidad: count})
        }

    useEffect(()=>{
        searchProduct(producto)
    })

  return (
    <div className="content">
                <div className="products">
                    <div className="mainItem">
                        <img className="imagen" src={producto.image} alt="" />
                    </div>
                </div>
                <div className="productData">
                    <div className="title">
                        <h2>{producto.nombre}</h2>
                        <h2>{`$ ${producto.precio}`}</h2>
                    </div>
                    <div className="horLine"></div>
                    <div className="descrip">
                        <h3>Descripción</h3>
                        <p>{producto.descripcion}</p>
                    </div>
                    <div className="horLine"></div>
                    <div className="cartInfo">

                        <ItemCount 
                            stock={producto.stock} 
                            agregarCarrito={agregarCarrito}
                            inCart ={productInCart}
                            id={producto.id}/>
                        <h3>Medios de Envío</h3>
                        <div className="mailing">
                            <input type="text" placeholder="Código Postal" />
                            <button>Calcular</button>
                        </div>
                    </div>           
                </div>
            </div>
  )
}

export default ItemDetail