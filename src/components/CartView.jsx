import React from 'react'
import { useCart} from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'


const CartView = () => {
    const {cart, clearCart, getTotal} = useCart()

  return (
    <div>
        <h2>Carrito 🛒</h2>

        <div className='estructuraCart'>
            {cart.map((producto) => <CartItem key={producto.id} producto={producto}/>)}
            <p>Total a pagar: ${getTotal()},00</p>
        </div>

        <div>
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to="/">Seguir Comprando</Link>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>

    </div>
  )
}

export default CartView