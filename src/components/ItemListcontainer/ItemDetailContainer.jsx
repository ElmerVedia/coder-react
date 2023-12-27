import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { askDataId } from '../../utils/checkData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        askDataId(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])
    return (
        <>
            {item && <ItemDetail item={item}/>}
        </>
    )
}

export default ItemDetailContainer