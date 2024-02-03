import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection(db, "licor")
        getDocs(itemCollection).then((querysnapshot) => {
            const items = querysnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }))
            setItem(items);
        })
    }, [])
    return <ItemDetail items={item}/>
}

export default ItemDetailContainer