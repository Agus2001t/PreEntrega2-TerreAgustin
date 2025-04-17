import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='emptyCart'>
        <h1>Tu carrito está vacío 🫤</h1>
        <Link to='/'>Ir a la página principal</Link>
    </div>
  )
}

export default EmptyCart