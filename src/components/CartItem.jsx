import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({producto}) => {
    const {removeItem} = useCart()

  return (
    <div className='cartItem'>
        <img src={producto.img} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p>Cantidad: {producto.quantity}</p>
        <p>$ {producto.price},00</p>
        <button onClick={()=>removeItem(producto.id)}>X</button>
    </div>
  )
}

export default CartItem