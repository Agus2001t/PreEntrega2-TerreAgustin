import React, {useContext, useState} from 'react'
import ItemCounter from './ItemCounter';
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

const ItemDetail = ({product}) => {
    const {addItem} = useContext(CartContext)
    const [buyed, setBuyed] = useState(false)


    const onAdd = (quantity) => {
        addItem(product, quantity)
        setBuyed(true)

        const unitLabel = quantity === 1 ? 'unidad' : 'unidades';
        Swal.fire({
            title: 'Producto agregado 🛒',
            text: `Agregaste ${quantity} ${unitLabel}`,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        };
    
    

    return (
        <div className='productDetail'>
            <img src={product.img} alt={product.name} />
            <h1>{product.name}</h1>
            <h4>{product.category}</h4>
            <p>{product.description}</p>
            <p>${product.price},00</p>
            <p>Stock: {product.stock}</p>
            <Link to='/'>Volver</Link>
            {buyed ? (
                <div>
                    <Link to='/'>Seguir Comprando</Link>
                    <Link to='/cart'>Ir al Carrito</Link>
                </div>
            ) : <ItemCounter stock={product.stock} onAdd={onAdd}/>}  
        </div>
    )
}

export default ItemDetail
