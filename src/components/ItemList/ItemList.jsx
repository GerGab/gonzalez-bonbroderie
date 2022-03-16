import Item from "../Item/Item.jsx"
import "./ItemList.css"

function ItemList({productos,categoria}) {
  return (
    <div className="ItemList">
      <div className="divLine"></div>
      <h2>{categoria}</h2>
        {productos.map((_producto) => 
            <div key={_producto.id} >
            <Item item={_producto}></Item>
            </div>)}
    </div>
    
  )
}

export default ItemList