import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import MiniItemList from "../components/MiniItemList/MiniItemList"
import ItemDetail from "../components/ItemDetail/ItemDetail"
import { collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
//import { productos } from "../helpers/productos"      utilizado solo para cargar automaticamente los items en firebase, uso de addDoc

function ItemDetailContainer() {

    // fetch de productos para construcción de ItemDetail
    const [loading,setLoading] = useState(true)
    //const [productos,setProductos] = useState([])
    const [producto,setProducto] = useState([])
    const [similarProd,setSimilar] = useState([])
    const {id,categoria} = useParams()

    useEffect(()=>{

        const db = getFirestore()
        const queryDoc = doc(db,'items',id)
        const queryCollection = collection(db,'items')
        //productos.forEach(item =>{ addDoc(queryCollection,item)}) //utilizada solo para cargar los items en firebase
        const queryFilter = query(queryCollection,where('categoria','==',categoria))
        async function queries(){
            let categorias = await getDocs(queryFilter)
            setSimilar(categorias.docs.map(producto=>({id:producto.id, ...producto.data()})))
            let _producto = await getDoc(queryDoc)
            setProducto({ id:_producto.id ,..._producto.data()})
        }
        queries()
        .catch(
          err => console.log(err)
        ).finally(()=>{
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setLoading(false)
            }
        )
    },[categoria,id])

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