import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { askData } from '../../utils/checkData'


const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])
  const { categoria } = useParams ()

  useEffect(() => {
    askData()
      .then((res) => {
        if (categoria){
          setProductos(res.filter((prod) => prod.categoria === categoria))
        }else {setProductos(res)}
      })
  },[categoria])

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer