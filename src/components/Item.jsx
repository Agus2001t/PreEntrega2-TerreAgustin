import React from "react"
import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="cardStyle">
            <img src={product.img} alt="" />
            <h1>{product.name}</h1>
            <h4>{product.category}</h4>
            <Link to={`/product/${product.id}`}>Ver más</Link>
        </div>
    )
}

export default Item