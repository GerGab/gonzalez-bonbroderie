import './MiniItem.css'
import { Link } from "react-router-dom";
function MiniItem({item}) {

    const {nombre,precio,image,id,categoria} = item;

  return (
    <div className="miniItem">
          
          <Link to={`/detalle/${categoria}&${id}`}>
            <img src={image} alt={nombre} />
          </Link>
          <h4>{nombre}</h4>
          <h4>{`$${precio}`}</h4>
    </div>
  )
}

export default MiniItem