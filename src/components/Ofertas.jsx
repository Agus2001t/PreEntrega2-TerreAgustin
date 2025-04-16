import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'
import ItemList from './ItemList'

const Ofertas = (props) => {
  const [ofertas, setOfertas] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const productosRef = collection(db, "productos")
    const ofertasQuery = query(productosRef, where("ofertas", "==", true))

    getDocs(ofertasQuery)
      .then((res) => {
        const ofertasData = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setOfertas(ofertasData)
      })
      .catch((error) => console.log("Error al cargar ofertas:", error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main>
      <div>
        <h1 className="greeting">{props.greeting}</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : ofertas.length === 0 ? (
          <p>No hay ofertas</p>
        ) : (
          <ItemList data={ofertas} />
        )}
      </div>
    </main>
  )
}

export default Ofertas
