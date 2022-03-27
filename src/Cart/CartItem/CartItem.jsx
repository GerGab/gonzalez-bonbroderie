import './CartItem.css'

function Counter ({count,increase,decrease}){
    return(
        <div className='cartCounter'>
            <button onClick={(item)=>decrease(item)}><p>-</p></button>
            <h3>{count}</h3>
            <button onClick={(item)=>increase(item)}><p>+</p></button>
        </div>
    )
}


function CartItem({item,increase,decrease,eliminar}) {

    const {image,nombre,cantidad,precio} = item

  return (
      
    <div className='CartItem'>
        <img src={image} alt="" />
        <div className='itemInfo'>
            <h3>{nombre}</h3>
            <button onClick={()=>eliminar(item)}>retirar del carrito</button>
        </div>
        <Counter count={cantidad} increase={()=>increase(item)} decrease={()=>decrease(item)}/>
        <div><h2>{`$${precio*cantidad}`}</h2></div>

    </div>
  )
}

export default CartItem