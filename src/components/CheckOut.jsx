import React, { useEffect, useState } from 'react'
import {useCart} from '../context/CartContext'
import { collection, addDoc, serverTimestamp, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import Swal from 'sweetalert2'


const CheckOut = () => {
  const [buyer, setBuyer] = useState({})
  const [validateMail, setValidateMail] = useState('')
  const [orderId, setOrderId] = useState('')
  const { cart, clearCart, getTotal } = useCart()

  useEffect(() => {
    if (orderId) {
      Swal.fire({
        title: 'Compra realizada!',
        text: `Su ID de compra es ${orderId}`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  }, [orderId])

  const buyerData = (e) => {
    setBuyer(
      {
        ...buyer, [e.target.name]: e.target.value
      }
    )
  }

  const finalizarCompra = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.email) {
      Swal.fire('⚠️ Todos los campos son requeridos')
    } else if (buyer.email !== validateMail) {
      Swal.fire('⚠️ Los correos no coinciden')
    } else {
      let order = {
        comprador: buyer,
        compra: cart,
        total: getTotal(),
        date: serverTimestamp(),
      }

      const ventas = collection(db, "orders")
      addDoc(ventas, order)
        .then((res) => {
          cart.forEach((item) => {
            const docRef = doc(db, "productos", item.id)
            getDoc(docRef)
            .then((dbDoc) => {
              if (dbDoc.exists()) {
                const currentStock = dbDoc.data().stock || 0
                updateDoc(docRef, { stock: currentStock - item.quantity })
              } else {
                console.warn(`El producto con ID ${item.id} no existe en Firestore.`)
              }
            })
            .catch((error) => console.error('Error al obtener producto:', error))
          })
          setOrderId(res.id)
          clearCart()
        })
        .catch((error) => console.log(error))
    }
  }


  return (
    <div>
      {orderId ? (
        <h2>Gracias por su compra!</h2>
      ) : (
      <>
        <h1>Complete sus datos</h1>
        <form onSubmit={finalizarCompra}>
          <input className="form-control my-2" type="text" name="name" placeholder="Ingrese su nombre" onChange={buyerData} />
          <input className="form-control my-2" type="text" name="lastname" placeholder="Ingrese su apellido" onChange={buyerData} />
          <input className="form-control my-2" type="text" name="address" placeholder="Ingrese su dirección" onChange={buyerData} />
          <input className="form-control my-2" type="email" name="email" placeholder="Ingrese su correo electrónico" onChange={buyerData} />
          <input className="form-control my-2" type="email" placeholder="Confirme su correo electrónico" onChange={(e) => setValidateMail(e.target.value)} />
          <button className="btn btn-success mt-2" type="submit">Enviar</button>
        </form>
      </>
        )}
    </div>
  )
}

export default CheckOut