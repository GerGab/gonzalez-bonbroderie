import ItemCount from "../components/ItemCount/ItemCount"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import {getFetch} from "../helpers/fetchProd"
import MiniItemList from "../components/MiniItemList/MiniItemList"

function ItemDetailContainer() {

    // fetch de productos para construcción de ItemDetail
    const [loading,setLoading] = useState(true)
    const [productos,setProductos] = useState([])
    const [producto,setProducto] = useState([])
    const [similarProd,setSimilar] = useState([])
    const {id,categoria} = useParams()
    //funcionalidad de ItemCount para asignar cantidades al cart
    //const [_stock,setStock] = useState(0)
    const [_InCart,setInCart] = useState(0)

    //funcion para agregar al carrito la cantidad del itemCount
    const agregarCarrito = ()=>{
        
        //setStock(_stock - count);
        setInCart(1)
        }


    useEffect(()=>{
        getFetch.then( function (resp) {
            setProductos(resp)
            setProducto(resp.filter(prod => prod.id === id));
            setSimilar(resp.filter(prod => prod.categoria === categoria))
        }
        ).catch(
          err => console.log(err)
        ).finally(()=>
          setLoading(false)
        )
    },[])
    useEffect(()=>{
        productos.length>0 &&
            setProducto(productos.filter(prod => prod.id === id));
            setSimilar(productos.filter(prod => prod.categoria === categoria));
      },[id,categoria])

  return (
    <>
    {loading ?
        <div className="loading">
            <img  src="../images/FlorCargando.gif" alt="" />
        </div>
        :
        <div className="ItemDetailContainer">
            <div className="content">
                <div className="products">
                    <div className="mainItem">
                        <img className="imagen" src={producto[0].image} alt="" />
                    </div>
                </div>
                <div className="productData">
                    <div className="title">
                        <h2>{producto[0].nombre}</h2>
                        <h2>{`$ ${producto[0].precio}`}</h2>
                    </div>
                    <div className="horLine"></div>
                    <div className="descrip">
                        <h3>Descripción</h3>
                        <p>{producto[0].descripcion}</p>
                    </div>
                    <div className="horLine"></div>
                    <div className="cartInfo">
                        <ItemCount 
                            stock={producto[0].stock} 
                            agregarCarrito={agregarCarrito}
                            inCart ={_InCart}
                            id={producto[0].id}/>
                        <h3>Medios de Envío</h3>
                        <div className="mailing">
                            <input type="text" placeholder="Código Postal" />
                            <button>Calcular</button>
                        </div>
                    </div>           
                </div>
            </div>
            <div className="similares">
                <h3>Otros Productos Similares</h3>
                <MiniItemList productos={similarProd}/>
            </div>
        </div>
    }
    </>
  )
}

export default ItemDetailContainer