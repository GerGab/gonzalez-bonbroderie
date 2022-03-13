import "./Item.css"
import ItemCount from "../ItemCount/ItemCount.jsx"

function Item({item}) {
    const {nombre,precio,stock,image} = item;
  return (
    <div className="Item">
        <h3>{nombre}</h3>
        <img src={image} alt={nombre} />
        <h4>{`$${precio}`}</h4>
        <ItemCount stock={stock} nombre={nombre}/>
    </div>
  )
}

export default Item