import { useEffect } from "react"
import { useState } from "react"
import "./ItemListContainer.css"
import ItemList from "../components/ItemList/ItemList"
import { collection, getDocs, getFirestore} from 'firebase/firestore'
function ItemListContainer() {

  const [loading,setLoading] = useState(true)
  const [productos,setProductos] = useState([])
  const [categorias,setCategorias] = useState([])

  // Filtra los productos para obtener las categorias sin duplicados
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  useEffect(()=>{

    const db = getFirestore()
    const queryCollection = collection(db,'items')
    getDocs(queryCollection)
    .then( function (resp) {
      setProductos( resp.docs.map(producto=>({id:producto.id, ...producto.data()})))
      let allCat = []
      resp.docs.forEach(prod => {
        allCat.push(prod.data().categoria);
      });
      setCategorias(allCat.filter(onlyUnique))
      
    })
    .catch(
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