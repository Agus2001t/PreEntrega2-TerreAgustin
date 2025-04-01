import { useEffect, useState } from "react";
/*import { getProducts } from "../mock/AsyncData";*/
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../service/firebase'


const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

//Firebase

useEffect(() => {
    setLoading(true)

    const productCollection = collection(db, "muebles")

    getDocs(productCollection)
    .then((res) => {
        const list = res.docs.map((doc) => {
            return{
                id:doc.id,
                ...doc.data()
            }
        })
    console.log(list), setData(list)})
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
},[])



/*useEffect(() => {
    setLoading(true)
    getProducts()
        .then ((res) => {
            if(categoryId) {
                setData(res.filter((item) => item.category === categoryId))
            }else {
                setData(res)
            }
            
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
}, [categoryId])*/


    return (
        <main>
            <div>
                <h1 className="greeting">{props.greeting}{categoryId}</h1>
                {loading ? <p>Cargando...</p> : <ItemList data={data} />}
            </div>
            
        </main>
    )


}

export default ItemListContainer;
