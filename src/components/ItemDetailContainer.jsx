import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] = useState(null)
    const {productId} = useParams()

    //FIREBASE
    useEffect(()=> {
        console.log(productId)
      setLoading(true)
      //conectar con nuestra collection
      const productCollection = collection(db, "productos")
      //crear una referencia
      const docRef= doc(productCollection, productId)
      //forma corta
      //const docRef= doc(db, "productos", id)
      //traer documento
      getDoc(docRef)
      .then((res)=> {
       if(res.exists()){
        setProduct({id:res.id, ...res.data()})
       }else{
        setInvalid(true)
       }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])

    //Usar la misma promesa que itemListContainer

    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((res)=> setProduct(res.find((item)=> item.id === id)))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[])


//si tengo los ids tipo number
    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((res)=> setProduct(res.find((item)=> item.id === Number(id))))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[])

    //crear una funcion que busque un item en particular

    // useEffect(()=>{
    //     setLoading(true)
    //     getOneProduct(id)
    //     .then((res=> setProduct(res)))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[])


    if(invalid){
      return<div>
        <h2>Producto no existe!</h2>
      </div>
    }

  return (
    <div>
        {loading ? <LoaderComponent/> :<ItemDetail product={product}/>}
    </div>
  )
}

export default ItemDetailContainer