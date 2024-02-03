import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loader from '../Rendering/Loader'


const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore()

      const itemCollection = collection(db, "licor")
      try{
        const snapshot = await getDocs(itemCollection)
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setItems(docs)
        setLoading(false)
      }catch(error) {
        console.log("Error al obtener informacion", error);
      }
    }
    fetchData()
  }, [])

  const filter = items.filter((item) => item.categoria == categoryId);
  if (loading === true) {
    return <Loader/>
  }else{
    return (
      <>
        {categoryId? <ItemList items={filter} /> : <ItemList items={items}/>}
      </>
    )
  }
}

export default ItemListContainer