import React, { useEffect, useState } from 'react'
import { getProducts } from '../mock/AsyncData'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const {productId} = useParams()


useEffect(()=>{
    setLoading(true)
    getProducts()
        .then((res) => setProduct(res.find((item) => item.id === productId)))
        .catch((error)=> console.log(error))
        .finally(() => setLoading(false))
},[productId])



    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer
