import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../service/firebase';

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productCollection = collection(db, "productos");

    getDocs(productCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        
        const filteredList = categoryId
          ? list.filter(item => item.category === categoryId)
          : list;

        setData(filteredList);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]); 

  return (
    <main>
      <div>
        <h1 className="greeting">{props.greeting}{categoryId && ` ${categoryId}`}</h1>
        {loading ? <p>Cargando...</p> : <ItemList data={data} />}
      </div>
    </main>
  );
};

export default ItemListContainer;
