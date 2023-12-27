import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemListcontainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListcontainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/CartWidget/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/category/:categoria' element={<ItemListContainer/>} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App