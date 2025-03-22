import React from "react"
import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="cardStyle">
            <img src={product.img} alt="" />
            <h1>{product.name}</h1>
            <h4>{product.category}</h4>
            <button><Link to={`/productos/${product.id}`}>Ver mas</Link></button> 
        </div>
    )
}

export default Item