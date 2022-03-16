import MiniItem from '../MiniItem/MiniItem'
import './MiniItemList.css'

function MiniItemList({productos}) {
  return (
    <div className='miniItemList'>
        {productos.map((_producto) => 
            <div key={_producto.id} >
                <MiniItem item={_producto}/>
            </div>)}
    </div>
  )
}

export default MiniItemList