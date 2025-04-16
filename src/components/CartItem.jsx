import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({producto}) => {
    const {removeItem} = useCart()

  return (
    <div>
        <img src={producto.id} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p></p>
        <p></p>
        <button></button>
    </div>
  )
}

export default CartItem