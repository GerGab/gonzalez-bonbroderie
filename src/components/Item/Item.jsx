import { Link } from "react-router-dom";
import "./Item.css"

function Item({item}) {
    const {nombre,precio,image,id,categoria} = item;

  return (

      <div className="Item">
          
          <Link to={`/detalle/${categoria}&${id}`}>
            <img src={image} alt={nombre} />
          </Link>
          <h4>{nombre}</h4>
          <h3>{`$${precio}`}</h3>
      </div>
  )
}

export default Item