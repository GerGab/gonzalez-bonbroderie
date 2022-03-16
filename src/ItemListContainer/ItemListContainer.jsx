import { useEffect } from "react"
import { useState } from "react"
import "./ItemListContainer.css"
import ItemList from "../components/ItemList/ItemList"
import {getFetch} from "../helpers/fetchProd"

function ItemListContainer() {

  const [loading,setLoading] = useState(true)
  const [productos,setProductos] = useState([])
  const [categorias,setCategorias] = useState([])

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  useEffect(()=>{
    getFetch.then( function (resp){
      setProductos(resp)
      let allCat = []
      resp.forEach(prod => {
        allCat.push(prod.categoria);
      });
      setCategorias(allCat.filter(onlyUnique))
    }
      
    ).catch(
      err => console.log(err)
    ).finally(()=>
      setLoading(false)
    )
  },[])

  return (
    <div className="ItemListContainer">
      {loading ?
      <img className="loading" src="./images/FlorCargando.gif" alt="" />
      :
      categorias.map((cat) =>
        <div key={cat}>
          <ItemList productos={productos.filter(prod => prod.categoria === cat)} categoria={cat}/>  
        </div>)
      }
    </div>
  )
}

export default ItemListContainer