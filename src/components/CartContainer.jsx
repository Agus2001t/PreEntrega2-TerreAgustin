import React from 'react'
import { useCart } from '../context/CartContext'
import CartView from './CartView'
import EmptyCart from './EmptyCart'

const CartContainer = (props) => {
    const {cart} = useCart()

  return (
    <div>
        <h1 className='greeting'>{props.greeting}</h1>
        {cart.length ? <CartView/> : <EmptyCart/>}
    </div>
  )
}

export default CartContainer