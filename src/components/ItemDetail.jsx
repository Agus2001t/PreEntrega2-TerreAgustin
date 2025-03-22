import React from 'react'
import ItemCounter from './ItemCounter';

const ItemDetail = ({product}) => {
    const onAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} unidades`)
    }

    return (
        <div className='productDetail'>
            <img src={product.img} alt="Imagen" />
            <h1>{product.name}</h1>
            <h4>{product.category}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <ItemCounter stock={product.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
