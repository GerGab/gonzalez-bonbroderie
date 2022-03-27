import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import {getFetch} from "../helpers/fetchProd"
import MiniItemList from "../components/MiniItemList/MiniItemList"
import ItemDetail from "../components/ItemDetail/ItemDetail"

function ItemDetailContainer() {

    // fetch de productos para construcción de ItemDetail
    const [loading,setLoading] = useState(true)
    const [productos,setProductos] = useState([])
    const [producto,setProducto] = useState([])
    const [similarProd,setSimilar] = useState([])
    const {id,categoria} = useParams()

    useEffect(()=>{
        getFetch.then( function (resp) {
            setProductos(resp)
            setProducto(...resp.filter(prod => prod.id === id));
            setSimilar(resp.filter(prod => prod.categoria === categoria))
        }
        ).catch(
          err => console.log(err)
        ).finally(()=>{
            setLoading(false)
            }
        )
    
    },[])
    useEffect(()=>{
        productos.length>0 &&
            setProducto(...productos.filter(prod => prod.id === id));
            setSimilar(productos.filter(prod => prod.categoria === categoria));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },[id,categoria])   

  return (
    <>
    {loading ?
        <div className="loading">
            <img  src="../images/FlorCargando.gif" alt="" />
        </div>
        :
        <div className="ItemDetailContainer">
            <ItemDetail producto = {producto}/>
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