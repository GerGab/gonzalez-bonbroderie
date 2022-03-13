import { useEffect } from "react"
import { useState } from "react"
import "./ItemListContainer.css"
import ItemList from "../components/ItemList/ItemList"
import {getFetch} from "../helpers/fetchProd"
function ItemListContainer() {

  const [loading,setLoading] = useState(true)
  const [productos,setProductos] = useState([])

  useEffect(()=>{
    getFetch.then(
      resp => setProductos(resp)
    ).catch(
      err => console.log(err)
    ).finally(()=>
      setLoading(false)
    )
  },[])

  return (
    <div className="ItemListContainer">
      {console.log(productos)}
      {loading ?
      <img src="./images/FlorCargando.gif" alt="" />
      :
      <ItemList productos={productos}></ItemList>}
    </div>
  )
}

export default ItemListContainer