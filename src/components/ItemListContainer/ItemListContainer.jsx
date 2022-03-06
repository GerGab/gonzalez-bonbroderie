import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.css"

function ItemListContainer({gretting}) {
  return (
    <div className="ItemListContainer">
      {/*<h1 style={{marginTop:"50vh",textAlign:"center"}}>{gretting}</h1>*/}
      <ItemCount/>
    </div>
  )
}

export default ItemListContainer