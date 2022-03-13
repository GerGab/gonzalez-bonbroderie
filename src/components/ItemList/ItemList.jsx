import Item from "../Item/Item.jsx"
import "./ItemList.css"

function ItemList({productos}) {
  return (
    <div className="ItemList">
        {productos.map((_producto) => <div key={_producto.id} >
            <Item item={_producto}></Item>
            </div>)}
    
    </div>
  )
}

export default ItemList