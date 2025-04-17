import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='errorPage'>
        <h2>⚠️ Ha ocurrido un error</h2>
        <p>Parece que la página que estás buscando no existe o fue movida. ☹️</p>
        <Link to='/'>Ir a la página principal</Link>
    </div>
  )
}

export default ErrorPage